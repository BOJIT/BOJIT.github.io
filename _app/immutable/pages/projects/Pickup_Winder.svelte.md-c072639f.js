import{S as Xe,i as Ze,s as $e,e as a,t as l,k as p,c as n,a as r,h,d as t,m as u,U as g,b as d,g as s,K as i,E as Te}from"../../chunks/index-cabb4aca.js";function et(Qe){let m,ae,L,k,ne,R,y,v,Ee,H,I,re,K,_,P,qe,U,c,le,F,he,de,S,pe,ue,B,ce,fe,z,T,E,Ge,Q,q,me,X,G,x,xe,Z,j,we,$,M,A,je,ee,f,be,W,ge,ke,N,ye,ve,te,w,Ie,Y,_e,Pe,ie,C,V,Me,oe,D,J,Ae;return{c(){m=a("p"),ae=l("For a while I have wanted to try making my own guitar pickups, but always thought it would be too expensive to get started. Sites like Stewart Macdonald sell pre-built pickup winders, but they are eye-wateringly expensive! Lots of people online have shown it\u2019s possible to wind pickups consistently with nothing more than a metal rod and a hand-drill, but this felt a little too crude for my liking. Consequently, I decided to build my own custom pickup winder."),L=p(),k=a("p"),ne=l("In fact I ended up building two pickup winders: the white one pictured below was Version 1, and thanks to poor research on my part, had a variety of design flaws. The machine was usable, but it was clunky and a pain to use. Version 2 (the black and red machine pictured at the bottom of this page) built upon the design of version 1, but corrected many of the original winder\u2019s design flaws."),R=p(),y=a("p"),v=a("img"),H=p(),I=a("p"),re=l("Version 1 was relatively simple: the main enclosure housed a DC motor that drove a shaft that mounted the pickup bobbin. It has been a long time since I saw version 1 (it was dismantled long ago as an organ donor for Version 2) however I seem to recall that in my 14-year old wisdom I didn\u2019t even use bearings for the drive shaft! I also designed a ridiculous cam-based oscillator mechanism into the casing to distribute the coil windings automatically, but thankfully decided against actually implementing it. The only major feature of Version 1 which I kept on was the control system. This essentially consists of an Arduino Nano, an LCD, some push-switches, an opto-reflector sensor and a MOSFET to switch the motor. All the circuit does is keep count of the number of rotations the bobbin has turned through, by triggering the opto-reflector off the edge of a black and white strip on the drive shaft. It worked reasonably well in the first pickup winder, so there was no real need to replace it."),K=p(),_=a("p"),P=a("img"),U=p(),c=a("p"),le=l("The main problem with the first pickup winder can be seen in the picture above. You can see that I had the wire spool on a makeshift stand, with the thin wire being drawn off the spool tangentially. While this may seem normal, it is not how most pickup winders operate. This is because the wire in question is "),F=a("em"),he=l("very"),de=l(" thin (approx 0.06mm across!), so having to pull the heavy spool around puts excessive tension in the wire. I found that whenever I stopped the machine, the spool would not keep on spinning, and its inertia was enough to snap the pickup wire and force me to start winding from scratch. This resulted in a lot of waste copper wire, not to mention increasing frustration! It turns out that the \u201Cproper\u201D way of removing wire from the spool is to pull it off "),S=a("em"),pe=l("axially"),ue=l(", as illustrated at the bottom of this page. This is a far superior solution, as it does not require the spool to move at all while winding the pickup. The low thickness of the wire makes the extra \u2018twist\u2019 of the wire with each rotation as it is pulled off the spool unproblematic, and the tension in the wire can be as low as desired. Armed with this new knowledge, I decided to go back to the drawing board and design pickup winder "),B=a("em"),ce=l("MkII"),fe=l("\u2026"),z=p(),T=a("p"),E=a("img"),Q=p(),q=a("p"),me=l("I have seen a few designs online for 3D printed pickup winders, but unfortunately I do not have access to a 3D printer. On the other hand, I do have access to a laser cutter at school. For this reason, most of my projects are designed around flat-packs and this project was no exception. Virtually every part of the pickup winder was laser-cut, including the wire guides and the drive pulleys. This time, I copied existing pickup winder design norms more closely, scrapping the automatic wire guide and the silly spool holder. However I did change one detail: most small hobby pickup winders don\u2019t provide any means to mount the spool, expecting the user to simply put the spool on the floor by their feet. The long distance between the spool and the pickup winder reduces the likelihood of wire snagging or breaking, but to me this system has always seemed a bit inconvenient. I tend to have lots of projects on the go at one time, and I don\u2019t really have dedicated space for a pickup winder, so I wanted a design that I could shove in a draw mid-winding a pickup without having to worry about thin wire getting tangled up. I\u2019m sure this feature is probably considered absurd by any sane person, but hey, I think it looks neat. :)"),X=p(),G=a("p"),x=a("img"),Z=p(),j=a("p"),we=l("Above is a quick render of the pickup winder drafted in CAD. As you can see, the spool is housed on the opposite side of the winder to the bobbin spindle. This makes the entire unit quite compact, but raises the issue of guiding the wire around two 90\xB0 turns, while keeping the wire taut. Moreover, the length of the wire between the pickup and the spool continually varies, as the position of the windings on the bobbin changes. My solution tothe latter of these two problems was to mount the second pulley to linear guides salvaged from a printer. This allows me to guide the position of the windings on the bobbin without touching the wire. The first problem I found harder to tackle. This is because the wire pulls off the spool so easily that the tension in the wire is effectively nill. To avoid sloppy coils and tangled copper wire, the wire needs to be kept taut while winding the pickup. I had planned to do this with a couple of spring-loaded rubber pads providing friction on the infeed, but this didn\u2019t work that well and in the end I left them out and just used my fingers as a brake shoe to keep the wire taut. Other than the tension issue the sliding pulley system actually works quite well."),$=p(),M=a("p"),A=a("img"),ee=p(),f=a("p"),be=l("After a couple of quick tests re-winding some existing pickups, I decided to move onto making my own from scratch. In fact, the main reason I built the pickup winder was to make an especially low-profile pickup for my "),W=a("a"),ge=l("DIY Electric Guitar Project"),ke=l(". As far as I can see, there is still a significant level of voodoo magic involved in making a pickup, particularly surrounding magnet choices. Most of the pros swear by Alnico-5 magnets, but their high price makes them kind of unappealing for my crude hobby attempts. Instead, I tried using the much cheaper ferrite magnets and am very pleased with the results. (I don\u2019t have the kind of equipment required to backup such a statement, nor do I want to engage in an argument about "),N=a("strong"),ye=l("TONE"),ve=l("\u2026)"),te=p(),w=a("p"),Ie=l("The bobbins of pickups were traditionally made of fibreglass. I didn\u2019t think I had any on hand so had planned to use black acrylic instead, but that would have looked tacky. I suddenly realised that I "),Y=a("em"),_e=l("do"),Pe=l(" have fibreglass sheet at my disposal - in the form of old PCBs! I thought that making the pickup flatwork out of salvaged PCBs would look quite funky. One of the bobbins is pictured below.While this pickup winder has its quirks and annoyances, I find it useful to have around, and building it was quite fun. If I ever start making pickups in larger batches, I may design and build a version 3, but for now, this machine covers my needs just fine."),ie=p(),C=a("p"),V=a("img"),oe=p(),D=a("p"),J=a("img"),this.h()},l(e){m=n(e,"P",{});var o=r(m);ae=h(o,"For a while I have wanted to try making my own guitar pickups, but always thought it would be too expensive to get started. Sites like Stewart Macdonald sell pre-built pickup winders, but they are eye-wateringly expensive! Lots of people online have shown it\u2019s possible to wind pickups consistently with nothing more than a metal rod and a hand-drill, but this felt a little too crude for my liking. Consequently, I decided to build my own custom pickup winder."),o.forEach(t),L=u(e),k=n(e,"P",{});var We=r(k);ne=h(We,"In fact I ended up building two pickup winders: the white one pictured below was Version 1, and thanks to poor research on my part, had a variety of design flaws. The machine was usable, but it was clunky and a pain to use. Version 2 (the black and red machine pictured at the bottom of this page) built upon the design of version 1, but corrected many of the original winder\u2019s design flaws."),We.forEach(t),R=u(e),y=n(e,"P",{});var Ce=r(y);v=n(Ce,"IMG",{src:!0,alt:!0}),Ce.forEach(t),H=u(e),I=n(e,"P",{});var Ve=r(I);re=h(Ve,"Version 1 was relatively simple: the main enclosure housed a DC motor that drove a shaft that mounted the pickup bobbin. It has been a long time since I saw version 1 (it was dismantled long ago as an organ donor for Version 2) however I seem to recall that in my 14-year old wisdom I didn\u2019t even use bearings for the drive shaft! I also designed a ridiculous cam-based oscillator mechanism into the casing to distribute the coil windings automatically, but thankfully decided against actually implementing it. The only major feature of Version 1 which I kept on was the control system. This essentially consists of an Arduino Nano, an LCD, some push-switches, an opto-reflector sensor and a MOSFET to switch the motor. All the circuit does is keep count of the number of rotations the bobbin has turned through, by triggering the opto-reflector off the edge of a black and white strip on the drive shaft. It worked reasonably well in the first pickup winder, so there was no real need to replace it."),Ve.forEach(t),K=u(e),_=n(e,"P",{});var De=r(_);P=n(De,"IMG",{src:!0,alt:!0}),De.forEach(t),U=u(e),c=n(e,"P",{});var b=r(c);le=h(b,"The main problem with the first pickup winder can be seen in the picture above. You can see that I had the wire spool on a makeshift stand, with the thin wire being drawn off the spool tangentially. While this may seem normal, it is not how most pickup winders operate. This is because the wire in question is "),F=n(b,"EM",{});var Je=r(F);he=h(Je,"very"),Je.forEach(t),de=h(b," thin (approx 0.06mm across!), so having to pull the heavy spool around puts excessive tension in the wire. I found that whenever I stopped the machine, the spool would not keep on spinning, and its inertia was enough to snap the pickup wire and force me to start winding from scratch. This resulted in a lot of waste copper wire, not to mention increasing frustration! It turns out that the \u201Cproper\u201D way of removing wire from the spool is to pull it off "),S=n(b,"EM",{});var Oe=r(S);pe=h(Oe,"axially"),Oe.forEach(t),ue=h(b,", as illustrated at the bottom of this page. This is a far superior solution, as it does not require the spool to move at all while winding the pickup. The low thickness of the wire makes the extra \u2018twist\u2019 of the wire with each rotation as it is pulled off the spool unproblematic, and the tension in the wire can be as low as desired. Armed with this new knowledge, I decided to go back to the drawing board and design pickup winder "),B=n(b,"EM",{});var Fe=r(B);ce=h(Fe,"MkII"),Fe.forEach(t),fe=h(b,"\u2026"),b.forEach(t),z=u(e),T=n(e,"P",{});var Se=r(T);E=n(Se,"IMG",{src:!0,alt:!0}),Se.forEach(t),Q=u(e),q=n(e,"P",{});var Be=r(q);me=h(Be,"I have seen a few designs online for 3D printed pickup winders, but unfortunately I do not have access to a 3D printer. On the other hand, I do have access to a laser cutter at school. For this reason, most of my projects are designed around flat-packs and this project was no exception. Virtually every part of the pickup winder was laser-cut, including the wire guides and the drive pulleys. This time, I copied existing pickup winder design norms more closely, scrapping the automatic wire guide and the silly spool holder. However I did change one detail: most small hobby pickup winders don\u2019t provide any means to mount the spool, expecting the user to simply put the spool on the floor by their feet. The long distance between the spool and the pickup winder reduces the likelihood of wire snagging or breaking, but to me this system has always seemed a bit inconvenient. I tend to have lots of projects on the go at one time, and I don\u2019t really have dedicated space for a pickup winder, so I wanted a design that I could shove in a draw mid-winding a pickup without having to worry about thin wire getting tangled up. I\u2019m sure this feature is probably considered absurd by any sane person, but hey, I think it looks neat. :)"),Be.forEach(t),X=u(e),G=n(e,"P",{});var Ne=r(G);x=n(Ne,"IMG",{src:!0,alt:!0}),Ne.forEach(t),Z=u(e),j=n(e,"P",{});var Ye=r(j);we=h(Ye,"Above is a quick render of the pickup winder drafted in CAD. As you can see, the spool is housed on the opposite side of the winder to the bobbin spindle. This makes the entire unit quite compact, but raises the issue of guiding the wire around two 90\xB0 turns, while keeping the wire taut. Moreover, the length of the wire between the pickup and the spool continually varies, as the position of the windings on the bobbin changes. My solution tothe latter of these two problems was to mount the second pulley to linear guides salvaged from a printer. This allows me to guide the position of the windings on the bobbin without touching the wire. The first problem I found harder to tackle. This is because the wire pulls off the spool so easily that the tension in the wire is effectively nill. To avoid sloppy coils and tangled copper wire, the wire needs to be kept taut while winding the pickup. I had planned to do this with a couple of spring-loaded rubber pads providing friction on the infeed, but this didn\u2019t work that well and in the end I left them out and just used my fingers as a brake shoe to keep the wire taut. Other than the tension issue the sliding pulley system actually works quite well."),Ye.forEach(t),$=u(e),M=n(e,"P",{});var Le=r(M);A=n(Le,"IMG",{src:!0,alt:!0}),Le.forEach(t),ee=u(e),f=n(e,"P",{});var O=r(f);be=h(O,"After a couple of quick tests re-winding some existing pickups, I decided to move onto making my own from scratch. In fact, the main reason I built the pickup winder was to make an especially low-profile pickup for my "),W=n(O,"A",{href:!0});var Re=r(W);ge=h(Re,"DIY Electric Guitar Project"),Re.forEach(t),ke=h(O,". As far as I can see, there is still a significant level of voodoo magic involved in making a pickup, particularly surrounding magnet choices. Most of the pros swear by Alnico-5 magnets, but their high price makes them kind of unappealing for my crude hobby attempts. Instead, I tried using the much cheaper ferrite magnets and am very pleased with the results. (I don\u2019t have the kind of equipment required to backup such a statement, nor do I want to engage in an argument about "),N=n(O,"STRONG",{});var He=r(N);ye=h(He,"TONE"),He.forEach(t),ve=h(O,"\u2026)"),O.forEach(t),te=u(e),w=n(e,"P",{});var se=r(w);Ie=h(se,"The bobbins of pickups were traditionally made of fibreglass. I didn\u2019t think I had any on hand so had planned to use black acrylic instead, but that would have looked tacky. I suddenly realised that I "),Y=n(se,"EM",{});var Ke=r(Y);_e=h(Ke,"do"),Ke.forEach(t),Pe=h(se," have fibreglass sheet at my disposal - in the form of old PCBs! I thought that making the pickup flatwork out of salvaged PCBs would look quite funky. One of the bobbins is pictured below.While this pickup winder has its quirks and annoyances, I find it useful to have around, and building it was quite fun. If I ever start making pickups in larger batches, I may design and build a version 3, but for now, this machine covers my needs just fine."),se.forEach(t),ie=u(e),C=n(e,"P",{});var Ue=r(C);V=n(Ue,"IMG",{src:!0,alt:!0}),Ue.forEach(t),oe=u(e),D=n(e,"P",{});var ze=r(D);J=n(ze,"IMG",{src:!0,alt:!0}),ze.forEach(t),this.h()},h(){g(v.src,Ee="https://cdn.bojit.org/img/posts/Pickup_Winder-V1.JPG")||d(v,"src",Ee),d(v,"alt","Pickup_Winder-V1.JPG"),g(P.src,qe="https://cdn.bojit.org/img/posts/Pickup_Winder-V1_2.JPG")||d(P,"src",qe),d(P,"alt","Pickup_Winder-V1_2.JPG"),g(E.src,Ge="https://cdn.bojit.org/img/posts/Pickup_Winder-Flat_Pack.JPG")||d(E,"src",Ge),d(E,"alt","Pickup_Winder-Flat_Pack.JPG"),g(x.src,xe="https://cdn.bojit.org/img/posts/Pickup_Winder-CAD.JPG")||d(x,"src",xe),d(x,"alt","Pickup_Winder-CAD.JPG"),g(A.src,je="https://cdn.bojit.org/img/posts/Pickup_Winder-Runners.JPG")||d(A,"src",je),d(A,"alt","Pickup_Winder-Runners.JPG"),d(W,"href","https://bojit.org/projects/DIY_Guitar"),g(V.src,Me="https://cdn.bojit.org/img/posts/Pickup_Winder-Finished.JPG")||d(V,"src",Me),d(V,"alt","Pickup_Winder-Finished.JPG"),g(J.src,Ae="https://cdn.bojit.org/img/posts/Pickup_Winder-PCB.JPG")||d(J,"src",Ae),d(J,"alt","Pickup_Winder-PCB.JPG")},m(e,o){s(e,m,o),i(m,ae),s(e,L,o),s(e,k,o),i(k,ne),s(e,R,o),s(e,y,o),i(y,v),s(e,H,o),s(e,I,o),i(I,re),s(e,K,o),s(e,_,o),i(_,P),s(e,U,o),s(e,c,o),i(c,le),i(c,F),i(F,he),i(c,de),i(c,S),i(S,pe),i(c,ue),i(c,B),i(B,ce),i(c,fe),s(e,z,o),s(e,T,o),i(T,E),s(e,Q,o),s(e,q,o),i(q,me),s(e,X,o),s(e,G,o),i(G,x),s(e,Z,o),s(e,j,o),i(j,we),s(e,$,o),s(e,M,o),i(M,A),s(e,ee,o),s(e,f,o),i(f,be),i(f,W),i(W,ge),i(f,ke),i(f,N),i(N,ye),i(f,ve),s(e,te,o),s(e,w,o),i(w,Ie),i(w,Y),i(Y,_e),i(w,Pe),s(e,ie,o),s(e,C,o),i(C,V),s(e,oe,o),s(e,D,o),i(D,J)},p:Te,i:Te,o:Te,d(e){e&&t(m),e&&t(L),e&&t(k),e&&t(R),e&&t(y),e&&t(H),e&&t(I),e&&t(K),e&&t(_),e&&t(U),e&&t(c),e&&t(z),e&&t(T),e&&t(Q),e&&t(q),e&&t(X),e&&t(G),e&&t(Z),e&&t(j),e&&t($),e&&t(M),e&&t(ee),e&&t(f),e&&t(te),e&&t(w),e&&t(ie),e&&t(C),e&&t(oe),e&&t(D)}}}const it={title:"Pickup Winder",date:"20-06-2016",published:!0,tile:{type:"image",image:"/tiles/2016-06-20-Pickup_Winder.PNG"}};class ot extends Xe{constructor(m){super(),Ze(this,m,null,et,$e,{})}}export{ot as default,it as metadata};