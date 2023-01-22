<!--
 * @file index.svelte
 * @author James Bennion-Pedley
 * @brief Legal T&Cs
 * @date 22/01/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang='ts'>
    /*-------------------------------- Imports -------------------------------*/

    import Content from "@bojit/svelte-components/layout/Content/Content.svelte";

    import Header from "$lib/components/Header.svelte";
</script>

<Header />

<Content>
    <h1>Policies, Disclaimers, etc...</h1>

<hr>

<p class="center">The boring bit...</p>

<p class="center">In the sad state of affairs that is the internet, I have to have one of these pages.</p>


## Warranty

The first thing I must state is that all *public* projects under the subdomain `bojit.org` are MIT licenced. They are hobby projects, and I am not a professional web developer. Any code you use from my [GitHub](https://github.com/BOJIT) is at your own risk, with NO warranty. As for the services hosted here...

## Security

I am not in the business of providing web services. I don't want your personal data, nor do I want the hassle of managing it. This site you are reading, along with the vast majority of other `*.bojit.org` services, is hosted as static pages. There is NO backend, and with the exception of my [Contact Form](https://bojit.org/about), no part of this site is dynamic.

I have a few web apps that do have a backend, in the form of [Cloudflare pages](https://developers.cloudflare.com/pages). For apps that have authentication, I don't handle it. I use someone else's OAuth server.

The only bit of information these services store is your *user ID*. This is a number that uniquely identifies your account, however I don't hold anything else. My authentication flow looks like this:

- When making a request to a secured endpoint, the client must attach a token that they have got from an OAuth 2.0 flow in the header.

- In a worker function, I then verify that token is valid using an API. I then use that ID to return some site-specific information to you.

- The client is entirely in charge of renewing that access token!

TL;DR: I don't want to store your personal data. I don't want the hassle, and I'm not interested in it.

## Cookies

This site has a grand total of *one* cookie. It's for Google Analytics. Other settings, such as light/dark theme, are stored in `localStorage`.

## Copyright

An important notice: the code that runs this site (and other subdomains) is MIT licensed. You can use it for whatever you like. The same does NOT apply for the assets on the site. I am still the copyright holder for images, graphics, and article content. If you want to use any of these items externally, ideally ask for permission. Failing that, please attribute the source, and link to the source page!

<br>
<p class="center">That's it. Have fun!<p>

<hr>

</Content>

<style>
    h1 {
        text-align: center;
    }

    .center {
        text-align: center;
    }
</style>
