import{s as re,f as a,a as i,N as te,g as o,K as r,c as l,h as ne,O as se,d as n,j as ae,i as s,v as E}from"./scheduler.4ddb5076.js";import{S as pe,i as ce}from"./index.9cd1e3e1.js";import"./IconButton.b0f3f37a.js";import"./prism-c.baf0302e.js";function ue(oe){let p,U=`Recently, there have been a variety of events where I have needed more than one universe of DMX for a show. Particularly when bringing shows into other venues, often the rig is spread out over multiple DMX universes, and having more than one DMX output is always handy.
For most theatre shows, I use MagicQ on PC with the <a href="https://www.enttec.co.uk/product/protocols-gb/dmx512-gb/2-universe-usb-computer-interface-dmx/" rel="nofollow">Entecc DMX USB Pro</a>, but MagicQ only allows the use of one single universe of DMX out over a USB interface, meaning I cannot simply use two of them to get two universes of DMX out of the software. However, MagicQ does allow the full <strong>64 universes</strong> to be output over Artnet/sACN, even in demo mode! Now, you can buy these at an ‘affordable’ price relative to the cost of professional kit, but they are still a bit on the expensive side for a hobbyist. A fun alternative is to make one! The unit pictured below cost me about £20 in parts, and depending on what you have lying around could be even cheaper. The system is built around an Arduino Mega, so is relatively easy to modify to suit people’s particular needs, and the unit is much less liable to crash MagicQ than the Entecc converters in my experience.`,M,c,B='<img src="https://cdn.bojit.org/img/posts/Artnet_Node-Artnet_Node.JPG" alt="Artnet_Node-Artnet_Node.JPG"/>',A,u,q=`The core of this project is based on the DMX library made available by Toni Merino, available <a href="https://blog.deskontrol.net/arduino-based-dmx-artnet-node/" rel="nofollow">here</a>. This supports one universe of DMX on the Arduino Uno, and up to four on the Arduino Mega (performance starts to suffer at about three universes, so I would not recommend exceeding two). The code is based quite closely on a similar project made by <a href="https://github.com/alfo/artnet" rel="nofollow">Alex Forey</a> (original project pictured below), however both his code and the original library code by Toni Merino will not compile in modern versions of the Arduino IDE. This is because many register names have been changed since the library was written, so much of the old code has been <em>“poisoned”</em>. Personally, I can’t stand having to use multiple versions of the same software, so I re-wrote the library with the modern register names and syntaxes. This updated library can be found on <a href="https://github.com/BOJIT/Artnet_Node" rel="nofollow">GitHub</a>, along with the rest of my source code.
Aside from the Arduino Mega, I used a pair of MAX485 ICs to drive the DMX lines ( optical isolation is recommended here, but not mandatory), and a Wiznet W5100 breakout board for Ethernet connectivity. I didn’t feel like making a PCB for this project, so I wired it all together on a piece of stripboard and enclosed the entire thing in an old extrusion-style case I had lying about.`,x,h,Q='<img src="https://cdn.bojit.org/img/posts/Artnet_Node-Alex_Forey.JPG" alt="Artnet_Node-Alex_Forey.JPG"/>',P,d,W=`It has been a while since I modified the <em>libDMX.cpp</em> library, but as far as I can remember, most of the trouble was caused by the <code>SIG_USART</code> syntax, which has been poisoned since Arduino Version <em>0023</em>. If you encounter similar
syntax bugs elsewhere, you essentially have to convert this syntax:`,I,m,H,ie=`<code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token function">defined</span><span class="token punctuation">(</span>USE_UART0<span class="token punctuation">)</span></span></span>
<span class="token function">ISR</span><span class="token punctuation">(</span>SIG_USART0_TRANS<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    ArduinoDmx0<span class="token punctuation">.</span><span class="token function">Process_ISR_TX</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span></code>`,C,f,$="…into this syntax:",L,v,N,le=`<code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token function">defined</span><span class="token punctuation">(</span>USE_UART0<span class="token punctuation">)</span></span></span>
<span class="token function">ISR</span><span class="token punctuation">(</span>USART0_TX_vect<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    ArduinoDmx0<span class="token punctuation">.</span><span class="token function">Process_ISR_TX</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span></code>`,j,g,F='<img src="https://cdn.bojit.org/img/posts/Artnet_Node-Prototype.JPG" alt="Artnet_Node-Prototype.JPG"/>',S,y,O=`This project was actually relatively quick to get up and running. While I haven’t got some of the fancier features you would expect in an Artnet node to work, like remote configuration and auto discovery, the actual recieving of packets and outputting DMX is rock solid, and has not let me down in a performance as of yet. The nice thing about Artnet compared to the USB interfaces is the ability to set up redundancy. If you direct two Artnet streams at a single address, the node will simply take the highest value of the two streams, so if one console goes down during a show, the other will take over seamlessly.
Below is a picture off my first test of operation, paired with my custom MagicQ wing (read about that <a href="https://bojit.org/projects/MagicQ_Wing">here</a>). The combination of the two devices make a very powerful lighting console, which can act as a backup for the main venue console, all for a total of about £40 between the two projects. This is all part of my ongoing project to make the ultimate PC-based lighting console :)`,D,w,K='<img src="https://cdn.bojit.org/img/posts/Artnet_Node-Test.JPG" alt="Artnet_Node-Test.JPG"/>',G,b,z=`When all tidied up, the unit looks quite smart on the outside (despite being a complete mess inside). This was also the first project I made with an integrated mains supply. When doing a theatre get-in, the last thing you want to be doing is digging through boxes to find the right wall adapter! When doing this it is very important to make sure the case is properly mounted and everything inside the case is rigidly mounted, so as to prevent any potential shorts between the live AC input and the control circuitry.
I also re-wrote the code to use these really cutesy OLED displays you can get on <a href="https://www.ebay.co.uk/itm/IIC-I2C-0-91-128x32-white-OLED-LCD-Display-Module-3-3v-5v-For-Arduino-PIC-PSHN/132893477621?epid=4002658264&amp;hash=item1ef1118af5:g:lKYAAOSwu05bQsUy" rel="nofollow">eBay</a> for next to nothing. At the moment I have not implemented encoder support for configuring the node IP address, as I was nervous someone would fiddle with the settings midway through our last show, however this is something I am planning to do if I get round to updating this project.`,X,k,V='<img src="https://cdn.bojit.org/img/posts/Artnet_Node-LCD.JPG" alt="Artnet_Node-LCD.JPG"/>',J,_,Y=`In the future I am planning to port this project to a much cheaper ARM development board like the <a href="https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill.html" rel="nofollow">STM32 ‘Blue-Pill’</a>, as well as get remote configuration and discovery working. The target is to make a simple module that can be embedded into projects and cheaper fixtures to add networking capabilities retroactively.
However, suffice to say, this is quite a while off, as I have some more exciting projects in the pipeline!`,R,T,Z='<img src="https://cdn.bojit.org/img/posts/Artnet_Node-Node.JPG" alt="Artnet_Node-Node.JPG"/>';return{c(){p=a("p"),p.innerHTML=U,M=i(),c=a("p"),c.innerHTML=B,A=i(),u=a("p"),u.innerHTML=q,x=i(),h=a("p"),h.innerHTML=Q,P=i(),d=a("p"),d.innerHTML=W,I=i(),m=a("pre"),H=new te(!1),C=i(),f=a("p"),f.textContent=$,L=i(),v=a("pre"),N=new te(!1),j=i(),g=a("p"),g.innerHTML=F,S=i(),y=a("p"),y.innerHTML=O,D=i(),w=a("p"),w.innerHTML=K,G=i(),b=a("p"),b.innerHTML=z,X=i(),k=a("p"),k.innerHTML=V,J=i(),_=a("p"),_.innerHTML=Y,R=i(),T=a("p"),T.innerHTML=Z,this.h()},l(e){p=o(e,"P",{"data-svelte-h":!0}),r(p)!=="svelte-rkgmrp"&&(p.innerHTML=U),M=l(e),c=o(e,"P",{"data-svelte-h":!0}),r(c)!=="svelte-ywjn82"&&(c.innerHTML=B),A=l(e),u=o(e,"P",{"data-svelte-h":!0}),r(u)!=="svelte-1lare0w"&&(u.innerHTML=q),x=l(e),h=o(e,"P",{"data-svelte-h":!0}),r(h)!=="svelte-1cxqxj0"&&(h.innerHTML=Q),P=l(e),d=o(e,"P",{"data-svelte-h":!0}),r(d)!=="svelte-k7p2ox"&&(d.innerHTML=W),I=l(e),m=o(e,"PRE",{class:!0});var t=ne(m);H=se(t,!1),t.forEach(n),C=l(e),f=o(e,"P",{"data-svelte-h":!0}),r(f)!=="svelte-14nxd05"&&(f.textContent=$),L=l(e),v=o(e,"PRE",{class:!0});var ee=ne(v);N=se(ee,!1),ee.forEach(n),j=l(e),g=o(e,"P",{"data-svelte-h":!0}),r(g)!=="svelte-mjn3ty"&&(g.innerHTML=F),S=l(e),y=o(e,"P",{"data-svelte-h":!0}),r(y)!=="svelte-44eimk"&&(y.innerHTML=O),D=l(e),w=o(e,"P",{"data-svelte-h":!0}),r(w)!=="svelte-1smg4qc"&&(w.innerHTML=K),G=l(e),b=o(e,"P",{"data-svelte-h":!0}),r(b)!=="svelte-44qrhb"&&(b.innerHTML=z),X=l(e),k=o(e,"P",{"data-svelte-h":!0}),r(k)!=="svelte-829num"&&(k.innerHTML=V),J=l(e),_=o(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-17w6sy6"&&(_.innerHTML=Y),R=l(e),T=o(e,"P",{"data-svelte-h":!0}),r(T)!=="svelte-1l1xnwo"&&(T.innerHTML=Z),this.h()},h(){H.a=null,ae(m,"class","language-c"),N.a=null,ae(v,"class","language-c")},m(e,t){s(e,p,t),s(e,M,t),s(e,c,t),s(e,A,t),s(e,u,t),s(e,x,t),s(e,h,t),s(e,P,t),s(e,d,t),s(e,I,t),s(e,m,t),H.m(ie,m),s(e,C,t),s(e,f,t),s(e,L,t),s(e,v,t),N.m(le,v),s(e,j,t),s(e,g,t),s(e,S,t),s(e,y,t),s(e,D,t),s(e,w,t),s(e,G,t),s(e,b,t),s(e,X,t),s(e,k,t),s(e,J,t),s(e,_,t),s(e,R,t),s(e,T,t)},p:E,i:E,o:E,d(e){e&&(n(p),n(M),n(c),n(A),n(u),n(x),n(h),n(P),n(d),n(I),n(m),n(C),n(f),n(L),n(v),n(j),n(g),n(S),n(y),n(D),n(w),n(G),n(b),n(X),n(k),n(J),n(_),n(R),n(T))}}}const ve={title:"Artnet Node",date:"18-02-2018",published:!0,tile:{type:"image",image:"/tiles/2018-02-18-Artnet_Node.JPG"}};class ge extends pe{constructor(p){super(),ce(this,p,null,ue,re,{})}}export{ge as default,ve as metadata};