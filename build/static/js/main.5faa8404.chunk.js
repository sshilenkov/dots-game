(this["webpackJsonpdots-game"]=this["webpackJsonpdots-game"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),c=a.n(r),s=a(24),i=a.n(s),o=a(14),u=(a(79),a(80),a(81),a(18)),d=a(19),l=a(21),h=a(20),m=(a(82),a(65)),g=a(111),f=a(113),p=a(62),b="GAME_MODE",j="CHANGE_NAME",O="GET_GAME_CONFIG",v="SET_GAME_CONFIG",y="SECTION_CHANGE",x="GAME_OVER";function _(e,t){return{type:v,config:e,userName:t}}var k=Object(o.b)((function(e){var t=e.game;return{mode:t.mode,gameIsOn:t.gameIsOn}}),{gameMode:function(e){return{type:b,mode:e}},changeName:function(e){return{type:j,value:e}},getGameConfig:function(){return{type:O}}})(function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChangeMode=function(t){return e.props.gameMode(t.target.dataset.mode)},e.handleChangeName=function(t){return e.props.changeName(t.target.value)},e.startPlay=function(){return e.props.getGameConfig()},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.mode,r=t.gameIsOn,c=a&&(a[0].toUpperCase()+a.slice(1)).replace("Mode","");return Object(n.jsxs)("div",{className:"config",children:[Object(n.jsx)(m.a,{children:Object(n.jsxs)(g.a,{id:"dropdown-basic-button",title:c||"Pick game mode",children:[Object(n.jsx)(m.a.Item,{onClick:function(t){return e.handleChangeMode(t)},"data-mode":"easyMode",children:"Easy"}),Object(n.jsx)(m.a.Item,{onClick:function(t){return e.handleChangeMode(t)},"data-mode":"normalMode",children:"Normal"}),Object(n.jsx)(m.a.Item,{onClick:function(t){return e.handleChangeMode(t)},"data-mode":"hardMode",children:"Hard"})]})}),Object(n.jsx)(f.a,{placeholder:"Enter your name",onBlur:function(t){return e.handleChangeName(t)}}),Object(n.jsx)(p.a,{variant:"success",onClick:function(){return e.startPlay()},disabled:r,children:!1===r?"Play again":"Play"})]})}}]),a}(c.a.Component)),C=(a(86),Object(o.b)((function(e){return e.game}))(function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.error,a=e.message;return Object(n.jsx)("div",{style:t?{color:"red"}:{},children:t||a})}}]),a}(c.a.Component))),N=(a(87),a(8)),S=a.n(N),M=Object(o.b)((function(e){return e.game}),{sectionChange:function(e){return{type:y,newSchema:e}},gameOver:function(e){return{type:x,winner:e}}})(function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).resetGameData(),n}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){this.setGameplay()}},{key:"setGameplay",value:function(){var e=this,t=this.props,a=t.gameIsOn,n=t.delay,r=t.gameSchema;a?(clearTimeout(this.gameInterval),this.gameInterval=setTimeout((function(){e.defferedSchema=JSON.parse(JSON.stringify(r)),e.checkPrevSection(),e.gameLogic(),e.defferedSectionChange()}),n)):null!==a&&(clearTimeout(this.gameInterval),this.resetGameData())}},{key:"checkPrevSection",value:function(){var e=this.props.gameSchema;void 0!==this.randX&&void 0!==this.randY&&"O"===e[this.randX][this.randY]&&(this.defferedSchema[this.randX][this.randY]="-",this.compPoints++)}},{key:"defferedSectionChange",value:function(){var e=this.props.sectionChange;this.defferedSchema.length&&e(this.defferedSchema)}},{key:"randCoord",value:function(){for(var e=this.props.gameSchema;"."!==e[this.randX][this.randY];)this.randX=Math.floor(Math.random()*e.length),this.randY=Math.floor(Math.random()*e.length)}},{key:"resetGameData",value:function(){this.userPoints=0,this.compPoints=0,this.defferedSchema=[],this.randX=Math.floor(5*Math.random()),this.randY=Math.floor(5*Math.random())}},{key:"gameLogic",value:function(){var e=this.props,t=e.gameSchema,a=e.gameOver,n=e.userName,r=Math.pow(t.length,2)/2,c=t.flat();return this.userPoints>r?(this.defferedSectionChange(),void a(n)):this.compPoints>r?(this.defferedSectionChange(),void a("Computer")):this.userPoints===r&&this.compPoints===r?(this.defferedSectionChange(),void a("Nobody")):(c.includes(".")&&this.randCoord(),void(this.defferedSchema[this.randX][this.randY]="O"))}},{key:"createArea",value:function(e){var t=this;return e.map((function(a,r){return Object(n.jsx)("div",{className:"area__row",children:a.map((function(a,c){var s="",i=null;switch(a){case"O":s="area__col--illuminated",i=function(e){e.target.classList.add("area__col--user"),t.defferedSchema[r][c]="+",t.userPoints++};break;case"+":s="area__col--user";break;case"-":s="area__col--comp"}var o=S()("area__col",s);return Object(n.jsx)("div",{className:o,style:{height:"calc(600px / ".concat(e.length,")")},onClick:i},c)}))},r)}))}},{key:"render",value:function(){var e=this.props.gameSchema,t=e.length?this.createArea(e):Object(n.jsx)("div",{className:"area__empty"});return Object(n.jsx)("div",{className:"area",children:t})}}]),a}(c.a.Component)),w=function(){return Object(n.jsx)("div",{className:"playing-field",children:Object(n.jsxs)("div",{className:"playing-field__holder",children:[Object(n.jsx)(k,{}),Object(n.jsx)(C,{}),Object(n.jsx)(M,{})]})})},P=(a(88),a(112)),E=a(63),G=a.n(E),I="GET_RESULTS",A="SET_RESULTS";var D=Object(o.b)((function(e){return e.board}),{getResults:function(){return{type:I}}})(function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={currentPage:1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getResults)()}},{key:"clickPage",value:function(e){this.setState((function(){return{currentPage:e.selected+1}}))}},{key:"render",value:function(){var e=this,t=this.state.currentPage,a=this.props.results,r=a.length%10===0?a.length/10:Math.floor(a.length/10)+1;return Object(n.jsxs)("div",{className:"leader-board",children:[Object(n.jsx)(P.a,{className:"leader-board__list",children:a.reverse().slice(10*(t-1),10*t).map((function(e){return Object(n.jsxs)(P.a.Item,{variant:"success",className:"leader-board__item",children:[Object(n.jsx)("span",{children:e.winner}),Object(n.jsx)("span",{children:e.date})]},e.id)}))}),a.length>10&&Object(n.jsx)(G.a,{pageCount:r,pageRangeDisplayed:3,marginPagesDisplayed:1,previousLabel:"\u041d\u0430\u0437\u0430\u0434",nextLabel:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f",onPageChange:function(t){return e.clickPage(t)},containerClassName:"board-pagination",previousClassName:"pagination__button",nextClassName:"pagination__button pagination__button--next",disabledClassName:"pagination__button--disabled",pageClassName:"pagination__page",pageLinkClassName:"pagination__page-link",activeLinkClassName:"pagination__page-link--active"})]})}}]),a}(c.a.Component)),L=a(15),T=a(10),Y={mode:null,userName:"",error:null,message:"Let's play?",delay:null,gameSchema:[],gameIsOn:null,winner:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(T.a)(Object(T.a)({},e),{},{mode:t.mode});case j:return Object(T.a)(Object(T.a)({},e),{},{userName:t.value});case v:if(void 0===t.config)return Object(T.a)(Object(T.a)({},e),{},{error:"Please, select game mode"});if(void 0===t.userName||""===t.userName)return Object(T.a)(Object(T.a)({},e),{},{error:"Please, enter your name"});for(var a=t.config,n=a.field,r=a.delay,c=[],s=0;s<n;s++){for(var i=[],o=0;o<n;o++)i.push(".");c.push(i)}return Object(T.a)(Object(T.a)({},e),{},{error:null,message:"Game start!",delay:r,gameSchema:c,gameIsOn:!0});case y:return Object(T.a)(Object(T.a)({},e),{},{gameSchema:t.newSchema});case x:return Object(T.a)(Object(T.a)({},e),{},{message:"".concat(t.winner," won!"),gameIsOn:!1,winner:t.winner});default:return Object(T.a)({},e)}},H={results:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{results:t.results};default:return Object(T.a)({},e)}},J=Object(L.c)({game:X,board:R}),U=a(66),F=a(17),B=a.n(F),V=a(41),q=a.n(V),z=a(22),K=B.a.mark($),Q=B.a.mark(ee),W=B.a.mark(te),Z=B.a.mark(ae);function $(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.c)(O,ee);case 2:return e.next=4,Object(z.c)(x,te);case 4:return e.next=6,Object(z.c)(I,ae);case 6:case"end":return e.stop()}}),K)}function ee(){var e,t,a,n;return B.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(z.b)((function(e){return e.game}));case 2:return e=r.sent,t=e.mode,a=e.userName,r.next=7,q.a.get("https://starnavi-frontend-test-task.herokuapp.com/game-settings");case 7:return n=r.sent,r.next=10,Object(z.a)(_(n.data[t],a));case 10:case"end":return r.stop()}}),Q)}function te(){var e,t,a,n,r,c;return B.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(z.b)((function(e){return e.game}));case 2:if(e=s.sent,"Nobody"===(t=e.winner)){s.next=11;break}return a=new Date,n=a.getMinutes()<10?"0".concat(a.getMinutes()):a.getMinutes(),r=a.getHours()<10?"0".concat(a.getHours()):a.getHours(),c="".concat(r,":").concat(n,"; ").concat(a.getDate(),".").concat(a.getMonth(),".").concat(a.getFullYear()),s.next=11,q.a.post("https://starnavi-frontend-test-task.herokuapp.com/winners",{winner:t,date:c});case 11:return s.next=13,ae();case 13:case"end":return s.stop()}}),W)}function ae(){var e;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.a.get("https://starnavi-frontend-test-task.herokuapp.com/winners");case 2:return e=t.sent,t.next=5,Object(z.a)((a=e.data,{type:A,results:a}));case 5:case"end":return t.stop()}var a}),Z)}var ne=Object(U.a)(),re=Object(L.e)(J,Object(L.a)(ne));ne.run($);var ce=re;i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(o.a,{store:ce,children:Object(n.jsxs)("div",{className:"game-dots",children:[Object(n.jsx)(w,{}),Object(n.jsx)(D,{})]})})}),document.getElementById("root"))},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.5faa8404.chunk.js.map