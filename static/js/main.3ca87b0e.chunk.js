(this["webpackJsonpqr-scan"]=this["webpackJsonpqr-scan"]||[]).push([[0],{12:function(e,n,t){},20:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(3),o=t.n(c),s=(t(12),t(6)),l=t(4),i=t.n(l),u=function(e){var n=e.handleOutput,t=e.state;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-txt"},"Scanning.."),!t&&r.a.createElement("div",{className:"loader"}),r.a.createElement(i.a,{delay:200,onError:function(e){var t=e.message;n(t)},onScan:function(e){e&&n(e)},className:"scan-comp"}))},m=function(e){var n=e.state,t=e.handleOutput;return r.a.createElement("div",{className:"result-wrapper"},r.a.createElement("div",{className:"output"},n),r.a.createElement("button",{onClick:function(){return t()},className:"retry-btn"},"Permission denied"===n?"Retry":"Re-Scan"))};t(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),t=n[0],c=n[1],o=t?m:u;return r.a.createElement("div",{className:"App"},r.a.createElement(o,{handleOutput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return c(e)},state:t}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,n,t){e.exports=t(22)}},[[7,1,2]]]);
//# sourceMappingURL=main.3ca87b0e.chunk.js.map