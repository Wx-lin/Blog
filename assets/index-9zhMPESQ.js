import{r as n,a9 as At,D as ce,y as P,x as Dt,F as et,_ as Q,aY as kt,z as ke,aZ as Wt,a_ as Ht,B as X,h as V,a$ as Gt,K as ae,E as jt,A as tt,R as De,b0 as Kt,ah as Ee,aD as Xt,b1 as Vt,o as at,p as Ft,t as Ut,a5 as nt,g as qt,m as Yt,u as h,a as ft,a4 as Zt,b2 as bt,C as Qt,f as Jt,am as ea,b as ta,ae as aa}from"./index-C8KYb361.js";var na={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const ra=na;var ia=function(t,a){return n.createElement(At,ce({},t,{ref:a,icon:ra}))},oa=n.forwardRef(ia);const la=oa,we=n.createContext(null);var ca=function(t){var a=t.activeTabOffset,r=t.horizontal,i=t.rtl,l=t.indicator,c=l===void 0?{}:l,o=c.size,s=c.align,u=s===void 0?"center":s,b=n.useState(),p=P(b,2),$=p[0],x=p[1],I=n.useRef(),C=Dt.useCallback(function(m){return typeof o=="function"?o(m):typeof o=="number"?o:m},[o]);function R(){et.cancel(I.current)}return n.useEffect(function(){var m={};if(a)if(r){m.width=C(a.width);var v=i?"right":"left";u==="start"&&(m[v]=a[v]),u==="center"&&(m[v]=a[v]+a.width/2,m.transform=i?"translateX(50%)":"translateX(-50%)"),u==="end"&&(m[v]=a[v]+a.width,m.transform="translateX(-100%)")}else m.height=C(a.height),u==="start"&&(m.top=a.top),u==="center"&&(m.top=a.top+a.height/2,m.transform="translateY(-50%)"),u==="end"&&(m.top=a.top+a.height,m.transform="translateY(-100%)");return R(),I.current=et(function(){x(m)}),R},[a,r,i,u,C]),{style:$}},rt={width:0,height:0,left:0,top:0};function sa(e,t,a){return n.useMemo(function(){for(var r,i=new Map,l=t.get((r=e[0])===null||r===void 0?void 0:r.key)||rt,c=l.left+l.width,o=0;o<e.length;o+=1){var s=e[o].key,u=t.get(s);if(!u){var b;u=t.get((b=e[o-1])===null||b===void 0?void 0:b.key)||rt}var p=i.get(s)||Q({},u);p.right=c-p.left-p.width,i.set(s,p)}return i},[e.map(function(r){return r.key}).join("_"),t,a])}function it(e,t){var a=n.useRef(e),r=n.useState({}),i=P(r,2),l=i[1];function c(o){var s=typeof o=="function"?o(a.current):o;s!==a.current&&t(s,a.current),a.current=s,l({})}return[a.current,c]}var da=.1,ot=.01,Te=20,lt=Math.pow(.995,Te);function ua(e,t){var a=n.useState(),r=P(a,2),i=r[0],l=r[1],c=n.useState(0),o=P(c,2),s=o[0],u=o[1],b=n.useState(0),p=P(b,2),$=p[0],x=p[1],I=n.useState(),C=P(I,2),R=C[0],m=C[1],v=n.useRef();function L(f){var E=f.touches[0],g=E.screenX,w=E.screenY;l({x:g,y:w}),window.clearInterval(v.current)}function D(f){if(i){f.preventDefault();var E=f.touches[0],g=E.screenX,w=E.screenY;l({x:g,y:w});var d=g-i.x,_=w-i.y;t(d,_);var F=Date.now();u(F),x(F-s),m({x:d,y:_})}}function k(){if(i&&(l(null),m(null),R)){var f=R.x/$,E=R.y/$,g=Math.abs(f),w=Math.abs(E);if(Math.max(g,w)<da)return;var d=f,_=E;v.current=window.setInterval(function(){if(Math.abs(d)<ot&&Math.abs(_)<ot){window.clearInterval(v.current);return}d*=lt,_*=lt,t(d*Te,_*Te)},Te)}}var N=n.useRef();function B(f){var E=f.deltaX,g=f.deltaY,w=0,d=Math.abs(E),_=Math.abs(g);d===_?w=N.current==="x"?E:g:d>_?(w=E,N.current="x"):(w=g,N.current="y"),t(-w,-w)&&f.preventDefault()}var T=n.useRef(null);T.current={onTouchStart:L,onTouchMove:D,onTouchEnd:k,onWheel:B},n.useEffect(function(){function f(d){T.current.onTouchStart(d)}function E(d){T.current.onTouchMove(d)}function g(d){T.current.onTouchEnd(d)}function w(d){T.current.onWheel(d)}return document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",g,{passive:!1}),e.current.addEventListener("touchstart",f,{passive:!1}),e.current.addEventListener("wheel",w),function(){document.removeEventListener("touchmove",E),document.removeEventListener("touchend",g)}},[])}function mt(e){var t=n.useState(0),a=P(t,2),r=a[0],i=a[1],l=n.useRef(0),c=n.useRef();return c.current=e,kt(function(){var o;(o=c.current)===null||o===void 0||o.call(c)},[r]),function(){l.current===r&&(l.current+=1,i(l.current))}}function va(e){var t=n.useRef([]),a=n.useState({}),r=P(a,2),i=r[1],l=n.useRef(typeof e=="function"?e():e),c=mt(function(){var s=l.current;t.current.forEach(function(u){s=u(s)}),t.current=[],l.current=s,i({})});function o(s){t.current.push(s),c()}return[l.current,o]}var ct={width:0,height:0,left:0,top:0,right:0};function fa(e,t,a,r,i,l,c){var o=c.tabs,s=c.tabPosition,u=c.rtl,b,p,$;return["top","bottom"].includes(s)?(b="width",p=u?"right":"left",$=Math.abs(a)):(b="height",p="top",$=-a),n.useMemo(function(){if(!o.length)return[0,0];for(var x=o.length,I=x,C=0;C<x;C+=1){var R=e.get(o[C].key)||ct;if(R[p]+R[b]>$+t){I=C-1;break}}for(var m=0,v=x-1;v>=0;v-=1){var L=e.get(o[v].key)||ct;if(L[p]<$){m=v+1;break}}return m>=I?[0,0]:[m,I]},[e,t,r,i,l,$,s,o.map(function(x){return x.key}).join("_"),u])}function st(e){var t;return e instanceof Map?(t={},e.forEach(function(a,r){t[r]=a})):t=e,JSON.stringify(t)}var ba="TABS_DQ";function gt(e){return String(e).replace(/"/g,ba)}function ht(e,t,a,r){return!(!a||r||e===!1||e===void 0&&(t===!1||t===null))}var pt=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.editable,i=e.locale,l=e.style;return!r||r.showAdd===!1?null:n.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:l,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(o){r.onEdit("add",{event:o})}},r.addIcon||"+")}),dt=n.forwardRef(function(e,t){var a=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l,c={};return ke(i)==="object"&&!n.isValidElement(i)?c=i:c.right=i,a==="right"&&(l=c.right),a==="left"&&(l=c.left),l?n.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},l):null}),ma=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.id,i=e.tabs,l=e.locale,c=e.mobile,o=e.moreIcon,s=o===void 0?"More":o,u=e.moreTransitionName,b=e.style,p=e.className,$=e.editable,x=e.tabBarGutter,I=e.rtl,C=e.removeAriaLabel,R=e.onTabClick,m=e.getPopupContainer,v=e.popupClassName,L=n.useState(!1),D=P(L,2),k=D[0],N=D[1],B=n.useState(null),T=P(B,2),f=T[0],E=T[1],g="".concat(r,"-more-popup"),w="".concat(a,"-dropdown"),d=f!==null?"".concat(g,"-").concat(f):null,_=l==null?void 0:l.dropdownAriaLabel;function F(y,O){y.preventDefault(),y.stopPropagation(),$.onEdit("remove",{key:O,event:y})}var G=n.createElement(Wt,{onClick:function(O){var K=O.key,W=O.domEvent;R(K,W),N(!1)},prefixCls:"".concat(w,"-menu"),id:g,tabIndex:-1,role:"listbox","aria-activedescendant":d,selectedKeys:[f],"aria-label":_!==void 0?_:"expanded dropdown"},i.map(function(y){var O=y.closable,K=y.disabled,W=y.closeIcon,H=y.key,ee=y.label,Z=ht(O,W,$,K);return n.createElement(Ht,{key:H,id:"".concat(g,"-").concat(H),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(H),disabled:K},n.createElement("span",null,ee),Z&&n.createElement("button",{type:"button","aria-label":C||"remove",tabIndex:0,className:"".concat(w,"-menu-item-remove"),onClick:function(ie){ie.stopPropagation(),F(ie,H)}},W||$.removeIcon||"×"))}));function q(y){for(var O=i.filter(function(Z){return!Z.disabled}),K=O.findIndex(function(Z){return Z.key===f})||0,W=O.length,H=0;H<W;H+=1){K=(K+y+W)%W;var ee=O[K];if(!ee.disabled){E(ee.key);return}}}function j(y){var O=y.which;if(!k){[ae.DOWN,ae.SPACE,ae.ENTER].includes(O)&&(N(!0),y.preventDefault());return}switch(O){case ae.UP:q(-1),y.preventDefault();break;case ae.DOWN:q(1),y.preventDefault();break;case ae.ESC:N(!1);break;case ae.SPACE:case ae.ENTER:f!==null&&R(f,y);break}}n.useEffect(function(){var y=document.getElementById(d);y&&y.scrollIntoView&&y.scrollIntoView(!1)},[f]),n.useEffect(function(){k||E(null)},[k]);var Y=X({},I?"marginRight":"marginLeft",x);i.length||(Y.visibility="hidden",Y.order=1);var ne=V(X({},"".concat(w,"-rtl"),I)),J=c?null:n.createElement(Gt,{prefixCls:w,overlay:G,trigger:["hover"],visible:i.length?k:!1,transitionName:u,onVisibleChange:N,overlayClassName:V(ne,v),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:m},n.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:Y,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":g,id:"".concat(r,"-more"),"aria-expanded":k,onKeyDown:j},s));return n.createElement("div",{className:V("".concat(a,"-nav-operations"),p),style:b,ref:t},J,n.createElement(pt,{prefixCls:a,locale:l,editable:$}))});const ga=n.memo(ma,function(e,t){return t.tabMoving});var ha=function(t){var a=t.prefixCls,r=t.id,i=t.active,l=t.tab,c=l.key,o=l.label,s=l.disabled,u=l.closeIcon,b=l.icon,p=t.closable,$=t.renderWrapper,x=t.removeAriaLabel,I=t.editable,C=t.onClick,R=t.onFocus,m=t.style,v="".concat(a,"-tab"),L=ht(p,u,I,s);function D(T){s||C(T)}function k(T){T.preventDefault(),T.stopPropagation(),I.onEdit("remove",{key:c,event:T})}var N=n.useMemo(function(){return b&&typeof o=="string"?n.createElement("span",null,o):o},[o,b]),B=n.createElement("div",{key:c,"data-node-key":gt(c),className:V(v,X(X(X({},"".concat(v,"-with-remove"),L),"".concat(v,"-active"),i),"".concat(v,"-disabled"),s)),style:m,onClick:D},n.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(v,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(f){f.stopPropagation(),D(f)},onKeyDown:function(f){[ae.SPACE,ae.ENTER].includes(f.which)&&(f.preventDefault(),D(f))},onFocus:R},b&&n.createElement("span",{className:"".concat(v,"-icon")},b),o&&N),L&&n.createElement("button",{type:"button","aria-label":x||"remove",tabIndex:0,className:"".concat(v,"-remove"),onClick:function(f){f.stopPropagation(),k(f)}},u||I.removeIcon||"×"));return $?$(B):B},pa=function(t,a){var r=t.offsetWidth,i=t.offsetHeight,l=t.offsetTop,c=t.offsetLeft,o=t.getBoundingClientRect(),s=o.width,u=o.height,b=o.x,p=o.y;return Math.abs(s-r)<1?[s,u,b-a.x,p-a.y]:[r,i,c,l]},fe=function(t){var a=t.current||{},r=a.offsetWidth,i=r===void 0?0:r,l=a.offsetHeight,c=l===void 0?0:l;if(t.current){var o=t.current.getBoundingClientRect(),s=o.width,u=o.height;if(Math.abs(s-i)<1)return[s,u]}return[i,c]},Ce=function(t,a){return t[a?0:1]},ut=n.forwardRef(function(e,t){var a=e.className,r=e.style,i=e.id,l=e.animated,c=e.activeKey,o=e.rtl,s=e.extra,u=e.editable,b=e.locale,p=e.tabPosition,$=e.tabBarGutter,x=e.children,I=e.onTabClick,C=e.onTabScroll,R=e.indicator,m=n.useContext(we),v=m.prefixCls,L=m.tabs,D=n.useRef(null),k=n.useRef(null),N=n.useRef(null),B=n.useRef(null),T=n.useRef(null),f=n.useRef(null),E=n.useRef(null),g=p==="top"||p==="bottom",w=it(0,function(M,S){g&&C&&C({direction:M>S?"left":"right"})}),d=P(w,2),_=d[0],F=d[1],G=it(0,function(M,S){!g&&C&&C({direction:M>S?"top":"bottom"})}),q=P(G,2),j=q[0],Y=q[1],ne=n.useState([0,0]),J=P(ne,2),y=J[0],O=J[1],K=n.useState([0,0]),W=P(K,2),H=W[0],ee=W[1],Z=n.useState([0,0]),re=P(Z,2),ie=re[0],be=re[1],Re=n.useState([0,0]),me=P(Re,2),Pe=me[0],z=me[1],se=va(new Map),ve=P(se,2),yt=ve[0],_t=ve[1],pe=sa(L,yt,H[0]),Ie=Ce(y,g),ge=Ce(H,g),Le=Ce(ie,g),We=Ce(Pe,g),He=Ie<ge+Le,te=He?Ie-We:Ie-Le,xt="".concat(v,"-nav-operations-hidden"),oe=0,de=0;g&&o?(oe=0,de=Math.max(0,ge-te)):(oe=Math.min(0,te-ge),de=0);function ze(M){return M<oe?oe:M>de?de:M}var Me=n.useRef(null),Ct=n.useState(),Ge=P(Ct,2),$e=Ge[0],je=Ge[1];function Ne(){je(Date.now())}function Oe(){Me.current&&clearTimeout(Me.current)}ua(B,function(M,S){function A(U,ue){U(function(le){var _e=ze(le+ue);return _e})}return He?(g?A(F,M):A(Y,S),Oe(),Ne(),!0):!1}),n.useEffect(function(){return Oe(),$e&&(Me.current=setTimeout(function(){je(0)},100)),Oe},[$e]);var Tt=fa(pe,te,g?_:j,ge,Le,We,Q(Q({},e),{},{tabs:L})),Ke=P(Tt,2),Et=Ke[0],wt=Ke[1],Xe=jt(function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,S=pe.get(M)||{width:0,height:0,left:0,right:0,top:0};if(g){var A=_;o?S.right<_?A=S.right:S.right+S.width>_+te&&(A=S.right+S.width-te):S.left<-_?A=-S.left:S.left+S.width>-_+te&&(A=-(S.left+S.width-te)),Y(0),F(ze(A))}else{var U=j;S.top<-j?U=-S.top:S.top+S.height>-j+te&&(U=-(S.top+S.height-te)),F(0),Y(ze(U))}}),Se={};p==="top"||p==="bottom"?Se[o?"marginRight":"marginLeft"]=$:Se.marginTop=$;var Ve=L.map(function(M,S){var A=M.key;return n.createElement(ha,{id:i,prefixCls:v,key:A,tab:M,style:S===0?void 0:Se,closable:M.closable,editable:u,active:A===c,renderWrapper:x,removeAriaLabel:b==null?void 0:b.removeAriaLabel,onClick:function(ue){I(A,ue)},onFocus:function(){Xe(A),Ne(),B.current&&(o||(B.current.scrollLeft=0),B.current.scrollTop=0)}})}),Fe=function(){return _t(function(){var S,A=new Map,U=(S=T.current)===null||S===void 0?void 0:S.getBoundingClientRect();return L.forEach(function(ue){var le,_e=ue.key,Je=(le=T.current)===null||le===void 0?void 0:le.querySelector('[data-node-key="'.concat(gt(_e),'"]'));if(Je){var zt=pa(Je,U),xe=P(zt,4),Mt=xe[0],Nt=xe[1],Ot=xe[2],Bt=xe[3];A.set(_e,{width:Mt,height:Nt,left:Ot,top:Bt})}}),A})};n.useEffect(function(){Fe()},[L.map(function(M){return M.key}).join("_")]);var ye=mt(function(){var M=fe(D),S=fe(k),A=fe(N);O([M[0]-S[0]-A[0],M[1]-S[1]-A[1]]);var U=fe(E);be(U);var ue=fe(f);z(ue);var le=fe(T);ee([le[0]-U[0],le[1]-U[1]]),Fe()}),Rt=L.slice(0,Et),Pt=L.slice(wt+1),Ue=[].concat(tt(Rt),tt(Pt)),qe=pe.get(c),It=ca({activeTabOffset:qe,horizontal:g,indicator:R,rtl:o}),Lt=It.style;n.useEffect(function(){Xe()},[c,oe,de,st(qe),st(pe),g]),n.useEffect(function(){ye()},[o]);var Ye=!!Ue.length,he="".concat(v,"-nav-wrap"),Be,Ae,Ze,Qe;return g?o?(Ae=_>0,Be=_!==de):(Be=_<0,Ae=_!==oe):(Ze=j<0,Qe=j!==oe),n.createElement(De,{onResize:ye},n.createElement("div",{ref:Kt(t,D),role:"tablist",className:V("".concat(v,"-nav"),a),style:r,onKeyDown:function(){Ne()}},n.createElement(dt,{ref:k,position:"left",extra:s,prefixCls:v}),n.createElement(De,{onResize:ye},n.createElement("div",{className:V(he,X(X(X(X({},"".concat(he,"-ping-left"),Be),"".concat(he,"-ping-right"),Ae),"".concat(he,"-ping-top"),Ze),"".concat(he,"-ping-bottom"),Qe)),ref:B},n.createElement(De,{onResize:ye},n.createElement("div",{ref:T,className:"".concat(v,"-nav-list"),style:{transform:"translate(".concat(_,"px, ").concat(j,"px)"),transition:$e?"none":void 0}},Ve,n.createElement(pt,{ref:E,prefixCls:v,locale:b,editable:u,style:Q(Q({},Ve.length===0?void 0:Se),{},{visibility:Ye?"hidden":null})}),n.createElement("div",{className:V("".concat(v,"-ink-bar"),X({},"".concat(v,"-ink-bar-animated"),l.inkBar)),style:Lt}))))),n.createElement(ga,ce({},e,{removeAriaLabel:b==null?void 0:b.removeAriaLabel,ref:f,prefixCls:v,tabs:Ue,className:!Ye&&xt,tabMoving:!!$e})),n.createElement(dt,{ref:N,position:"right",extra:s,prefixCls:v})))}),$t=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.className,i=e.style,l=e.id,c=e.active,o=e.tabKey,s=e.children;return n.createElement("div",{id:l&&"".concat(l,"-panel-").concat(o),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":l&&"".concat(l,"-tab-").concat(o),"aria-hidden":!c,style:i,className:V(a,c&&"".concat(a,"-active"),r),ref:t},s)}),$a=["renderTabBar"],Sa=["label","key"],ya=function(t){var a=t.renderTabBar,r=Ee(t,$a),i=n.useContext(we),l=i.tabs;if(a){var c=Q(Q({},r),{},{panes:l.map(function(o){var s=o.label,u=o.key,b=Ee(o,Sa);return n.createElement($t,ce({tab:s,key:u,tabKey:u},b))})});return a(c,ut)}return n.createElement(ut,r)},_a=["key","forceRender","style","className","destroyInactiveTabPane"],xa=function(t){var a=t.id,r=t.activeKey,i=t.animated,l=t.tabPosition,c=t.destroyInactiveTabPane,o=n.useContext(we),s=o.prefixCls,u=o.tabs,b=i.tabPane,p="".concat(s,"-tabpane");return n.createElement("div",{className:V("".concat(s,"-content-holder"))},n.createElement("div",{className:V("".concat(s,"-content"),"".concat(s,"-content-").concat(l),X({},"".concat(s,"-content-animated"),b))},u.map(function($){var x=$.key,I=$.forceRender,C=$.style,R=$.className,m=$.destroyInactiveTabPane,v=Ee($,_a),L=x===r;return n.createElement(Xt,ce({key:x,visible:L,forceRender:I,removeOnLeave:!!(c||m),leavedClassName:"".concat(p,"-hidden")},i.tabPaneMotion),function(D,k){var N=D.style,B=D.className;return n.createElement($t,ce({},v,{prefixCls:p,id:a,tabKey:x,animated:b,active:L,style:Q(Q({},C),N),className:V(R,B),ref:k}))})})))};function Ca(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=Q({inkBar:!0},ke(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var Ta=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],vt=0,Ea=n.forwardRef(function(e,t){var a=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,c=e.items,o=e.direction,s=e.activeKey,u=e.defaultActiveKey,b=e.editable,p=e.animated,$=e.tabPosition,x=$===void 0?"top":$,I=e.tabBarGutter,C=e.tabBarStyle,R=e.tabBarExtraContent,m=e.locale,v=e.moreIcon,L=e.moreTransitionName,D=e.destroyInactiveTabPane,k=e.renderTabBar,N=e.onChange,B=e.onTabClick,T=e.onTabScroll,f=e.getPopupContainer,E=e.popupClassName,g=e.indicator,w=Ee(e,Ta),d=n.useMemo(function(){return(c||[]).filter(function(z){return z&&ke(z)==="object"&&"key"in z})},[c]),_=o==="rtl",F=Ca(p),G=n.useState(!1),q=P(G,2),j=q[0],Y=q[1];n.useEffect(function(){Y(Vt())},[]);var ne=at(function(){var z;return(z=d[0])===null||z===void 0?void 0:z.key},{value:s,defaultValue:u}),J=P(ne,2),y=J[0],O=J[1],K=n.useState(function(){return d.findIndex(function(z){return z.key===y})}),W=P(K,2),H=W[0],ee=W[1];n.useEffect(function(){var z=d.findIndex(function(ve){return ve.key===y});if(z===-1){var se;z=Math.max(0,Math.min(H,d.length-1)),O((se=d[z])===null||se===void 0?void 0:se.key)}ee(z)},[d.map(function(z){return z.key}).join("_"),y,H]);var Z=at(null,{value:a}),re=P(Z,2),ie=re[0],be=re[1];n.useEffect(function(){a||(be("rc-tabs-".concat(vt)),vt+=1)},[]);function Re(z,se){B==null||B(z,se);var ve=z!==y;O(z),ve&&(N==null||N(z))}var me={id:ie,activeKey:y,animated:F,tabPosition:x,rtl:_,mobile:j},Pe=Q(Q({},me),{},{editable:b,locale:m,moreIcon:v,moreTransitionName:L,tabBarGutter:I,onTabClick:Re,onTabScroll:T,extra:R,style:C,panes:null,getPopupContainer:f,popupClassName:E,indicator:g});return n.createElement(we.Provider,{value:{tabs:d,prefixCls:i}},n.createElement("div",ce({ref:t,id:a,className:V(i,"".concat(i,"-").concat(x),X(X(X({},"".concat(i,"-mobile"),j),"".concat(i,"-editable"),b),"".concat(i,"-rtl"),_),l)},w),n.createElement(ya,ce({},Pe,{renderTabBar:k})),n.createElement(xa,ce({destroyInactiveTabPane:D},me,{animated:F}))))});const wa={motionAppear:!1,motionEnter:!0,motionLeave:!0};function Ra(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},a;return t===!1?a={inkBar:!1,tabPane:!1}:t===!0?a={inkBar:!0,tabPane:!0}:a=Object.assign({inkBar:!0},typeof t=="object"?t:{}),a.tabPane&&(a.tabPaneMotion=Object.assign(Object.assign({},wa),{motionName:Ft(e,"switch")})),a}var Pa=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function Ia(e){return e.filter(t=>t)}function La(e,t){if(e)return e;const a=Ut(t).map(r=>{if(n.isValidElement(r)){const{key:i,props:l}=r,c=l||{},{tab:o}=c,s=Pa(c,["tab"]);return Object.assign(Object.assign({key:String(i)},s),{label:o})}return null});return Ia(a)}const za=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[nt(e,"slide-up"),nt(e,"slide-down")]]},Ma=za,Na=e=>{const{componentCls:t,tabsCardPadding:a,cardBg:r,cardGutter:i,colorBorderSecondary:l,itemSelectedColor:c}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:r,border:`${h(e.lineWidth)} ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:c,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:h(i)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${h(e.borderRadiusLG)} ${h(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${h(e.borderRadiusLG)} ${h(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:h(i)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${h(e.borderRadiusLG)} 0 0 ${h(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${h(e.borderRadiusLG)} ${h(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Oa=e=>{const{componentCls:t,itemHoverColor:a,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},ft(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${h(r)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},Zt),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${h(e.paddingXXS)} ${h(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ba=e=>{const{componentCls:t,margin:a,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:l,verticalItemMargin:c,calc:o}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${h(e.lineWidth)} ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:a,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:o(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:l,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:c},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:h(o(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${h(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:o(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${h(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Aa=e=>{const{componentCls:t,cardPaddingSM:a,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:l}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:l,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${h(e.borderRadius)} ${h(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${h(e.borderRadius)} ${h(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${h(e.borderRadius)} ${h(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${h(e.borderRadius)} 0 0 ${h(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},Da=e=>{const{componentCls:t,itemActiveColor:a,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:l,horizontalItemPadding:c,itemSelectedColor:o,itemColor:s}=e,u=`${t}-tab`;return{[u]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:c,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:s,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:a}},bt(e)),"&-btn":{outline:"none",transition:"all 0.3s",[`${u}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${u}-active ${u}-btn`]:{color:o,textShadow:e.tabsActiveTextShadow},[`&${u}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${u}-disabled ${u}-btn, &${u}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${u}-remove ${i}`]:{margin:0},[`${i}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${u} + ${u}`]:{margin:{_skip_check_:!0,value:l}}}},ka=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:a,iconCls:r,cardGutter:i,calc:l}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:a},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:h(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:h(e.marginXS)},marginLeft:{_skip_check_:!0,value:h(l(e.marginXXS).mul(-1).equal())},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Wa=e=>{const{componentCls:t,tabsCardPadding:a,cardHeight:r,cardGutter:i,itemHoverColor:l,itemActiveColor:c,colorBorderSecondary:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},ft(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,minHeight:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${h(e.paddingXS)}`,background:"transparent",border:`${h(e.lineWidth)} ${e.lineType} ${o}`,borderRadius:`${h(e.borderRadiusLG)} ${h(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:c}},bt(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Da(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Ha=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}},Ga=qt("Tabs",e=>{const t=Yt(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${h(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${h(e.horizontalItemGutter)}`});return[Aa(t),ka(t),Ba(t),Oa(t),Na(t),Wa(t),Ma(t)]},Ha),ja=()=>null,Ka=ja;var Xa=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};const St=e=>{var t,a,r,i,l,c,o,s;const{type:u,className:b,rootClassName:p,size:$,onEdit:x,hideAdd:I,centered:C,addIcon:R,removeIcon:m,moreIcon:v,popupClassName:L,children:D,items:k,animated:N,style:B,indicatorSize:T,indicator:f}=e,E=Xa(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:g}=E,{direction:w,tabs:d,getPrefixCls:_,getPopupContainer:F}=n.useContext(Qt),G=_("tabs",g),q=Jt(G),[j,Y,ne]=Ga(G,q);let J;u==="editable-card"&&(J={onEdit:(Z,re)=>{let{key:ie,event:be}=re;x==null||x(Z==="add"?be:ie,Z)},removeIcon:(t=m??(d==null?void 0:d.removeIcon))!==null&&t!==void 0?t:n.createElement(ea,null),addIcon:(R??(d==null?void 0:d.addIcon))||n.createElement(la,null),showAdd:I!==!0});const y=_(),O=ta($),K=La(k,D),W=Ra(G,N),H=Object.assign(Object.assign({},d==null?void 0:d.style),B),ee={align:(a=f==null?void 0:f.align)!==null&&a!==void 0?a:(r=d==null?void 0:d.indicator)===null||r===void 0?void 0:r.align,size:(o=(l=(i=f==null?void 0:f.size)!==null&&i!==void 0?i:T)!==null&&l!==void 0?l:(c=d==null?void 0:d.indicator)===null||c===void 0?void 0:c.size)!==null&&o!==void 0?o:d==null?void 0:d.indicatorSize};return j(n.createElement(Ea,Object.assign({direction:w,getPopupContainer:F,moreTransitionName:`${y}-slide-up`},E,{items:K,className:V({[`${G}-${O}`]:O,[`${G}-card`]:["card","editable-card"].includes(u),[`${G}-editable-card`]:u==="editable-card",[`${G}-centered`]:C},d==null?void 0:d.className,b,p,Y,ne,q),popupClassName:V(L,Y,ne,q),style:H,editable:J,moreIcon:(s=v??(d==null?void 0:d.moreIcon))!==null&&s!==void 0?s:n.createElement(aa,null),prefixCls:G,animated:W,indicator:ee})))};St.TabPane=Ka;const Fa=St;export{Fa as T};
