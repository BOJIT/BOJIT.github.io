import{s as de,f as a,a as o,N as me,g as i,K as l,c as p,h as fe,O as ye,d as n,j as ve,i as s,v as we}from"./scheduler.4ddb5076.js";import{S as ge,i as be,b as Te,d as _e,m as Ce,a as xe,t as He,e as Be}from"./index.9cd1e3e1.js";import"./YouTube.svelte_svelte_type_style_lang.277392e0.js";import"./NavBar.svelte_svelte_type_style_lang.1c453cf9.js";import{G as Le}from"./Gallery.58586f5f.js";import"./IconButton.b0f3f37a.js";function Pe(he){let r,Q="I’m using Cloudflare for more and more of my projects these days. Their set of products is both powerful and refreshingly simple when compared to the likes of GCP/AWS. They also have a very generous free tier! They recently announced <em>Cloudflare KV</em>, a key-value database that runs on your CDN. It looked like a cool thing to have a play with, but I didn’t really have a project in mind…",B,c,Y="… Then a pressing need appeared. Some mates of mine are quite heavy beer drinkers. With the cost-of-living crisis looming, they decided to decrease their pub spending… by building a pub in their living room. Unfortunately, this puts the onus of stocking the bar and keeping a tab on us! Naturally I thought this would be an excellent excuse to create a technically over-complicated solution with a web-app.",L,u,X='<img src="https://cdn.bojit.org/img/posts/Belvoir_Bar-Location.JPG" alt="Belvoir_Bar-Location.JPG"/>',P,h,Z='The basic premise was to create a simple website where we could quickly enter our bar tab and use it to pay back whoever stocked the bar. All of the payment is handled using <a href="https://monzo.me/" rel="nofollow">Monzo.me</a>, so really the only ‘database’ necessary is a stock list and some means of authenticating a user to edit a stock list. Cloudflare KV isn’t really the right choice of database here, but for a low-stakes application like this, it was a good choice for easy configuration/not accidentally racking up a hefty cloud bill!',M,k,ee="The app was designed in <em>SvelteKit</em>, with a simple mobile-friendly user interface for jotting up a stock list. A few app renders are shown below:",G,d,I,m,te="At the time of writing, there isn’t much in the way of documentation covering the integration of Cloudflare and SvelteKit. Moreover, the Cloudflare KV API doesn’t feature any authentication out of the box. We need to implement this ourselves in Cloudflare workers.",q,f,ne="In general, I don’t want to handle user accounts/authentication myself. Dealing with account spam, password resets, strict auth protocols, etc… seems like a lot of hassle. Thankfully, most people already have a user account with Apple/Facebook/Google/GitHub, and we can use these as Authentication providers with <em>OAuth 2.0</em>.",A,y,se="Here it is important to draw the line between <em>Authentication</em> and <em>Identity</em>. <em>Identity</em> is a means of associating our application data with a particular user. <em>Authentication</em>, on the other hand, is a means of checking whether a user is who they say they are. Our application handles the <em>identity</em> part, but we offload the hard part of checking whether accounts are legitimate to a third-party. We also then don’t have to worry about storing user passwords. All we store in our KV database is a unique user identifier (in my case, email address) and an object containing our application data.",j,v,ae="This example app uses ‘Sign In with Google’, however the process is very similar for other <em>Oauth 2.0</em> providers. We first need to ‘sign in’ our application with <em>Google Identity Services</em>. This service lets us sign in using Google’s sign-in prompt and returns us an identity token (JWT). Note that the first connection will require some user interaction, but we can store the username locally and try to log in silently on future returns to the website. This web token is very short lived (typically 15 minutes). We save it as a cookie in our browser so that it will be sent with every request to our application.",S,w,oe="Our application (running in Cloudflare workers) can then intercept every request and check if this cookie is present. The server can then independently check the validity of this identity token with the Google OAuth API, then conditionally respond to the request based on the users’ permission level. An example request is depicted below:",K,g,ie='<img src="https://cdn.bojit.org/img/posts/Belvoir_Bar-Diagram.PNG" alt="Belvoir_Bar-Diagram.PNG"/>',N,b,pe="Implementing conditional access in SvelteKit is relatively simple. There is a function called <code>handle</code> in <code>hooks.server.ts</code>. This function is called on every page fetch to Cloudflare. Below is some simple handler logic for my application. The application has a set of protected routes and a few routes that are user-dependent. The handler will redirect any missing/expired access tokens to the login page. The login page will then silently try to re-login, showing a prompt if Google Identity Services doesn’t provide a new access token.",$,T,le="If the authentication is successful, the handler will then check our KV database for a user entry. If the route is protected and the user doesn’t have the correct privileges, the request will return a <code>403</code> forbidden error. Note that these multiple consecutive requests are reasonably fast, as they are server to server, so are probably not leaving the local data center.",O,_,W,ke=`<code class="language-javascript"><span class="token keyword">const</span> access_token <span class="token operator">=</span> event<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'access-token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>access_token<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">throw</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">,</span> <span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Check user status</span>
<span class="token keyword">let</span> profile <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://www.googleapis.com/oauth2/v1/userinfo?alt=json'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">'Bearer '</span> <span class="token operator">+</span> access_token
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>profile<span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">,</span> <span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add user information to view</span>
event<span class="token punctuation">.</span>locals<span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token keyword">await</span> profile<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get user entry from Cloudflare (uses KV internally)</span>
<span class="token keyword">let</span> req <span class="token operator">=</span> <span class="token keyword">await</span> event<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/user'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">'Bearer '</span> <span class="token operator">+</span> access_token
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">,</span> <span class="token string">"Authentication Failed!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,V,C,re='The application that this snippet is from is unfortunately not open-source (as it contains some details/information relating to some mates’ houses). If you want to learn more about SvelteKit and Cloudflare KV, I’d recommend <a href="https://www.geekytidbits.com/playing-with-sveltekit-on-cloudflare-pages/" rel="nofollow">this article</a>.',E,z,D,x,ce='You can try the app for yourself <a href="https://beaver.bojit.org" rel="nofollow">here</a>. Be warned, all you can do with it is pay a friend of mine for beer, so I don’t recommend making any purchases!',R,H,ue="<p>Footnote: Why is it called Beaver Bar? The bar used to be in a house on <em>Belvoir Road</em> in Bristol. The name is a tribute to locals mispronouncing the road name…</p>",F,J,U;return d=new Le({props:{columns:3,tiles:[{type:"image",caption:"Sign In Page",image:"https://cdn.bojit.org/img/posts/Belvoir_Bar-Sign_In.PNG"},{type:"image",caption:"Stock Editor",image:"https://cdn.bojit.org/img/posts/Belvoir_Bar-Stock.PNG"},{type:"image",caption:"Ordering Page",image:"https://cdn.bojit.org/img/posts/Belvoir_Bar-User.PNG"}]}}),{c(){r=a("p"),r.innerHTML=Q,B=o(),c=a("p"),c.textContent=Y,L=o(),u=a("p"),u.innerHTML=X,P=o(),h=a("p"),h.innerHTML=Z,M=o(),k=a("p"),k.innerHTML=ee,G=o(),Te(d.$$.fragment),I=o(),m=a("p"),m.textContent=te,q=o(),f=a("p"),f.innerHTML=ne,A=o(),y=a("p"),y.innerHTML=se,j=o(),v=a("p"),v.innerHTML=ae,S=o(),w=a("p"),w.textContent=oe,K=o(),g=a("p"),g.innerHTML=ie,N=o(),b=a("p"),b.innerHTML=pe,$=o(),T=a("p"),T.innerHTML=le,O=o(),_=a("pre"),W=new me(!1),V=o(),C=a("p"),C.innerHTML=re,E=o(),z=a("hr"),D=o(),x=a("p"),x.innerHTML=ce,R=o(),H=a("blockquote"),H.innerHTML=ue,F=o(),J=a("br"),this.h()},l(e){r=i(e,"P",{"data-svelte-h":!0}),l(r)!=="svelte-1930cue"&&(r.innerHTML=Q),B=p(e),c=i(e,"P",{"data-svelte-h":!0}),l(c)!=="svelte-1rzwd3n"&&(c.textContent=Y),L=p(e),u=i(e,"P",{"data-svelte-h":!0}),l(u)!=="svelte-1iu1pqm"&&(u.innerHTML=X),P=p(e),h=i(e,"P",{"data-svelte-h":!0}),l(h)!=="svelte-1s4dk1l"&&(h.innerHTML=Z),M=p(e),k=i(e,"P",{"data-svelte-h":!0}),l(k)!=="svelte-1a3qer5"&&(k.innerHTML=ee),G=p(e),_e(d.$$.fragment,e),I=p(e),m=i(e,"P",{"data-svelte-h":!0}),l(m)!=="svelte-i7k5i4"&&(m.textContent=te),q=p(e),f=i(e,"P",{"data-svelte-h":!0}),l(f)!=="svelte-5w7o8w"&&(f.innerHTML=ne),A=p(e),y=i(e,"P",{"data-svelte-h":!0}),l(y)!=="svelte-1xhcbjb"&&(y.innerHTML=se),j=p(e),v=i(e,"P",{"data-svelte-h":!0}),l(v)!=="svelte-1njkmcl"&&(v.innerHTML=ae),S=p(e),w=i(e,"P",{"data-svelte-h":!0}),l(w)!=="svelte-q5psqn"&&(w.textContent=oe),K=p(e),g=i(e,"P",{"data-svelte-h":!0}),l(g)!=="svelte-d54bhe"&&(g.innerHTML=ie),N=p(e),b=i(e,"P",{"data-svelte-h":!0}),l(b)!=="svelte-nilt57"&&(b.innerHTML=pe),$=p(e),T=i(e,"P",{"data-svelte-h":!0}),l(T)!=="svelte-1l2lqk6"&&(T.innerHTML=le),O=p(e),_=i(e,"PRE",{class:!0});var t=fe(_);W=ye(t,!1),t.forEach(n),V=p(e),C=i(e,"P",{"data-svelte-h":!0}),l(C)!=="svelte-1i1dxdy"&&(C.innerHTML=re),E=p(e),z=i(e,"HR",{}),D=p(e),x=i(e,"P",{"data-svelte-h":!0}),l(x)!=="svelte-1p5v8wm"&&(x.innerHTML=ce),R=p(e),H=i(e,"BLOCKQUOTE",{"data-svelte-h":!0}),l(H)!=="svelte-103issm"&&(H.innerHTML=ue),F=p(e),J=i(e,"BR",{}),this.h()},h(){W.a=null,ve(_,"class","language-javascript")},m(e,t){s(e,r,t),s(e,B,t),s(e,c,t),s(e,L,t),s(e,u,t),s(e,P,t),s(e,h,t),s(e,M,t),s(e,k,t),s(e,G,t),Ce(d,e,t),s(e,I,t),s(e,m,t),s(e,q,t),s(e,f,t),s(e,A,t),s(e,y,t),s(e,j,t),s(e,v,t),s(e,S,t),s(e,w,t),s(e,K,t),s(e,g,t),s(e,N,t),s(e,b,t),s(e,$,t),s(e,T,t),s(e,O,t),s(e,_,t),W.m(ke,_),s(e,V,t),s(e,C,t),s(e,E,t),s(e,z,t),s(e,D,t),s(e,x,t),s(e,R,t),s(e,H,t),s(e,F,t),s(e,J,t),U=!0},p:we,i(e){U||(xe(d.$$.fragment,e),U=!0)},o(e){He(d.$$.fragment,e),U=!1},d(e){e&&(n(r),n(B),n(c),n(L),n(u),n(P),n(h),n(M),n(k),n(G),n(I),n(m),n(q),n(f),n(A),n(y),n(j),n(v),n(S),n(w),n(K),n(g),n(N),n(b),n($),n(T),n(O),n(_),n(V),n(C),n(E),n(z),n(D),n(x),n(R),n(H),n(F),n(J)),Be(d,e)}}}const Se={title:"Belvoir Bar",date:"16-04-2023",published:!0,tile:{type:"image",image:"/tiles/2023-04-16-Belvoir_Bar.PNG"}};class Ke extends ge{constructor(r){super(),be(this,r,null,Pe,de,{})}}export{Ke as default,Se as metadata};
