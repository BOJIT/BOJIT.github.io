---
title: Belvoir Bar
date: "16-04-2023"
published: true

tile:
  type: image
  image: /tiles/2023-04-16-Belvoir_Bar.PNG
---

<script>
    import { Gallery } from "@bojit/svelte-components/widgets";
</script>

I'm using Cloudflare for more and more of my projects these days. Their set of products is both powerful and refreshingly simple when compared to the likes of GCP/AWS. They also have a very generous free tier! They recently announced _Cloudflare KV_, a key-value database that runs on your CDN. It looked like a cool thing to have a play with, but I didn't really have a project in mind...

... Then a pressing need appeared. Some mates of mine are quite heavy beer drinkers. With the cost-of-living crisis looming, they decided to decrease their pub spending... by building a pub in their living room. Unfortunately, this puts the onus of stocking the bar and keeping a tab on us! Naturally I thought this would be an excellent excuse to create a technically over-complicated solution with a web-app.

![Belvoir_Bar-Location.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Belvoir_Bar-Location.JPG)

The basic premise was to create a simple website where we could quickly enter our bar tab and use it to pay back whoever stocked the bar. All of the payment is handled using [Monzo.me](https://monzo.me/), so really the only 'database' necessary is a stock list and some means of authenticating a user to edit a stock list. Cloudflare KV isn't really the right choice of database here, but for a low-stakes application like this, it was a good choice for easy configuration/not accidentally racking up a hefty cloud bill!

The app was designed in _SvelteKit_, with a simple mobile-friendly user interface for jotting up a stock list. A few app renders are shown below:

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Sign In Page',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Belvoir_Bar-Sign_In.PNG'
        },
        {
            type: 'image',
            caption: 'Stock Editor',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Belvoir_Bar-Stock.PNG'
        },
        {
            type: 'image',
            caption: 'Ordering Page',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Belvoir_Bar-User.PNG'
        },
    ]
} />

At the time of writing, there isn't much in the way of documentation covering the integration of Cloudflare and SvelteKit. Moreover, the Cloudflare KV API doesn't feature any authentication out of the box. We need to implement this ourselves in Cloudflare workers.

In general, I don't want to handle user accounts/authentication myself. Dealing with account spam, password resets, strict auth protocols, etc... seems like a lot of hassle. Thankfully, most people already have a user account with Apple/Facebook/Google/GitHub, and we can use these as Authentication providers with _OAuth 2.0_.

Here it is important to draw the line between _Authentication_ and _Identity_. _Identity_ is a means of associating our application data with a particular user. _Authentication_, on the other hand, is a means of checking whether a user is who they say they are. Our application handles the _identity_ part, but we offload the hard part of checking whether accounts are legitimate to a third-party. We also then don't have to worry about storing user passwords. All we store in our KV database is a unique user identifier (in my case, email address) and an object containing our application data.

This example app uses 'Sign In with Google', however the process is very similar for other _Oauth 2.0_ providers. We first need to 'sign in' our application with _Google Identity Services_. This service lets us sign in using Google's sign-in prompt and returns us an identity token (JWT). Note that the first connection will require some user interaction, but we can store the username locally and try to log in silently on future returns to the website. This web token is very short lived (typically 15 minutes). We save it as a cookie in our browser so that it will be sent with every request to our application.

Our application (running in Cloudflare workers) can then intercept every request and check if this cookie is present. The server can then independently check the validity of this identity token with the Google OAuth API, then conditionally respond to the request based on the users' permission level. An example request is depicted below:

![Belvoir_Bar-Diagram.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/Belvoir_Bar-Diagram.PNG)

Implementing conditional access in SvelteKit is relatively simple. There is a function called `handle` in `hooks.server.ts`. This function is called on every page fetch to Cloudflare. Below is some simple handler logic for my application. The application has a set of protected routes and a few routes that are user-dependent. The handler will redirect any missing/expired access tokens to the login page. The login page will then silently try to re-login, showing a prompt if Google Identity Services doesn't provide a new access token.

If the authentication is successful, the handler will then check our KV database for a user entry. If the route is protected and the user doesn't have the correct privileges, the request will return a `403` forbidden error. Note that these multiple consecutive requests are reasonably fast, as they are server to server, so are probably not leaving the local data center.

```javascript
const access_token = event.cookies.get('access-token');
if(!access_token) {
    throw redirect(302, "/login");
}

// Check user status
let profile = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + access_token
    }
});

if(profile.status !== 200)
    throw redirect(302, "/login");

// Add user information to view
event.locals.user = await profile.json();

// Get user entry from Cloudflare (uses KV internally)
let req = await event.fetch('/api/user', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + access_token
    }
});

if(req.status !== 200)
    throw error(403, "Authentication Failed!");
```

The application that this snippet is from is unfortunately not open-source (as it contains some details/information relating to some mates' houses). If you want to learn more about SvelteKit and Cloudflare KV, I'd recommend [this article](https://www.geekytidbits.com/playing-with-sveltekit-on-cloudflare-pages/).

---

You can try the app for yourself [here](https://beaver.bojit.org). Be warned, all you can do with it is pay a friend of mine for beer, so I don't recommend making any purchases!

> Footnote: Why is it called Beaver Bar? The bar used to be in a house on _Belvoir Road_ in Bristol. The name is a tribute to locals mispronouncing the road name...

<br>
