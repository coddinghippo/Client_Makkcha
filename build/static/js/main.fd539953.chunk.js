(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,n){e.exports={KakaoAK:"608b513f89e46075473ef312d8ea7a39"}},156:function(e,n,t){e.exports=t(303)},303:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(18),i=t.n(o),c=t(3),l=t(39),u=t(34),s=t(2),d=t(138),f=t.n(d);function m(){var e=Object(c.a)(["\n",";\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.6/antd.min.css\");\n\n* {\n    box-sizing: border-box;\n}\nhtml {\n  font-size: 16px;\n}\n\nbody{\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n#root{\n  width: 100%;\n  height: 100%;\n}\n\na{\n  color: unset;\n  &:hover{\n    color: unset;\n  }\n}\n\nstrong{\n  font-weight: 700;\n}\n\nbutton{\n  cursor: pointer;\n  background-color: white;\n  outline: none;\n  border: none;\n  &:active {\n    outline: none;\n    border: none;\n  }\n}\n"]);return m=function(){return e},e}var h=Object(s.createGlobalStyle)(m(),f.a),b=t(12),p=t(13),g=t(15),v=t(14),y=t(16),j=t(305),w=t(306),O=t(77),E=t(107),k=t.n(E),x=t(141),S=t.n(x),F=t(33),N=t.n(F),P=t(40),z=t(78),C=function(e){var n,t,r=e.busAndSubwayPathOptionList,a=e.busPathOptionList,o=e.taxiInfo,i=e.subwayPathOptionList;console.log(e);var c=i?i.routeList[0]:null,l=o;return function(){var e=(n=i).routeList,t={subOnlyList:[],lineList:[]};if(e){var r=[];e.sort(function(e,n){return e.totalTime-n.totalTime});var a=e[0];e.sort(function(e,n){return e.transferNum-n.transferNum});var o=e[0],c=[];a!==o&&c.push(a),c.push(o),c.map(function(e,n){var a=e.distance,o=e.price,i=e.totalTime,c=e.pathList,l=[];c.map(function(e){var r={};switch(e.type){case"BUS":return(r={}).icon="fas fa-bus",r.lines=e.routes.map(function(e){return e.name}),r.type=e.routes[0].name,r.time=e.duration,r.color=e.routes[0].type.color,l.push(r);case"SUBWAY":return(r={}).icon="fas fa-train",r.stationName=e.displayCode,r.lines=e.routes.map(function(e){return e.name}),r.time=e.duration,r.type=e.routes[0].name,r.color=e.routes[0].type.color,0==n&&(t={subOnlyList:[].concat(Object(z.a)(t.subOnlyList),Object(z.a)(e.stations)),lineList:[].concat(Object(z.a)(t.lineList),[{lineName:r.type,lineColor:r.color}])}),l.push(r);default:return(r={type:"\ub3c4\ubcf4"}).icon="fas fa-walking",r.time=e.duration,r.color="#ccc",l.push(r)}}),r.push({distance:a,price:o,totalTime:i,runTime:l})}),n=Object(P.a)({},i,{routes:r,subOnly:t}),console.log("sub"),console.log(n)}}(),function(){var e=(t=r).routeList;if(e){var n=[];e.sort(function(e,n){return e.totalTime-n.totalTime});var a=e[0];e.sort(function(e,n){return e.transferNum-n.transferNum});var o=e[0],i=[];a!==o&&i.push(a),i.push(o),i.map(function(e,t){var r=e.distance,a=e.price,o=e.totalTime,i=e.pathList,c=[];i.map(function(e){var n={};switch(e.type){case"BUS":return(n={}).icon="fas fa-bus",n.lines=e.routes.map(function(e){return e.name}),n.type=e.routes[0].name,n.time=e.duration,n.color=e.routes[0].type.color,c.push(n);case"SUBWAY":return(n={}).icon="fas fa-train",n.lines=e.routes.map(function(e){return e.name}),n.time=e.duration,n.type=e.routes[0].name,n.color=e.routes[0].type.color,c.push(n);default:return(n={type:"\ub3c4\ubcf4"}).icon="fas fa-walking",n.time=e.duration,n.color="#ccc",c.push(n)}}),n.push({distance:r,price:a,totalTime:o,runTime:c})}),t=Object(P.a)({},r,{routes:n})}}(),{taxi:l,sub:n,busNSub:t,bus:a,defaultSub:c}},T=N()();localStorage.setItem("Uid",T);var L=k.a.create({baseURL:"https://api.makkcha.com/",headers:{Uid:T}}),A=k.a.create({baseURL:"https://dapi.kakao.com/v2/local/",headers:{Authorization:"KakaoAK ".concat(S.a.KakaoAK)}}),D={getData:function(e){var n=e.startX,t=e.startY,r=e.endX,a=e.endY;return L.get("searchMakcha?startX=".concat(n,"&startY=").concat(t,"&endX=").concat(r,"&endY=").concat(a))},getPosFromGPS:function(e,n){return A.get("geo/coord2address.json?x=".concat(e,"&y=").concat(n,"&input_coord=WGS84"))},getPosFromAddr:function(e){return A.get("search/address.json?query=".concat(e))},getPosFromKeyword:function(e){return A.get("search/keyword.json?query=".concat(e))},postFeedback:function(e){return L.post("/feedback",e)}},U=768,X=576,Y={smallFontSize:"0.7rem",normalFontSize:"1rem",largeFontSize:"1.2rem",extraLargeFontSize:"2rem",superLargeFontSize:"3rem"},M={"\ub3c4\ubcf4":"#ccc",1:"#052f93",2:"#10a643",3:"#ea8406",4:"#00a8e6",5:"#a95094",6:"#d08d1a",7:"#657931",8:"#e74e6d",9:"#be941c",kyeongkang:"#004ea7",kyung:"#79c0a0",chun:"#33C7A7",kong:"#038fa0",bun:"#fcd204","\uc11c\ud574\uc120":"#8be800",suin:"#fbb901",sinbun:"#cd2234",yongin:"#56ab32","\uc6b0\uc774\uc2e0\uc124\uacbd\uc804\ucca0":"#b7b7b7","\uacbd\uc804\ucca0\uc758\uc815\ubd80":"#f6ba02",in:"#6496df",in2:"#fd9800"},B=function(e){return"@media (max-width: ".concat(e,"px)")};B(922),B(U),B(X);function I(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n"]);return I=function(){return e},e}function R(){var e=Object(c.a)(["\n  width: 90%;\n  margin: 1rem 0;\n"]);return R=function(){return e},e}function W(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n  height: 1.2rem;\n  &:first-of-type {\n    border-top-left-radius: 3rem;\n    border-bottom-left-radius: 3rem;\n  }\n  &:last-of-type {\n    border-top-right-radius: 3rem;\n    border-bottom-right-radius: 3rem;\n  }\n"]);return W=function(){return e},e}function K(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n  width: 90%;\n  max-width: 90%;\n"]);return K=function(){return e},e}function G(){var e=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n"]);return G=function(){return e},e}function H(){var e=Object(c.a)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n"]);return H=function(){return e},e}var q=s.default.p(H(),function(e){return Y[e.size]||Y.normalFontSize},function(e){return e.weight},function(e){return e.lineHeight||"1rem"}),J=s.default.div(G()),_=s.default.div(K()),$=s.default.div(W()),Q=s.default.div(R()),V=s.default.div(I());function Z(){var e=Object(c.a)(["\n  width: 90%;\n  height: 3rem;\n  color: #000033;\n  border-radius: 1.5rem;\n  margin-bottom: 1.3rem;\n  backgrouncolor: #000;\n  font-weight: bold;\n  font-size: ",";\n"]);return Z=function(){return e},e}function ee(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  postion: absolute;\n  bottom: 0;\n  justify-content: center;\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n  width: 100%;\n  border: none;\n  background: #000033;\n  text-align: center;\n  color: white;\n  border-bottom: 1px solid white;\n  &#address_address {\n    border-bottom: 1px solid white;\n  }\n  transition: none;\n  border-radius: 0;\n  font-size: ",";\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n"]);return te=function(){return e},e}function re(){var e=Object(c.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return re=function(){return e},e}function ae(){var e=Object(c.a)(["\n  height: 160px;\n  width: 100%;\n  background: ",";\n  overflow: hidden;\n  text-align: center;\n"]);return ae=function(){return e},e}function oe(){var e=Object(c.a)(["\n  background: #000033;\n  // justify-content: center;\n  // align-items: center;\n  &.slick-slide {\n    text-align: center;\n    height: 160px;\n    line-height: 160px;\n    background: #000033;\n    overflow: hidden;\n  }\n\n  & h3 {\n    color: #fff;\n  }t\n"]);return oe=function(){return e},e}var ie=j.a.Item,ce=Object(s.default)(V)(oe()),le=(s.default.div(ae(),function(e){return e.background}),Object(s.default)(j.a)(re())),ue=Object(s.default)(ie)(te()),se=Object(s.default)(w.a)(ne(),Y.largeFontSize),de=s.default.div(ee()),fe=Object(s.default)(O.a)(Z(),Y.largeFontSize),me=function(e){function n(){var e,t;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(v.a)(n)).call.apply(e,[this].concat(a)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,n){e?console.log(e):t.getPos(n.address)})},t}return Object(y.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"getPos",value:function(e){Promise.race([new Promise(function(n){return D.getPosFromAddr(e).then(function(e){e.data.documents.length&&n(e.data.documents)})}),new Promise(function(n){return D.getPosFromKeyword(e).then(function(e){e.data.documents.length&&n(e.data.documents)})})]).then(function(e){var n={endX:e[0].x,endY:e[0].y},t=e[0].address_name;localStorage.setItem("loc",JSON.stringify({endLocation:n,addr:t}))}).then(this.props.toggleComponent)}},{key:"render",value:function(){var e=this.props.form,n=e.getFieldDecorator,t=e.getFieldError,r=(0,e.isFieldTouched)("address")&&t("address");return a.a.createElement(ce,null,a.a.createElement(le,null,a.a.createElement(ue,{validateStatus:r?"error":"",help:r||""},n("address",{rules:[{required:!1,message:"\uc9d1 \uadfc\ucc98 \uc5ed\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694!"}]})(a.a.createElement(se,{placeholder:"\uc9d1 \uadfc\ucc98 \uc5ed\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694",onPressEnter:this.handleSubmit})))),a.a.createElement(de,null,a.a.createElement(fe,{type:"secondary",onClick:this.handleSubmit},"\ud655\uc778")))}}]),n}(r.Component),he=j.a.create({name:"address"})(me),be=t(19),pe=t(304),ge=function(e){var n=e.taxi;return a.a.createElement(J,null,a.a.createElement(Q,null,a.a.createElement(q,{size:"largeFontSize",weight:"bold",lineHeight:"2rem"},"\ud0dd\uc2dc"),a.a.createElement(q,null,n.time,"\ubd84 \uc18c\uc694 | ",(n.distance/1e3).toFixed(1),"km | \uc57d"," ",String(Math.floor(n.price/1e3))+","+String(n.price%1e3),"\uc6d0")),a.a.createElement(_,null,a.a.createElement($,{style:{width:"100%",backgroundColor:"#ffd300",color:"white"}},n.time,"\ubd84")))},ve=function(e){var n=e.totalTime,t=(e.price,e.runTime),r=e.lastTime;console.log("props"),console.log(e);return a.a.createElement(J,null,a.a.createElement(Q,null,a.a.createElement(q,{size:"largeFontSize",weight:"bold",lineHeight:"2rem"},"\uc9c0\ud558\ucca0"),a.a.createElement(q,{weight:"normal"},a.a.createElement("span",null,"\ub9c9\ucc28 ",r.slice(0,5))," | ",n,"\ubd84 \uc18c\uc694")),a.a.createElement(_,{style:{marginBottom:0}},function(e,n){return n.map(function(n){var t=Math.floor(Number(n.time)/e*100);return t<24&&(t=24),t=String(t)+"%",a.a.createElement($,{className:"haha",key:N()(),style:{width:t,backgroundColor:n.color,color:"white"}},n.time,"\ubd84")})}(n,t)),a.a.createElement(_,{style:{marginTop:"0.5rem"}},function(e,n){return n.map(function(n){var t=Math.floor(Number(n.time)/e*100),r="fas fa-train";return t<24&&(t=24),t=String(t)+"%","\ub3c4\ubcf4"===n.type&&(r="fas fa-walking"),a.a.createElement($,{className:"haha",key:N()(),style:{width:t}},a.a.createElement("i",{className:r,style:{color:M[n.type],fontSize:"0.8rem"}}," ","\ub3c4\ubcf4"===n.type?null:n.type))})}(n,t)))},ye=function(e){var n=e.price,t=e.runTime,r=e.total,o=e.routeType;console.log(e);return a.a.createElement(J,null,a.a.createElement(Q,null,a.a.createElement(q,{size:"largeFontSize",weight:"bold",lineHeight:"2rem"},"\ubc84\uc2a4 + \uc9c0\ud558\ucca0"),a.a.createElement(q,{weight:"normal"},Math.floor(r),"\ubd84 \uc18c\uc694 |"," ",String(Math.floor(n/1e3))+","+String(n%1e3),"\uc6d0 |"," ",o)),a.a.createElement(_,{style:{marginBottom:0}},function(e,n){return n.map(function(n){var t=Math.floor(Number(n.time)/e*100);return t<24&&(t=24),t=String(t)+"%",a.a.createElement($,{className:"haha",key:N()(),style:{width:t,backgroundColor:n.color,color:"white"}},Math.floor(Number(n.time)),"\ubd84")})}(r,t)),a.a.createElement(_,{style:{marginTop:"0.5rem"}},function(e,n){return n.map(function(n){var t=Math.floor(Number(n.time)/e*100);return t<24&&(t=24),t=String(t)+"%",a.a.createElement($,{className:"haha",key:N()(),style:{width:t}},a.a.createElement("i",{className:n.icon,style:{color:n.color,fontSize:"0.8rem"}}," ","\ub3c4\ubcf4"===n.type?null:n.type))})}(r,t)))};function je(){var e=Object(c.a)(["\n  width: 90%;\n  margin-bottom: 1rem;\n  height: 3rem;\n  background: #000033;\n  border: none;\n"]);return je=function(){return e},e}function we(){var e=Object(c.a)(["\n  margin-bottom: 8rem;\n  // &:first-of-type {\n  //   border-bottom: 3rem solid grey;\n  // }\n"]);return we=function(){return e},e}function Oe(){var e=Object(c.a)(["\n  display: flex;\n  position: fixed;\n  justify-content: space-around;\n  width: 100%;\n  bottom: 0;\n  // padding: 1.3rem;\n"]);return Oe=function(){return e},e}var Ee=s.default.div(Oe()),ke=s.default.div(we()),xe=Object(s.default)(O.a)(je()),Se=(r.Component,t(307));function Fe(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n"]);return Fe=function(){return e},e}function Ne(){var e=Object(c.a)(["\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 2.4rem;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ne=function(){return e},e}function Pe(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 3rem;\n  background: white;\n  margin-right: 1rem;\n"]);return Pe=function(){return e},e}function ze(){var e=Object(c.a)(["\n  display: flex;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Ce=function(){return e},e}var Te=s.default.div(Ce()),Le=s.default.div(ze()),Ae=s.default.div(Pe()),De=s.default.div(Ne(),function(e){return e.lineColor}),Ue=s.default.div(Fe()),Xe=function(e){var n=e.lineColor,t=e.lineName,r=e.endStationName,o=e.startStationName;return a.a.createElement(Te,null,a.a.createElement(Le,null,a.a.createElement(Ae,null,a.a.createElement(De,{lineColor:n},t.slice(0,1))),a.a.createElement(Ue,null,a.a.createElement(q,{size:"smallFontSize"},r+" \ubc29\ud5a5"),a.a.createElement(q,{size:"largeFontSize",weight:"bold"},o))))};function Ye(){var e=Object(c.a)(["\n  border: 1px solid #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1rem;\n  height: 1.5rem;\n  width: 5rem;\n  font-size: 0.8rem;\n  margin-right: 0.7rem;\n"]);return Ye=function(){return e},e}function Me(){var e=Object(c.a)(["\n  color: white;\n  width: 60%;\n"]);return Me=function(){return e},e}function Be(){var e=Object(c.a)(["\n  margin-left: 1.5rem;\n  width: 10px;\n  height: 16%;\n  border-left: 2px dotted #fff;\n"]);return Be=function(){return e},e}function Ie(){var e=Object(c.a)(["\n  align-items: flex-end;\n"]);return Ie=function(){return e},e}function Re(){var e=Object(c.a)(["\n  height: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return Re=function(){return e},e}function We(){var e=Object(c.a)(["\n  display: flex;\n  flex: 3;\n  justify-content: space-between;\n  align-items: center;\n"]);return We=function(){return e},e}function Ke(){var e=Object(c.a)(["\n  display: flex;\n  flex: 1;\n  max-height: 1rem;\n  align-items: center;\n"]);return Ke=function(){return e},e}function Ge(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  padding-bottom: 0;\n  color: white;\n  flex: inherit;\n  max-height: 35vh;\n  background: #000033;\n"]);return Ge=function(){return e},e}var He=Se.a.Countdown,qe=s.default.div(Ge()),Je=s.default.div(Ke()),_e=s.default.div(We()),$e=s.default.div(Re()),Qe=Object(s.default)($e)(Ie()),Ve=s.default.div(Be()),Ze=Object(s.default)(O.a)(Me()),en=s.default.div(Ye()),nn=function(e){function n(e){var t;Object(b.a)(this,n),t=Object(g.a)(this,Object(v.a)(n).call(this,e));var r=e.sub,a=e.addr;return t.state={sub:r,remain:r.routeList[0].remain,addr:a},t}return Object(y.a)(n,e),Object(p.a)(n,[{key:"componentDidUpdate",value:function(e,n){if(e.sub!==this.props.sub||e.addr!==this.props.addr){var t=this.props,r=t.addr,a=t.sub.routeList[0].remain;this.setState({addr:r,remain:a})}}},{key:"onFinish",value:function(){console.log("Finished")}},{key:"renderDetail",value:function(){var e=this.state,n=e.remain,t=e.addr,r=e.sub.subOnly,o=Date.now()+1e3*n,i=r.subOnlyList,c=r.lineList;if(n){var l=i[0].displayName,u=i[1].displayName;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Je,null,a.a.createElement(en,null,a.a.createElement(be.a,{type:"environment",theme:"filled",style:{marginRight:"0.3rem"}}),"\ud604\uc704\uce58"),a.a.createElement(q,{size:"normalFontSize"}," ",t)),a.a.createElement(_e,null,a.a.createElement($e,null,a.a.createElement(Xe,{lineColor:c[0].lineColor,lineName:c[0].lineName,endStationName:u,startStationName:l}),a.a.createElement(Ve,null),a.a.createElement(Xe,{lineColor:c[c.length-1].lineColor,lineName:c[c.length-1].lineName,endStationName:u,startStationName:l})),a.a.createElement(Qe,null,a.a.createElement(He,{value:o,onFinish:this.onFinish,valueStyle:{color:"white",fontSize:"2.4rem",lineHeight:1},format:"m\ubd84 ss\ucd08"}),a.a.createElement(Ze,{type:"ghost",shape:"round",onClick:this.props.onButtonPress},"\ubaa9\uc801\uc9c0 \uc7ac\uc124\uc815"))))}return null}},{key:"render",value:function(){return a.a.createElement(qe,null,this.renderDetail())}}]),n}(r.Component),tn=t(308);function rn(){var e=Object(c.a)(["\n  color: ",";\n  width: 2rem;\n  height: 2rem;\n  border-radius: 2.4rem;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return rn=function(){return e},e}function an(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 3rem;\n  background: ",";\n  margin-right: 1rem;\n"]);return an=function(){return e},e}function on(){var e=Object(c.a)(["\n  padding: 1rem;\n"]);return on=function(){return e},e}function cn(){var e=Object(c.a)(["\n  margin: 2rem;\n"]);return cn=function(){return e},e}var ln=Object(s.default)(tn.a.Item)(cn()),un=s.default.div(on()),sn=s.default.div(an(),function(e){return e.color}),dn=s.default.div(rn(),function(e){return e.color}),fn=function(e){function n(e){var t;Object(b.a)(this,n);var r=(t=Object(g.a)(this,Object(v.a)(n).call(this,e))).props.sub;return t.state={sub:r},t}return Object(y.a)(n,e),Object(p.a)(n,[{key:"renderSubwayRoutes",value:function(){var e=this.state.sub,n=e.routes,t=e.routeList;e.subOnly;if(n[0].runTime.length){var r=n[0],o=r.totalTime,i=r.price,c=r.runTime;return a.a.createElement(ve,{totalTime:o,price:i,runTime:c,lastTime:t[0].lastTime})}return null}},{key:"renderTimeline",value:function(){var e=this.state.sub;return console.log("sub"),console.log(e),e.routes[0].runTime.map(function(e,n){return a.a.createElement(ln,{key:n,dot:a.a.createElement(sn,{color:e.color},a.a.createElement(dn,{color:e.color},"\ub3c4\ubcf4"===e.type?"\ub3c4\ubcf4":e.type.slice(0,1)))},a.a.createElement("span",null,e.stationName?e.stationName+" | ":null),a.a.createElement("span",null,e.time,"\ubd84 \uc18c\uc694"))})}},{key:"render",value:function(){return a.a.createElement(V,null,this.renderSubwayRoutes(),a.a.createElement(un,null,a.a.createElement(tn.a,null,this.renderTimeline())))}}]),n}(r.Component);function mn(){var e=Object(c.a)(["\n  width: 90%;\n  height: 3rem;\n  color: white;\n  background: #000033;\n  border-radius: 1.5rem;\n  margin-bottom: 1.3rem;\n  backgrouncolor: #000;\n  font-weight: bold;\n"]);return mn=function(){return e},e}function hn(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 80%;\n  color: #000033;\n"]);return hn=function(){return e},e}function bn(){var e=Object(c.a)(["\n  display: flex;\n  flex: 2;\n"]);return bn=function(){return e},e}function pn(){var e=Object(c.a)(["\n  display: flex;\n  flex: 5;\n  justify-content: center;\n  & .anticon-spin {\n    position: absolute;\n    top: 3rem;\n  }\n"]);return pn=function(){return e},e}var gn=s.default.div(pn()),vn=s.default.div(bn()),yn=s.default.div(hn()),jn=Object(s.default)(O.a)(mn()),wn=a.a.createElement(be.a,{type:"loading",style:{fontSize:24},spin:!0}),On=function(e){function n(e){var t;return Object(b.a)(this,n),(t=Object(g.a)(this,Object(v.a)(n).call(this,e))).state={currentPos:{startX:null,startY:null}},t}return Object(y.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("loc")){var n=JSON.parse(localStorage.getItem("loc")).endLocation,t=n.endX,r=n.endY;this.setState({currentPos:Object(P.a)({},this.state.currentPos,{endX:t,endY:r})})}navigator.geolocation.getCurrentPosition(function(n){var t=n.coords,r=t.latitude,a=t.longitude;e.setState({currentPos:Object(P.a)({},e.state.currentPos,{startX:a,startY:r})})})}},{key:"componentDidUpdate",value:function(e,n){if(n.currentPos.startX!==this.state.currentPos.startX){var t=this.state.currentPos,r=t.startX,a=t.startY;this.getCurrentPosFromGPS(r,a),this.getData(a,r)}}},{key:"getData",value:function(e,n){var t=this,r=this.state.currentPos,a=r.endX,o=r.endY;console.log("success"),D.getData({startX:n,startY:e,endX:a,endY:o}).then(function(e){var n=C(e.data),r=n.bus,a=n.busNSub,o=n.sub,i=n.taxi;t.setState({bus:r,busNSub:a,sub:o,taxi:i})})}},{key:"getCurrentPosFromGPS",value:function(e,n){var t=this;D.getPosFromGPS(e,n).then(function(r){t.setState({currentPos:Object(P.a)({},t.state.currentPos,{addr:r.data.documents[0].address.address_name,startX:e,startY:n})})})}},{key:"onButtonPress",value:function(){localStorage.setItem("loc",""),this.props.toggleComponent()}},{key:"renderMain",value:function(){var e=this.state,n=e.currentPos,t=(e.bus,e.sub);e.busNSub,e.taxi;return t?a.a.createElement(a.a.Fragment,null,a.a.createElement(vn,null,a.a.createElement(nn,{sub:t,addr:n.addr,onButtonPress:this.onButtonPress.bind(this)})),a.a.createElement(gn,null,a.a.createElement(fn,{sub:t}))):a.a.createElement(yn,null,a.a.createElement(pe.a,{indicator:wn}),a.a.createElement(q,{size:"largeFontSize"},"\uacbd\ub85c\ub97c \ud0d0\uc0c9 \uc911\uc785\ub2c8\ub2e4..."),a.a.createElement(jn,{onClick:this.onButtonPress.bind(this)},"\ubaa9\uc801\uc9c0 \ub2e4\uc2dc \uc785\ub825\ud558\uae30"))}},{key:"render",value:function(){return a.a.createElement(V,null,this.renderMain())}}]),n}(r.Component),En=function(e){function n(){var e,t;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(v.a)(n)).call.apply(e,[this].concat(a)))).state={component:"form"},t}return Object(y.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("loc")&&this.setState({component:"main"})}},{key:"componentDidUpdate",value:function(e,n){e!==this.props&&console.log(this.props)}},{key:"toggleComponent",value:function(){"form"===this.state.component?this.setState({component:"main"}):this.setState({component:"form"})}},{key:"render",value:function(){return a.a.createElement(V,null,"form"===this.state.component?a.a.createElement(he,{toggleComponent:this.toggleComponent.bind(this)}):a.a.createElement(On,{toggleComponent:this.toggleComponent.bind(this)}))}}]),n}(r.Component);function kn(){var e=Object(c.a)(["\n  display: flex;\n  flex: 2;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 1rem;\n"]);return kn=function(){return e},e}function xn(){var e=Object(c.a)(["\n  line-height: 2rem;\n  background: #000033;\n  border-bottom: 1px solid #fff;\n  color: white;\n  font-size: 1.2rem;\n"]);return xn=function(){return e},e}function Sn(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  height: inherit;\n  width: 100%;\n"]);return Sn=function(){return e},e}function Fn(){var e=Object(c.a)(["\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  flex: 6;\n  color: white;\n  justify-content: space-around;\n"]);return Fn=function(){return e},e}function Nn(){var e=Object(c.a)(["\n  flex: 2;\n  justify-content: space-around;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  color: white;\n"]);return Nn=function(){return e},e}var Pn=w.a.TextArea,zn=s.default.div(Nn()),Cn=s.default.div(Fn()),Tn=Object(s.default)(j.a)(Sn()),Ln=Object(s.default)(Pn)(xn()),An=s.default.div(kn()),Dn=function(e){function n(){var e,t;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(v.a)(n)).call.apply(e,[this].concat(a)))).state={},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,n){if(!e){var r=new FormData;r.append("feedback",n.feedback),r.append("Uid",t.state.Uid),D.postFeedback(r)}})},t}return Object(y.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("Uid");this.setState({Uid:e})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return a.a.createElement(V,{style:{background:"#000033"}},a.a.createElement(zn,null,a.a.createElement(q,{size:"extraLargeFontSize",weight:"bold"},"\ud53c\ub4dc\ubc31"),a.a.createElement(q,null,"\ucd94\uac00\ub418\uba74 \uc88b\uc744 \uae30\ub2a5\uc774\ub098 \uac1c\uc120\ud560 \uc0ac\ud56d\uc744 \uc54c\ub824\uc8fc\uc138\uc694~")),a.a.createElement(Cn,null,a.a.createElement(Tn,null,e("feedback",{rules:[{required:!1,message:"\uc0ac\uc6a9\ud574 \ubcf4\ub2c8 \uc5b4\ub560\ub098\uc694?"}]})(a.a.createElement(Ln,{placeholder:"\ud53c\ub4dc\ubc31\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",autosize:{minRows:1,maxRows:5},style:{border:"none",borderBottom:"1px solid #fff"}})))),a.a.createElement(An,null,a.a.createElement(O.a,{shape:"round",type:"ghost",style:{background:"white",color:"#000033"},block:!0,onClick:this.handleSubmit},a.a.createElement(l.b,{to:"/"},"\ud655\uc778")),a.a.createElement(O.a,{shape:"round",type:"ghost",style:{color:"white"},block:!0},a.a.createElement(l.b,{to:"/"},"\ucde8\uc18c"))))}}]),n}(r.Component),Un=j.a.create({name:"feedback"})(Dn);function Xn(){var e=Object(c.a)(["\n  height: 100%;\n  width: 100%;\n"]);return Xn=function(){return e},e}var Yn=s.default.div(Xn()),Mn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(l.a,null,a.a.createElement(Yn,{className:"app"},a.a.createElement(u.a,{exact:!0,path:"/",component:En}),a.a.createElement(u.a,{path:"/feedback",component:Un}))))},Bn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function In(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(Mn,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/sw.js");Bn?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):In(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):In(n,e)})}}()}},[[156,1,2]]]);
//# sourceMappingURL=main.fd539953.chunk.js.map