(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(55)},43:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),o=n.n(l),c=n(22),s=n.n(c),i=n(27),u=n(7),d=n(57),f=n(31),m=n(9),h=n(60),b=n(11),p=n(58),v=n(61),E=n(59),w=(n(43),n(56));n(44);var g=window.Dos,y=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)({}),l=Object(u.a)(n,2),o=l[0],c=l[1];return console.log("ARGS!",e.args),Object(a.useEffect)(function(){if(null!==t){var n=g(t.current,{wdosboxUrl:"/dosify/wdosbox/wdosbox.js"}).then(function(t){return t.fs.extract(e.url).then(function(){return t.main(e.args)})});return function(){n.then(function(e){return e.exit()})}}},[t,e.url,e.args]),r.a.createElement(w.a,{onResize:function(e){if(e.length>0){var n=t.current,a=window.innerWidth,r=e[e.length-1].contentRect.height,l=n.width/n.height,o=r,s=l*o;s>a&&(o=(s=a)/l),c({left:(a-s)/2+"px",top:(r-o)/2+"px",width:s+"px",height:o+"px"})}}},r.a.createElement("div",{className:"jsdos-resize-sensor"},r.a.createElement("div",{style:o,className:"jsdos-viewport"},r.a.createElement("canvas",{className:"js-dos-canvas",ref:t}))))},x=n(19),j=n.n(x);n(52);function O(e){return new Promise(function(t,n){var a=[];zip.createReader(new zip.BlobReader(e),function(e){e.getEntries(function(n){var r=!0,l=!1,o=void 0;try{for(var c,s=n[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var i=c.value.filename;if(i.toLocaleLowerCase().endsWith(".com")||i.toLocaleLowerCase().endsWith(".exe")||i.toLocaleLowerCase().endsWith(".bat")){a.push(i);break}}}catch(u){l=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(l)throw o}}e.close(),t(a)})},function(e){n("Can't read ZIP file: "+e)})})}var N=n(21),k=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(null),c=Object(u.a)(o,2),w=c[0],g=c[1],x=Object(a.useState)(0),k=Object(u.a)(x,2),B=k[0],R=k[1],D=Object(a.useState)(null),L=Object(u.a)(D,2),S=L[0],A=L[1],C=Object(a.useState)([]),W=Object(u.a)(C,2),U=W[0],I=W[1],z=Object(a.useState)(null),P=Object(u.a)(z,2),T=P[0],G=P[1],Y=Object(a.useState)(null),J=Object(u.a)(Y,2),Z=J[0],F=J[1],M=Object(a.useState)(!1),V=Object(u.a)(M,2),$=V[0],_=V[1];Object(a.useEffect)(function(){var e=T;if(null!==e)if(0!==e.length&&"N/A"!==e){var t=e.split("/"),n=[];t.forEach(function(e,a){n.push('"-c"'),a<t.length-1?n.push('"cd '+e+'"'):n.push('"'+e+'"')}),F(n.join(", "))}else F("")},[T]);var q=function(e){null!==S&&URL.revokeObjectURL(S),A(e)};var H=r.a.createElement("li",null,"Upload \xa0",r.a.createElement("span",{style:{color:"#D9822B",fontWeight:"bold",borderBottom:"2px solid #DB3737"}},"ZIP"),"\xa0 archive of program (try\xa0",r.a.createElement("a",{href:"/dosify/digger.zip"},"digger.zip"),")",r.a.createElement(j.a,{className:"instructions-control",flexDirection:"row"},r.a.createElement(d.a,{disabled:null!==w,text:"Choose file...",onInputChange:function(e){var t=e.currentTarget.files;if(0!==t.length){l("");var n=t[0],a=new FileReader;a.addEventListener("load",function(){var e=Object(i.a)(s.a.mark(function e(t){var n,r,o,c,i,u,d,f,m,h;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Blob([new Uint8Array(a.result)]),e.prev=1,e.next=4,O(n);case 4:if(r=e.sent,o=URL.createObjectURL(n),q(o),1!==r.length){e.next=11;break}G(r[0]),e.next=36;break;case 11:if(0!==r.length){e.next=15;break}G("N/A"),e.next=36;break;case 15:for(c=[],i=!0,u=!1,d=void 0,e.prev=19,f=r[Symbol.iterator]();!(i=(m=f.next()).done);i=!0)h=m.value,c.push({id:h,label:h,icon:N.a.PLAY});e.next=27;break;case 23:e.prev=23,e.t0=e.catch(19),u=!0,d=e.t0;case 27:e.prev=27,e.prev=28,i||null==f.return||f.return();case 30:if(e.prev=30,!u){e.next=33;break}throw d;case 33:return e.finish(30);case 34:return e.finish(27);case 35:I(c);case 36:e.next=43;break;case 38:e.prev=38,e.t1=e.catch(1),l(e.t1),g(null),R(0);case 43:case"end":return e.stop()}},e,null,[[1,38],[19,23,27,35],[28,,30,34]])}));return function(t){return e.apply(this,arguments)}}()),a.addEventListener("progress",function(e){return R(e.loaded/e.total)}),a.readAsArrayBuffer(n),g(a)}else g(null)}}),"\xa0\xa0",r.a.createElement(f.a,{size:16,intent:m.a.PRIMARY,value:B})),r.a.createElement("span",{style:{color:"#DB3737",display:0===n.length?"none":"block"}},"*\xa0",n)),K=r.a.createElement("li",{style:0===U.length&&null===T?{display:"none"}:{}},"Select executable:",r.a.createElement("div",{style:null===T?{}:{display:"none"},className:"instructions-control"},r.a.createElement(h.a,{className:b.a.ELEVATION_1,contents:U,onNodeClick:function(e){return G(e.id+"")}})),r.a.createElement("div",{style:null===T?{display:"none"}:{},className:"instructions-control"},r.a.createElement("span",{style:{color:"#D9822B",fontWeight:"bold"}},T))),Q=r.a.createElement("li",{style:null===Z?{display:"none"}:{}},"Check command line and \xa0",r.a.createElement("span",{style:{color:"#D9822B",fontWeight:"bold",borderBottom:"2px solid #DB3737"}},"RUN"),"\xa0",r.a.createElement(p.a,{className:"instructions-control"},r.a.createElement("input",{className:b.a.INPUT,value:Z+"",onChange:function(e){return F(e.currentTarget.value)}}),r.a.createElement(v.a,{intent:m.a.DANGER,text:"Run",onClick:function(){return _(!0)}}))),X=$?r.a.createElement(y,{url:S+"",args:(Z+"").split(", ").map(function(e){return e.trim().substr(1,e.length-2)})}):r.a.createElement("div",null);return r.a.createElement(j.a,{flexDirection:"column",className:"dashboard",style:$?{width:"100%"}:{}},r.a.createElement(E.a,null,"Dosify\xa0me!"),r.a.createElement(E.c,null,"Try\xa0your\xa0favorite\xa0DOS\xa0game\xa0in\xa0browser"),r.a.createElement("div",{style:$?{display:"none"}:{}},r.a.createElement("p",null,"Instructions"),r.a.createElement("ol",{className:"instructions-ol"},H,K,Q)),r.a.createElement(j.a,{flexGrow:1,flexDirection:"column",style:$?{}:{display:"none"}},r.a.createElement(E.b,null,"Now ",r.a.createElement("span",{style:{color:"#D9822B",fontWeight:"bold",borderBottom:"2px solid #DB3737"}},"PLAY!")),X))};n(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(54);o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.7cbaa902.chunk.js.map