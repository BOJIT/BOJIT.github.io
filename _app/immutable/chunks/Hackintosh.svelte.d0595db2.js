import{s as W,f as s,a as l,g as n,K as o,c as r,i,v as S,d as a}from"./scheduler.4ddb5076.js";import{S as X,i as z}from"./index.9cd1e3e1.js";function D(V){let h,j="This will be a brief article: I have had a few people enquire about the ‘Mac Pro’ that’s sitting under my desk, and I thought I could give some of the technical details here. It is by no means a particularly powerful computer (the original PC build was done in 2013), but it does have a few unique features that set it apart from most computers.",g,p,q='My primary aim when building the Hackintosh was to make it look as much like an original <em>PowerMac G5</em> as possible. The original front panel buttons and headphone jack are used, but the firewire ports have been neatly replaced with USB 3.0. I also made a custom sheet metal ATX conversion plate to sit in the back, which leaves most of the back casing intact. This was considerably more effort those <a href="https://www.thelaserhive.com/product/g5-atx-kit-psu-holder/" rel="nofollow">conversion kits</a> you can get online, but is much prettier in my opinion. The internals are significantly different to the original <em>PowerMac G5</em>, but I am still using the perspex cover and the original fan shroud, just to maintain the aesthetic.',P,u,J='<img src="https://cdn.bojit.org/img/posts/Hackintosh-Case_Open.JPG" alt="Hackintosh-Case_Open.JPG"/>',H,m,U="The one part of this project that was slightly sketchy was re-housing the original power supply. Unlike many of the <em>G5</em> conversions online, I wanted to keep the original power supply that sits across the bottom of the case, but the original <em>PowerMac</em> power supply is terribly loud and inefficient. Instead, I decided to re-house a modern power supply inside the shell of the old case. I would <strong>not recommend doing this</strong>, as the capacitors in ATX supplies can hold their charge for weeks after they have been unplugged. I took the precaution of discharging all the capacitors through an electronic load before doing the conversion, and lined the insides of the original casing with acetate. The original PSU cooling fans were very noisy, so I replaced them with some 12V ones from my junk/salvages pile. They can be wired to the original power supply fan header, but I didn’t want to take chances, so my fans are wired to be on all the time.",T,c,O='<img src="https://cdn.bojit.org/img/posts/Hackintosh-Power_Supply.JPG" alt="Hackintosh-Power_Supply.JPG"/>',M,d,R="Another neat feature of this PC is that it has a built-in <em>Ubiquiti</em> router and <em>Mikrotik mAP Lite</em> that can act as both a station and an access point. This is very helpful, as I do a lot of projects where I need a controlled network environment for testing, and I am not always network admin in my building. This setup gives me a reliable switched network where I can assign static DHCP mappings and snoop all of the traffic without restriction. The <em>Mikrotik</em> router is usually in access point mode, which lets any wireless device (typically <em>ESP-01</em> modules) to connect to the test network. However, the combination of the <em>Mikrotik</em> and the <em>Ubiquiti</em> router gives me the option to set up the network with a redundant connection to another network. This means that if either the WiFi or the Ethernet into my PC fails, the system will stay connected with no downtime.",_,w,$='<img src="https://cdn.bojit.org/img/posts/Hackintosh-Network_Switch.JPG" alt="Hackintosh-Network_Switch.JPG"/>',C,f,A='I also thought I would put in a Raspberry Pi inside the case as well to automate various tasks, and perhaps run <a href="https://pi-hole.net/" rel="nofollow">Pi-Hole</a> as well, but I don’t really use it much. Part of the problem here is that the Pi and the router are powered by the main PC power supply, and neither have a power-down sequence linked to the PC. The <em>Ubiquiti</em> router is relatively hardened against sudden power outages, but after turning on and off my PC every day for 6 months, the power cycling has corrupted my Raspbian installation. I’m sure there is a way around this (perhaps have a script that shuts down the Pi over SSH?), but at the moment it is simply easier for me to use an external Pi.',I,y,N='<img src="https://cdn.bojit.org/img/posts/Hackintosh-Raspberry_Pi.JPG" alt="Hackintosh-Raspberry_Pi.JPG"/>',x,b,F="This build did not actually start as a Hackintosh build, I just really liked the style of the old <em>PowerMac G5</em> cases, but as I was dual-booting <em>Windows</em> and <em>Linux</em> anyway, I thought I may as well try <em>MacOS</em> as well. My hardware is reasonably well suited for a Hackintosh, and there are far better places online to find information about Hackintosh builds than here, but my one bug bear with the system is the fact that the latest versions of <em>MacOS</em> don’t properly support my <em>NVidia</em> graphics card. I am still stuck on <em>High Sierra</em> and most security updates will break my driver setup, much to my frustration!",L,v,B="Other than this though, this computer setup is serving me very well, and I personally think it looks much classier than the RGB monstrosities that seem to be the rage in PC designs these days. I can also appease the hardcore Mac fanboys as well, as most of them don’t even notice that it’s not the real deal!",G,k,E='<img src="https://cdn.bojit.org/img/posts/Hackintosh-Full_Case.JPG" alt="Hackintosh-Full_Case.JPG"/>';return{c(){h=s("p"),h.textContent=j,g=l(),p=s("p"),p.innerHTML=q,P=l(),u=s("p"),u.innerHTML=J,H=l(),m=s("p"),m.innerHTML=U,T=l(),c=s("p"),c.innerHTML=O,M=l(),d=s("p"),d.innerHTML=R,_=l(),w=s("p"),w.innerHTML=$,C=l(),f=s("p"),f.innerHTML=A,I=l(),y=s("p"),y.innerHTML=N,x=l(),b=s("p"),b.innerHTML=F,L=l(),v=s("p"),v.textContent=B,G=l(),k=s("p"),k.innerHTML=E},l(e){h=n(e,"P",{"data-svelte-h":!0}),o(h)!=="svelte-1q3phnb"&&(h.textContent=j),g=r(e),p=n(e,"P",{"data-svelte-h":!0}),o(p)!=="svelte-evquaw"&&(p.innerHTML=q),P=r(e),u=n(e,"P",{"data-svelte-h":!0}),o(u)!=="svelte-5uf0is"&&(u.innerHTML=J),H=r(e),m=n(e,"P",{"data-svelte-h":!0}),o(m)!=="svelte-1qpooeo"&&(m.innerHTML=U),T=r(e),c=n(e,"P",{"data-svelte-h":!0}),o(c)!=="svelte-72o0eu"&&(c.innerHTML=O),M=r(e),d=n(e,"P",{"data-svelte-h":!0}),o(d)!=="svelte-pm4htf"&&(d.innerHTML=R),_=r(e),w=n(e,"P",{"data-svelte-h":!0}),o(w)!=="svelte-nqdln2"&&(w.innerHTML=$),C=r(e),f=n(e,"P",{"data-svelte-h":!0}),o(f)!=="svelte-1rs26uu"&&(f.innerHTML=A),I=r(e),y=n(e,"P",{"data-svelte-h":!0}),o(y)!=="svelte-11x211u"&&(y.innerHTML=N),x=r(e),b=n(e,"P",{"data-svelte-h":!0}),o(b)!=="svelte-1wn8db"&&(b.innerHTML=F),L=r(e),v=n(e,"P",{"data-svelte-h":!0}),o(v)!=="svelte-1iu6zxt"&&(v.textContent=B),G=r(e),k=n(e,"P",{"data-svelte-h":!0}),o(k)!=="svelte-118ix72"&&(k.innerHTML=E)},m(e,t){i(e,h,t),i(e,g,t),i(e,p,t),i(e,P,t),i(e,u,t),i(e,H,t),i(e,m,t),i(e,T,t),i(e,c,t),i(e,M,t),i(e,d,t),i(e,_,t),i(e,w,t),i(e,C,t),i(e,f,t),i(e,I,t),i(e,y,t),i(e,x,t),i(e,b,t),i(e,L,t),i(e,v,t),i(e,G,t),i(e,k,t)},p:S,i:S,o:S,d(e){e&&(a(h),a(g),a(p),a(P),a(u),a(H),a(m),a(T),a(c),a(M),a(d),a(_),a(w),a(C),a(f),a(I),a(y),a(x),a(b),a(L),a(v),a(G),a(k))}}}const Y={title:"PowerMac G5 Hackintosh",date:"01-08-2020",published:!0,tile:{type:"image",image:"/tiles/2020-08-01-Hackintosh.PNG"}};class Z extends X{constructor(h){super(),z(this,h,null,D,W,{})}}export{Z as default,Y as metadata};
