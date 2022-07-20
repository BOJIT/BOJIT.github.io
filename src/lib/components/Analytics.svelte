<!--
 * @file Analytics.svelte
 * @author James Bennion-Pedley
 * @brief Google Analytics Tag
 * @date 20/07/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<svelte:head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GDC4Q081QM"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-GDC4Q081QM');
    </script>
</svelte:head>
