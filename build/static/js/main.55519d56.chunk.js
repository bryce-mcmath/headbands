(this.webpackJsonpheadbandz=this.webpackJsonpheadbandz||[]).push([[0],{45:function(e,t,n){e.exports=n(91)},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},82:function(e,t){},85:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(50),n(44)),s=n(14),u=n(1);n(51),n(52);var l=function(e){var t=e.stream,n=e.id;return Object(a.useEffect)((function(){document.getElementById(n).srcObject=t}),[t]),r.a.createElement("div",{className:"video-container"},r.a.createElement("video",{id:n,autoPlay:!0,playsInline:!0}))},m=n(2),d=n.n(m),f=n(4),p="iceCandidate",b="joinRequest",v="offer",E="answer",h="cannot join",w="gameReady",g="give names",j="name taken",O="room name ok",y="joining",k={};function I(e,t,n){var a,r;k[e]=new RTCPeerConnection(null),r=e,(a=t).getTracks().forEach((function(e){k[r].addTrack(e,a)})),k[e].ontrack=function(t){return n(t.streams[0],e)}}function N(){return(N=Object(f.a)(d.a.mark((function e(t,n,a,r,c,o,i,s){var u,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),e.t0=t.type,e.next=e.t0===p?4:e.t0===b?5:e.t0===v?12:e.t0===E?22:e.t0===h?27:e.t0===g?28:e.t0===j?29:e.t0===O?30:e.t0===w?31:e.t0===y?32:34;break;case 4:return e.abrupt("return",k[t.fromId].addIceCandidate(new RTCIceCandidate(t.candidate)));case 5:return I(t.fromId,n,r),e.next=8,k[t.fromId].createOffer();case 8:return u=e.sent,e.next=11,k[t.fromId].setLocalDescription(u);case 11:return e.abrupt("return",a.emit("description",{description:k[t.fromId].localDescription,toId:t.fromId,fromId:a.id}));case 12:return I(t.fromId,n,r),k[t.fromId].onicecandidate=function(e){e.candidate&&a.emit("iceCandidate",{candidate:e.candidate,fromId:t.toId,toId:t.fromId})},e.next=16,k[t.fromId].setRemoteDescription(t.description);case 16:return e.next=18,k[t.fromId].createAnswer();case 18:return l=e.sent,e.next=21,k[t.fromId].setLocalDescription(l);case 21:return e.abrupt("return",a.emit("answer",{answer:l,toId:t.fromId,fromId:a.id}));case 22:return console.log(window.roomName),a.emit("ready",window.roomName),e.next=26,k[t.fromId].setRemoteDescription(t.answer);case 26:return e.abrupt("return",e.sent);case 27:return e.abrupt("return",console.log("handle room name here"));case 28:return e.abrupt("return",o(t.names));case 29:return e.abrupt("return",console.log("name taken"));case 30:return e.abrupt("return",window.dispatchEvent(new Event("makeRoom")));case 31:return e.abrupt("return",window.dispatchEvent(new Event("gameReady")));case 32:return s.current=t.players,e.abrupt("return",i(!0));case 34:console.log("no handling for server socket emit: ");case 35:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=n(41),S=n.n(x);n(85);function C(e,t,n){return R.apply(this,arguments)}function R(){return(R=Object(f.a)(d.a.mark((function e(t,n,a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!1,video:!0});case 2:r=e.sent,t(r,"local");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P,T=function(e){var t=e.addStreams,n=e.socket,c=(e.setNumPlayers,e.setRoom),o=e.setGameOn,i=e.numPlayers,s=Object(a.useState)(!1),l=Object(u.a)(s,2),m=l[0],p=l[1],b=Object(a.useState)(!1),v=Object(u.a)(b,2),E=v[0],h=v[1],w=Object(a.useState)(!1),g=Object(u.a)(w,2),j=(g[0],g[1]),O=Object(a.useState)(""),y=Object(u.a)(O,2),k=y[0],I=y[1],N=Object(a.useState)(""),x=Object(u.a)(N,2),S=x[0],R=x[1],P=Object(a.useState)(""),T=Object(u.a)(P,2);function D(){return(D=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return",console.log("Need to add players"));case 2:n.emit("make room",{name:S,totalPlayers:Number(i.current)});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:c(k),window.roomName=k,n.emit("join room",{roomName:k,fromId:n.id});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return T[0],T[1],Object(a.useEffect)((function(){window.addEventListener("gameReady",(function(){return j(!0)})),window.addEventListener("makeRoom",Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,"local");case 2:console.log("setting room"),c(window.roomName),o(!0);case 5:case"end":return e.stop()}}),e)}))))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("button",{className:"landing-button",onClick:function(){p((function(e){return!e}))}},"Create Game"),r.a.createElement("div",{className:"input-slider",style:{height:m?"80px":"0px"}},r.a.createElement("div",{className:"player-number"},r.a.createElement("label",{htmlFor:"players-number"},"Total Players: "),r.a.createElement("select",{id:"players-number",onChange:function(e){return i.current=Number(e.target.value)}},r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6"),r.a.createElement("option",null,"7"))),r.a.createElement("div",{className:"game-name"},r.a.createElement("input",{type:"text",onChange:function(e){R(e.target.value),window.roomName=e.target.value},placeholder:"Enter game name"}),r.a.createElement("button",{onClick:function(){return D.apply(this,arguments)}},"Go!")))),r.a.createElement("div",null,r.a.createElement("button",{className:"landing-button",onClick:function(){h((function(e){return!e}))}},"Join Game"),r.a.createElement("div",{className:"input-slider",style:{height:E?"80px":"0px"}},r.a.createElement("div",{className:"game-name"},r.a.createElement("input",{type:"text",onChange:function(e){I(e.target.value),window.roomName=e.target.value}}),r.a.createElement("button",{onClick:function(){return G.apply(this,arguments)}},"Go!")))))},D=n(25),G=n(3),A=n(43),L={streams:[]},M=Object(G.c)({streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_STREAM":return Object(s.a)({},e,{item:t.payload});default:return e}}}),W=[A.a],z=Object(G.d)(M,{},G.a.apply(void 0,W));var B=Object(D.b)({},{createStream:function(e){return{type:"NEW_STREAM",stream:e}}})((function(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],o=n[1],m=Object(a.useState)([]),d=Object(u.a)(m,2),f=d[0],p=d[1],b=Object(a.useState)([]),v=Object(u.a)(b,2),E=v[0],h=v[1],w=Object(a.useState)(""),g=Object(u.a)(w,2),j=g[0],O=g[1],y=Object(a.useState)(!1),k=Object(u.a)(y,2),I=k[0],x=k[1],C=Object(a.useRef)(2);function R(e){p((function(t){var n=[];return t.forEach((function(t){var a=e.find((function(e){return e.toId===t.socketId}));n.push(Object(s.a)({},t,{name:a&&a.name}))})),n}))}function G(e,t){var n;p((function(a){return 0===a.length&&(P=e),n=a.length+1,[].concat(Object(i.a)(a),[{stream:e,socketId:t}])})),h((function(e){return new Array(C.current-n).fill(0)}))}return Object(a.useEffect)((function(){var e=S.a.connect("/");e.on("message",(function(t){!function(e,t,n,a,r,c,o,i){N.apply(this,arguments)}(t,P,e,G,j,R,x,C)})),o(e)}),[]),r.a.createElement(D.a,{store:z},r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement("h1",null,"Headbandz"),!I&&r.a.createElement(T,{addStreams:G,socket:c,setRoom:O,setGameOn:x,numPlayers:C}),I&&r.a.createElement("div",null,r.a.createElement("div",{className:"videos-container"},r.a.createElement("h2",null,"In room: ",j),r.a.createElement(l,{id:"local",stream:f[0]&&f[0].stream}),f.slice(1).map((function(e,t){return r.a.createElement("div",null,r.a.createElement(l,{stream:e.stream,key:t,id:"stream".concat(t)}),r.a.createElement("h3",null,e.name))})),E.map((function(){return r.a.createElement("div",{className:"video-container"})})))),r.a.createElement("button",{onClick:function(){console.log(f)}},"log streams"))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.55519d56.chunk.js.map