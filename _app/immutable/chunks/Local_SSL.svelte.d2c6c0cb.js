import{s as re,f as i,a as n,N as ce,g as l,K as s,c as r,h as he,O as ue,d as o,j as de,i as a,v as B}from"./scheduler.4ddb5076.js";import{S as pe,i as me}from"./index.9cd1e3e1.js";import"./IconButton.b0f3f37a.js";import"./prism-bash.575d1a7e.js";function fe(ne){let c,F='Lately I’ve been playing about with <em>Progressive Web Apps</em> and some of the <a href="https://plotty.bojit.org" rel="nofollow">cool things you can do now entirely in a Browser</a>. Most of my software experience is in the realm of embedded systems, where you don’t really have to worry about maintaining a codebase for multiple platforms/architectures. The prospect of having to make/maintain a program for multiple operating systems intimidates me, so I’m pleased that I can now make and distribute a cross-platform app in pretty much the same way that I deploy my website.',_,h,J="The one trouble with Progressive Web Apps is that they can only be installed over a <strong>secure connection</strong>. This is quite sensible, and something I don’t have to really worry about when deploying with <em>GitHub Pages</em>. However, the moment I want to play about with something that’s not on the public internet, things become a bit more tricky.",x,u,$="I’m sure everyone reading this will have probably clicked through a secure connection warning or used self-signed certificates at some point. This doesn’t work for Progressive Web Apps, and I found myself in the situation where I wanted to install a PWA that was hosted on a Raspberry Pi, but couldn’t because my connection wasn’t secure.",I,d,K='So what do you need to get a secure connection without a self-signed certificate? The answer is a <em>certificate authority</em>. There are far better places than here to learn how certificate authorities work, but the mile-high explanation is that they tell users that you are who you say you are when they connect to your server, helping prevent <a href="https://medium.com/@munteanu210/ssl-certificates-vs-man-in-the-middle-attacks-3fb7846fa5db" rel="nofollow">Man-in-the-Middle Attacks</a>.',H,p,U='My first thought to fix this issue was to set up my own <a href="https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/" rel="nofollow">local certificate authority</a>. This would work, but is not ideal, as I would have to add that Certificate Authority’s root certificate to every device I wanted to use the PWA on, and I would have to host that Certificate Authority on any network I wanted to use the PWA on. Ideally I wanted to use a public Certificate Authority to sign certificates for a device on a private network. Hence this project.',M,m,X='<img src="https://cdn.bojit.org/img/posts/Local_SSL-Cover.PNG" alt="Local_SSL-Cover.PNG"/>',S,f,Z='<a href="https://github.com/BOJIT/local_ssl" rel="nofollow">My project</a> works by taking advantage of something called a <code>DNS-01</code> challenge, and the only thing you need to use it is a domain name, proxied through <em>Cloudflare</em>. It uses a tool called <code>certbot</code> to generate a certificate through <em>LetsEncrypt</em> and the Cloudflare API to verify this certificate automatically. It’s a neat way of getting out-of-the box SSL working on a Raspberry Pi or other Debian-based machines.',N,y,Q='So how does it work? To get an understanding of what ‘challenges’ are and why they are used I would highly recommend reading <a href="https://letsencrypt.org/docs/challenge-types/" rel="nofollow">this article</a> on <em>Letsencrypt’s</em> site. The most common challenge; the <code>HTTP-01</code> challenge; wont work here, as the Raspberry Pi’s webserver is not publicly accessible by LetsEncrypt’s servers. Instead, what we give our Pi a public DNS record through <em>Cloudflare</em>, and then give the Pi an API token that it can use to edit this record. When we go to issue our certificate, we can automatically add our challenge token to our DNS record when requesting a certificate. This DNS record can then also be used for <em>Dynamic DNS</em> when connecting to the Pi.',A,w,V="To set up this yourself, all you need to do is create an <code>A</code> record on your domain through <em>Cloudflare’s</em> DNS tools <em>(see image below)</em>. The address doesn’t really matter, as The Pi will keep it updated as it’s local IP address changes. I set mine to <code>0.0.0.0</code> initially.",D,v,Y='<img src="https://cdn.bojit.org/img/posts/Local_SSL-DNS.PNG" alt="Local_SSL-DNS.PNG"/>',j,b,ee='Once this is done, you need to generate an <a href="https://developers.cloudflare.com/api/tokens/create" rel="nofollow">API Token</a> and note it down along with your <em>zone identifier</em>.',q,g,te="Now pull up a shell on your Pi/other device: Navigate to your home directory and run the following set of commands.",W,T,G,se=`<code class="language-bash"><span class="token builtin class-name">cd</span> ~
<span class="token function">git</span> clone https://github.com/BOJIT/local_ssl.git
<span class="token builtin class-name">cd</span> local_ssl
<span class="token function">chmod</span> +x install.sh
<span class="token function">sudo</span> ./install.sh</code>`,E,P,oe="This will run a fully automated install script. The script will prompt for four bits of information:",O,L,ae="<li><p><code>Record name (subdomain)</code> : this is the full domain name that you set up on <em>Cloudflare</em>. For me this might be something like <code>example.local.bojit.org</code>.</p></li> <li><p><code>Cloudflare API Token</code> : The token you generated earlier.</p></li> <li><p><code>Cloudflare Zone Identifier</code> : A string that uniquely identifies you <em>Cloudflare</em> zone. It can be found on your dashboard homepage.</p></li> <li><p><code>Target Interface</code> : This is the network interface on your Pi that you want to use to update the address of your DNS record. Set it to <code>wlan0</code> if your Pi is connected to your home network by WiFi, of use <code>eth0</code> for Ethernet.</p></li>",R,k,ie="The script also sets up <code>NGINX</code> as an example webserver that uses the automatically generated certificates.",z,C,le="Once this is done you should be able to connect securely to your Pi seamlessly provided you are on the same network segment :).";return{c(){c=i("p"),c.innerHTML=F,_=n(),h=i("p"),h.innerHTML=J,x=n(),u=i("p"),u.textContent=$,I=n(),d=i("p"),d.innerHTML=K,H=n(),p=i("p"),p.innerHTML=U,M=n(),m=i("p"),m.innerHTML=X,S=n(),f=i("p"),f.innerHTML=Z,N=n(),y=i("p"),y.innerHTML=Q,A=n(),w=i("p"),w.innerHTML=V,D=n(),v=i("p"),v.innerHTML=Y,j=n(),b=i("p"),b.innerHTML=ee,q=n(),g=i("p"),g.textContent=te,W=n(),T=i("pre"),G=new ce(!1),E=n(),P=i("p"),P.textContent=oe,O=n(),L=i("ul"),L.innerHTML=ae,R=n(),k=i("p"),k.innerHTML=ie,z=n(),C=i("p"),C.textContent=le,this.h()},l(e){c=l(e,"P",{"data-svelte-h":!0}),s(c)!=="svelte-1ggi4kg"&&(c.innerHTML=F),_=r(e),h=l(e,"P",{"data-svelte-h":!0}),s(h)!=="svelte-1khotv"&&(h.innerHTML=J),x=r(e),u=l(e,"P",{"data-svelte-h":!0}),s(u)!=="svelte-o0f7wh"&&(u.textContent=$),I=r(e),d=l(e,"P",{"data-svelte-h":!0}),s(d)!=="svelte-8no6m8"&&(d.innerHTML=K),H=r(e),p=l(e,"P",{"data-svelte-h":!0}),s(p)!=="svelte-igekat"&&(p.innerHTML=U),M=r(e),m=l(e,"P",{"data-svelte-h":!0}),s(m)!=="svelte-1jdqtcq"&&(m.innerHTML=X),S=r(e),f=l(e,"P",{"data-svelte-h":!0}),s(f)!=="svelte-16b969v"&&(f.innerHTML=Z),N=r(e),y=l(e,"P",{"data-svelte-h":!0}),s(y)!=="svelte-ngmqa0"&&(y.innerHTML=Q),A=r(e),w=l(e,"P",{"data-svelte-h":!0}),s(w)!=="svelte-1osi84s"&&(w.innerHTML=V),D=r(e),v=l(e,"P",{"data-svelte-h":!0}),s(v)!=="svelte-b91uka"&&(v.innerHTML=Y),j=r(e),b=l(e,"P",{"data-svelte-h":!0}),s(b)!=="svelte-bzqzcw"&&(b.innerHTML=ee),q=r(e),g=l(e,"P",{"data-svelte-h":!0}),s(g)!=="svelte-1hij5rp"&&(g.textContent=te),W=r(e),T=l(e,"PRE",{class:!0});var t=he(T);G=ue(t,!1),t.forEach(o),E=r(e),P=l(e,"P",{"data-svelte-h":!0}),s(P)!=="svelte-ue57h4"&&(P.textContent=oe),O=r(e),L=l(e,"UL",{"data-svelte-h":!0}),s(L)!=="svelte-17hh0mc"&&(L.innerHTML=ae),R=r(e),k=l(e,"P",{"data-svelte-h":!0}),s(k)!=="svelte-1eiafsg"&&(k.innerHTML=ie),z=r(e),C=l(e,"P",{"data-svelte-h":!0}),s(C)!=="svelte-677f1e"&&(C.textContent=le),this.h()},h(){G.a=null,de(T,"class","language-bash")},m(e,t){a(e,c,t),a(e,_,t),a(e,h,t),a(e,x,t),a(e,u,t),a(e,I,t),a(e,d,t),a(e,H,t),a(e,p,t),a(e,M,t),a(e,m,t),a(e,S,t),a(e,f,t),a(e,N,t),a(e,y,t),a(e,A,t),a(e,w,t),a(e,D,t),a(e,v,t),a(e,j,t),a(e,b,t),a(e,q,t),a(e,g,t),a(e,W,t),a(e,T,t),G.m(se,T),a(e,E,t),a(e,P,t),a(e,O,t),a(e,L,t),a(e,R,t),a(e,k,t),a(e,z,t),a(e,C,t)},p:B,i:B,o:B,d(e){e&&(o(c),o(_),o(h),o(x),o(u),o(I),o(d),o(H),o(p),o(M),o(m),o(S),o(f),o(N),o(y),o(A),o(w),o(D),o(v),o(j),o(b),o(q),o(g),o(W),o(T),o(E),o(P),o(O),o(L),o(R),o(k),o(z),o(C))}}}const ge={title:"SSL over a Local Network",date:"22-08-2021",published:!0,tile:{type:"link",colour:"#efa2af"}};class Te extends pe{constructor(c){super(),me(this,c,null,fe,re,{})}}export{Te as default,ge as metadata};
