(this.webpackJsonpsmoothcommerce=this.webpackJsonpsmoothcommerce||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},13:function(e,t,n){},17:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),l=n.n(o),r=n(2),i=(n(28),n(4)),u=n(5),s=n(7),m=n(6),d=(n(12),n(13),function(){return function(e){return fetch("https://api.mocki.io/v1/276a0d5c",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e({type:"SET_LOCATION_DATA",payload:t})})).catch((function(e){console.log(e)}))}}),h=n(16),E=n(1),b=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"location-detail-container"},c.a.createElement("div",{className:"location-detail-img"},c.a.createElement("img",{className:"loc-image",src:e.loc.logo_url})),c.a.createElement("div",{className:"location-detail-details"},c.a.createElement("div",null,c.a.createElement("label",null,"Bussiness Name:"),e.loc.name),c.a.createElement("div",null,c.a.createElement("label",null,"Address:"),e.loc.address),c.a.createElement("div",null,c.a.createElement("label",null,"Website:"),e.loc.website),c.a.createElement("div",null,c.a.createElement("label",null,"Hours:"),e.loc.store_hours.map((function(e){return c.a.createElement("div",null,"".concat(e.day," ").concat(e.start_time,"-").concat(e.end_time))}))))),c.a.createElement("input",{onClick:e.backToLocationList,type:"button",value:"Go Back"}))},f=(n(29),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).loadLocation=function(e){a.setState({currentLocation:e,showLocation:!0})},a.backToLocationList=function(){a.setState({showLocation:!1})},a.state={showLocation:!1,currentLocation:null},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchLocationData)()}},{key:"render",value:function(){var e=this,t=this.props.locationReducer,n=this.state,a=n.showLocation,o=n.currentLocation,l=t&&t.result||[];return console.log(t),a?c.a.createElement(b,{loc:o,backToLocationList:this.backToLocationList}):c.a.createElement("div",null,c.a.createElement("table",{className:"location-table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Bussiness Id"),c.a.createElement("th",null,"Bussiness Name"),c.a.createElement("th",null,"Website"),c.a.createElement("th",null,"Address"))),c.a.createElement("tbody",null,l.map((function(t,n){return c.a.createElement("tr",{key:n},c.a.createElement("td",null,n),c.a.createElement("td",null,c.a.createElement("input",{onClick:function(){return e.loadLocation(t)},type:"button",value:t.name})),c.a.createElement("td",null,t.website),c.a.createElement("td",null,t.address))})))))}}]),n}(a.Component)),v=Object(r.b)((function(e){return Object(h.a)({},e)}),(function(e){return Object(E.b)({fetchLocationData:d},e)}))(f),p=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(15),O=Object(E.c)({locationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION_DATA":return{result:t.payload};default:return e}}});l.a.render(c.a.createElement(r.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(E.d)(O,e,Object(E.a)(L.a))}()},c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f359bcff.chunk.js.map