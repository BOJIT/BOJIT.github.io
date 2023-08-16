<script lang="ts">
    // Components
    import { message } from "@bojit/svelte-components/core/Notification/Notification.svelte";
    import Content from "@bojit/svelte-components/layout/Content/Content.svelte";
    import CircleCaption from "@bojit/svelte-components/layout/CircleCaption/CircleCaption.svelte";
    import Button from "@bojit/svelte-components/smelte/components/Button/Button.svelte";
    import Dialog from "@bojit/svelte-components/smelte/components/Dialog/Dialog.svelte";
    import TextField from "@bojit/svelte-components/smelte/components/TextField/TextField.svelte";

    import Header from "$lib/components/Header.svelte";
    import NavButton from "$lib/components/NavButton.svelte";

    let active = false;
    let invalid_name = false;
    let invalid_email = false;
    let invalid_message = false;
    let formHandle: HTMLFormElement;

    let form = {
        name: null,
        reply_to: null,
        message: null,
    };

    function validate_email(email: string) {
        var re =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate_string(s: string) {
        return s !== null && s !== "";
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            if (active) {
                event.preventDefault();
                active = false;
            }
        } else if (event.key === "Enter") {
            if (active) {
                event.preventDefault();
                submitForm();
                active = false;
            }
        }
    }

    function submitForm() {
        let success = true;

        // Basic form validation
        if (!validate_string(form.name)) {
            invalid_name = true;
            success = false;
        }
        if (!validate_string(form.reply_to) || !validate_email(form.reply_to)) {
            invalid_email = true;
            success = false;
        }
        if (!validate_string(form.message)) {
            invalid_message = true;
            success = false;
        }

        if (!success) {
            return; // Don't close prompt
        }

        // Submit form
        active = false;

        // Construct an HTTP request (old style, kept for compatibility)
        var xhr = new XMLHttpRequest();
        xhr.open(formHandle.method, formHandle.action, true);
        xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

        // Send the collected data as JSON
        xhr.send(JSON.stringify(form));

        // Callback function
        xhr.onloadend = (response) => {
            if (response.target.status === 200) {
                // The form submission was successful
                message.push({
                    type: "info",
                    title: "Message Sent",
                    message: "Thanks for getting in touch!",
                    timeout: 5,
                });

                // Reset form
                form.name = "";
                form.reply_to = "";
                form.message = "";
            } else {
                message.push({
                    type: "error",
                    title: "Submission Error",
                    message: "something went wrong: please try again later",
                    timeout: 5,
                });
            }
        };
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
    <title>About Me</title>
</svelte:head>

<Header />

<Content>
    <h1>About Me</h1>
    <hr />
    <CircleCaption
        img={`${import.meta.env.VITE_IMAGE_BASE}/general/profile_small.JPG`}
    >
        Hi, I am James Bennion-Pedley. I'm an Electronics and Software Hobbyist,
        currently working as an embedded electronics engineer at <i>Dyson</i>.
        When not working on my various DIY creations I like to go hiking and
        play my various musical instruments! <br />This website shows a
        selection of projects I have been working on, along with a few tutorials
        as well. Many of the projects here are open-source, with source code and
        schematics available on <a href="https://github.com/BOJIT">GitHub</a>.

        <hr />
        <div class="buttons">
            <NavButton
                on:click={() => {
                    active = true;
                }}>CONTACT ME</NavButton
            >
            <NavButton
                href={`${
                    import.meta.env.VITE_FILE_BASE
                }/CV_James_Bennion-Pedley_02.09.19.pdf`}>DOWNLOAD CV</NavButton
            >
        </div>
    </CircleCaption>
    <hr />
</Content>

<Dialog bind:value={active}>
    <h5 slot="title">Contact Me</h5>

    <form
        action={import.meta.env.VITE_CONTACT_FORM}
        method="POST"
        bind:this={formHandle}
    >
        <div class="push" />

        <TextField
            label="Name"
            bind:value={form.name}
            error={invalid_name ? "Name cannot be empty" : ""}
            on:input={(e) => {
                invalid_name = !validate_string(e.target.value);
            }}
        />

        <TextField
            label="Email"
            bind:value={form.reply_to}
            error={invalid_email ? "Email address is invalid" : ""}
            type="email"
            on:input={(e) => {
                invalid_email = !validate_email(e.target.value);
            }}
        />

        <TextField
            label="Message"
            textarea
            bind:value={form.message}
            error={invalid_message ? "Message cannot be empty" : ""}
            on:input={(e) => {
                invalid_message = !validate_string(e.target.value);
            }}
        />
    </form>

    <div slot="actions">
        <Button
            text
            on:click={() => {
                submitForm();
            }}>Submit</Button
        >
        <Button text on:click={() => (active = false)}>Cancel</Button>
    </div>
</Dialog>

<style>
    h1 {
        text-align: center;
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        .buttons {
            display: block;
        }
    }

    /* Form Styling */
    .push {
        width: 30rem;
    }

    @media (max-width: 768px) {
        .push {
            width: 90vw;
        }
    }

    h5 {
        font-weight: 400;
        font-family: var(--font-body);
    }
</style>
