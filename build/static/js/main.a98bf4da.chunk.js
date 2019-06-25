(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t){e.exports={KakaoAK:"608b513f89e46075473ef312d8ea7a39"}},155:function(e,t,n){e.exports=n(302)},302:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),c=n(5),l=n(149),u=n(33),s=n(4),d=n(134),f=n.n(d);function m(){var e=Object(c.a)(["\n",";\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.6/antd.min.css\");\n\n* {\n    box-sizing: border-box;\n}\n\nbody{\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n#root{\n  width: 100%;\n  height: 100%;\n}\n\na{\n  color: unset;\n  &:hover{\n    color: unset;\n  }\n}\n\nstrong{\n  font-weight: 700;\n}\n\nbutton{\n  cursor: pointer;\n  background-color: white;\n  outline: none;\n  border: none;\n  &:active {\n    outline: none;\n    border: none;\n  }\n}\n"]);return m=function(){return e},e}var h=Object(s.createGlobalStyle)(m(),f.a),g=n(23),b=n(24),p=n(28),v=n(25),y=n(29),w=n(304),j=n(305),O=n(73),k=n(103),x=n.n(k),E=n(137),S=n.n(E),I=x.a.create({baseURL:"https://api.makkcha.com/"}),P=x.a.create({baseURL:"https://dapi.kakao.com/v2/local/",headers:{Authorization:"KakaoAK ".concat(S.a.KakaoAK)}}),F={getData:function(e){var t=e.startX,n=e.startY,a=e.endX,r=e.endY;return I.get("searchMakcha?startX=".concat(t,"&startY=").concat(n,"&endX=").concat(a,"&endY=").concat(r))},getPosFromGPS:function(e,t){return P.get("geo/coord2address.json?x=".concat(e,"&y=").concat(t,"&input_coord=WGS84"))},getPosFromAddr:function(e){return P.get("search/address.json?query=".concat(e))},getPosFromKeyword:function(e){return P.get("search/keyword.json?query=".concat(e))}},z=768,L=576,C={smallFontSize:"0.7rem",normalFontSize:"1rem",largeFontSize:"1.2rem",extraLargeFontSize:"3rem"},A={"\ub3c4\ubcf4":"#ccc",1:"#052f93",2:"#10a643",3:"#ea8406",4:"#00a8e6",5:"#a95094",6:"#d08d1a",7:"#657931",8:"#e74e6d",9:"#be941c",kyeongkang:"#004ea7",kyung:"#79c0a0",chun:"#33C7A7",kong:"#038fa0",bun:"#fcd204","\uc11c\ud574\uc120":"#8be800",suin:"#fbb901",sinbun:"#cd2234",yongin:"#56ab32","\uc6b0\uc774\uc2e0\uc124\uacbd\uc804\ucca0":"#b7b7b7","\uacbd\uc804\ucca0\uc758\uc815\ubd80":"#f6ba02",in:"#6496df",in2:"#fd9800"},D={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",kyeongkang:"\uacbd\uac15",kyung:"\uc911\uc559",chun:"\uacbd\ucd98",kong:"\uacf5\ud56d",bun:"\ubd84","\uc11c\ud574\uc120":"\uc11c\ud574",suin:"\uc218\uc778",sinbun:"\uc2e0\ubd84",yongin:"\uc6a9\uc778","\uc6b0\uc774\uc2e0\uc124\uacbd\uc804\ucca0":"\uc6b0\uc774","\uacbd\uc804\ucca0\uc758\uc815\ubd80":"\uc758\uc815",in:"\uc7781",in2:"\uc7782"},X=function(e){return"@media (max-width: ".concat(e,"px)")};X(922),X(z),X(L);function Y(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n"]);return Y=function(){return e},e}function N(){var e=Object(c.a)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n"]);return N=function(){return e},e}var R=s.default.p(N(),function(e){return C[e.size]||C.normalFontSize},function(e){return e.weight},function(e){return e.lineHeight||"1rem"}),B=s.default.div(Y());function M(){var e=Object(c.a)(["\n  width: 90%;\n  height: 2.6rem;\n  color: #000033;\n  border-radius: 1.5rem;\n  margin-bottom: 1.3rem;\n  backgrouncolor: #000;\n  font-weight: bold;\n  font-size: ",";\n"]);return M=function(){return e},e}function T(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  postion: absolute;\n  bottom: 0;\n  justify-content: center;\n"]);return T=function(){return e},e}function K(){var e=Object(c.a)(["\n  width: 15rem;\n  border: none;\n  background: #000033;\n  text-align: center;\n  color: white;\n  border-bottom: 1px solid white;\n  &#address_address {\n    border-bottom: 1px solid white;\n  }\n  transition: none;\n  border-radius: 0;\n"]);return K=function(){return e},e}function U(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return U=function(){return e},e}function W(){var e=Object(c.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return W=function(){return e},e}function G(){var e=Object(c.a)(["\n  background: #000033;\n  justify-content: center;\n  align-items: center;\n"]);return G=function(){return e},e}var H=w.a.Item,J=Object(s.default)(B)(G()),_=Object(s.default)(w.a)(W()),q=Object(s.default)(H)(U()),$=Object(s.default)(j.a)(K()),Q=s.default.div(T()),V=Object(s.default)(O.a)(M(),C.largeFontSize),Z=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),n.props.form.validateFields(function(e,t){e?console.log(e):n.getPos(t.address)})},n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"getPos",value:function(e){Promise.race([new Promise(function(t){return F.getPosFromAddr(e).then(function(e){e.data.documents.length&&t(e.data.documents)})}),new Promise(function(t){return F.getPosFromKeyword(e).then(function(e){e.data.documents.length&&t(e.data.documents)})})]).then(function(e){var t={endX:e[0].x,endY:e[0].y},n=e[0].address_name;localStorage.setItem("loc",JSON.stringify({endLocation:t,addr:n}))}).then(this.props.toggleComponent)}},{key:"render",value:function(){var e=this.props.form,t=e.getFieldDecorator,n=e.getFieldError,a=(0,e.isFieldTouched)("address")&&n("address");return r.a.createElement(J,null,r.a.createElement(_,null,r.a.createElement(q,{validateStatus:a?"error":"",help:a||""},t("address",{rules:[{required:!1,message:"\uc9d1 \uadfc\ucc98 \uc5ed \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694!"}]})(r.a.createElement($,{placeholder:"\uc9d1 \uc8fc\ubcc0 \uc5ed\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"})))),r.a.createElement(Q,null,r.a.createElement(V,{type:"secondary",onClick:this.handleSubmit},"\ud655\uc778")))}}]),t}(a.Component),ee=w.a.create({name:"address"})(Z),te=n(153),ne=n(18),ae=n(303),re=n(145),oe=n.n(re);function ie(){var e=Object(c.a)(["\n  width: 90%;\n  height: 3rem;\n  color: white;\n  background: #000033;\n  border-radius: 1.5rem;\n  margin-bottom: 1.3rem;\n  backgrouncolor: #000;\n  font-weight: bold;\n  font-size: ",";\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n  display: flex;\n  position: fixed;\n  justify-content: center;\n  width: 100%;\n  bottom: 0;\n"]);return ce=function(){return e},e}function le(){var e=Object(c.a)(["\n  width: 90%;\n  margin: 1rem 0;\n"]);return le=function(){return e},e}function ue(){var e=Object(c.a)(["\n  text-align: center;\n  height: 20px;\n  &:first-of-type {\n    border-top-left-radius: 3rem;\n    border-bottom-left-radius: 3rem;\n  }\n  &:last-of-type {\n    border-top-right-radius: 3rem;\n    border-bottom-right-radius: 3rem;\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n  width: 90%;\n  max-width: 90%;\n  height: 1rem;\n  background: sky-blue;\n"]);return se=function(){return e},e}function de(){var e=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n"]);return de=function(){return e},e}var fe=s.default.div(de()),me=s.default.div(se()),he=s.default.div(ue()),ge=s.default.div(le()),be=s.default.div(ce()),pe=Object(s.default)(O.a)(ie(),C.largeFontSize),ve=function(e){function t(e){var n;Object(g.a)(this,t);var a=(n=Object(p.a)(this,Object(v.a)(t).call(this,e))).props,r=a.taxiInfo,o=a.subwayPathOptionList,i=a.defaultInfo;return n.state={taxiInfo:r,subwayPathOptionList:o,defaultInfo:i,subwayRoutes:[{total:0,runTime:[]}],walkInfo:{time:0}},n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data,t=e.taxiInfo,n=e.subwayPathOptionList,a=this.state.subwayPathOptionList.walkInfo;this.getRouteInfo(),this.setState({taxiInfo:t,subwayPathOptionList:n,walkInfo:a})}},{key:"getRouteInfo",value:function(){for(var e=this,t=this.state.subwayPathOptionList.routeList,n=[],a=this.state.subwayPathOptionList.walkInfo,r=function(t){console.log(a.time);var r=e.state.subwayPathOptionList.routeList[Number(t)],o=r.pathStationList,i=r.distance,c=r.price,l=[{line:"\ub3c4\ubcf4",time:60*a.time}],u=0;o.map(function(e){var t=e.runTime,n=e.line;null!==t?(t=60*parseInt(t.slice(0,2))+parseInt(t.slice(3)),u+=t):(l.push({line:n,time:u}),u=0)}),l.push({line:o[o.length-1].line,time:u});var s=l.reduce(function(e,t){return e+t.time},0);s+=a.time,n.push({runTime:l,total:s,distance:i,price:c})},o=0;o<t.length;o++)r(o);this.setState({subwayRoutes:n})}},{key:"renderBar",value:function(){var e=this.state.subwayRoutes[0],t=e.total;return e.runTime.map(function(e){var n=Math.floor(Number(e.time)/t*100);return n<24&&(n=24),n=String(n)+"%",r.a.createElement(he,{className:"haha",key:oe()(),style:{width:n,backgroundColor:A[e.line],color:"white"}},"\ub3c4\ubcf4"===e.line?"\ub3c4\ubcf4":null,Math.floor(Number(e.time)/60),"\ubd84")})}},{key:"render",value:function(){var e=this.state,t=e.taxiInfo,n=e.defaultInfo,a=e.walkInfo,o=this.state.subwayRoutes[0],i=o.total,c=o.distance,l=o.price;return r.a.createElement(B,null,r.a.createElement(fe,null,r.a.createElement(ge,null,r.a.createElement(R,{weight:"bold",lineHeight:"2rem"},"\uc9c0\ud558\ucca0 ",Math.floor(i/60),"\ubd84"),r.a.createElement(R,{weight:"normal"},(c/1e3).toFixed(1),"km |"," ",String(Math.floor(l/1e3))+","+String(l%1e3),"\uc6d0 | \ub9c9\ucc28 ",n.lastTime.slice(0,5)," | \ub3c4\ubcf4 ",a.time,"\ubd84")),r.a.createElement(me,{className:"nana",style:{marginBottom:0}},this.renderBar()),r.a.createElement(me,{style:{marginTop:0}})),r.a.createElement(fe,null,r.a.createElement(ge,null,r.a.createElement(R,{weight:"bold",lineHeight:"2rem"},"\ud0dd\uc2dc ",t.time,"\ubd84"),r.a.createElement(R,null,(t.distance/1e3).toFixed(1),"km | \uc57d"," ",String(Math.floor(t.price/1e3))+","+String(t.price%1e3),"\uc6d0")),r.a.createElement(me,null,r.a.createElement(he,{style:{width:"100%",backgroundColor:"#ffd300",color:"white"}},t.time,"\ubd84"))),r.a.createElement(be,null,r.a.createElement(pe,{size:"large",onClick:this.props.onButtonPress},"\ubaa9\uc801\uc9c0 \uc7ac\uc124\uc815")))}}]),t}(a.Component);function ye(){var e=Object(c.a)(["\n  color: white;\n  position: absolute;\n  right: 1rem;\n"]);return ye=function(){return e},e}function we(){var e=Object(c.a)(["\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 2.4rem;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return we=function(){return e},e}function je(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 3rem;\n  background: white;\n  margin-right: 1rem;\n"]);return je=function(){return e},e}function Oe(){var e=Object(c.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n"]);return Oe=function(){return e},e}function ke(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ke=function(){return e},e}function xe(){var e=Object(c.a)(["\n  display: flex;\n  flex: 2;\n  justify-content: space-between;\n  align-items: center;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(c.a)(["\n  display: flex;\n  flex: 1;\n  max-height: 1rem;\n"]);return Ee=function(){return e},e}function Se(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  color: white;\n  flex: inherit;\n  max-height: 35vh;\n  background: #000033;\n"]);return Se=function(){return e},e}var Ie=n(306).a.Countdown,Pe=s.default.div(Se()),Fe=s.default.div(Ee()),ze=s.default.div(xe()),Le=s.default.div(ke()),Ce=s.default.div(Oe()),Ae=s.default.div(je()),De=s.default.div(we(),function(e){return A[e.line]}),Xe=Object(s.default)(O.a)(ye()),Ye=function(e){function t(e){var n;Object(g.a)(this,t),n=Object(p.a)(this,Object(v.a)(t).call(this,e));var a=e.defaultInfo,r=e.addr;return n.state={defaultInfo:a,remain:a.remain||0,addr:r},n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(e.defaultInfo!==this.props.defaultInfo||e.addr!==this.props.addr){var n=this.props,a=n.defaultInfo,r=n.addr;this.setState({defaultInfo:a,addr:r,remain:a.remain})}}},{key:"onFinish",value:function(){console.log("Finished")}},{key:"renderDetail",value:function(){var e=this.state,t=e.defaultInfo,n=e.remain,a=e.addr,o=Date.now()+1e3*n;if(n){var i=t.pathStationList[0],c=i.startStationName,l=i.line,u=i.endStationName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe,null,r.a.createElement(ne.a,{type:"environment",theme:"filled",style:{marginRight:"1rem"}}),r.a.createElement(R,{size:"normalFontSize"},a)),r.a.createElement(ze,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Le,null,r.a.createElement(R,{size:"largeFontSize",weight:"bold",lineHeight:"1.5rem"},"\ub9c9\ucc28\uae4c\uc9c0"),r.a.createElement(R,{size:"smallFontSize"},"(\ud604\uc7ac \uc704\uce58 \uae30\uc900)")),r.a.createElement(Ie,{value:o,onFinish:this.onFinish,valueStyle:{color:"white",fontSize:C.extraLargeFontSize}}))),r.a.createElement(Ce,null,r.a.createElement(Ae,null,r.a.createElement(De,{line:l},D[l])),r.a.createElement(R,{size:"largeFontSize",weight:"bold"},c+"\uc5ed"),r.a.createElement(R,{size:"smallFontSize",style:{marginLeft:"0.6rem"}},u+" \ubc29\ud5a5"),r.a.createElement(Xe,{type:"ghost",shape:"round",onClick:function(){return window.alert("\uc54c\ub9bc\uc744 \uc124\uc815\ud588\uc2b5\ub2c8\ub2e4")}},"\uc54c\ub9bc \ubc1b\uae30")))}return null}},{key:"render",value:function(){return r.a.createElement(Pe,null,this.renderDetail())}}]),t}(a.Component);function Ne(){var e=Object(c.a)(["\n  width: 90%;\n  height: 3rem;\n  color: white;\n  background: #000033;\n  border-radius: 1.5rem;\n  margin-bottom: 1.3rem;\n  backgrouncolor: #000;\n  font-weight: bold;\n"]);return Ne=function(){return e},e}function Re(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 80%;\n  color: #000033;\n"]);return Re=function(){return e},e}function Be(){var e=Object(c.a)(["\n  display: flex;\n  flex: 2;\n  // max-height: 10rem;\n"]);return Be=function(){return e},e}function Me(){var e=Object(c.a)(["\n  display: flex;\n  flex: 5;\n  justify-content: center;\n  & .anticon-spin {\n    position: absolute;\n    top: 3rem;\n  }\n"]);return Me=function(){return e},e}var Te=s.default.div(Me()),Ke=s.default.div(Be()),Ue=s.default.div(Re()),We=Object(s.default)(O.a)(Ne()),Ge=r.a.createElement(ne.a,{type:"loading",style:{fontSize:24},spin:!0}),He=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={endX:126.91509963231,endY:37.568565387939,currentAddr:"\ud655\uc778\uc911...",startX:"",startY:"",data:{taxiInfo:{},subwayPathOptionList:{routeList:[]},defaultInfo:{}}},n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("loc")){var t=JSON.parse(localStorage.getItem("loc")).endLocation,n=t.endX,a=t.endY;this.setState({endX:n,endY:a})}navigator.geolocation.getCurrentPosition(function(t){var n=t.coords,a=n.latitude,r=n.longitude;e.setState({startX:r,startY:a}),e.getData(a,r)})}},{key:"componentDidUpdate",value:function(e,t){if(t.startX!==this.state.startX){var n=this.state,a=n.startX,r=n.startY;this.getData(r,a),this.getCurrentPosFromGPS(a,r)}}},{key:"getData",value:function(e,t){var n=this,a=this.state,r=a.endX,o=a.endY;F.getData({startX:t,startY:e,endX:r,endY:o}).then(function(e){return n.setState({data:Object(te.a)({},e.data,{defaultInfo:e.data.subwayPathOptionList.routeList[0]||{}})})})}},{key:"getCurrentPosFromGPS",value:function(e,t){var n=this;F.getPosFromGPS(e,t).then(function(e){n.setState({currentAddr:e.data.documents[0].address.address_name})})}},{key:"onButtonPress",value:function(){localStorage.setItem("loc",""),this.props.toggleComponent()}},{key:"render",value:function(){var e=this.state.data,t=e.taxiInfo,n=e.subwayPathOptionList,a=e.defaultInfo,o=this.state.currentAddr;return r.a.createElement(B,null,r.a.createElement(Ke,null,r.a.createElement(Ye,{defaultInfo:a,addr:o})),r.a.createElement(Te,null,n.routeList.length?r.a.createElement(ve,{taxiInfo:t,subwayPathOptionList:n,defaultInfo:n.routeList[0],data:this.state.data,onButtonPress:this.onButtonPress.bind(this)}):r.a.createElement(Ue,null,r.a.createElement(ae.a,{indicator:Ge}),r.a.createElement(R,{size:"largeFontSize"},"\uacbd\ub85c\ub97c \ud0d0\uc0c9 \uc911\uc785\ub2c8\ub2e4..."),r.a.createElement(We,{onClick:this.onButtonPress.bind(this)},"\ubaa9\uc801\uc9c0 \ub2e4\uc2dc \uc785\ub825\ud558\uae30"))))}}]),t}(a.Component),Je=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={component:"form"},n}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("loc")&&this.setState({component:"main"})}},{key:"componentDidUpdate",value:function(e,t){e!==this.props&&console.log(this.props)}},{key:"toggleComponent",value:function(){"form"===this.state.component?this.setState({component:"main"}):this.setState({component:"form"})}},{key:"render",value:function(){return r.a.createElement(B,null,"form"===this.state.component?r.a.createElement(ee,{toggleComponent:this.toggleComponent.bind(this)}):r.a.createElement(He,{toggleComponent:this.toggleComponent.bind(this)}))}}]),t}(a.Component);function _e(){var e=Object(c.a)(["\n  height: 100%;\n  width: 100%;\n"]);return _e=function(){return e},e}var qe=s.default.div(_e()),$e=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(l.a,null,r.a.createElement(qe,{className:"app"},r.a.createElement(u.a,{exact:!0,path:"/",component:Je}))))},Qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ve(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement($e,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Qe?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ve(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ve(t,e)})}}()}},[[155,1,2]]]);
//# sourceMappingURL=main.a98bf4da.chunk.js.map