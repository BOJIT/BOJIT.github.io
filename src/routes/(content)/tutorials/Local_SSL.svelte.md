---
title: SSL over a Local Network
date: "22-08-2021"
published: true

tile:
  type: link
  colour: "#efa2af"
---

<script>
    // import { CopyButton } from "@bojit/svelte-components/widgets";

    import "prismjs/prism.js";
    import "prismjs/components/prism-bash.js";
</script>

Lately I've been playing about with *Progressive Web Apps* and some of the [cool things you can do now entirely in a Browser](https://plotty.bojit.org). Most of my software experience is in the realm of embedded systems, where you don't really have to worry about maintaining a codebase for multiple platforms/architectures. The prospect of having to make/maintain a program for multiple operating systems intimidates me, so I'm pleased that I can now make and distribute a cross-platform app in pretty much the same way that I deploy my website.

The one trouble with Progressive Web Apps is that they can only be installed over a **secure connection**. This is quite sensible, and something I don't have to really worry about when deploying with *GitHub Pages*. However, the moment I want to play about with something that's not on the public internet, things become a bit more tricky.

I'm sure everyone reading this will have probably clicked through a secure connection warning or used self-signed certificates at some point. This doesn't work for Progressive Web Apps, and I found myself in the situation where I wanted to install a PWA that was hosted on a Raspberry Pi, but couldn't because my connection wasn't secure.

So what do you need to get a secure connection without a self-signed certificate? The answer is a *certificate authority*. There are far better places than here to learn how certificate authorities work, but the mile-high explanation is that they tell users that you are who you say you are when they connect to your server, helping prevent [Man-in-the-Middle Attacks](https://medium.com/@munteanu210/ssl-certificates-vs-man-in-the-middle-attacks-3fb7846fa5db).

My first thought to fix this issue was to set up my own [local certificate authority](https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/). This would work, but is not ideal, as I would have to add that Certificate Authority's root certificate to every device I wanted to use the PWA on, and I would have to host that Certificate Authority on any network I wanted to use the PWA on. Ideally I wanted to use a public Certificate Authority to sign certificates for a device on a private network. Hence this project.

![Local_SSL-Cover.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/Local_SSL-Cover.PNG)

[My project](https://github.com/BOJIT/local_ssl) works by taking advantage of something called a `DNS-01` challenge, and the only thing you need to use it is a domain name, proxied through *Cloudflare*. It uses a tool called `certbot` to generate a certificate through *LetsEncrypt* and the Cloudflare API to verify this certificate automatically. It's a neat way of getting out-of-the box SSL working on a Raspberry Pi or other Debian-based machines.

So how does it work? To get an understanding of what 'challenges' are and why they are used I would highly recommend reading [this article](https://letsencrypt.org/docs/challenge-types/) on *Letsencrypt's* site. The most common challenge; the `HTTP-01` challenge; wont work here, as the Raspberry Pi's webserver is not publicly accessible by LetsEncrypt's servers. Instead, what we give our Pi a public DNS record through *Cloudflare*, and then give the Pi an API token that it can use to edit this record. When we go to issue our certificate, we can automatically add our challenge token to our DNS record when requesting a certificate. This DNS record can then also be used for *Dynamic DNS* when connecting to the Pi.

To set up this yourself, all you need to do is create an `A` record on your domain through *Cloudflare's* DNS tools *(see image below)*. The address doesn't really matter, as The Pi will keep it updated as it's local IP address changes. I set mine to `0.0.0.0` initially.

![Local_SSL-DNS.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/Local_SSL-DNS.PNG)

Once this is done, you need to generate an [API Token](https://developers.cloudflare.com/api/tokens/create) and note it down along with your *zone identifier*.

Now pull up a shell on your Pi/other device: Navigate to your home directory and run the following set of commands.

```bash
cd ~
git clone https://github.com/BOJIT/local_ssl.git
cd local_ssl
chmod +x install.sh
sudo ./install.sh
```

This will run a fully automated install script. The script will prompt for four bits of information:

- `Record name (subdomain)` : this is the full domain name that you set up on *Cloudflare*. For me this might be something like `example.local.bojit.org`.

- `Cloudflare API Token` : The token you generated earlier.

- `Cloudflare Zone Identifier` : A string that uniquely identifies you *Cloudflare* zone. It can be found on your dashboard homepage.

- `Target Interface` : This is the network interface on your Pi that you want to use to update the address of your DNS record. Set it to `wlan0` if your Pi is connected to your home network by WiFi, of use `eth0` for Ethernet.

The script also sets up `NGINX` as an example webserver that uses the automatically generated certificates.

Once this is done you should be able to connect securely to your Pi seamlessly provided you are on the same network segment :).
