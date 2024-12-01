import{s as it,f as a,a as n,g as l,K as s,c as m,i as o,v as at,d as i}from"./scheduler.4ddb5076.js";import{S as nt,i as lt,b as st,d as mt,m as rt,a as ht,t as pt,e as ut}from"./index.9cd1e3e1.js";import"./YouTube.svelte_svelte_type_style_lang.277392e0.js";import"./NavBar.svelte_svelte_type_style_lang.1c453cf9.js";import"./IconButton.b0f3f37a.js";import{Y as dt}from"./YouTube.56d08725.js";function ct(ot){let r,A="Our student accommodation block has a completely empty room in one of the communal spaces. I think on the original site plans it was meant to be a bathroom, but when we moved in it was just an empty windowless box.",T,h,B='We wanted to re-purpose the room and make it into a relaxation/chill space. We couldn’t make any permanent changes to the room, but it just so happens that the room is an almost perfect cuboid, so I decided to construct a frame inside the room and make a free-standing dual hammock stand. However, as the room is completely pitched-black when the door is closed, we thought it would be quite fun to put some LED strips around the frame of the room. As it so happened, I had 15m of WS2812b addressable LED tape left over from a previous project, and wanted to try something akin to <a href="https://www.youtube.com/watch?v=Ca6pjR2TLns" rel="nofollow">Four Tet’s 2018 tour light rig</a>. I didn’t want to buy any more LEDs, as I had set myself a strict £100 budget for the project, but to give the illusion of lots of LEDs, I used some heavy-duty <a href="https://www.amazon.co.uk/Silver-Lightite-Strong-Reflective-Sheeting/dp/B01138KKKW/ref=asc_df_B01138KKKW/?tag=googshopuk-21&amp;linkCode=df0&amp;hvadid=269126795226&amp;hvpos=&amp;hvnetw=g&amp;hvrand=16350266725274799922&amp;hvpone=&amp;hvptwo=&amp;hvqmt=&amp;hvdev=c&amp;hvdvcmdl=&amp;hvlocint=&amp;hvlocphy=1006909&amp;hvtargid=pla-719122985648&amp;psc=1" rel="nofollow">mylar foil</a> to create an ‘infinity mirror’ effect. It didn’t quite work out as an infinity room - the mylar isn’t that reflective, and getting sheets that large to remain taut and flat without attaching it to the wall was a nigh on impossible. However, the effect is still pretty cool: a video of the light-show in action is embedded below:',C,p,x,u,K="I tried to conduct most of the construction in secret, so I took some very detailed measurements of the room and constructed all of the frames outside of the room and assembled it on a quiet weekend. As it turns out, the room is actually slightly trapezoidal top to bottom, but undersized the frame by a bit anyway to allow for some expansion and contraction of the timber. The most critical part of the frame design was making the entire thing rigid enough to hold two hammocks, while ensuring that each ‘panel’ of the frame could be constructed outside and still fit through the door when it came to the final assembly. I cut it fine on a couple of occasions, but all of the parts did just about fit into the room!",P,d,W='<img src="https://cdn.bojit.org/img/posts/LED_Hammock_Room-Sketch.JPG" alt="LED_Hammock_Room-Sketch.JPG"/>',D,c,N="I don’t really trust my maths when it comes to this kind of project, so I decided to quickly mock up the frame in CAD. This served as a helpful assembly guide, and also allowed me to tweak the panel size so I didn’t end up with lots of waste when using standard 2.4m CLS. I had a bit of a trade-off here: the larger the individual panels, the better the mirror/infinity room would look, but equally, the frame would get significantly more wobbly and the mylar sheet would likely have more ripples in it.",M,f,U='<img src="https://cdn.bojit.org/img/posts/LED_Hammock_Room-CAD.PNG" alt="LED_Hammock_Room-CAD.PNG"/>',E,w,V="Unfortunately I didn’t really take any pictures of the construction of the frame, but there were no details that were particularly thrilling. I used standard <em>38mm x 68mm CLS</em> for virtually all of the framing, and it is mostly held together with 2” wood screws. The mylar sheeting is stapled to the back of the frame, and I tried my hand (and failed miserably) at hot-air levelling the Mylar sheets.",j,y,O="The only part of the build I got pictures of was the terrifying experience of trying to get the CLS lumber back from <em>Wickes</em> in my <em>Nissan Micra</em>. The <em>Micra</em> is definitely not built for these shenanigans, but with a few bungee cords and a very willing friend holding on to timber as we hared down a dual-carriageway with the rear boot open, we did eventually get the wood back home!",I,v,Y='<img src="https://cdn.bojit.org/img/posts/LED_Hammock_Room-Timber.JPG" alt="LED_Hammock_Room-Timber.JPG"/>',R,b,F='<img src="https://cdn.bojit.org/img/posts/LED_Hammock_Room-Micra.JPG" alt="LED_Hammock_Room-Micra.JPG"/>',$,g,Q=`The controller is relatively simple - just a 30A 5V supply with a Raspberry Pi running the LED tape using a Python script. I broke out the Ethernet connection for controlling the tape with <em>ArtNet</em>, and there is even a small USB sound card for doing sound-activated light-shows (though I never actually got round to implementing that in software). The Pi shares the same supply as the LED tape, but the data output is optically isolated (partially for short-circuit protection, but mostly just a lazy 3.3V-5V level conversion with the parts I had on hand).
My script reads USB HID commands from my <a href="https://bojit.org/projects/MagicQ_Wing">home-made lighting wing</a> and uses them to control a simple stack-style lighting controller, which allows me to busk the lights manually if I so desire.`,G,_,X='<img src="https://cdn.bojit.org/img/posts/LED_Hammock_Room-Controller.JPG" alt="LED_Hammock_Room-Controller.JPG"/>',J,k,Z="Below is a quick before and after picture of the room - suffice to say it is quite an improvement on a blank room with nothing in it! The frame does creak alarmingly when you get into the hammocks, but it seems fairly sturdy once you’re in them. The best part of the whole project is that it is completely non-intrusive, so when the time comes to move out we should be able to reverse the room back to its original state, and no-one will be any the wiser… :)",S,L,tt='<img src="https://cdn.bojit.org/img/posts/LED_Hammock_Room-Before_After.JPG" alt="LED_Hammock_Room-Before_After.JPG"/>',z,H,et='<img src="https://cdn.bojit.org/img/posts/LED_Hammock_Room-Dark.JPG" alt="LED_Hammock_Room-Dark.JPG"/>',q;return p=new dt({props:{src:"https://www.youtube.com/embed/BzbhOj6v1EI",autoplay:!0}}),{c(){r=a("p"),r.textContent=A,T=n(),h=a("p"),h.innerHTML=B,C=n(),st(p.$$.fragment),x=n(),u=a("p"),u.textContent=K,P=n(),d=a("p"),d.innerHTML=W,D=n(),c=a("p"),c.textContent=N,M=n(),f=a("p"),f.innerHTML=U,E=n(),w=a("p"),w.innerHTML=V,j=n(),y=a("p"),y.innerHTML=O,I=n(),v=a("p"),v.innerHTML=Y,R=n(),b=a("p"),b.innerHTML=F,$=n(),g=a("p"),g.innerHTML=Q,G=n(),_=a("p"),_.innerHTML=X,J=n(),k=a("p"),k.textContent=Z,S=n(),L=a("p"),L.innerHTML=tt,z=n(),H=a("p"),H.innerHTML=et},l(t){r=l(t,"P",{"data-svelte-h":!0}),s(r)!=="svelte-19o9zkz"&&(r.textContent=A),T=m(t),h=l(t,"P",{"data-svelte-h":!0}),s(h)!=="svelte-f95ts7"&&(h.innerHTML=B),C=m(t),mt(p.$$.fragment,t),x=m(t),u=l(t,"P",{"data-svelte-h":!0}),s(u)!=="svelte-1phr27y"&&(u.textContent=K),P=m(t),d=l(t,"P",{"data-svelte-h":!0}),s(d)!=="svelte-y4vtg2"&&(d.innerHTML=W),D=m(t),c=l(t,"P",{"data-svelte-h":!0}),s(c)!=="svelte-1w0j1tz"&&(c.textContent=N),M=m(t),f=l(t,"P",{"data-svelte-h":!0}),s(f)!=="svelte-x5sbe"&&(f.innerHTML=U),E=m(t),w=l(t,"P",{"data-svelte-h":!0}),s(w)!=="svelte-1jzwhb8"&&(w.innerHTML=V),j=m(t),y=l(t,"P",{"data-svelte-h":!0}),s(y)!=="svelte-1wg81du"&&(y.innerHTML=O),I=m(t),v=l(t,"P",{"data-svelte-h":!0}),s(v)!=="svelte-c1s0ou"&&(v.innerHTML=Y),R=m(t),b=l(t,"P",{"data-svelte-h":!0}),s(b)!=="svelte-4w0go2"&&(b.innerHTML=F),$=m(t),g=l(t,"P",{"data-svelte-h":!0}),s(g)!=="svelte-1nz4y3m"&&(g.innerHTML=Q),G=m(t),_=l(t,"P",{"data-svelte-h":!0}),s(_)!=="svelte-jjv98m"&&(_.innerHTML=X),J=m(t),k=l(t,"P",{"data-svelte-h":!0}),s(k)!=="svelte-1do1584"&&(k.textContent=Z),S=m(t),L=l(t,"P",{"data-svelte-h":!0}),s(L)!=="svelte-7c3mk2"&&(L.innerHTML=tt),z=m(t),H=l(t,"P",{"data-svelte-h":!0}),s(H)!=="svelte-p2xhi6"&&(H.innerHTML=et)},m(t,e){o(t,r,e),o(t,T,e),o(t,h,e),o(t,C,e),rt(p,t,e),o(t,x,e),o(t,u,e),o(t,P,e),o(t,d,e),o(t,D,e),o(t,c,e),o(t,M,e),o(t,f,e),o(t,E,e),o(t,w,e),o(t,j,e),o(t,y,e),o(t,I,e),o(t,v,e),o(t,R,e),o(t,b,e),o(t,$,e),o(t,g,e),o(t,G,e),o(t,_,e),o(t,J,e),o(t,k,e),o(t,S,e),o(t,L,e),o(t,z,e),o(t,H,e),q=!0},p:at,i(t){q||(ht(p.$$.fragment,t),q=!0)},o(t){pt(p.$$.fragment,t),q=!1},d(t){t&&(i(r),i(T),i(h),i(C),i(x),i(u),i(P),i(d),i(D),i(c),i(M),i(f),i(E),i(w),i(j),i(y),i(I),i(v),i(R),i(b),i($),i(g),i(G),i(_),i(J),i(k),i(S),i(L),i(z),i(H)),ut(p,t)}}}const _t={title:"LED Hammock Room",date:"15-02-2020",published:!0,tile:{type:"image",image:"/tiles/2020-02-15-LED_Hammock_Room.JPG"}};class kt extends nt{constructor(r){super(),lt(this,r,null,ct,it,{})}}export{kt as default,_t as metadata};