/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Hc=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,nc=(s,e,t=null)=>{for(;e!==t;){const n=e.nextSibling;s.removeChild(e),e=n}},Nn=`{{lit-${String(Math.random()).slice(2)}}}`,Om=`<!--${Nn}-->`,Vc=new RegExp(`${Nn}|${Om}`);class Nm{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],r=document.createTreeWalker(t.content,133,null,!1);let a=0,o=-1,l=0;const{strings:h,values:{length:c}}=e;for(;l<c;){const u=r.nextNode();if(u!==null){if(o++,u.nodeType===1){if(u.hasAttributes()){const d=u.attributes,{length:p}=d;let m=0;for(let g=0;g<p;g++)Gc(d[g].name,"$lit$")&&m++;for(;m-- >0;){const g=h[l],v=Ah.exec(g)[2],f=v.toLowerCase()+"$lit$",b=u.getAttribute(f);u.removeAttribute(f);const x=b.split(Vc);this.parts.push({type:"attribute",index:o,name:v,strings:x}),l+=x.length-1}}u.tagName==="TEMPLATE"&&(i.push(u),r.currentNode=u.content)}else if(u.nodeType===3){const d=u.data;if(d.indexOf(Nn)>=0){const p=u.parentNode,m=d.split(Vc),g=m.length-1;for(let v=0;v<g;v++){let f,b=m[v];if(b==="")f=ei();else{const x=Ah.exec(b);x!==null&&Gc(x[2],"$lit$")&&(b=b.slice(0,x.index)+x[1]+x[2].slice(0,-5)+x[3]),f=document.createTextNode(b)}p.insertBefore(f,u),this.parts.push({type:"node",index:++o})}m[g]===""?(p.insertBefore(ei(),u),n.push(u)):u.data=m[g],l+=g}}else if(u.nodeType===8)if(u.data===Nn){const d=u.parentNode;u.previousSibling!==null&&o!==a||(o++,d.insertBefore(ei(),u)),a=o,this.parts.push({type:"node",index:o}),u.nextSibling===null?u.data="":(n.push(u),o--),l++}else{let d=-1;for(;(d=u.data.indexOf(Nn,d+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}else r.currentNode=i.pop()}for(const u of n)u.parentNode.removeChild(u)}}const Gc=(s,e)=>{const t=s.length-e.length;return t>=0&&s.slice(t)===e},Fm=s=>s.index!==-1,ei=()=>document.createComment(""),Ah=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Wc(s,e){const{element:{content:t},parts:n}=s,i=document.createTreeWalker(t,133,null,!1);let r=gs(n),a=n[r],o=-1,l=0;const h=[];let c=null;for(;i.nextNode();){o++;const u=i.currentNode;for(u.previousSibling===c&&(c=null),e.has(u)&&(h.push(u),c===null&&(c=u)),c!==null&&l++;a!==void 0&&a.index===o;)a.index=c!==null?-1:a.index-l,r=gs(n,r),a=n[r]}h.forEach(u=>u.parentNode.removeChild(u))}const Xg=s=>{let e=s.nodeType===11?0:1;const t=document.createTreeWalker(s,133,null,!1);for(;t.nextNode();)e++;return e},gs=(s,e=-1)=>{for(let t=e+1;t<s.length;t++){const n=s[t];if(Fm(n))return t}return-1};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Yg=new WeakMap,Es=s=>typeof s=="function"&&Yg.has(s),Qt={},jc={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Rh{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)n!==void 0&&n.setValue(e[t]),t++;for(const n of this.__parts)n!==void 0&&n.commit()}_clone(){const e=Hc?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r,a=0,o=0,l=i.nextNode();for(;a<n.length;)if(r=n[a],Fm(r)){for(;o<r.index;)o++,l.nodeName==="TEMPLATE"&&(t.push(l),i.currentNode=l.content),(l=i.nextNode())===null&&(i.currentNode=t.pop(),l=i.nextNode());if(r.type==="node"){const h=this.processor.handleTextExpression(this.options);h.insertAfterNode(l.previousSibling),this.__parts.push(h)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));a++}else this.__parts.push(void 0),a++;return Hc&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const qc=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),Jg=` ${Nn} `;class Um{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const r=this.strings[i],a=r.lastIndexOf("<!--");n=(a>-1||n)&&r.indexOf("-->",a+1)===-1;const o=Ah.exec(r);t+=o===null?r+(n?Jg:Om):r.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+Nn}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return qc!==void 0&&(t=qc.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ic=s=>s===null||!(typeof s=="object"||typeof s=="function"),Ch=s=>Array.isArray(s)||!(!s||!s[Symbol.iterator]);class km{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new Bm(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=n[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!Ch(r))return r}let i="";for(let r=0;r<t;r++){i+=e[r];const a=n[r];if(a!==void 0){const o=a.value;if(ic(o)||!Ch(o))i+=typeof o=="string"?o:String(o);else for(const l of o)i+=typeof l=="string"?l:String(l)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Bm{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Qt||ic(e)&&e===this.value||(this.value=e,Es(e)||(this.committer.dirty=!0))}commit(){for(;Es(this.value);){const e=this.value;this.value=Qt,e(this)}this.value!==Qt&&this.committer.commit()}}class co{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ei()),this.endNode=e.appendChild(ei())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ei()),e.__insert(this.endNode=ei())}insertAfterPart(e){e.__insert(this.startNode=ei()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;Es(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Qt,t(this)}const e=this.__pendingValue;e!==Qt&&(ic(e)?e!==this.value&&this.__commitText(e):e instanceof Um?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Ch(e)?this.__commitIterable(e):e===jc?(this.value=jc,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n=typeof(e=e==null?"":e)=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Rh&&this.value.template===t)this.value.update(e.values);else{const n=new Rh(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const r of e)n=t[i],n===void 0&&(n=new co(this.options),t.push(n),i===0?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){nc(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Zg{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;Es(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Qt,t(this)}if(this.__pendingValue===Qt)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=Qt}}class $g extends km{constructor(e,t,n){super(e,t,n),this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new Kg(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Kg extends Bm{}let zm=!1;(()=>{try{const s={get capture(){return zm=!0,!1}};window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{}})();class Qg{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;Es(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=Qt,r(this)}if(this.__pendingValue===Qt)return;const e=this.__pendingValue,t=this.value,n=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=e!=null&&(t==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=e0(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=Qt}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const e0=s=>s&&(zm?{capture:s.capture,passive:s.passive,once:s.once}:s.capture);function t0(s){let e=As.get(s.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},As.set(s.type,e));let t=e.stringsArray.get(s.strings);if(t!==void 0)return t;const n=s.strings.join(Nn);return t=e.keyString.get(n),t===void 0&&(t=new Nm(s,s.getTemplateElement()),e.keyString.set(n,t)),e.stringsArray.set(s.strings,t),t}const As=new Map,mr=new WeakMap,Hm=(s,e,t)=>{let n=mr.get(e);n===void 0&&(nc(e,e.firstChild),mr.set(e,n=new co(Object.assign({templateFactory:t0},t))),n.appendInto(e)),n.setValue(s),n.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n0=new class{handleAttributeExpressions(s,e,t,n){const i=e[0];return i==="."?new $g(s,e.slice(1),t).parts:i==="@"?[new Qg(s,e.slice(1),n.eventContext)]:i==="?"?[new Zg(s,e.slice(1),t)]:new km(s,e,t).parts}handleTextExpression(s){return new co(s)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Gs=(s,...e)=>new Um(s,e,"html",n0),Vm=(s,e)=>`${s}--${e}`;let eo=!0;window.ShadyCSS===void 0?eo=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),eo=!1);const i0=s=>e=>{const t=Vm(e.type,s);let n=As.get(t);n===void 0&&(n={stringsArray:new WeakMap,keyString:new Map},As.set(t,n));let i=n.stringsArray.get(e.strings);if(i!==void 0)return i;const r=e.strings.join(Nn);if(i=n.keyString.get(r),i===void 0){const a=e.getTemplateElement();eo&&window.ShadyCSS.prepareTemplateDom(a,s),i=new Nm(e,a),n.keyString.set(r,i)}return n.stringsArray.set(e.strings,i),i},r0=["html","svg"],Gm=new Set,s0=(s,e,t)=>{Gm.add(s);const n=t?t.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(r===0)return void window.ShadyCSS.prepareTemplateStyles(n,s);const a=document.createElement("style");for(let h=0;h<r;h++){const c=i[h];c.parentNode.removeChild(c),a.textContent+=c.textContent}(h=>{r0.forEach(c=>{const u=As.get(Vm(c,h));u!==void 0&&u.keyString.forEach(d=>{const{element:{content:p}}=d,m=new Set;Array.from(p.querySelectorAll("style")).forEach(g=>{m.add(g)}),Wc(d,m)})})})(s);const o=n.content;t?function(h,c,u=null){const{element:{content:d},parts:p}=h;if(u==null)return void d.appendChild(c);const m=document.createTreeWalker(d,133,null,!1);let g=gs(p),v=0,f=-1;for(;m.nextNode();)for(f++,m.currentNode===u&&(v=Xg(c),u.parentNode.insertBefore(c,u));g!==-1&&p[g].index===f;){if(v>0){for(;g!==-1;)p[g].index+=v,g=gs(p,g);return}g=gs(p,g)}}(t,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(n,s);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(t){o.insertBefore(a,o.firstChild);const h=new Set;h.add(a),Wc(t,h)}};window.JSCompiler_renameProperty=(s,e)=>s;const Lh={toAttribute(s,e){switch(e){case Boolean:return s?"":null;case Object:case Array:return s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){switch(e){case Boolean:return s!==null;case Number:return s===null?null:Number(s);case Object:case Array:return JSON.parse(s)}return s}},Wm=(s,e)=>e!==s&&(e==e||s==s),Io={attribute:!0,type:String,converter:Lh,reflect:!1,hasChanged:Wm};class rc extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);i!==void 0&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,n)=>this._classProperties.set(n,t))}}static createProperty(e,t=Io){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdateInternal(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Io}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const i of n)this.createProperty(i,t[i])}}static _attributeNameForProperty(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Wm){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||Lh,r=typeof i=="function"?i:i.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||Lh.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const n=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,n)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Io){const i=this.constructor,r=i._attributeNameForProperty(e,n);if(r!==void 0){const a=i._propertyValueToAttribute(t,n);if(a===void 0)return;this._updateState=8|this._updateState,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(i!==void 0){const r=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,r),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let i=!0;if(e!==void 0){const r=this.constructor;n=n||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),n.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(n){throw e=!1,this._markUpdated(),n}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,n)=>this._propertyToAttribute(n,this[n],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}rc.finalized=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const a0=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,s)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function ge(s){return(e,t)=>t!==void 0?((n,i,r)=>{i.constructor.createProperty(r,n)})(s,e,t):a0(s,e)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ph=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jm=Symbol();class o0{constructor(e,t){if(t!==jm)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(Ph?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Xc={};class Oo extends rc{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(r,a)=>r.reduceRight((o,l)=>Array.isArray(l)?t(l,o):(o.add(l),o),a),n=t(e,new Set),i=[];n.forEach(r=>i.unshift(r)),this._styles=i}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Ph){const n=Array.prototype.slice.call(t.cssRules).reduce((i,r)=>i+r.cssText,"");return new o0(String(n),jm)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?Ph?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Xc&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(n=>{const i=document.createElement("style");i.textContent=n.cssText,this.renderRoot.appendChild(i)}))}render(){return Xc}}Oo.finalized=!0,Oo.render=(s,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const n=t.scopeName,i=mr.has(e),r=eo&&e.nodeType===11&&!!e.host,a=r&&!Gm.has(n),o=a?document.createDocumentFragment():e;if(Hm(s,o,Object.assign({templateFactory:i0(n)},t)),a){const l=mr.get(o);mr.delete(o);const h=l.value instanceof Rh?l.value.template:void 0;s0(n,o,h),nc(e,e.firstChild),e.appendChild(o),mr.set(e,l)}!i&&r&&window.ShadyCSS.styleElement(e.host)},Oo.shadowRootOptions={mode:"open"};class Ht{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,e);e.target=null}}}const ct=[];for(let s=0;s<256;s++)ct[s]=(s<16?"0":"")+s.toString(16);let Yc=1234567;const vs=Math.PI/180,Rs=180/Math.PI;function kt(){const s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(ct[255&s]+ct[s>>8&255]+ct[s>>16&255]+ct[s>>24&255]+"-"+ct[255&e]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[63&t|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[255&n]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function Dh(s,e){return(s%e+e)%e}function ys(s,e,t){return(1-t)*s+t*e}function Ih(s){return(s&s-1)==0&&s!==0}function qm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function to(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}var Xm=Object.freeze({__proto__:null,DEG2RAD:vs,RAD2DEG:Rs,generateUUID:kt,clamp:tt,euclideanModulo:Dh,mapLinear:function(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:ys,damp:function(s,e,t,n){return ys(s,e,1-Math.exp(-t*n))},pingpong:function(s,e=1){return e-Math.abs(Dh(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){s!==void 0&&(Yc=s);let e=Yc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(s){return s*vs},radToDeg:function(s){return s*Rs},isPowerOfTwo:Ih,ceilPowerOfTwo:qm,floorPowerOfTwo:to,setQuaternionFromProperEuler:function(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+n)/2),c=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*c,l*u,l*d,o*h);break;case"YZY":s.set(l*d,o*c,l*u,o*h);break;case"ZXZ":s.set(l*u,l*d,o*c,o*h);break;case"XZX":s.set(o*c,l*m,l*p,o*h);break;case"YXY":s.set(l*p,o*c,l*m,o*h);break;case"ZYZ":s.set(l*m,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:function(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}},denormalize:function(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}});class Q{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Q.prototype.isVector2=!0;class Qe{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],p=n[5],m=n[8],g=i[0],v=i[3],f=i[6],b=i[1],x=i[4],y=i[7],_=i[2],M=i[5],S=i[8];return r[0]=a*g+o*b+l*_,r[3]=a*v+o*x+l*M,r[6]=a*f+o*y+l*S,r[1]=h*g+c*b+u*_,r[4]=h*v+c*x+u*M,r[7]=h*f+c*y+u*S,r[2]=d*g+p*b+m*_,r[5]=d*v+p*x+m*M,r[8]=d*f+p*y+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-n*r*c+n*o*l+i*r*h-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*r,p=h*r-a*l,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(i*h-c*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(c*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=p*g,e[7]=(n*l-h*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-i*h,i*l,-i*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],h=i[4],c=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*h,i[6]=t*o+n*c,i[1]=-n*r+t*l,i[4]=-n*a+t*h,i[7]=-n*o+t*c,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Ym(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ci(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function Ha(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}Qe.prototype.isMatrix3=!0;const No={srgb:{"srgb-linear":Ci},"srgb-linear":{srgb:Ha}},jt={legacyMode:!0,get workingColorSpace(){return"srgb-linear"},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(No[e]&&No[e][t]!==void 0){const n=No[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},qt={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Fo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}function js(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class he{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i="srgb-linear"){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i="srgb-linear"){if(e=Dh(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fo(a,r,e+1/3),this.g=Fo(a,r,e),this.b=Fo(a,r,e-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(e,t="srgb"){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,h=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,h,c,t)}}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t="srgb"){const n=Jm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return jt.fromWorkingColorSpace(js(this,et),e),tt(255*et.r,0,255)<<16^tt(255*et.g,0,255)<<8^tt(255*et.b,0,255)<<0}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t="srgb-linear"){jt.fromWorkingColorSpace(js(this,et),t);const n=et.r,i=et.g,r=et.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t="srgb-linear"){return jt.fromWorkingColorSpace(js(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e="srgb"){return jt.fromWorkingColorSpace(js(this,et),e),e!=="srgb"?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${255*et.r|0},${255*et.g|0},${255*et.b|0})`}offsetHSL(e,t,n){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=n,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(Ws);const n=ys(qt.h,Ws.h,t),i=ys(qt.s,Ws.s,t),r=ys(qt.l,Ws.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}let ki;he.NAMES=Jm,he.prototype.isColor=!0,he.prototype.r=1,he.prototype.g=1,he.prototype.b=1;class Si{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Cs("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=255*Ci(r[a]/255);return n.putImageData(i,0,0),t}if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Ci(t[n]/255)):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class sc{constructor(e=null){this.uuid=kt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Uo(i[a].image)):r.push(Uo(i[a]))}else r=Uo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Si.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}sc.prototype.isSource=!0;let l0=0;class Ye extends Ht{constructor(e=Ye.DEFAULT_IMAGE,t=Ye.DEFAULT_MAPPING,n=1001,i=1001,r=1006,a=1008,o=1023,l=1009,h=1,c=3e3){super(),Object.defineProperty(this,"id",{value:l0++}),this.uuid=kt(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ye.DEFAULT_IMAGE=null,Ye.DEFAULT_MAPPING=300,Ye.prototype.isTexture=!0;class Ue{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],m=l[9],g=l[2],v=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+v)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(h+1)/2,y=(p+1)/2,_=(f+1)/2,M=(c+d)/4,S=(u+g)/4,D=(m+v)/4;return x>y&&x>_?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=M/n,r=S/n):y>_?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=D/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=S/r,i=D/r),this.set(n,i,r,t),this}let b=Math.sqrt((v-m)*(v-m)+(u-g)*(u-g)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(v-m)/b,this.y=(u-g)/b,this.z=(d-c)/b,this.w=Math.acos((h+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ue.prototype.isVector4=!0;class pt extends Ht{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}pt.prototype.isWebGLRenderTarget=!0;class uo extends Ye{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}uo.prototype.isDataArrayTexture=!0;(class extends pt{constructor(s,e,t){super(s,e),this.depth=t,this.texture=new uo(null,s,e,t),this.texture.isRenderTargetTexture=!0}}).prototype.isWebGLArrayRenderTarget=!0;class ac extends Ye{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ac.prototype.isData3DTexture=!0;(class extends pt{constructor(s,e,t){super(s,e),this.depth=t,this.texture=new ac(null,s,e,t),this.texture.isRenderTargetTexture=!0}}).prototype.isWebGL3DRenderTarget=!0;(class extends pt{constructor(s,e,t,n={}){super(s,e,n);const i=this.texture;this.texture=[];for(let r=0;r<t;r++)this.texture[r]=i.clone(),this.texture[r].isRenderTargetTexture=!0}setSize(s,e,t=1){if(this.width!==s||this.height!==e||this.depth!==t){this.width=s,this.height=e,this.depth=t;for(let n=0,i=this.texture.length;n<i;n++)this.texture[n].image.width=s,this.texture[n].image.height=e,this.texture[n].image.depth=t;this.dispose()}return this.viewport.set(0,0,s,e),this.scissor.set(0,0,s,e),this}copy(s){this.dispose(),this.width=s.width,this.height=s.height,this.depth=s.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.texture.length=0;for(let e=0,t=s.texture.length;e<t;e++)this.texture[e]=s.texture[e].clone();return this}}).prototype.isWebGLMultipleRenderTargets=!0;class wt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],m=r[a+2],g=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=g);if(u!==g||l!==d||h!==p||c!==m){let v=1-o;const f=l*d+h*p+c*m+u*g,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const _=Math.sqrt(x),M=Math.atan2(_,f*b);v=Math.sin(v*M)/_,o=Math.sin(o*M)/_}const y=o*b;if(l=l*v+d*y,h=h*v+p*y,c=c*v+m*y,u=u*v+g*y,v===1-o){const _=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=_,h*=_,c*=_,u*=_}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],h=n[i+2],c=n[i+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+c*u+l*p-h*d,e[t+1]=l*m+c*d+h*u-o*p,e[t+2]=h*m+c*p+o*d-l*u,e[t+3]=c*m-o*u-l*d-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"YXZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"ZXY":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"ZYX":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"YZX":this._x=d*c*u+h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u-d*p*m;break;case"XZY":this._x=d*c*u-h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+h)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-h)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=n*c+a*o+i*h-r*l,this._y=i*c+a*l+r*o-n*h,this._z=r*c+a*h+n*l-i*o,this._w=a*c-n*o-i*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}wt.prototype.isQuaternion=!0;class E{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=l*t+a*i-o*n,c=l*n+o*t-r*i,u=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=h*l+d*-r+c*-o-u*-a,this.y=c*l+d*-a+u*-r-h*-o,this.z=u*l+d*-o+h*-a-c*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}E.prototype.isVector3=!0;const ko=new E,Jc=new wt;class dt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,h=e.length;l<h;l+=3){const c=e[l],u=e[l+1],d=e[l+2];c<t&&(t=c),u<n&&(n=u),d<i&&(i=d),c>r&&(r=c),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,h=e.count;l<h;l++){const c=e.getX(l),u=e.getY(l),d=e.getZ(l);c<t&&(t=c),u<n&&(n=u),d<i&&(i=d),c>r&&(r=c),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)ci.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ci)}else n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox),Bo.applyMatrix4(e.matrixWorld),this.union(Bo);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),qs.subVectors(this.max,Pr),Bi.subVectors(e.a,Pr),zi.subVectors(e.b,Pr),Hi.subVectors(e.c,Pr),Hn.subVectors(zi,Bi),Vn.subVectors(Hi,zi),ui.subVectors(Bi,Hi);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ui.z,ui.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ui.z,0,-ui.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ui.y,ui.x,0];return!!zo(t,Bi,zi,Hi,qs)&&(t=[1,0,0,0,1,0,0,0,1],!!zo(t,Bi,zi,Hi,qs)&&(Xs.crossVectors(Hn,Vn),t=[Xs.x,Xs.y,Xs.z],zo(t,Bi,zi,Hi,qs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ci.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(ci).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}dt.prototype.isBox3=!0;const gn=[new E,new E,new E,new E,new E,new E,new E,new E],ci=new E,Bo=new dt,Bi=new E,zi=new E,Hi=new E,Hn=new E,Vn=new E,ui=new E,Pr=new E,qs=new E,Xs=new E,di=new E;function zo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){di.fromArray(s,r);const o=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),h=t.dot(di),c=n.dot(di);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const h0=new dt,Zc=new E,Ys=new E,Ho=new E;class Bn{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):h0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ho.subVectors(e,this.center);const t=Ho.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=.5*(n-this.radius);this.center.add(Ho.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Ys.set(0,0,1).multiplyScalar(e.radius):Ys.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Zc.copy(e.center).add(Ys)),this.expandByPoint(Zc.copy(e.center).sub(Ys)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new E,Vo=new E,Js=new E,Gn=new E,Go=new E,Zs=new E,Wo=new E;class Li{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.direction).multiplyScalar(t).add(this.origin),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vo.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Vo);const r=.5*e.distanceTo(t),a=-this.direction.dot(Js),o=Gn.dot(this.direction),l=-Gn.dot(Js),h=Gn.lengthSq(),c=Math.abs(1-a*a);let u,d,p,m;if(c>0)if(u=a*l-o,d=a*o-l,m=r*c,u>=0)if(d>=-m)if(d<=m){const g=1/c;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Js).multiplyScalar(d).add(Vo),p}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,i=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,i=(e.min.x-d.x)*h),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),n>a||r>i?null:((r>n||n!=n)&&(n=r),(a<i||i!=i)&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,i,r){Go.subVectors(t,e),Zs.subVectors(n,e),Wo.crossVectors(Go,Zs);let a,o=this.direction.dot(Wo);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Gn.subVectors(this.origin,e);const l=a*this.direction.dot(Zs.crossVectors(Gn,Zs));if(l<0)return null;const h=a*this.direction.dot(Go.cross(Gn));if(h<0||l+h>o)return null;const c=-a*Gn.dot(Wo);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,h,c,u,d,p,m,g,v){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=g,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*c,p=a*u,m=o*c,g=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+m*h,t[5]=d-g*h,t[9]=-o*l,t[2]=g-d*h,t[6]=m+p*h,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,p=l*u,m=h*c,g=h*u;t[0]=d+g*o,t[4]=m*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=p*o-m,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,p=l*u,m=h*c,g=h*u;t[0]=d-g*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*c,t[9]=g-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,p=a*u,m=o*c,g=o*u;t[0]=l*c,t[4]=m*h-p,t[8]=d*h+g,t[1]=l*u,t[5]=g*h+d,t[9]=p*h-m,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*h,m=o*l,g=o*h;t[0]=l*c,t[4]=g-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*l,p=a*h,m=o*l,g=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+g,t[5]=a*c,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*c,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,u0)}lookAt(e,t,n){const i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Wn.crossVectors(n,Rt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Wn.crossVectors(n,Rt)),Wn.normalize(),$s.crossVectors(Rt,Wn),i[0]=Wn.x,i[4]=$s.x,i[8]=Rt.x,i[1]=Wn.y,i[5]=$s.y,i[9]=Rt.y,i[2]=Wn.z,i[6]=$s.z,i[10]=Rt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],p=n[13],m=n[2],g=n[6],v=n[10],f=n[14],b=n[3],x=n[7],y=n[11],_=n[15],M=i[0],S=i[4],D=i[8],P=i[12],I=i[1],F=i[5],B=i[9],W=i[13],O=i[2],G=i[6],z=i[10],J=i[14],Z=i[3],X=i[7],V=i[11],oe=i[15];return r[0]=a*M+o*I+l*O+h*Z,r[4]=a*S+o*F+l*G+h*X,r[8]=a*D+o*B+l*z+h*V,r[12]=a*P+o*W+l*J+h*oe,r[1]=c*M+u*I+d*O+p*Z,r[5]=c*S+u*F+d*G+p*X,r[9]=c*D+u*B+d*z+p*V,r[13]=c*P+u*W+d*J+p*oe,r[2]=m*M+g*I+v*O+f*Z,r[6]=m*S+g*F+v*G+f*X,r[10]=m*D+g*B+v*z+f*V,r[14]=m*P+g*W+v*J+f*oe,r[3]=b*M+x*I+y*O+_*Z,r[7]=b*S+x*F+y*G+_*X,r[11]=b*D+x*B+y*z+_*V,r[15]=b*P+x*W+y*J+_*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*l*u-i*h*u-r*o*d+n*h*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*h*d+r*a*d-i*a*p+i*h*c-r*l*c)+e[11]*(+t*h*u-t*o*p-r*a*u+n*a*p+r*o*c-n*h*c)+e[15]*(-i*o*c-t*l*u+t*o*d+i*a*u-n*a*d+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],m=e[12],g=e[13],v=e[14],f=e[15],b=u*v*h-g*d*h+g*l*p-o*v*p-u*l*f+o*d*f,x=m*d*h-c*v*h-m*l*p+a*v*p+c*l*f-a*d*f,y=c*g*h-m*u*h+m*o*p-a*g*p-c*o*f+a*u*f,_=m*u*l-c*g*l-m*o*d+a*g*d+c*o*v-a*u*v,M=t*b+n*x+i*y+r*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=b*S,e[1]=(g*d*r-u*v*r-g*i*p+n*v*p+u*i*f-n*d*f)*S,e[2]=(o*v*r-g*l*r+g*i*h-n*v*h-o*i*f+n*l*f)*S,e[3]=(u*l*r-o*d*r-u*i*h+n*d*h+o*i*p-n*l*p)*S,e[4]=x*S,e[5]=(c*v*r-m*d*r+m*i*p-t*v*p-c*i*f+t*d*f)*S,e[6]=(m*l*r-a*v*r-m*i*h+t*v*h+a*i*f-t*l*f)*S,e[7]=(a*d*r-c*l*r+c*i*h-t*d*h-a*i*p+t*l*p)*S,e[8]=y*S,e[9]=(m*u*r-c*g*r-m*n*p+t*g*p+c*n*f-t*u*f)*S,e[10]=(a*g*r-m*o*r+m*n*h-t*g*h-a*n*f+t*o*f)*S,e[11]=(c*o*r-a*u*r-c*n*h+t*u*h+a*n*p-t*o*p)*S,e[12]=_*S,e[13]=(c*g*i-m*u*i+m*n*d-t*g*d-c*n*v+t*u*v)*S,e[14]=(m*o*i-a*g*i-m*n*l+t*g*l+a*n*v-t*o*v)*S,e[15]=(a*u*i-c*o*i+c*n*l-t*u*l-a*n*d+t*o*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,c*o+n,c*l-i*a,0,h*l-i*o,c*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,u=o+o,d=r*h,p=r*c,m=r*u,g=a*c,v=a*u,f=o*u,b=l*h,x=l*c,y=l*u,_=n.x,M=n.y,S=n.z;return i[0]=(1-(g+f))*_,i[1]=(p+y)*_,i[2]=(m-x)*_,i[3]=0,i[4]=(p-y)*M,i[5]=(1-(d+f))*M,i[6]=(v+b)*M,i[7]=0,i[8]=(m+x)*S,i[9]=(v-b)*S,i[10]=(1-(d+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Vi.set(i[0],i[1],i[2]).length();const a=Vi.set(i[4],i[5],i[6]).length(),o=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const l=1/r,h=1/a,c=1/o;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=c,Xt.elements[9]*=c,Xt.elements[10]*=c,t.setFromRotationMatrix(Xt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),h=2*r/(n-i),c=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=h,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),h=1/(n-i),c=1/(a-r),u=(t+e)*l,d=(n+i)*h,p=(a+r)*c;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ue.prototype.isMatrix4=!0;const Vi=new E,Xt=new ue,c0=new E(0,0,0),u0=new E(1,1,1),Wn=new E,$s=new E,Rt=new E,$c=new ue,Kc=new wt;class Fn{constructor(e=0,t=0,n=0,i=Fn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],h=i[5],c=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Fn.prototype.isEuler=!0,Fn.DefaultOrder="XYZ",Fn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let d0=0;const Qc=new E,Gi=new wt,yn=new ue,Ks=new E,Dr=new E,p0=new E,m0=new wt,eu=new E(1,0,0),tu=new E(0,1,0),nu=new E(0,0,1),f0={type:"added"},iu={type:"removed"};class Le extends Ht{constructor(){super(),Object.defineProperty(this,"id",{value:d0++}),this.uuid=kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DefaultUp.clone();const e=new E,t=new Fn,n=new wt,i=new E(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Qe}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Le.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(nu,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(nu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Dr,Ks,this.up):yn.lookAt(Ks,Dr,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(yn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(iu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,m0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Le.DefaultUp=new E(0,1,0),Le.DefaultMatrixAutoUpdate=!0,Le.prototype.isObject3D=!0;const Yt=new E,xn=new E,jo=new E,bn=new E,Wi=new E,ji=new E,ru=new E,qo=new E,Xo=new E,Yo=new E;class Ke{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),xn.subVectors(n,t),jo.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(xn),l=Yt.dot(jo),h=xn.dot(xn),c=xn.dot(jo),u=a*h-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,p=(h*l-o*c)*d,m=(a*c-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,bn),l.set(0,0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),xn.subVectors(e,t),Yt.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),.5*Yt.cross(xn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ke.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ke.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ke.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ke.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ke.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Wi.subVectors(i,n),ji.subVectors(r,n),qo.subVectors(e,n);const l=Wi.dot(qo),h=ji.dot(qo);if(l<=0&&h<=0)return t.copy(n);Xo.subVectors(e,i);const c=Wi.dot(Xo),u=ji.dot(Xo);if(c>=0&&u<=c)return t.copy(i);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(Wi,a);Yo.subVectors(e,r);const p=Wi.dot(Yo),m=ji.dot(Yo);if(m>=0&&p<=m)return t.copy(r);const g=p*h-l*m;if(g<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(n).addScaledVector(ji,o);const v=c*m-p*u;if(v<=0&&u-c>=0&&p-m>=0)return ru.subVectors(r,i),o=(u-c)/(u-c+(p-m)),t.copy(i).addScaledVector(ru,o);const f=1/(v+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(Wi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let g0=0;class qe extends Ht{constructor(){super(),Object.defineProperty(this,"id",{value:g0++}),this.uuid=kt(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1;continue}const i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}qe.prototype.isMaterial=!0,qe.fromType=function(){return null};class Dt extends qe{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Dt.prototype.isMeshBasicMaterial=!0;const Ze=new E,Qs=new Q;class ze{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new he),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Q),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new E),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Ue),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}}ze.prototype.isBufferAttribute=!0;class Zm extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $m extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}}(class extends ze{constructor(s,e,t){super(new Uint16Array(s),e,t)}}).prototype.isFloat16BufferAttribute=!0;class nt extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}}let v0=0;const Ot=new ue,Jo=new Le,qi=new E,Ct=new dt,Ir=new dt,st=new E;class Be extends Ht{constructor(){super(),Object.defineProperty(this,"id",{value:v0++}),this.uuid=kt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?$m:Zm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ct.setFromBufferAttribute(r),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new E,1/0);if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(st.addVectors(Ct.min,Ir.min),Ct.expandByPoint(st),st.addVectors(Ct.max,Ir.max),Ct.expandByPoint(st)):(Ct.expandByPoint(Ir.min),Ct.expandByPoint(Ir.max))}Ct.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)st.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(st));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)st.fromBufferAttribute(o,h),l&&(qi.fromBufferAttribute(e,h),st.add(qi)),i=Math.max(i,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,h=[],c=[];for(let I=0;I<o;I++)h[I]=new E,c[I]=new E;const u=new E,d=new E,p=new E,m=new Q,g=new Q,v=new Q,f=new E,b=new E;function x(I,F,B){u.fromArray(i,3*I),d.fromArray(i,3*F),p.fromArray(i,3*B),m.fromArray(a,2*I),g.fromArray(a,2*F),v.fromArray(a,2*B),d.sub(u),p.sub(u),g.sub(m),v.sub(m);const W=1/(g.x*v.y-v.x*g.y);isFinite(W)&&(f.copy(d).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(W),b.copy(p).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(W),h[I].add(f),h[F].add(f),h[B].add(f),c[I].add(b),c[F].add(b),c[B].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let I=0,F=y.length;I<F;++I){const B=y[I],W=B.start;for(let O=W,G=W+B.count;O<G;O+=3)x(n[O+0],n[O+1],n[O+2])}const _=new E,M=new E,S=new E,D=new E;function P(I){S.fromArray(r,3*I),D.copy(S);const F=h[I];_.copy(F),_.sub(S.multiplyScalar(S.dot(F))).normalize(),M.crossVectors(D,F);const B=M.dot(c[I])<0?-1:1;l[4*I]=_.x,l[4*I+1]=_.y,l[4*I+2]=_.z,l[4*I+3]=B}for(let I=0,F=y.length;I<F;++I){const B=y[I],W=B.start;for(let O=W,G=W+B.count;O<G;O+=3)P(n[O+0]),P(n[O+1]),P(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,a=new E,o=new E,l=new E,h=new E,c=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),g=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),c.subVectors(a,r),u.subVectors(i,r),c.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,v),o.add(c),l.add(c),h.add(c),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),u.subVectors(i,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!e||!e.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i].array,a=e.attributes[i],o=a.array,l=a.itemSize*t,h=Math.min(o.length,r.length-l);for(let c=0,u=l;c<h;c++,u++)r[u]=o[c]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let p=0,m=0;for(let g=0,v=l.length;g<v;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*c;for(let f=0;f<c;f++)d[m++]=h[p++]}return new ze(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Be,n=this.index.array,i=this.attributes;for(const o in i){const l=e(i[o],n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){const d=e(h[c],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(i[l]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(t))}const r=e.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Be.prototype.isBufferGeometry=!0;const su=new ue,Xi=new Li,Zo=new Bn,jn=new E,qn=new E,Xn=new E,$o=new E,Ko=new E,Qo=new E,ea=new E,ta=new E,na=new E,ia=new Q,ra=new Q,sa=new Q,el=new E,aa=new E;class pe extends Le{constructor(e=new Be,t=new Dt){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),e.ray.intersectsSphere(Zo)===!1)||(su.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(su),n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,h=n.morphAttributes.position,c=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,v=p.length;g<v;g++){const f=p[g],b=i[f.materialIndex];for(let x=Math.max(f.start,m.start),y=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));x<y;x+=3){const _=o.getX(x),M=o.getX(x+1),S=o.getX(x+2);a=oa(this,b,e,Xi,l,h,c,u,d,_,M,S),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else for(let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);g<v;g+=3){const f=o.getX(g),b=o.getX(g+1),x=o.getX(g+2);a=oa(this,i,e,Xi,l,h,c,u,d,f,b,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}else if(l!==void 0)if(Array.isArray(i))for(let g=0,v=p.length;g<v;g++){const f=p[g],b=i[f.materialIndex];for(let x=Math.max(f.start,m.start),y=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));x<y;x+=3)a=oa(this,b,e,Xi,l,h,c,u,d,x,x+1,x+2),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=f.materialIndex,t.push(a))}else for(let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);g<v;g+=3)a=oa(this,i,e,Xi,l,h,c,u,d,g,g+1,g+2),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}function oa(s,e,t,n,i,r,a,o,l,h,c,u){jn.fromBufferAttribute(i,h),qn.fromBufferAttribute(i,c),Xn.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(r&&d){ea.set(0,0,0),ta.set(0,0,0),na.set(0,0,0);for(let m=0,g=r.length;m<g;m++){const v=d[m],f=r[m];v!==0&&($o.fromBufferAttribute(f,h),Ko.fromBufferAttribute(f,c),Qo.fromBufferAttribute(f,u),a?(ea.addScaledVector($o,v),ta.addScaledVector(Ko,v),na.addScaledVector(Qo,v)):(ea.addScaledVector($o.sub(jn),v),ta.addScaledVector(Ko.sub(qn),v),na.addScaledVector(Qo.sub(Xn),v)))}jn.add(ea),qn.add(ta),Xn.add(na)}s.isSkinnedMesh&&(s.boneTransform(h,jn),s.boneTransform(c,qn),s.boneTransform(u,Xn));const p=function(m,g,v,f,b,x,y,_){let M;if(M=g.side===1?f.intersectTriangle(y,x,b,!0,_):f.intersectTriangle(b,x,y,g.side!==2,_),M===null)return null;aa.copy(_),aa.applyMatrix4(m.matrixWorld);const S=v.ray.origin.distanceTo(aa);return S<v.near||S>v.far?null:{distance:S,point:aa.clone(),object:m}}(s,e,t,n,jn,qn,Xn,el);if(p){o&&(ia.fromBufferAttribute(o,h),ra.fromBufferAttribute(o,c),sa.fromBufferAttribute(o,u),p.uv=Ke.getUV(el,jn,qn,Xn,ia,ra,sa,new Q)),l&&(ia.fromBufferAttribute(l,h),ra.fromBufferAttribute(l,c),sa.fromBufferAttribute(l,u),p.uv2=Ke.getUV(el,jn,qn,Xn,ia,ra,sa,new Q));const m={a:h,b:c,c:u,normal:new E,materialIndex:0};Ke.getNormal(jn,qn,Xn,m.normal),p.face=m}return p}pe.prototype.isMesh=!0;class oi extends Be{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],u=[];let d=0,p=0;function m(g,v,f,b,x,y,_,M,S,D,P){const I=y/S,F=_/D,B=y/2,W=_/2,O=M/2,G=S+1,z=D+1;let J=0,Z=0;const X=new E;for(let V=0;V<z;V++){const oe=V*F-W;for(let se=0;se<G;se++){const le=se*I-B;X[g]=le*b,X[v]=oe*x,X[f]=O,h.push(X.x,X.y,X.z),X[g]=0,X[v]=0,X[f]=M>0?1:-1,c.push(X.x,X.y,X.z),u.push(se/S),u.push(1-V/D),J+=1}}for(let V=0;V<D;V++)for(let oe=0;oe<S;oe++){const se=d+oe+G*V,le=d+oe+G*(V+1),ne=d+(oe+1)+G*(V+1),xe=d+(oe+1)+G*V;l.push(se,le,xe),l.push(le,ne,xe),Z+=6}o.addGroup(p,Z,P),p+=Z,d+=J}m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gt(s){const e={};for(let t=0;t<s.length;t++){const n=yr(s[t]);for(const i in n)e[i]=n[i]}return e}const y0={clone:yr,merge:gt};class St extends qe{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}St.prototype.isShaderMaterial=!0;class lc extends Le{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}lc.prototype.isCamera=!0;class lt extends lc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*Rs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*vs*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Rs*Math.atan(Math.tan(.5*vs*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*vs*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}lt.prototype.isPerspectiveCamera=!0;class Ls extends Le{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0)return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");this.renderTarget=n;const i=new lt(90,1,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new E(1,0,0)),this.add(i);const r=new lt(90,1,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new E(-1,0,0)),this.add(r);const a=new lt(90,1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new E(0,1,0)),this.add(a);const o=new lt(90,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new E(0,-1,0)),this.add(o);const l=new lt(90,1,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new E(0,0,1)),this.add(l);const h=new lt(90,1,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new E(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,h]=this.children,c=e.getRenderTarget(),u=e.outputEncoding,d=e.toneMapping,p=e.xr.enabled;e.outputEncoding=3e3,e.toneMapping=0,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(c),e.outputEncoding=u,e.toneMapping=d,e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class po extends Ye{constructor(e,t,n,i,r,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:301,n,i,r,a,o,l,h,c),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}po.prototype.isCubeTexture=!0;class mo extends pt{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new po(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new oi(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const a=new pe(i,r),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Ls(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}mo.prototype.isWebGLCubeRenderTarget=!0;const tl=new E,x0=new E,b0=new Qe;class Dn{constructor(e=new E(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=tl.subVectors(n,t).cross(x0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||b0.getNormalMatrix(e),i=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Dn.prototype.isPlane=!0;const Yi=new Bn,la=new E;class fo{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],h=n[5],c=n[6],u=n[7],d=n[8],p=n[9],m=n[10],g=n[11],v=n[12],f=n[13],b=n[14],x=n[15];return t[0].setComponents(o-i,u-l,g-d,x-v).normalize(),t[1].setComponents(o+i,u+l,g+d,x+v).normalize(),t[2].setComponents(o+r,u+h,g+p,x+f).normalize(),t[3].setComponents(o-r,u-h,g-p,x-f).normalize(),t[4].setComponents(o-a,u-c,g-m,x-b).normalize(),t[5].setComponents(o+a,u+c,g+m,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(la.x=i.normal.x>0?e.max.x:e.min.x,la.y=i.normal.y>0?e.max.y:e.min.y,la.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Km(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function _0(s,e){const t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);const r=n.get(i);r&&(s.deleteBuffer(r.buffer),n.delete(i))},update:function(i,r){if(i.isGLBufferAttribute){const o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);const a=n.get(i);a===void 0?n.set(i,function(o,l){const h=o.array,c=o.usage,u=s.createBuffer();let d;if(s.bindBuffer(l,u),s.bufferData(l,h,c),o.onUploadCallback(),h instanceof Float32Array)d=5126;else if(h instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");d=5131}else d=5123;else if(h instanceof Int16Array)d=5122;else if(h instanceof Uint32Array)d=5125;else if(h instanceof Int32Array)d=5124;else if(h instanceof Int8Array)d=5120;else if(h instanceof Uint8Array)d=5121;else{if(!(h instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);d=5121}return{buffer:u,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version}}(i,r)):a.version<i.version&&(function(o,l,h){const c=l.array,u=l.updateRange;s.bindBuffer(h,o),u.count===-1?s.bufferSubData(h,0,c):(t?s.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count):s.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c.subarray(u.offset,u.offset+u.count)),u.count=-1)}(a.buffer,i,r),a.version=i.version)}}}class Fi extends Be{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),h=o+1,c=l+1,u=e/o,d=t/l,p=[],m=[],g=[],v=[];for(let f=0;f<c;f++){const b=f*d-a;for(let x=0;x<h;x++){const y=x*u-r;m.push(y,-b,0),g.push(0,0,1),v.push(x/o),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const x=b+h*f,y=b+h*(f+1),_=b+1+h*(f+1),M=b+1+h*f;p.push(x,y,M),p.push(y,_,M)}this.setIndex(p),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(g,3)),this.setAttribute("uv",new nt(v,2))}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}const Te={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},ae={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qe},uv2Transform:{value:new Qe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qe}}},on={basic:{uniforms:gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new he(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:gt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:gt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new he(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:gt([ae.points,ae.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:gt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:gt([ae.common,ae.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:gt([ae.sprite,ae.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:gt([ae.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:gt([ae.common,ae.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:gt([ae.lights,ae.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};function w0(s,e,t,n,i,r){const a=new he(0);let o,l,h=i===!0?0:1,c=null,u=0,d=null;function p(m,g){t.buffers.color.setClear(m.r,m.g,m.b,g,r)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),h=g,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,p(a,h)},render:function(m,g){let v=!1,f=g.isScene===!0?g.background:null;f&&f.isTexture&&(f=e.get(f));const b=s.xr,x=b.getSession&&b.getSession();x&&x.environmentBlendMode==="additive"&&(f=null),f===null?p(a,h):f&&f.isColor&&(p(f,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),f&&(f.isCubeTexture||f.mapping===306)?(l===void 0&&(l=new pe(new oi(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:yr(on.cube.uniforms),vertexShader:on.cube.vertexShader,fragmentShader:on.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,_,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,c===f&&u===f.version&&d===s.toneMapping||(l.material.needsUpdate=!0,c=f,u=f.version,d=s.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new pe(new Fi(2,2),new St({name:"BackgroundMaterial",uniforms:yr(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=f,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),c===f&&u===f.version&&d===s.toneMapping||(o.material.needsUpdate=!0,c=f,u=f.version,d=s.toneMapping),m.unshift(o,o.geometry,o.material,0,0,null))}}}function M0(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let h=l,c=!1;function u(_){return n.isWebGL2?s.bindVertexArray(_):r.bindVertexArrayOES(_)}function d(_){return n.isWebGL2?s.deleteVertexArray(_):r.deleteVertexArrayOES(_)}function p(_){const M=[],S=[],D=[];for(let P=0;P<i;P++)M[P]=0,S[P]=0,D[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:S,attributeDivisors:D,object:_,attributes:{},index:null}}function m(){const _=h.newAttributes;for(let M=0,S=_.length;M<S;M++)_[M]=0}function g(_){v(_,0)}function v(_,M){const S=h.newAttributes,D=h.enabledAttributes,P=h.attributeDivisors;S[_]=1,D[_]===0&&(s.enableVertexAttribArray(_),D[_]=1),P[_]!==M&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](_,M),P[_]=M)}function f(){const _=h.newAttributes,M=h.enabledAttributes;for(let S=0,D=M.length;S<D;S++)M[S]!==_[S]&&(s.disableVertexAttribArray(S),M[S]=0)}function b(_,M,S,D,P,I){n.isWebGL2!==!0||S!==5124&&S!==5125?s.vertexAttribPointer(_,M,S,D,P,I):s.vertexAttribIPointer(_,M,S,P,I)}function x(){y(),c=!0,h!==l&&(h=l,u(h.object))}function y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(_,M,S,D,P){let I=!1;if(a){const F=function(B,W,O){const G=O.wireframe===!0;let z=o[B.id];z===void 0&&(z={},o[B.id]=z);let J=z[W.id];J===void 0&&(J={},z[W.id]=J);let Z=J[G];return Z===void 0&&(Z=p(n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()),J[G]=Z),Z}(D,S,M);h!==F&&(h=F,u(h.object)),I=function(B,W){const O=h.attributes,G=B.attributes;let z=0;for(const J in G){const Z=O[J],X=G[J];if(Z===void 0||Z.attribute!==X||Z.data!==X.data)return!0;z++}return h.attributesNum!==z||h.index!==W}(D,P),I&&function(B,W){const O={},G=B.attributes;let z=0;for(const J in G){const Z=G[J],X={};X.attribute=Z,Z.data&&(X.data=Z.data),O[J]=X,z++}h.attributes=O,h.attributesNum=z,h.index=W}(D,P)}else{const F=M.wireframe===!0;h.geometry===D.id&&h.program===S.id&&h.wireframe===F||(h.geometry=D.id,h.program=S.id,h.wireframe=F,I=!0)}_.isInstancedMesh===!0&&(I=!0),P!==null&&t.update(P,34963),(I||c)&&(c=!1,function(F,B,W,O){if(n.isWebGL2===!1&&(F.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const G=O.attributes,z=W.getAttributes(),J=B.defaultAttributeValues;for(const Z in z){const X=z[Z];if(X.location>=0){let V=G[Z];if(V===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(V=F.instanceColor)),V!==void 0){const oe=V.normalized,se=V.itemSize,le=t.get(V);if(le===void 0)continue;const ne=le.buffer,xe=le.type,A=le.bytesPerElement;if(V.isInterleavedBufferAttribute){const T=V.data,k=T.stride,N=V.offset;if(T.isInstancedInterleavedBuffer){for(let R=0;R<X.locationSize;R++)v(X.location+R,T.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let R=0;R<X.locationSize;R++)g(X.location+R);s.bindBuffer(34962,ne);for(let R=0;R<X.locationSize;R++)b(X.location+R,se/X.locationSize,xe,oe,k*A,(N+se/X.locationSize*R)*A)}else{if(V.isInstancedBufferAttribute){for(let T=0;T<X.locationSize;T++)v(X.location+T,V.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let T=0;T<X.locationSize;T++)g(X.location+T);s.bindBuffer(34962,ne);for(let T=0;T<X.locationSize;T++)b(X.location+T,se/X.locationSize,xe,oe,se*A,se/X.locationSize*T*A)}}else if(J!==void 0){const oe=J[Z];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(X.location,oe);break;case 3:s.vertexAttrib3fv(X.location,oe);break;case 4:s.vertexAttrib4fv(X.location,oe);break;default:s.vertexAttrib1fv(X.location,oe)}}}}f()}(_,M,S,D),P!==null&&s.bindBuffer(34963,t.get(P).buffer))},reset:x,resetDefaultState:y,dispose:function(){x();for(const _ in o){const M=o[_];for(const S in M){const D=M[S];for(const P in D)d(D[P].object),delete D[P];delete M[S]}delete o[_]}},releaseStatesOfGeometry:function(_){if(o[_.id]===void 0)return;const M=o[_.id];for(const S in M){const D=M[S];for(const P in D)d(D[P].object),delete D[P];delete M[S]}delete o[_.id]},releaseStatesOfProgram:function(_){for(const M in o){const S=o[M];if(S[_.id]===void 0)continue;const D=S[_.id];for(const P in D)d(D[P].object),delete D[P];delete S[_.id]}},initAttributes:m,enableAttribute:g,disableUnusedAttributes:f}}function S0(s,e,t,n){const i=n.isWebGL2;let r;this.setMode=function(a){r=a},this.render=function(a,o){s.drawArrays(r,a,o),t.update(o,r,1)},this.renderInstances=function(a,o,l){if(l===0)return;let h,c;if(i)h=s,c="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[c](r,a,o,l),t.update(o,r,l)}}function T0(s,e,t){let n;function i(y){if(y==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,c=s.getParameter(34930),u=s.getParameter(35660),d=s.getParameter(3379),p=s.getParameter(34076),m=s.getParameter(34921),g=s.getParameter(36347),v=s.getParameter(36348),f=s.getParameter(36349),b=u>0,x=r||e.has("OES_texture_float");return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:f,vertexTextures:b,floatFragmentTextures:x,floatVertexTextures:b&&x,maxSamples:r?s.getParameter(36183):0}}function E0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Dn,o=new Qe,l={value:null,needsUpdate:!1};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(u,d,p,m){const g=u!==null?u.length:0;let v=null;if(g!==0){if(v=l.value,m!==!0||v===null){const f=p+4*g,b=d.matrixWorldInverse;o.getNormalMatrix(b),(v===null||v.length<f)&&(v=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const m=u.length!==0||d||n!==0||i;return i=d,t=c(u,p,0),n=u.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1,h()},this.setState=function(u,d,p){const m=u.clippingPlanes,g=u.clipIntersection,v=u.clipShadows,f=s.get(u);if(!i||m===null||m.length===0||r&&!v)r?c(null):h();else{const b=r?0:n,x=4*b;let y=f.clippingState||null;l.value=y,y=c(m,d,x,p);for(let _=0;_!==x;++_)y[_]=t[_];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}}}function A0(s){let e=new WeakMap;function t(i,r){return r===303?i.mapping=301:r===304&&(i.mapping=302),i}function n(i){const r=i.target;r.removeEventListener("dispose",n);const a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const r=i.mapping;if(r===303||r===304){if(e.has(i))return t(e.get(i).texture,i.mapping);{const a=i.image;if(a&&a.height>0){const o=new mo(a.height/2);return o.fromEquirectangularTexture(s,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}on.physical={uniforms:gt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Q(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};class Ui extends lc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Ui.prototype.isOrthographicCamera=!0;const au=[.125,.215,.35,.446,.526,.582],nl=new Ui,ou=new he;let il=null;const xi=(1+Math.sqrt(5))/2,Ji=1/xi,lu=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,xi,Ji),new E(0,xi,-Ji),new E(Ji,0,xi),new E(-Ji,0,xi),new E(xi,Ji,0),new E(-xi,Ji,0)];class hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){il=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},i=cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){const o=[],l=[],h=[];let c=a;const u=a-4+1+au.length;for(let d=0;d<u;d++){const p=Math.pow(2,c);l.push(p);let m=1/p;d>a-4?m=au[d-a+4-1]:d===0&&(m=0),h.push(m);const g=1/(p-1),v=-g/2,f=1+g/2,b=[v,v,f,v,f,f,v,v,f,f,v,f],x=6,y=6,_=3,M=2,S=1,D=new Float32Array(_*y*x),P=new Float32Array(M*y*x),I=new Float32Array(S*y*x);for(let B=0;B<x;B++){const W=B%3*2/3-1,O=B>2?0:-1,G=[W,O,0,W+2/3,O,0,W+2/3,O+1,0,W,O,0,W+2/3,O+1,0,W,O+1,0];D.set(G,_*y*B),P.set(b,M*y*B);const z=[B,B,B,B,B,B];I.set(z,S*y*B)}const F=new Be;F.setAttribute("position",new ze(D,_)),F.setAttribute("uv",new ze(P,M)),F.setAttribute("faceIndex",new ze(I,S)),o.push(F),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:h}}(r)),this._blurMaterial=function(a,o,l){const h=new Float32Array(20),c=new E(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return i}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,n,i){const r=new lt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(ou),l.toneMapping=0,l.autoClear=!1;const u=new Dt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new pe(new oi,u);let p=!1;const m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(ou),p=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(r.up.set(0,a[g],0),r.lookAt(o[g],0,0)):v===1?(r.up.set(0,0,a[g]),r.lookAt(0,o[g],0)):(r.up.set(0,a[g],0),r.lookAt(0,0,o[g]));const f=this._cubeSize;ha(i,v*f,g>2?f:0,f,f),l.setRenderTarget(i),p&&l.render(d,r),l.render(e,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=c,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r);r.uniforms.envMap.value=e;const o=this._cubeSize;ha(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,nl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=lu[(i-1)%lu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=new pe(this._lodPlanes[i],h),u=h.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,m=r/p,g=isFinite(r)?1+Math.floor(3*m):20;g>20&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);const v=[];let f=0;for(let y=0;y<20;++y){const _=y/m,M=Math.exp(-_*_/2);v.push(M),y===0?f+=M:y<g&&(f+=2*M)}for(let y=0;y<v.length;y++)v[y]=v[y]/f;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=p,u.mipInt.value=b-n;const x=this._sizeLods[i];ha(t,3*x*(i>b-4?i-b+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(c,nl)}}function cu(s,e,t){const n=new pt(s,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function uu(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function du(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R0(s){let e=new WeakMap,t=null;function n(i){const r=i.target;r.removeEventListener("dispose",n);const a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture){const r=i.mapping,a=r===303||r===304,o=r===301||r===302;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=e.get(i);return t===null&&(t=new hu(s)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),e.set(i,l),l.texture}if(e.has(i))return e.get(i).texture;{const l=i.image;if(a&&l&&l.height>0||o&&l&&function(h){let c=0;const u=6;for(let d=0;d<u;d++)h[d]!==void 0&&c++;return c===u}(l)){t===null&&(t=new hu(s));const h=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,h),i.addEventListener("dispose",n),h.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function C0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function L0(s,e,t,n){const i={},r=new WeakMap;function a(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const u in h.attributes)e.remove(h.attributes[u]);h.removeEventListener("dispose",a),delete i[h.id];const c=r.get(h);c&&(e.remove(c),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){const h=[],c=l.index,u=l.attributes.position;let d=0;if(c!==null){const g=c.array;d=c.version;for(let v=0,f=g.length;v<f;v+=3){const b=g[v+0],x=g[v+1],y=g[v+2];h.push(b,x,x,y,y,b)}}else{const g=u.array;d=u.version;for(let v=0,f=g.length/3-1;v<f;v+=3){const b=v+0,x=v+1,y=v+2;h.push(b,x,x,y,y,b)}}const p=new(Ym(h)?$m:Zm)(h,1);p.version=d;const m=r.get(l);m&&e.remove(m),r.set(l,p)}return{get:function(l,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h},update:function(l){const h=l.attributes;for(const u in h)e.update(h[u],34962);const c=l.morphAttributes;for(const u in c){const d=c[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],34962)}},getWireframeAttribute:function(l){const h=r.get(l);if(h){const c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return r.get(l)}}}function P0(s,e,t,n){const i=n.isWebGL2;let r,a,o;this.setMode=function(l){r=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,h){s.drawElements(r,h,a,l*o),t.update(h,r,1)},this.renderInstances=function(l,h,c){if(c===0)return;let u,d;if(i)u=s,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](r,h,a,l*o,c),t.update(h,r,c)}}function D0(s){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case 4:e.triangles+=i*(t/3);break;case 1:e.lines+=i*(t/2);break;case 3:e.lines+=i*(t-1);break;case 2:e.lines+=i*t;break;case 0:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function I0(s,e){return s[0]-e[0]}function O0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function rl(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function N0(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ue,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,h,c,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let g=r.get(h);if(g===void 0||g.count!==m){g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),x===!0&&(D=2),y===!0&&(D=3);let P=h.attributes.position.count*D,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*I*4*m),B=new uo(F,P,I,m);B.type=1015,B.needsUpdate=!0;const W=4*D;for(let O=0;O<m;O++){const G=_[O],z=M[O],J=S[O],Z=P*I*4*O;for(let X=0;X<G.count;X++){const V=X*W;b===!0&&(a.fromBufferAttribute(G,X),G.normalized===!0&&rl(a,G),F[Z+V+0]=a.x,F[Z+V+1]=a.y,F[Z+V+2]=a.z,F[Z+V+3]=0),x===!0&&(a.fromBufferAttribute(z,X),z.normalized===!0&&rl(a,z),F[Z+V+4]=a.x,F[Z+V+5]=a.y,F[Z+V+6]=a.z,F[Z+V+7]=0),y===!0&&(a.fromBufferAttribute(J,X),J.normalized===!0&&rl(a,J),F[Z+V+8]=a.x,F[Z+V+9]=a.y,F[Z+V+10]=a.z,F[Z+V+11]=J.itemSize===4?a.w:1)}}g={count:m,texture:B,size:new Q(P,I)},r.set(h,g),h.addEventListener("dispose",function O(){B.dispose(),r.delete(h),h.removeEventListener("dispose",O)})}let v=0;for(let b=0;b<d.length;b++)v+=d[b];const f=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(s,"morphTargetBaseInfluence",f),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const p=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==p){m=[];for(let x=0;x<p;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<p;x++){const y=m[x];y[0]=x,y[1]=d[x]}m.sort(O0);for(let x=0;x<8;x++)x<p&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(I0);const g=h.morphAttributes.position,v=h.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const y=o[x],_=y[0],M=y[1];_!==Number.MAX_SAFE_INTEGER&&M?(g&&h.getAttribute("morphTarget"+x)!==g[_]&&h.setAttribute("morphTarget"+x,g[_]),v&&h.getAttribute("morphNormal"+x)!==v[_]&&h.setAttribute("morphNormal"+x,v[_]),i[x]=M,f+=M):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const b=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}}}function F0(s,e,t,n){let i=new WeakMap;function r(a){const o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){const o=n.render.frame,l=a.geometry,h=e.get(a,l);return i.get(h)!==o&&(e.update(h),i.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),h},dispose:function(){i=new WeakMap}}}const Qm=new Ye,ef=new uo,tf=new ac,nf=new po,pu=[],mu=[],fu=new Float32Array(16),gu=new Float32Array(9),vu=new Float32Array(4);function Sr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=pu[i];if(r===void 0&&(r=new Float32Array(i),pu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function go(s,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function U0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function k0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),yt(t,e)}}function B0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),yt(t,e)}}function z0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),yt(t,e)}}function H0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Tt(t,n))return;vu.set(n),s.uniformMatrix2fv(this.addr,!1,vu),yt(t,n)}}function V0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Tt(t,n))return;gu.set(n),s.uniformMatrix3fv(this.addr,!1,gu),yt(t,n)}}function G0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Tt(t,n))return;fu.set(n),s.uniformMatrix4fv(this.addr,!1,fu),yt(t,n)}}function W0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function j0(s,e){const t=this.cache;Tt(t,e)||(s.uniform2iv(this.addr,e),yt(t,e))}function q0(s,e){const t=this.cache;Tt(t,e)||(s.uniform3iv(this.addr,e),yt(t,e))}function X0(s,e){const t=this.cache;Tt(t,e)||(s.uniform4iv(this.addr,e),yt(t,e))}function Y0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function J0(s,e){const t=this.cache;Tt(t,e)||(s.uniform2uiv(this.addr,e),yt(t,e))}function Z0(s,e){const t=this.cache;Tt(t,e)||(s.uniform3uiv(this.addr,e),yt(t,e))}function $0(s,e){const t=this.cache;Tt(t,e)||(s.uniform4uiv(this.addr,e),yt(t,e))}function K0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Qm,i)}function Q0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tf,i)}function ev(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nf,i)}function tv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ef,i)}function nv(s,e){s.uniform1fv(this.addr,e)}function iv(s,e){const t=Sr(e,this.size,2);s.uniform2fv(this.addr,t)}function rv(s,e){const t=Sr(e,this.size,3);s.uniform3fv(this.addr,t)}function sv(s,e){const t=Sr(e,this.size,4);s.uniform4fv(this.addr,t)}function av(s,e){const t=Sr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ov(s,e){const t=Sr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function lv(s,e){const t=Sr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function hv(s,e){s.uniform1iv(this.addr,e)}function cv(s,e){s.uniform2iv(this.addr,e)}function uv(s,e){s.uniform3iv(this.addr,e)}function dv(s,e){s.uniform4iv(this.addr,e)}function pv(s,e){s.uniform1uiv(this.addr,e)}function mv(s,e){s.uniform2uiv(this.addr,e)}function fv(s,e){s.uniform3uiv(this.addr,e)}function gv(s,e){s.uniform4uiv(this.addr,e)}function vv(s,e,t){const n=e.length,i=go(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Qm,i[r])}function yv(s,e,t){const n=e.length,i=go(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||tf,i[r])}function xv(s,e,t){const n=e.length,i=go(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||nf,i[r])}function bv(s,e,t){const n=e.length,i=go(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||ef,i[r])}function _v(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=function(n){switch(n){case 5126:return U0;case 35664:return k0;case 35665:return B0;case 35666:return z0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return j0;case 35668:case 35672:return q0;case 35669:case 35673:return X0;case 5125:return Y0;case 36294:return J0;case 36295:return Z0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}(e.type)}function rf(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=function(n){switch(n){case 5126:return nv;case 35664:return iv;case 35665:return rv;case 35666:return sv;case 35674:return av;case 35675:return ov;case 35676:return lv;case 5124:case 35670:return hv;case 35667:case 35671:return cv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return fv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return bv}}(e.type)}function sf(s){this.id=s,this.seq=[],this.map={}}rf.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),yt(e,s)},sf.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const a=n[i];a.setValue(s,e[a.id],t)}};const sl=/(\w+)(\])?(\[|\.)?/g;function yu(s,e){s.seq.push(e),s.map[e.id]=e}function wv(s,e,t){const n=s.name,i=n.length;for(sl.lastIndex=0;;){const r=sl.exec(n),a=sl.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===i){yu(t,h===void 0?new _v(o,s,e):new rf(o,s,e));break}{let c=t.map[o];c===void 0&&(c=new sf(o),yu(t,c)),t=c}}}function ni(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n);wv(i,s.getUniformLocation(e,i.name),this)}}function xu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}ni.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)},ni.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)},ni.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,n)}},ni.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};let Mv=0;function bu(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);return t.toUpperCase()+`

`+i+`

`+function(a,o){const l=a.split(`
`),h=[],c=Math.max(o-6,0),u=Math.min(o+6,l.length);for(let d=c;d<u;d++)h.push(d+1+": "+l[d]);return h.join(`
`)}(s.getShaderSource(e),r)}function Sv(s,e){const t=function(n){switch(n){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Tv(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Or(s){return s!==""}function _u(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(s){return s.replace(Ev,Av)}function Av(s,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Oh(t)}const Rv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(s){return s.replace(Cv,af).replace(Rv,Lv)}function Lv(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),af(s,e,t,n)}function af(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Su(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=function(D){let P="SHADOWMAP_TYPE_BASIC";return D.shadowMapType===1?P="SHADOWMAP_TYPE_PCF":D.shadowMapType===2?P="SHADOWMAP_TYPE_PCF_SOFT":D.shadowMapType===3&&(P="SHADOWMAP_TYPE_VSM"),P}(t),h=function(D){let P="ENVMAP_TYPE_CUBE";if(D.envMap)switch(D.envMapMode){case 301:case 302:P="ENVMAP_TYPE_CUBE";break;case 306:P="ENVMAP_TYPE_CUBE_UV"}return P}(t),c=function(D){let P="ENVMAP_MODE_REFLECTION";return D.envMap&&D.envMapMode===302&&(P="ENVMAP_MODE_REFRACTION"),P}(t),u=function(D){let P="ENVMAP_BLENDING_NONE";if(D.envMap)switch(D.combine){case 0:P="ENVMAP_BLENDING_MULTIPLY";break;case 1:P="ENVMAP_BLENDING_MIX";break;case 2:P="ENVMAP_BLENDING_ADD"}return P}(t),d=function(D){const P=D.envMapCubeUVHeight;if(P===null)return null;const I=Math.log2(P/32+1)+3,F=1/P;return{texelWidth:1/(3*Math.max(Math.pow(2,I),112)),texelHeight:F,maxMip:I}}(t),p=t.isWebGL2?"":function(D){return[D.extensionDerivatives||D.envMapCubeUVHeight||D.bumpMap||D.tangentSpaceNormalMap||D.clearcoatNormalMap||D.flatShading||D.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(D.extensionFragDepth||D.logarithmicDepthBuffer)&&D.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",D.extensionDrawBuffers&&D.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(D.extensionShaderTextureLOD||D.envMap||D.transmission)&&D.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}(t),m=function(D){const P=[];for(const I in D){const F=D[I];F!==!1&&P.push("#define "+I+" "+F)}return P.join(`
`)}(r),g=i.createProgram();let v,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[m].filter(Or).join(`
`),v.length>0&&(v+=`
`),f=[p,m].filter(Or).join(`
`),f.length>0&&(f+=`
`)):(v=[Su(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),f=[p,Su(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Te.tonemapping_pars_fragment:"",t.toneMapping!==0?Tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Sv("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=Oh(a),a=_u(a,t),a=wu(a,t),o=Oh(o),o=_u(o,t),o=wu(o,t),a=Mu(a),o=Mu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=b+f+o,y=xu(i,35633,b+v+a),_=xu(i,35632,x);if(i.attachShader(g,y),i.attachShader(g,_),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const D=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(y).trim(),I=i.getShaderInfoLog(_).trim();let F=!0,B=!0;if(i.getProgramParameter(g,35714)===!1){F=!1;const W=bu(i,y,"vertex"),O=bu(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+D+`
`+W+`
`+O)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):P!==""&&I!==""||(B=!1);B&&(this.diagnostics={runnable:F,programLog:D,vertexShader:{log:P,prefix:v},fragmentShader:{log:I,prefix:f}})}let M,S;return i.deleteShader(y),i.deleteShader(_),this.getUniforms=function(){return M===void 0&&(M=new ni(i,g)),M},this.getAttributes=function(){return S===void 0&&(S=function(D,P){const I={},F=D.getProgramParameter(P,35721);for(let B=0;B<F;B++){const W=D.getActiveAttrib(P,B),O=W.name;let G=1;W.type===35674&&(G=2),W.type===35675&&(G=3),W.type===35676&&(G=4),I[O]={type:W.type,location:D.getAttribLocation(P,O),locationSize:G}}return I}(i,g)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Mv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=_,this}let Dv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Ov(e);t.set(e,n)}return t.get(e)}}class Ov{constructor(e){this.id=Dv++,this.code=e,this.usedTimes=0}}function Nv(s,e,t,n,i,r,a){const o=new oc,l=new Iv,h=[],c=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,p=i.maxVertexUniforms,m=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(f,b,x,y,_){const M=y.fog,S=_.geometry,D=f.isMeshStandardMaterial?y.environment:null,P=(f.isMeshStandardMaterial?t:e).get(f.envMap||D),I=P&&P.mapping===306?P.image.height:null,F=v[f.type],B=_.isSkinnedMesh?function(le){const ne=le.skeleton.bones;if(d)return 1024;{const xe=p,A=Math.floor((xe-20)/4),T=Math.min(A,ne.length);return T<ne.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+ne.length+" bones. This GPU supports "+T+"."),0):T}}(_):0;f.precision!==null&&(g=i.getMaxPrecision(f.precision),g!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",g,"instead."));const W=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,O=W!==void 0?W.length:0;let G,z,J,Z,X=0;if(S.morphAttributes.position!==void 0&&(X=1),S.morphAttributes.normal!==void 0&&(X=2),S.morphAttributes.color!==void 0&&(X=3),F){const le=on[F];G=le.vertexShader,z=le.fragmentShader}else G=f.vertexShader,z=f.fragmentShader,l.update(f),J=l.getVertexShaderID(f),Z=l.getFragmentShaderID(f);const V=s.getRenderTarget(),oe=f.alphaTest>0,se=f.clearcoat>0;return{isWebGL2:c,shaderID:F,shaderName:f.type,vertexShader:G,fragmentShader:z,defines:f.defines,customVertexShaderID:J,customFragmentShaderID:Z,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:g,instancing:_.isInstancedMesh===!0,instancingColor:_.isInstancedMesh===!0&&_.instanceColor!==null,supportsVertexTextures:m,outputEncoding:V===null?s.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:3e3,map:!!f.map,matcap:!!f.matcap,envMap:!!P,envMapMode:P&&P.mapping,envMapCubeUVHeight:I,lightMap:!!f.lightMap,aoMap:!!f.aoMap,emissiveMap:!!f.emissiveMap,bumpMap:!!f.bumpMap,normalMap:!!f.normalMap,objectSpaceNormalMap:f.normalMapType===1,tangentSpaceNormalMap:f.normalMapType===0,decodeVideoTexture:!!f.map&&f.map.isVideoTexture===!0&&f.map.encoding===3001,clearcoat:se,clearcoatMap:se&&!!f.clearcoatMap,clearcoatRoughnessMap:se&&!!f.clearcoatRoughnessMap,clearcoatNormalMap:se&&!!f.clearcoatNormalMap,displacementMap:!!f.displacementMap,roughnessMap:!!f.roughnessMap,metalnessMap:!!f.metalnessMap,specularMap:!!f.specularMap,specularIntensityMap:!!f.specularIntensityMap,specularColorMap:!!f.specularColorMap,opaque:f.transparent===!1&&f.blending===1,alphaMap:!!f.alphaMap,alphaTest:oe,gradientMap:!!f.gradientMap,sheen:f.sheen>0,sheenColorMap:!!f.sheenColorMap,sheenRoughnessMap:!!f.sheenRoughnessMap,transmission:f.transmission>0,transmissionMap:!!f.transmissionMap,thicknessMap:!!f.thicknessMap,combine:f.combine,vertexTangents:!!f.normalMap&&!!S.attributes.tangent,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUvs:!!(f.map||f.bumpMap||f.normalMap||f.specularMap||f.alphaMap||f.emissiveMap||f.roughnessMap||f.metalnessMap||f.clearcoatMap||f.clearcoatRoughnessMap||f.clearcoatNormalMap||f.displacementMap||f.transmissionMap||f.thicknessMap||f.specularIntensityMap||f.specularColorMap||f.sheenColorMap||f.sheenRoughnessMap),uvsVertexOnly:!(f.map||f.bumpMap||f.normalMap||f.specularMap||f.alphaMap||f.emissiveMap||f.roughnessMap||f.metalnessMap||f.clearcoatNormalMap||f.transmission>0||f.transmissionMap||f.thicknessMap||f.specularIntensityMap||f.specularColorMap||f.sheen>0||f.sheenColorMap||f.sheenRoughnessMap||!f.displacementMap),fog:!!M,useFog:f.fog,fogExp2:M&&M.isFogExp2,flatShading:!!f.flatShading,sizeAttenuation:f.sizeAttenuation,logarithmicDepthBuffer:u,skinning:_.isSkinnedMesh===!0&&B>0,maxBones:B,useVertexTexture:d,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:X,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:s.shadowMap.enabled&&x.length>0,shadowMapType:s.shadowMap.type,toneMapping:f.toneMapped?s.toneMapping:0,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,depthPacking:f.depthPacking!==void 0&&f.depthPacking,index0AttributeName:f.index0AttributeName,extensionDerivatives:f.extensions&&f.extensions.derivatives,extensionFragDepth:f.extensions&&f.extensions.fragDepth,extensionDrawBuffers:f.extensions&&f.extensions.drawBuffers,extensionShaderTextureLOD:f.extensions&&f.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){const b=[];if(f.shaderID?b.push(f.shaderID):(b.push(f.customVertexShaderID),b.push(f.customFragmentShaderID)),f.defines!==void 0)for(const x in f.defines)b.push(x),b.push(f.defines[x]);return f.isRawShaderMaterial===!1&&(function(x,y){x.push(y.precision),x.push(y.outputEncoding),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.combine),x.push(y.vertexUvs),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.maxBones),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection)}(b,f),function(x,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.map&&o.enable(4),y.matcap&&o.enable(5),y.envMap&&o.enable(6),y.lightMap&&o.enable(7),y.aoMap&&o.enable(8),y.emissiveMap&&o.enable(9),y.bumpMap&&o.enable(10),y.normalMap&&o.enable(11),y.objectSpaceNormalMap&&o.enable(12),y.tangentSpaceNormalMap&&o.enable(13),y.clearcoat&&o.enable(14),y.clearcoatMap&&o.enable(15),y.clearcoatRoughnessMap&&o.enable(16),y.clearcoatNormalMap&&o.enable(17),y.displacementMap&&o.enable(18),y.specularMap&&o.enable(19),y.roughnessMap&&o.enable(20),y.metalnessMap&&o.enable(21),y.gradientMap&&o.enable(22),y.alphaMap&&o.enable(23),y.alphaTest&&o.enable(24),y.vertexColors&&o.enable(25),y.vertexAlphas&&o.enable(26),y.vertexUvs&&o.enable(27),y.vertexTangents&&o.enable(28),y.uvsVertexOnly&&o.enable(29),y.fog&&o.enable(30),x.push(o.mask),o.disableAll(),y.useFog&&o.enable(0),y.flatShading&&o.enable(1),y.logarithmicDepthBuffer&&o.enable(2),y.skinning&&o.enable(3),y.useVertexTexture&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.physicallyCorrectLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.depthPacking&&o.enable(13),y.dithering&&o.enable(14),y.specularIntensityMap&&o.enable(15),y.specularColorMap&&o.enable(16),y.transmission&&o.enable(17),y.transmissionMap&&o.enable(18),y.thicknessMap&&o.enable(19),y.sheen&&o.enable(20),y.sheenColorMap&&o.enable(21),y.sheenRoughnessMap&&o.enable(22),y.decodeVideoTexture&&o.enable(23),y.opaque&&o.enable(24),x.push(o.mask)}(b,f),b.push(s.outputEncoding)),b.push(f.customProgramCacheKey),b.join()},getUniforms:function(f){const b=v[f.type];let x;if(b){const y=on[b];x=y0.clone(y.uniforms)}else x=f.uniforms;return x},acquireProgram:function(f,b){let x;for(let y=0,_=h.length;y<_;y++){const M=h[y];if(M.cacheKey===b){x=M,++x.usedTimes;break}}return x===void 0&&(x=new Pv(s,b,f,r),h.push(x)),x},releaseProgram:function(f){if(--f.usedTimes==0){const b=h.indexOf(f);h[b]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function Fv(){let s=new WeakMap;return{get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,n){s.get(e)[t]=n},dispose:function(){s=new WeakMap}}}function Uv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Eu(){const s=[];let e=0;const t=[],n=[],i=[];function r(a,o,l,h,c,u){let d=s[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:u},s[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=h,d.renderOrder=a.renderOrder,d.z=c,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,h,c,u){const d=r(a,o,l,h,c,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,h,c,u){const d=r(a,o,l,h,c,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=s.length;a<o;a++){const l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Uv),n.length>1&&n.sort(o||Tu),i.length>1&&i.sort(o||Tu)}}}function kv(){let s=new WeakMap;return{get:function(e,t){let n;return s.has(e)===!1?(n=new Eu,s.set(e,[n])):t>=s.get(e).length?(n=new Eu,s.get(e).push(n)):n=s.get(e)[t],n},dispose:function(){s=new WeakMap}}}function Bv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new he};break;case"SpotLight":t={position:new E,direction:new E,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new E,halfWidth:new E,halfHeight:new E}}return s[e.id]=t,t}}}let zv=0;function Hv(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Vv(s,e){const t=new Bv,n=function(){const l={};return{get:function(h){if(l[h.id]!==void 0)return l[h.id];let c;switch(h.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3}}return l[h.id]=c,c}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)i.probe.push(new E);const r=new E,a=new ue,o=new ue;return{setup:function(l,h){let c=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,m=0,g=0,v=0,f=0,b=0,x=0,y=0;l.sort(Hv);const _=h!==!0?Math.PI:1;for(let S=0,D=l.length;S<D;S++){const P=l[S],I=P.color,F=P.intensity,B=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=I.r*F*_,u+=I.g*F*_,d+=I.b*F*_;else if(P.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],F);else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*_),P.castShadow){const G=P.shadow,z=n.get(P);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=O,p++}else if(P.isSpotLight){const O=t.get(P);if(O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(I).multiplyScalar(F*_),O.distance=B,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,P.castShadow){const G=P.shadow,z=n.get(P);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.spotShadow[g]=z,i.spotShadowMap[g]=W,i.spotShadowMatrix[g]=P.shadow.matrix,y++}i.spot[g]=O,g++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(I).multiplyScalar(F),O.halfWidth.set(.5*P.width,0,0),O.halfHeight.set(0,.5*P.height,0),i.rectArea[v]=O,v++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*_),O.distance=P.distance,O.decay=P.decay,P.castShadow){const G=P.shadow,z=n.get(P);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,i.pointShadow[m]=z,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=P.shadow.matrix,x++}i.point[m]=O,m++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(F*_),O.groundColor.copy(P.groundColor).multiplyScalar(F*_),i.hemi[f]=O,f++}}v>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const M=i.hash;M.directionalLength===p&&M.pointLength===m&&M.spotLength===g&&M.rectAreaLength===v&&M.hemiLength===f&&M.numDirectionalShadows===b&&M.numPointShadows===x&&M.numSpotShadows===y||(i.directional.length=p,i.spot.length=g,i.rectArea.length=v,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=y,M.directionalLength=p,M.pointLength=m,M.spotLength=g,M.rectAreaLength=v,M.hemiLength=f,M.numDirectionalShadows=b,M.numPointShadows=x,M.numSpotShadows=y,i.version=zv++)},setupView:function(l,h){let c=0,u=0,d=0,p=0,m=0;const g=h.matrixWorldInverse;for(let v=0,f=l.length;v<f;v++){const b=l[v];if(b.isDirectionalLight){const x=i.directional[c];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),c++}else if(b.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(b.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),o.identity(),a.copy(b.matrixWorld),a.premultiply(g),o.extractRotation(a),x.halfWidth.set(.5*b.width,0,0),x.halfHeight.set(0,.5*b.height,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),u++}else if(b.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),x.direction.normalize(),m++}}},state:i}}function Au(s,e){const t=new Vv(s,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(r){t.setup(n,r)},setupLightsView:function(r){t.setupView(n,r)},pushLight:function(r){n.push(r)},pushShadow:function(r){i.push(r)}}}function Gv(s,e){let t=new WeakMap;return{get:function(n,i=0){let r;return t.has(n)===!1?(r=new Au(s,e),t.set(n,[r])):i>=t.get(n).length?(r=new Au(s,e),t.get(n).push(r)):r=t.get(n)[i],r},dispose:function(){t=new WeakMap}}}class vo extends qe{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}vo.prototype.isMeshDepthMaterial=!0;class cc extends qe{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}cc.prototype.isMeshDistanceMaterial=!0;function of(s,e,t){let n=new fo;const i=new Q,r=new Q,a=new Ue,o=new vo({depthPacking:3201}),l=new cc,h={},c=t.maxTextureSize,u={0:1,1:0,2:2},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Be;m.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pe(m,d),v=this;function f(y,_){const M=e.update(g);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(_,null,M,d,g,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(_,null,M,p,g,null)}function b(y,_,M,S,D,P){let I=null;const F=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I=F!==void 0?F:M.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0){const B=I.uuid,W=_.uuid;let O=h[B];O===void 0&&(O={},h[B]=O);let G=O[W];G===void 0&&(G=I.clone(),O[W]=G),I=G}return I.visible=_.visible,I.wireframe=_.wireframe,I.side=P===3?_.shadowSide!==null?_.shadowSide:_.side:_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaTest,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(M.matrixWorld),I.nearDistance=S,I.farDistance=D),I}function x(y,_,M,S,D){if(y.visible===!1)return;if(y.layers.test(_.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&D===3)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const I=e.update(y),F=y.material;if(Array.isArray(F)){const B=I.groups;for(let W=0,O=B.length;W<O;W++){const G=B[W],z=F[G.materialIndex];if(z&&z.visible){const J=b(y,z,S,M.near,M.far,D);s.renderBufferDirect(M,null,I,J,y,G)}}}else if(F.visible){const B=b(y,F,S,M.near,M.far,D);s.renderBufferDirect(M,null,I,B,y,null)}}const P=y.children;for(let I=0,F=P.length;I<F;I++)x(P[I],_,M,S,D)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(y,_,M){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||y.length===0)return;const S=s.getRenderTarget(),D=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(0),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let F=0,B=y.length;F<B;F++){const W=y[F],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const G=O.getFrameExtents();if(i.multiply(G),r.copy(O.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/G.x),i.x=r.x*G.x,O.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/G.y),i.y=r.y*G.y,O.mapSize.y=r.y)),O.map!==null||O.isPointLightShadow||this.type!==3||(O.map=new pt(i.x,i.y),O.map.texture.name=W.name+".shadowMap",O.mapPass=new pt(i.x,i.y),O.camera.updateProjectionMatrix()),O.map===null){const J={minFilter:1003,magFilter:1003,format:1023};O.map=new pt(i.x,i.y,J),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const z=O.getViewportCount();for(let J=0;J<z;J++){const Z=O.getViewport(J);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),I.viewport(a),O.updateMatrices(W,J),n=O.getFrustum(),x(_,M,O.camera,W,this.type)}O.isPointLightShadow||this.type!==3||f(O,M),O.needsUpdate=!1}v.needsUpdate=!1,s.setRenderTarget(S,D,P)}}function Wv(s,e,t){const n=t.isWebGL2,i=new function(){let w=!1;const U=new Ue;let C=null;const $=new Ue(0,0,0,0);return{setMask:function(j){C===j||w||(s.colorMask(j,j,j,j),C=j)},setLocked:function(j){w=j},setClear:function(j,Y,ie,ce,ve){ve===!0&&(j*=ce,Y*=ce,ie*=ce),U.set(j,Y,ie,ce),$.equals(U)===!1&&(s.clearColor(j,Y,ie,ce),$.copy(U))},reset:function(){w=!1,C=null,$.set(-1,0,0,0)}}},r=new function(){let w=!1,U=null,C=null,$=null;return{setTest:function(j){j?se(2929):le(2929)},setMask:function(j){U===j||w||(s.depthMask(j),U=j)},setFunc:function(j){if(C!==j){if(j)switch(j){case 0:s.depthFunc(512);break;case 1:s.depthFunc(519);break;case 2:s.depthFunc(513);break;case 3:default:s.depthFunc(515);break;case 4:s.depthFunc(514);break;case 5:s.depthFunc(518);break;case 6:s.depthFunc(516);break;case 7:s.depthFunc(517)}else s.depthFunc(515);C=j}},setLocked:function(j){w=j},setClear:function(j){$!==j&&(s.clearDepth(j),$=j)},reset:function(){w=!1,U=null,C=null,$=null}}},a=new function(){let w=!1,U=null,C=null,$=null,j=null,Y=null,ie=null,ce=null,ve=null;return{setTest:function(de){w||(de?se(2960):le(2960))},setMask:function(de){U===de||w||(s.stencilMask(de),U=de)},setFunc:function(de,me,_e){C===de&&$===me&&j===_e||(s.stencilFunc(de,me,_e),C=de,$=me,j=_e)},setOp:function(de,me,_e){Y===de&&ie===me&&ce===_e||(s.stencilOp(de,me,_e),Y=de,ie=me,ce=_e)},setLocked:function(de){w=de},setClear:function(de){ve!==de&&(s.clearStencil(de),ve=de)},reset:function(){w=!1,U=null,C=null,$=null,j=null,Y=null,ie=null,ce=null,ve=null}}};let o={},l={},h=new WeakMap,c=[],u=null,d=!1,p=null,m=null,g=null,v=null,f=null,b=null,x=null,y=!1,_=null,M=null,S=null,D=null,P=null;const I=s.getParameter(35661);let F=!1,B=0;const W=s.getParameter(7938);W.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=B>=1):W.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=B>=2);let O=null,G={};const z=s.getParameter(3088),J=s.getParameter(2978),Z=new Ue().fromArray(z),X=new Ue().fromArray(J);function V(w,U,C){const $=new Uint8Array(4),j=s.createTexture();s.bindTexture(w,j),s.texParameteri(w,10241,9728),s.texParameteri(w,10240,9728);for(let Y=0;Y<C;Y++)s.texImage2D(U+Y,0,6408,1,1,0,6408,5121,$);return j}const oe={};function se(w){o[w]!==!0&&(s.enable(w),o[w]=!0)}function le(w){o[w]!==!1&&(s.disable(w),o[w]=!1)}oe[3553]=V(3553,3553,1),oe[34067]=V(34067,34069,6),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),se(2929),r.setFunc(3),T(!1),k(1),se(2884),A(0);const ne={100:32774,101:32778,102:32779};if(n)ne[103]=32775,ne[104]=32776;else{const w=e.get("EXT_blend_minmax");w!==null&&(ne[103]=w.MIN_EXT,ne[104]=w.MAX_EXT)}const xe={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function A(w,U,C,$,j,Y,ie,ce){if(w!==0){if(d===!1&&(se(3042),d=!0),w===5)j=j||U,Y=Y||C,ie=ie||$,U===m&&j===f||(s.blendEquationSeparate(ne[U],ne[j]),m=U,f=j),C===g&&$===v&&Y===b&&ie===x||(s.blendFuncSeparate(xe[C],xe[$],xe[Y],xe[ie]),g=C,v=$,b=Y,x=ie),p=w,y=null;else if(w!==p||ce!==y){if(m===100&&f===100||(s.blendEquation(32774),m=100,f=100),ce)switch(w){case 1:s.blendFuncSeparate(1,771,1,771);break;case 2:s.blendFunc(1,1);break;case 3:s.blendFuncSeparate(0,769,0,1);break;case 4:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:s.blendFuncSeparate(770,771,1,771);break;case 2:s.blendFunc(770,1);break;case 3:s.blendFuncSeparate(0,769,0,1);break;case 4:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}g=null,v=null,b=null,x=null,p=w,y=ce}}else d===!0&&(le(3042),d=!1)}function T(w){_!==w&&(w?s.frontFace(2304):s.frontFace(2305),_=w)}function k(w){w!==0?(se(2884),w!==M&&(w===1?s.cullFace(1029):w===2?s.cullFace(1028):s.cullFace(1032))):le(2884),M=w}function N(w,U,C){w?(se(32823),D===U&&P===C||(s.polygonOffset(U,C),D=U,P=C)):le(32823)}function R(w){w===void 0&&(w=33984+I-1),O!==w&&(s.activeTexture(w),O=w)}return{buffers:{color:i,depth:r,stencil:a},enable:se,disable:le,bindFramebuffer:function(w,U){return l[w]!==U&&(s.bindFramebuffer(w,U),l[w]=U,n&&(w===36009&&(l[36160]=U),w===36160&&(l[36009]=U)),!0)},drawBuffers:function(w,U){let C=c,$=!1;if(w)if(C=h.get(U),C===void 0&&(C=[],h.set(U,C)),w.isWebGLMultipleRenderTargets){const j=w.texture;if(C.length!==j.length||C[0]!==36064){for(let Y=0,ie=j.length;Y<ie;Y++)C[Y]=36064+Y;C.length=j.length,$=!0}}else C[0]!==36064&&(C[0]=36064,$=!0);else C[0]!==1029&&(C[0]=1029,$=!0);$&&(t.isWebGL2?s.drawBuffers(C):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(C))},useProgram:function(w){return u!==w&&(s.useProgram(w),u=w,!0)},setBlending:A,setMaterial:function(w,U){w.side===2?le(2884):se(2884);let C=w.side===1;U&&(C=!C),T(C),w.blending===1&&w.transparent===!1?A(0):A(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),i.setMask(w.colorWrite);const $=w.stencilWrite;a.setTest($),$&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),N(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?se(32926):le(32926)},setFlipSided:T,setCullFace:k,setLineWidth:function(w){w!==S&&(F&&s.lineWidth(w),S=w)},setPolygonOffset:N,setScissorTest:function(w){w?se(3089):le(3089)},activeTexture:R,bindTexture:function(w,U){O===null&&R();let C=G[O];C===void 0&&(C={type:void 0,texture:void 0},G[O]=C),C.type===w&&C.texture===U||(s.bindTexture(w,U||oe[w]),C.type=w,C.texture=U)},unbindTexture:function(){const w=G[O];w!==void 0&&w.type!==void 0&&(s.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){Z.equals(w)===!1&&(s.scissor(w.x,w.y,w.z,w.w),Z.copy(w))},viewport:function(w){X.equals(w)===!1&&(s.viewport(w.x,w.y,w.z,w.w),X.copy(w))},reset:function(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),o={},O=null,G={},l={},h=new WeakMap,c=[],u=null,d=!1,p=null,m=null,g=null,v=null,f=null,b=null,x=null,y=!1,_=null,M=null,S=null,D=null,P=null,Z.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}}}function jv(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,h=i.maxCubemapSize,c=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let g;const v=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,T){return f?new OffscreenCanvas(A,T):Cs("canvas")}function x(A,T,k,N){let R=1;if((A.width>N||A.height>N)&&(R=N/Math.max(A.width,A.height)),R<1||T===!0){if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){const w=T?to:Math.floor,U=w(R*A.width),C=w(R*A.height);g===void 0&&(g=b(U,C));const $=k?b(U,C):g;return $.width=U,$.height=C,$.getContext("2d").drawImage(A,0,0,U,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+U+"x"+C+")."),$}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A}return A}function y(A){return Ih(A.width)&&Ih(A.height)}function _(A,T){return A.generateMipmaps&&T&&A.minFilter!==1003&&A.minFilter!==1006}function M(A){s.generateMipmap(A)}function S(A,T,k,N,R=!1){if(o===!1)return T;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let w=T;return T===6403&&(k===5126&&(w=33326),k===5131&&(w=33325),k===5121&&(w=33321)),T===33319&&(k===5126&&(w=33328),k===5131&&(w=33327),k===5121&&(w=33323)),T===6408&&(k===5126&&(w=34836),k===5131&&(w=34842),k===5121&&(w=N===3001&&R===!1?35907:32856),k===32819&&(w=32854),k===32820&&(w=32855)),w!==33325&&w!==33326&&w!==33327&&w!==33328&&w!==34842&&w!==34836||e.get("EXT_color_buffer_float"),w}function D(A,T,k){return _(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==1003&&A.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function P(A){return A===1003||A===1004||A===1005?9728:9729}function I(A){const T=A.target;T.removeEventListener("dispose",I),function(k){const N=n.get(k);if(N.__webglInit===void 0)return;const R=k.source,w=v.get(R);if(w){const U=w[N.__cacheKey];U.usedTimes--,U.usedTimes===0&&B(k),Object.keys(w).length===0&&v.delete(R)}n.remove(k)}(T),T.isVideoTexture&&m.delete(T)}function F(A){const T=A.target;T.removeEventListener("dispose",F),function(k){const N=k.texture,R=n.get(k),w=n.get(N);if(w.__webglTexture!==void 0&&(s.deleteTexture(w.__webglTexture),a.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let U=0;U<6;U++)s.deleteFramebuffer(R.__webglFramebuffer[U]),R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[U]);else s.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer&&s.deleteRenderbuffer(R.__webglColorRenderbuffer),R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer);if(k.isWebGLMultipleRenderTargets)for(let U=0,C=N.length;U<C;U++){const $=n.get(N[U]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(N[U])}n.remove(N),n.remove(k)}(T)}function B(A){const T=n.get(A);s.deleteTexture(T.__webglTexture);const k=A.source;delete v.get(k)[T.__cacheKey],a.memory.textures--}let W=0;function O(A,T){const k=n.get(A);if(A.isVideoTexture&&function(N){const R=a.render.frame;m.get(N)!==R&&(m.set(N,R),N.update())}(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const N=A.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void X(k,A,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.activeTexture(33984+T),t.bindTexture(3553,k.__webglTexture)}const G={1e3:10497,1001:33071,1002:33648},z={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function J(A,T,k){if(k?(s.texParameteri(A,10242,G[T.wrapS]),s.texParameteri(A,10243,G[T.wrapT]),A!==32879&&A!==35866||s.texParameteri(A,32882,G[T.wrapR]),s.texParameteri(A,10240,z[T.magFilter]),s.texParameteri(A,10241,z[T.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),A!==32879&&A!==35866||s.texParameteri(A,32882,33071),T.wrapS===1001&&T.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,P(T.magFilter)),s.texParameteri(A,10241,P(T.minFilter)),T.minFilter!==1003&&T.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");if(T.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Z(A,T){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",I));const N=T.source;let R=v.get(N);R===void 0&&(R={},v.set(N,R));const w=function(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.encoding),C.join()}(T);if(w!==A.__cacheKey){R[w]===void 0&&(R[w]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),R[w].usedTimes++;const U=R[A.__cacheKey];U!==void 0&&(R[A.__cacheKey].usedTimes--,U.usedTimes===0&&B(T)),A.__cacheKey=w,A.__webglTexture=R[w].texture}return k}function X(A,T,k){let N=3553;T.isDataArrayTexture&&(N=35866),T.isData3DTexture&&(N=32879);const R=Z(A,T),w=T.source;if(t.activeTexture(33984+k),t.bindTexture(N,A.__webglTexture),w.version!==w.__currentVersion||R===!0){s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const U=function(Me){return!o&&(Me.wrapS!==1001||Me.wrapT!==1001||Me.minFilter!==1003&&Me.minFilter!==1006)}(T)&&y(T.image)===!1;let C=x(T.image,U,!1,c);C=xe(T,C);const $=y(C)||o,j=r.convert(T.format,T.encoding);let Y,ie=r.convert(T.type),ce=S(T.internalFormat,j,ie,T.encoding,T.isVideoTexture);J(N,T,$);const ve=T.mipmaps,de=o&&T.isVideoTexture!==!0,me=A.__version===void 0,_e=D(T,C,$);if(T.isDepthTexture)ce=6402,o?ce=T.type===1015?36012:T.type===1014?33190:T.type===1020?35056:33189:T.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===1026&&ce===6402&&T.type!==1012&&T.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=1012,ie=r.convert(T.type)),T.format===1027&&ce===6402&&(ce=34041,T.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=1020,ie=r.convert(T.type))),de&&me?t.texStorage2D(3553,1,ce,C.width,C.height):t.texImage2D(3553,0,ce,C.width,C.height,0,j,ie,null);else if(T.isDataTexture)if(ve.length>0&&$){de&&me&&t.texStorage2D(3553,_e,ce,ve[0].width,ve[0].height);for(let Me=0,Je=ve.length;Me<Je;Me++)Y=ve[Me],de?t.texSubImage2D(3553,Me,0,0,Y.width,Y.height,j,ie,Y.data):t.texImage2D(3553,Me,ce,Y.width,Y.height,0,j,ie,Y.data);T.generateMipmaps=!1}else de?(me&&t.texStorage2D(3553,_e,ce,C.width,C.height),t.texSubImage2D(3553,0,0,0,C.width,C.height,j,ie,C.data)):t.texImage2D(3553,0,ce,C.width,C.height,0,j,ie,C.data);else if(T.isCompressedTexture){de&&me&&t.texStorage2D(3553,_e,ce,ve[0].width,ve[0].height);for(let Me=0,Je=ve.length;Me<Je;Me++)Y=ve[Me],T.format!==1023?j!==null?de?t.compressedTexSubImage2D(3553,Me,0,0,Y.width,Y.height,j,Y.data):t.compressedTexImage2D(3553,Me,ce,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage2D(3553,Me,0,0,Y.width,Y.height,j,ie,Y.data):t.texImage2D(3553,Me,ce,Y.width,Y.height,0,j,ie,Y.data)}else if(T.isDataArrayTexture)de?(me&&t.texStorage3D(35866,_e,ce,C.width,C.height,C.depth),t.texSubImage3D(35866,0,0,0,0,C.width,C.height,C.depth,j,ie,C.data)):t.texImage3D(35866,0,ce,C.width,C.height,C.depth,0,j,ie,C.data);else if(T.isData3DTexture)de?(me&&t.texStorage3D(32879,_e,ce,C.width,C.height,C.depth),t.texSubImage3D(32879,0,0,0,0,C.width,C.height,C.depth,j,ie,C.data)):t.texImage3D(32879,0,ce,C.width,C.height,C.depth,0,j,ie,C.data);else if(T.isFramebufferTexture)de&&me?t.texStorage2D(3553,_e,ce,C.width,C.height):t.texImage2D(3553,0,ce,C.width,C.height,0,j,ie,null);else if(ve.length>0&&$){de&&me&&t.texStorage2D(3553,_e,ce,ve[0].width,ve[0].height);for(let Me=0,Je=ve.length;Me<Je;Me++)Y=ve[Me],de?t.texSubImage2D(3553,Me,0,0,j,ie,Y):t.texImage2D(3553,Me,ce,j,ie,Y);T.generateMipmaps=!1}else de?(me&&t.texStorage2D(3553,_e,ce,C.width,C.height),t.texSubImage2D(3553,0,0,0,j,ie,C)):t.texImage2D(3553,0,ce,j,ie,C);_(T,$)&&M(N),w.__currentVersion=w.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function V(A,T,k,N,R){const w=r.convert(k.format,k.encoding),U=r.convert(k.type),C=S(k.internalFormat,w,U,k.encoding);n.get(T).__hasExternalTextures||(R===32879||R===35866?t.texImage3D(R,0,C,T.width,T.height,T.depth,0,w,U,null):t.texImage2D(R,0,C,T.width,T.height,0,w,U,null)),t.bindFramebuffer(36160,A),ne(T)?d.framebufferTexture2DMultisampleEXT(36160,N,R,n.get(k).__webglTexture,0,le(T)):s.framebufferTexture2D(36160,N,R,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function oe(A,T,k){if(s.bindRenderbuffer(36161,A),T.depthBuffer&&!T.stencilBuffer){let N=33189;if(k||ne(T)){const R=T.depthTexture;R&&R.isDepthTexture&&(R.type===1015?N=36012:R.type===1014&&(N=33190));const w=le(T);ne(T)?d.renderbufferStorageMultisampleEXT(36161,w,N,T.width,T.height):s.renderbufferStorageMultisample(36161,w,N,T.width,T.height)}else s.renderbufferStorage(36161,N,T.width,T.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(T.depthBuffer&&T.stencilBuffer){const N=le(T);k&&ne(T)===!1?s.renderbufferStorageMultisample(36161,N,35056,T.width,T.height):ne(T)?d.renderbufferStorageMultisampleEXT(36161,N,35056,T.width,T.height):s.renderbufferStorage(36161,34041,T.width,T.height),s.framebufferRenderbuffer(36160,33306,36161,A)}else{const N=T.isWebGLMultipleRenderTargets===!0?T.texture[0]:T.texture,R=r.convert(N.format,N.encoding),w=r.convert(N.type),U=S(N.internalFormat,R,w,N.encoding),C=le(T);k&&ne(T)===!1?s.renderbufferStorageMultisample(36161,C,U,T.width,T.height):ne(T)?d.renderbufferStorageMultisampleEXT(36161,C,U,T.width,T.height):s.renderbufferStorage(36161,U,T.width,T.height)}s.bindRenderbuffer(36161,null)}function se(A){const T=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");(function(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,N),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(R.depthTexture).__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),O(R.depthTexture,0);const w=n.get(R.depthTexture).__webglTexture,U=le(R);if(R.depthTexture.format===1026)ne(R)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,w,0,U):s.framebufferTexture2D(36160,36096,3553,w,0);else{if(R.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");ne(R)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,w,0,U):s.framebufferTexture2D(36160,33306,3553,w,0)}})(T.__webglFramebuffer,A)}else if(k){T.__webglDepthbuffer=[];for(let N=0;N<6;N++)t.bindFramebuffer(36160,T.__webglFramebuffer[N]),T.__webglDepthbuffer[N]=s.createRenderbuffer(),oe(T.__webglDepthbuffer[N],A,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),oe(T.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function le(A){return Math.min(u,A.samples)}function ne(A){const T=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(A,T){const k=A.encoding,N=A.format,R=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===1035||k!==3e3&&(k===3001?o===!1?e.has("EXT_sRGB")===!0&&N===1023?(A.format=1035,A.minFilter=1006,A.generateMipmaps=!1):T=Si.sRGBToLinear(T):N===1023&&R===1009||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),T}this.allocateTextureUnit=function(){const A=W;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),W+=1,A},this.resetTextureUnits=function(){W=0},this.setTexture2D=O,this.setTexture2DArray=function(A,T){const k=n.get(A);A.version>0&&k.__version!==A.version?X(k,A,T):(t.activeTexture(33984+T),t.bindTexture(35866,k.__webglTexture))},this.setTexture3D=function(A,T){const k=n.get(A);A.version>0&&k.__version!==A.version?X(k,A,T):(t.activeTexture(33984+T),t.bindTexture(32879,k.__webglTexture))},this.setTextureCube=function(A,T){const k=n.get(A);A.version>0&&k.__version!==A.version?function(N,R,w){if(R.image.length!==6)return;const U=Z(N,R),C=R.source;if(t.activeTexture(33984+w),t.bindTexture(34067,N.__webglTexture),C.version!==C.__currentVersion||U===!0){s.pixelStorei(37440,R.flipY),s.pixelStorei(37441,R.premultiplyAlpha),s.pixelStorei(3317,R.unpackAlignment),s.pixelStorei(37443,0);const $=R.isCompressedTexture||R.image[0].isCompressedTexture,j=R.image[0]&&R.image[0].isDataTexture,Y=[];for(let ye=0;ye<6;ye++)Y[ye]=$||j?j?R.image[ye].image:R.image[ye]:x(R.image[ye],!1,!0,h),Y[ye]=xe(R,Y[ye]);const ie=Y[0],ce=y(ie)||o,ve=r.convert(R.format,R.encoding),de=r.convert(R.type),me=S(R.internalFormat,ve,de,R.encoding),_e=o&&R.isVideoTexture!==!0,Me=N.__version===void 0;let Je,mn=D(R,ie,ce);if(J(34067,R,ce),$){_e&&Me&&t.texStorage2D(34067,mn,me,ie.width,ie.height);for(let ye=0;ye<6;ye++){Je=Y[ye].mipmaps;for(let Ie=0;Ie<Je.length;Ie++){const Oe=Je[Ie];R.format!==1023?ve!==null?_e?t.compressedTexSubImage2D(34069+ye,Ie,0,0,Oe.width,Oe.height,ve,Oe.data):t.compressedTexImage2D(34069+ye,Ie,me,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(34069+ye,Ie,0,0,Oe.width,Oe.height,ve,de,Oe.data):t.texImage2D(34069+ye,Ie,me,Oe.width,Oe.height,0,ve,de,Oe.data)}}}else{Je=R.mipmaps,_e&&Me&&(Je.length>0&&mn++,t.texStorage2D(34067,mn,me,Y[0].width,Y[0].height));for(let ye=0;ye<6;ye++)if(j){_e?t.texSubImage2D(34069+ye,0,0,0,Y[ye].width,Y[ye].height,ve,de,Y[ye].data):t.texImage2D(34069+ye,0,me,Y[ye].width,Y[ye].height,0,ve,de,Y[ye].data);for(let Ie=0;Ie<Je.length;Ie++){const Oe=Je[Ie].image[ye].image;_e?t.texSubImage2D(34069+ye,Ie+1,0,0,Oe.width,Oe.height,ve,de,Oe.data):t.texImage2D(34069+ye,Ie+1,me,Oe.width,Oe.height,0,ve,de,Oe.data)}}else{_e?t.texSubImage2D(34069+ye,0,0,0,ve,de,Y[ye]):t.texImage2D(34069+ye,0,me,ve,de,Y[ye]);for(let Ie=0;Ie<Je.length;Ie++){const Oe=Je[Ie];_e?t.texSubImage2D(34069+ye,Ie+1,0,0,ve,de,Oe.image[ye]):t.texImage2D(34069+ye,Ie+1,me,ve,de,Oe.image[ye])}}}_(R,ce)&&M(34067),C.__currentVersion=C.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}(k,A,T):(t.activeTexture(33984+T),t.bindTexture(34067,k.__webglTexture))},this.rebindTextures=function(A,T,k){const N=n.get(A);T!==void 0&&V(N.__webglFramebuffer,A,A.texture,36064,3553),k!==void 0&&se(A)},this.setupRenderTarget=function(A){const T=A.texture,k=n.get(A),N=n.get(T);A.addEventListener("dispose",F),A.isWebGLMultipleRenderTargets!==!0&&(N.__webglTexture===void 0&&(N.__webglTexture=s.createTexture()),N.__version=T.version,a.memory.textures++);const R=A.isWebGLCubeRenderTarget===!0,w=A.isWebGLMultipleRenderTargets===!0,U=y(A)||o;if(R){k.__webglFramebuffer=[];for(let C=0;C<6;C++)k.__webglFramebuffer[C]=s.createFramebuffer()}else if(k.__webglFramebuffer=s.createFramebuffer(),w)if(i.drawBuffers){const C=A.texture;for(let $=0,j=C.length;$<j;$++){const Y=n.get(C[$]);Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(o&&A.samples>0&&ne(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer);const C=r.convert(T.format,T.encoding),$=r.convert(T.type),j=S(T.internalFormat,C,$,T.encoding),Y=le(A);s.renderbufferStorageMultisample(36161,Y,j,A.width,A.height),t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}if(R){t.bindTexture(34067,N.__webglTexture),J(34067,T,U);for(let C=0;C<6;C++)V(k.__webglFramebuffer[C],A,T,36064,34069+C);_(T,U)&&M(34067),t.unbindTexture()}else if(w){const C=A.texture;for(let $=0,j=C.length;$<j;$++){const Y=C[$],ie=n.get(Y);t.bindTexture(3553,ie.__webglTexture),J(3553,Y,U),V(k.__webglFramebuffer,A,Y,36064+$,3553),_(Y,U)&&M(3553)}t.unbindTexture()}else{let C=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?C=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,N.__webglTexture),J(C,T,U),V(k.__webglFramebuffer,A,T,36064,C),_(T,U)&&M(C),t.unbindTexture()}A.depthBuffer&&se(A)},this.updateRenderTargetMipmap=function(A){const T=y(A)||o,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let N=0,R=k.length;N<R;N++){const w=k[N];if(_(w,T)){const U=A.isWebGLCubeRenderTarget?34067:3553,C=n.get(w).__webglTexture;t.bindTexture(U,C),M(U),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(o&&A.samples>0&&ne(A)===!1){const T=A.width,k=A.height;let N=16384;const R=[36064],w=A.stencilBuffer?33306:36096;A.depthBuffer&&R.push(w);const U=n.get(A),C=U.__ignoreDepthValues!==void 0&&U.__ignoreDepthValues;C===!1&&(A.depthBuffer&&(N|=256),A.stencilBuffer&&(N|=1024)),t.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,U.__webglFramebuffer),C===!0&&(s.invalidateFramebuffer(36008,[w]),s.invalidateFramebuffer(36009,[w])),s.blitFramebuffer(0,0,T,k,0,0,T,k,N,9728),p&&s.invalidateFramebuffer(36008,R),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ne}function qv(s,e,t){const n=t.isWebGL2;return{convert:function(i,r=null){let a;if(i===1009)return 5121;if(i===1017)return 32819;if(i===1018)return 32820;if(i===1010)return 5120;if(i===1011)return 5122;if(i===1012)return 5123;if(i===1013)return 5124;if(i===1014)return 5125;if(i===1015)return 5126;if(i===1016)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return 6406;if(i===1023)return 6408;if(i===1024)return 6409;if(i===1025)return 6410;if(i===1026)return 6402;if(i===1027)return 34041;if(i===1028)return 6403;if(i===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(i===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1029)return 36244;if(i===1030)return 33319;if(i===1031)return 33320;if(i===1033)return 36249;if(i===33776||i===33777||i===33778||i===33779)if(r===3001){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===35840||i===35841||i===35842||i===35843){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===37492||i===37496){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===37492)return r===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===37496)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===37808)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return r===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===36492){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===36492)return r===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}return i===1020?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}class lf extends lt{constructor(e=[]){super(),this.cameras=e}}lf.prototype.isArrayCamera=!0;class In extends Le{constructor(){super(),this.type="Group"}}In.prototype.isGroup=!0;const Xv={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xv))),h&&e.hand){a=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,n);if(h.joints[g.jointName]===void 0){const b=new In;b.matrixAutoUpdate=!1,b.visible=!1,h.joints[g.jointName]=b,h.add(b)}const f=h.joints[g.jointName];v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=v.radius),f.visible=v!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,m=.005;h.inputState.pinching&&d>p+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=p-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}}class hf extends Ye{constructor(e,t,n,i,r,a,o,l,h,c){if((c=c!==void 0?c:1026)!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===1026&&(n=1012),n===void 0&&c===1027&&(n=1020),super(null,i,r,a,o,l,c,n,h),this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}hf.prototype.isDepthTexture=!0;class Yv extends Ht{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=null,h=null,c=null,u=null,d=null;const p=t.getContextAttributes();let m=null,g=null;const v=[],f=new Map,b=new lt;b.layers.enable(1),b.viewport=new Ue;const x=new lt;x.layers.enable(2),x.viewport=new Ue;const y=[b,x],_=new lf;_.layers.enable(1),_.layers.enable(2);let M=null,S=null;function D(z){const J=f.get(z.inputSource);J&&J.dispatchEvent({type:z.type,data:z.inputSource})}function P(){f.forEach(function(z,J){z.disconnect(J)}),f.clear(),M=null,S=null,e.setRenderTarget(m),u=null,c=null,h=null,i=null,g=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function I(z){const J=i.inputSources;for(let Z=0;Z<v.length;Z++)f.set(J[Z],v[Z]);for(let Z=0;Z<z.removed.length;Z++){const X=z.removed[Z],V=f.get(X);V&&(V.dispatchEvent({type:"disconnected",data:X}),f.delete(X))}for(let Z=0;Z<z.added.length;Z++){const X=z.added[Z],V=f.get(X);V&&V.dispatchEvent({type:"connected",data:X})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=v[z];return J===void 0&&(J=new al,v[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=v[z];return J===void 0&&(J=new al,v[z]=J),J.getGripSpace()},this.getHand=function(z){let J=v[z];return J===void 0&&(J=new al,v[z]=J),J.getHandSpace()},this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return c!==null?c:u},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",P),i.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers!==void 0||p.antialias,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:u}),g=new pt(u.framebufferWidth,u.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding})}else{let J=null,Z=null,X=null;p.depth&&(X=p.stencil?35056:33190,J=p.stencil?1027:1026,Z=p.stencil?1020:1012);const V={colorFormat:e.outputEncoding===3001?35907:32856,depthFormat:X,scaleFactor:r};h=new XRWebGLBinding(i,t),c=h.createProjectionLayer(V),i.updateRenderState({layers:[c]}),g=new pt(c.textureWidth,c.textureHeight,{format:1023,type:1009,depthTexture:new hf(c.textureWidth,c.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0}),e.properties.get(g).__ignoreDepthValues=c.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),a=await i.requestReferenceSpace(o),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};const F=new E,B=new E;function W(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;_.near=x.near=b.near=z.near,_.far=x.far=b.far=z.far,M===_.near&&S===_.far||(i.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,S=_.far);const J=z.parent,Z=_.cameras;W(_,J);for(let V=0;V<Z.length;V++)W(Z[V],J);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),z.position.copy(_.position),z.quaternion.copy(_.quaternion),z.scale.copy(_.scale),z.matrix.copy(_.matrix),z.matrixWorld.copy(_.matrixWorld);const X=z.children;for(let V=0,oe=X.length;V<oe;V++)X[V].updateMatrixWorld(!0);Z.length===2?function(V,oe,se){F.setFromMatrixPosition(oe.matrixWorld),B.setFromMatrixPosition(se.matrixWorld);const le=F.distanceTo(B),ne=oe.projectionMatrix.elements,xe=se.projectionMatrix.elements,A=ne[14]/(ne[10]-1),T=ne[14]/(ne[10]+1),k=(ne[9]+1)/ne[5],N=(ne[9]-1)/ne[5],R=(ne[8]-1)/ne[0],w=(xe[8]+1)/xe[0],U=A*R,C=A*w,$=le/(-R+w),j=$*-R;oe.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(j),V.translateZ($),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Y=A+$,ie=T+$,ce=U-j,ve=C+(le-j),de=k*T/ie*Y,me=N*T/ie*Y;V.projectionMatrix.makePerspective(ce,ve,de,me,Y,ie)}(_,b,x):_.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){return c!==null?c.fixedFoveation:u!==null?u.fixedFoveation:void 0},this.setFoveation=function(z){c!==null&&(c.fixedFoveation=z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=z)};let O=null;const G=new Km;G.setAnimationLoop(function(z,J){if(l=J.getViewerPose(a),d=J,l!==null){const X=l.views;u!==null&&(e.setRenderTargetFramebuffer(g,u.framebuffer),e.setRenderTarget(g));let V=!1;X.length!==_.cameras.length&&(_.cameras.length=0,V=!0);for(let oe=0;oe<X.length;oe++){const se=X[oe];let le=null;if(u!==null)le=u.getViewport(se);else{const xe=h.getViewSubImage(c,se);le=xe.viewport,oe===0&&(e.setRenderTargetTextures(g,xe.colorTexture,c.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(g))}const ne=y[oe];ne.matrix.fromArray(se.transform.matrix),ne.projectionMatrix.fromArray(se.projectionMatrix),ne.viewport.set(le.x,le.y,le.width,le.height),oe===0&&_.matrix.copy(ne.matrix),V===!0&&_.cameras.push(ne)}}const Z=i.inputSources;for(let X=0;X<v.length;X++){const V=v[X],oe=Z[X];V.update(oe,J,a)}O&&O(z,J),d=null}),this.setAnimationLoop=function(z){O=z},this.dispose=function(){}}}function Jv(s,e){function t(n,i){n.opacity.value=i.opacity,i.color&&n.diffuse.value.copy(i.color),i.emissive&&n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(n.map.value=i.map),i.alphaMap&&(n.alphaMap.value=i.alphaMap),i.bumpMap&&(n.bumpMap.value=i.bumpMap,n.bumpScale.value=i.bumpScale,i.side===1&&(n.bumpScale.value*=-1)),i.displacementMap&&(n.displacementMap.value=i.displacementMap,n.displacementScale.value=i.displacementScale,n.displacementBias.value=i.displacementBias),i.emissiveMap&&(n.emissiveMap.value=i.emissiveMap),i.normalMap&&(n.normalMap.value=i.normalMap,n.normalScale.value.copy(i.normalScale),i.side===1&&n.normalScale.value.negate()),i.specularMap&&(n.specularMap.value=i.specularMap),i.alphaTest>0&&(n.alphaTest.value=i.alphaTest);const r=e.get(i).envMap;if(r&&(n.envMap.value=r,n.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=i.reflectivity,n.ior.value=i.ior,n.refractionRatio.value=i.refractionRatio),i.lightMap){n.lightMap.value=i.lightMap;const l=s.physicallyCorrectLights!==!0?Math.PI:1;n.lightMapIntensity.value=i.lightMapIntensity*l}let a,o;i.aoMap&&(n.aoMap.value=i.aoMap,n.aoMapIntensity.value=i.aoMapIntensity),i.map?a=i.map:i.specularMap?a=i.specularMap:i.displacementMap?a=i.displacementMap:i.normalMap?a=i.normalMap:i.bumpMap?a=i.bumpMap:i.roughnessMap?a=i.roughnessMap:i.metalnessMap?a=i.metalnessMap:i.alphaMap?a=i.alphaMap:i.emissiveMap?a=i.emissiveMap:i.clearcoatMap?a=i.clearcoatMap:i.clearcoatNormalMap?a=i.clearcoatNormalMap:i.clearcoatRoughnessMap?a=i.clearcoatRoughnessMap:i.specularIntensityMap?a=i.specularIntensityMap:i.specularColorMap?a=i.specularColorMap:i.transmissionMap?a=i.transmissionMap:i.thicknessMap?a=i.thicknessMap:i.sheenColorMap?a=i.sheenColorMap:i.sheenRoughnessMap&&(a=i.sheenRoughnessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),n.uvTransform.value.copy(a.matrix)),i.aoMap?o=i.aoMap:i.lightMap&&(o=i.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),n.uv2Transform.value.copy(o.matrix))}return{refreshFogUniforms:function(n,i){n.fogColor.value.copy(i.color),i.isFog?(n.fogNear.value=i.near,n.fogFar.value=i.far):i.isFogExp2&&(n.fogDensity.value=i.density)},refreshMaterialUniforms:function(n,i,r,a,o){i.isMeshBasicMaterial||i.isMeshLambertMaterial?t(n,i):i.isMeshToonMaterial?(t(n,i),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(n,i)):i.isMeshPhongMaterial?(t(n,i),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(n,i)):i.isMeshStandardMaterial?(t(n,i),function(l,h){l.roughness.value=h.roughness,l.metalness.value=h.metalness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(n,i),i.isMeshPhysicalMaterial&&function(l,h,c){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),l.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===1&&l.clearcoatNormalScale.value.negate())),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=c.texture,l.transmissionSamplerSize.value.set(c.width,c.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap)}(n,i,o)):i.isMeshMatcapMaterial?(t(n,i),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(n,i)):i.isMeshDepthMaterial?t(n,i):i.isMeshDistanceMaterial?(t(n,i),function(l,h){l.referencePosition.value.copy(h.referencePosition),l.nearDistance.value=h.nearDistance,l.farDistance.value=h.farDistance}(n,i)):i.isMeshNormalMaterial?t(n,i):i.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity}(n,i),i.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(n,i)):i.isPointsMaterial?function(l,h,c,u){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*c,l.scale.value=.5*u,h.map&&(l.map.value=h.map),h.alphaMap&&(l.alphaMap.value=h.alphaMap),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest);let d;h.map?d=h.map:h.alphaMap&&(d=h.alphaMap),d!==void 0&&(d.matrixAutoUpdate===!0&&d.updateMatrix(),l.uvTransform.value.copy(d.matrix))}(n,i,r,a):i.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map),h.alphaMap&&(l.alphaMap.value=h.alphaMap),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest);let c;h.map?c=h.map:h.alphaMap&&(c=h.alphaMap),c!==void 0&&(c.matrixAutoUpdate===!0&&c.updateMatrix(),l.uvTransform.value.copy(c.matrix))}(n,i):i.isShadowMaterial?(n.color.value.copy(i.color),n.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function Ne(s){const e=s.canvas!==void 0?s.canvas:function(){const L=Cs("canvas");return L.style.display="block",L}(),t=s.context!==void 0?s.context:null,n=s.depth===void 0||s.depth,i=s.stencil===void 0||s.stencil,r=s.antialias!==void 0&&s.antialias,a=s.premultipliedAlpha===void 0||s.premultipliedAlpha,o=s.preserveDrawingBuffer!==void 0&&s.preserveDrawingBuffer,l=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0&&s.failIfMajorPerformanceCaveat;let c;c=s.context!==void 0?t.getContextAttributes().alpha:s.alpha!==void 0&&s.alpha;let u=null,d=null;const p=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const g=this;let v=!1,f=0,b=0,x=null,y=-1,_=null;const M=new Ue,S=new Ue;let D=null,P=e.width,I=e.height,F=1,B=null,W=null;const O=new Ue(0,0,P,I),G=new Ue(0,0,P,I);let z=!1;const J=new fo;let Z=!1,X=!1,V=null;const oe=new ue,se=new Q,le=new E,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return x===null?F:1}let A,T,k,N,R,w,U,C,$,j,Y,ie,ce,ve,de,me,_e,Me,Je,mn,ye,Ie,Oe,re=t;function Cc(L,H){for(let q=0;q<L.length;q++){const K=L[q],ee=e.getContext(K,H);if(ee!==null)return ee}return null}try{const L={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r139"),e.addEventListener("webglcontextlost",Pc,!1),e.addEventListener("webglcontextrestored",Dc,!1),re===null){const H=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&H.shift(),re=Cc(H,L),re===null)throw Cc(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}re.getShaderPrecisionFormat===void 0&&(re.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function Lc(){A=new C0(re),T=new T0(re,A,s),A.init(T),Ie=new qv(re,A,T),k=new Wv(re,A,T),N=new D0(re),R=new Fv,w=new jv(re,A,k,R,T,Ie,N),U=new A0(g),C=new R0(g),$=new _0(re,T),Oe=new M0(re,A,$,T),j=new L0(re,$,N,Oe),Y=new F0(re,j,$,N),Je=new N0(re,T,w),me=new E0(R),ie=new Nv(g,U,C,A,T,Oe,me),ce=new Jv(g,R),ve=new kv,de=new Gv(A,T),Me=new w0(g,U,k,Y,c,a),_e=new of(g,Y,T),mn=new S0(re,A,N,T),ye=new P0(re,A,N,T),N.programs=ie.programs,g.capabilities=T,g.extensions=A,g.properties=R,g.renderLists=ve,g.shadowMap=_e,g.state=k,g.info=N}Lc();const At=new Yv(g,re);function Pc(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Dc(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const L=N.autoReset,H=_e.enabled,q=_e.autoUpdate,K=_e.needsUpdate,ee=_e.type;Lc(),N.autoReset=L,_e.enabled=H,_e.autoUpdate=q,_e.needsUpdate=K,_e.type=ee}function Ic(L){const H=L.target;H.removeEventListener("dispose",Ic),function(q){(function(K){const ee=R.get(K).programs;ee!==void 0&&(ee.forEach(function(fe){ie.releaseProgram(fe)}),K.isShaderMaterial&&ie.releaseShaderCache(K))})(q),R.remove(q)}(H)}this.xr=At,this.getContext=function(){return re},this.getContextAttributes=function(){return re.getContextAttributes()},this.forceContextLoss=function(){const L=A.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=A.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(L){L!==void 0&&(F=L,this.setSize(P,I,!1))},this.getSize=function(L){return L.set(P,I)},this.setSize=function(L,H,q){At.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(P=L,I=H,e.width=Math.floor(L*F),e.height=Math.floor(H*F),q!==!1&&(e.style.width=L+"px",e.style.height=H+"px"),this.setViewport(0,0,L,H))},this.getDrawingBufferSize=function(L){return L.set(P*F,I*F).floor()},this.setDrawingBufferSize=function(L,H,q){P=L,I=H,F=q,e.width=Math.floor(L*q),e.height=Math.floor(H*q),this.setViewport(0,0,L,H)},this.getCurrentViewport=function(L){return L.copy(M)},this.getViewport=function(L){return L.copy(O)},this.setViewport=function(L,H,q,K){L.isVector4?O.set(L.x,L.y,L.z,L.w):O.set(L,H,q,K),k.viewport(M.copy(O).multiplyScalar(F).floor())},this.getScissor=function(L){return L.copy(G)},this.setScissor=function(L,H,q,K){L.isVector4?G.set(L.x,L.y,L.z,L.w):G.set(L,H,q,K),k.scissor(S.copy(G).multiplyScalar(F).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(L){k.setScissorTest(z=L)},this.setOpaqueSort=function(L){B=L},this.setTransparentSort=function(L){W=L},this.getClearColor=function(L){return L.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(L=!0,H=!0,q=!0){let K=0;L&&(K|=16384),H&&(K|=256),q&&(K|=1024),re.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pc,!1),e.removeEventListener("webglcontextrestored",Dc,!1),ve.dispose(),de.dispose(),R.dispose(),U.dispose(),C.dispose(),Y.dispose(),Oe.dispose(),ie.dispose(),At.dispose(),At.removeEventListener("sessionstart",Oc),At.removeEventListener("sessionend",Nc),V&&(V.dispose(),V=null),hi.stop()},this.renderBufferDirect=function(L,H,q,K,ee,fe){H===null&&(H=ne);const Se=ee.isMesh&&ee.matrixWorld.determinant()<0,be=function(ht,Ar,Vt,we,rt){Ar.isScene!==!0&&(Ar=ne),w.resetTextureUnits();const Lo=Ar.fog,Fg=we.isMeshStandardMaterial?Ar.environment:null,Ug=x===null?g.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:3e3,kg=(we.isMeshStandardMaterial?C:U).get(we.envMap||Fg),Bg=we.vertexColors===!0&&!!Vt.attributes.color&&Vt.attributes.color.itemSize===4,zg=!!we.normalMap&&!!Vt.attributes.tangent,Hg=!!Vt.morphAttributes.position,Vg=!!Vt.morphAttributes.normal,Gg=!!Vt.morphAttributes.color,Wg=we.toneMapped?g.toneMapping:0,Bc=Vt.morphAttributes.position||Vt.morphAttributes.normal||Vt.morphAttributes.color,jg=Bc!==void 0?Bc.length:0,Fe=R.get(we),qg=d.state.lights;if(Z===!0&&(X===!0||ht!==_)){const Wt=ht===_&&we.id===y;me.setState(we,ht,Wt)}let fn=!1;we.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==qg.state.version||Fe.outputEncoding!==Ug||rt.isInstancedMesh&&Fe.instancing===!1?fn=!0:rt.isInstancedMesh||Fe.instancing!==!0?rt.isSkinnedMesh&&Fe.skinning===!1?fn=!0:rt.isSkinnedMesh||Fe.skinning!==!0?Fe.envMap!==kg||we.fog&&Fe.fog!==Lo?fn=!0:Fe.numClippingPlanes===void 0||Fe.numClippingPlanes===me.numPlanes&&Fe.numIntersection===me.numIntersection?(Fe.vertexAlphas!==Bg||Fe.vertexTangents!==zg||Fe.morphTargets!==Hg||Fe.morphNormals!==Vg||Fe.morphColors!==Gg||Fe.toneMapping!==Wg||T.isWebGL2===!0&&Fe.morphTargetsCount!==jg)&&(fn=!0):fn=!0:fn=!0:fn=!0:(fn=!0,Fe.__version=we.version);let Rr=Fe.currentProgram;fn===!0&&(Rr=Ro(we,Ar,rt));let zc=!1,Cr=!1,Po=!1;const mt=Rr.getUniforms(),Lr=Fe.uniforms;if(k.useProgram(Rr.program)&&(zc=!0,Cr=!0,Po=!0),we.id!==y&&(y=we.id,Cr=!0),zc||_!==ht){if(mt.setValue(re,"projectionMatrix",ht.projectionMatrix),T.logarithmicDepthBuffer&&mt.setValue(re,"logDepthBufFC",2/(Math.log(ht.far+1)/Math.LN2)),_!==ht&&(_=ht,Cr=!0,Po=!0),we.isShaderMaterial||we.isMeshPhongMaterial||we.isMeshToonMaterial||we.isMeshStandardMaterial||we.envMap){const Wt=mt.map.cameraPosition;Wt!==void 0&&Wt.setValue(re,le.setFromMatrixPosition(ht.matrixWorld))}(we.isMeshPhongMaterial||we.isMeshToonMaterial||we.isMeshLambertMaterial||we.isMeshBasicMaterial||we.isMeshStandardMaterial||we.isShaderMaterial)&&mt.setValue(re,"isOrthographic",ht.isOrthographicCamera===!0),(we.isMeshPhongMaterial||we.isMeshToonMaterial||we.isMeshLambertMaterial||we.isMeshBasicMaterial||we.isMeshStandardMaterial||we.isShaderMaterial||we.isShadowMaterial||rt.isSkinnedMesh)&&mt.setValue(re,"viewMatrix",ht.matrixWorldInverse)}if(rt.isSkinnedMesh){mt.setOptional(re,rt,"bindMatrix"),mt.setOptional(re,rt,"bindMatrixInverse");const Wt=rt.skeleton;Wt&&(T.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),mt.setValue(re,"boneTexture",Wt.boneTexture,w),mt.setValue(re,"boneTextureSize",Wt.boneTextureSize)):mt.setOptional(re,Wt,"boneMatrices"))}const Do=Vt.morphAttributes;(Do.position!==void 0||Do.normal!==void 0||Do.color!==void 0&&T.isWebGL2===!0)&&Je.update(rt,Vt,we,Rr),(Cr||Fe.receiveShadow!==rt.receiveShadow)&&(Fe.receiveShadow=rt.receiveShadow,mt.setValue(re,"receiveShadow",rt.receiveShadow)),Cr&&(mt.setValue(re,"toneMappingExposure",g.toneMappingExposure),Fe.needsLights&&(Gt=Po,(en=Lr).ambientLightColor.needsUpdate=Gt,en.lightProbe.needsUpdate=Gt,en.directionalLights.needsUpdate=Gt,en.directionalLightShadows.needsUpdate=Gt,en.pointLights.needsUpdate=Gt,en.pointLightShadows.needsUpdate=Gt,en.spotLights.needsUpdate=Gt,en.spotLightShadows.needsUpdate=Gt,en.rectAreaLights.needsUpdate=Gt,en.hemisphereLights.needsUpdate=Gt),Lo&&we.fog&&ce.refreshFogUniforms(Lr,Lo),ce.refreshMaterialUniforms(Lr,we,F,I,V),ni.upload(re,Fe.uniformsList,Lr,w));var en,Gt;return we.isShaderMaterial&&we.uniformsNeedUpdate===!0&&(ni.upload(re,Fe.uniformsList,Lr,w),we.uniformsNeedUpdate=!1),we.isSpriteMaterial&&mt.setValue(re,"center",rt.center),mt.setValue(re,"modelViewMatrix",rt.modelViewMatrix),mt.setValue(re,"normalMatrix",rt.normalMatrix),mt.setValue(re,"modelMatrix",rt.matrixWorld),Rr}(L,H,q,K,ee);k.setMaterial(K,Se);let Re=q.index;const Xe=q.attributes.position;if(Re===null){if(Xe===void 0||Xe.count===0)return}else if(Re.count===0)return;let Pe,Ee=1;K.wireframe===!0&&(Re=j.getWireframeAttribute(q),Ee=2),Oe.setup(ee,K,be,q,Re);let it=mn;Re!==null&&(Pe=$.get(Re),it=ye,it.setIndex(Pe));const Er=Re!==null?Re.count:Xe.count,It=q.drawRange.start*Ee,Co=q.drawRange.count*Ee,zn=fe!==null?fe.start*Ee:0,Og=fe!==null?fe.count*Ee:1/0,Hs=Math.max(It,zn),Ng=Math.min(Er,It+Co,zn+Og)-1,Vs=Math.max(0,Ng-Hs+1);if(Vs!==0){if(ee.isMesh)K.wireframe===!0?(k.setLineWidth(K.wireframeLinewidth*xe()),it.setMode(1)):it.setMode(4);else if(ee.isLine){let ht=K.linewidth;ht===void 0&&(ht=1),k.setLineWidth(ht*xe()),ee.isLineSegments?it.setMode(1):ee.isLineLoop?it.setMode(2):it.setMode(3)}else ee.isPoints?it.setMode(0):ee.isSprite&&it.setMode(4);if(ee.isInstancedMesh)it.renderInstances(Hs,Vs,ee.count);else if(q.isInstancedBufferGeometry){const ht=Math.min(q.instanceCount,q._maxInstanceCount);it.renderInstances(Hs,Vs,ht)}else it.render(Hs,Vs)}},this.compile=function(L,H){d=de.get(L),d.init(),m.push(d),L.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights(g.physicallyCorrectLights),L.traverse(function(q){const K=q.material;if(K)if(Array.isArray(K))for(let ee=0;ee<K.length;ee++)Ro(K[ee],L,q);else Ro(K,L,q)}),m.pop(),d=null};let Ao=null;function Oc(){hi.stop()}function Nc(){hi.start()}const hi=new Km;function Fc(L,H,q,K){if(L.visible===!1)return;if(L.layers.test(H.layers)){if(L.isGroup)q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(H);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||J.intersectsSprite(L)){K&&le.setFromMatrixPosition(L.matrixWorld).applyMatrix4(oe);const fe=Y.update(L),Se=L.material;Se.visible&&u.push(L,fe,Se,q,le.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==N.render.frame&&(L.skeleton.update(),L.skeleton.frame=N.render.frame),!L.frustumCulled||J.intersectsObject(L))){K&&le.setFromMatrixPosition(L.matrixWorld).applyMatrix4(oe);const fe=Y.update(L),Se=L.material;if(Array.isArray(Se)){const be=fe.groups;for(let Re=0,Xe=be.length;Re<Xe;Re++){const Pe=be[Re],Ee=Se[Pe.materialIndex];Ee&&Ee.visible&&u.push(L,fe,Ee,q,le.z,Pe)}}else Se.visible&&u.push(L,fe,Se,q,le.z,null)}}const ee=L.children;for(let fe=0,Se=ee.length;fe<Se;fe++)Fc(ee[fe],H,q,K)}function Uc(L,H,q,K){const ee=L.opaque,fe=L.transmissive,Se=L.transparent;d.setupLightsView(q),fe.length>0&&function(be,Re,Xe){const Pe=T.isWebGL2;V===null&&(V=new pt(1,1,{generateMipmaps:!0,type:Ie.convert(1016)!==null?1016:1009,minFilter:1008,samples:Pe&&r===!0?4:0})),g.getDrawingBufferSize(se),Pe?V.setSize(se.x,se.y):V.setSize(to(se.x),to(se.y));const Ee=g.getRenderTarget();g.setRenderTarget(V),g.clear();const it=g.toneMapping;g.toneMapping=0,zs(be,Re,Xe),g.toneMapping=it,w.updateMultisampleRenderTarget(V),w.updateRenderTargetMipmap(V),g.setRenderTarget(Ee)}(ee,H,q),K&&k.viewport(M.copy(K)),ee.length>0&&zs(ee,H,q),fe.length>0&&zs(fe,H,q),Se.length>0&&zs(Se,H,q),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function zs(L,H,q){const K=H.isScene===!0?H.overrideMaterial:null;for(let ee=0,fe=L.length;ee<fe;ee++){const Se=L[ee],be=Se.object,Re=Se.geometry,Xe=K===null?Se.material:K,Pe=Se.group;be.layers.test(q.layers)&&Ig(be,H,q,Re,Xe,Pe)}}function Ig(L,H,q,K,ee,fe){L.onBeforeRender(g,H,q,K,ee,fe),L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ee.onBeforeRender(g,H,q,K,L,fe),ee.transparent===!0&&ee.side===2?(ee.side=1,ee.needsUpdate=!0,g.renderBufferDirect(q,H,K,ee,L,fe),ee.side=0,ee.needsUpdate=!0,g.renderBufferDirect(q,H,K,ee,L,fe),ee.side=2):g.renderBufferDirect(q,H,K,ee,L,fe),L.onAfterRender(g,H,q,K,ee,fe)}function Ro(L,H,q){H.isScene!==!0&&(H=ne);const K=R.get(L),ee=d.state.lights,fe=d.state.shadowsArray,Se=ee.state.version,be=ie.getParameters(L,ee.state,fe,H,q),Re=ie.getProgramCacheKey(be);let Xe=K.programs;K.environment=L.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(L.isMeshStandardMaterial?C:U).get(L.envMap||K.environment),Xe===void 0&&(L.addEventListener("dispose",Ic),Xe=new Map,K.programs=Xe);let Pe=Xe.get(Re);if(Pe!==void 0){if(K.currentProgram===Pe&&K.lightsStateVersion===Se)return kc(L,be),Pe}else be.uniforms=ie.getUniforms(L),L.onBuild(q,be,g),L.onBeforeCompile(be,g),Pe=ie.acquireProgram(be,Re),Xe.set(Re,Pe),K.uniforms=be.uniforms;const Ee=K.uniforms;(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(Ee.clippingPlanes=me.uniform),kc(L,be),K.needsLights=function(It){return It.isMeshLambertMaterial||It.isMeshToonMaterial||It.isMeshPhongMaterial||It.isMeshStandardMaterial||It.isShadowMaterial||It.isShaderMaterial&&It.lights===!0}(L),K.lightsStateVersion=Se,K.needsLights&&(Ee.ambientLightColor.value=ee.state.ambient,Ee.lightProbe.value=ee.state.probe,Ee.directionalLights.value=ee.state.directional,Ee.directionalLightShadows.value=ee.state.directionalShadow,Ee.spotLights.value=ee.state.spot,Ee.spotLightShadows.value=ee.state.spotShadow,Ee.rectAreaLights.value=ee.state.rectArea,Ee.ltc_1.value=ee.state.rectAreaLTC1,Ee.ltc_2.value=ee.state.rectAreaLTC2,Ee.pointLights.value=ee.state.point,Ee.pointLightShadows.value=ee.state.pointShadow,Ee.hemisphereLights.value=ee.state.hemi,Ee.directionalShadowMap.value=ee.state.directionalShadowMap,Ee.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ee.spotShadowMap.value=ee.state.spotShadowMap,Ee.spotShadowMatrix.value=ee.state.spotShadowMatrix,Ee.pointShadowMap.value=ee.state.pointShadowMap,Ee.pointShadowMatrix.value=ee.state.pointShadowMatrix);const it=Pe.getUniforms(),Er=ni.seqWithValue(it.seq,Ee);return K.currentProgram=Pe,K.uniformsList=Er,Pe}function kc(L,H){const q=R.get(L);q.outputEncoding=H.outputEncoding,q.instancing=H.instancing,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}hi.setAnimationLoop(function(L){Ao&&Ao(L)}),typeof self!="undefined"&&hi.setContext(self),this.setAnimationLoop=function(L){Ao=L,At.setAnimationLoop(L),L===null?hi.stop():hi.start()},At.addEventListener("sessionstart",Oc),At.addEventListener("sessionend",Nc),this.render=function(L,H){if(H!==void 0&&H.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(v===!0)return;L.autoUpdate===!0&&L.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(H),H=At.getCamera()),L.isScene===!0&&L.onBeforeRender(g,L,H,x),d=de.get(L,m.length),d.init(),m.push(d),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),J.setFromProjectionMatrix(oe),X=this.localClippingEnabled,Z=me.init(this.clippingPlanes,X,H),u=ve.get(L,p.length),u.init(),p.push(u),Fc(L,H,0,g.sortObjects),u.finish(),g.sortObjects===!0&&u.sort(B,W),Z===!0&&me.beginShadows();const q=d.state.shadowsArray;if(_e.render(q,L,H),Z===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Me.render(u,L),d.setupLights(g.physicallyCorrectLights),H.isArrayCamera){const K=H.cameras;for(let ee=0,fe=K.length;ee<fe;ee++){const Se=K[ee];Uc(u,L,Se,Se.viewport)}}else Uc(u,L,H);x!==null&&(w.updateMultisampleRenderTarget(x),w.updateRenderTargetMipmap(x)),L.isScene===!0&&L.onAfterRender(g,L,H),Oe.resetDefaultState(),y=-1,_=null,m.pop(),d=m.length>0?m[m.length-1]:null,p.pop(),u=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(L,H,q){R.get(L.texture).__webglTexture=H,R.get(L.depthTexture).__webglTexture=q;const K=R.get(L);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||A.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,H){const q=R.get(L);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(L,H=0,q=0){x=L,f=H,b=q;let K=!0;if(L){const be=R.get(L);be.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(36160,null),K=!1):be.__webglFramebuffer===void 0?w.setupRenderTarget(L):be.__hasExternalTextures&&w.rebindTextures(L,R.get(L.texture).__webglTexture,R.get(L.depthTexture).__webglTexture)}let ee=null,fe=!1,Se=!1;if(L){const be=L.texture;(be.isData3DTexture||be.isDataArrayTexture)&&(Se=!0);const Re=R.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ee=Re[H],fe=!0):ee=T.isWebGL2&&L.samples>0&&w.useMultisampledRTT(L)===!1?R.get(L).__webglMultisampledFramebuffer:Re,M.copy(L.viewport),S.copy(L.scissor),D=L.scissorTest}else M.copy(O).multiplyScalar(F).floor(),S.copy(G).multiplyScalar(F).floor(),D=z;if(k.bindFramebuffer(36160,ee)&&T.drawBuffers&&K&&k.drawBuffers(L,ee),k.viewport(M),k.scissor(S),k.setScissorTest(D),fe){const be=R.get(L.texture);re.framebufferTexture2D(36160,36064,34069+H,be.__webglTexture,q)}else if(Se){const be=R.get(L.texture),Re=H||0;re.framebufferTextureLayer(36160,36064,be.__webglTexture,q||0,Re)}y=-1},this.readRenderTargetPixels=function(L,H,q,K,ee,fe,Se){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=R.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){k.bindFramebuffer(36160,be);try{const Re=L.texture,Xe=Re.format,Pe=Re.type;if(Xe!==1023&&Ie.convert(Xe)!==re.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const Ee=Pe===1016&&(A.has("EXT_color_buffer_half_float")||T.isWebGL2&&A.has("EXT_color_buffer_float"));if(!(Pe===1009||Ie.convert(Pe)===re.getParameter(35738)||Pe===1015&&(T.isWebGL2||A.has("OES_texture_float")||A.has("WEBGL_color_buffer_float"))||Ee))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");H>=0&&H<=L.width-K&&q>=0&&q<=L.height-ee&&re.readPixels(H,q,K,ee,Ie.convert(Xe),Ie.convert(Pe),fe)}finally{const Re=x!==null?R.get(x).__webglFramebuffer:null;k.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(L,H,q=0){if(H.isFramebufferTexture!==!0)return void console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");const K=Math.pow(2,-q),ee=Math.floor(H.image.width*K),fe=Math.floor(H.image.height*K);w.setTexture2D(H,0),re.copyTexSubImage2D(3553,q,0,0,L.x,L.y,ee,fe),k.unbindTexture()},this.copyTextureToTexture=function(L,H,q,K=0){const ee=H.image.width,fe=H.image.height,Se=Ie.convert(q.format),be=Ie.convert(q.type);w.setTexture2D(q,0),re.pixelStorei(37440,q.flipY),re.pixelStorei(37441,q.premultiplyAlpha),re.pixelStorei(3317,q.unpackAlignment),H.isDataTexture?re.texSubImage2D(3553,K,L.x,L.y,ee,fe,Se,be,H.image.data):H.isCompressedTexture?re.compressedTexSubImage2D(3553,K,L.x,L.y,H.mipmaps[0].width,H.mipmaps[0].height,Se,H.mipmaps[0].data):re.texSubImage2D(3553,K,L.x,L.y,Se,be,H.image),K===0&&q.generateMipmaps&&re.generateMipmap(3553),k.unbindTexture()},this.copyTextureToTexture3D=function(L,H,q,K,ee=0){if(g.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const fe=L.max.x-L.min.x+1,Se=L.max.y-L.min.y+1,be=L.max.z-L.min.z+1,Re=Ie.convert(K.format),Xe=Ie.convert(K.type);let Pe;if(K.isData3DTexture)w.setTexture3D(K,0),Pe=32879;else{if(!K.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");w.setTexture2DArray(K,0),Pe=35866}re.pixelStorei(37440,K.flipY),re.pixelStorei(37441,K.premultiplyAlpha),re.pixelStorei(3317,K.unpackAlignment);const Ee=re.getParameter(3314),it=re.getParameter(32878),Er=re.getParameter(3316),It=re.getParameter(3315),Co=re.getParameter(32877),zn=q.isCompressedTexture?q.mipmaps[0]:q.image;re.pixelStorei(3314,zn.width),re.pixelStorei(32878,zn.height),re.pixelStorei(3316,L.min.x),re.pixelStorei(3315,L.min.y),re.pixelStorei(32877,L.min.z),q.isDataTexture||q.isData3DTexture?re.texSubImage3D(Pe,ee,H.x,H.y,H.z,fe,Se,be,Re,Xe,zn.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),re.compressedTexSubImage3D(Pe,ee,H.x,H.y,H.z,fe,Se,be,Re,zn.data)):re.texSubImage3D(Pe,ee,H.x,H.y,H.z,fe,Se,be,Re,Xe,zn),re.pixelStorei(3314,Ee),re.pixelStorei(32878,it),re.pixelStorei(3316,Er),re.pixelStorei(3315,It),re.pixelStorei(32877,Co),ee===0&&K.generateMipmaps&&re.generateMipmap(Pe),k.unbindTexture()},this.initTexture=function(L){w.setTexture2D(L,0),k.unbindTexture()},this.resetState=function(){f=0,b=0,x=null,k.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ne.prototype.isWebGLRenderer=!0;(class extends Ne{}).prototype.isWebGL1Renderer=!0;class un extends Le{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}un.prototype.isScene=!0;class xr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}xr.prototype.isInterleavedBuffer=!0;const xt=new E;class br{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ze(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new br(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}br.prototype.isInterleavedBufferAttribute=!0;class uc extends qe{constructor(e){super(),this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}let Zi;uc.prototype.isSpriteMaterial=!0;const Nr=new E,$i=new E,Ki=new E,Qi=new Q,Fr=new Q,cf=new ue,ca=new E,Ur=new E,ua=new E,Ru=new Q,ol=new Q,Cu=new Q;function da(s,e,t,n,i,r){Qi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Fr.x=r*Qi.x-i*Qi.y,Fr.y=i*Qi.x+r*Qi.y):Fr.copy(Qi),s.copy(e),s.x+=Fr.x,s.y+=Fr.y,s.applyMatrix4(cf)}(class extends Le{constructor(s){if(super(),this.type="Sprite",Zi===void 0){Zi=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new xr(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new br(t,3,0,!1)),Zi.setAttribute("uv",new br(t,2,3,!1))}this.geometry=Zi,this.material=s!==void 0?s:new uc,this.center=new Q(.5,.5)}raycast(s,e){s.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),cf.copy(s.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(s.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),s.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);const t=this.material.rotation;let n,i;t!==0&&(i=Math.cos(t),n=Math.sin(t));const r=this.center;da(ca.set(-.5,-.5,0),Ki,r,$i,n,i),da(Ur.set(.5,-.5,0),Ki,r,$i,n,i),da(ua.set(.5,.5,0),Ki,r,$i,n,i),Ru.set(0,0),ol.set(1,0),Cu.set(1,1);let a=s.ray.intersectTriangle(ca,Ur,ua,!1,Nr);if(a===null&&(da(Ur.set(-.5,.5,0),Ki,r,$i,n,i),ol.set(0,1),a=s.ray.intersectTriangle(ca,ua,Ur,!1,Nr),a===null))return;const o=s.ray.origin.distanceTo(Nr);o<s.near||o>s.far||e.push({distance:o,point:Nr.clone(),uv:Ke.getUV(Nr,ca,Ur,ua,Ru,ol,Cu,new Q),face:null,object:this})}copy(s){return super.copy(s),s.center!==void 0&&this.center.copy(s.center),this.material=s.material,this}}).prototype.isSprite=!0;const Lu=new E,Pu=new Ue,Du=new Ue,Zv=new E,Iu=new ue;class dc extends pe{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ue,this.bindMatrixInverse=new ue}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ue,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Pu.fromBufferAttribute(i.attributes.skinIndex,e),Du.fromBufferAttribute(i.attributes.skinWeight,e),Lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Du.getComponent(r);if(a!==0){const o=Pu.getComponent(r);Iu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Zv.copy(Lu).applyMatrix4(Iu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}dc.prototype.isSkinnedMesh=!0;class pc extends Le{constructor(){super(),this.type="Bone"}}pc.prototype.isBone=!0;class mc extends Ye{constructor(e=null,t=1,n=1,i,r,a,o,l,h=1003,c=1003,u,d){super(null,a,o,l,h,c,i,r,u,d),this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}mc.prototype.isDataTexture=!0;const Ou=new ue,$v=new ue;class fc{constructor(e=[],t=[]){this.uuid=kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:$v;Ou.multiplyMatrices(o,t[r]),Ou.toArray(n,16*r)}i!==null&&(i.needsUpdate=!0)}clone(){return new fc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=qm(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mc(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new pc),this.bones.push(a),this.boneInverses.push(new ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Nh extends ze{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Nh.prototype.isInstancedBufferAttribute=!0;const Nu=new ue,Fu=new ue,pa=[],kr=new pe;(class extends pe{constructor(s,e,t){super(s,e),this.instanceMatrix=new Nh(new Float32Array(16*t),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}copy(s){return super.copy(s),this.instanceMatrix.copy(s.instanceMatrix),s.instanceColor!==null&&(this.instanceColor=s.instanceColor.clone()),this.count=s.count,this}getColorAt(s,e){e.fromArray(this.instanceColor.array,3*s)}getMatrixAt(s,e){e.fromArray(this.instanceMatrix.array,16*s)}raycast(s,e){const t=this.matrixWorld,n=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0)for(let i=0;i<n;i++){this.getMatrixAt(i,Nu),Fu.multiplyMatrices(t,Nu),kr.matrixWorld=Fu,kr.raycast(s,pa);for(let r=0,a=pa.length;r<a;r++){const o=pa[r];o.instanceId=i,o.object=this,e.push(o)}pa.length=0}}setColorAt(s,e){this.instanceColor===null&&(this.instanceColor=new Nh(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*s)}setMatrixAt(s,e){e.toArray(this.instanceMatrix.array,16*s)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}).prototype.isInstancedMesh=!0;class Ii extends qe{constructor(e){super(),this.type="LineBasicMaterial",this.color=new he(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Ii.prototype.isLineBasicMaterial=!0;const Uu=new E,ku=new E,Bu=new ue,ll=new Li,ma=new Bn;class yo extends Le{constructor(e=new Be,t=new Ii){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Uu.fromBufferAttribute(t,i-1),ku.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uu.distanceTo(ku);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Bu.copy(i).invert(),ll.copy(e.ray).applyMatrix4(Bu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new E,c=new E,u=new E,d=new E,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,g=n.attributes.position;if(m!==null)for(let v=Math.max(0,a.start),f=Math.min(m.count,a.start+a.count)-1;v<f;v+=p){const b=m.getX(v),x=m.getX(v+1);if(h.fromBufferAttribute(g,b),c.fromBufferAttribute(g,x),ll.distanceSqToSegment(h,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}else for(let v=Math.max(0,a.start),f=Math.min(g.count,a.start+a.count)-1;v<f;v+=p){if(h.fromBufferAttribute(g,v),c.fromBufferAttribute(g,v+1),ll.distanceSqToSegment(h,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}yo.prototype.isLine=!0;const zu=new E,Hu=new E;class no extends yo{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zu.fromBufferAttribute(t,i),Hu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zu.distanceTo(Hu);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}no.prototype.isLineSegments=!0;class uf extends yo{constructor(e,t){super(e,t),this.type="LineLoop"}}uf.prototype.isLineLoop=!0;class xo extends qe{constructor(e){super(),this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}xo.prototype.isPointsMaterial=!0;const Vu=new ue,Fh=new Li,fa=new Bn,ga=new E;class df extends Le{constructor(e=new Be,t=new xo){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;Vu.copy(i).invert(),Fh.copy(e.ray).applyMatrix4(Vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const h=n.index,c=n.attributes.position;if(h!==null)for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++){const p=h.getX(u);ga.fromBufferAttribute(c,p),Gu(ga,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++)ga.fromBufferAttribute(c,u),Gu(ga,u,l,i,e,t,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}function Gu(s,e,t,n,i,r,a){const o=Fh.distanceSqToPoint(s);if(o<t){const l=new E;Fh.closestPointToPoint(s,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}df.prototype.isPoints=!0;(class extends Ye{constructor(s,e,t,n,i,r,a,o,l){super(s,e,t,n,i,r,a,o,l),this.minFilter=r!==void 0?r:1006,this.magFilter=i!==void 0?i:1006,this.generateMipmaps=!1;const h=this;"requestVideoFrameCallback"in s&&s.requestVideoFrameCallback(function c(){h.needsUpdate=!0,s.requestVideoFrameCallback(c)})}clone(){return new this.constructor(this.image).copy(this)}update(){const s=this.image;!("requestVideoFrameCallback"in s)&&s.readyState>=s.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}).prototype.isVideoTexture=!0;(class extends Ye{constructor(s,e,t){super({width:s,height:e}),this.format=t,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}}).prototype.isFramebufferTexture=!0;class Uh extends Ye{constructor(e,t,n,i,r,a,o,l,h,c,u,d){super(null,a,o,l,h,c,i,r,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Uh.prototype.isCompressedTexture=!0;(class extends Ye{constructor(s,e,t,n,i,r,a,o,l){super(s,e,t,n,i,r,a,o,l),this.needsUpdate=!0}}).prototype.isCanvasTexture=!0;class Bt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;a=t||e*n[r-1];let o,l=0,h=r-1;for(;l<=h;)if(i=Math.floor(l+(h-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){h=i;break}h=i-1}if(i=h,n[i]===a)return i/(r-1);const c=n[i];return(i+(a-c)/(n[i+1]-c))/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Q:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],r=[],a=[],o=new E,l=new ue;for(let p=0;p<=e;p++){const m=p/e;i[p]=this.getTangentAt(m,new E)}r[0]=new E,a[0]=new E;let h=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(tt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(tt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bo extends Bt{constructor(e=0,t=0,n=1,i=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Q,i=2*Math.PI;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=a?0:i),this.aClockwise!==!0||a||(r===i?r=-i:r-=i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*c-p*u+this.aX,h=d*u+p*c+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}bo.prototype.isEllipseCurve=!0;class pf extends bo{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.type="ArcCurve"}}function gc(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){i(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,p*=c,i(a,o,d,p)},calc:function(r){const a=r*r;return s+e*r+t*a+n*(a*r)}}}pf.prototype.isArcCurve=!0;const va=new E,hl=new gc,cl=new gc,ul=new gc;class mf extends Bt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/r)+1)*r:c===0&&h===r-1&&(h=r-2,c=1),this.closed||h>0?o=i[(h-1)%r]:(va.subVectors(i[0],i[1]).add(i[0]),o=va);const u=i[h%r],d=i[(h+1)%r];if(this.closed||h+2<r?l=i[(h+2)%r]:(va.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=va),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(l),p);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),hl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,g,v),cl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,g,v),ul.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,g,v)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),cl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),ul.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(hl.calc(c),cl.calc(c),ul.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wu(s,e,t,n,i){const r=.5*(n-e),a=.5*(i-t),o=s*s;return(2*t-2*n+r+a)*(s*o)+(-3*t+3*n-2*r-a)*o+r*s+t}function xs(s,e,t,n){return function(i,r){const a=1-i;return a*a*r}(s,e)+function(i,r){return 2*(1-i)*i*r}(s,t)+function(i,r){return i*i*r}(s,n)}function bs(s,e,t,n,i){return function(r,a){const o=1-r;return o*o*o*a}(s,e)+function(r,a){const o=1-r;return 3*o*o*r*a}(s,t)+function(r,a){return 3*(1-r)*r*r*a}(s,n)+function(r,a){return r*r*r*a}(s,i)}mf.prototype.isCatmullRomCurve3=!0;class vc extends Bt{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bs(e,i.x,r.x,a.x,o.x),bs(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}vc.prototype.isCubicBezierCurve=!0;class ff extends Bt{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bs(e,i.x,r.x,a.x,o.x),bs(e,i.y,r.y,a.y,o.y),bs(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ff.prototype.isCubicBezierCurve3=!0;class _o extends Bt{constructor(e=new Q,t=new Q){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Q;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}_o.prototype.isLineCurve=!0;class yc extends Bt{constructor(e=new Q,t=new Q,n=new Q){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xs(e,i.x,r.x,a.x),xs(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}yc.prototype.isQuadraticBezierCurve=!0;class gf extends Bt{constructor(e=new E,t=new E,n=new E){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xs(e,i.x,r.x,a.x),xs(e,i.y,r.y,a.y),xs(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}gf.prototype.isQuadraticBezierCurve3=!0;class xc extends Bt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],h=i[a],c=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Wu(o,l.x,h.x,c.x,u.x),Wu(o,l.y,h.y,c.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Q().fromArray(i))}return this}}xc.prototype.isSplineCurve=!0;var vf=Object.freeze({__proto__:null,ArcCurve:pf,CatmullRomCurve3:mf,CubicBezierCurve:vc,CubicBezierCurve3:ff,EllipseCurve:bo,LineCurve:_o,LineCurve3:class extends Bt{constructor(s=new E,e=new E){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=s,this.v2=e}getPoint(s,e=new E){const t=e;return s===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(s).add(this.v1)),t}getPointAt(s,e){return this.getPoint(s,e)}copy(s){return super.copy(s),this.v1.copy(s.v1),this.v2.copy(s.v2),this}toJSON(){const s=super.toJSON();return s.v1=this.v1.toArray(),s.v2=this.v2.toArray(),s}fromJSON(s){return super.fromJSON(s),this.v1.fromArray(s.v1),this.v2.fromArray(s.v2),this}},QuadraticBezierCurve:yc,QuadraticBezierCurve3:gf,SplineCurve:xc});class Kv extends Bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new _o(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new vf[i.type]().fromJSON(i))}return this}}class kh extends Kv{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new _o(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new yc(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new vc(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new xc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const h=new bo(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}new E,new E,new E,new Ke;class _s extends kh{constructor(e){super(e),this.uuid=kt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new kh().fromJSON(i))}return this}}const Qv=function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ju(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h,c,u,d,p;if(n&&(r=function(m,g,v,f){const b=[];let x,y,_,M,S;for(x=0,y=g.length;x<y;x++)_=g[x]*f,M=x<y-1?g[x+1]*f:m.length,S=ju(m,_,M,f,!1),S===S.next&&(S.steiner=!0),b.push(oy(S));for(b.sort(ry),x=0;x<b.length;x++)sy(b[x],v),v=si(v,v.next);return v}(s,e,r,t)),s.length>80*t){o=h=s[0],l=c=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?1/p:0}return Ps(r,a,t,o,l,p),a};function ju(s,e,t,n,i){let r,a;if(i===function(o,l,h,c){let u=0;for(let d=l,p=h-c;d<h;d+=c)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(s,e,t,n)>0)for(r=e;r<t;r+=n)a=qu(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=qu(r,s[r],s[r+1],a);return a&&wo(a,a.next)&&(Is(a),a=a.next),a}function si(s,e){if(!s)return s;e||(e=s);let t,n=s;do if(t=!1,n.steiner||!wo(n,n.next)&&je(n.prev,n,n.next)!==0)n=n.next;else{if(Is(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Ps(s,e,t,n,i,r,a){if(!s)return;!a&&r&&function(c,u,d,p){let m=c;do m.z===null&&(m.z=Bh(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==c);m.prevZ.nextZ=null,m.prevZ=null,function(g){let v,f,b,x,y,_,M,S,D=1;do{for(f=g,g=null,y=null,_=0;f;){for(_++,b=f,M=0,v=0;v<D&&(M++,b=b.nextZ,b);v++);for(S=D;M>0||S>0&&b;)M!==0&&(S===0||!b||f.z<=b.z)?(x=f,f=f.nextZ,M--):(x=b,b=b.nextZ,S--),y?y.nextZ=x:g=x,x.prevZ=y,y=x;f=b}y.nextZ=null,D*=2}while(_>1)}(m)}(s,n,i,r);let o,l,h=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?ty(s,n,i,r):ey(s))e.push(o.i/t),e.push(s.i/t),e.push(l.i/t),Is(s),s=l.next,h=l.next;else if((s=l)===h){a?a===1?Ps(s=ny(si(s),e,t),e,t,n,i,r,2):a===2&&iy(s,e,t,n,i,r):Ps(si(s),e,t,n,i,r,1);break}}function ey(s){const e=s.prev,t=s,n=s.next;if(je(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(fr(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&je(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function ty(s,e,t,n){const i=s.prev,r=s,a=s.next;if(je(i,r,a)>=0)return!1;const o=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,l=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,h=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,c=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,u=Bh(o,l,e,t,n),d=Bh(h,c,e,t,n);let p=s.prevZ,m=s.nextZ;for(;p&&p.z>=u&&m&&m.z<=d;){if(p!==s.prev&&p!==s.next&&fr(i.x,i.y,r.x,r.y,a.x,a.y,p.x,p.y)&&je(p.prev,p,p.next)>=0||(p=p.prevZ,m!==s.prev&&m!==s.next&&fr(i.x,i.y,r.x,r.y,a.x,a.y,m.x,m.y)&&je(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;p&&p.z>=u;){if(p!==s.prev&&p!==s.next&&fr(i.x,i.y,r.x,r.y,a.x,a.y,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;m&&m.z<=d;){if(m!==s.prev&&m!==s.next&&fr(i.x,i.y,r.x,r.y,a.x,a.y,m.x,m.y)&&je(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function ny(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!wo(i,r)&&yf(i,n,n.next,r)&&Ds(i,r)&&Ds(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Is(n),Is(n.next),n=s=r),n=n.next}while(n!==s);return si(n)}function iy(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ly(a,o)){let l=xf(a,o);return a=si(a,a.next),l=si(l,l.next),Ps(a,e,t,n,i,r),void Ps(l,e,t,n,i,r)}o=o.next}a=a.next}while(a!==s)}function ry(s,e){return s.x-e.x}function sy(s,e){if(e=function(t,n){let i=n;const r=t.x,a=t.y;let o,l=-1/0;do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){const m=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(m<=r&&m>l){if(l=m,m===r){if(a===i.y)return i;if(a===i.next.y)return i.next}o=i.x<i.next.x?i:i.next}}i=i.next}while(i!==n);if(!o)return null;if(r===l)return o;const h=o,c=o.x,u=o.y;let d,p=1/0;i=o;do r>=i.x&&i.x>=c&&r!==i.x&&fr(a<u?r:l,a,c,u,a<u?l:r,a,i.x,i.y)&&(d=Math.abs(a-i.y)/(r-i.x),Ds(i,t)&&(d<p||d===p&&(i.x>o.x||i.x===o.x&&ay(o,i)))&&(o=i,p=d)),i=i.next;while(i!==h);return o}(s,e),e){const t=xf(e,s);si(e,e.next),si(t,t.next)}}function ay(s,e){return je(s.prev,s,e.prev)<0&&je(e.next,s,s.next)<0}function Bh(s,e,t,n,i){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=32767*(s-t)*i)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function oy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function fr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)-(s-a)*(r-o)>=0&&(s-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(r-o)-(i-a)*(n-o)>=0}function ly(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&yf(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(s,e)&&(Ds(s,e)&&Ds(e,s)&&function(t,n){let i=t,r=!1;const a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r}(s,e)&&(je(s.prev,s,e.prev)||je(s,e.prev,e))||wo(s,e)&&je(s.prev,s,s.next)>0&&je(e.prev,e,e.next)>0)}function je(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function wo(s,e){return s.x===e.x&&s.y===e.y}function yf(s,e,t,n){const i=xa(je(s,e,t)),r=xa(je(s,e,n)),a=xa(je(t,n,s)),o=xa(je(t,n,e));return i!==r&&a!==o||!(i!==0||!ya(s,t,e))||!(r!==0||!ya(s,n,e))||!(a!==0||!ya(t,s,n))||!(o!==0||!ya(t,e,n))}function ya(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function xa(s){return s>0?1:s<0?-1:0}function Ds(s,e){return je(s.prev,s,s.next)<0?je(s,e,s.next)>=0&&je(s,s.prev,e)>=0:je(s,e,s.prev)<0||je(s,s.next,e)<0}function xf(s,e){const t=new zh(s.i,s.x,s.y),n=new zh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qu(s,e,t,n){const i=new zh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Is(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function zh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}class ii{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return .5*n}static isClockWise(e){return ii.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Xu(e),Yu(n,e);let a=e.length;t.forEach(Xu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Yu(n,t[l]);const o=Qv(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Xu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Yu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class gr extends Be{constructor(e=new _s([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){const l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:hy;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let x,y,_,M,S,D=!1;f&&(x=f.getSpacedPoints(c),D=!0,d=!1,y=f.computeFrenetFrames(c,!1),_=new E,M=new E,S=new E),d||(v=0,p=0,m=0,g=0);const P=o.extractPoints(h);let I=P.shape;const F=P.holes;if(!ii.isClockWise(I)){I=I.reverse();for(let N=0,R=F.length;N<R;N++){const w=F[N];ii.isClockWise(w)&&(F[N]=w.reverse())}}const B=ii.triangulateShape(I,F),W=I;for(let N=0,R=F.length;N<R;N++){const w=F[N];I=I.concat(w)}function O(N,R,w){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().multiplyScalar(w).add(N)}const G=I.length,z=B.length;function J(N,R,w){let U,C,$;const j=N.x-R.x,Y=N.y-R.y,ie=w.x-N.x,ce=w.y-N.y,ve=j*j+Y*Y,de=j*ce-Y*ie;if(Math.abs(de)>Number.EPSILON){const me=Math.sqrt(ve),_e=Math.sqrt(ie*ie+ce*ce),Me=R.x-Y/me,Je=R.y+j/me,mn=((w.x-ce/_e-Me)*ce-(w.y+ie/_e-Je)*ie)/(j*ce-Y*ie);U=Me+j*mn-N.x,C=Je+Y*mn-N.y;const ye=U*U+C*C;if(ye<=2)return new Q(U,C);$=Math.sqrt(ye/2)}else{let me=!1;j>Number.EPSILON?ie>Number.EPSILON&&(me=!0):j<-Number.EPSILON?ie<-Number.EPSILON&&(me=!0):Math.sign(Y)===Math.sign(ce)&&(me=!0),me?(U=-Y,C=j,$=Math.sqrt(ve)):(U=j,C=Y,$=Math.sqrt(ve/2))}return new Q(U/$,C/$)}const Z=[];for(let N=0,R=W.length,w=R-1,U=N+1;N<R;N++,w++,U++)w===R&&(w=0),U===R&&(U=0),Z[N]=J(W[N],W[w],W[U]);const X=[];let V,oe=Z.concat();for(let N=0,R=F.length;N<R;N++){const w=F[N];V=[];for(let U=0,C=w.length,$=C-1,j=U+1;U<C;U++,$++,j++)$===C&&($=0),j===C&&(j=0),V[U]=J(w[U],w[$],w[j]);X.push(V),oe=oe.concat(V)}for(let N=0;N<v;N++){const R=N/v,w=p*Math.cos(R*Math.PI/2),U=m*Math.sin(R*Math.PI/2)+g;for(let C=0,$=W.length;C<$;C++){const j=O(W[C],Z[C],U);ne(j.x,j.y,-w)}for(let C=0,$=F.length;C<$;C++){const j=F[C];V=X[C];for(let Y=0,ie=j.length;Y<ie;Y++){const ce=O(j[Y],V[Y],U);ne(ce.x,ce.y,-w)}}}const se=m+g;for(let N=0;N<G;N++){const R=d?O(I[N],oe[N],se):I[N];D?(M.copy(y.normals[0]).multiplyScalar(R.x),_.copy(y.binormals[0]).multiplyScalar(R.y),S.copy(x[0]).add(M).add(_),ne(S.x,S.y,S.z)):ne(R.x,R.y,0)}for(let N=1;N<=c;N++)for(let R=0;R<G;R++){const w=d?O(I[R],oe[R],se):I[R];D?(M.copy(y.normals[N]).multiplyScalar(w.x),_.copy(y.binormals[N]).multiplyScalar(w.y),S.copy(x[N]).add(M).add(_),ne(S.x,S.y,S.z)):ne(w.x,w.y,u/c*N)}for(let N=v-1;N>=0;N--){const R=N/v,w=p*Math.cos(R*Math.PI/2),U=m*Math.sin(R*Math.PI/2)+g;for(let C=0,$=W.length;C<$;C++){const j=O(W[C],Z[C],U);ne(j.x,j.y,u+w)}for(let C=0,$=F.length;C<$;C++){const j=F[C];V=X[C];for(let Y=0,ie=j.length;Y<ie;Y++){const ce=O(j[Y],V[Y],U);D?ne(ce.x,ce.y+x[c-1].y,x[c-1].x+w):ne(ce.x,ce.y,u+w)}}}function le(N,R){let w=N.length;for(;--w>=0;){const U=w;let C=w-1;C<0&&(C=N.length-1);for(let $=0,j=c+2*v;$<j;$++){const Y=G*$,ie=G*($+1);A(R+U+Y,R+C+Y,R+C+ie,R+U+ie)}}}function ne(N,R,w){l.push(N),l.push(R),l.push(w)}function xe(N,R,w){T(N),T(R),T(w);const U=i.length/3,C=b.generateTopUV(n,i,U-3,U-2,U-1);k(C[0]),k(C[1]),k(C[2])}function A(N,R,w,U){T(N),T(R),T(U),T(R),T(w),T(U);const C=i.length/3,$=b.generateSideWallUV(n,i,C-6,C-3,C-2,C-1);k($[0]),k($[1]),k($[3]),k($[1]),k($[2]),k($[3])}function T(N){i.push(l[3*N+0]),i.push(l[3*N+1]),i.push(l[3*N+2])}function k(N){r.push(N.x),r.push(N.y)}(function(){const N=i.length/3;if(d){let R=0,w=G*R;for(let U=0;U<z;U++){const C=B[U];xe(C[2]+w,C[1]+w,C[0]+w)}R=c+2*v,w=G*R;for(let U=0;U<z;U++){const C=B[U];xe(C[0]+w,C[1]+w,C[2]+w)}}else{for(let R=0;R<z;R++){const w=B[R];xe(w[2],w[1],w[0])}for(let R=0;R<z;R++){const w=B[R];xe(w[0]+G*c,w[1]+G*c,w[2]+G*c)}}n.addGroup(N,i.length/3-N,0)})(),function(){const N=i.length/3;let R=0;le(W,R),R+=W.length;for(let w=0,U=F.length;w<U;w++){const C=F[w];le(C,R),R+=C.length}n.addGroup(N,i.length/3-N,1)}()}this.setAttribute("position",new nt(i,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals()}toJSON(){const e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){const o=t[r];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new vf[i.type]().fromJSON(i)),new gr(n,e.options)}}const hy={generateTopUV:function(s,e,t,n,i){const r=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],h=e[3*i],c=e[3*i+1];return[new Q(r,a),new Q(o,l),new Q(h,c)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*n],c=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],m=e[3*i+2],g=e[3*r],v=e[3*r+1],f=e[3*r+2];return Math.abs(o-c)<Math.abs(a-h)?[new Q(a,1-l),new Q(h,1-u),new Q(d,1-m),new Q(g,1-f)]:[new Q(o,1-l),new Q(c,1-u),new Q(p,1-m),new Q(v,1-f)]}};class bc extends Be{constructor(e=new _s([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){const u=i.length/3,d=c.extractPoints(t);let p=d.shape;const m=d.holes;ii.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,f=m.length;v<f;v++){const b=m[v];ii.isClockWise(b)===!0&&(m[v]=b.reverse())}const g=ii.triangulateShape(p,m);for(let v=0,f=m.length;v<f;v++){const b=m[v];p=p.concat(b)}for(let v=0,f=p.length;v<f;v++){const b=p[v];i.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let v=0,f=g.length;v<f;v++){const b=g[v],x=b[0]+u,y=b[1]+u,_=b[2]+u;n.push(x,y,_),l+=3}}this.setIndex(n),this.setAttribute("position",new nt(i,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(a,2))}toJSON(){const e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new bc(n,e.curveSegments)}}class bf extends qe{constructor(e){super(),this.type="ShadowMaterial",this.color=new he(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}bf.prototype.isShadowMaterial=!0;class _f extends St{constructor(e){super(e),this.type="RawShaderMaterial"}}_f.prototype.isRawShaderMaterial=!0;class dn extends qe{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}dn.prototype.isMeshStandardMaterial=!0;class li extends dn{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}li.prototype.isMeshPhysicalMaterial=!0;class wf extends qe{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}wf.prototype.isMeshPhongMaterial=!0;class Mf extends qe{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new he(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Mf.prototype.isMeshToonMaterial=!0;class Sf extends qe{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Sf.prototype.isMeshNormalMaterial=!0;class Tf extends qe{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Tf.prototype.isMeshLambertMaterial=!0;class Ef extends qe{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new he(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Ef.prototype.isMeshMatcapMaterial=!0;class Af extends Ii{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Af.prototype.isLineDashedMaterial=!0;const cy={ShadowMaterial:bf,SpriteMaterial:uc,RawShaderMaterial:_f,ShaderMaterial:St,PointsMaterial:xo,MeshPhysicalMaterial:li,MeshStandardMaterial:dn,MeshPhongMaterial:wf,MeshToonMaterial:Mf,MeshNormalMaterial:Sf,MeshLambertMaterial:Tf,MeshDepthMaterial:vo,MeshDistanceMaterial:cc,MeshBasicMaterial:Dt,MeshMatcapMaterial:Ef,LineDashedMaterial:Af,LineBasicMaterial:Ii,Material:qe};qe.fromType=function(s){return new cy[s]};const Ge={arraySlice:function(s,e,t){return Ge.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){const e=s.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return s[n]-s[i]}),t},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const h=r.tracks[l],c=h.getValueSize(),u=[],d=[];for(let p=0;p<h.times.length;++p){const m=h.times[p]*i;if(!(m<t||m>=n)){u.push(h.times[p]);for(let g=0;g<c;++g)d.push(h.values[p*c+g])}}u.length!==0&&(h.times=Ge.convertArray(u,h.times.constructor),h.values=Ge.convertArray(d,h.values.constructor),a.push(h))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const h=s.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(h===void 0)continue;let c=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=u/3);let d=0;const p=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const m=o.times.length-1;let g;if(r<=o.times[0]){const f=c,b=u-c;g=Ge.arraySlice(o.values,f,b)}else if(r>=o.times[m]){const f=m*u+c,b=f+u-c;g=Ge.arraySlice(o.values,f,b)}else{const f=o.createInterpolant(),b=c,x=u-c;f.evaluate(r),g=Ge.arraySlice(f.resultBuffer,b,x)}l==="quaternion"&&new wt().fromArray(g).normalize().conjugate().toArray(g);const v=h.times.length;for(let f=0;f<v;++f){const b=f*p+d;if(l==="quaternion")wt.multiplyQuaternionsFlat(h.values,b,g,0,h.values,b);else{const x=p-2*d;for(let y=0;y<x;++y)h.values[b+y]-=g[y]}}}return s.blendMode=2501,s}};class On{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=r)break e;{const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0}}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}On.prototype.beforeStart_=On.prototype.copySampleValue_,On.prototype.afterEnd_=On.prototype.copySampleValue_;class uy extends On{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=e,o=2*t-n;break;case 2402:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*n-t;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const h=.5*(n-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),g=m*m,v=g*m,f=-d*v+2*d*g-d*m,b=(1+d)*v+(-1.5-2*d)*g+(-.5+d)*m+1,x=(-1-p)*v+(1.5+p)*g+.5*m,y=p*v-p*g;for(let _=0;_!==o;++_)r[_]=f*a[c+_]+b*a[h+_]+x*a[l+_]+y*a[u+_];return r}}class Rf extends On{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(n-t)/(i-t),u=1-c;for(let d=0;d!==o;++d)r[d]=a[h+d]*u+a[l+d]*c;return r}}class dy extends On{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ge.convertArray(t,this.TimeBufferType),this.values=Ge.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ge.convertArray(e.times,Array),values:Ge.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Ge.arraySlice(n,r,a),this.values=Ge.arraySlice(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Ge.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=Ge.arraySlice(this.times),t=Ge.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===2302,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(i)l=!0;else{const c=o*n,u=c-n,d=c+n;for(let p=0;p!==n;++p){const m=t[c+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const c=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[c+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=Ge.arraySlice(e,0,a),this.values=Ge.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ge.arraySlice(this.times,0),t=Ge.arraySlice(this.values,0),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}hn.prototype.TimeBufferType=Float32Array,hn.prototype.ValueBufferType=Float32Array,hn.prototype.DefaultInterpolation=2301;class cr extends hn{}cr.prototype.ValueTypeName="bool",cr.prototype.ValueBufferType=Array,cr.prototype.DefaultInterpolation=2300,cr.prototype.InterpolantFactoryMethodLinear=void 0,cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cf extends hn{}Cf.prototype.ValueTypeName="color";class Os extends hn{}Os.prototype.ValueTypeName="number";class py extends On{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let h=e*o;for(let c=h+o;h!==c;h+=4)wt.slerpFlat(r,0,a,h-o,a,h,l);return r}}class Pi extends hn{InterpolantFactoryMethodLinear(e){return new py(this.times,this.values,this.getValueSize(),e)}}Pi.prototype.ValueTypeName="quaternion",Pi.prototype.DefaultInterpolation=2301,Pi.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends hn{}ur.prototype.ValueTypeName="string",ur.prototype.ValueBufferType=Array,ur.prototype.DefaultInterpolation=2300,ur.prototype.InterpolantFactoryMethodLinear=void 0,ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends hn{}Ns.prototype.ValueTypeName="vector";class Hh{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=kt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(my(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(hn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],h=[];l.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const c=Ge.getKeyframeOrder(l);l=Ge.sortedArray(l,1,c),h=Ge.sortedArray(h,1,c),i||l[0]!==0||(l.push(r),h.push(h[0])),a.push(new Os(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],c=h.name.match(r);if(c&&c.length>1){const u=c[1];let d=i[u];d||(i[u]=d=[]),d.push(h)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,u,d,p,m){if(d.length!==0){const g=[],v=[];Ge.flattenJSON(d,g,v,p),g.length!==0&&m.push(new c(u,g,v))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const u=h[c].keys;if(u&&u.length!==0)if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(const m in d){const g=[],v=[];for(let f=0;f!==u[p].morphTargets.length;++f){const b=u[p];g.push(b.time),v.push(b.morphTarget===m?1:0)}i.push(new Os(".morphTargetInfluence["+m+"]",g,v))}l=d.length*a}else{const d=".bones["+t[c].name+"]";n(Ns,d+".position",u,"pos",i),n(Pi,d+".quaternion",u,"rot",i),n(Ns,d+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){const i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function my(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Os;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return Cf;case"quaternion":return Pi;case"bool":case"boolean":return cr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(s.type);if(s.times===void 0){const t=[],n=[];Ge.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _r={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},fy=new class{constructor(s,e,t){const n=this;let i,r=!1,a=0,o=0;const l=[];this.onStart=void 0,this.onLoad=s,this.onProgress=e,this.onError=t,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return i?i(h):h},this.setURLModifier=function(h){return i=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){const c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){const d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}};class zt{constructor(e){this.manager=e!==void 0?e:fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const _n={};class Un extends zt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_r.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_n[e]!==void 0)return void _n[e].push({onLoad:t,onProgress:n,onError:i});_n[e]=[],_n[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||h.body===void 0||h.body.getReader===void 0)return h;const c=_n[e],u=h.body.getReader(),d=h.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0;let g=0;const v=new ReadableStream({start(f){(function b(){u.read().then(({done:x,value:y})=>{if(x)f.close();else{g+=y.byteLength;const _=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:p});for(let M=0,S=c.length;M<S;M++){const D=c[M];D.onProgress&&D.onProgress(_)}f.enqueue(y),b()}})})()}});return new Response(v)}throw Error(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),u=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(u);return h.arrayBuffer().then(p=>d.decode(p))}}}).then(h=>{_r.add(e,h);const c=_n[e];delete _n[e];for(let u=0,d=c.length;u<d;u++){const p=c[u];p.onLoad&&p.onLoad(h)}}).catch(h=>{const c=_n[e];if(c===void 0)throw this.manager.itemError(e),h;delete _n[e];for(let u=0,d=c.length;u<d;u++){const p=c[u];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _c extends zt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_r.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Cs("img");function l(){c(),_r.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(u){c(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class gy extends zt{constructor(e){super(e)}load(e,t,n,i){const r=new po,a=new _c(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(h){a.load(e[h],function(c){r.images[h]=c,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let h=0;h<e.length;++h)l(h);return r}}class vy extends zt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new mc,o=new Un(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){const h=r.parse(l);h&&(h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:1001,a.wrapT=h.wrapT!==void 0?h.wrapT:1001,a.magFilter=h.magFilter!==void 0?h.magFilter:1006,a.minFilter=h.minFilter!==void 0?h.minFilter:1006,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.encoding!==void 0&&(a.encoding=h.encoding),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=1008),h.mipmapCount===1&&(a.minFilter=1006),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h))},n,i),a}}class Mo extends zt{constructor(e){super(e)}load(e,t,n,i){const r=new Ye,a=new _c(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class pn extends Le{constructor(e,t=1){super(),this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}pn.prototype.isLight=!0;(class extends pn{constructor(s,e,t){super(s,t),this.type="HemisphereLight",this.position.copy(Le.DefaultUp),this.updateMatrix(),this.groundColor=new he(e)}copy(s){return pn.prototype.copy.call(this,s),this.groundColor.copy(s.groundColor),this}}).prototype.isHemisphereLight=!0;const Ju=new ue,Zu=new E,$u=new E;class wc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),Ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lf extends wc{constructor(){super(new lt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=2*Rs*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;n===t.fov&&i===t.aspect&&r===t.far||(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Lf.prototype.isSpotLightShadow=!0;class Pf extends pn{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Le.DefaultUp),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new Lf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Pf.prototype.isSpotLight=!0;const Ku=new ue,Br=new E,dl=new E;class Df extends wc{constructor(){super(new lt(90,1,.5,500)),this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),dl.copy(n.position),dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dl),n.updateMatrixWorld(),i.makeTranslation(-Br.x,-Br.y,-Br.z),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku)}}Df.prototype.isPointLightShadow=!0;class So extends pn{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Df}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}So.prototype.isPointLight=!0;class If extends wc{constructor(){super(new Ui(-5,5,5,-5,.5,500))}}If.prototype.isDirectionalLightShadow=!0;class Mc extends pn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Le.DefaultUp),this.updateMatrix(),this.target=new Le,this.shadow=new If}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Mc.prototype.isDirectionalLight=!0;(class extends pn{constructor(s,e){super(s,e),this.type="AmbientLight"}}).prototype.isAmbientLight=!0;(class extends pn{constructor(s,e,t=10,n=10){super(s,e),this.type="RectAreaLight",this.width=t,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(s){this.intensity=s/(this.width*this.height*Math.PI)}copy(s){return super.copy(s),this.width=s.width,this.height=s.height,this}toJSON(s){const e=super.toJSON(s);return e.object.width=this.width,e.object.height=this.height,e}}).prototype.isRectAreaLight=!0;class Of{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*i*1.092548),t.addScaledVector(a[5],i*r*1.092548),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],n*r*1.092548),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*i),t.addScaledVector(a[2],1.023328*r),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*i),t.addScaledVector(a[5],.858086*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],.858086*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+3*i);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+3*i);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}Of.prototype.isSphericalHarmonics3=!0;class To extends pn{constructor(e=new Of,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}To.prototype.isLightProbe=!0;class ri{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}(class extends Be{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(s){return super.copy(s),this.instanceCount=s.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const s=super.toJSON(this);return s.instanceCount=this.instanceCount,s.isInstancedBufferGeometry=!0,s}}).prototype.isInstancedBufferGeometry=!0;class Nf extends zt{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_r.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){_r.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let pl;Nf.prototype.isImageBitmapLoader=!0;const yy=function(){return pl===void 0&&(pl=new(window.AudioContext||window.webkitAudioContext)),pl};class xy extends zt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Un(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);yy().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}}(class extends To{constructor(s,e,t=1){super(void 0,t);const n=new he().set(s),i=new he().set(e),r=new E(n.r,n.g,n.b),a=new E(i.r,i.g,i.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(r).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(r).sub(a).multiplyScalar(l)}}).prototype.isHemisphereLightProbe=!0;(class extends To{constructor(s,e=1){super(void 0,e);const t=new he().set(s);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}}).prototype.isAmbientLightProbe=!0;class by{constructor(e,t,n){let i,r,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){wt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;wt.multiplyQuaternionsFlat(e,a,e,t,e,n),wt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const _y=new RegExp("[\\[\\]\\.:\\/]","g"),wy="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",My=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),Sy=/(WCOD+)?/.source.replace("WCOD",wy),Ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),Ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),Ay=new RegExp("^"+My+Sy+Ty+Ey+"$"),Ry=["material","materials","bones"];class Ce{constructor(e,t,n){this.path=t,this.parsedPath=n||Ce.parseTrackName(t),this.node=Ce.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ce.Composite(e,t,n):new Ce(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_y,"")}static parseTrackName(e){const t=Ay.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ry.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ce.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ce.Composite=class{constructor(s,e,t){const n=t||Ce.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,n)}getValue(s,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(s,e)}setValue(s,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(s,e)}bind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray],Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let h=0;h!==a;++h){const c=r[h].createInterpolant(null);o[h]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,h=o.sampleValues;return l[0]=r,l[1]=r+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,h=this._propertyBindings;if(this.blendMode===2501)for(let c=0,u=l.length;c!==u;++c)l[c].evaluate(a),h[c].accumulateAdditive(o);else for(let c=0,u=l.length;c!==u;++c)l[c].evaluate(a),h[c].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===2202;if(e===0)return r===-1?i:a&&(1&r)==1?t-i:i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(1&r)==1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=t?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}class Ff extends Ht{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,h=this._bindingsByRootAndName;let c=h[l];c===void 0&&(c={},h[l]=c);for(let u=0;u!==r;++u){const d=i[u],p=d.name;let m=c[p];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;m=new by(Ce.create(n,p,g),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,h=l[l.length-1],c=e._byClipCacheIndex;h._byClipCacheIndex=c,l[c]=h,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Rf(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Hh.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let h=null;if(n===void 0&&(n=a!==null?a.blendMode:2500),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;h=l.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const c=new Cy(this,a,t,n);return this._bindAction(c,h),this._addInactiveAction(c,o,r),c}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Hh.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)o[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const h=a[o];this._deactivateAction(h);const c=h._cacheIndex,u=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,u._cacheIndex=c,t[c]=u,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName[t];if(i!==void 0)for(const r in i){const a=i[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Ff.prototype._controlInterpolantsResultBuffer=new Float32Array(1);(class extends xr{constructor(s,e,t=1){super(s,e),this.meshPerAttribute=t}copy(s){return super.copy(s),this.meshPerAttribute=s.meshPerAttribute,this}clone(s){const e=super.clone(s);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(s){const e=super.toJSON(s);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}).prototype.isInstancedInterleavedBuffer=!0;function Qu(s,e){return s.distance-e.distance}function Vh(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Vh(i[r],e,t,!0)}}class Va{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yn=new E,ba=new ue,ml=new ue;function Uf(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Uf(s.children[t]));return e}class _a{static toHalfFloat(e){Math.abs(e)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=tt(e,-65504,65504),ed[0]=e;const t=td[0],n=t>>23&511;return Zt[n]+((8388607&t)>>$t[n])}static fromHalfFloat(e){const t=e>>10;return td[0]=Sc[Bf[t]+(1023&e)]+wr[t],ed[0]}}const kf=new ArrayBuffer(4),ed=new Float32Array(kf),td=new Uint32Array(kf),Zt=new Uint32Array(512),$t=new Uint32Array(512);for(let s=0;s<256;++s){const e=s-127;e<-27?(Zt[s]=0,Zt[256|s]=32768,$t[s]=24,$t[256|s]=24):e<-14?(Zt[s]=1024>>-e-14,Zt[256|s]=1024>>-e-14|32768,$t[s]=-e-1,$t[256|s]=-e-1):e<=15?(Zt[s]=e+15<<10,Zt[256|s]=e+15<<10|32768,$t[s]=13,$t[256|s]=13):e<128?(Zt[s]=31744,Zt[256|s]=64512,$t[s]=24,$t[256|s]=24):(Zt[s]=31744,Zt[256|s]=64512,$t[s]=13,$t[256|s]=13)}const Sc=new Uint32Array(2048),wr=new Uint32Array(64),Bf=new Uint32Array(64);for(let s=1;s<1024;++s){let e=s<<13,t=0;for(;(8388608&e)==0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Sc[s]=e|t}for(let s=1024;s<2048;++s)Sc[s]=939524096+(s-1024<<13);for(let s=1;s<31;++s)wr[s]=s<<23;wr[31]=1199570944,wr[32]=2147483648;for(let s=33;s<63;++s)wr[s]=2147483648+(s-32<<23);wr[63]=3347054592;for(let s=1;s<64;++s)s!==32&&(Bf[s]=1024);Bt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Bt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s},kh.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)},class extends no{constructor(s=10,e=10,t=4473924,n=8947848){t=new he(t),n=new he(n);const i=e/2,r=s/e,a=s/2,o=[],l=[];for(let c=0,u=0,d=-a;c<=e;c++,d+=r){o.push(-a,0,d,a,0,d),o.push(d,0,-a,d,0,a);const p=c===i?t:n;p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3}const h=new Be;h.setAttribute("position",new nt(o,3)),h.setAttribute("color",new nt(l,3)),super(h,new Ii({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}}.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},class extends no{constructor(s){const e=Uf(s),t=new Be,n=[],i=[],r=new he(0,0,1),a=new he(0,1,0);for(let o=0;o<e.length;o++){const l=e[o];l.parent&&l.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(r.r,r.g,r.b),i.push(a.r,a.g,a.b))}t.setAttribute("position",new nt(n,3)),t.setAttribute("color",new nt(i,3)),super(t,new Ii({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=s,this.bones=e,this.matrix=s.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(s){const e=this.bones,t=this.geometry,n=t.getAttribute("position");ml.copy(this.root.matrixWorld).invert();for(let i=0,r=0;i<e.length;i++){const a=e[i];a.parent&&a.parent.isBone&&(ba.multiplyMatrices(ml,a.matrixWorld),Yn.setFromMatrixPosition(ba),n.setXYZ(r,Yn.x,Yn.y,Yn.z),ba.multiplyMatrices(ml,a.parent.matrixWorld),Yn.setFromMatrixPosition(ba),n.setXYZ(r+1,Yn.x,Yn.y,Yn.z),r+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(s)}}.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},zt.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),ri.extractUrlBase(s)},zt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},dt.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)},dt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},dt.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},dt.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},dt.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)},Fn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")},Bn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},fo.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)},Qe.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)},Qe.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},Qe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},Qe.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},Qe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},Qe.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},ue.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)},ue.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)},ue.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new E().setFromMatrixColumn(this,3)},ue.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)},ue.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ue.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ue.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ue.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ue.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)},ue.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ue.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ue.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ue.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ue.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ue.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ue.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ue.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ue.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)},ue.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},Dn.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)},wt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)},wt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},Li.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},Li.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)},Li.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},Ke.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},Ke.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)},Ke.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)},Ke.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)},Ke.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)},Ke.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Ke.getBarycoord(s,e,t,n,i)},Ke.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Ke.getNormal(s,e,t,n)},_s.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)},_s.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new gr(this,s)},_s.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new bc(this,s)},Q.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},Q.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},Q.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},E.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},E.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},E.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)},E.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)},E.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)},E.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)},E.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},E.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},E.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Ue.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},Ue.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Le.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)},Le.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Le.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)},Le.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Le.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(Le.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),pe.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(pe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),dc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},lt.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)},Object.defineProperties(pn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}}),Object.defineProperties(ze.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}}),ze.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?35048:35044),this},ze.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ze.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Be.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)},Be.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new ze(arguments[1],arguments[2])))},Be.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)},Be.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},Be.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},Be.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)},Be.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(Be.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),xr.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?35048:35044),this},xr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},gr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},gr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},gr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},un.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Object.defineProperties(qe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new he}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(St.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}}),Ne.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)},Ne.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)},Ne.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Ne.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Ne.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Ne.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Ne.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Ne.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Ne.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Ne.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Ne.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Ne.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Ne.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Ne.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Ne.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)},Ne.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Ne.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Ne.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Ne.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Ne.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Ne.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Ne.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Ne.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Ne.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Ne.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Ne.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}}),Object.defineProperties(of.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(pt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}}),class extends Le{constructor(s){super(),this.type="Audio",this.listener=s,this.context=s.context,this.gain=this.context.createGain(),this.gain.connect(s.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(s){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=s,this.connect(),this}setMediaElementSource(s){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(s),this.connect(),this}setMediaStreamSource(s){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(s),this.connect(),this}setBuffer(s){return this.buffer=s,this.sourceType="buffer",this.autoplay&&this.play(),this}play(s=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+s;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let s=1,e=this.filters.length;s<e;s++)this.filters[s-1].connect(this.filters[s]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let s=1,e=this.filters.length;s<e;s++)this.filters[s-1].disconnect(this.filters[s]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(s){return s||(s=[]),this._connected===!0?(this.disconnect(),this.filters=s.slice(),this.connect()):this.filters=s.slice(),this}setDetune(s){if(this.detune=s,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(s){return this.setFilters(s?[s]:[])}setPlaybackRate(s){if(this.hasPlaybackControl!==!1)return this.playbackRate=s,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(s){if(this.hasPlaybackControl!==!1)return this.loop=s,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(s){return this.loopStart=s,this}setLoopEnd(s){return this.loopEnd=s,this}getVolume(){return this.gain.gain.value}setVolume(s){return this.gain.gain.setTargetAtTime(s,this.context.currentTime,.01),this}}.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new xy().load(s,function(t){e.setBuffer(t)}),this},Ls.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)},Ls.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)},Si.crossOrigin=void 0,Si.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Mo;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r},Si.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new gy;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r},Si.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Si.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"139"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="139");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,Hf=zf&&self.XRSession.prototype.requestHitTestSource,fl=self.ResizeObserver!=null,gl=self.IntersectionObserver!=null,Vf=Hf;(()=>{const s=navigator.userAgent||navigator.vendor||self.opera;/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(s)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(s.substr(0,4))})(),/\bCrOS\b/.test(navigator.userAgent);const Ly=/android/i.test(navigator.userAgent),Py=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,nd=(()=>{const s=document.createElement("a");return Boolean(s.relList&&s.relList.supports&&s.relList.supports("ar"))})();/Safari\//.test(navigator.userAgent);const Dy=/firefox/i.test(navigator.userAgent),Iy=/OculusBrowser/.test(navigator.userAgent);Py&&/CriOS\//.test(navigator.userAgent);const Oy=Ly&&!Dy&&!Iy;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=Gs`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

/* NOTE: This ruleset is our integration surface area with the
 * :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196 */
:host([data-js-focus-visible]:focus:not(.focus-visible)),
:host([data-js-focus-visible]) :focus:not(.focus-visible) {
  outline: none;
}

.container {
  position: relative;
}

.userInput {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  overflow: hidden;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

canvas.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  opacity: 0;
  transition: opacity 0.3s 0.3s;
  background-color: inherit;
}

.slot.poster.show {
  opacity: 1;
  transition: none;
}

.slot.poster.quick {
  transition: none;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--poster-color, #fff);
  background-image: var(--poster-image, none);
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--progress-mask, #fff);
  transition: opacity 0.3s;
  opacity: 0.2;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  align-items: center;
  justify-content: center;

  opacity: 0;
  will-change: opacity;
  overflow: hidden;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.slot.interaction-prompt > .animated-container {
  will-change: transform, opacity;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>
      
  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View in your space">
        ${Gs`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
     viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
    <path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
    <path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
    <path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
    <path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
    <g>
        <path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
            l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
            l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
    </g>
</g>
</svg>`}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">      
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt">
    <div class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${Gs`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`}
      </slot>
    </div>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="mask" part="default-progress-mask"></div>
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>
    
    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${Gs`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,vl=new WeakMap;function Fy(){let s,e;function t(n,i,r,a,o,l){const h=l.num_components(),c=r.num_points()*h,u=c*o.BYTES_PER_ELEMENT,d=function(g,v){switch(v){case Float32Array:return g.DT_FLOAT32;case Int8Array:return g.DT_INT8;case Int16Array:return g.DT_INT16;case Int32Array:return g.DT_INT32;case Uint8Array:return g.DT_UINT8;case Uint16Array:return g.DT_UINT16;case Uint32Array:return g.DT_UINT32}}(n,o),p=n._malloc(u);i.GetAttributeDataArrayForAllPoints(r,l,d,u,p);const m=new o(n.HEAPF32.buffer,p,c).slice();return n._free(p),{name:a,array:m,itemSize:h}}onmessage=function(n){const i=n.data;switch(i.type){case"init":s=i.decoderConfig,e=new Promise(function(o){s.onModuleLoaded=function(l){o({draco:l})},DracoDecoderModule(s)});break;case"decode":const r=i.buffer,a=i.taskConfig;e.then(o=>{const l=o.draco,h=new l.Decoder,c=new l.DecoderBuffer;c.Init(new Int8Array(r),r.byteLength);try{const u=function(p,m,g,v){const f=v.attributeIDs,b=v.attributeTypes;let x,y;const _=m.GetEncodedGeometryType(g);if(_===p.TRIANGULAR_MESH)x=new p.Mesh,y=m.DecodeBufferToMesh(g,x);else{if(_!==p.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");x=new p.PointCloud,y=m.DecodeBufferToPointCloud(g,x)}if(!y.ok()||x.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+y.error_msg());const M={index:null,attributes:[]};for(const S in f){const D=self[b[S]];let P,I;if(v.useUniqueIDs)I=f[S],P=m.GetAttributeByUniqueId(x,I);else{if(I=m.GetAttributeId(x,p[f[S]]),I===-1)continue;P=m.GetAttribute(x,I)}M.attributes.push(t(p,m,x,S,D,P))}return _===p.TRIANGULAR_MESH&&(M.index=function(S,D,P){const I=3*P.num_faces(),F=4*I,B=S._malloc(F);D.GetTrianglesUInt32Array(P,F,B);const W=new Uint32Array(S.HEAPF32.buffer,B,I).slice();return S._free(B),{array:W,itemSize:1}}(p,m,x)),p.destroy(x),M}(l,h,c,a),d=u.attributes.map(p=>p.array.buffer);u.index&&d.push(u.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:u},d)}catch(u){console.error(u),self.postMessage({type:"error",id:i.id,error:u.message})}finally{l.destroy(c),l.destroy(h)}})}}}class Uy extends zt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Jy(t)})}load(e,t,n,i){const r=this;let a;a=this.resourcePath!==""?this.resourcePath:this.path!==""?this.path:ri.extractUrlBase(e),this.manager.itemStart(e);const o=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Un(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{r.parse(h,a,function(c){t(c),r.manager.itemEnd(e)},o)}catch(c){o(c)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={};if(typeof e=="string")r=e;else if(ri.decodeText(new Uint8Array(e,0,4))===Gf){try{a[Ae.KHR_BINARY_GLTF]=new Ky(e)}catch(c){return void(i&&i(c))}r=a[Ae.KHR_BINARY_GLTF].content}else r=ri.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2)return void(i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));const h=new vx(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](h);o[u.name]=u,a[u.name]=!0}if(l.extensionsUsed)for(let c=0;c<l.extensionsUsed.length;++c){const u=l.extensionsUsed[c],d=l.extensionsRequired||[];switch(u){case Ae.KHR_MATERIALS_UNLIT:a[u]=new zy;break;case Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[u]=new tx;break;case Ae.KHR_DRACO_MESH_COMPRESSION:a[u]=new Qy(l,this.dracoLoader);break;case Ae.KHR_TEXTURE_TRANSFORM:a[u]=new ex;break;case Ae.KHR_MESH_QUANTIZATION:a[u]=new nx;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ky(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class By{constructor(e){this.parser=e,this.name=Ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let o;const l=new he(16777215);a.color!==void 0&&l.fromArray(a.color);const h=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new Mc(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new So(l),o.distance=h;break;case"spot":o=new Pf(l),o.distance=h,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),o.decay=2,a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(o),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],r=(i.extensions&&i.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(a){return n._getNodeRef(t.cache,r,a)})}}class zy{constructor(){this.name=Ae.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){const i=[];e.color=new he(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,3001))}return Promise.all(i)}}class Hy{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?li:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(o,o)}return Promise.all(r)}}class Vy{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?li:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,3001)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Gy{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?li:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Wy{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?li:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new he(o[0],o[1],o[2]),Promise.all(r)}}class jy{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?li:null}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class qy{constructor(e){this.parser=e,this.name=Ae.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?li:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new he(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,3001)),Promise.all(r)}}class Xy{constructor(e){this.parser=e,this.name=Ae.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Yy{constructor(e){this.parser=e,this.name=Ae.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Jy{constructor(e){this.name=Ae.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,a.ready]).then(function(o){const l=i.byteOffset||0,h=i.byteLength||0,c=i.count,u=i.byteStride,d=new ArrayBuffer(c*u),p=new Uint8Array(o[0],l,h);return a.decodeGltfBuffer(new Uint8Array(d),c,u,p,i.mode,i.filter),d})}return null}}const Gf="glTF",Zy=1313821514,$y=5130562;class Ky{constructor(e){this.name=Ae.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,12);if(this.header={magic:ri.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-12,i=new DataView(e,12);let r=0;for(;r<n;){const a=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===Zy){const l=new Uint8Array(e,12+r,a);this.content=ri.decodeText(l)}else if(o===$y){const l=12+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Qy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ae.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},h={};for(const c in a){const u=Wh[c]||c.toLowerCase();o[u]=a[c]}for(const c in e.attributes){const u=Wh[c]||c.toLowerCase();if(a[c]!==void 0){const d=n.accessors[e.attributes[c]],p=Fs[d.componentType];h[u]=p,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(u){i.decodeDracoFile(c,function(d){for(const p in d.attributes){const m=d.attributes[p],g=l[p];g!==void 0&&(m.normalized=g)}u(d)},o,h)})})}}class ex{constructor(){this.name=Ae.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Gh extends dn{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new he().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const h in o)l.uniforms[h]=o[h];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class tx{constructor(){this.name=Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Gh}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new he(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const a=i.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture,3001)),e.emissive=new he(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new he(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const a=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",a)),r.push(n.assignTexture(e,"specularMap",a,3001))}return Promise.all(r)}createMaterial(e){const t=new Gh(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=0,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class nx{constructor(){this.name=Ae.KHR_MESH_QUANTIZATION}}class Ti extends On{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}}Ti.prototype.beforeStart_=Ti.prototype.copySampleValue_,Ti.prototype.afterEnd_=Ti.prototype.copySampleValue_,Ti.prototype.interpolate_=function(s,e,t,n){const i=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=2*a,l=3*a,h=n-e,c=(t-e)/h,u=c*c,d=u*c,p=s*l,m=p-l,g=-2*d+3*u,v=d-u,f=1-g,b=v-u+c;for(let x=0;x!==a;x++){const y=r[m+x+a],_=r[m+x+o]*h,M=r[p+x+a],S=r[p+x]*h;i[x]=f*y+b*_+g*M+v*S}return i};const ix=new wt;class rx extends Ti{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return ix.fromArray(r).normalize().toArray(r),r}}const sx=0,ax=1,ox=2,lx=3,hx=4,id=5,rd=6,Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sd={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},ad={33071:1001,33648:1002,10497:1e3},od={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cx={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},ux="OPAQUE",dx="MASK",px="BLEND";function mx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new dn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),s.DefaultMaterial}function zr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gx(s){const e=s.extensions&&s.extensions[Ae.KHR_DRACO_MESH_COMPRESSION];let t;return t=e?"draco:"+e.bufferView+":"+e.indices+":"+ld(e.attributes):s.indices+":"+ld(s.attributes)+":"+s.mode,t}function ld(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function jh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class vx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ky,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!1?this.textureLoader=new Nf(this.options.manager):this.textureLoader=new Mo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Un(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};zr(r,o,i),bi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[h,c]of a.children.entries())r(c,o.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ae.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(ri.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=od[i.type],h=Fs[i.componentType],c=h.BYTES_PER_ELEMENT,u=c*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let g,v;if(p&&p!==u){const f=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(b);x||(g=new h(o,f*p,i.count*p/c),x=new xr(g,p/c),t.cache.add(b,x)),v=new br(x,l,d%p/c,m)}else g=o===null?new h(i.count*l):new h(o,d,i.count*l),v=new ze(g,l,m);if(i.sparse!==void 0){const f=od.SCALAR,b=Fs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,_=new b(a[1],x,i.sparse.count*f),M=new h(a[2],y,i.sparse.count*l);o!==null&&(v=new ze(v.array.slice(),v.itemSize,v.normalized));for(let S=0,D=_.length;S<D;S++){const P=_[S];if(v.setX(P,M[S*l]),l>=2&&v.setY(P,M[S*l+1]),l>=3&&v.setZ(P,M[S*l+2]),l>=4&&v.setW(P,M[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,r=t.images[i];let a=this.textureLoader;if(r.uri){const o=n.manager.getHandler(r.uri);o!==null&&(a=o)}return this.loadTextureImage(e,i,a)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(c){c.flipY=!1,a.name&&(c.name=a.name);const u=(r.samplers||{})[a.sampler]||{};return c.magFilter=sd[u.magFilter]||1006,c.minFilter=sd[u.minFilter]||1008,c.wrapS=ad[u.wrapS]||1e3,c.wrapT=ad[u.wrapT]||1e3,i.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){h=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(g){const v=new Ye(g);v.needsUpdate=!0,d(v)}),t.load(ri.resolveURL(u,r.path),m,void 0,p)})}).then(function(u){var d;return h===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||((d=a.uri).search(/\.jpe?g($|\?)/i)>0||d.search(/^data\:image\/jpeg/)===0?"image/jpeg":d.search(/\.webp($|\?)/i)>0||d.search(/^data\:image\/webp/)===0?"image/webp":"image/png"),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=c,c}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(n.texCoord===void 0||n.texCoord==0||t==="aoMap"&&n.texCoord==1||console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ae.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ae.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ae.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new xo,qe.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ii,qe.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return dn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},h=[];if(l[Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=u.getMaterialType(),h.push(u.extendParams(o,r,t))}else if(l[Ae.KHR_MATERIALS_UNLIT]){const u=i[Ae.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),h.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new he(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",u.baseColorTexture,3001)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=2);const c=r.alphaMode||ux;if(c===px?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===dx&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Dt&&(h.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}return r.occlusionTexture!==void 0&&a!==Dt&&(h.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Dt&&(o.emissive=new he().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Dt&&h.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,3001)),Promise.all(h).then(function(){let u;return u=a===Gh?i[Ae.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):new a(o),r.name&&(u.name=r.name),bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&zr(i,u,r),u})}createUniqueName(e){const t=Ce.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return hd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const h=e[o],c=gx(h),u=i[c];if(u)a.push(u.promise);else{let d;d=h.extensions&&h.extensions[Ae.KHR_DRACO_MESH_COMPRESSION]?r(h):hd(new Be,h,t),i[c]={primitive:h,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,h=a.length;l<h;l++){const c=a[l].material===void 0?mx(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),c=l[l.length-1],u=[];for(let p=0,m=c.length;p<m;p++){const g=c[p],v=a[p];let f;const b=h[p];if(v.mode===hx||v.mode===id||v.mode===rd||v.mode===void 0)f=r.isSkinnedMesh===!0?new dc(g,b):new pe(g,b),f.isSkinnedMesh!==!0||f.geometry.attributes.skinWeight.normalized||f.normalizeSkinWeights(),v.mode===id?f.geometry=cd(f.geometry,1):v.mode===rd&&(f.geometry=cd(f.geometry,2));else if(v.mode===ax)f=new no(g,b);else if(v.mode===lx)f=new yo(g,b);else if(v.mode===ox)f=new uf(g,b);else{if(v.mode!==sx)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);f=new df(g,b)}Object.keys(f.geometry.morphAttributes).length>0&&fx(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),bi(f,r),v.extensions&&zr(i,f,v),t.assignFinalMaterial(f),u.push(f)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return u[0];const d=new In;t.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(i)return n.type==="perspective"?t=new lt(Xm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ui(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const t=this.json.animations[e],n=[],i=[],r=[],a=[],o=[];for(let l=0,h=t.channels.length;l<h;l++){const c=t.channels[l],u=t.samplers[c.sampler],d=c.target,p=d.node!==void 0?d.node:d.id,m=t.parameters!==void 0?t.parameters[u.input]:u.input,g=t.parameters!==void 0?t.parameters[u.output]:u.output;n.push(this.getDependency("node",p)),i.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",g)),a.push(u),o.push(d)}return Promise.all([Promise.all(n),Promise.all(i),Promise.all(r),Promise.all(a),Promise.all(o)]).then(function(l){const h=l[0],c=l[1],u=l[2],d=l[3],p=l[4],m=[];for(let v=0,f=h.length;v<f;v++){const b=h[v],x=c[v],y=u[v],_=d[v],M=p[v];if(b===void 0)continue;let S;switch(b.updateMatrix(),b.matrixAutoUpdate=!0,er[M.path]){case er.weights:S=Os;break;case er.rotation:S=Pi;break;default:S=Ns}const D=b.name?b.name:b.uuid,P=_.interpolation!==void 0?cx[_.interpolation]:2301,I=[];er[M.path]===er.weights?b.traverse(function(B){B.morphTargetInfluences&&I.push(B.name?B.name:B.uuid)}):I.push(D);let F=y.array;if(y.normalized){const B=jh(F.constructor),W=new Float32Array(F.length);for(let O=0,G=F.length;O<G;O++)W[O]=F[O]*B;F=W}for(let B=0,W=I.length;B<W;B++){const O=new S(I[B]+"."+er[M.path],x.array,F,P);_.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(G){return new(this instanceof Pi?rx:Ti)(this.times,this.values,this.getValueSize()/3,G)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(O)}}const g=t.name?t.name:"animation_"+e;return new Hh(g,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,h=i.weights.length;l<h;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"";return function(){const o=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),Promise.all(o)}().then(function(o){let l;if(l=r.isBone===!0?new pc:o.length>1?new In:o.length===1?o[0]:new Le,l!==o[0])for(let h=0,c=o.length;h<c;h++)l.add(o[h]);if(r.name&&(l.userData.name=r.name,l.name=a),bi(l,r),r.extensions&&zr(n,l,r),r.matrix!==void 0){const h=new ue;h.fromArray(r.matrix),l.applyMatrix4(h)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,a=new In;i.name&&(a.name=r.createUniqueName(i.name)),bi(a,i),i.extensions&&zr(n,a,i);const o=i.nodes||[],l=[];for(let h=0,c=o.length;h<c;h++)l.push(Wf(o[h],a,t,r));return Promise.all(l).then(function(){return r.associations=(h=>{const c=new Map;for(const[u,d]of r.associations)(u instanceof qe||u instanceof Ye)&&c.set(u,d);return h.traverse(u=>{const d=r.associations.get(u);d!=null&&c.set(u,d)}),c})(a),a})}}function Wf(s,e,t,n){const i=t.nodes[s];return n.getDependency("node",s).then(function(r){if(i.skin===void 0)return r;let a;return n.getDependency("skin",i.skin).then(function(o){a=o;const l=[];for(let h=0,c=a.joints.length;h<c;h++)l.push(n.getDependency("node",a.joints[h]));return Promise.all(l)}).then(function(o){return r.traverse(function(l){if(!l.isMesh)return;const h=[],c=[];for(let u=0,d=o.length;u<d;u++){const p=o[u];if(p){h.push(p);const m=new ue;a.inverseBindMatrices!==void 0&&m.fromArray(a.inverseBindMatrices.array,16*u),c.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[u])}l.bind(new fc(h,c),l.matrixWorld)}),r})}).then(function(r){e.add(r);const a=[];if(i.children){const o=i.children;for(let l=0,h=o.length;l<h;l++){const c=o[l];a.push(Wf(c,r,t,n))}}return Promise.all(a)})}function hd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Wh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return bi(s,e),function(a,o,l){const h=o.attributes,c=new dt;if(h.POSITION===void 0)return;{const p=l.json.accessors[h.POSITION],m=p.min,g=p.max;if(m===void 0||g===void 0)return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(c.set(new E(m[0],m[1],m[2]),new E(g[0],g[1],g[2])),p.normalized){const v=jh(Fs[p.componentType]);c.min.multiplyScalar(v),c.max.multiplyScalar(v)}}const u=o.targets;if(u!==void 0){const p=new E,m=new E;for(let g=0,v=u.length;g<v;g++){const f=u[g];if(f.POSITION!==void 0){const b=l.json.accessors[f.POSITION],x=b.min,y=b.max;if(x!==void 0&&y!==void 0){if(m.setX(Math.max(Math.abs(x[0]),Math.abs(y[0]))),m.setY(Math.max(Math.abs(x[1]),Math.abs(y[1]))),m.setZ(Math.max(Math.abs(x[2]),Math.abs(y[2]))),b.normalized){const _=jh(Fs[b.componentType]);m.multiplyScalar(_)}p.max(m)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}c.expandByVector(p)}a.boundingBox=c;const d=new Bn;c.getCenter(d.center),d.radius=c.min.distanceTo(c.max)/2,a.boundingSphere=d}(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?function(a,o,l){let h=!1,c=!1,u=!1;for(let g=0,v=o.length;g<v;g++){const f=o[g];if(f.POSITION!==void 0&&(h=!0),f.NORMAL!==void 0&&(c=!0),f.COLOR_0!==void 0&&(u=!0),h&&c&&u)break}if(!h&&!c&&!u)return Promise.resolve(a);const d=[],p=[],m=[];for(let g=0,v=o.length;g<v;g++){const f=o[g];if(h){const b=f.POSITION!==void 0?l.getDependency("accessor",f.POSITION):a.attributes.position;d.push(b)}if(c){const b=f.NORMAL!==void 0?l.getDependency("accessor",f.NORMAL):a.attributes.normal;p.push(b)}if(u){const b=f.COLOR_0!==void 0?l.getDependency("accessor",f.COLOR_0):a.attributes.color;m.push(b)}}return Promise.all([Promise.all(d),Promise.all(p),Promise.all(m)]).then(function(g){const v=g[0],f=g[1],b=g[2];return h&&(a.morphAttributes.position=v),c&&(a.morphAttributes.normal=f),u&&(a.morphAttributes.color=b),a.morphTargetsRelative=!0,a})}(s,e.targets,t):s})}function cd(s,e){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o===void 0)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s;for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}const n=t.count-2,i=[];if(e===2)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2==0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r}class yx{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const yl=new WeakMap;let xl=0;class ln extends zt{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new yx,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER!="undefined"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new Un(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new Un(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([r,a])=>{const o=ln.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(ln.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(ln.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(ln.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const h=new Worker(this.workerSourceURL),c=this.transcoderBinary.slice(0);return h.postMessage({type:"init",config:this.workerConfig,transcoderBinary:c},[c]),h})}),xl>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),xl++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new Un(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials);const a=new Uh;return r.load(e,o=>{if(yl.has(o))return yl.get(o).promise.then(t).catch(i);this._createTexture([o]).then(function(l){a.copy(l),a.needsUpdate=!0,t&&t(a)}).catch(i)},n,i),a}_createTextureFrom(e){const{mipmaps:t,width:n,height:i,format:r,type:a,error:o,dfdTransferFn:l,dfdFlags:h}=e;if(a==="error")return Promise.reject(o);const c=new Uh(t,n,i,r,1009);return c.minFilter=t.length===1?1006:1008,c.magFilter=1006,c.generateMipmaps=!1,c.needsUpdate=!0,c.encoding=l===2?3001:3e3,c.premultiplyAlpha=!!(1&h),c}_createTexture(e,t={}){const n=t,i=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffers:e,taskConfig:n},e)).then(r=>this._createTextureFrom(r.data));return yl.set(e[0],{promise:i}),i}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),xl--,this}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ud,dd;ln.BasisFormat={ETC1S:0,UASTC_4x4:1},ln.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16},ln.EngineFormat={RGBAFormat:1023,RGBA_ASTC_4x4_Format:37808,RGBA_BPTC_Format:36492,RGBA_ETC2_EAC_Format:37496,RGBA_PVRTC_4BPPV1_Format:35842,RGBA_S3TC_DXT5_Format:33779,RGB_ETC1_Format:36196,RGB_ETC2_Format:37492,RGB_PVRTC_4BPPV1_Format:35840,RGB_S3TC_DXT1_Format:33776},ln.BasisWorker=function(){let s,e,t;const n=_EngineFormat,i=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(c){const u=c.data;switch(u.type){case"init":s=u.config,d=u.transcoderBinary,e=new Promise(p=>{t={wasmBinary:d,onRuntimeInitialized:p},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")});break;case"transcode":e.then(()=>{try{const{width:p,height:m,hasAlpha:g,mipmaps:v,format:f,dfdTransferFn:b,dfdFlags:x}=function(_){const M=new t.KTX2File(new Uint8Array(_));function S(){M.close(),M.delete()}if(!M.isValid())throw S(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const D=M.isUASTC()?r.UASTC_4x4:r.ETC1S,P=M.getWidth(),I=M.getHeight(),F=M.getLevels(),B=M.getHasAlpha(),W=M.getDFDTransferFunc(),O=M.getDFDFlags(),{transcoderFormat:G,engineFormat:z}=function(Z,X,V,oe){let se,le;const ne=Z===r.ETC1S?o:l;for(let xe=0;xe<ne.length;xe++){const A=ne[xe];if(s[A.if]&&A.basisFormat.includes(Z)&&!(oe&&A.transcoderFormat.length<2)&&(!A.needsPowerOfTwo||h(X)&&h(V)))return se=A.transcoderFormat[oe?1:0],le=A.engineFormat[oe?1:0],{transcoderFormat:se,engineFormat:le}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),se=i.RGBA32,le=n.RGBAFormat,{transcoderFormat:se,engineFormat:le}}(D,P,I,B);if(!P||!I||!F)throw S(),new Error("THREE.KTX2Loader:	Invalid texture");if(!M.startTranscoding())throw S(),new Error("THREE.KTX2Loader: .startTranscoding failed");const J=[];for(let Z=0;Z<F;Z++){const X=M.getImageLevelInfo(Z,0,0),V=X.origWidth,oe=X.origHeight,se=new Uint8Array(M.getImageTranscodedSizeInBytes(Z,0,0,G));if(!M.transcodeImage(se,Z,0,0,G,0,-1,-1))throw S(),new Error("THREE.KTX2Loader: .transcodeImage failed.");J.push({data:se,width:V,height:oe})}return S(),{width:P,height:I,hasAlpha:B,mipmaps:J,format:z,dfdTransferFn:W,dfdFlags:O}}(u.buffers[0]),y=[];for(let _=0;_<v.length;++_)y.push(v[_].data.buffer);self.postMessage({type:"transcode",id:u.id,width:p,height:m,hasAlpha:g,mipmaps:v,format:f,dfdTransferFn:b,dfdFlags:x},y)}catch(p){console.error(p),self.postMessage({type:"error",id:u.id,error:p.message})}})}var d});const a=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGB_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],o=a.sort(function(c,u){return c.priorityETC1S-u.priorityETC1S}),l=a.sort(function(c,u){return c.priorityUASTC-u.priorityUASTC});function h(c){return c<=2||(c&c-1)==0&&c!==0}};const Jt=Symbol("retainerCount"),wn=Symbol("recentlyUsed"),wa=Symbol("evict"),Hr=Symbol("evictionThreshold"),bl=Symbol("cache");class xx{constructor(e,t=5){this[ud]=new Map,this[dd]=[],this[bl]=e,this[Hr]=t}set evictionThreshold(e){this[Hr]=e,this[wa]()}get evictionThreshold(){return this[Hr]}get cache(){return this[bl]}retainerCount(e){return this[Jt].get(e)||0}reset(){this[Jt].clear(),this[wn]=[]}retain(e){this[Jt].has(e)||this[Jt].set(e,0),this[Jt].set(e,this[Jt].get(e)+1);const t=this[wn].indexOf(e);t!==-1&&this[wn].splice(t,1),this[wn].unshift(e),this[wa]()}release(e){this[Jt].has(e)&&this[Jt].set(e,Math.max(this[Jt].get(e)-1,0)),this[wa]()}[(ud=Jt,dd=wn,wa)](){if(!(this[wn].length<this[Hr]))for(let e=this[wn].length-1;e>=this[Hr];--e){const t=this[wn][e];this[Jt].get(t)===0&&(this[bl].delete(t),this[wn].splice(e,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=s=>{const e=new Map;for(const t of s.mappings)for(const n of t.variants)e.set(n,{material:null,gltfMaterialIndex:t.material});return e};class _x{constructor(e){this.parser=e,this.name="KHR_materials_variants"}afterRoot(e){const t=this.parser,n=t.json;if(n.extensions===void 0||n.extensions[this.name]===void 0)return null;const i=(r=>{const a=[],o=new Set;for(const l of r){let h=l,c=0;for(;o.has(h);)h=l+"."+ ++c;o.add(h),a.push(h)}return a})((n.extensions[this.name].variants||[]).map(r=>r.name));for(const r of e.scenes)r.traverse(a=>{const o=a;if(!o.isMesh)return;const l=t.associations.get(o);if(l==null||l.meshes==null||l.primitives==null)return;const h=n.meshes[l.meshes].primitives[l.primitives].extensions;h&&h[this.name]&&(o.userData.variantMaterials=bx(h[this.name]))});return e.userData.variants=i,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jf,pd;const Mn=new Map,_l=new Map;let md;const fd=new class extends zt{constructor(s){super(s),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(s){return this.decoderPath=s,this}setDecoderConfig(s){return this.decoderConfig=s,this}setWorkerLimit(s){return this.workerLimit=s,this}load(s,e,t,n){const i=new Un(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(s,r=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(r,a).then(e).catch(n)},t,n)}decodeDracoFile(s,e,t,n){const i={attributeIDs:t||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!t};this.decodeGeometry(s,i).then(e)}decodeGeometry(s,e){for(const o in e.attributeTypes){const l=e.attributeTypes[o];l.BYTES_PER_ELEMENT!==void 0&&(e.attributeTypes[o]=l.name)}const t=JSON.stringify(e);if(vl.has(s)){const o=vl.get(s);if(o.key===t)return o.promise;if(s.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const i=this.workerNextTaskID++,r=s.byteLength,a=this._getWorker(i,r).then(o=>(n=o,new Promise((l,h)=>{n._callbacks[i]={resolve:l,reject:h},n.postMessage({type:"decode",id:i,taskConfig:e,buffer:s},[s])}))).then(o=>this._createGeometry(o.geometry));return a.catch(()=>!0).then(()=>{n&&i&&this._releaseTask(n,i)}),vl.set(s,{key:t,promise:a}),a}_createGeometry(s){const e=new Be;s.index&&e.setIndex(new ze(s.index.array,1));for(let t=0;t<s.attributes.length;t++){const n=s.attributes[t],i=n.name,r=n.array,a=n.itemSize;e.setAttribute(i,new ze(r,a))}return e}_loadLibrary(s,e){const t=new Un(this.manager);return t.setPath(this.decoderPath),t.setResponseType(e),t.setWithCredentials(this.withCredentials),new Promise((n,i)=>{t.load(s,n,void 0,i)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const s=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return s?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(t=>{const n=t[0];s||(this.decoderConfig.wasmBinary=t[1]);const i=Fy.toString(),r=["/* draco decoder */",n,"","/* worker */",i.substring(i.indexOf("{")+1,i.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(s,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(i){const r=i.data;switch(r.type){case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,i){return n._taskLoad>i._taskLoad?-1:1});const t=this.workerPool[this.workerPool.length-1];return t._taskCosts[s]=e,t._taskLoad+=e,t})}_releaseTask(s,e){s._taskLoad-=s._taskCosts[e],delete s._callbacks[e],delete s._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(s=>s._taskLoad))}dispose(){for(let s=0;s<this.workerPool.length;++s)this.workerPool[s].terminate();return this.workerPool.length=0,this}};let gd;const wl=new ln;let Ml,Sl;const _i=Symbol("loader"),Qn=Symbol("evictionPolicy"),vd=Symbol("GLTFInstance");class ot extends Ht{constructor(e){super(),this[pd]=new Uy().register(t=>new _x(t)),this[vd]=e,this[_i].setDRACOLoader(fd),this[_i].setKTX2Loader(wl)}static setDRACODecoderLocation(e){md=e,fd.setDecoderPath(e)}static getDRACODecoderLocation(){return md}static setKTX2TranscoderLocation(e){gd=e,wl.setTranscoderPath(e)}static getKTX2TranscoderLocation(){return gd}static setMeshoptDecoderLocation(e){var t;Ml!==e&&(Ml=e,Sl=(t=e,new Promise((n,i)=>{const r=document.createElement("script");document.body.appendChild(r),r.onload=n,r.onerror=i,r.async=!0,r.src=t})).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return Ml}static initializeKTX2Loader(e){wl.detectSupport(e)}static get cache(){return Mn}static clearCache(){Mn.forEach((e,t)=>{this.delete(t)}),this[Qn].reset()}static has(e){return Mn.has(e)}static async delete(e){if(!this.has(e))return;const t=Mn.get(e);_l.delete(e),Mn.delete(e),(await t).dispose()}static hasFinishedLoading(e){return!!_l.get(e)}get[(jf=Qn,pd=_i,Qn)](){return this.constructor[Qn]}async preload(e,t,n=()=>{}){if(this[_i].setWithCredentials(ot.withCredentials),this.dispatchEvent({type:"preload",element:t,src:e}),!Mn.has(e)){Sl!=null&&this[_i].setMeshoptDecoder(await Sl);const i=((o,l,h)=>{const c=u=>{const d=u.loaded/u.total;h(Math.max(0,Math.min(1,isFinite(d)?d:1)))};return new Promise((u,d)=>{l.load(o,u,c,d)})})(e,this[_i],o=>{n(.8*o)}),r=this[vd],a=i.then(o=>r.prepare(o)).then(o=>(n(.9),new r(o))).catch(o=>(console.error(o),new r));Mn.set(e,a)}await Mn.get(e),_l.set(e,!0),n&&n(1)}async load(e,t,n=()=>{}){await this.preload(e,t,n);const i=await Mn.get(e),r=await i.clone();return this[Qn].retain(e),r.dispose=(()=>{const a=r.dispose;let o=!1;return()=>{o||(o=!0,a.apply(r),this[Qn].release(e))}})(),r}}ot[jf]=new xx(ot);class qf extends Le{constructor(e=document.createElement("div")){super(),this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}qf.prototype.isCSS2DObject=!0;const Jn=new E,yd=new ue,xd=new ue,bd=new E,_d=new E;class wx{constructor(e={}){const t=this;let n,i,r,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");function h(u,d,p){if(u.isCSS2DObject){Jn.setFromMatrixPosition(u.matrixWorld),Jn.applyMatrix4(xd);const m=u.visible===!0&&Jn.z>=-1&&Jn.z<=1&&u.layers.test(p.layers)===!0;if(u.element.style.display=m===!0?"":"none",m===!0){u.onBeforeRender(t,d,p);const v=u.element;/apple/i.test(navigator.vendor)?v.style.transform="translate(-50%,-50%) translate("+Math.round(Jn.x*r+r)+"px,"+Math.round(-Jn.y*a+a)+"px)":v.style.transform="translate(-50%,-50%) translate("+(Jn.x*r+r)+"px,"+(-Jn.y*a+a)+"px)",v.parentNode!==l&&l.appendChild(v),u.onAfterRender(t,d,p)}const g={distanceToCameraSquared:c(p,u)};o.objects.set(u,g)}for(let m=0,g=u.children.length;m<g;m++)h(u.children[m],d,p)}function c(u,d){return bd.setFromMatrixPosition(u.matrixWorld),_d.setFromMatrixPosition(d.matrixWorld),bd.distanceToSquared(_d)}l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(u,d){u.autoUpdate===!0&&u.updateMatrixWorld(),d.parent===null&&d.updateMatrixWorld(),yd.copy(d.matrixWorldInverse),xd.multiplyMatrices(d.projectionMatrix,yd),h(u,u,d),function(p){const m=function(v){const f=[];return v.traverse(function(b){b.isCSS2DObject&&f.push(b)}),f}(p).sort(function(v,f){return v.renderOrder!==f.renderOrder?f.renderOrder-v.renderOrder:o.objects.get(v).distanceToCameraSquared-o.objects.get(f).distanceToCameraSquared}),g=m.length;for(let v=0,f=m.length;v<f;v++)m[v].element.style.zIndex=g-v}(u)},this.setSize=function(u,d){n=u,i=d,r=n/2,a=i/2,l.style.width=u+"px",l.style.height=d+"px"}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=s=>s&&s!=="null"?Mx(s):null,wd=()=>{if(Vf)return;const s=[];throw zf||s.push("WebXR Device API"),Hf||s.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${s.join(", ")}`)},Mx=s=>new URL(s,window.location.toString()).toString(),Md=(s,e)=>{let t=null;return(...n)=>{t!=null&&self.clearTimeout(t),t=self.setTimeout(()=>{t=null,s(...n)},e)}},Ei=(s,e,t)=>Math.max(e,Math.min(t,s)),qh=(()=>{const s=(()=>{var e;if(!((e=document.documentElement.getAttribute("itemtype"))===null||e===void 0)&&e.includes("schema.org/SearchResultsPage"))return!0;const t=document.head!=null?Array.from(document.head.querySelectorAll("meta")):[];for(const n of t)if(n.name==="viewport")return!0;return!1})();return s||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>s?window.devicePixelRatio:1})(),Yf=(()=>{const s=new RegExp("[?&]model-viewer-debug-mode(&|$)");return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(s)})(),Jf=(s=0)=>new Promise(e=>setTimeout(e,s));class Pt{constructor(e=50){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(e)}setDecayTime(e){this.naturalFrequency=1/Math.max(.001,e)}update(e,t,n,i){const r=2e-4*this.naturalFrequency;if(e==null||i===0||e===t&&this.velocity===0)return t;if(n<0)return e;const a=e-t,o=this.velocity+this.naturalFrequency*a,l=a+n*o,h=Math.exp(-this.naturalFrequency*n),c=(o-this.naturalFrequency*l)*h,u=-this.naturalFrequency*(c+o*h);return Math.abs(c)<r*Math.abs(i)&&u*a>=0?(this.velocity=0,t):(this.velocity=c,t+l*h)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=(s,e)=>({type:"number",number:s,unit:e}),Oi=(()=>{const s={};return e=>{const t=e;if(t in s)return s[t];const n=[];let i=0;for(;e;){if(++i>1e3){e="";break}const r=Zf(e),a=r.nodes[0];if(a==null||a.terms.length===0)break;n.push(a),e=r.remainingInput}return s[t]=n}})(),Zf=(()=>{const s=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,t=/^[\),]/;return n=>{const i=[];for(;n.length&&(n=n.trim(),!t.test(n));)if(n[0]==="("){const{nodes:r,remainingInput:a}=Sd(n);n=a,i.push({type:"function",name:{type:"ident",value:"calc"},arguments:r})}else if(s.test(n)){const r=Sx(n),a=r.nodes[0];if((n=r.remainingInput)[0]==="("){const{nodes:o,remainingInput:l}=Sd(n);i.push({type:"function",name:a,arguments:o}),n=l}else i.push(a)}else if(e.test(n))i.push({type:"operator",value:n[0]}),n=n.slice(1);else{const{nodes:r,remainingInput:a}=n[0]==="#"?Ex(n):Tx(n);if(r.length===0)break;i.push(r[0]),n=a}return{nodes:[{type:"expression",terms:i}],remainingInput:n}}})(),Sx=(()=>{const s=/[^a-z0-9_\-\u0240-\uffff]/i;return e=>{const t=e.match(s);return{nodes:[{type:"ident",value:t==null?e:e.substr(0,t.index)}],remainingInput:t==null?"":e.substr(t.index)}}})(),Tx=(()=>{const s=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,t=/^(m|mm|cm|rad|deg|[%])$/;return n=>{const i=n.match(s),r=i==null?"0":i[0],a=(n=r==null?n:n.slice(r.length)).match(e);let o=a!=null&&a[0]!==""?a[0]:null;const l=a==null?n:n.slice(o.length);return o==null||t.test(o)||(o=null),{nodes:[{type:"number",number:parseFloat(r)||0,unit:o}],remainingInput:l}}})(),Ex=(()=>{const s=/^[a-f0-9]*/i;return e=>{const t=(e=e.slice(1).trim()).match(s);return{nodes:t==null?[]:[{type:"hex",value:t[0]}],remainingInput:t==null?e:e.slice(t[0].length)}}})(),Sd=s=>{const e=[];for(s=s.slice(1).trim();s.length;){const t=Zf(s);if(e.push(t.nodes[0]),(s=t.remainingInput.trim())[0]===",")s=s.slice(1).trim();else if(s[0]===")"){s=s.slice(1);break}}return{nodes:e,remainingInput:s}},Td=Symbol("visitedTypes");class Ax{constructor(e){this[Td]=e}walk(e,t){const n=e.slice();for(;n.length;){const i=n.shift();switch(this[Td].indexOf(i.type)>-1&&t(i),i.type){case"expression":n.unshift(...i.terms);break;case"function":n.unshift(i.name,...i.arguments)}}}}const ai=Object.freeze({type:"number",number:0,unit:null}),Eo=(s,e=0)=>{let{number:t,unit:n}=s;if(isFinite(t)){if(s.unit==="rad"||s.unit==null)return s}else t=e,n="rad";return{type:"number",number:(n==="deg"&&t!=null?t:0)*Math.PI/180,unit:"rad"}},Ed=(s,e)=>{let t,{number:n,unit:i}=s;if(isFinite(n)){if(s.unit==="m")return s}else n=e,i="m";switch(i){default:t=1;break;case"cm":t=.01;break;case"mm":t=.001}return{type:"number",number:t*n,unit:"m"}},cn=(()=>{const s=t=>t,e={rad:s,deg:Eo,m:s,mm:Ed,cm:Ed};return(t,n=ai)=>{isFinite(t.number)||(t.number=n.number,t.unit=n.unit);const{unit:i}=t;if(i==null)return t;const r=e[i];return r==null?n:r(t)}})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends qf{constructor(e){super(document.createElement("div")),this.normal=new E(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=e.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(e.position),this.updateNormal(e.normal)}get facingCamera(){return!this.element.classList.contains("hide")}show(){this.facingCamera&&this.initialized||this.updateVisibility(!0)}hide(){!this.facingCamera&&this.initialized||this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(e){if(e==null)return;const t=Oi(e)[0].terms;for(let n=0;n<3;++n)this.position.setComponent(n,cn(t[n]).number);this.updateMatrixWorld()}updateNormal(e){if(e==null)return;const t=Oi(e)[0].terms;for(let n=0;n<3;++n)this.normal.setComponent(n,cn(t[n]).number)}orient(e){this.pivot.style.transform=`rotate(${e}rad)`}updateVisibility(e){e?this.element.classList.remove("hide"):this.element.classList.add("hide"),this.slot.assignedNodes().forEach(t=>{if(t.nodeType!==Node.ELEMENT_NODE)return;const n=t,i=n.dataset.visibilityAttribute;if(i!=null){const r=`data-${i}`;e?n.setAttribute(r,""):n.removeAttribute(r)}n.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:e}}))}),this.initialized=!0}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=(s,e,t)=>{let n=t;const i=new E;return s.traverseVisible(r=>{let a,o;r.updateWorldMatrix(!1,!1);const l=r.geometry;if(l!==void 0){if(l.isGeometry){const h=l.vertices;for(a=0,o=h.length;a<o;a++)i.copy(h[a]),r.isSkinnedMesh?r.boneTransform(a,i):i.applyMatrix4(r.matrixWorld),n=e(n,i)}else if(l.isBufferGeometry){const{position:h}=l.attributes;if(h!==void 0){const c=(u=>{if(!u.normalized)return 1;const d=u.array;return d instanceof Int8Array?.007874015748031496:d instanceof Uint8Array?.00392156862745098:d instanceof Int16Array?3051850947599719e-20:d instanceof Uint16Array?15259021896696422e-21:1})(h);for(a=0,o=h.count;a<o;a++)i.fromBufferAttribute(h,a),i.multiplyScalar(c),r.isSkinnedMesh?r.boneTransform(a,i):i.applyMatrix4(r.matrixWorld),n=e(n,i)}}}}),n},Rx={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},Cx={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);function Ad(s,e,t){return(1-t)*s+t*e}/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx extends Le{constructor(e,t,n){super(),this.camera=new Ui,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new vo,this.horizontalBlurMaterial=new St(Rx),this.verticalBlurMaterial=new St(Cx),this.intensity=0,this.softness=1,this.boundingBox=new dt,this.size=new E,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:i}=this;i.rotation.x=Math.PI/2,i.left=-.5,i.right=.5,i.bottom=-.5,i.top=.5,this.add(i);const r=new Fi,a=new Dt({opacity:1,transparent:!0,side:1});this.floor=new pe(r,a),this.floor.userData.shadow=!0,i.add(this.floor),this.blurPlane=new pe(r),this.blurPlane.visible=!1,i.add(this.blurPlane),e.target.add(this),this.depthMaterial.onBeforeCompile=function(o){o.fragmentShader=o.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(e,t,n)}setScene(e,t,n){const{boundingBox:i,size:r,rotation:a,position:o}=this;if(this.isAnimated=e.animationNames.length>0,this.boundingBox.copy(e.boundingBox),this.size.copy(e.size),this.maxDimension=Math.max(r.x,r.y,r.z)*(this.isAnimated?2:1),this.boundingBox.getCenter(o),n==="back"){const{min:l,max:h}=i;[l.y,l.z]=[l.z,l.y],[h.y,h.z]=[h.z,h.y],[r.y,r.z]=[r.z,r.y],a.x=Math.PI/2,a.y=Math.PI}else a.x=0,a.y=0;if(this.isAnimated){const l=i.min.y,h=i.max.y;r.y=this.maxDimension,i.expandByVector(r.subScalar(this.maxDimension).multiplyScalar(-.5)),i.min.y=l,i.max.y=h,r.set(this.maxDimension,h-l,this.maxDimension)}n==="bottom"?o.y=i.min.y:o.z=i.min.y,this.setSoftness(t)}setSoftness(e){this.softness=e;const{size:t,camera:n}=this,i=this.isAnimated?2:1,r=i*Math.pow(2,9-3*e);this.setMapSize(r);const a=t.y/2,o=t.y*i;n.near=0,n.far=Ad(o,a,e),this.depthMaterial.opacity=1/e,n.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(e){const{size:t}=this;this.isAnimated&&(e*=2);const n=Math.floor(t.x>t.z?e:e*t.x/t.z),i=Math.floor(t.x>t.z?e*t.z/t.x:e),r=10+n,a=10+i;if(this.renderTarget==null||this.renderTarget.width===r&&this.renderTarget.height===a||(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const o={format:1023};this.renderTarget=new pt(r,a,o),this.renderTargetBlur=new pt(r,a,o),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(t.x*(1+10/n),t.z*(1+10/i),1),this.needsUpdate=!0}setIntensity(e){this.intensity=e,e>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=e*Ad(.3,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(e){this.floor.position.z=-e+.001*this.maxDimension}render(e,t){t.overrideMaterial=this.depthMaterial;const n=e.getClearAlpha();e.setClearAlpha(0),this.floor.visible=!1;const i=e.xr.enabled;e.xr.enabled=!1;const r=e.getRenderTarget();e.setRenderTarget(this.renderTarget),e.render(t,this.camera),t.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(e),e.xr.enabled=i,e.setRenderTarget(r),e.setClearAlpha(n)}blurShadow(e){const{camera:t,horizontalBlurMaterial:n,verticalBlurMaterial:i,renderTarget:r,renderTargetBlur:a,blurPlane:o}=this;o.visible=!0,o.material=n,n.uniforms.h.value=1/this.renderTarget.width,n.uniforms.tDiffuse.value=this.renderTarget.texture,e.setRenderTarget(a),e.render(o,t),o.material=i,i.uniforms.v.value=1/this.renderTarget.height,i.uniforms.tDiffuse.value=this.renderTargetBlur.texture,e.setRenderTarget(r),e.render(o,t),o.visible=!1}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new E,Rd=new E,Cd=new E,Px=new class{constructor(s,e,t=0,n=1/0){this.ray=new Li(s,e),this.near=t,this.far=n,this.camera=null,this.layers=new oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(s,e){this.ray.set(s,e)}setFromCamera(s,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(s.x,s.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(s.x,s.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(s,e=!0,t=[]){return Vh(s,this,t,e),t.sort(Qu),t}intersectObjects(s,e=!0,t=[]){for(let n=0,i=s.length;n<i;n++)Vh(s[n],this,t,e);return t.sort(Qu),t}},Ld=new E,Vr=new Q;class Dx extends un{constructor({canvas:e,element:t,width:n,height:i}){super(),this.context=null,this.annotationRenderer=new wx,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.renderCount=0,this.externalRenderer=null,this.camera=new lt(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new Le,this.modelContainer=new Le,this.animationNames=[],this.boundingBox=new dt,this.boundingSphere=new Bn,this.size=new E,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=Array(),this.exposure=1,this.canScale=!0,this.tightBounds=!1,this.isDirty=!1,this.goalTarget=new E,this.targetDamperX=new Pt,this.targetDamperY=new Pt,this.targetDamperZ=new Pt,this._currentGLTF=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.name="ModelScene",this.element=t,this.canvas=e,this.camera=new lt(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(n,i),this.target.name="Target",this.modelContainer.name="ModelContainer",this.target.add(this.modelContainer),this.mixer=new Ff(this.modelContainer);const{domElement:r}=this.annotationRenderer,{style:a}=r;a.display="none",a.pointerEvents="none",a.position="absolute",a.top="0",this.element.shadowRoot.querySelector(".default").appendChild(r),this.schemaElement.setAttribute("type","application/ld+json")}createContext(){this.context=this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}async setObject(e){this.reset(),this.modelContainer.add(e),await this.setupScene()}async setSource(e,t=()=>{}){if(!e||e===this.url)return void t(1);if(this.reset(),this.url=e,this.externalRenderer!=null){const o=await this.externalRenderer.load(t);return this.boundingSphere.radius=o.framedRadius,this.idealAspect=o.fieldOfViewAspect,void this.dispatchEvent({type:"model-load",url:this.url})}let n;this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);try{n=await new Promise(async(o,l)=>{this.cancelPendingSourceChange=()=>l();try{o(await this.element[ke].loader.load(e,this.element,t))}catch(h){l(h)}})}catch(o){if(o==null)return;throw o}this.reset(),this.url=e,this._currentGLTF=n,n!=null&&this.modelContainer.add(n.scene);const{animations:i}=n,r=new Map,a=[];for(const o of i)r.set(o.name,o),a.push(o.name);this.animations=i,this.animationsByName=r,this.animationNames=a,await this.setupScene()}async setupScene(){this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity),this.dispatchEvent({type:"model-load",url:this.url})}reset(){this.url=null,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0);const e=this._currentGLTF;if(e!=null){for(const t of this.modelContainer.children)this.modelContainer.remove(t);e.dispose(),this._currentGLTF=null}this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}get currentGLTF(){return this._currentGLTF}setSize(e,t){if(this.width!==e||this.height!==t){if(this.width=Math.max(e,1),this.height=Math.max(t,1),this.annotationRenderer.setSize(e,t),this.aspect=this.width/this.height,this.externalRenderer!=null){const n=qh();this.externalRenderer.resize(e*n,t*n)}this.queueRender()}}findBakedShadows(e){const t=new dt;e.traverse(n=>{const i=n;if(!i.isMesh)return;const r=i.material;if(!r.isMeshBasicMaterial||!r.transparent)return;t.setFromObject(i);const a=t.getSize(Ld),o=Math.min(a.x,a.y,a.z);Math.max(a.x,a.y,a.z)<100*o||(this.bakedShadows.push(i),i.userData.shadow=!0)})}updateBoundingBox(){if(this.target.remove(this.modelContainer),this.findBakedShadows(this.modelContainer),this.tightBounds===!0){const e=(t,n)=>t.expandByPoint(n);this.setBakedShadowVisibility(!1),this.boundingBox=Ma(this.modelContainer,e,new dt),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows=[],this.boundingBox=Ma(this.modelContainer,e,new dt)),this.setBakedShadowVisibility()}else this.boundingBox.setFromObject(this.modelContainer);this.boundingBox.getSize(this.size),this.target.add(this.modelContainer)}async updateFraming(){this.target.remove(this.modelContainer),this.setBakedShadowVisibility(!1);const{center:e}=this.boundingSphere;this.tightBounds===!0?(await this.element.requestUpdate("cameraTarget"),e.copy(this.getTarget())):this.boundingBox.getCenter(e),this.boundingSphere.radius=Math.sqrt(Ma(this.modelContainer,(t,n)=>Math.max(t,e.distanceToSquared(n)),0)),this.idealAspect=Ma(this.modelContainer,(t,n)=>{n.sub(e);const i=Math.sqrt(n.x*n.x+n.z*n.z);return Math.max(t,i/(this.idealCameraDistance()-Math.abs(n.y)))},0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(this.modelContainer)}setBakedShadowVisibility(e=this.shadowIntensity<=0){for(const t of this.bakedShadows)t.visible=e}idealCameraDistance(){const e=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(e)}adjustedFoV(e){const t=Math.tan(e/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(t)*180/Math.PI}getNDC(e,t){if(this.xrCamera!=null)Vr.set(e/window.screen.width,t/window.screen.height);else{const n=this.element.getBoundingClientRect();Vr.set((e-n.x)/this.width,(t-n.y)/this.height)}return Vr.multiplyScalar(2).subScalar(1),Vr.y*=-1,Vr}getSize(){return{width:this.width,height:this.height}}setTarget(e,t,n){this.goalTarget.set(-e,-t,-n)}setTargetDamperDecayTime(e){this.targetDamperX.setDecayTime(e),this.targetDamperY.setDecayTime(e),this.targetDamperZ.setDecayTime(e)}getTarget(){return Ld.copy(this.goalTarget).multiplyScalar(-1)}jumpToGoal(){this.updateTarget(1e4)}updateTarget(e){const t=this.goalTarget,n=this.target.position;if(!t.equals(n)){const i=this.boundingSphere.radius/10;let{x:r,y:a,z:o}=n;r=this.targetDamperX.update(r,t.x,e,i),a=this.targetDamperY.update(a,t.y,e,i),o=this.targetDamperZ.update(o,t.z,e,i),this.target.position.set(r,a,o),this.target.updateMatrixWorld(),this.queueRender()}}pointTowards(e,t){const{x:n,z:i}=this.position;this.yaw=Math.atan2(e-n,t-i)}set yaw(e){this.rotation.y=e,this.queueRender()}get yaw(){return this.rotation.y}set animationTime(e){this.mixer.setTime(e),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const e=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop===2202&&(1&e)==1?this.duration-this.currentAnimationAction.time:this.currentAnimationAction.time}return 0}set animationTimeScale(e){this.mixer.timeScale=e}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(e=null,t=0,n=2201,i=1/0){if(this._currentGLTF==null)return;const{animations:r}=this;if(r==null||r.length===0)return void console.warn("Cannot play animation (model does not have any animations)");let a=null;if(e!=null&&(a=this.animationsByName.get(e),a==null)){const o=parseInt(e);!isNaN(o)&&o>=0&&o<r.length&&(a=r[o])}a==null&&(a=r[0]);try{const{currentAnimationAction:o}=this,l=this.mixer.clipAction(a,this);this.currentAnimationAction=l,this.element.paused?this.mixer.stopAllAction():(l.paused=!1,o!=null&&l!==o?l.crossFadeFrom(o,t,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),l.setLoop(n,i),l.enabled=!0,l.clampWhenFinished=!0,l.play()}catch(o){console.error(o)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(e){this.mixer.update(e),this.queueShadowRender()}subscribeMixerEvent(e,t){this.mixer.addEventListener(e,t)}updateShadow(){const e=this.shadow;if(e!=null){const t=this.element.arPlacement==="wall"?"back":"bottom";e.setScene(this,this.shadowSoftness,t),e.needsUpdate=!0}}renderShadow(e){const t=this.shadow;t!=null&&t.needsUpdate==1&&(t.render(e,this),t.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(e){if(this.shadowIntensity=e,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(e<=0&&this.shadow==null))){if(this.shadow==null){const t=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new Lx(this,this.shadowSoftness,t)}this.shadow.setIntensity(e)}}setShadowSoftness(e){this.shadowSoftness=e;const t=this.shadow;t!=null&&t.setSoftness(e)}setShadowOffset(e){const t=this.shadow;t!=null&&t.setOffset(e)}get raycaster(){return Px}positionAndNormalFromPoint(e,t=this){this.raycaster.setFromCamera(e,this.getCamera());const n=this.raycaster.intersectObject(t,!0).find(i=>!i.object.userData.shadow);return n==null||n.face==null?null:n.uv==null?{position:n.point,normal:n.face.normal,uv:null}:(n.face.normal.applyNormalMatrix(new Qe().getNormalMatrix(n.object.matrixWorld)),{position:n.point,normal:n.face.normal,uv:n.uv})}addHotspot(e){this.target.add(e),this.annotationRenderer.domElement.appendChild(e.element)}removeHotspot(e){this.target.remove(e)}forHotspots(e){const{children:t}=this.target;for(let n=0,i=t.length;n<i;n++){const r=t[n];r instanceof $f&&e(r)}}updateHotspots(e){this.forHotspots(t=>{Tl.copy(e),Rd.setFromMatrixPosition(t.matrixWorld),Tl.sub(Rd),Cd.copy(t.normal).transformDirection(this.target.matrixWorld),Tl.dot(Cd)<0?t.hide():t.show()})}orientHotspots(e){this.forHotspots(t=>{t.orient(e)})}setHotspotsVisibility(e){this.forHotspots(t=>{t.visible=e})}updateSchema(e){var t;const{schemaElement:n,element:i}=this,{alt:r,poster:a,iosSrc:o}=i;if(e!=null){const l=[{"@type":"MediaObject",contentUrl:e,encodingFormat:((t=e.split(".").pop())===null||t===void 0?void 0:t.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];o&&l.push({"@type":"MediaObject",contentUrl:o,encodingFormat:"model/vnd.usdz+zip"});const h={"@context":"http://schema.org/","@type":"3DModel",image:a!=null?a:void 0,name:r!=null?r:void 0,encoding:l};n.textContent=JSON.stringify(h),document.head.appendChild(n)}else n.parentElement!=null&&n.parentElement.removeChild(n)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const Wr=Symbol("currentEnvironmentMap"),Sa=Symbol("applyEnvironmentMap"),Ga=Symbol("updateEnvironment"),jr=Symbol("cancelEnvironmentUpdate"),El=Symbol("onPreload");class Ix{constructor(e,t,n,i,r){this.xrLight=e,this.renderer=t,this.lightProbe=n,this.xrWebGLBinding=null,this.estimationStartCallback=r,this.frameCallback=this.onXRFrame.bind(this);const a=t.xr.getSession();if(i&&"XRWebGLBinding"in window){const o=new mo(16);e.environment=o.texture;const l=t.getContext();switch(a.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float")}this.xrWebGLBinding=new XRWebGLBinding(a,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}a.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const t=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);t&&(e.__webglTexture=t,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,t){if(!this.xrLight)return;t.session.requestAnimationFrame(this.frameCallback);const n=t.getLightEstimate(this.lightProbe);if(n){this.xrLight.lightProbe.sh.fromArray(n.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const i=Math.max(1,Math.max(n.primaryLightIntensity.x,Math.max(n.primaryLightIntensity.y,n.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(n.primaryLightIntensity.x/i,n.primaryLightIntensity.y/i,n.primaryLightIntensity.z/i),this.xrLight.directionalLight.intensity=i,this.xrLight.directionalLight.position.copy(n.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class Ox extends In{constructor(e,t=!0){super(),this.lightProbe=new To,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new Mc,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let n=null,i=!1;e.xr.addEventListener("sessionstart",()=>{const r=e.xr.getSession();"requestLightProbe"in r&&r.requestLightProbe({reflectionFormat:r.preferredReflectionFormat}).then(a=>{n=new Ix(this,e,a,t,()=>{i=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{n&&(n.dispose(),n=null),i&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{n&&(n.dispose(),n=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=Math.PI/24,Pd=new Q,Ta=(s,e,t)=>{let n=e>0?t>0?0:-Math.PI/2:t>0?Math.PI/2:Math.PI;for(let i=0;i<=12;++i)s.push(e+.17*Math.cos(n),t+.17*Math.sin(n),0,e+.2*Math.cos(n),t+.2*Math.sin(n),0),n+=Nx};class Dd extends pe{constructor(e,t){const n=new Be,i=[],r=[],{size:a,boundingBox:o}=e,l=a.x/2,h=(t==="back"?a.y:a.z)/2;Ta(r,l,h),Ta(r,-l,h),Ta(r,-l,-h),Ta(r,l,-h);const c=r.length/3;for(let p=0;p<c-2;p+=2)i.push(p,p+1,p+3,p,p+3,p+2);const u=c-2;i.push(u,u+1,1,u,1,0),n.setAttribute("position",new nt(r,3)),n.setIndex(i),super(n),this.side=t;const d=this.material;switch(d.side=0,d.transparent=!0,d.opacity=0,this.goalOpacity=0,this.opacityDamper=new Pt,this.hitPlane=new pe(new Fi(2*(l+.2),2*(h+.2))),this.hitPlane.visible=!1,this.add(this.hitPlane),o.getCenter(this.position),t){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=o.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=o.min.z,this.position.z=this.shadowHeight}e.target.add(this),this.offsetHeight=0}getHit(e,t,n){Pd.set(t,-n),this.hitPlane.visible=!0;const i=e.positionAndNormalFromPoint(Pd,this.hitPlane);return this.hitPlane.visible=!1,i==null?null:i.position}getExpandedHit(e,t,n){this.hitPlane.scale.set(1e3,1e3,1e3);const i=this.getHit(e,t,n);return this.hitPlane.scale.set(1,1,1),i}set offsetHeight(e){e-=.001,this.side==="back"?this.position.z=this.shadowHeight+e:this.position.y=this.shadowHeight+e}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(e){this.goalOpacity=e?.75:0}updateOpacity(e){const t=this.material;t.opacity=this.opacityDamper.update(t.opacity,this.goalOpacity,e,1),this.visible=t.opacity>0}dispose(){var e;const{geometry:t,material:n}=this.hitPlane;t.dispose(),n.dispose(),this.geometry.dispose(),this.material.dispose(),(e=this.parent)===null||e===void 0||e.remove(this)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="not-presenting",Kf="session-started",Fx="object-placed",Ux="failed",Qf="tracking",kx="not-tracking",Ea=new E,Bx=new ue,zx=new E,Hx=new lt(45,1,.1,100);class Vx extends Ht{constructor(e){super(),this.renderer=e,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.oldBackground=null,this.oldEnvironment=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new E,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new E,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new E,this.goalYaw=0,this.goalScale=1,this.xDamper=new Pt,this.yDamper=new Pt,this.zDamper=new Pt,this.yawDamper=new Pt,this.scaleDamper=new Pt,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new Dd(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=t=>{const n=this.transientHitTestSource;if(n==null)return;const i=this.frame.getHitTestResultsForTransientInput(n),r=this.presentedScene,a=this.placementBox;if(i.length===1){this.inputSource=t.inputSource;const{axes:o}=this.inputSource.gamepad,l=a.getHit(this.presentedScene,o[0],o[1]);a.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=1.5*o[0])}else if(i.length===2){a.show=!0,this.isTwoFingering=!0;const{separation:o}=this.fingerPolar(i);this.firstRatio=o/r.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=e.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){wd();const e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:{root:this.overlay}});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(e),this.threeRenderer.xr.cameraAutoUpdate=!1,e}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return wd(),await navigator.xr.isSessionSupported("immersive-ar")}catch(e){return console.warn("Request to present in WebXR denied:"),console.warn(e),console.warn("Falling back to next ar-mode"),!1}}async present(e,t=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let n=new Promise((h,c)=>{requestAnimationFrame(()=>h())});e.setHotspotsVisibility(!1),e.queueRender(),await n,this._presentedScene=e,this.overlay=e.element.shadowRoot.querySelector("div.default"),t===!0&&(this.xrLight=new Ox(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const h=this.presentedScene;h.add(this.xrLight),this.oldEnvironment=h.environment,h.environment=this.xrLight.environment}));const i=await this.resolveARSession();i.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const r=e.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");r.classList.add("enabled"),r.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=r;const a=await i.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=e.yaw,this.goalYaw=e.yaw,this.goalScale=1,this.oldBackground=e.background,e.background=null,this.oldShadowIntensity=e.shadowIntensity,e.setShadowIntensity(.01),this.oldTarget.copy(e.getTarget()),e.addEventListener("model-load",this.onUpdateScene);const o=20*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(o),z:-Math.cos(o)});i.requestHitTestSource({space:a,offsetRay:l}).then(h=>{this.initialHitSource=h}),this.currentSession=i,this.placementBox=new Dd(e,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:Kf})}async stopPresenting(){if(!this.isPresenting)return;const e=new Promise(t=>{this.resolveCleanup=t});try{await this.currentSession.end(),await e}catch(t){console.warn("Error while trying to end WebXR AR session"),console.warn(t),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const e=this.presentedScene;if(e!=null){const t=e.getTarget();this.oldTarget.copy(t),this.placeOnWall?t.z=e.boundingBox.min.z:t.y=e.boundingBox.min.y,e.setTarget(t.x,t.y,t.z)}}postSessionCleanup(){const e=this.currentSession;e!=null&&(e.removeEventListener("selectstart",this.onSelectStart),e.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const t=this.presentedScene;if(t!=null){const{element:a}=t;this.xrLight!=null&&(t.remove(this.xrLight),this.oldEnvironment!=null&&(t.environment=this.oldEnvironment,this.oldEnvironment=null),this.xrLight.dispose(),this.xrLight=null),t.position.set(0,0,0),t.scale.set(1,1,1),t.setShadowOffset(0);const o=this.turntableRotation;o!=null&&(t.yaw=o);const l=this.oldShadowIntensity;l!=null&&t.setShadowIntensity(l);const h=this.oldBackground;h!=null&&(t.background=h);const c=this.oldTarget;t.setTarget(c.x,c.y,c.z),t.xrCamera=null,t.removeEventListener("model-load",this.onUpdateScene),t.orientHotspots(0),a.requestUpdate("cameraTarget"),a.requestUpdate("maxCameraOrbit"),a[ks](a.getBoundingClientRect())}this.renderer.height=0;const n=this.exitWebXRButtonContainer;n!=null&&(n.classList.remove("enabled"),n.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const i=this.transientHitTestSource;i!=null&&(i.cancel(),this.transientHitTestSource=null);const r=this.initialHitSource;r!=null&&(r.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.oldBackground=null,this._presentedScene=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:Wa})}updateView(e){const t=this.presentedScene,n=this.threeRenderer.xr;n.updateCamera(Hx),t.xrCamera=n.getCamera();const{elements:i}=t.getCamera().matrixWorld;if(t.orientHotspots(Math.atan2(i[1],i[5])),this.initialized||(this.placeInitially(),this.initialized=!0),e.requestViewportScale&&e.recommendedViewportScale){const a=e.recommendedViewportScale;e.requestViewportScale(Math.max(a,.25))}const r=this.currentSession.renderState.baseLayer.getViewport(e);this.threeRenderer.setViewport(r.x,r.y,r.width,r.height)}placeInitially(){const e=this.presentedScene,{position:t,element:n}=e,i=e.getCamera(),{width:r,height:a}=this.overlay.getBoundingClientRect();e.setSize(r,a),i.projectionMatrixInverse.copy(i.projectionMatrix).invert();const{theta:o,radius:l}=n.getCameraOrbit(),h=i.getWorldDirection(Ea);e.yaw=Math.atan2(-h.x,-h.z)-o,this.goalYaw=e.yaw,t.copy(i.position).add(h.multiplyScalar(l)),this.updateTarget();const c=e.getTarget();t.add(c).sub(this.oldTarget),this.goalPosition.copy(t),e.setHotspotsVisibility(!0);const{session:u}=this.frame;u.addEventListener("selectstart",this.onSelectStart),u.addEventListener("selectend",this.onSelectEnd),u.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(d=>{this.transientHitTestSource=d})}getTouchLocation(){const{axes:e}=this.inputSource.gamepad;let t=this.placementBox.getExpandedHit(this.presentedScene,e[0],e[1]);return t!=null&&(Ea.copy(t).sub(this.presentedScene.getCamera().position),Ea.length()>10)?null:t}getHitPoint(e){const t=this.threeRenderer.xr.getReferenceSpace(),n=e.getPose(t);if(n==null)return null;const i=Bx.fromArray(n.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(i.elements[4],i.elements[6])),i.elements[5]>.75!==this.placeOnWall?zx.setFromMatrixPosition(i):null}moveToFloor(e){const t=this.initialHitSource;if(t==null)return;const n=e.getHitTestResults(t);if(n.length==0)return;const i=n[0],r=this.getHitPoint(i);r!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(r):this.goalPosition.y=r.y),t.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:Fx}))}fingerPolar(e){const t=e[0].inputSource.gamepad.axes,n=e[1].inputSource.gamepad.axes,i=n[0]-t[0],r=n[1]-t[1],a=Math.atan2(r,i);let o=this.lastAngle-a;return o>Math.PI?o-=2*Math.PI:o<-Math.PI&&(o+=2*Math.PI),this.lastAngle=a,{separation:Math.sqrt(i*i+r*r),deltaYaw:o}}processInput(e){const t=this.transientHitTestSource;if(t==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const n=e.getHitTestResultsForTransientInput(t),i=this.presentedScene,r=i.scale.x;if(this.isTwoFingering)if(n.length<2)this.isTwoFingering=!1;else{const{separation:a,deltaYaw:o}=this.fingerPolar(n);if(this.placeOnWall===!1&&(this.goalYaw+=o),i.canScale){const l=a/this.firstRatio;this.goalScale=l<1.3&&l>.7692307692307692?1:l}}else if(n.length!==2)if(this.isRotating){const a=1.5*this.inputSource.gamepad.axes[0];this.goalYaw+=a-this.lastAngle,this.lastAngle=a}else this.isTranslating&&n.forEach(a=>{if(a.inputSource!==this.inputSource)return;let o=null;if(a.results.length>0&&(o=this.getHitPoint(a.results[0])),o==null&&(o=this.getTouchLocation()),o!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=o.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/r,this.presentedScene.setShadowOffset(l);const h=Ea.copy(i.getCamera().position),c=-l/(h.y-o.y);h.multiplyScalar(c),o.multiplyScalar(1-c).add(h)}}this.goalPosition.add(o),this.lastDragPosition.copy(o)}});else{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(n);this.firstRatio=a/r}}moveScene(e){const t=this.presentedScene,{position:n,yaw:i}=t,r=t.boundingSphere.radius,a=this.goalPosition,o=t.scale.x,l=this.placementBox;if(!a.equals(n)||this.goalScale!==o){let{x:h,y:c,z:u}=n;h=this.xDamper.update(h,a.x,e,r),c=this.yDamper.update(c,a.y,e,r),u=this.zDamper.update(u,a.z,e,r),n.set(h,c,u);const d=this.scaleDamper.update(o,this.goalScale,e,1);if(t.scale.set(d,d,d),!this.isTranslating){const p=a.y-c;this.placementComplete&&this.placeOnWall===!1?(l.offsetHeight=p/d,t.setShadowOffset(p)):p===0&&(this.placementComplete=!0,l.show=!1,t.setShadowIntensity(.8))}}l.updateOpacity(e),t.updateTarget(e),t.yaw=this.yawDamper.update(i,this.goalYaw,e,Math.PI)}onWebXRFrame(e,t){this.frame=t,++this.frames;const n=this.threeRenderer.xr.getReferenceSpace(),i=t.getViewerPose(n);i==null&&this.tracking===!0&&this.frames>30&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:kx}));const r=this.presentedScene;if(i==null||r==null||!r.element[Ri]())return void this.threeRenderer.clear();this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:Qf}));let a=!0;for(const o of i.views){if(this.updateView(o),a){this.moveToFloor(t),this.processInput(t);const l=e-this.lastTick;this.moveScene(l),this.renderer.preRender(r,e,l),this.lastTick=e,r.renderShadow(this.threeRenderer)}this.threeRenderer.render(r,r.getCamera()),a=!1}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){e.threeRenderer.debug={checkShaderErrors:!0},Promise.resolve().then(()=>{self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug",{detail:{renderer:e,THREE:{ShaderMaterial:St,Texture:Ye,Mesh:pe,Scene:un,PlaneBufferGeometry:Fi,OrthographicCamera:Ui,WebGLRenderTarget:pt}}}))})}addScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug",{detail:{scene:e}}))}removeScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug",{detail:{scene:e}}))}}function Wx(s){const e=new Map,t=new Map,n=s.clone();return eg(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function eg(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)eg(s.children[n],e.children[n],t)}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=Symbol("prepared"),io=Symbol("prepare"),tn=Symbol("preparedGLTF"),ro=Symbol("clone");class jx{constructor(e){this[tn]=e}static prepare(e){if(e.scene==null)throw new Error("Model does not have a scene");if(e[Id])return e;const t=this[io](e);return t[Id]=!0,t}static[io](e){const{scene:t}=e,n=[t];return Object.assign(Object.assign({},e),{scene:t,scenes:n})}get parser(){return this[tn].parser}get animations(){return this[tn].animations}get scene(){return this[tn].scene}get scenes(){return this[tn].scenes}get cameras(){return this[tn].cameras}get asset(){return this[tn].asset}get userData(){return this[tn].userData}clone(){return new this.constructor(this[ro]())}dispose(){this.scenes.forEach(e=>{e.traverse(t=>{if(!t.isMesh)return;const n=t;(Array.isArray(n.material)?n.material:[n.material]).forEach(i=>{for(const r in i){const a=i[r];a instanceof Ye&&a.dispose()}i.dispose()}),n.geometry.dispose()})})}[ro](){const e=this[tn],t=Wx(this.scene);qx(t,this.scene);const n=[t],i=e.userData?Object.assign({},e.userData):{};return Object.assign(Object.assign({},e),{scene:t,scenes:n,userData:i})}}const qx=(s,e)=>{tg(s,e,(t,n)=>{n.userData.variantMaterials!==void 0&&(t.userData.variantMaterials=new Map(n.userData.variantMaterials)),n.userData.variantData!==void 0&&(t.userData.variantData=n.userData.variantData),n.userData.originalMaterial!==void 0&&(t.userData.originalMaterial=n.userData.originalMaterial)})},tg=(s,e,t)=>{t(s,e);for(let n=0;n<s.children.length;n++)tg(s.children[n],e.children[n],t)},Od=Symbol("threeGLTF"),Nd=Symbol("gltf"),Fd=Symbol("gltfElementMap"),Ud=Symbol("threeObjectMap"),kd=Symbol("parallelTraverseThreeScene"),Bd=Symbol("correlateOriginalThreeGLTF"),zd=Symbol("correlateCloneThreeGLTF");class Us{constructor(e,t,n,i){this[Od]=e,this[Nd]=t,this[Fd]=i,this[Ud]=n}static from(e,t){return t!=null?this[zd](e,t):this[Bd](e)}static[Bd](e){const t=e.parser.json,n=e.parser.associations,i=new Map,r={name:"Default"},a={type:"materials",index:-1};for(const o of n.keys())o instanceof qe&&n.get(o)==null&&(a.index<0&&(t.materials==null&&(t.materials=[]),a.index=t.materials.length,t.materials.push(r)),o.name=r.name,n.set(o,{materials:a.index}));for(const[o,l]of n){if(l){const h=o;h.userData=h.userData||{},h.userData.associations=l}for(const h in l)if(h!=null&&h!=="primitives"){const c=h,u=(t[c]||[])[l[c]];if(u==null)continue;let d=i.get(u);d==null&&(d=new Set,i.set(u,d)),d.add(o)}}return new Us(e,t,n,i)}static[zd](e,t){const n=t.threeGLTF,i=t.gltf,r=JSON.parse(JSON.stringify(i)),a=new Map,o=new Map;for(let l=0;l<n.scenes.length;l++)this[kd](n.scenes[l],e.scenes[l],(h,c)=>{const u=t.threeObjectMap.get(h);if(u!=null){for(const d in u)if(d!=null&&d!=="primitives"){const p=d,m=u[p],g=r[p][m],v=a.get(c)||{};v[p]=m,a.set(c,v);const f=o.get(g)||new Set;f.add(c),o.set(g,f)}}});return new Us(e,r,a,o)}static[kd](e,t,n){const i=(r,a)=>{if(n(r,a),r.isObject3D){if(r.isMesh)if(Array.isArray(r.material))for(let o=0;o<r.material.length;++o)i(r.material[o],a.material[o]);else i(r.material,a.material);for(let o=0;o<r.children.length;++o)i(r.children[o],a.children[o])}};i(e,t)}get threeGLTF(){return this[Od]}get gltf(){return this[Nd]}get gltfElementMap(){return this[Fd]}get threeObjectMap(){return this[Ud]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=Symbol("correlatedSceneGraph");class Xx extends jx{static[io](e){const t=super[io](e);t[Aa]==null&&(t[Aa]=Us.from(t));const{scene:n}=t,i=new Bn(void 0,1/0);return n.traverse(r=>{r.renderOrder=1e3,r.frustumCulled=!1,r.name||(r.name=r.uuid);const a=r;if(a.isMesh){a.castShadow=!0,a.isSkinnedMesh&&(a.geometry.boundingSphere=i,a.geometry.boundingBox=null);const o=a.material;o.isMeshBasicMaterial===!0&&(o.toneMapped=!1),o.shadowSide=0}}),t}get correlatedSceneGraph(){return this[tn][Aa]}[ro](){const e=super[ro](),t=new Map;return e.scene.traverse(n=>{if(n.isMesh){const i=n,r=i.material;if(r!=null){if(t.has(r.uuid))return void(i.material=t.get(r.uuid));i.material=r.clone(),t.set(r.uuid,i.material)}}}),e[Aa]=Us.from(e,this.correlatedSceneGraph),e}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx extends un{constructor(){super(),this.position.y=-3.5;const e=new oi;e.deleteAttribute("uv");const t=new dn({metalness:0,side:1}),n=new dn({metalness:0}),i=new So(16777215,500,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new pe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new pe(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new pe(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new pe(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new pe(e,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const c=new pe(e,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const u=new pe(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new pe(e,this.createAreaLightMaterial(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new pe(e,this.createAreaLightMaterial(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const m=new pe(e,this.createAreaLightMaterial(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const g=new pe(e,this.createAreaLightMaterial(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const v=new pe(e,this.createAreaLightMaterial(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const f=new pe(e,this.createAreaLightMaterial(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}createAreaLightMaterial(e){const t=new Dt;return t.color.setScalar(e),t}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx extends un{constructor(){super(),this.position.y=-3.5;const e=new oi;e.deleteAttribute("uv");const t=new dn({metalness:0,side:1}),n=new dn({metalness:0}),i=new So(16777215,400,28,2);i.position.set(.5,14,.5),this.add(i);const r=new pe(e,t);r.position.set(0,13.2,0),r.scale.set(31.5,28.5,31.5),this.add(r);const a=new pe(e,n);a.position.set(-10.906,-1,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new pe(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new pe(e,n);l.position.set(6.167,-.16,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new pe(e,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const c=new pe(e,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const u=new pe(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new pe(e,this.createAreaLightMaterial(80));d.position.set(-14,10,8),d.scale.set(.1,2.5,2.5),this.add(d);const p=new pe(e,this.createAreaLightMaterial(80));p.position.set(-14,14,-4),p.scale.set(.1,2.5,2.5),this.add(p);const m=new pe(e,this.createAreaLightMaterial(23));m.position.set(14,12,0),m.scale.set(.1,5,5),this.add(m);const g=new pe(e,this.createAreaLightMaterial(16));g.position.set(0,9,14),g.scale.set(5,5,.1),this.add(g);const v=new pe(e,this.createAreaLightMaterial(80));v.position.set(7,8,-14),v.scale.set(2.5,2.5,.1),this.add(v);const f=new pe(e,this.createAreaLightMaterial(80));f.position.set(-7,16,-14),f.scale.set(2.5,2.5,.1),this.add(f);const b=new pe(e,this.createAreaLightMaterial(1));b.position.set(0,20,0),b.scale.set(.1,.1,.1),this.add(b)}createAreaLightMaterial(e){const t=new Dt;return t.color.setScalar(e),t}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=/\.hdr(\.js)?$/,$x=new Mo,ng=new class extends vy{constructor(s){super(s),this.type=1016}parse(s){const e=function(o,l){switch(o){case 1:console.error("THREE.RGBELoader Read Error: "+(l||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(l||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(l||""));break;default:console.error("THREE.RGBELoader: Error: "+(l||""))}return-1},t=function(o,l,h){l=l||1024;let c=o.pos,u=-1,d=0,p="",m=String.fromCharCode.apply(null,new Uint16Array(o.subarray(c,c+128)));for(;0>(u=m.indexOf(`
`))&&d<l&&c<o.byteLength;)p+=m,d+=m.length,c+=128,m+=String.fromCharCode.apply(null,new Uint16Array(o.subarray(c,c+128)));return-1<u&&(h!==!1&&(o.pos+=d+u+1),p+m.slice(0,u))},n=function(o,l,h,c){const u=o[l+3],d=Math.pow(2,u-128)/255;h[c+0]=o[l+0]*d,h[c+1]=o[l+1]*d,h[c+2]=o[l+2]*d,h[c+3]=1},i=function(o,l,h,c){const u=o[l+3],d=Math.pow(2,u-128)/255;h[c+0]=_a.toHalfFloat(Math.min(o[l+0]*d,65504)),h[c+1]=_a.toHalfFloat(Math.min(o[l+1]*d,65504)),h[c+2]=_a.toHalfFloat(Math.min(o[l+2]*d,65504)),h[c+3]=_a.toHalfFloat(1)},r=new Uint8Array(s);r.pos=0;const a=function(o){const l=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,h=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,c=/^\s*FORMAT=(\S+)\s*$/,u=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,d={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let p,m;if(o.pos>=o.byteLength||!(p=t(o)))return e(1,"no header found");if(!(m=p.match(/^#\?(\S+)/)))return e(3,"bad initial token");for(d.valid|=1,d.programtype=m[1],d.string+=p+`
`;p=t(o),p!==!1;)if(d.string+=p+`
`,p.charAt(0)!=="#"){if((m=p.match(l))&&(d.gamma=parseFloat(m[1])),(m=p.match(h))&&(d.exposure=parseFloat(m[1])),(m=p.match(c))&&(d.valid|=2,d.format=m[1]),(m=p.match(u))&&(d.valid|=4,d.height=parseInt(m[1],10),d.width=parseInt(m[2],10)),2&d.valid&&4&d.valid)break}else d.comments+=p+`
`;return 2&d.valid?4&d.valid?d:e(3,"missing image size specifier"):e(3,"missing format specifier")}(r);if(a!==-1){const o=a.width,l=a.height,h=function(c,u,d){const p=u;if(p<8||p>32767||c[0]!==2||c[1]!==2||128&c[2])return new Uint8Array(c);if(p!==(c[2]<<8|c[3]))return e(3,"wrong scanline width");const m=new Uint8Array(4*u*d);if(!m.length)return e(4,"unable to allocate buffer space");let g=0,v=0;const f=4*p,b=new Uint8Array(4),x=new Uint8Array(f);let y=d;for(;y>0&&v<c.byteLength;){if(v+4>c.byteLength)return e(1);if(b[0]=c[v++],b[1]=c[v++],b[2]=c[v++],b[3]=c[v++],b[0]!=2||b[1]!=2||(b[2]<<8|b[3])!=p)return e(3,"bad rgbe scanline format");let _,M=0;for(;M<f&&v<c.byteLength;){_=c[v++];const D=_>128;if(D&&(_-=128),_===0||M+_>f)return e(3,"bad scanline data");if(D){const P=c[v++];for(let I=0;I<_;I++)x[M++]=P}else x.set(c.subarray(v,v+_),M),M+=_,v+=_}const S=p;for(let D=0;D<S;D++){let P=0;m[g]=x[D+P],P+=p,m[g+1]=x[D+P],P+=p,m[g+2]=x[D+P],P+=p,m[g+3]=x[D+P],g+=4}y--}return m}(r.subarray(r.pos),o,l);if(h!==-1){let c,u,d,p;switch(this.type){case 1015:p=h.length/4;const m=new Float32Array(4*p);for(let v=0;v<p;v++)n(h,4*v,m,4*v);c=m,d=1015;break;case 1016:p=h.length/4;const g=new Uint16Array(4*p);for(let v=0;v<p;v++)i(h,4*v,g,4*v);c=g,d=1016;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:o,height:l,data:c,header:a.string,gamma:a.gamma,exposure:a.exposure,format:u,type:d}}}return null}setDataType(s){return this.type=s,this}load(s,e,t,n){return super.load(s,function(i,r){switch(i.type){case 1015:case 1016:i.encoding=3e3,i.minFilter=1006,i.magFilter=1006,i.generateMipmaps=!1,i.flipY=!0}e&&e(i,r)},t,n)}};ng.setDataType(1016);class Hd extends Ht{constructor(e){super(),this.threeRenderer=e,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}async load(e,t=()=>{}){try{const n=Zx.test(e),i=n?ng:$x,r=await new Promise((a,o)=>i.load(e,a,l=>{t(l.loaded/l.total*.9)},o));return t(1),r.name=e,r.mapping=303,n||(r.encoding=3001),r}finally{t&&t(1)}}async generateEnvironmentMapAndSkybox(e=null,t=null,n={}){const{progressTracker:i}=n,r=t==="neutral";r===!0&&(t=null),t=Xf(t);let a,o=Promise.resolve(null);e&&(o=this.loadEquirectFromUrl(e,i)),a=t?this.loadEquirectFromUrl(t,i):e?this.loadEquirectFromUrl(e,i):r===!0?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();let[l,h]=await Promise.all([a,o]);if(l==null)throw new Error("Failed to load environment map.");return{environmentMap:l,skybox:h}}async loadEquirectFromUrl(e,t){if(!this.skyboxCache.has(e)){const n=t?t.beginActivity():()=>{},i=this.load(e,n);this.skyboxCache.set(e,i)}return this.skyboxCache.get(e)}async GenerateEnvironmentMap(e,t){await Jf();const n=this.threeRenderer,i=new mo(256,{generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!0}),r=new Ls(.1,100,i),a=r.renderTarget.texture;a.name=t;const o=n.outputEncoding,l=n.toneMapping;return n.toneMapping=0,n.outputEncoding=3e3,r.update(n,e),this.blurCubemap(i,.04),n.toneMapping=l,n.outputEncoding=o,a}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new Yx,"default")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new Jx,"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(e,t){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(20);const i=new oi,r=new pe(i,this.blurMaterial);this.blurScene=new un,this.blurScene.add(r)}const n=e.clone();this.halfblur(e,n,t,"latitudinal"),this.halfblur(n,e,t,"longitudinal")}halfblur(e,t,n,i){const r=e.width,a=isFinite(n)?Math.PI/(2*r):2*Math.PI/39,o=n/a,l=isFinite(n)?1+Math.floor(3*o):20;l>20&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${l} samples when the maximum is set to 20`);const h=[];let c=0;for(let d=0;d<20;++d){const p=d/o,m=Math.exp(-p*p/2);h.push(m),d==0?c+=m:d<l&&(c+=2*m)}for(let d=0;d<h.length;d++)h[d]=h[d]/c;const u=this.blurMaterial.uniforms;u.envMap.value=e.texture,u.samples.value=l,u.weights.value=h,u.latitudinal.value=i==="latitudinal",u.dTheta.value=a,new Ls(.1,100,t).update(this.threeRenderer,this.blurScene)}getBlurShader(e){const t=new Float32Array(e),n=new E(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:n}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,blending:0,depthTest:!1,depthWrite:!1,side:1})}async dispose(){for(const[,e]of this.skyboxCache)(await e).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=[1,.79,.62,.5,.4,.31,.25];class kn extends Ht{constructor(e){super(),this.loader=new ot(Xx),this.width=0,this.height=0,this.dpr=1,this.debugger=null,this.scenes=new Set,this.multipleScenesVisible=!1,this.scaleStep=0,this.lastStep=3,this.avgFrameDuration=22,this.onWebGLContextLost=t=>{this.dispatchEvent({type:"contextlost",sourceEvent:t})},this.onWebGLContextRestored=()=>{var t;(t=this.textureUtils)===null||t===void 0||t.dispose(),this.textureUtils=new Hd(this.threeRenderer);for(const n of this.scenes)n.element[Ga]()},this.dpr=qh(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas";try{this.threeRenderer=new Ne({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:e.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.outputEncoding=3001,this.threeRenderer.physicallyCorrectLights=!0,this.threeRenderer.setPixelRatio(1),this.debugger=e.debug?new Gx(this):null,this.threeRenderer.debug={checkShaderErrors:!!this.debugger},this.threeRenderer.toneMapping=4}catch(t){console.warn(t)}this.arRenderer=new Vx(this),this.textureUtils=this.canRender?new Hd(this.threeRenderer):null,ot.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize(),this.lastTick=performance.now(),this.avgFrameDuration=0}static get singleton(){return this._singleton}static resetSingleton(){const e=this._singleton.dispose();for(const t of e)t.disconnectedCallback();this._singleton=new kn({powerPreference:(self.ModelViewerElement||{}).powerPreference||"high-performance",debug:Yf()});for(const t of e)t.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return Ra[this.scaleStep]}set minScale(e){let t=1;for(;t<Ra.length&&!(Ra[t]<e);)++t;this.lastStep=t-1}updateRendererSize(){const e=qh();if(e!==this.dpr)for(const o of this.scenes){const{element:l}=o;l[dr](l.getBoundingClientRect())}let t=0,n=0;for(const o of this.scenes)t=Math.max(t,o.width),n=Math.max(n,o.height);if(t===this.width&&n===this.height&&e===this.dpr)return;this.width=t,this.height=n,this.dpr=e,this.canRender&&this.threeRenderer.setSize(t*e,n*e,!1);const i=this.scaleFactor,r=t/i,a=n/i;this.canvas3D.style.width=`${r}px`,this.canvas3D.style.height=`${a}px`;for(const o of this.scenes){const{canvas:l}=o;l.width=Math.round(t*e),l.height=Math.round(n*e),l.style.width=`${r}px`,l.style.height=`${a}px`,o.queueRender()}}updateRendererScale(){const e=this.scaleStep;if(this.avgFrameDuration>26?++this.scaleStep:this.avgFrameDuration<18&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),e==this.scaleStep)return;const t=this.scaleFactor;this.avgFrameDuration=22;const n=this.width/t,i=this.height/t;this.canvas3D.style.width=`${n}px`,this.canvas3D.style.height=`${i}px`;for(const r of this.scenes){const{style:a}=r.canvas;a.width=`${n}px`,a.height=`${i}px`,r.queueRender(),this.dispatchRenderScale(r)}}dispatchRenderScale(e){const t=this.scaleFactor,n=this.dpr*t,i=t<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";e.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:n,minimumDpr:this.dpr*Ra[this.lastStep],pixelWidth:Math.ceil(e.width*n),pixelHeight:Math.ceil(e.height*n),reason:i}}))}registerScene(e){this.scenes.add(e);const{canvas:t}=e,n=this.scaleFactor;t.width=Math.round(this.width*this.dpr),t.height=Math.round(this.height*this.dpr),t.style.width=this.width/n+"px",t.style.height=this.height/n+"px",this.multipleScenesVisible&&t.classList.add("show"),e.queueRender(),this.dispatchRenderScale(e),this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((i,r)=>this.render(i,r)),this.debugger!=null&&this.debugger.addScene(e)}unregisterScene(e){this.scenes.delete(e),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null),this.debugger!=null&&this.debugger.removeScene(e)}displayCanvas(e){return this.multipleScenesVisible?e.element[ao]:this.canvas3D}selectCanvas(){let e=0,t=null;for(const r of this.scenes){const{element:a}=r;a.modelIsVisible&&r.externalRenderer==null&&(++e,t=r.canvas)}if(t==null)return;const n=e>1,{canvas3D:i}=this;if(n!==this.multipleScenesVisible||!n&&i.parentElement!==t.parentElement){this.multipleScenesVisible=n,n&&i.classList.remove("show");for(const r of this.scenes){if(r.externalRenderer!=null)continue;const a=r.element[ao];n?(a.classList.add("show"),r.queueRender()):r.canvas===t&&(r.canvas.parentElement.appendChild(i),i.classList.add("show"),a.classList.remove("show"),r.queueRender())}}}orderedScenes(){const e=[];for(const t of[!1,!0])for(const n of this.scenes)n.element.modelIsVisible===t&&e.push(n);return e}get isPresenting(){return this.arRenderer.isPresenting}preRender(e,t,n){const{element:i,exposure:r}=e;i[nn](t,n);const a=typeof r=="number"&&!self.isNaN(r);this.threeRenderer.toneMappingExposure=a?r:1}render(e,t){if(t!=null)return void this.arRenderer.onWebXRFrame(e,t);const n=e-this.lastTick;if(this.lastTick=e,!this.canRender||this.isPresenting)return;this.avgFrameDuration+=Ei(.2*(n-this.avgFrameDuration),-2,2),this.selectCanvas(),this.updateRendererSize(),this.updateRendererScale();const{dpr:i,scaleFactor:r}=this;for(const a of this.orderedScenes()){const{element:o}=a;if(!o.modelIsVisible&&a.renderCount>0||(this.preRender(a,e,n),!a.shouldRender()))continue;if(a.externalRenderer!=null){const c=a.getCamera();c.updateMatrix();const{matrix:u,projectionMatrix:d}=c,p=u.elements.slice(),m=a.getTarget();p[12]+=m.x,p[13]+=m.y,p[14]+=m.z,a.externalRenderer.render({viewMatrix:p,projectionMatrix:d.elements});continue}if(!o.modelIsVisible&&!this.multipleScenesVisible)for(const c of this.scenes)c.element.modelIsVisible&&c.queueRender();const l=Math.min(Math.ceil(a.width*r*i),this.canvas3D.width),h=Math.min(Math.ceil(a.height*r*i),this.canvas3D.height);if(a.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.floor(this.height*i)-h,l,h),this.threeRenderer.render(a,a.camera),this.multipleScenesVisible){a.context==null&&a.createContext();const c=a.context;c.clearRect(0,0,l,h),c.drawImage(this.canvas3D,0,0,l,h,0,0,l,h)}a.hasRendered(),o.loaded&&++a.renderCount}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const e=[];for(const t of this.scenes)e.push(t.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),e}}kn._singleton=new kn({powerPreference:(self.ModelViewerElement||{}).powerPreference||"high-performance",debug:Yf()});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(){const e={progress:0,completed:!1};return this.ongoingActivities.add(e),this.ongoingActivityCount===1&&this.announceTotalProgress(e,0),t=>{let n;return n=Math.max(Ei(t,0,1),e.progress),n!==e.progress&&this.announceTotalProgress(e,n),e.progress}}announceTotalProgress(e,t){let n=0,i=0;t==1&&(e.completed=!0);for(const o of this.ongoingActivities){const{progress:l}=o;n+=1-l,o.completed===!0&&i++}const r=e.progress;e.progress=t,this.totalProgress+=(t-r)*(1-this.totalProgress)/n;const a=i===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:a}})),i===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vd,Gd,Wd,jd,qd,Xd,Yd,Jd,Zd,$d,Kd,Qd,Al=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const Nt=document.createElement("canvas"),Rl=Symbol("fallbackResizeHandler"),ep=Symbol("defaultAriaLabel"),Ca=Symbol("resizeObserver"),qr=Symbol("clearModelTimeout"),Cl=Symbol("onContextLost"),pi=Symbol("loaded"),tp=Symbol("status"),Ll=Symbol("onFocus"),Pl=Symbol("onBlur"),dr=Symbol("updateSize"),La=Symbol("intersectionObserver"),wi=Symbol("isElementInViewport"),so=Symbol("announceModelVisibility"),ws=Symbol("ariaLabel"),Xh=Symbol("altDefaulted"),Xr=Symbol("statusElement"),Yh=Symbol("updateStatus"),ps=Symbol("loadedTime"),sn=Symbol("updateSource"),np=Symbol("markLoaded"),Ms=Symbol("container"),ti=Symbol("input"),ao=Symbol("canvas"),te=Symbol("scene"),bt=Symbol("needsRender"),nn=Symbol("tick"),rn=Symbol("onModelLoad"),ks=Symbol("onResize"),ke=Symbol("renderer"),vr=Symbol("progressTracker"),ip=Symbol("getLoaded"),oo=Symbol("getModelIsVisible"),Ai=Symbol("shouldAttemptPreload"),Ri=Symbol("sceneIsReady"),pr=Symbol("hasTransitioned"),Pa=s=>({x:s.x,y:s.y,z:s.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),Qx=s=>({u:s.x,v:s.y,toString(){return`${this.u} ${this.v}`}});class ja extends rc{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this[Vd]=!1,this[Gd]=!1,this[Wd]=0,this[jd]=null,this[qd]=Md(()=>{const i=this.getBoundingClientRect();this[dr](i)},50),this[Xd]=Md(i=>{const r=this.modelIsVisible;r!==i&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:r}}))},0),this[Yd]=null,this[Jd]=null,this[Zd]=new Kx,this[$d]=()=>{this[Xr].textContent=this[tp]},this[Kd]=()=>{this[Xr].textContent=""},this[Qd]=i=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:i.sourceEvent}}))},this.attachShadow({mode:"open"});const e=this.shadowRoot;let t,n;if((i=>{Hm(Ny,i)})(e),this[Ms]=e.querySelector(".container"),this[ti]=e.querySelector(".userInput"),this[ao]=e.querySelector("canvas"),this[Xr]=e.querySelector("#status"),this[ep]=this[ti].getAttribute("aria-label"),this.isConnected){const i=this.getBoundingClientRect();t=i.width,n=i.height}else t=300,n=150;this[te]=new Dx({canvas:this[ao],element:this,width:t,height:n}),this[te].addEventListener("model-load",async i=>{this[np](),this[rn](),await Jf(),this.dispatchEvent(new CustomEvent("load",{detail:{url:i.url}}))}),Promise.resolve().then(()=>{this[dr](this.getBoundingClientRect())}),fl&&(this[Ca]=new ResizeObserver(i=>{if(!this[ke].isPresenting)for(let r of i)r.target===this&&this[dr](r.contentRect)})),gl?this[La]=new IntersectionObserver(i=>{for(let r of i)if(r.target===this){const a=this.modelIsVisible;this[wi]=r.isIntersecting,this[so](a),this[wi]&&!this[Ri]()&&this[sn]()}},{root:null,rootMargin:"0px",threshold:0}):this[wi]=!0}static get is(){return"model-viewer"}static set modelCacheSize(e){ot[Qn].evictionThreshold=e}static get modelCacheSize(){return ot[Qn].evictionThreshold}static set minimumRenderScale(e){e>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),e<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),kn.singleton.minScale=e}static get minimumRenderScale(){return kn.singleton.minScale}get loaded(){return this[ip]()}get[(Vd=wi,Gd=pi,Wd=ps,jd=qr,qd=Rl,Xd=so,Yd=Ca,Jd=La,Zd=vr,ke)](){return kn.singleton}get modelIsVisible(){return this[oo]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),fl?this[Ca].observe(this):self.addEventListener("resize",this[Rl]),gl&&this[La].observe(this),this.addEventListener("focus",this[Ll]),this.addEventListener("blur",this[Pl]);const e=this[ke];e.addEventListener("contextlost",this[Cl]),e.registerScene(this[te]),this[qr]!=null&&(self.clearTimeout(this[qr]),this[qr]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),fl?this[Ca].unobserve(this):self.removeEventListener("resize",this[Rl]),gl&&this[La].unobserve(this),this.removeEventListener("focus",this[Ll]),this.removeEventListener("blur",this[Pl]);const e=this[ke];e.removeEventListener("contextlost",this[Cl]),e.unregisterScene(this[te]),this[qr]=self.setTimeout(()=>{this[te].reset()},1e3)}updated(e){super.updated(e),e.has("src")&&(this.src==null?(this[pi]=!1,this[ps]=0,this[te].reset()):this.src!==this[te].url&&(this[pi]=!1,this[ps]=0,this[sn]())),e.has("alt")&&this[ti].setAttribute("aria-label",this[ws]),e.has("withCredentials")&&(ot.withCredentials=this.withCredentials)}toDataURL(e,t){return this[ke].displayCanvas(this[te]).toDataURL(e,t)}async toBlob(e){const t=e?e.mimeType:void 0,n=e?e.qualityArgument:void 0,i=e?e.idealAspect:void 0,{width:r,height:a,idealAspect:o,aspect:l}=this[te],{dpr:h,scaleFactor:c}=this[ke];let u=r*c*h,d=a*c*h,p=0,m=0;if(i===!0)if(o>l){const g=d;d=Math.round(u/o),m=(g-d)/2}else{const g=u;u=Math.round(d*o),p=(g-u)/2}Nt.width=u,Nt.height=d;try{return new Promise(async(g,v)=>(Nt.getContext("2d").drawImage(this[ke].displayCanvas(this[te]),p,m,u,d,0,0,u,d),!Nt.msToBlob||t&&t!=="image/png"?Nt.toBlob?void Nt.toBlob(f=>{if(!f)return v(new Error("Unable to retrieve canvas blob"));g(f)},t,n):g(await(async f=>new Promise((b,x)=>{const y=f.match(/data:(.*);/);if(!y)return x(new Error(`${f} is not a valid data Url`));const _=y[1],M=f.replace(/data:image\/\w+;base64,/,""),S=atob(M),D=[];for(let P=0;P<S.length;P+=512){const I=S.slice(P,P+512),F=new Array(I.length);for(let W=0;W<I.length;W++)F[W]=I.charCodeAt(W);const B=new Uint8Array(F);D.push(B)}b(new Blob(D,{type:_}))}))(Nt.toDataURL(t,n))):g(Nt.msToBlob())))}finally{this[dr]({width:r,height:a})}}registerRenderer(e){this[te].externalRenderer=e}unregisterRenderer(){this[te].externalRenderer=null}get[ws](){return this[Xh]}get[Xh](){return this.alt==null||this.alt==="null"?this[ep]:this.alt}[ip](){return this[pi]}[oo](){return this.loaded&&this[wi]}[pr](){return this.modelIsVisible}[Ai](){return!!this.src&&this[wi]}[Ri](){return this[pi]}[dr]({width:e,height:t}){this[Ms].style.width=`${e}px`,this[Ms].style.height=`${t}px`,this[ks]({width:parseFloat(e),height:parseFloat(t)})}[nn](e,t){}[np](){this[pi]||(this[pi]=!0,this[ps]=performance.now())}[bt](){this[te].queueRender()}[rn](){}[Yh](e){this[tp]=e;const t=this.getRootNode();t!=null&&t.activeElement===this&&this[Xr].textContent!=e&&(this[Xr].textContent=e)}[($d=Ll,Kd=Pl,ks)](e){this[te].setSize(e.width,e.height)}async[(Qd=Cl,sn)](){if(this.loaded||!this[Ai]())return;const e=this[vr].beginActivity(),t=this.src;try{await this[te].setSource(t,i=>e(.95*i));const n={url:t};this.dispatchEvent(new CustomEvent("preload",{detail:n}))}catch(n){this.dispatchEvent(new CustomEvent("error",{detail:n}))}finally{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(1)})})}}}Al([ge({type:String})],ja.prototype,"alt",void 0),Al([ge({type:String})],ja.prototype,"src",void 0),Al([ge({type:Boolean,attribute:"with-credentials"})],ja.prototype,"withCredentials",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dl=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const Il=Symbol("changeAnimation"),Sn=Symbol("paused"),eb={repetitions:1/0,pingpong:!1},tr=Symbol("hotspotMap"),Ol=Symbol("mutationCallback"),Yr=Symbol("observer"),Nl=Symbol("addHotspot"),rp=Symbol("removeHotspot"),Fl=new ue,sp=new Qe;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var ap=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(ap(""))}catch{ap=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Mt=Uint8Array,_t=Uint16Array,Mr=Uint32Array,Tc=new Mt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ec=new Mt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),op=new Mt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ig=function(s,e){for(var t=new _t(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];var i=new Mr(t[30]);for(n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},rg=ig(Tc,2),tb=rg[0],Jh=rg[1];tb[28]=258,Jh[258]=28;for(var lp=ig(Ec,0)[1],Zh=new _t(32768),Ve=0;Ve<32768;++Ve){var mi=(43690&Ve)>>>1|(21845&Ve)<<1;mi=(61680&(mi=(52428&mi)>>>2|(13107&mi)<<2))>>>4|(3855&mi)<<4,Zh[Ve]=((65280&mi)>>>8|(255&mi)<<8)>>>1}var Ss=function(s,e,t){for(var n=s.length,i=0,r=new _t(e);i<n;++i)++r[s[i]-1];var a,o=new _t(e);for(i=0;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;if(t){a=new _t(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var h=i<<4|s[i],c=e-s[i],u=o[s[i]-1]++<<c,d=u|(1<<c)-1;u<=d;++u)a[Zh[u]>>>l]=h}else for(a=new _t(n),i=0;i<n;++i)s[i]&&(a[i]=Zh[o[s[i]-1]++]>>>15-s[i]);return a},Ni=new Mt(288);for(Ve=0;Ve<144;++Ve)Ni[Ve]=8;for(Ve=144;Ve<256;++Ve)Ni[Ve]=9;for(Ve=256;Ve<280;++Ve)Ni[Ve]=7;for(Ve=280;Ve<288;++Ve)Ni[Ve]=8;var lo=new Mt(32);for(Ve=0;Ve<32;++Ve)lo[Ve]=5;var nb=Ss(Ni,9,0),ib=Ss(lo,5,0),sg=function(s){return(s/8|0)+(7&s&&1)},ag=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof _t?_t:s instanceof Mr?Mr:Mt)(t-e);return n.set(s.subarray(e,t)),n},Tn=function(s,e,t){t<<=7&e;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8},Jr=function(s,e,t){t<<=7&e;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8,s[n+2]|=t>>>16},Ul=function(s,e){for(var t=[],n=0;n<s.length;++n)s[n]&&t.push({s:n,f:s[n]});var i=t.length,r=t.slice();if(!i)return[Ac,0];if(i==1){var a=new Mt(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(_,M){return _.f-M.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],h=0,c=1,u=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};c!=i-1;)o=t[t[h].f<t[u].f?h++:u++],l=t[h!=c&&t[h].f<t[u].f?h++:u++],t[c++]={s:-1,f:o.f+l.f,l:o,r:l};var d=r[0].s;for(n=1;n<i;++n)r[n].s>d&&(d=r[n].s);var p=new _t(d+1),m=$h(t[c-1],p,0);if(m>e){n=0;var g=0,v=m-e,f=1<<v;for(r.sort(function(_,M){return p[M.s]-p[_.s]||_.f-M.f});n<i;++n){var b=r[n].s;if(!(p[b]>e))break;g+=f-(1<<m-p[b]),p[b]=e}for(g>>>=v;g>0;){var x=r[n].s;p[x]<e?g-=1<<e-p[x]++-1:++n}for(;n>=0&&g;--n){var y=r[n].s;p[y]==e&&(--p[y],++g)}m=e}return[new Mt(p),m]},$h=function(s,e,t){return s.s==-1?Math.max($h(s.l,e,t+1),$h(s.r,e,t+1)):e[s.s]=t},hp=function(s){for(var e=s.length;e&&!s[--e];);for(var t=new _t(++e),n=0,i=s[0],r=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(s[o]==i&&o!=e)++r;else{if(!i&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(i),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(i);r=1,i=s[o]}return[t.subarray(0,n),e]},Zr=function(s,e){for(var t=0,n=0;n<e.length;++n)t+=s[n]*e[n];return t},qa=function(s,e,t){var n=t.length,i=sg(e+2);s[i]=255&n,s[i+1]=n>>>8,s[i+2]=255^s[i],s[i+3]=255^s[i+1];for(var r=0;r<n;++r)s[i+r+4]=t[r];return 8*(i+4+n)},cp=function(s,e,t,n,i,r,a,o,l,h,c){Tn(e,c++,t),++i[256];for(var u=Ul(i,15),d=u[0],p=u[1],m=Ul(r,15),g=m[0],v=m[1],f=hp(d),b=f[0],x=f[1],y=hp(g),_=y[0],M=y[1],S=new _t(19),D=0;D<b.length;++D)S[31&b[D]]++;for(D=0;D<_.length;++D)S[31&_[D]]++;for(var P=Ul(S,7),I=P[0],F=P[1],B=19;B>4&&!I[op[B-1]];--B);var W,O,G,z,J=h+5<<3,Z=Zr(i,Ni)+Zr(r,lo)+a,X=Zr(i,d)+Zr(r,g)+a+14+3*B+Zr(S,I)+(2*S[16]+3*S[17]+7*S[18]);if(J<=Z&&J<=X)return qa(e,c,s.subarray(l,l+h));if(Tn(e,c,1+(X<Z)),c+=2,X<Z){W=Ss(d,p,0),O=d,G=Ss(g,v,0),z=g;var V=Ss(I,F,0);for(Tn(e,c,x-257),Tn(e,c+5,M-1),Tn(e,c+10,B-4),c+=14,D=0;D<B;++D)Tn(e,c+3*D,I[op[D]]);c+=3*B;for(var oe=[b,_],se=0;se<2;++se){var le=oe[se];for(D=0;D<le.length;++D){var ne=31&le[D];Tn(e,c,V[ne]),c+=I[ne],ne>15&&(Tn(e,c,le[D]>>>5&127),c+=le[D]>>>12)}}}else W=nb,O=Ni,G=ib,z=lo;for(D=0;D<o;++D)if(n[D]>255){ne=n[D]>>>18&31,Jr(e,c,W[ne+257]),c+=O[ne+257],ne>7&&(Tn(e,c,n[D]>>>23&31),c+=Tc[ne]);var xe=31&n[D];Jr(e,c,G[xe]),c+=z[xe],xe>3&&(Jr(e,c,n[D]>>>5&8191),c+=Ec[xe])}else Jr(e,c,W[n[D]]),c+=O[n[D]];return Jr(e,c,W[256]),c+O[256]},rb=new Mr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ac=new Mt(0),sb=function(){for(var s=new Mr(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(1&t&&3988292384)^t>>>1;s[e]=t}return s}(),ab=function(){var s=-1;return{p:function(e){for(var t=s,n=0;n<e.length;++n)t=sb[255&t^e[n]]^t>>>8;s=t},d:function(){return~s}}},ob=function(s,e,t,n,i){return function(r,a,o,l,h,c){var u=r.length,d=new Mt(l+u+5*(1+Math.ceil(u/7e3))+h),p=d.subarray(l,d.length-h),m=0;if(!a||u<8)for(var g=0;g<=u;g+=65535){var v=g+65535;v<u?m=qa(p,m,r.subarray(g,v)):(p[g]=c,m=qa(p,m,r.subarray(g,u)))}else{for(var f=rb[a-1],b=f>>>13,x=8191&f,y=(1<<o)-1,_=new _t(32768),M=new _t(y+1),S=Math.ceil(o/3),D=2*S,P=function(ie){return(r[ie]^r[ie+1]<<S^r[ie+2]<<D)&y},I=new Mr(25e3),F=new _t(288),B=new _t(32),W=0,O=0,G=(g=0,0),z=0,J=0;g<u;++g){var Z=P(g),X=32767&g,V=M[Z];if(_[X]=V,M[Z]=X,z<=g){var oe=u-g;if((W>7e3||G>24576)&&oe>423){m=cp(r,p,0,I,F,B,O,G,J,g-J,m),G=W=O=0,J=g;for(var se=0;se<286;++se)F[se]=0;for(se=0;se<30;++se)B[se]=0}var le=2,ne=0,xe=x,A=X-V&32767;if(oe>2&&Z==P(g-A))for(var T=Math.min(b,oe)-1,k=Math.min(32767,g),N=Math.min(258,oe);A<=k&&--xe&&X!=V;){if(r[g+le]==r[g+le-A]){for(var R=0;R<N&&r[g+R]==r[g+R-A];++R);if(R>le){if(le=R,ne=A,R>T)break;var w=Math.min(A,R-2),U=0;for(se=0;se<w;++se){var C=g-A+se+32768&32767,$=C-_[C]+32768&32767;$>U&&(U=$,V=C)}}}A+=(X=V)-(V=_[X])+32768&32767}if(ne){I[G++]=268435456|Jh[le]<<18|lp[ne];var j=31&Jh[le],Y=31&lp[ne];O+=Tc[j]+Ec[Y],++F[257+j],++B[Y],z=g+le,++W}else I[G++]=r[g],++F[r[g]]}}m=cp(r,p,c,I,F,B,O,G,J,g-J,m),!c&&7&m&&(m=qa(p,m+1,Ac))}return ag(d,0,l+sg(m)+h)}(s,e.level==null?6:e.level,e.mem==null?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):12+e.mem,t,n,!i)},og=function(s,e){var t={};for(var n in s)t[n]=s[n];for(var n in e)t[n]=e[n];return t},ut=function(s,e,t){for(;t;++e)s[e]=t,t>>>=8};function lb(s,e){return ob(s,e||{},0,0)}var lg=function(s,e,t,n){for(var i in s){var r=s[i],a=e+i;r instanceof Mt?t[a]=[r,n]:Array.isArray(r)?t[a]=[r[0],og(n,r[1])]:lg(r,a+"/",t,n)}},up=typeof TextEncoder!="undefined"&&new TextEncoder,hb=typeof TextDecoder!="undefined"&&new TextDecoder;try{hb.decode(Ac,{stream:!0})}catch{}function ho(s,e){if(e){for(var t=new Mt(s.length),n=0;n<s.length;++n)t[n]=s.charCodeAt(n);return t}if(up)return up.encode(s);var i=s.length,r=new Mt(s.length+(s.length>>1)),a=0,o=function(c){r[a++]=c};for(n=0;n<i;++n){if(a+5>r.length){var l=new Mt(a+8+(i-n<<1));l.set(r),r=l}var h=s.charCodeAt(n);h<128||e?o(h):h<2048?(o(192|h>>6),o(128|63&h)):h>55295&&h<57344?(o(240|(h=65536+(1047552&h)|1023&s.charCodeAt(++n))>>18),o(128|h>>12&63),o(128|h>>6&63),o(128|63&h)):(o(224|h>>12),o(128|h>>6&63),o(128|63&h))}return ag(r,0,a)}var Kh=function(s){var e=0;if(s)for(var t in s){var n=s[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},dp=function(s,e,t,n,i,r,a,o){var l=n.length,h=t.extra,c=o&&o.length,u=Kh(h);ut(s,e,a!=null?33639248:67324752),e+=4,a!=null&&(s[e++]=20,s[e++]=t.os),s[e]=20,e+=2,s[e++]=t.flag<<1|(r==null&&8),s[e++]=i&&8,s[e++]=255&t.compression,s[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),p=d.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(ut(s,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,r!=null&&(ut(s,e,t.crc),ut(s,e+4,r),ut(s,e+8,t.size)),ut(s,e+12,l),ut(s,e+14,u),e+=16,a!=null&&(ut(s,e,c),ut(s,e+6,t.attrs),ut(s,e+10,a),e+=14),s.set(n,e),e+=l,u)for(var m in h){var g=h[m],v=g.length;ut(s,e,+m),ut(s,e+2,v),s.set(g,e+4),e+=4+v}return c&&(s.set(o,e),e+=c),e};function cb(s,e){e||(e={});var t={},n=[];lg(s,"",t,e);var i=0,r=0;for(var a in t){var o=t[a],l=o[0],h=o[1],c=h.level==0?0:8,u=(S=ho(a)).length,d=h.comment,p=d&&ho(d),m=p&&p.length,g=Kh(h.extra);if(u>65535)throw"filename too long";var v=c?lb(l,h):l,f=v.length,b=ab();b.p(l),n.push(og(h,{size:l.length,crc:b.d(),c:v,f:S,m:p,u:u!=a.length||p&&d.length!=m,o:i,compression:c})),i+=30+u+g+f,r+=76+2*(u+g)+(m||0)+f}for(var x=new Mt(r+22),y=i,_=r-i,M=0;M<n.length;++M){var S=n[M];dp(x,S.o,S,S.f,S.u,S.c.length);var D=30+S.f.length+Kh(S.extra);x.set(S.c,S.o+D),dp(x,i,S,S.f,S.u,S.c.length,S.o,S.m),i+=16+D+(S.m?S.m.length:0)}return function(P,I,F,B,W){ut(P,I,101010256),ut(P,I+8,F),ut(P,I+10,F),ut(P,I+12,B),ut(P,I+16,W)}(x,i,n.length,_,y),x}class ub{async parse(e){const t={};t["model.usda"]=null;let n=pp();const i={},r={};e.traverseVisible(o=>{if(o.isMesh)if(o.material.isMeshStandardMaterial){const l=o.geometry,h=o.material,c="geometries/Geometry_"+l.id+".usd";if(!(c in t)){const u=function(d){return`
def "Geometry"
{
  ${function(p){const m="Geometry",g=p.attributes,v=g.position.count;return`
    def Mesh "${m}"
    {
        int[] faceVertexCounts = [${function(f){const b=f.index!==null?f.index.count:f.attributes.position.count;return Array(b/3).fill(3).join(", ")}(p)}]
        int[] faceVertexIndices = [${function(f){const b=f.index,x=[];if(b!==null)for(let y=0;y<b.count;y++)x.push(b.getX(y));else{const y=f.attributes.position.count;for(let _=0;_<y;_++)x.push(_)}return x.join(", ")}(p)}]
        normal3f[] normals = [${mp(g.normal,v)}] (
            interpolation = "vertex"
        )
        point3f[] points = [${mp(g.position,v)}]
        float2[] primvars:st = [${function(f,b){if(f===void 0)return console.warn("USDZExporter: UVs missing."),Array(b).fill("(0, 0)").join(", ");const x=[];for(let y=0;y<f.count;y++){const _=f.getX(y),M=f.getY(y);x.push(`(${_.toPrecision(7)}, ${1-M.toPrecision(7)})`)}return x.join(", ")}(g.uv,v)}] (
            interpolation = "vertex"
        )
        uniform token subdivisionScheme = "none"
    }
`}(d)}
}
`}(l);t[c]=function(d){let p=pp();return p+=d,ho(p)}(u)}h.uuid in i||(i[h.uuid]=h),n+=function(u,d,p){const m="Object_"+u.id,g=function(v){const f=v.elements;return`( ${Da(f,0)}, ${Da(f,4)}, ${Da(f,8)}, ${Da(f,12)} )`}(u.matrixWorld);return u.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",u),`def Xform "${m}" (
    prepend references = @./geometries/Geometry_${d.id}.usd@</Geometry>
)
{
    matrix4d xformOp:transform = ${g}
    uniform token[] xformOpOrder = ["xformOp:transform"]

    rel material:binding = </Materials/Material_${p.id}>
}

`}(o,l,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",o)}),n+=function(o,l){const h=[];for(const c in o){const u=o[c];h.push(pb(u,l))}return`def "Materials"
{
${h.join("")}
}

`}(i,r),t["model.usda"]=ho(n),n=null;for(const o in r){const l=r[o],h=o.split("_")[1],c=l.format===1023,u=db(l.image,h),d=await new Promise(p=>u.toBlob(p,c?"image/png":"image/jpeg",1));t[`textures/Texture_${o}.${c?"png":"jpg"}`]=new Uint8Array(await d.arrayBuffer())}let a=0;for(const o in t){const l=t[o];a+=34+o.length;const h=63&a;if(h!==4){const c=new Uint8Array(64-h);t[o]=[l,{extra:{12345:c}}]}a=l.length}return cb(t,{level:0})}}function db(s,e){if(typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof OffscreenCanvas!="undefined"&&s instanceof OffscreenCanvas||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap){const t=1024/Math.max(s.width,s.height),n=document.createElement("canvas");n.width=s.width*Math.min(1,t),n.height=s.height*Math.min(1,t);const i=n.getContext("2d");if(i.drawImage(s,0,0,n.width,n.height),e!==void 0){const r=parseInt(e,16),a=(r>>16&255)/255,o=(r>>8&255)/255,l=(255&r)/255,h=i.getImageData(0,0,n.width,n.height),c=h.data;for(let u=0;u<c.length;u+=4)c[u+0]=c[u+0]*a,c[u+1]=c[u+1]*o,c[u+2]=c[u+2]*l;i.putImageData(h,0,0)}return n}}function pp(){return`#usda 1.0
(
    customLayerData = {
        string creator = "Three.js USDZExporter"
    }
    metersPerUnit = 1
    upAxis = "Y"
)

`}function Da(s,e){return`(${s[e+0]}, ${s[e+1]}, ${s[e+2]}, ${s[e+3]})`}function mp(s,e){if(s===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[];for(let n=0;n<s.count;n++){const i=s.getX(n),r=s.getY(n),a=s.getZ(n);t.push(`(${i.toPrecision(7)}, ${r.toPrecision(7)}, ${a.toPrecision(7)})`)}return t.join(", ")}function pb(s,e){const t="            ",n=[],i=[];function r(a,o,l){const h=a.id+(l?"_"+l.getHexString():""),c=a.format===1023;return e[h]=a,`
        def Shader "Transform2d_${o}" (
            sdrMetadata = {
                string role = "math"
            }
        )
        {
            uniform token info:id = "UsdTransform2d"
            float2 inputs:in.connect = </Materials/Material_${s.id}/uvReader_st.outputs:result>
            float2 inputs:scale = ${gp(a.repeat)}
            float2 inputs:translation = ${gp(a.offset)}
            float2 outputs:result
        }

        def Shader "Texture_${a.id}_${o}"
        {
            uniform token info:id = "UsdUVTexture"
            asset inputs:file = @textures/Texture_${h}.${c?"png":"jpg"}@
            float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${o}.outputs:result>
            token inputs:wrapS = "repeat"
            token inputs:wrapT = "repeat"
            float outputs:r
            float outputs:g
            float outputs:b
            float3 outputs:rgb
            ${s.transparent||s.alphaTest>0?"float outputs:a":""}
        }`}return s.map!==null?(n.push(`${t}color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`),s.transparent?n.push(`${t}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`):s.alphaTest>0&&(n.push(`${t}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`),n.push(`${t}float inputs:opacityThreshold = ${s.alphaTest}`)),i.push(r(s.map,"diffuse",s.color))):n.push(`${t}color3f inputs:diffuseColor = ${fp(s.color)}`),s.emissiveMap!==null?(n.push(`${t}color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`),i.push(r(s.emissiveMap,"emissive"))):s.emissive.getHex()>0&&n.push(`${t}color3f inputs:emissiveColor = ${fp(s.emissive)}`),s.normalMap!==null&&(n.push(`${t}normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`),i.push(r(s.normalMap,"normal"))),s.aoMap!==null&&(n.push(`${t}float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`),i.push(r(s.aoMap,"occlusion"))),s.roughnessMap!==null&&s.roughness===1?(n.push(`${t}float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`),i.push(r(s.roughnessMap,"roughness"))):n.push(`${t}float inputs:roughness = ${s.roughness}`),s.metalnessMap!==null&&s.metalness===1?(n.push(`${t}float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`),i.push(r(s.metalnessMap,"metallic"))):n.push(`${t}float inputs:metallic = ${s.metalness}`),s.alphaMap!==null?(n.push(`${t}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`),n.push(`${t}float inputs:opacityThreshold = 0.0001`),i.push(r(s.alphaMap,"opacity"))):n.push(`${t}float inputs:opacity = ${s.opacity}`),s.isMeshPhysicalMaterial&&(n.push(`${t}float inputs:clearcoat = ${s.clearcoat}`),n.push(`${t}float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`),n.push(`${t}float inputs:ior = ${s.ior}`)),`
    def Material "Material_${s.id}"
    {
        def Shader "PreviewSurface"
        {
            uniform token info:id = "UsdPreviewSurface"
${n.join(`
`)}
            int inputs:useSpecularWorkflow = 0
            token outputs:surface
        }

        token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>
        token inputs:frame:stPrimvarName = "st"

        def Shader "uvReader_st"
        {
            uniform token info:id = "UsdPrimvarReader_float2"
            token inputs:varname.connect = </Materials/Material_${s.id}.inputs:frame:stPrimvarName>
            float2 inputs:fallback = (0.0, 0.0)
            float2 outputs:result
        }

${i.join(`
`)}

    }
`}function fp(s){return`(${s.r}, ${s.g}, ${s.b})`}function gp(s){return`(${s.x}, ${s.y})`}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nr=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};let vp=!1,yp=!1;const mb=(xp=["quick-look","scene-viewer","webxr","none"],s=>{try{const e=Oi(s),t=(e.length?e[0].terms:[]).filter(i=>i&&i.type==="ident").map(i=>i.value).filter(i=>xp.indexOf(i)>-1),n=new Set;for(const i of t)n.add(i);return n}catch{}return new Set});var xp;const kl="quick-look",bp="scene-viewer",_p="webxr",Bl="none",En=Symbol("arButtonContainer"),wp=Symbol("enterARWithWebXR"),Mp=Symbol("openSceneViewer"),Sp=Symbol("openIOSARQuickLook"),fb=Symbol("canActivateAR"),Zn=Symbol("arMode"),zl=Symbol("arModes"),ir=Symbol("arAnchor"),Ia=Symbol("preload"),Oa=Symbol("onARButtonContainerClick"),Hl=Symbol("onARStatus"),Vl=Symbol("onARTracking"),Gl=Symbol("onARTap"),$r=Symbol("selectARMode"),Wl=Symbol("triggerLoad");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hg,Tp,Ep;const Tr=Symbol("evaluate"),Xa=Symbol("lastValue");class We{constructor(){this[hg]=null}static evaluatableFor(e,t=ai){if(e instanceof We)return e;if(e.type==="number")return e.unit==="%"?new gb(e,t):e;switch(e.name.value){case"calc":return new xb(e,t);case"env":return new vb(e)}return ai}static evaluate(e){return e instanceof We?e.evaluate():e}static isConstant(e){return!(e instanceof We)||e.isConstant}static applyIntrinsics(e,t){const{basis:n,keywords:i}=t,{auto:r}=i;return n.map((a,o)=>{const l=r[o]==null?a:r[o];let h=e[o]?e[o]:l;if(h.type==="ident"){const c=h.value;c in i&&(h=i[c][o])}return h!=null&&h.type!=="ident"||(h=l),h.unit==="%"?vt(h.number/100*a.number,a.unit):(h=cn(h,a),h.unit!==a.unit?a:h)})}get isConstant(){return!1}evaluate(){return this.isConstant&&this[Xa]!=null||(this[Xa]=this[Tr]()),this[Xa]}}hg=Xa;const Ap=Symbol("percentage"),jl=Symbol("basis");class gb extends We{constructor(e,t){super(),this[Ap]=e,this[jl]=t}get isConstant(){return!0}[Tr](){return vt(this[Ap].number/100*this[jl].number,this[jl].unit)}}const Na=Symbol("identNode");class vb extends We{constructor(e){super(),this[Tp]=null;const t=e.arguments.length?e.arguments[0].terms[0]:null;t!=null&&t.type==="ident"&&(this[Na]=t)}get isConstant(){return!1}[(Tp=Na,Tr)](){return this[Na]!=null&&this[Na].value==="window-scroll-y"?{type:"number",number:window.pageYOffset/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight)||0,unit:null}:ai}}const yb=/[\*\/]/,rr=Symbol("evalutor");class xb extends We{constructor(e,t=ai){if(super(),this[Ep]=null,e.arguments.length!==1)return;const n=e.arguments[0].terms.slice(),i=[];for(;n.length;){const r=n.shift();if(i.length>0){const a=i[i.length-1];if(a.type==="operator"&&yb.test(a.value)){const o=i.pop(),l=i.pop();if(l==null)return;i.push(new Cp(o,We.evaluatableFor(l,t),We.evaluatableFor(r,t)));continue}}i.push(r.type==="operator"?r:We.evaluatableFor(r,t))}for(;i.length>2;){const[r,a,o]=i.splice(0,3);if(a.type!=="operator")return;i.unshift(new Cp(a,We.evaluatableFor(r,t),We.evaluatableFor(o,t)))}i.length===1&&(this[rr]=i[0])}get isConstant(){return this[rr]==null||We.isConstant(this[rr])}[(Ep=rr,Tr)](){return this[rr]!=null?We.evaluate(this[rr]):ai}}const Rp=Symbol("operator"),ql=Symbol("left"),Xl=Symbol("right");class Cp extends We{constructor(e,t,n){super(),this[Rp]=e,this[ql]=t,this[Xl]=n}get isConstant(){return We.isConstant(this[ql])&&We.isConstant(this[Xl])}[Tr](){const e=cn(We.evaluate(this[ql])),t=cn(We.evaluate(this[Xl])),{number:n,unit:i}=e,{number:r,unit:a}=t;if(a!=null&&i!=null&&a!=i)return ai;const o=i||a;let l;switch(this[Rp].value){case"+":l=n+r;break;case"-":l=n-r;break;case"/":l=n/r;break;case"*":l=n*r;break;default:return ai}return{type:"number",number:l,unit:o}}}const Yl=Symbol("evaluatables"),Lp=Symbol("intrinsics");class cg extends We{constructor(e,t){super(),this[Lp]=t;const n=e[0],i=n!=null?n.terms:[];this[Yl]=t.basis.map((r,a)=>{const o=i[a];return o==null?{type:"ident",value:"auto"}:o.type==="ident"?o:We.evaluatableFor(o,r)})}get isConstant(){for(const e of this[Yl])if(!We.isConstant(e))return!1;return!0}[Tr](){const e=this[Yl].map(t=>We.evaluate(t));return We.applyIntrinsics(e,this[Lp]).map(t=>t.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ug,dg,pg,mg;const sr=Symbol("instances"),Pp=Symbol("activateListener"),Dp=Symbol("deactivateListener"),Jl=Symbol("notifyInstances"),Ip=Symbol("notify"),Op=Symbol("callback");class an{constructor(e){this[Op]=e}static[Jl](){for(const e of an[sr])e[Ip]()}static[(ug=sr,Pp)](){window.addEventListener("scroll",this[Jl],{passive:!0})}static[Dp](){window.removeEventListener("scroll",this[Jl])}observe(){an[sr].size===0&&an[Pp](),an[sr].add(this)}disconnect(){an[sr].delete(this),an[sr].size===0&&an[Dp]()}[Ip](){this[Op]()}}an[ug]=new Set;const Np=Symbol("computeStyleCallback"),fg=Symbol("astWalker"),ms=Symbol("dependencies"),gg=Symbol("onScroll");class bb{constructor(e){this[dg]={},this[pg]=new Ax(["function"]),this[mg]=()=>{this[Np]({relatedState:"window-scroll"})},this[Np]=e}observeEffectsFor(e){const t={},n=this[ms];this[fg].walk(e,i=>{const{name:r}=i,a=i.arguments[0].terms[0];if(r.value==="env"&&a!=null&&a.type==="ident"&&a.value==="window-scroll-y"&&t["window-scroll"]==null){const o="window-scroll"in n?n["window-scroll"]:new an(this[gg]);o.observe(),delete n["window-scroll"],t["window-scroll"]=o}});for(const i in n)n[i].disconnect();this[ms]=t}dispose(){for(const e in this[ms])this[ms][e].disconnect()}}dg=ms,pg=fg,mg=gg;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=s=>{const e=s.observeEffects||!1,t=s.intrinsics instanceof Function?s.intrinsics:()=>s.intrinsics;return(n,i)=>{const r=n.updated,a=n.connectedCallback,o=n.disconnectedCallback,l=Symbol(`${i}StyleEffector`),h=Symbol(`${i}StyleEvaluator`),c=Symbol(`${i}UpdateEvaluator`),u=Symbol(`${i}EvaluateAndSync`);Object.defineProperties(n,{[l]:{value:null,writable:!0},[h]:{value:null,writable:!0},[c]:{value:function(){const d=Oi(this[i]);this[h]=new cg(d,t(this)),this[l]==null&&e&&(this[l]=new bb(()=>this[u]())),this[l]!=null&&this[l].observeEffectsFor(d)}},[u]:{value:function(){if(this[h]==null)return;const d=this[h].evaluate();this[s.updateHandler](d)}},updated:{value:function(d){d.has(i)&&(this[c](),this[u]()),r.call(this,d)}},connectedCallback:{value:function(){a.call(this),this.requestUpdate(i,this[i])}},disconnectedCallback:{value:function(){o.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}},_b=new Q,Fp=new E,Up=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,interactionPolicy:"always-allow",touchAction:"pan-y"}),Fa=Math.PI/8,wb=33,Mb=34,Sb=37,Tb=38,Eb=39,Ab=40,Qh="user-interaction",Rb="none";/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb extends Ht{constructor(e,t,n){super(),this.camera=e,this.element=t,this.scene=n,this.sensitivity=1,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserChange=!1,this.isUserPointing=!1,this.enablePan=!0,this.panProjection=new Qe,this.panPerPixel=0,this.spherical=new Va,this.goalSpherical=new Va,this.thetaDamper=new Pt,this.phiDamper=new Pt,this.radiusDamper=new Pt,this.logFov=Math.log(Up.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new Pt,this.touchMode=null,this.lastPointerPosition={clientX:0,clientY:0},this.startPointerPosition={clientX:0,clientY:0},this.touchDecided=!1,this.onMouseMove=i=>{this.panPerPixel>0?this.movePan(i.clientX,i.clientY):this.handleSinglePointerMove(i),i.cancelable&&i.preventDefault()},this.onTouchMove=i=>{this.touchMode!==null&&(this.touchMode(i),this.touchMode!==null&&i.cancelable&&i.preventDefault())},this.touchModeZoom=i=>{const{targetTouches:r}=i;if(this.lastTouches.length>1&&r.length>1){if(!this._disableZoom){const a=.04*(this.twoTouchDistance(this.lastTouches[0],this.lastTouches[1])-this.twoTouchDistance(r[0],r[1]))/10;this.userAdjustOrbit(0,0,a)}if(this.panPerPixel>0){const a=.5*(r[0].clientX+r[1].clientX),o=.5*(r[0].clientY+r[1].clientY);this.movePan(a,o)}this.lastTouches=r}},this.touchModeRotate=i=>{const{targetTouches:r}=i,{touchAction:a}=this._options;if(!this.touchDecided&&a!=="none"){this.touchDecided=!0;const{clientX:o,clientY:l}=r[0],h=Math.abs(o-this.lastPointerPosition.clientX),c=Math.abs(l-this.lastPointerPosition.clientY);if(a==="pan-y"&&c>h||a==="pan-x"&&h>c)return void(this.touchMode=null)}this.handleSinglePointerMove(r[0]),this.lastTouches=r},this.onMouseDown=i=>{this.onPointerDown(()=>{self.addEventListener("mousemove",this.onMouseMove),self.addEventListener("mouseup",this.onMouseUp,{once:!0}),this.enablePan&&(i.button===2||i.ctrlKey||i.metaKey||i.shiftKey)&&this.initializePan(),this.lastPointerPosition.clientX=i.clientX,this.lastPointerPosition.clientY=i.clientY,this.startPointerPosition.clientX=i.clientX,this.startPointerPosition.clientY=i.clientY,this.element.style.cursor="grabbing"})},this.onTouchStart=i=>{this.onPointerDown(()=>{const{targetTouches:r,changedTouches:a,touches:o}=i;r.length===a.length&&(this.touchMode=null,this.touchDecided=!1),r.length===o.length&&this.onTouchChange(i)})},this.onMouseUp=i=>{self.removeEventListener("mousemove",this.onMouseMove),this.panPerPixel>0?this.resetRadius():this.recenter(i),this.onPointerUp()},this.onTouchEnd=i=>{i.targetTouches.length>0&&this.touchMode!==null&&this.onTouchChange(i),i.targetTouches.length===0&&(this.panPerPixel>0?this.resetRadius():this.recenter(i.changedTouches[0])),this.onPointerUp()},this.onWheel=i=>{if(!this.canInteract)return;const r=i.deltaY*(i.deltaMode==1?18:1)*.04/30;this.userAdjustOrbit(0,0,r),i.cancelable&&i.preventDefault()},this.onKeyDown=i=>{let r=!1;switch(i.keyCode){case wb:r=!0,this.userAdjustOrbit(0,0,.04);break;case Mb:r=!0,this.userAdjustOrbit(0,0,-.04);break;case Tb:r=!0,this.userAdjustOrbit(0,-Fa,0);break;case Ab:r=!0,this.userAdjustOrbit(0,Fa,0);break;case Sb:r=!0,this.userAdjustOrbit(-Fa,0,0);break;case Eb:r=!0,this.userAdjustOrbit(Fa,0,0)}r&&i.cancelable&&i.preventDefault()},this._options=Object.assign({},Up),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:e}=this;e.addEventListener("mousedown",this.onMouseDown),this._disableZoom||e.addEventListener("wheel",this.onWheel),e.addEventListener("keydown",this.onKeyDown),e.addEventListener("touchstart",this.onTouchStart,{passive:!0}),e.addEventListener("touchmove",this.onTouchMove,{passive:!1}),e.addEventListener("touchend",this.onTouchEnd),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:e}=this;self.removeEventListener("mousemove",this.onMouseMove),e.removeEventListener("mousedown",this.onMouseDown),this._disableZoom||e.removeEventListener("wheel",this.onWheel),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("touchstart",this.onTouchStart),e.removeEventListener("touchmove",this.onTouchMove),self.removeEventListener("mouseup",this.onMouseUp),e.removeEventListener("touchend",this.onTouchEnd),e.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(e){this._disableZoom!=e&&(this._disableZoom=e,e===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(e=new Va){return e.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(e){Object.assign(this._options,e),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(e,t){this.camera.near=Math.max(e,t/1e3),this.camera.far=t,this.camera.updateProjectionMatrix()}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setOrbit(e=this.goalSpherical.theta,t=this.goalSpherical.phi,n=this.goalSpherical.radius){const{minimumAzimuthalAngle:i,maximumAzimuthalAngle:r,minimumPolarAngle:a,maximumPolarAngle:o,minimumRadius:l,maximumRadius:h}=this._options,{theta:c,phi:u,radius:d}=this.goalSpherical,p=Ei(e,i,r);isFinite(i)||isFinite(r)||(this.spherical.theta=this.wrapAngle(this.spherical.theta-p)+p);const m=Ei(t,a,o),g=Ei(n,l,h);return(p!==c||m!==u||g!==d)&&(this.goalSpherical.theta=p,this.goalSpherical.phi=m,this.goalSpherical.radius=g,this.goalSpherical.makeSafe(),this.isUserChange=!1,!0)}setRadius(e){this.goalSpherical.radius=e,this.setOrbit()}setFieldOfView(e){const{minimumFieldOfView:t,maximumFieldOfView:n}=this._options;e=Ei(e,t,n),this.goalLogFov=Math.log(e)}setDamperDecayTime(e){this.thetaDamper.setDecayTime(e),this.phiDamper.setDecayTime(e),this.radiusDamper.setDecayTime(e),this.fovDamper.setDecayTime(e)}adjustOrbit(e,t,n){const{theta:i,phi:r,radius:a}=this.goalSpherical,{minimumRadius:o,maximumRadius:l,minimumFieldOfView:h,maximumFieldOfView:c}=this._options,u=this.spherical.theta-i,d=Math.PI-.001,p=i-Ei(e,-d-u,d-u),m=r-t,g=n===0?0:((n>0?l:o)-a)/(Math.log(n>0?c:h)-this.goalLogFov),v=a+n*(isFinite(g)?g:2*(l-o));if(this.setOrbit(p,m,v),n!==0){const f=this.goalLogFov+n;this.setFieldOfView(Math.exp(f))}}jumpToGoal(){this.update(0,1e4)}update(e,t){if(this.isStationary())return;const{maximumPolarAngle:n,maximumRadius:i}=this._options,r=this.spherical.theta-this.goalSpherical.theta;Math.abs(r)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=2*Math.sign(r)*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,t,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,t,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,t,i),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,t,1),this.moveCamera()}updateTouchActionStyle(){const{style:e}=this.element;if(this._interactionEnabled){const{touchAction:t}=this._options;this._disableZoom&&t!=="none"?e.touchAction="manipulation":e.touchAction=t}else e.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new Fn(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix());const e=this.isUserChange?Qh:Rb;this.dispatchEvent({type:"change",source:e})}get canInteract(){return this._options.interactionPolicy=="allow-when-focused"?this.element.getRootNode().activeElement===this.element:this._options.interactionPolicy==="always-allow"}userAdjustOrbit(e,t,n){this.adjustOrbit(e*this.sensitivity,t*this.sensitivity,n),this.isUserChange=!0,this.dispatchEvent({type:"change",source:Qh})}wrapAngle(e){const t=(e+Math.PI)/(2*Math.PI);return 2*(t-Math.floor(t))*Math.PI-Math.PI}pixelLengthToSphericalAngle(e){return 2*Math.PI*e/this.element.clientHeight}twoTouchDistance(e,t){const{clientX:n,clientY:i}=e,{clientX:r,clientY:a}=t,o=r-n,l=a-i;return Math.sqrt(o*o+l*l)}handleSinglePointerMove(e){const{clientX:t,clientY:n}=e,i=this.pixelLengthToSphericalAngle(t-this.lastPointerPosition.clientX),r=this.pixelLengthToSphericalAngle(n-this.lastPointerPosition.clientY);this.lastPointerPosition.clientX=t,this.lastPointerPosition.clientY=n,this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start",pointer:Object.assign({},e)})),this.userAdjustOrbit(i,r,0)}initializePan(){this.scene.element[Ya].style.opacity=1;const{theta:e,phi:t}=this.spherical,n=e-this.scene.yaw;this.panPerPixel=.018/this.scene.height,this.panProjection.set(-Math.cos(n),-Math.cos(t)*Math.sin(n),0,0,Math.sin(t),0,Math.sin(n),-Math.cos(t)*Math.cos(n),0)}movePan(e,t){const{scene:n,lastPointerPosition:i}=this,r=Fp.set(e-i.clientX,t-i.clientY,0),a=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;r.multiplyScalar(a),i.clientX=e,i.clientY=t;const o=n.getTarget();o.add(r.applyMatrix3(this.panProjection)),n.boundingSphere.clampPoint(o,o),n.setTarget(o.x,o.y,o.z)}recenter(e){const{scene:t}=this;if(t.element[Ya].style.opacity=0,!this.enablePan||Math.abs(e.clientX-this.startPointerPosition.clientX)>2||Math.abs(e.clientY-this.startPointerPosition.clientY)>2)return;const n=t.positionAndNormalFromPoint(t.getNDC(e.clientX,e.clientY));if(n==null){const{cameraTarget:i}=t.element;t.element.cameraTarget="",t.element.cameraTarget=i,this.userAdjustOrbit(0,0,1)}else t.target.worldToLocal(n.position),t.setTarget(n.position.x,n.position.y,n.position.z)}resetRadius(){const{scene:e}=this;if(e.element[Ya].style.opacity=0,!this.enablePan||this.panPerPixel===0)return;const t=e.positionAndNormalFromPoint(_b.set(0,0));if(t==null)return;e.target.worldToLocal(t.position);const n=e.getTarget(),{theta:i,phi:r}=this.spherical,a=i-e.yaw,o=Fp.set(Math.sin(r)*Math.sin(a),Math.cos(r),Math.sin(r)*Math.cos(a)),l=o.dot(t.position.sub(n));n.add(o.multiplyScalar(l)),e.setTarget(n.x,n.y,n.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-l)}onPointerDown(e){this.canInteract&&(this.isUserPointing=!1,e())}onTouchChange(e){const{targetTouches:t,changedTouches:n}=e;switch(t.length){default:case 1:this.touchMode=this.touchModeRotate,this.lastPointerPosition.clientX=t[0].clientX,this.lastPointerPosition.clientY=t[0].clientY,t[0].identifier===n[0].identifier?(this.startPointerPosition.clientX=t[0].clientX,this.startPointerPosition.clientY=t[0].clientY):this.resetRadius();break;case 2:if(this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.enablePan&&this.touchMode!=null){this.initializePan();const i=.5*(t[0].clientX+t[1].clientX),r=.5*(t[0].clientY+t[1].clientY);this.lastPointerPosition.clientX=i,this.lastPointerPosition.clientY=r,this.startPointerPosition.clientX=i,this.startPointerPosition.clientY=r}}this.lastTouches=t}onPointerUp(){this.element.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end",pointer:Object.assign({},this.lastPointerPosition)})}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=s=>s<.5?2*s*s:(4-2*s)*s-1,Lb=(s,e,t=vg)=>n=>s+(e-s)*t(n),yg=(s,e)=>{const t=[],n=[];let i=s;for(let r=0;r<e.length;++r){const a=e[r],{value:o,frames:l}=a,h=a.ease||vg,c=Lb(i,o,h);t.push(c),n.push(l),i=o}return((r,a)=>{const o=a.reduce((h,c)=>h+c,0),l=a.map(h=>h/o);return h=>{let c=0,u=1/0,d=()=>0;for(let p=0;p<l.length&&(u=l[p],d=r[p],!(h<=c+u));++p)c+=u;return d((h-c)/u)}})(t,n)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const Pb=yg(0,[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]),Db=yg(0,[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]),Ib=["front","right","back","left"],Ob=["upper-","","lower-"],Kr="auto",kp="when-focused",Zl="wiggle",Nb="always-allow",Fb="pan-y",Bp=s=>{const e=s.enablePan?30:45;return{basis:[Eo(vt(e,"deg"))],keywords:{auto:[null]}}},Ub=s=>{const e=s.enablePan?12:25;return{basis:[Eo(vt(e,"deg"))],keywords:{auto:[null]}}},xg=(()=>{const s=Oi("0deg 75deg 105%")[0].terms,e=cn(s[0]),t=cn(s[1]);return n=>{const i=n[te].idealCameraDistance();return{basis:[e,t,vt(i,"m")],keywords:{auto:[null,null,vt(105,"%")]}}}})(),kb=s=>{const e=1.1*s[te].boundingSphere.radius*(s.enablePan?2:1);return{basis:[vt(-1/0,"rad"),vt(Math.PI/8,"rad"),vt(e,"m")],keywords:{auto:[null,null,null]}}},Bb=s=>{const e=xg(s),t=new cg([],e).evaluate()[2];return{basis:[vt(1/0,"rad"),vt(Math.PI-Math.PI/8,"rad"),vt(t,"m")],keywords:{auto:[null,null,null]}}},zb=s=>{const e=s[te].boundingBox.getCenter(new E);return{basis:[vt(e.x,"m"),vt(e.y,"m"),vt(e.z,"m")],keywords:{auto:[null,null,null]}}},zp=s=>{s.preventDefault()},bg=Math.PI/2,Hb=Math.PI/3,Vb=bg/2,Gb=2*Math.PI,He=Symbol("controls"),Qr=Symbol("promptElement"),Ya=Symbol("panElement"),$l=Symbol("promptAnimatedContainer"),Ua=Symbol("deferInteractionPrompt"),Hp=Symbol("updateAria"),Vp=Symbol("updateCameraForRadius"),Kl=Symbol("onBlur"),Ql=Symbol("onFocus"),eh=Symbol("onChange"),es=Symbol("onPointerChange"),An=Symbol("waitingToPromptUser"),ts=Symbol("userHasInteracted"),fi=Symbol("promptElementVisibleTime"),ns=Symbol("lastPromptOffset"),is=Symbol("focusedTime"),th=Symbol("lastSpherical"),rs=Symbol("jumpCamera"),nh=Symbol("initialized"),ss=Symbol("maintainThetaPhi"),Gp=Symbol("syncCameraOrbit"),Wp=Symbol("syncFieldOfView"),jp=Symbol("syncCameraTarget"),qp=Symbol("syncMinCameraOrbit"),Xp=Symbol("syncMaxCameraOrbit"),Yp=Symbol("syncMinFieldOfView"),Jp=Symbol("syncMaxFieldOfView");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var as=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const ka="auto",Zp="manual",Wb="auto",jb="eager",qb="interaction",gi=Symbol("defaultProgressBarElement"),$p=Symbol("defaultProgressMaskElement"),Rn=Symbol("posterContainerElement"),ar=Symbol("defaultPosterElement"),os=Symbol("posterDismissalSource"),ih=Symbol("hidePoster"),Ba=Symbol("modelIsRevealed"),rh=Symbol("updateProgressBar"),ls=Symbol("lastReportedProgress"),hs=Symbol("transitioned"),sh=Symbol("onTransitionEnd"),Xb=Symbol("ariaLabelCallToAction"),ah=Symbol("onClick"),oh=Symbol("onKeydown"),lh=Symbol("onProgress");class Rc{constructor(){this.pluginCallbacks=[],this.register(function(e){return new h1(e)}),this.register(function(e){return new c1(e)}),this.register(function(e){return new u1(e)}),this.register(function(e){return new p1(e)}),this.register(function(e){return new m1(e)}),this.register(function(e){return new d1(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){typeof n=="object"&&(console.warn("THREE.GLTFExporter: parse() expects options as the fourth argument now."),i=n);const r=new l1,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.write(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const Yb=0,Kp=1,Jb=2,Zb=3,$b=4,hh=5121,ch=5123,Qp=5126,em=5125,tm=34962,Kb=34963,Qb=9728,e1=9729,t1=9984,n1=9985,i1=9986,r1=9987,s1=33071,a1=33648,o1=10497,Lt={};Lt[1003]=Qb,Lt[1004]=t1,Lt[1005]=i1,Lt[1006]=e1,Lt[1007]=n1,Lt[1008]=r1,Lt[1001]=s1,Lt[1e3]=o1,Lt[1002]=a1;const nm={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"};function cs(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function _g(s){return 4*Math.ceil(s/4)}function uh(s,e=0){const t=_g(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}let im=null;class l1{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n){this.options=Object.assign({},{binary:!1,trs:!1,onlyVisible:!0,truncateDrawRange:!0,embedImages:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const i=this,r=i.buffers,a=i.json;n=i.options;const o=i.extensionsUsed,l=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o);if(h.length>0&&(a.extensionsUsed=h),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=l.size),n.binary===!0){const c=new window.FileReader;c.readAsArrayBuffer(l),c.onloadend=function(){const u=uh(c.result),d=new DataView(new ArrayBuffer(8));d.setUint32(0,u.byteLength,!0),d.setUint32(4,5130562,!0);const p=uh(function(y){if(window.TextEncoder!==void 0)return new TextEncoder().encode(y).buffer;const _=new Uint8Array(new ArrayBuffer(y.length));for(let M=0,S=y.length;M<S;M++){const D=y.charCodeAt(M);_[M]=D>255?32:D}return _.buffer}(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(8));m.setUint32(0,p.byteLength,!0),m.setUint32(4,1313821514,!0);const g=new ArrayBuffer(12),v=new DataView(g);v.setUint32(0,1179937895,!0),v.setUint32(4,2,!0);const f=12+m.byteLength+p.byteLength+d.byteLength+u.byteLength;v.setUint32(8,f,!0);const b=new Blob([g,m,p,d,u],{type:"application/octet-stream"}),x=new window.FileReader;x.readAsArrayBuffer(b),x.onloadend=function(){t(x.result)}}}else if(a.buffers&&a.buffers.length>0){const c=new window.FileReader;c.readAsDataURL(l),c.onloadend=function(){const u=c.result;a.buffers[0].uri=u,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e){return this.uids.has(e)||this.uids.set(e,this.uid++),this.uids.get(e)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const t=new E;for(let n=0,i=e.count;n<i;n++)if(Math.abs(t.fromBufferAttribute(e,n).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new E;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};t.offset.x===0&&t.offset.y===0||(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),t.repeat.x===1&&t.repeat.y===1||(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures.");const n=e==null?void 0:e.image,i=t==null?void 0:t.image,r=Math.max((n==null?void 0:n.width)||0,(i==null?void 0:i.width)||0),a=Math.max((n==null?void 0:n.height)||0,(i==null?void 0:i.height)||0),o=document.createElement("canvas");o.width=r,o.height=a;const l=o.getContext("2d");l.fillStyle="#00ffff",l.fillRect(0,0,r,a);const h=l.getImageData(0,0,r,a);if(n){l.drawImage(n,0,0,r,a);const u=l.getImageData(0,0,r,a).data;for(let d=2;d<u.length;d+=4)h.data[d]=u[d]}if(i){l.drawImage(i,0,0,r,a);const u=l.getImageData(0,0,r,a).data;for(let d=1;d<u.length;d+=4)h.data[d]=u[d]}l.putImageData(h,0,0);const c=(e||t).clone();return c.source=new sc(o),c}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const a=this.json;let o;a.bufferViews||(a.bufferViews=[]),o=t===hh?1:t===ch?2:4;const l=_g(i*e.itemSize*o),h=new DataView(new ArrayBuffer(l));let c=0;for(let d=n;d<n+i;d++)for(let p=0;p<e.itemSize;p++){let m;e.itemSize>4?m=e.array[d*e.itemSize+p]:p===0?m=e.getX(d):p===1?m=e.getY(d):p===2?m=e.getZ(d):p===3&&(m=e.getW(d)),t===Qp?h.setFloat32(c,m,!0):t===em?h.setUint32(c,m,!0):t===ch?h.setUint16(c,m,!0):t===hh&&h.setUint8(c,m),c+=o}const u={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(u.target=r),r===tm&&(u.byteStride=e.itemSize*o),this.byteOffset+=l,a.bufferViews.push(u),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new window.FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const a=uh(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,i){const r=this.options,a=this.json;let o;if(e.array.constructor===Float32Array)o=Qp;else if(e.array.constructor===Uint32Array)o=em;else if(e.array.constructor===Uint16Array)o=ch;else{if(e.array.constructor!==Uint8Array)throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type.");o=hh}if(n===void 0&&(n=0),i===void 0&&(i=e.count),r.truncateDrawRange&&t!==void 0&&t.index===null){const d=n+i,p=t.drawRange.count===1/0?e.count:t.drawRange.start+t.drawRange.count;n=Math.max(n,t.drawRange.start),(i=Math.min(d,p)-n)<0&&(i=0)}if(i===0)return null;const l=function(d,p,m){const g={min:new Array(d.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(d.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let v=p;v<p+m;v++)for(let f=0;f<d.itemSize;f++){let b;d.itemSize>4?b=d.array[v*d.itemSize+f]:f===0?b=d.getX(v):f===1?b=d.getY(v):f===2?b=d.getZ(v):f===3&&(b=d.getW(v)),g.min[f]=Math.min(g.min[f],b),g.max[f]=Math.max(g.max[f],b)}return g}(e,n,i);let h;t!==void 0&&(h=e===t.index?Kb:tm);const c=this.processBufferView(e,o,n,i,h),u={bufferView:c.id,byteOffset:c.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:{1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",16:"MAT4"}[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),a.accessors||(a.accessors=[]),a.accessors.push(u)-1}processImage(e,t,n,i="image/png"){const r=this,a=r.cache,o=r.json,l=r.options,h=r.pending;a.images.has(e)||a.images.set(e,{});const c=a.images.get(e),u=i+":flipY/"+n.toString();if(c[u]!==void 0)return c[u];o.images||(o.images=[]);const d={mimeType:i};if(l.embedImages){const m=im=im||document.createElement("canvas");m.width=Math.min(e.width,l.maxTextureSize),m.height=Math.min(e.height,l.maxTextureSize);const g=m.getContext("2d");if(n===!0&&(g.translate(0,m.height),g.scale(1,-1)),typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas!="undefined"&&e instanceof OffscreenCanvas||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap)g.drawImage(e,0,0,m.width,m.height);else{t!==1023&&console.error("GLTFExporter: Only RGBAFormat is supported."),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const v=new Uint8ClampedArray(e.height*e.width*4);for(let f=0;f<v.length;f+=4)v[f+0]=e.data[f+0],v[f+1]=e.data[f+1],v[f+2]=e.data[f+2],v[f+3]=e.data[f+3];g.putImageData(new ImageData(v,e.width,e.height),0,0)}l.binary===!0?h.push(new Promise(function(v){m.toBlob(function(f){r.processBufferViewImage(f).then(function(b){d.bufferView=b,v()})},i)})):d.uri=m.toDataURL(i)}else d.uri=e.src;const p=o.images.push(d)-1;return c[u]=p,p}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Lt[e.magFilter],minFilter:Lt[e.minFilter],wrapS:Lt[e.wrapS],wrapT:Lt[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const t=this.cache,n=this.json;if(t.textures.has(e))return t.textures.get(e);n.textures||(n.textures=[]);let i=e.userData.mimeType;i==="image/webp"&&(i="image/png");const r={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,i)};e.name&&(r.name=e.name),this._invokeAll(function(o){o.writeTexture&&o.writeTexture(e,r)});const a=n.textures.push(r)-1;return t.textures.set(e,a),a}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(cs(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(o)};this.applyTextureTransform(l,o),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:this.processTexture(e.map)};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive.clone().multiplyScalar(e.emissiveIntensity),l=Math.max(o.r,o.g,o.b);if(l>1&&(o.multiplyScalar(1/l),console.warn("THREE.GLTFExporter: Some emissive components exceed 1; emissive has been limited")),l>0&&(i.emissiveFactor=o.toArray()),e.emissiveMap){const h={index:this.processTexture(e.emissiveMap)};this.applyTextureTransform(h,e.emissiveMap),i.emissiveTexture=h}}if(e.normalMap){const o={index:this.processTexture(e.normalMap)};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){const o={index:this.processTexture(e.aoMap),texCoord:1};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===2&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let x=0,y=e.material.length;x<y;x++)i.push(e.material[x].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const a=e.geometry;let o;if(o=e.isLineSegments?Kp:e.isLineLoop?Jb:e.isLine?Zb:e.isPoints?Yb:e.material.wireframe?Kp:$b,a.isBufferGeometry!==!0)throw new Error("THREE.GLTFExporter: Geometry is not of type THREE.BufferGeometry.");const l={},h={},c=[],u=[],d={uv:"TEXCOORD_0",uv2:"TEXCOORD_1",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=a.getAttribute("normal");p===void 0||this.isNormalizedNormalAttribute(p)||(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let m=null;for(let x in a.attributes){if(x.slice(0,5)==="morph")continue;const y=a.attributes[x];if(x=d[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),t.attributes.has(this.getUID(y))){h[x]=t.attributes.get(this.getUID(y));continue}m=null;const _=y.array;x!=="JOINTS_0"||_ instanceof Uint16Array||_ instanceof Uint8Array||(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new ze(new Uint16Array(_),y.itemSize,y.normalized));const M=this.processAccessor(m||y,a);M!==null&&(h[x]=M,t.attributes.set(this.getUID(y),M))}if(p!==void 0&&a.setAttribute("normal",p),Object.keys(h).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const x=[],y=[],_={};if(e.morphTargetDictionary!==void 0)for(const M in e.morphTargetDictionary)_[e.morphTargetDictionary[M]]=M;for(let M=0;M<e.morphTargetInfluences.length;++M){const S={};let D=!1;for(const P in a.morphAttributes){if(P!=="position"&&P!=="normal"){D||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),D=!0);continue}const I=a.morphAttributes[P][M],F=P.toUpperCase(),B=a.attributes[P];if(t.attributes.has(this.getUID(I))){S[F]=t.attributes.get(this.getUID(I));continue}const W=I.clone();if(!a.morphTargetsRelative)for(let O=0,G=I.count;O<G;O++)W.setXYZ(O,I.getX(O)-B.getX(O),I.getY(O)-B.getY(O),I.getZ(O)-B.getZ(O));S[F]=this.processAccessor(W,a),t.attributes.set(this.getUID(B),S[F])}u.push(S),x.push(e.morphTargetInfluences[M]),e.morphTargetDictionary!==void 0&&y.push(_[M])}l.weights=x,y.length>0&&(l.extras={},l.extras.targetNames=y)}const g=Array.isArray(e.material);if(g&&a.groups.length===0)return null;const v=g?e.material:[e.material],f=g?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,y=f.length;x<y;x++){const _={mode:o,attributes:h};if(this.serializeUserData(a,_),u.length>0&&(_.targets=u),a.index!==null){let S=this.getUID(a.index);f[x].start===void 0&&f[x].count===void 0||(S+=":"+f[x].start+":"+f[x].count),t.attributes.has(S)?_.indices=t.attributes.get(S):(_.indices=this.processAccessor(a.index,a,f[x].start,f[x].count),t.attributes.set(S,_.indices)),_.indices===null&&delete _.indices}const M=this.processMaterial(v[f[x].materialIndex]);M!==null&&(_.material=M),c.push(_)}l.primitives=c,n.meshes||(n.meshes=[]),this._invokeAll(function(x){x.writeMesh&&x.writeMesh(e,l)});const b=n.meshes.push(l)-1;return t.meshes.set(r,b),b}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:2*e.right,ymag:2*e.top,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:Xm.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]);const r=(e=Rc.Utils.mergeMorphTargetTracks(e.clone(),t)).tracks,a=[],o=[];for(let l=0;l<r.length;++l){const h=r[l],c=Ce.parseTrackName(h.name);let u=Ce.findNode(t,c.nodeName);const d=nm[c.propertyName];if(c.objectName==="bones"&&(u=u.isSkinnedMesh===!0?u.skeleton.getBoneByName(c.objectIndex):void 0),!u||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name),null;const p=1;let m,g=h.values.length/h.times.length;d===nm.morphTargetInfluences&&(g/=u.morphTargetInfluences.length),h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",g/=3):m=h.getInterpolation()===2300?"STEP":"LINEAR",o.push({input:this.processAccessor(new ze(h.times,p)),output:this.processAccessor(new ze(h.values,g)),interpolation:m}),a.push({sampler:o.length-1,target:{node:i.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(16*r.bones.length),h=new ue;for(let c=0;c<r.bones.length;++c)o.push(n.get(r.bones[c])),h.copy(r.boneInverses[c]),h.multiply(e.bindMatrix).toArray(l,16*c);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new ze(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),h=e.scale.toArray();cs(o,[0,0,0,1])||(r.rotation=o),cs(l,[0,0,0])||(r.translation=l),cs(h,[1,1,1])||(r.scale=h)}else e.matrixAutoUpdate&&e.updateMatrix(),cs(e.matrix.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const o=this.processMesh(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let l=0,h=e.children.length;l<h;l++){const c=e.children[l];if(c.visible||n.onlyVisible===!1){const u=this.processNode(c);u!==null&&o.push(u)}}o.length>0&&(r.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,r)});const a=t.nodes.push(r)-1;return i.set(e,a),a}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const h=this.processNode(l);h!==null&&r.push(h)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}processObjects(e){const t=new un;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof un?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class h1{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight)return void console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);const n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(e.penumbra-1)*e.angle*-1,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),!e.target||e.target.parent===e&&e.target.position.x===0&&e.target.position.y===0&&e.target.position.z===-1||console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class c1{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const n=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},n[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class u1{constructor(e){this.writer=e,this.name="KHR_materials_pbrSpecularGlossiness"}writeMaterial(e,t){if(!e.isGLTFSpecularGlossinessMaterial)return;const n=this.writer,i=n.extensionsUsed,r={};t.pbrMetallicRoughness.baseColorFactor&&(r.diffuseFactor=t.pbrMetallicRoughness.baseColorFactor);const a=[1,1,1];if(e.specular.toArray(a,0),r.specularFactor=a,r.glossinessFactor=e.glossiness,t.pbrMetallicRoughness.baseColorTexture&&(r.diffuseTexture=t.pbrMetallicRoughness.baseColorTexture),e.specularMap){const o={index:n.processTexture(e.specularMap)};n.applyTextureTransform(o,e.specularMap),r.specularGlossinessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class d1{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const a={index:n.processTexture(e.clearcoatMap)};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const a={index:n.processTexture(e.clearcoatRoughnessMap)};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){const a={index:n.processTexture(e.clearcoatNormalMap)};n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class p1{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const a={index:n.processTexture(e.transmissionMap)};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class m1{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const a={index:n.processTexture(e.thicknessMap)};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}r.attenuationDistance=e.attenuationDistance,r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}Rc.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),a=s.createInterpolant(new s.ValueBufferType(n));let o;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(a.evaluate(e),0),r.set(s.values,n),o=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(e),s.values.length),o=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return s.times=i,s.values=r,o},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r];const o=Ce.parseTrackName(a.name),l=Ce.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(2301)}const h=l.morphTargetInfluences.length,c=l.morphTargetDictionary[o.propertyIndex];if(c===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const p=new u.ValueBufferType(h*u.times.length);for(let m=0;m<u.times.length;m++)p[m*h+c]=u.values[m];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=p,n[l.uuid]=u,t.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let p=0;p<u.times.length;p++)u.values[p*h+c]=d.evaluate(u.times[p]);for(let p=0;p<a.times.length;p++){const m=this.insertKeyframe(u,a.times[p]);u.values[m*h+c]=a.values[p]}}return s.tracks=t,s}};/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=s=>s.material!==void 0&&s.userData&&s.userData.variantMaterials&&!!Array.from(s.userData.variantMaterials.values()).filter(e=>Ja(e.material)),Ja=s=>s&&s.isMaterial&&!Array.isArray(s);class f1{constructor(e){this.writer=e,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(e){const t=new Set;for(const n of e)n.traverse(i=>{if(!rm(i))return;const r=i.userData.variantMaterials,a=i.userData.variantData;for(const[o,l]of a){const h=r.get(l.index);Ja(h.material)&&t.add(o)}});t.forEach(n=>this.variantNames.push(n))}writeMesh(e,t){if(!rm(e))return;const n=e.userData,i=n.variantMaterials,r=n.variantData,a=new Map,o=new Map,l=Array.from(r.values()).sort((u,d)=>u.index-d.index);for(const[u,d]of l.entries())o.set(d.index,u);for(const u of r.values()){const d=i.get(u.index).material;if(!Ja(d))continue;const p=this.writer.processMaterial(d);a.has(p)||a.set(p,{material:p,variants:[]}),a.get(p).variants.push(o.get(u.index))}const h=Array.from(a.values()).map(u=>u.variants.sort((d,p)=>d-p)&&u).sort((u,d)=>u.material-d.material);if(h.length===0)return;const c=Ja(n.originalMaterial)?this.writer.processMaterial(n.originalMaterial):-1;for(const u of t.primitives)c>=0&&(u.material=c),u.extensions=u.extensions||{},u.extensions[this.name]={mappings:h}}afterParse(){if(this.variantNames.length===0)return;const e=this.writer.json;e.extensions=e.extensions||{};const t=this.variantNames.map(n=>({name:n}));e.extensions[this.name]={variants:t},this.writer.extensionsUsed[this.name]=!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=Symbol("correlatedObjects"),De=Symbol("sourceObject"),Kt=Symbol("onUpdate");class Bs{constructor(e,t,n=null){this[Kt]=e,this[De]=t,this[$e]=n}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new _c,sm=new Dt,v1=new Fi(2,2);let y1=0;const Za=Symbol("threeTexture");class x1 extends Bs{get[Za](){var e;return console.assert(this[$e]!=null&&this[$e].size>0,"Image correlated object is undefined"),(e=this[$e])===null||e===void 0?void 0:e.values().next().value}constructor(e,t,n){super(e,n=n!=null?n:{name:t&&t.image&&t.image.src?t.image.src.split("/").pop():"adhoc_image",uri:t&&t.image&&t.image.src?t.image.src:"adhoc_image"+y1++},new Set(t?[t]:[]))}get name(){return this[De].name||""}get uri(){return this[De].uri}get bufferView(){return this[De].bufferView}get type(){return this.uri!=null?"external":"embedded"}set name(e){this[De].name=e}async setURI(e){this[De].uri=e,this[De].name=e.split("/").pop();const t=await new Promise((i,r)=>{g1.load(e,i,void 0,r)}),n=this[Za];n.image=t,n.needsUpdate=!0,this[Kt]()}async createThumbnail(e,t){const n=new un;sm.map=this[Za];const i=new pe(v1,sm);n.add(i);const r=new Ui(-1,1,1,-1,0,1),{threeRenderer:a}=kn.singleton,o=new pt(e,t);a.setRenderTarget(o),a.render(n,r),a.setRenderTarget(null);const l=new Uint8Array(e*t*4);a.readRenderTargetPixels(o,0,0,e,t,l),Nt.width=e,Nt.height=t;const h=Nt.getContext("2d"),c=h.createImageData(e,t);return c.data.set(l),h.putImageData(c,0,0),new Promise(async(u,d)=>{Nt.toBlob(p=>{if(!p)return d("Failed to capture thumbnail.");u(URL.createObjectURL(p))},"image/png")})}}var Ft,Di;(function(s){s[s.Nearest=9728]="Nearest",s[s.Linear=9729]="Linear",s[s.NearestMipmapNearest=9984]="NearestMipmapNearest",s[s.LinearMipmapNearest=9985]="LinearMipmapNearest",s[s.NearestMipmapLinear=9986]="NearestMipmapLinear",s[s.LinearMipmapLinear=9987]="LinearMipmapLinear"})(Ft||(Ft={})),function(s){s[s.ClampToEdge=33071]="ClampToEdge",s[s.MirroredRepeat=33648]="MirroredRepeat",s[s.Repeat=10497]="Repeat"}(Di||(Di={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=(()=>{const s=[Ft.Nearest,Ft.Linear,Ft.NearestMipmapNearest,Ft.LinearMipmapLinear,Ft.NearestMipmapLinear,Ft.LinearMipmapLinear];return e=>s.indexOf(e)>-1})(),_1=(()=>{const s=[Ft.Nearest,Ft.Linear];return e=>s.indexOf(e)>-1})(),w1=(()=>{const s=[Di.ClampToEdge,Di.MirroredRepeat,Di.Repeat];return e=>s.indexOf(e)>-1})(),am=Symbol("threeTextures"),us=Symbol("setProperty"),or=Symbol("sourceSampler");class M1 extends Bs{get[am](){return console.assert(this[$e]!=null&&this[$e].size>0,"Sampler correlated object is undefined"),this[$e]}get[or](){return console.assert(this[De]!=null,"Sampler source is undefined"),this[De]}constructor(e,t,n){(n=n!=null?n:{}).minFilter==null&&(n.minFilter=t?t.minFilter:Ft.LinearMipmapLinear),n.magFilter==null&&(n.magFilter=t?t.magFilter:Ft.Linear),n.wrapS==null&&(n.wrapS=t?t.wrapS:Di.Repeat),n.wrapT==null&&(n.wrapT=t?t.wrapT:Di.Repeat),super(e,n,new Set(t?[t]:[]))}get name(){return this[De].name||""}get minFilter(){return this[or].minFilter}get magFilter(){return this[or].magFilter}get wrapS(){return this[or].wrapS}get wrapT(){return this[or].wrapT}setMinFilter(e){this[us]("minFilter",e)}setMagFilter(e){this[us]("magFilter",e)}setWrapS(e){this[us]("wrapS",e)}setWrapT(e){this[us]("wrapT",e)}[us](e,t){const n=this[or];if(n!=null){if(((i,r)=>{switch(i){case"minFilter":return b1(r);case"magFilter":return _1(r);case"wrapS":case"wrapT":return w1(r);default:throw new Error(`Cannot configure property "${i}" on Sampler`)}})(e,t)){n[e]=t;for(const i of this[am])i[e]=t,i.needsUpdate=!0}this[Kt]()}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=Symbol("image"),lm=Symbol("sampler");class wg extends Bs{constructor(e,t,n=null,i=null,r=null){super(e,n||{},new Set(t?[t]:[])),this[lm]=new M1(e,t,i),this[om]=new x1(e,t,r)}get name(){return this[De].name||""}set name(e){this[De].name=e}get sampler(){return this[lm]}get source(){return this[om]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mg,Sg;const $a=Symbol("texture"),Mi=Symbol("transform"),dh=Symbol("materials"),hm=Symbol("usage");var Ut;(function(s){s[s.Base=0]="Base",s[s.MetallicRoughness=1]="MetallicRoughness",s[s.Normal=2]="Normal",s[s.Occlusion=3]="Occlusion",s[s.Emissive=4]="Emissive"})(Ut||(Ut={}));class Ts{constructor(e,t,n,i,r,a){if(this[Mg]=null,this[Sg]={rotation:0,scale:new Q(1,1),offset:new Q(0,0)},a&&n){const o=r.textures?r.textures[a.index]:null,l=o&&r.samplers?r.samplers[o.sampler]:null,h=o&&r.images?r.images[o.source]:null;this[Mi].rotation=n.rotation,this[Mi].scale.copy(n.repeat),this[Mi].offset.copy(n.offset),this[$a]=new wg(e,n,o,l,h)}this.onUpdate=e,this[dh]=i,this[hm]=t}get texture(){return this[$a]}setTexture(e){const t=e!=null?e.source[Za]:null;let n=3001;if(this[$a]=e,this[dh])for(const i of this[dh]){switch(this[hm]){case Ut.Base:i.map=t;break;case Ut.MetallicRoughness:n=3e3,i.metalnessMap=t,i.roughnessMap=t;break;case Ut.Normal:n=3e3,i.normalMap=t;break;case Ut.Occlusion:n=3e3,i.aoMap=t;break;case Ut.Emissive:i.emissiveMap=t}i.needsUpdate=!0}t&&(t.encoding=n,t.rotation=this[Mi].rotation,t.repeat=this[Mi].scale,t.offset=this[Mi].offset),this.onUpdate()}}Mg=$a,Sg=Mi;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=Symbol("threeMaterials"),cm=Symbol("baseColorTexture"),um=Symbol("metallicRoughnessTexture");class S1 extends Bs{constructor(e,t,n,i){super(e,n,i),n.baseColorFactor==null&&(n.baseColorFactor=[1,1,1,1]),n.roughnessFactor==null&&(n.roughnessFactor=1),n.metallicFactor==null&&(n.metallicFactor=1);const{baseColorTexture:r,metallicRoughnessTexture:a}=n,{map:o,metalnessMap:l}=i.values().next().value;this[cm]=new Ts(e,Ut.Base,o,i,t,r||null),this[um]=new Ts(e,Ut.MetallicRoughness,l,i,t,a||null)}get[za](){return this[$e]}get baseColorFactor(){return this[De].baseColorFactor}get metallicFactor(){return this[De].metallicFactor}get roughnessFactor(){return this[De].roughnessFactor}get baseColorTexture(){return this[cm]}get metallicRoughnessTexture(){return this[um]}setBaseColorFactor(e){for(const t of this[za])t.color.fromArray(e),t.opacity=e[3];this[De].baseColorFactor=e,this[Kt]()}setMetallicFactor(e){for(const t of this[za])t.metalness=e;this[De].metallicFactor=e,this[Kt]()}setRoughnessFactor(e){for(const t of this[za])t.roughness=e;this[De].roughnessFactor=e,this[Kt]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dm;const pm=Symbol("pbrMetallicRoughness"),mm=Symbol("normalTexture"),fm=Symbol("occlusionTexture"),gm=Symbol("emissiveTexture"),T1=Symbol("backingThreeMaterial"),ph=Symbol("applyAlphaCutoff"),vi=Symbol("lazyLoadGLTFInfo"),mh=Symbol("initialize"),ec=Symbol("getLoadedMaterial"),Et=Symbol("ensureMaterialIsLoaded"),vm=Symbol("gltfIndex"),fs=Symbol("setActive"),Ka=Symbol("variantIndices"),fh=Symbol("isActive"),Qa=Symbol("variantSet"),ym=Symbol("modelVariants");class gh extends Bs{constructor(e,t,n,i,r,a,o,l){super(e,n,o),this[dm]=new Set,this[vm]=i,this[fh]=r,this[ym]=a,l==null?this[mh](t):this[vi]=l}get[(dm=Qa,T1)](){return this[$e].values().next().value}[mh](e){const t=this[Kt],n=this[De],i=this[$e];n.extensions&&n.extensions.KHR_materials_pbrSpecularGlossiness&&console.warn(`Material ${n.name} uses a deprecated extension
          "KHR_materials_pbrSpecularGlossiness", please use
          "pbrMetallicRoughness" instead. Specular Glossiness materials are
          currently supported for rendering, but not for our scene-graph API,
          nor for auto-generation of USDZ for Quick Look.`),n.pbrMetallicRoughness==null&&(n.pbrMetallicRoughness={}),this[pm]=new S1(t,e,n.pbrMetallicRoughness,i),n.emissiveFactor==null&&(n.emissiveFactor=[0,0,0]),n.doubleSided==null&&(n.doubleSided=!1),n.alphaMode==null&&(n.alphaMode="OPAQUE"),n.alphaCutoff==null&&(n.alphaCutoff=.5);const{normalTexture:r,occlusionTexture:a,emissiveTexture:o}=n,{normalMap:l,aoMap:h,emissiveMap:c}=i.values().next().value;this[mm]=new Ts(t,Ut.Normal,l,i,e,r||null),this[fm]=new Ts(t,Ut.Occlusion,h,i,e,a||null),this[gm]=new Ts(t,Ut.Emissive,c,i,e,o||null)}async[ec](){if(this[vi]!=null){const{set:e,material:t}=await this[vi].doLazyLoad();return this[$e]=e,this[mh](this[vi].gltf),this[vi]=void 0,this.ensureLoaded=async()=>{},t}return this[$e].values().next().value}[Et](){if(this[vi]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[ec]()}get isLoaded(){return this[vi]==null}get isActive(){return this[fh]}[fs](e){this[fh]=e}get name(){return this[De].name}set name(e){const t=this[De];if(t!=null&&(t.name=e),this[$e]!=null)for(const n of this[$e])n.name=e}get pbrMetallicRoughness(){return this[Et](),this[pm]}get normalTexture(){return this[Et](),this[mm]}get occlusionTexture(){return this[Et](),this[fm]}get emissiveTexture(){return this[Et](),this[gm]}get emissiveFactor(){return this[Et](),this[De].emissiveFactor}get index(){return this[vm]}[Ka](){return this[Qa]}hasVariant(e){const t=this[ym].get(e);return t!=null&&this[Qa].has(t.index)}setEmissiveFactor(e){this[Et]();for(const t of this[$e])t.emissive.fromArray(e);this[De].emissiveFactor=e,this[Kt]()}[ph](){this[Et]();const e=this[De];for(const t of this[$e])this[De].alphaMode==="MASK"?t.alphaTest=e.alphaCutoff:t.alphaTest=void 0,t.needsUpdate=!0}setAlphaCutoff(e){this[Et](),this[De].alphaCutoff=e,this[ph](),this[Kt]()}getAlphaCutoff(){return this[Et](),this[De].alphaCutoff}setDoubleSided(e){this[Et]();for(const t of this[$e])t.side=e?2:0,t.needsUpdate=!0;this[De].doubleSided=e,this[Kt]()}getDoubleSided(){return this[Et](),this[De].doubleSided}setAlphaMode(e){this[Et]();const t=(n,i)=>{n.transparent=i,n.depthWrite=!i};this[De].alphaMode=e;for(const n of this[$e])t(n,e==="BLEND"),this[ph](),n.needsUpdate=!0;this[Kt]()}getAlphaMode(){return this[Et](),this[De].alphaMode}}var Tg,Eg,Ag;const Kn=Symbol("materials"),Pn=Symbol("variantToMaterialMap"),Cn=Symbol("modelVariants"),xm=Symbol("mesh"),Rg=Symbol("children"),bm=Symbol("initialMaterialIdx"),vh=Symbol("activeMaterialIdx");class Cg{constructor(e){this.name="",this[Tg]=new Array,this.name=e}}Tg=Rg;class _m extends Cg{constructor(e,t,n,i){super(e.name),this[Eg]=new Map,this[Ag]=new Map,this[xm]=e;const{gltf:r,threeGLTF:a,threeObjectMap:o}=i;this[Cn]=n,this.mesh.userData.variantData=n;const l=o.get(e.material);l.materials!=null?this[bm]=this[vh]=l.materials:console.error(`Primitive (${e.name}) missing initial material reference.`);const h=e.userData.associations||{};if(h.meshes==null)return void console.error("Mesh is missing primitive index association");const c=((r.meshes||[])[h.meshes].primitives||[])[h.primitives];if(c!=null){if(c.material!=null)this[Kn].set(c.material,t[c.material]);else{const u=t.findIndex(d=>d.name==="Default");u>=0?this[Kn].set(u,t[u]):console.warn("gltfPrimitive has no material!")}if(c.extensions&&c.extensions.KHR_materials_variants){const u=c.extensions.KHR_materials_variants,d=a.parser.json.extensions.KHR_materials_variants.variants;for(const p of u.mappings){const m=t[p.material];this[Kn].set(p.material,m);for(const g of p.variants){const{name:v}=d[g];this[Pn].set(g,m),m[Ka]().add(g),n.has(v)||n.set(v,{name:v,index:g})}}}}else console.error("Mesh primitive definition is missing.")}get mesh(){return this[xm]}async setActiveMaterial(e){const t=this[Kn].get(e);return t!=null&&(this.mesh.material=await t[ec](),this[vh]=e),this.mesh.material}getActiveMaterial(){return this[Kn].get(this[vh])}getMaterial(e){return this[Kn].get(e)}async enableVariant(e){if(e==null)return this.setActiveMaterial(this[bm]);if(this[Pn]!=null&&this[Cn].has(e)){const t=this[Cn].get(e);return this.enableVariantHelper(t.index)}return null}async enableVariantHelper(e){if(this[Pn]!=null&&e!=null){const t=this[Pn].get(e);if(t!=null)return this.setActiveMaterial(t.index)}return null}async instantiateVariants(){if(this[Pn]!=null)for(const e of this[Pn].keys()){if(this.mesh.userData.variantMaterials.get(e).material!=null)continue;const t=await this.enableVariantHelper(e);t!=null&&(this.mesh.userData.variantMaterials.get(e).material=t)}}get variantInfo(){return this[Pn]}addVariant(e,t){if(!this.ensureVariantIsUnused(t))return!1;this[Cn].has(t)||this[Cn].set(t,{name:t,index:this[Cn].size});const n=this[Cn].get(t).index;return e[Ka]().add(n),this[Pn].set(n,e),this[Kn].set(e.index,e),this.updateVariantUserData(n,e),!0}deleteVariant(e){if(this.variantInfo.has(e)){this.variantInfo.delete(e);const t=this.mesh.userData.variantMaterials;t!=null&&t.delete(e)}}updateVariantUserData(e,t){t[Ka]().add(e),this.mesh.userData.variantData=this[Cn],this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(e,{material:t[$e].values().next().value,gltfMaterialIndex:t.index})}ensureVariantIsUnused(e){const t=this[Cn].get(e);return t==null||!this.variantInfo.has(t.index)||(console.warn(`Primitive cannot add variant '${e}' for this material, it already exists.`),!1)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wm,Mm,Sm,Tm,Em,Am;Eg=Kn,Ag=Pn;const yi=Symbol("materials"),yh=Symbol("hierarchy"),Rm=Symbol("roots"),Ln=Symbol("primitives"),xh=Symbol("correlatedSceneGraph"),Lg=Symbol("prepareVariantsForExport"),Pg=Symbol("switchVariant"),Cm=Symbol("threeScene"),Lm=Symbol("materialsFromPoint"),Dg=Symbol("materialFromPoint"),ft=Symbol("variantData"),tc=Symbol("availableVariants"),bh=Symbol("modelOnUpdate"),Pm=Symbol("cloneMaterial");class E1{constructor(e,t,n,i){this.gltf=e,this.gltfElementMap=t,this.mapKey=n,this.doLazyLoad=i}}class A1{constructor(e,t=()=>{}){this[wm]=new Array,this[Mm]=new Array,this[Sm]=new Array,this[Tm]=new Array,this[Em]=()=>{},this[Am]=new Map,this[bh]=t,this[xh]=e;const{gltf:n,threeGLTF:i,gltfElementMap:r}=e;this[Cm]=i.scene;for(const[l,h]of n.materials.entries()){const c=r.get(h);if(c!=null)this[yi].push(new gh(t,n,h,l,!0,this[ft],c));else{const u=(n.materials||[])[l],d=l,p=async()=>{const m=await i.parser.getDependency("material",d),g=new Set;return r.set(u,g),g.add(m),{set:g,material:m}};this[yi].push(new gh(t,n,u,l,!1,this[ft],c,new E1(n,r,u,p)))}}const a=new Map,o=new Array;for(const l of i.scene.children)o.push(l);for(;o.length>0;){const l=o.pop();let h=null;l instanceof pe?(h=new _m(l,this.materials,this[ft],e),this[Ln].push(h)):h=new Cg(l.name);const c=a.get(l);c!=null?c[Rg].push(h):this[Rm].push(h),this[yh].push(h);for(const u of l.children)o.push(u),a.set(l,h)}}get materials(){return this[yi]}[(wm=yi,Mm=yh,Sm=Rm,Tm=Ln,Em=bh,Am=ft,tc)](){const e=Array.from(this[ft].values());return e.sort((t,n)=>t.index-n.index),e.map(t=>t.name)}getMaterialByName(e){const t=this[yi].filter(n=>n.name===e);return t.length>0?t[0]:null}[Lm](e){return e.intersectObject(this[Cm],!0).map(t=>{const n=this[yh].find(i=>i instanceof _m&&i.mesh===t.object);return n!=null?n.getActiveMaterial():null})}[Dg](e){const t=this[Lm](e);return t.length>0?t[0]:null}async[Pg](e){for(const t of this[Ln])await t.enableVariant(e);for(const t of this.materials)t[fs](!1);for(const t of this[Ln])this.materials[t.getActiveMaterial().index][fs](!0)}async[Lg](){const e=new Array;for(const t of this[Ln])e.push(t.instantiateVariants());await Promise.all(e)}[Pm](e,t){const n=this.materials[e];n.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const i=n[$e],r=JSON.parse(JSON.stringify(n[De]));r.name=t,this[xh].gltf.materials.push(r);const a=new Set;for(const[l,h]of i.entries()){const c=h.clone();c.name=t+(i.size>1?"_inst"+l:""),a.add(c)}const o=new gh(this[bh],this[xh].gltf,r,this[yi].length,!1,this[ft],a);return this[yi].push(o),o}createMaterialInstanceForVariant(e,t,n,i=!0){let r=null;for(const a of this[Ln]){const o=this[ft].get(n);o!=null&&a.variantInfo.has(o.index)||a.getMaterial(e)!=null&&(this.hasVariant(n)||this.createVariant(n),r==null&&(r=this[Pm](e,t)),a.addVariant(r,n))}if(i&&r!=null){r[fs](!0),this.materials[e][fs](!1);for(const a of this[Ln])a.enableVariant(n)}return r}createVariant(e){this[ft].has(e)?console.warn(`Variant '${e}'' already exists`):this[ft].set(e,{name:e,index:this[ft].size})}hasVariant(e){return this[ft].has(e)}setMaterialToVariant(e,t){if(this[tc]().find(n=>n===t)!=null)if(e<0||e>=this.materials.length)console.error("setMaterialToVariant(): materialIndex is out of bounds.");else for(const n of this[Ln]){const i=n.getMaterial(e);i!=null&&n.addVariant(i,t)}else console.warn(`Can't add material to '${t}', the variant does not exist.'`)}updateVariantName(e,t){const n=this[ft].get(e);n!=null&&(n.name=t,this[ft].set(t,n),this[ft].delete(e))}deleteVariant(e){const t=this[ft].get(e);if(t!=null){for(const n of this.materials)n.hasVariant(e)&&n[Qa].delete(t.index);for(const n of this[Ln])n.deleteVariant(t.index);this[ft].delete(e)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _h=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const ds=Symbol("currentGLTF"),lr=Symbol("model"),wh=Symbol("getOnUpdateMethod"),Dm=Symbol("textureLoader"),Mh=Symbol("originalGltfJson");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sh=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const R1=Math.PI/32,C1={basis:[Eo(vt(R1,"rad"))],keywords:{auto:[null]}},hr=Symbol("autoRotateStartTime"),Th=Symbol("radiansPerSecond"),Im=Symbol("syncRotationRate"),Eh=Symbol("onCameraChange"),L1=(s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this[e]=new Map,this[t]=a=>{a.forEach(o=>{o instanceof MutationRecord&&o.type!=="childList"||(o.addedNodes.forEach(l=>{this[Nl](l)}),o.removedNodes.forEach(l=>{this[rp](l)}),this[bt]())})},this[n]=new MutationObserver(this[Ol])}connectedCallback(){super.connectedCallback();for(let o=0;o<this.children.length;++o)this[Nl](this.children[o]);const{ShadyDOM:a}=self;a==null?this[Yr].observe(this,{childList:!0}):this[Yr]=a.observeChildren(this,this[Ol])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:a}=self;a==null?this[Yr].disconnect():a.unobserveChildren(this[Yr])}[(e=tr,t=Ol,n=Yr,nn)](a,o){super[nn](a,o);const l=this[te],{annotationRenderer:h}=l,c=l.getCamera();l.shouldRender()&&(l.updateHotspots(c.position),h.domElement.style.display="",h.render(l,c))}updateHotspot(a){const o=this[tr].get(a.name);o!=null&&(o.updatePosition(a.position),o.updateNormal(a.normal),this[bt]())}positionAndNormalFromPoint(a,o){const l=this[te],h=l.getNDC(a,o),c=l.positionAndNormalFromPoint(h);if(c==null)return null;Fl.copy(l.target.matrixWorld).invert();const u=Pa(c.position.applyMatrix4(Fl));sp.getNormalMatrix(Fl);const d=Pa(c.normal.applyNormalMatrix(sp));let p=null;return c.uv!=null&&(p=Qx(c.uv)),{position:u,normal:d,uv:p}}[Nl](a){if(!(a instanceof HTMLElement&&a.slot.indexOf("hotspot")===0))return;let o=this[tr].get(a.slot);o!=null?o.increment():(o=new $f({name:a.slot,position:a.dataset.position,normal:a.dataset.normal}),this[tr].set(a.slot,o),this[te].addHotspot(o)),this[te].queueRender()}[rp](a){if(!(a instanceof HTMLElement))return;const o=this[tr].get(a.slot);o&&(o.decrement()&&(this[te].removeHotspot(o),this[tr].delete(a.slot)),this[te].queueRender())}}return i})((s=>{var e,t,n,i;class r extends s{constructor(){super(...arguments),this[e]=void 0,this[t]=null,this[n]=new Mo,this[i]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[lr]}get availableVariants(){return this.model?this.model[tc]():[]}get originalGltfJson(){return this[Mh]}[(e=lr,t=ds,n=Dm,i=Mh,wh)](){return()=>{this[bt]()}}async createTexture(o,l="image/png"){const h=this[ds],c=await new Promise(u=>this[Dm].load(o,u));return h&&c?(c.encoding=3001,c.wrapS=1e3,c.wrapT=1e3,c.flipY=!1,c.userData.mimeType=l,new wg(this[wh](),c)):null}async updated(o){if(super.updated(o),o.has("variantName")){const l=this[ds],{variantName:h}=this;l!=null&&(await this[lr][Pg](h),this[bt](),this.dispatchEvent(new CustomEvent("variant-applied")))}if(o.has("orientation")||o.has("scale")){const{modelContainer:l}=this[te],h=Oi(this.orientation)[0].terms,c=cn(h[0]).number,u=cn(h[1]).number,d=cn(h[2]).number;l.quaternion.setFromEuler(new Fn(u,d,c,"YXZ"));const p=Oi(this.scale)[0].terms;l.scale.set(p[0].number,p[1].number,p[2].number),this[te].updateBoundingBox(),this[te].updateShadow(),this[ke].arRenderer.onUpdateScene(),this[bt]()}}[rn](){super[rn]();const{currentGLTF:o}=this[te];if(o!=null){const{correlatedSceneGraph:l}=o;l!=null&&o!==this[ds]&&(this[lr]=new A1(l,this[wh]()),this[Mh]=JSON.parse(JSON.stringify(l.gltf))),"variants"in o.userData&&this.requestUpdate("variantName")}this[ds]=o,this.dispatchEvent(new CustomEvent("scene-graph-ready"))}async exportScene(o){const l=this[te];return new Promise(async h=>{const c={binary:!0,onlyVisible:!0,maxTextureSize:1/0,forcePowerOfTwoTextures:!1,includeCustomExtensions:!1,embedImages:!0};Object.assign(c,o),c.animations=l.animations,c.truncateDrawRange=!0;const u=l.shadow;let d=!1;u!=null&&(d=u.visible,u.visible=!1),await this[lr][Lg](),new Rc().register(p=>new f1(p)).parse(l.modelContainer.children[0],p=>h(new Blob([c.binary?p:JSON.stringify(p)],{type:c.binary?"application/octet-stream":"application/json"})),c),u!=null&&(u.visible=d)})}materialFromPoint(o,l){const h=this[te],c=h.getNDC(o,l);return h.raycaster.setFromCamera(c,h.getCamera()),this[lr][Dg](h.raycaster)}}return _h([ge({type:String,attribute:"variant-name"})],r.prototype,"variantName",void 0),_h([ge({type:String,attribute:"orientation"})],r.prototype,"orientation",void 0),_h([ge({type:String,attribute:"scale"})],r.prototype,"scale",void 0),r})((s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=3e3,this.rotationPerSecond="auto",this[e]=performance.now(),this[t]=0,this[n]=a=>{this.autoRotate&&a.detail.source==="user-interaction"&&(this[hr]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Eh]),this[hr]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Eh]),this[hr]=performance.now()}updated(a){super.updated(a),a.has("autoRotate")&&(this[hr]=performance.now())}[(e=hr,t=Th,Im)](a){this[Th]=a[0]}[nn](a,o){if(super[nn](a,o),!this.autoRotate||!this[pr]()||this[ke].isPresenting)return;const l=Math.min(o,a-this[hr]-this.autoRotateDelay);l>0&&(this[te].yaw=this.turntableRotation+this[Th]*l*.001)}get turntableRotation(){return this[te].yaw}resetTurntableRotation(a=0){this[te].yaw=a}}return n=Eh,Sh([ge({type:Boolean,attribute:"auto-rotate"})],i.prototype,"autoRotate",void 0),Sh([ge({type:Number,attribute:"auto-rotate-delay"})],i.prototype,"autoRotateDelay",void 0),Sh([$n({intrinsics:C1,updateHandler:Im}),ge({type:String,attribute:"rotation-per-second"})],i.prototype,"rotationPerSecond",void 0),i})((s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=0,this.shadowSoftness=1,this.exposure=1,this[e]=null,this[t]=null,this[n]=a=>{a.element===this&&this[Ga]()}}connectedCallback(){super.connectedCallback(),this[ke].loader.addEventListener("preload",this[El])}disconnectedCallback(){super.disconnectedCallback(),this[ke].loader.removeEventListener("preload",this[El])}updated(a){super.updated(a),a.has("shadowIntensity")&&(this[te].setShadowIntensity(.5*this.shadowIntensity),this[bt]()),a.has("shadowSoftness")&&(this[te].setShadowSoftness(this.shadowSoftness),this[bt]()),a.has("exposure")&&(this[te].exposure=this.exposure,this[bt]()),(a.has("environmentImage")||a.has("skyboxImage"))&&this[Ai]()&&this[Ga]()}hasBakedShadow(){return this[te].bakedShadows.length>0}[(e=Wr,t=jr,n=El,rn)](){super[rn](),this[Wr]!=null&&this[Sa](this[Wr])}async[Ga](){const{skyboxImage:a,environmentImage:o}=this;this[jr]!=null&&(this[jr](),this[jr]=null);const{textureUtils:l}=this[ke];if(l!=null)try{const{environmentMap:h,skybox:c}=await new Promise(async(u,d)=>{const p=l.generateEnvironmentMapAndSkybox(Xf(a),o,{progressTracker:this[vr]});this[jr]=()=>d(p),u(await p)});this[te].background=c!=null?c.name===h.name?h:c:null,this[Sa](h),this[te].dispatchEvent({type:"envmap-update"})}catch(h){if(h instanceof Error)throw this[Sa](null),h}}[Sa](a){this[te].environment!==a&&(this[Wr]=a,this[te].environment=this[Wr],this.dispatchEvent(new CustomEvent("environment-change")),this[bt]())}}return Gr([ge({type:String,attribute:"environment-image"})],i.prototype,"environmentImage",void 0),Gr([ge({type:String,attribute:"skybox-image"})],i.prototype,"skyboxImage",void 0),Gr([ge({type:Number,attribute:"shadow-intensity"})],i.prototype,"shadowIntensity",void 0),Gr([ge({type:Number,attribute:"shadow-softness"})],i.prototype,"shadowSoftness",void 0),Gr([ge({type:Number})],i.prototype,"exposure",void 0),i})((s=>{var e,t,n,i,r,a,o,l,h,c,u,d,p,m,g,v,f;class b extends s{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit="0deg 75deg 105%",this.cameraTarget="auto auto auto",this.fieldOfView="auto",this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=3e3,this.interactionPromptStyle=Zl,this.interactionPrompt=Kr,this.interactionPolicy=Nb,this.orbitSensitivity=1,this.touchAction=Fb,this.disableZoom=!1,this.enablePan=!1,this.interpolationDecay=50,this.bounds="legacy",this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[t]=this.shadowRoot.querySelector(".interaction-prompt > .animated-container"),this[n]=this.shadowRoot.querySelector(".pan-target"),this[i]=1/0,this[r]=0,this[a]=1/0,this[o]=!1,this[l]=!1,this[h]=new Cb(this[te].camera,this[ti],this[te]),this[c]=new Va,this[u]=!1,this[d]=!1,this[p]=!1,this[m]=()=>{isFinite(this[is])||(this[is]=performance.now()),this.interactionPrompt!==kp||this[ts]||(this[An]=!0)},this[g]=()=>{this.interactionPrompt===kp&&(this[An]=!1,this[Qr].classList.remove("visible"),this[fi]=1/0,this[is]=1/0)},this[v]=({source:y})=>{this[Hp](),this[bt](),y===Qh&&(this[ts]=!0,this[Ua]()),this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:y}}))},this[f]=y=>{y.type==="pointer-change-start"?this[Ms].classList.add("pointer-tumbling"):this[Ms].classList.remove("pointer-tumbling")}}getCameraOrbit(){const{theta:y,phi:_,radius:M}=this[th];return{theta:y,phi:_,radius:M,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return Pa(this[ke].isPresenting?this[ke].arRenderer.target:this[te].getTarget())}getFieldOfView(){return this[He].getFieldOfView()}getMinimumFieldOfView(){return this[He].options.minimumFieldOfView}getMaximumFieldOfView(){return this[He].options.maximumFieldOfView}getIdealAspect(){return this[te].idealAspect}jumpCameraToGoal(){this[rs]=!0,this.requestUpdate(rs,!1)}resetInteractionPrompt(){this[ns]=0,this[fi]=1/0,this[ts]=!1,this[An]=this.interactionPrompt===Kr&&this.cameraControls}zoom(y){const _=new WheelEvent("wheel",{deltaY:-30*y});this[ti].dispatchEvent(_)}connectedCallback(){super.connectedCallback(),this[He].addEventListener("change",this[eh]),this[He].addEventListener("pointer-change-start",this[es]),this[He].addEventListener("pointer-change-end",this[es])}disconnectedCallback(){super.disconnectedCallback(),this[He].removeEventListener("change",this[eh]),this[He].removeEventListener("pointer-change-start",this[es]),this[He].removeEventListener("pointer-change-end",this[es])}updated(y){super.updated(y);const _=this[He],M=this[ti];if(y.has("cameraControls")&&(this.cameraControls?(_.enableInteraction(),this.interactionPrompt===Kr&&(this[An]=!0),M.addEventListener("focus",this[Ql]),M.addEventListener("blur",this[Kl])):(M.removeEventListener("focus",this[Ql]),M.removeEventListener("blur",this[Kl]),_.disableInteraction(),this[Ua]()),this[ti].setAttribute("aria-label",this[ws])),y.has("disableZoom")&&(_.disableZoom=this.disableZoom),y.has("enablePan")&&(_.enablePan=this.enablePan,this.enablePan?this.addEventListener("contextmenu",zp):this.removeEventListener("contextmenu",zp)),y.has("bounds")&&(this[te].tightBounds=this.bounds==="tight"),(y.has("interactionPrompt")||y.has("cameraControls")||y.has("src"))&&(this.interactionPrompt===Kr&&this.cameraControls&&!this[ts]?this[An]=!0:this[Ua]()),y.has("interactionPromptStyle")&&this[Qr].classList.toggle("wiggle",this.interactionPromptStyle===Zl),y.has("interactionPolicy")){const S=this.interactionPolicy;_.applyOptions({interactionPolicy:S})}if(y.has("touchAction")){const S=this.touchAction;_.applyOptions({touchAction:S}),_.updateTouchActionStyle()}y.has("orbitSensitivity")&&(_.sensitivity=this.orbitSensitivity),y.has("interpolationDecay")&&(_.setDamperDecayTime(this.interpolationDecay),this[te].setTargetDamperDecayTime(this.interpolationDecay)),this[rs]===!0&&Promise.resolve().then(()=>{_.jumpToGoal(),this[te].jumpToGoal(),this[rs]=!1})}async updateFraming(){const y=this[te],_=y.adjustedFoV(y.framedFoVDeg);await y.updateFraming();const M=y.adjustedFoV(y.framedFoVDeg),S=this[He].getFieldOfView()/_;this[He].setFieldOfView(M*S),this[ss]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),await this.requestUpdate("cameraOrbit")}[(e=Qr,t=$l,n=Ya,i=is,r=ns,a=fi,o=ts,l=An,h=He,c=th,u=rs,d=nh,p=ss,Wp)](y){const _=this[te];_.framedFoVDeg=180*y[0]/Math.PI,this[He].setFieldOfView(_.adjustedFoV(_.framedFoVDeg))}[Gp](y){if(this[ss]){const{theta:_,phi:M}=this.getCameraOrbit();y[0]=_,y[1]=M,this[ss]=!1}this[He].setOrbit(y[0],y[1],y[2])}[qp](y){this[He].applyOptions({minimumAzimuthalAngle:y[0],minimumPolarAngle:y[1],minimumRadius:y[2]}),this.jumpCameraToGoal()}[Xp](y){this[He].applyOptions({maximumAzimuthalAngle:y[0],maximumPolarAngle:y[1],maximumRadius:y[2]}),this[Vp](y[2]),this.jumpCameraToGoal()}[Yp](y){this[He].applyOptions({minimumFieldOfView:180*y[0]/Math.PI}),this.jumpCameraToGoal()}[Jp](y){const _=this[te].adjustedFoV(180*y[0]/Math.PI);this[He].applyOptions({maximumFieldOfView:_}),this.jumpCameraToGoal()}[jp](y){const[_,M,S]=y;this[ke].arRenderer.isPresenting||this[te].setTarget(_,M,S),this[ke].arRenderer.updateTarget()}[nn](y,_){if(super[nn](y,_),this[ke].isPresenting||!this[pr]())return;const M=performance.now();if(this[An]){const S=this.interactionPrompt===Kr?this[ps]:this[is];this.loaded&&M>S+this.interactionPromptThreshold&&(this[An]=!1,this[fi]=M,this[Qr].classList.add("visible"))}if(isFinite(this[fi])&&this.interactionPromptStyle===Zl){const S=this[te],D=(M-this[fi])/5e3%1,P=Pb(D),I=Db(D);if(this[$l].style.opacity=`${I}`,P!==this[ns]){const F=P*S.width*.05,B=(P-this[ns])*Math.PI/16;this[$l].style.transform=`translateX(${F}px)`,this[He].adjustOrbit(B,0,0),this[ns]=P}}this[He].update(y,_),this[te].updateTarget(_)}[Ua](){this[An]=!1,this[Qr].classList.remove("visible"),this[fi]=1/0}[Vp](y){const _=2*Math.max(this[te].boundingSphere.radius,y);this[He].updateNearFar(0,_)}[Hp](){const{theta:y,phi:_}=this[He].getCameraSpherical(this[th]),M=(4+Math.floor((y%Gb+Vb)/bg))%4,S=Math.floor(_/Hb),D=Ib[M],P=Ob[S];this[Yh](`View from stage ${P}${D}`)}get[ws](){return super[ws]+(this.cameraControls?". Use mouse, touch or arrow keys to move.":"")}async[ks](y){const _=this[He],M=this[te],S=M.adjustedFoV(M.framedFoVDeg);super[ks](y);const D=M.adjustedFoV(M.framedFoVDeg)/S,P=_.getFieldOfView()*(isFinite(D)?D:1);_.updateAspect(this[te].aspect),await this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this[He].setFieldOfView(P),this.jumpCameraToGoal()}[rn](){super[rn](),this[nh]?this[ss]=!0:this[nh]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}}return m=Ql,g=Kl,v=eh,f=es,at([ge({type:Boolean,attribute:"camera-controls"})],b.prototype,"cameraControls",void 0),at([$n({intrinsics:xg,observeEffects:!0,updateHandler:Gp}),ge({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],b.prototype,"cameraOrbit",void 0),at([$n({intrinsics:zb,observeEffects:!0,updateHandler:jp}),ge({type:String,attribute:"camera-target",hasChanged:()=>!0})],b.prototype,"cameraTarget",void 0),at([$n({intrinsics:Bp,observeEffects:!0,updateHandler:Wp}),ge({type:String,attribute:"field-of-view",hasChanged:()=>!0})],b.prototype,"fieldOfView",void 0),at([$n({intrinsics:kb,updateHandler:qp}),ge({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],b.prototype,"minCameraOrbit",void 0),at([$n({intrinsics:Bb,updateHandler:Xp}),ge({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],b.prototype,"maxCameraOrbit",void 0),at([$n({intrinsics:Ub,updateHandler:Yp}),ge({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],b.prototype,"minFieldOfView",void 0),at([$n({intrinsics:Bp,updateHandler:Jp}),ge({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],b.prototype,"maxFieldOfView",void 0),at([ge({type:Number,attribute:"interaction-prompt-threshold"})],b.prototype,"interactionPromptThreshold",void 0),at([ge({type:String,attribute:"interaction-prompt-style"})],b.prototype,"interactionPromptStyle",void 0),at([ge({type:String,attribute:"interaction-prompt"})],b.prototype,"interactionPrompt",void 0),at([ge({type:String,attribute:"interaction-policy"})],b.prototype,"interactionPolicy",void 0),at([ge({type:Number,attribute:"orbit-sensitivity"})],b.prototype,"orbitSensitivity",void 0),at([ge({type:String,attribute:"touch-action"})],b.prototype,"touchAction",void 0),at([ge({type:Boolean,attribute:"disable-zoom"})],b.prototype,"disableZoom",void 0),at([ge({type:Boolean,attribute:"enable-pan"})],b.prototype,"enablePan",void 0),at([ge({type:Number,attribute:"interpolation-decay"})],b.prototype,"interpolationDecay",void 0),at([ge({type:String,attribute:"bounds"})],b.prototype,"bounds",void 0),b})((s=>{var e,t,n,i,r,a,o,l,h,c;class u extends s{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes="webxr scene-viewer",this.iosSrc=null,this.xrEnvironment=!1,this[e]=!1,this[t]=this.shadowRoot.querySelector(".ar-button"),this[n]=document.createElement("a"),this[i]=new Set,this[r]=Bl,this[a]=!1,this[o]=p=>{p.preventDefault(),this.activateAR()},this[l]=({status:p})=>{p!==Wa&&this[ke].arRenderer.presentedScene!==this[te]||(this.setAttribute("ar-status",p),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:p}})),p===Wa?this.removeAttribute("ar-tracking"):p===Kf&&this.setAttribute("ar-tracking",Qf))},this[h]=({status:p})=>{this.setAttribute("ar-tracking",p),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:p}}))},this[c]=p=>{p.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[Zn]!==Bl}connectedCallback(){super.connectedCallback(),this[ke].arRenderer.addEventListener("status",this[Hl]),this.setAttribute("ar-status",Wa),this[ke].arRenderer.addEventListener("tracking",this[Vl]),this[ir].addEventListener("message",this[Gl])}disconnectedCallback(){super.disconnectedCallback(),this[ke].arRenderer.removeEventListener("status",this[Hl]),this[ke].arRenderer.removeEventListener("tracking",this[Vl]),this[ir].removeEventListener("message",this[Gl])}async update(p){super.update(p),p.has("arScale")&&(this[te].canScale=this.arScale!=="fixed"),p.has("arPlacement")&&(this[te].updateShadow(),this[bt]()),(p.has("ar")||p.has("arModes")||p.has("src")||p.has("iosSrc"))&&(p.has("arModes")&&(this[zl]=mb(this.arModes)),this[$r]())}async activateAR(){switch(this[Zn]){case kl:this[Sp]();break;case _p:await this[wp]();break;case bp:this[Mp]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities")}}async[(e=fb,t=En,n=ir,i=zl,r=Zn,a=Ia,o=Oa,l=Hl,h=Vl,c=Gl,$r)](){if(this[Zn]=Bl,this.ar){if(this.src!=null)for(const p of this[zl]){if(p==="webxr"&&Vf&&!vp&&await this[ke].arRenderer.supportsPresentation()){this[Zn]=_p;break}if(p==="scene-viewer"&&Oy&&!yp){this[Zn]=bp;break}if(p==="quick-look"&&nd){this[Zn]=kl;break}}!this.canActivateAR&&this.iosSrc!=null&&nd&&(this[Zn]=kl)}if(this.canActivateAR)this[En].classList.add("enabled"),this[En].addEventListener("click",this[Oa]);else if(this[En].classList.contains("enabled")){this[En].removeEventListener("click",this[Oa]),this[En].classList.remove("enabled");const p=Ux;this.setAttribute("ar-status",p),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:p}}))}}async[wp](){console.log("Attempting to present in AR with WebXR..."),await this[Wl]();try{this[En].removeEventListener("click",this[Oa]);const{arRenderer:p}=this[ke];p.placeOnWall=this.arPlacement==="wall",await p.present(this[te],this.xrEnvironment)}catch(p){console.warn("Error while trying to present in AR with WebXR"),console.error(p),await this[ke].arRenderer.stopPresenting(),vp=!0,console.warn("Falling back to next ar-mode"),await this[$r](),this.activateAR()}finally{this[$r]()}}async[Wl](){this.loaded||(this[Ia]=!0,this[sn](),await((p,m,g=null)=>new Promise(v=>{p.addEventListener(m,function f(b){g&&!g(b)||(v(b),p.removeEventListener(m,f))})}))(this,"load"),this[Ia]=!1)}[Ai](){return super[Ai]()||this[Ia]}[Mp](){const p=self.location.toString(),m=new URL(p),g=new URL(this.src,p),v=new URLSearchParams(g.search);if(m.hash="#model-viewer-no-ar-fallback",v.set("mode","ar_preferred"),v.has("disable_occlusion")||v.set("disable_occlusion","true"),this.arScale==="fixed"&&v.set("resizable","false"),this.arPlacement==="wall"&&v.set("enable_vertical_placement","true"),v.has("sound")){const b=new URL(v.get("sound"),p);v.set("sound",b.toString())}if(v.has("link")){const b=new URL(v.get("link"),p);v.set("link",b.toString())}const f=`intent://arvr.google.com/scene-viewer/1.0?${v.toString()+"&file="+encodeURIComponent(g.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(m.toString())};end;`;self.addEventListener("hashchange",()=>{self.location.hash==="#model-viewer-no-ar-fallback"&&(yp=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[$r]())},{once:!0}),this[ir].setAttribute("href",f),console.log("Attempting to present in AR with Scene Viewer..."),this[ir].click()}async[Sp](){const p=!this.iosSrc;this[En].classList.remove("enabled");const m=p?await this.prepareUSDZ():this.iosSrc,g=new URL(m,self.location.toString());this.arScale==="fixed"&&(g.hash&&(g.hash+="&"),g.hash+="allowsContentScaling=0");const v=this[ir];v.setAttribute("rel","ar");const f=document.createElement("img");v.appendChild(f),v.setAttribute("href",g.toString()),p&&v.setAttribute("download","model.usdz"),console.log("Attempting to present in AR with Quick Look..."),v.click(),v.removeChild(f),p&&URL.revokeObjectURL(m),this[En].classList.add("enabled")}async prepareUSDZ(){const p=this[vr].beginActivity();await this[Wl]();const m=this[te],g=m.shadow;let v=!1;g!=null&&(v=g.visible,g.visible=!1),p(.2);const f=new ub,b=await f.parse(m.modelContainer),x=new Blob([b],{type:"model/vnd.usdz+zip"}),y=URL.createObjectURL(x);return p(1),g!=null&&(g.visible=v),y}}return nr([ge({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),nr([ge({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),nr([ge({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),nr([ge({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),nr([ge({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),nr([ge({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u})((s=>{var e,t,n,i,r,a,o,l,h,c,u,d,p,m;class g extends s{constructor(...f){super(...f),this.poster=null,this.reveal=ka,this.loading=Wb,this.generateSchema=!1,this.seamlessPoster=!1,this[e]=!1,this[t]=!1,this[n]=0,this[i]=null,this[r]=this.shadowRoot.querySelector(".slot.poster"),this[a]=this.shadowRoot.querySelector("#default-poster"),this[o]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[l]=this.shadowRoot.querySelector("#default-progress-bar > .mask"),this[h]=this[ar].getAttribute("aria-label"),this[c]=((_,M)=>{let S=null;const D=(...P)=>{S==null&&(_(...P),S=self.setTimeout(()=>S=null,M))};return D.flush=()=>{S!=null&&(self.clearTimeout(S),S=null)},D})(_=>{const M=this[gi].parentNode;requestAnimationFrame(()=>{this[$p].style.opacity=""+.2*(1-_),this[gi].style.transform=`scaleX(${_})`,_===0&&(M.removeChild(this[gi]),M.appendChild(this[gi])),_===1?this[gi].classList.add("hide"):this[gi].classList.remove("hide")})},100),this[u]=()=>{this.reveal!==Zp&&this.reveal!==ka&&this.dismissPoster()},this[d]=_=>{if(this.reveal!==Zp)switch(_.keyCode){case 32:case 13:this.dismissPoster()}},this[p]=_=>{const M=_.detail.totalProgress;this[ls]=Math.max(M,this[ls]),M===1&&(this[rh].flush(),!this[Ri]()||this[os]==null&&this.reveal!==ka||this[ih]()),this[rh](M),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:M}}))},this[m]=()=>{this[hs]=!0;const _=this.getRootNode();_&&_.activeElement===this&&this[ti].focus();const M=this[ar];M.setAttribute("aria-hidden","true"),M.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))};const b=self.ModelViewerElement||{},x=b.dracoDecoderLocation||"https://www.gstatic.com/draco/versioned/decoders/1.4.1/";ot.setDRACODecoderLocation(x);const y=b.ktx2TranscoderLocation||"https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/";ot.setKTX2TranscoderLocation(y),b.meshoptDecoderLocation&&ot.setMeshoptDecoderLocation(b.meshoptDecoderLocation)}static set dracoDecoderLocation(f){ot.setDRACODecoderLocation(f)}static get dracoDecoderLocation(){return ot.getDRACODecoderLocation()}static set ktx2TranscoderLocation(f){ot.setKTX2TranscoderLocation(f)}static get ktx2TranscoderLocation(){return ot.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(f){ot.setMeshoptDecoderLocation(f)}static get meshoptDecoderLocation(){return ot.getMeshoptDecoderLocation()}static mapURLs(f){kn.singleton.loader[_i].manager.setURLModifier(f)}dismissPoster(){this[Ri]()?this[ih]():(this[os]=qb,this[sn]())}showPoster(){const f=this[Rn],b=this[ar];b.removeAttribute("tabindex"),b.removeAttribute("aria-hidden"),f.classList.add("show");const x=this.modelIsVisible;this[Ba]=!1,this[so](x),this[hs]=!1}getDimensions(){return Pa(this[te].size)}connectedCallback(){super.connectedCallback(),this[Rn].addEventListener("click",this[ah]),this[Rn].addEventListener("keydown",this[oh]),this[vr].addEventListener("progress",this[lh])}disconnectedCallback(){super.disconnectedCallback(),this[Rn].removeEventListener("click",this[ah]),this[Rn].removeEventListener("keydown",this[oh]),this[vr].removeEventListener("progress",this[lh])}async updated(f){super.updated(f),f.has("poster")&&this.poster!=null&&(this[ar].style.backgroundImage=`url(${this.poster})`),f.has("alt")&&this[ar].setAttribute("aria-label",this[Xh]),(f.has("reveal")||f.has("loading"))&&this[sn](),f.has("generateSchema")&&(this.generateSchema===!0?this[te].updateSchema(this.src):this[te].updateSchema(null)),f.has("seamlessPoster")&&(this.seamlessPoster===!0?this[Rn].classList.add("quick"):this[Rn].classList.remove("quick"))}[(e=Ba,t=hs,n=ls,i=os,r=Rn,a=ar,o=gi,l=$p,h=Xb,c=rh,u=ah,d=oh,p=lh,Ai)](){return!!this.src&&(this[os]!=null||this.loading===jb||this.reveal===ka&&this[wi])}[Ri](){const{src:f}=this;return!!f&&super[Ri]()&&this[ls]===1}[(m=sh,ih)](){this[os]=null;const f=this[Rn];if(f.classList.contains("show")){const b=this.modelIsVisible;this[Ba]=!0,this[so](b),requestAnimationFrame(()=>{f.classList.remove("show"),this.seamlessPoster===!0?this[sh]():f.addEventListener("transitionend",this[sh],{once:!0})})}else this[hs]=!0}[oo](){return super[oo]()&&this[Ba]}[pr](){return super[pr]()&&this[hs]}async[sn](){this[ls]=0,this.generateSchema===!0&&this[te].updateSchema(this.src),this[te].currentGLTF!=null&&this.src!=null&&this[Ai]()||this.showPoster(),this[Yh]("Loading"),await super[sn]()}}return as([ge({type:String})],g.prototype,"poster",void 0),as([ge({type:String})],g.prototype,"reveal",void 0),as([ge({type:String})],g.prototype,"loading",void 0),as([ge({type:Boolean,attribute:"generate-schema"})],g.prototype,"generateSchema",void 0),as([ge({type:Boolean,attribute:"seamless-poster"})],g.prototype,"seamlessPoster",void 0),g})((s=>{var e;class t extends s{constructor(...i){super(i),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0,this[te].subscribeMixerEvent("loop",r=>{const a=r.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:a}}))}),this[te].subscribeMixerEvent("finished",()=>{this[Sn]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[te].animationNames:[]}get duration(){return this[te].duration}get paused(){return this[Sn]}get currentTime(){return this[te].animationTime}set currentTime(i){this[te].animationTime=i,this[bt]()}get timeScale(){return this[te].animationTimeScale}set timeScale(i){this[te].animationTimeScale=i}pause(){this[Sn]||(this[Sn]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(i){this.availableAnimations.length>0&&(this[Sn]=!1,this[Il](i),this.dispatchEvent(new CustomEvent("play")))}[(e=Sn,rn)](){super[rn](),this[Sn]=!0,this.autoplay&&this.play()}[nn](i,r){super[nn](i,r),this[Sn]||!this[pr]()&&!this[ke].isPresenting||(this[te].updateAnimation(r/1e3),this[bt]())}updated(i){super.updated(i),i.has("autoplay")&&this.autoplay&&this.play(),i.has("animationName")&&this[Il]()}async[sn](){return this[te].stopAnimation(),super[sn]()}[Il](i=eb){var r;const a=(r=i.repetitions)!==null&&r!==void 0?r:1/0,o=i.pingpong?2202:a===1?2200:2201;this[te].playAnimation(this.animationName,this.animationCrossfadeDuration/1e3,o,a),this[Sn]&&(this[te].updateAnimation(0),this[bt]())}}return Dl([ge({type:Boolean})],t.prototype,"autoplay",void 0),Dl([ge({type:String,attribute:"animation-name"})],t.prototype,"animationName",void 0),Dl([ge({type:Number,attribute:"animation-crossfade-duration"})],t.prototype,"animationCrossfadeDuration",void 0),t})((s=>{var e;const t=Symbol("endPolyfillCoordination");return e=t,class extends s{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[t]==null&&(this[t]=(n=>{if(n.shadowRoot==null||n.hasAttribute("data-js-focus-visible"))return()=>{};if(!self.applyFocusVisiblePolyfill){const i=()=>{self.applyFocusVisiblePolyfill(n.shadowRoot)};return self.addEventListener("focus-visible-polyfill-ready",i,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",i)}}return self.applyFocusVisiblePolyfill(n.shadowRoot),()=>{}})(this))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this[t]!=null&&(this[t](),this[t]=null)}}})(ja)))))))));customElements.define("model-viewer",L1);export{L1 as ModelViewerElement};
