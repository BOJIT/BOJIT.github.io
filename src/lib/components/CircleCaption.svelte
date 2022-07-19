<!--
 * @file CircleCaption.svelte
 * @author James Bennion-Pedley
 * @brief Side-by-side caption/circular photo which switches to stacked in mobile view
 * @date 19/07/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang='ts'>
    export let img: string;
    export let align: 'left' | 'right' = 'right';
    export let ratio = 2.2;
</script>


<div class="container" style:flex-direction={align === 'left' ? 'row-reverse' : 'row'}>
    <div style:flex={1 - 1/ratio}>
        <slot />
    </div>
    <div style:flex={1/ratio}>
        <img src={img} alt="Circle Caption"/>
    </div>
</div>


<style>
    .container {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }

    img {
        border-radius: 50%;
        padding: 1rem;
    }

    @media (max-width: 768px) {
        .container {
            display: block;
        }

        img {
            width: 60% !important;
        }
    }
</style>
