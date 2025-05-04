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

The one upside of all of this is that there are now a few kernel patches of mine that have made their way into vendor trees to fix various driver bugs. Nothing that will ever make it to upstream Linux, but hey, there's still some satisfaction to be had from this!

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

My time in Malaysia definitely started at the deep end. One week after an initial visit across to my new team and having a quick induction, I was suddenly met with the news that one of the team's engineers had resigned, and was asked if I could take over some of the technical delivery work for that team for an upcoming project (which I had never worked on before!)

At this point my Malaysian work Visa was still being processed with a variety of complications, so I spent nearly 2 months getting a bus back and forth over the border, carrying prototype parts in a rucksack trying to support some of the project work without actually being there! However in Late September 2024 I finally managed to settle permanently in Malaysia to "start" my new role.

... But I'm getting ahead of myself. I should probably explain what the team I joined actually do. This team is officially called the "Mechatronics" division, but in reality it functions as more of a systems integration team. Many of Dyson's floor products have a variety of "smart" features inside them. Features such as auto power modes for different cleaning scenarios, dust detection and size binning, filter lifespan indicators, etc... This small team (pictured below) managed by [Alex Khoo](https://www.linkedin.com/in/alextlkhoo/) were in charge of ensuring that these features worked reliably across all product tolerances and SKUs. In practice this meant getting involved with the features quite early on and working with a fair few different functions within the team (Hardware, Software, Design Engineering, Contract Manufacturers, Test Equipment Vendors, etc...).

![My Malaysia Team]({import.meta.env.VITE_IMAGE_BASE}/posts/Time_In_SEA-Malaysia_Team.JPG)

This role was quite different from the work I'd done before. While my new job was still a "technical" role, there was much more in the way of cross-team planning, dealing with friction between different functions, and in general tasks that I'd categorise as "peacekeeping" and "people-problem" resolution.

Outside of this project work, there was still a nice amount of gory technical engineering to be done in creating various bits of test/development equipment that the team distribute around the Malaysia office. The team had originally formed out of the remains of a team called _"Test Systems"_, which focused on making internal metrology tools (pressure loggers, motor control boxes, etc.). While this work is probably the more "fun" part of the job, it unfortunately has to take a back seat to the more pressing development projects that have production deadlines!

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

In all honesty, there were a few things that surprised me a lot when I started working in these downstream teams, especially given some of the preconceptions I had about production engineering from the UK.

The first thing that shocked me was often how few steps there were to push certain changes into production. Naturally there are parts of our manufacturing supply chains that are very strictly controlled by review processes. Actions such as motor geometry changes or Battery Management System software releases have very lengthy approval processes, as changes here can have significant safety consequences.

However, in many other parts
of development I was frankly shocked at how easy it was to get certain changes pushed through. I assumed that something like a change to a tester station spec on our main production line would need to go through countless layers of bureaucracy to get rolled out. In actuality, often these changes could be implemented the same day simply by chatting to one engineer and sending off an email to one of our test vendors! This ability to get things done in such a short timeframe was actually quite gratifying!

The dark side of this is that other people also take advantage of this ability to move quickly, and suddenly you find yourself in a situation where major modifications to part tooling has been done mere weeks before start of production and no-one has thought to tell you about it...

This combination of fast pace and last minute changes does mean that often we need to make compromises when it comes to balancing a perfected design vs. delivering on time. Making these kinds of calls on technical decision felt quite daunting: usually in research we could often assume that "technical hitches" would all be ironed out later down the line, but when working right before production, that accountability for any problems post-launch falls on us. A big part of my job in Malaysia was ensuring that we had strong justifications for any of these technical compromises, along with test evidence to back up our judgement calls.

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

Probably the most stressful case of this was back in January, when we started realising that some of the testers for one of our upcoming projects were not giving us repeatable readings for part of a calibration procedure that we were performing. For this particular project, we were setting up the pilot production line in Zhuhai, China, rather than a Contract Manufacturer in Johor, Malaysia. This meant that most of the diagnosis of the issues had to be done remotely, which can be a trying process.

As it happened, I was visiting Shenzhen around the same time as a tourist wanting to see the famed [Huaqiangbei Electronics Markets](https://www.youtube.com/watch?app=desktop&v=leFuF-zoVzA&t=2s). Shenzhen is not too far from our CM in Zhuhai, so my team asked if I could go take a look in person at the tester issue.

Ultimately of all the travels I've been fortunate enough to go on while living out in South-East Aisa, this trip probably was the biggest culture-shock for me. From the obvious language barrier issues to trying to get around Chinese industrial estates without the aid of Google and an English maps app, working with the Contract Manufacturer in Zhuhai turned out to be quite the experience!

The first observation I had was the clear realisation of _why_ most companies set up manufacturing in China. Taking just this single Contract Manufacturer ([Flex Ltd.](https://flex.com/)) as case study, the scale of the operation is remarkable. Not only do the facilities have an impressive level of automation and good observability of their tooling & assembly lines, but the tight-knit nature of their supply chains explain why they can develop so quickly and cheaply.

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

In Dyson, especially in research, we have a tendency to try and own every part of our product assemblies. Everything from motor control software to tooling design is done in-house. This does have some advantages: we can often optimise a product to be at the very limit of performance that we can achieve in a consumer-grade product. The _trade-off_ is that we often take longer to develop products, as we have to gain the relevant expertise across all new disciplines.

The Contract Manufacturers in China seem to operate very differently. They have a huge network of different suppliers in close proximity, so they can subcontract out large portions of the work to other manufacturers who have that specific domain expertise. The key to make this work is having clear specifications and interface documentation; something that Dyson is investing in heavily at the moment by incorporating more Systems Engineering within our development teams.

Of course I shouldn't ignore the work culture differences. While even in Malaysia the work pace is faster than what I experienced in the UK, it paled in comparison to the attitudes of the teams in Zhuhai. Engineers would regularly be working late into the night to fix production issues: Even in just the three days I spent there, I was frankly knackered by the pace of the work!

My time in Flex was a chaotic mix of hanging a laptop off the line trying to run MATLAB data analysis while also trying to explain tester modifications in a combination of broken English and Mandarin. One thing that was massively helpful here was an E-Ink tablet that I had recently impulse bought. With the language barrier often causing misunderstandings between us, I found that sketching graphs and diagrams was an excellent way to clear up ambiguity while wandering the factory floor.

Exhausted after my short stint in our factory, I returned back to Shenzhen to get on with the "holiday" portion of my trip!

For those who don't know, Downtown Shenzhen is akin to a Mecca for electronics enthusiasts. Many of the weird and wonderful parts we're all used to ordering on AliExpress often originate from here, so naturally it's heaven for a hobby electronics enthusiast such as myself. There are many different markets where you can talk to suppliers over the counter to search for parts and capabilities that are surprisingly hard to find online.

Unfortunately for me, I'd planned my trip to coincide with the week before Chinese New Year. This is about the only long break of the year that every Chinese employee gets, so naturally the markets had emptied out as vendors shut up shop to head back to their hometowns for the festivities. Even regardless, I managed to get some nice new soldering equipment and a few useful supplier WeChat contacts for some future projects.

During these market explorations I did come across the one dark side that I saw of the Shenzhen manufacturing scene: _Counterfeit Goods_.

Virtually every stall in the consumer products mall had some form of fake SuperSonic hair-dryer, advertised amusingly as a "leaf-less blower". The SuperSonic is a design that Dyson popularised back in 2016, and while I do think it's fair game nearly a decade later for SuperSonic-inspired products to be sold by competitors, it does hurt to see exact replicas being sold at costs lower than what it costs Dyson to _make_ a hairdryer, often lacking many of the safety features that our products incorporate.

While I do believe that over-restrictive patent laws can harm consumer choice at times, I think that having some level of intellectual property protection is important. Having seen first-hand the amount of effort that went into the development of our products, it is sad to see that work being under-cut by direct copies that don't contribute anything novel to the product space. Ultimately I think that many people in the west have a stigma towards Chinese manufacturing that doesn't reflect the immense skill and work ethic that has driven its success. However as part of celebrating this success I would love to see stronger enforcement of counterfeit goods as part of the CCP's long-term manufacturing strategy.

![Shenzhen Counterfeit Goods]({import.meta.env.VITE_IMAGE_BASE}/posts/Time_In_SEA-Shenzhen_Knockoffs.JPG)

In general my time working in Malaysia was quite intense, however it has opened my eyes to the vast amount of work that is involved in getting a product from a reasonably mature design to something that can be produced and sold on mass.

In addition, I can't recommend Malaysia itself highly enough as a place to explore if you every find yourself working in this part of the world. The Malaysian landscape is charming and outside of the main cities it isn't particularly well-frequented by tourists. Spending weekends exploring small fishing villages and trying local dishes has been great fun. Honestly Malaysia's street food scene is incredible - I've had some of the nicest food I've eaten in my life here (albeit not all of it agreed with my stomach!)

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

Ultimately my time spent out in South East Asia has been a real break from the kind of work I was used to in the UK. I've learned tonnes from being out here and reckon that I'll be coming back a better engineer.

A final note I'd like to say is a massive thank you to all of the friends and colleagues who've helped me while I've been out here. Unfortunately, many of these talented individuals were laid off during the 2024 restructuring at Dyson.
To all of those who are no longer here, people I've badgered on Teams for bizarre requests and interrupted their coffee breaks to ask for technical assistance, I hope to one day maybe work with you again!

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
