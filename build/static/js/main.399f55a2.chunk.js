(this.webpackJsonpheadbandz=this.webpackJsonpheadbandz||[]).push([[0],{44:function(e,t,a){e.exports=a(91)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},83:function(e,t){},86:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=(a(49),a(2));a(50),a(51);var s=function(e){var t=e.stream,a=e.id;return e.game,Object(n.useEffect)((function(){document.getElementById(a).srcObject=t}),[t]),r.a.createElement("div",{className:"video-container"},r.a.createElement("video",{id:a,autoPlay:!0,playsInline:!0}))},i=a(1),u=a.n(i),m=a(7),d=a(3),p=a(41),f=a(13),E=a(4),b={},y={},v=Object(d.c)({streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_STREAM":var a=t.payload,n=a.stream,r=a.socketId;return Object(E.a)(Object(E.a)({},e),{},Object(f.a)({},r,{stream:n}));case"GOT_NAMES":var o=t.payload.names,c={};return Object.keys(e).forEach((function(t){var a=o.find((function(e){return e.toId===t}));c[t]=Object(E.a)(Object(E.a)({},e[t]),{},{name:a&&a.name})})),c;default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_GAME":var a=t.payload,n=a.name,r=a.totalPlayers,o=a.afoot;return{name:n,totalPlayers:r,afoot:o};case"ALL_PLAYERS_JOINED":return Object(E.a)(Object(E.a)({},e),{},{allPlayersJoined:!0});default:return e}}}),g=[p.a],h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,O=Object(d.e)(v,{},h(d.a.apply(void 0,g))),j="iceCandidate",I="joinRequest",k="offer",w="answer",N="cannot join",S="gameReady",x="give names",_="name taken",C="room name ok",P="joining",A={};function T(e){var t,a;console.log("csc ran"),A[e]=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),t=O.getState().streams.local.stream,a=e,t.getTracks().forEach((function(e){A[a].addTrack(e,t)})),A[e].ontrack=function(t){return O.dispatch({type:"NEW_STREAM",payload:{stream:t.streams[0],socketId:e}})}}function R(){return(R=Object(m.a)(u.a.mark((function e(t,a,n,r){var o,c,l,s,i,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),e.t0=t.type,e.next=e.t0===j?4:e.t0===I?5:e.t0===k?12:e.t0===w?22:e.t0===N?26:e.t0===x?27:e.t0===_?29:e.t0===C?30:e.t0===S?32:e.t0===P?34:36;break;case 4:return e.abrupt("return",A[t.fromId].addIceCandidate(new RTCIceCandidate(t.candidate)));case 5:return T(t.fromId),e.next=8,A[t.fromId].createOffer();case 8:return o=e.sent,e.next=11,A[t.fromId].setLocalDescription(o);case 11:return e.abrupt("return",n.emit("description",{description:A[t.fromId].localDescription,toId:t.fromId,fromId:n.id}));case 12:return T(t.fromId),A[t.fromId].onicecandidate=function(e){e.candidate&&n.emit("iceCandidate",{candidate:e.candidate,fromId:t.toId,toId:t.fromId})},e.next=16,A[t.fromId].setRemoteDescription(t.description);case 16:return e.next=18,A[t.fromId].createAnswer();case 18:return c=e.sent,e.next=21,A[t.fromId].setLocalDescription(c);case 21:return e.abrupt("return",n.emit("answer",{answer:c,toId:t.fromId,fromId:n.id}));case 22:return n.emit("ready",O.getState().game.name),e.next=25,A[t.fromId].setRemoteDescription(t.answer);case 25:return e.abrupt("return",e.sent);case 26:return e.abrupt("return",console.log("handle room name here"));case 27:return console.log("got names",t.names),e.abrupt("return",O.dispatch({type:"GOT_NAMES",payload:{names:t.names}}));case 29:return e.abrupt("return",console.log("name taken"));case 30:return l=t.name,s=t.totalPlayers,e.abrupt("return",O.dispatch({type:"NEW_GAME",payload:{name:l,totalPlayers:s,afoot:!0}}));case 32:return console.log("all ready boss"),e.abrupt("return",O.dispatch({type:"ALL_PLAYERS_JOINED"}));case 34:return i=t.totalPlayers,m=t.name,e.abrupt("return",O.dispatch({type:"NEW_GAME",payload:{name:m,totalPlayers:i,afoot:!0}}));case 36:console.log("no handling for server socket emit: ");case 37:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=a(43),D=a.n(M),G=(a(86),a(6));function L(e){return W.apply(this,arguments)}function W(){return(W=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!1,video:!0});case 2:a=e.sent,t(a,"local");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=Object(G.b)((function(e){return{streams:e.streams,game:e.game}}),{})((function(e){var t=e.game,a=e.addStreams,o=e.socket,c=Object(n.useState)(!1),s=Object(l.a)(c,2),i=s[0],d=s[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),E=f[0],b=f[1],y=Object(n.useState)(""),v=Object(l.a)(y,2),g=v[0],h=v[1],O=Object(n.useState)(""),j=Object(l.a)(O,2),I=j[0],k=j[1],w=Object(n.useState)(2),N=Object(l.a)(w,2),S=N[0],x=N[1];function _(){return(_=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=2;break}return e.abrupt("return",console.log("Need to add players"));case 2:o.emit("make room",{name:I,totalPlayers:S}),L(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(a);case 2:o.emit("join room",{roomName:g,fromId:o.id});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,!t.afoot&&r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("button",{className:"landing-button",onClick:function(){d((function(e){return!e}))}},"Create Game"),r.a.createElement("div",{className:"input-slider",style:{height:i?"100px":"0px"}},r.a.createElement("div",{className:"player-number"},r.a.createElement("label",{htmlFor:"players-number"},"Total Players: "),r.a.createElement("select",{id:"players-number",onChange:function(e){return x(Number(e.target.value))}},r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6"),r.a.createElement("option",null,"7"))),r.a.createElement("div",{className:"game-name"},r.a.createElement("input",{type:"text",onChange:function(e){k(e.target.value),window.roomName=e.target.value},placeholder:"Enter game name"}),r.a.createElement("button",{onClick:function(){return _.apply(this,arguments)}},"Go!")))),r.a.createElement("div",null,r.a.createElement("button",{className:"landing-button",onClick:function(){b((function(e){return!e}))}},"Join Game"),r.a.createElement("div",{className:"input-slider",style:{height:E?"100px":"0px"}},r.a.createElement("div",{className:"game-name"},r.a.createElement("input",{type:"text",onChange:function(e){h(e.target.value)}}),r.a.createElement("button",{onClick:function(){return C.apply(this,arguments)}},"Go!"))))))}));var z=Object(G.b)((function(e){return{streams:e.streams,game:e.game}}),{createStream:function(e){return function(t){t({type:"NEW_STREAM",payload:e})}}})((function(e){var t,a=e.streams,o=e.game,c=e.createStream,i=Object(n.useState)(),u=Object(l.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(),f=Object(l.a)(p,2),E=f[0],b=f[1];function y(e,t){c({stream:e,socketId:t})}return Object(n.useEffect)((function(){var e=D.a.connect(window.location.hostname);e.on("message",(function(t){!function(e,t,a,n){R.apply(this,arguments)}(t,void 0,e,y)})),d(e)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement("h1",null,"Headbandz"),r.a.createElement(J,{addStreams:y,socket:m}),o.allPlayersJoined&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",onChange:function(e){return b(e.target.value)}}),r.a.createElement("button",{onClick:function(){m.emit("setName",{nameToGuess:E,roomName:o.name})}},"Set name")),o.afoot&&r.a.createElement("div",null,r.a.createElement("div",{className:"videos-container"},r.a.createElement("h2",null,"In room: ",o.name),r.a.createElement(s,{id:"local",stream:a.local&&a.local.stream}),Object.keys(a).filter((function(e){return"local"!==e})).map((function(e,t){return r.a.createElement("div",null,r.a.createElement(s,{stream:a[e].stream,key:t,id:"stream".concat(t)}),r.a.createElement("h3",null,e),r.a.createElement("h3",null,a[e].name))})),o.totalPlayers&&(t=o.totalPlayers-Object.keys(a).length,new Array(t).fill(0)).map((function(e,t){return r.a.createElement("div",{className:"video-container",key:t},"Waiting for player")}))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G.a,{store:O},r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.399f55a2.chunk.js.map