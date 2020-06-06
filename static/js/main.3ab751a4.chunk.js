(this.webpackJsonpemotivideo=this.webpackJsonpemotivideo||[]).push([[0],{42:function(e,t,n){e.exports=n(64)},47:function(e,t,n){},48:function(e,t,n){},56:function(e,t){},57:function(e,t){},58:function(e,t){},64:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(15),i=n.n(o),s=(n(47),n(23)),c=n(24),l=n(29),m=n(28),u=(n(48),n(85)),d=n(65),h=n(86),f=n(87),p=n(13),g=n.n(p),v=n(22),w=n(35),E=n.n(w),b=n(6),x=n(11),k=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).componentDidMount=Object(v.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadNewModel();case 2:e.setInputDevice();case 3:case"end":return t.stop()}}),t)}))),e.loadNewModel=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/emotivideo/models",e.next=3,x.d.tinyFaceDetector.loadFromUri(t);case 3:return e.next=5,x.d.faceLandmark68Net.loadFromUri(t);case 5:return e.next=7,x.d.faceRecognitionNet.loadFromUri(t);case 7:return e.next=9,x.d.faceExpressionNet.loadFromUri(t);case 9:return e.next=11,x.d.ageGenderNet.loadFromUri(t);case 11:case"end":return e.stop()}}),e)}))),e.setInputDevice=function(){navigator.mediaDevices.enumerateDevices().then(function(){var t=Object(v.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.filter((function(e){return"videoinput"===e.kind}));case 2:if(!(t.sent.length<2)){t.next=8;break}return t.next=6,e.setState({facingMode:"user"});case 6:t.next=10;break;case 8:return t.next=10,e.setState({facingMode:"user"});case 10:e.startVideoFeed();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e.startVideoFeed=function(){e.interval=setInterval((function(){e.videoFeed()}),100)},e.componentWillUnmount=function(){clearInterval(e.interval)},e.videoFeed=Object(v.a)(g.a.mark((function t(){var n,a,r,o,i,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("video"),t.next=3,x.b(n,new x.a).withFaceLandmarks().withFaceExpressions();case 3:return a=t.sent,t.next=6,e.setState({detections:a});case 6:r={width:300,height:300},o=x.e(a,r),(i=document.getElementById("canvas")).getContext("2d").clearRect(0,0,i.width,i.height),e.props.showLandmarks&&(x.c.drawDetections(i,o),x.c.drawFaceLandmarks(i,o)),console.log(a),e.state.detections.length>0&&(s=Object.keys(a[0].expressions).find((function(e){return a[0].expressions[e]>.5})),e.props.getCurrentEmotion(s));case 13:case"end":return t.stop()}}),t)}))),e.state={facingMode:null,detections:null},e.webcam=r.a.createRef(),e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.classes,t=this.state.facingMode,n=null;return t&&(n={width:300,height:300,facingMode:t}),r.a.createElement(d.a,{elevation:0,className:e.root},r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(E.a,{id:"video",audio:!1,width:300,height:300,ref:this.webcam,screenshotFormat:"image/jpeg",videoConstraints:n,style:{borderRadius:"20px"}}),r.a.createElement("canvas",{style:{position:"absolute"},id:"canvas",ref:this.canvas,width:300,height:300})))}}]),n}(r.a.Component),y=Object(b.a)((function(e){return{root:{flexGrow:1,margin:"0 auto",width:"90vw",height:"90vw",marginTop:"1rem",marginBottom:"1rem",borderRadius:"20px"}}}))(k),j=n(81),C=n(82),O=n(83),L=n(84),F=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontSize:" 1.25rem"},subtitle:{marginTop:"1rem",marginBottom:"1rem",fontStyle:"italic",fontSize:".6rem"}}})),R=function(){var e=F();return r.a.createElement("div",null,r.a.createElement(C.a,{position:"static",color:"primary",style:{borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}},r.a.createElement(O.a,null,r.a.createElement(L.a,{variant:"h5",className:e.title},"Emoti Video"))),r.a.createElement(L.a,{className:e.subtitle,align:"center",display:"block",variant:"button"},"An App That Detects Facial Emotions In Real-Time"))},N=function(e){var t=e.emotion;return r.a.createElement("div",{style:{margin:"0 auto",marginTop:"1rem",width:"80vw"}},r.a.createElement(d.a,{elevation:3,style:{padding:"1rem"}},r.a.createElement(L.a,{style:{marginBottom:".5rem"},align:"center",variant:"body2"},"CURRENT EXPRESSION:"),r.a.createElement(L.a,{align:"center",variant:"subtitle2"},t?t.toUpperCase():"LOADING...")))},S=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).getCurrentEmotion=function(t){e.setState({emotion:t})},e.showLandmarks=function(t){t.preventDefault(),e.setState({showLandmarks:!e.state.showLandmarks})},e.state={emotion:"",age:"",gender:"",showLandmarks:!1},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(u.a,{maxWidth:"sm",style:{marginTop:"2rem",marginBottom:"2rem"}},r.a.createElement(d.a,{elevation:3,style:{borderRadius:"20px"}},r.a.createElement(R,null),r.a.createElement("hr",{style:{width:"60%"}}),r.a.createElement(y,{getCurrentEmotion:this.getCurrentEmotion,getCurrentAge:this.getCurrentAge,getCurrentGender:this.getCurrentGender,showLandmarks:this.state.showLandmarks}),r.a.createElement("hr",{style:{width:"60%"}}),r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(N,{emotion:this.state.emotion})),r.a.createElement(h.a,{item:!0,sm:12},r.a.createElement(d.a,{style:{padding:".25rem"}},r.a.createElement(f.a,{onClick:this.showLandmarks},this.state.showLandmarks?"Click To Hide Landmarks":"Click To Show Landmarks"))))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.3ab751a4.chunk.js.map