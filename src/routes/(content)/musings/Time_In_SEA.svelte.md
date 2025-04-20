---
title: Time in SEA
date: "10-05-2025"
published: true
hidden: true

tile:
  type: image
  image: /tiles/2025-05-10-Time_In_SEA.PNG
---

<script>
    import { Gallery } from "@bojit/svelte-components/widgets";
</script>

If you're one of the approximately 8 people who regularly visit this site a month (_if I am to believe Google Analytics_)...

... Firstly, thank you for your interest in this small corner of the Internet!

Secondly, you may have noticed that I haven't published an article here in a while. The reason for this is that I have been flung far from my workshop and all of my beloved tools for the last year and a half 😢.

As you may know, my day job at the time of writing is as an Embedded Electronics Engineer at Dyson. For the past few years I've mostly worked in the research function, working on prototyping electronics and sensing tech for our new product concepts. In 2024 I got the very fortunate opportunity to go out to South East Asia and work in the new research branch in Dyson's Singapore office. Through a series of unexpected events, my original six month placement in Singapore turned into a seventeen month saga that involved me moving to Malaysia and transitioning to a role that took me all the way to the production line of our products!

In this article I'll go over some of the key highlights of the year and some of the interesting takeaways from my experience out in South East Asia. Note that due to the confidential nature of the work, most of the images on this page will just be pictures of industrial estates or holiday snaps!

This is a departure from my usual style of content on this website, which is mostly made up of multiple images interspersed with technical jargon. Hopefully this piece doesn't come across too much like a travel column or a LinkedIn post!

## Part 1: Electronics Research in Singapore 🇸🇬

In January 2024 I said goodbye to my family in the UK and relocated to Singapore to join my counterpart team from the UK. Dyson's research function in Singapore is relatively new still, being set up with the intention of bringing some of the early-stage concept work closer to some of the vendors that we work with.

Unfortunately none of the product categories that the team work on have made it to launch quite yet (watch this space!), so I can't share exactly what it is that we were working on, but broadly speaking the team mostly worked on the projects that incorporated things like machine vision, embedded Linux, edge-ML, etc... Think of the tech inside our [robot vacuums](https://www.dyson.com.sg/dyson-360-vis-nav), but for some new exciting applications!

My role there was mostly doing "quick" prototyping and feasibility studies for new product ideas. Things like camera kernel drivers for obscure new parts, Raspberry-Pi based data acquisition rigs for the machine learning engineers, hacked together optical assemblies, new SoC software bring-up, etc...

In this time I got the chance to work with some incredibly talented engineers and scientists with seriously impressive specialised knowledge. If you're ever looking for camera optics expertise or power electronics wizardry, look now further than [CK Liao](https://www.linkedin.com/in/ckliao/) and [Kishan Amratia](https://www.linkedin.com/in/kishan-amratia-7a798065/)!

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Dyson Singapore Technology Centre',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Singapore_Office.JPG'
        },
        {
            type: 'image',
            caption: 'My Singapore Team!',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Singapore_Team.PNG'
        },
        {
            type: 'image',
            caption: 'Hiking in Bukit Timah',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Singapore_Bukkit_Timah.JPG'
        },
        {
            type: 'image',
            caption: 'Sungei Buloh Monitor Lizard',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Singapore_Monitor_Lizard.JPG'
        },
    ]
} />

One of the perks of working at a large company is that suppliers tend to take you a bit more seriously when you contact them. It's nice to have access to pre-production samples of lots of chips that I couldn't dream of getting samples of as a mere hobbyist.

That being said, you'd think that being on the cutting edge of embedded chips would mean having access to the latest and greatest of tooling and documentation. In fact quite the opposite is true... A lot of the chips we'd be trying to bring up wouldn't even have datasheets, and often the toolchains for prototyping would be incomplete or have lots of severe bugs.

In general, I'd been spoilt on the quality of the open-source tooling and documentation from the likes of ST and NXP. Once you get in the world of obscure SoCs and Camera ISPs, the tooling gets very bad very quickly. In addition, most of the software and dev boards require NDAs before you can even get hold of them, which makes evaluating multiple suppliers very time-consuming.

The one perk of all of this is that there are now a few kernel patches of mine that have made their way into vendor trees to fix various driver bugs. Nothing that will ever make it to upstream Linux, but hey, there's still some satisfaction to be had!

One of the big downsides of working upstream is that the vast majority of stuff that we work on never sees the light of day. A few small parts of my work relating to embedded SoC networking have made their way into a downstream product, but the sad reality of the job is that most of the work ends its life in an archive box in a dusty corner of the office.

One thing I did tend to feel is that we would often get projects to a remarkably high level of technical maturity without fully assessing whether the things we were making would be a viable product. It's understandable, as coming up with new ideas is definitely the hardest part of product development to crack by brute force. But often it felt like we were developing component-level fully cost-down electronics for projects that hadn't even cleared basic feasibility studies...

...Suffice to say, all this was starting to take a bit of a toll my personal satisfaction with the work. I was learning a lot of new technical niches, but not really getting anything across the finish line. It was around this time, in mid-May when I got a message from a friend of mine in the company telling me that they were looking for some mechatronics resource for a particular downstream project in Malaysia, and asking if I was interested in taking the role?

I jumped at the chance, and a couple of months later I was crossing the border over to the land of manufacturing engineering in Malaysia...

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Kathmandu Hindu Temple',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Nepal_1.JPG'
        },
        {
            type: 'image',
            caption: 'Nepal in Diwali',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Nepal_2.JPG'
        },
        {
            type: 'image',
            caption: 'Yala Peak - Langtang Valley',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Nepal_3.JPG'
        },
    ]
} />

## Part 2: Malaysia and the world of Manufacturing 🇲🇾

My time in Malaysia definitely started at the deep end...

> Started at the deep end... people left, taking over technical feature early on

> Visa issues, commuting back and forth over border with prototype parts...

> Explain focus of team in MY, tolerance bounds, some of the challenges. Alex Khoo

![My Malaysia Team]({import.meta.env.VITE_IMAGE_BASE}/posts/Time_In_SEA-Malaysia_Team.JPG)

> Surprise at limited number of steps between me and the production line. Easier to change things than I thought. Comparison to other companies

> Importance of robustness, getting things wrong gets very expensive quickly. 20k units a week...

> Describe role, some of the things we're responsible for. Much more cross-team than previous role. In charge of co-ordinating multiple teams (system integration role...)

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Dyson Global Development Centre - Senai',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Dyson_GDC_1.JPG'
        },
        {
            type: 'image',
            caption: 'GDC Test Lab',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Dyson_GDC_2.JPG'
        },
        {
            type: 'image',
            caption: 'Injection Moulding Line - Senai',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-FozOne.PNG'
        },
    ]
} />

> Some reflection thoughts on processes

> In research used to doing most stuff from first principles. Not used to just emailing vendors/suppliers and asking for stuff.

> Not used to having last call/decision on certain things. Having clear lines of justification very important.

> Surprising number of last minute changes. Tool mods, changes to tester setups. Need to be quite flexible to plans changing!

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Tangjung Piai National Park',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Malaysia_2.JPG'
        },
        {
            type: 'image',
            caption: 'Fishing Village - Kedah',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Malaysia_1.JPG'
        },
        {
            type: 'image',
            caption: 'Blue Lake - Gunung Pulai',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Malaysia_3.JPG'
        },
        {
            type: 'image',
            caption: 'Gunung Pulai Waterfall Hike',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Malaysia_4.JPG'
        },
        {
            type: 'image',
            caption: 'Fishing Raft - Langkawi',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Malaysia_5.JPG'
        },
        {
            type: 'image',
            caption: 'Fishing Port - Kukup',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Malaysia_6.JPG'
        },
    ]
} />

> Early January, travelling to Shenzhen, opportunity to go to Zhuhai and visit CM. Issus needed sorting on tester stations.

> China (especially industrial china) quite a culture shock. Pace on the lines very fast, wished I spoke some mandarin!

> Communication via E-ink tablet. Highly recommend to have!

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Street food in Zhuhai',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Shenzhen_2.JPG'
        },
        {
            type: 'image',
            caption: 'Welcome to China!',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Shenzhen_1.JPG'
        },
        {
            type: 'image',
            caption: 'Shenzhen Electronics Market',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Shenzhen_3.JPG'
        },
    ]
} />

> Exhausted, left factories, went over to Shenzhen electronic markets

> Mecca for electronics enthusiasts! Can get just about anything and everything there.

> Chinese new year not a good time to visit, mostly closed up.

> Appreciation of why having manufacturing in China is helpful, even if not on cost. All suppliers nearby, making iterations much faster. Give example of tool mod turnaround times in Malaysia (let alone UK).

> Was sad to see unregulated counterfeits at market. Fake supersonic at every corner, sold for less than we can produce them for! Mostly still domestic market, but still ripping off people's careful design work.

![Shenzhen Counterfeit Goods]({import.meta.env.VITE_IMAGE_BASE}/posts/Time_In_SEA-Shenzhen_Knockoffs.JPG)

> Time in Malaysia generally quite intense, still not escaped some of the projects when back in the UK.

> Malaysia is a beautiful and not too touristy country. Lots of interesting little fishing villages to explore and local food to try (even if it doesn't agree with my stomach)

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Camping on Mount Bromo',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Bromo_1.JPG'
        },
        {
            type: 'image',
            caption: 'Midnight Breakfast and Tent Collapse!',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Bromo_2.JPG'
        },
    ]
} />

## Conclusions

> Takeaways from the year, things I'll miss. Things that I'll be glad to get back to.

<br>

I hope you found this mild ramble somewhat interesting, and rest assured that I have some exciting projects planned for the rest of 2025!

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Nara Deer Park',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Japan_2.JPG'
        },
        {
            type: 'image',
            caption: 'Akigawa Valley',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Japan_1.JPG'
        },
        {
            type: 'image',
            caption: 'Osaka City Centre',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Time_In_SEA-Japan_3.JPG'
        },
    ]
} />
