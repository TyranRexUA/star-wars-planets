(this["webpackJsonpstar-wars-planets"]=this["webpackJsonpstar-wars-planets"]||[]).push([[0],{12:function(e,t,a){e.exports={Card:"Card_Card__1v2cZ",Card__property:"Card_Card__property__Aahcx",name:"Card_name__r36-q",value:"Card_value__3_M_L"}},16:function(e,t,a){e.exports={header:"DesktopHeader_header__3_0mC",btn:"DesktopHeader_btn__3ZpgL",empty:"DesktopHeader_empty__3E0O8",barOverlay:"DesktopHeader_barOverlay__3HAAQ"}},19:function(e,t,a){e.exports={Library:"Library_Library__1fGSF",NotFound:"Library_NotFound__3G7da",showMoreBtn:"Library_showMoreBtn__3yiOD",showMoreBtn_preloader:"Library_showMoreBtn_preloader__2ngkF"}},20:function(e,t,a){e.exports={error:"Error_error__3nLsN",contentWrapper:"Error_contentWrapper__3NeZ_",title:"Error_title__2hED2",mainPageBtn:"Error_mainPageBtn__EbuRY"}},24:function(e,t,a){e.exports={InfoField:"InfoField_InfoField__1Zc-7",name:"InfoField_name__2eoYC",values:"InfoField_values__3xN1y"}},29:function(e,t,a){e.exports={PlanetPage:"PlanetPage_PlanetPage__1ufD0"}},30:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__1N1Bz",search:"SearchForm_search__1ULgL",backButton:"SearchForm_backButton__340eM"}},33:function(e,t,a){e.exports={Preloader:"Preloader_Preloader__182ZQ"}},41:function(e,t,a){},42:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/star-wars-gif.153166d7.gif"},54:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/back.1dbfbe02.svg"},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),i=(a(41),a(42),a(4)),o=a(22),l=a(14),u=a(11),d=a(3),p=a(33),j=a.n(p),h=a(1),b=function(e){return Object(h.jsx)("div",Object(d.a)({className:j.a.Preloader},e))},f=a(5),O=a(13),m=a(25),_=!1,x="https://swapi.dev/api/",v=function(){var e=Object(O.a)(Object(f.a)().mark((function e(t){var a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=5;break}return e.next=3,t.json();case 3:return a=e.sent,e.abrupt("return",a);case 5:throw new Error;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={getPlanets:function(){return fetch(x+"planets/").then(v)},getMorePlanets:function(e){return fetch(e).then(v)},getPlanetDetails:function(e){return fetch(x+"planets/".concat(e,"/")).then(v)},getPerson:function(e){return fetch(e).then(v)},searchPlanets:function(e){return fetch(x+"planets/?search=".concat(e)).then(v)}},g="planets/SET_PLANETS",P="planets/ADD_PLANETS",N="planets/TOGGLE_IS_GLOBAL_LOADING",L="planets/TOGGLE_IS_LOADING",w={next:"",planets:[],isLoading:!1,isGlobalLoading:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{planets:Object(m.a)(t.payload.results),next:t.payload.next});case P:return Object(d.a)(Object(d.a)({},e),{},{planets:[].concat(Object(m.a)(e.planets),Object(m.a)(t.payload.results)),next:t.payload.next});case L:return Object(d.a)(Object(d.a)({},e),{},{isLoading:t.isLoading});case N:return Object(d.a)(Object(d.a)({},e),{},{isGlobalLoading:t.isLoading});default:return e}},k=function(e){return{type:g,payload:e}},C=function(e){return{type:L,isLoading:e}},S=function(e){return{type:N,isLoading:e}},A=a(10),F=a(12),D=a.n(F),T=function(e){var t=e.id,a=e.name,n=e.climate,r=e.population;return Object(h.jsxs)(A.b,{className:D.a.Card,to:"/planet/".concat(t),children:[Object(h.jsxs)("div",{className:D.a.Card__property,children:[Object(h.jsx)("div",{className:D.a.name,children:"Name"}),Object(h.jsx)("div",{className:D.a.value,children:a})]}),Object(h.jsxs)("div",{className:D.a.Card__property,children:[Object(h.jsx)("div",{className:D.a.name,children:"Climate"}),Object(h.jsx)("div",{className:D.a.value,children:n})]}),Object(h.jsxs)("div",{className:D.a.Card__property,children:[Object(h.jsx)("div",{className:D.a.name,children:"Population"}),Object(h.jsx)("div",{className:D.a.value,children:r})]})]})},G=r.a.memo(T),I=a(19),B=a.n(I),M=a(35),V=a.n(M),R=function(e){var t=e.planets,a=e.requestPlanets,r=e.requestMorePlanets,c=e.next,s=e.isGlobalLoading,i=e.isLoading,l=e.match,u=e.searchPlanets;Object(n.useEffect)((function(){l.params.searchValue?u(l.params.searchValue):a()}),[l.params.searchValue,u,a]);var d=function(e){return+e.match(/(?<=planets\/)\d+/i)};return s?Object(h.jsx)(b,{style:{height:"calc(100vh - ".concat(70,"px)")}}):Object(h.jsxs)(h.Fragment,{children:[0===t.length&&Object(h.jsx)("div",{className:B.a.NotFound,children:"PLANETS NOT FOUND"}),Object(h.jsx)("div",{className:B.a.Library,children:t.map((function(e){return Object(h.jsx)(G,{id:d(e.url),name:e.name,climate:e.climate,population:e.population},d(e.url))}))}),c&&Object(h.jsx)("div",{className:V()(B.a.showMoreBtn,Object(o.a)({},B.a.showMoreBtn_preloader,i)),onClick:function(){i||r(c)},children:!i&&"SHOW MORE"})]})},H=Object(u.c)(i.g,Object(l.b)((function(e){return{planets:e.planets.planets,next:e.planets.next,isLoading:e.planets.isLoading,isGlobalLoading:e.planets.isGlobalLoading}}),{requestMorePlanets:function(e){return function(){var t=Object(O.a)(Object(f.a)().mark((function t(a){return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(C(!0)),y.getMorePlanets(e).then((function(e){a({type:P,payload:e})})).catch((function(){window.location.hash="#/error"})).finally((function(){a(C(!1))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestPlanets:function(){return function(){var e=Object(O.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(S(!0)),y.getPlanets().then((function(e){t(k(e))})).catch((function(e){console.log("+",e),window.location.hash="#/error"})).finally((function(){t(S(!1))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},searchPlanets:function(e){return function(){var t=Object(O.a)(Object(f.a)().mark((function t(a){return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(S(!0)),y.searchPlanets(e).then((function(e){a(k(e))})).catch((function(){window.location.hash="#/error"})).finally((function(){a(S(!1))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(r.a.memo(R)),q=a(31),U="currentPlanet/SET_PLANET_DETAILS",Z="currentPlanet/SET_PLANET_RESIDENTS",W="currentPlanet/CLEAR_CURRENT_PLANET",J="currentPlanet/TOGGLE_IS_LOADING",Q={name:null,rotation_period:null,diameter:null,climate:null,gravity:null,terrain:null,population:null,residents:[],isLoading:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(d.a)(Object(d.a)({},e),{},{name:t.payload.name,rotation_period:t.payload.rotation_period,diameter:t.payload.diameter,climate:t.payload.climate,gravity:t.payload.gravity,terrain:t.payload.terrain,population:t.payload.population});case Z:return Object(d.a)(Object(d.a)({},e),{},{residents:t.payload});case J:return Object(d.a)(Object(d.a)({},e),{},{isLoading:t.isLoading});case W:return Q;default:return e}},Y=function(e){return{type:J,isLoading:e}},z=a(24),K=a.n(z),$=function(e){var t=e.propertyName,a=e.values,n=Array.isArray(a)||a.split(", ").length<2?a:a.split(", ");return Object(h.jsxs)("div",{className:K.a.InfoField,children:[Object(h.jsx)("span",{className:K.a.name,children:t&&t.toUpperCase().replace("_"," ")}),Object(h.jsx)("div",{className:K.a.values,children:Array.isArray(n)?n.map((function(e){return Object(h.jsx)("span",{children:e},e)})):Object(h.jsx)("span",{children:a})})]})},ee=a(29),te=a.n(ee),ae=function(e){var t=e.match,r=e.requestPlanetDetails,c=e.clearCurrentPlanet,s=e.details,i=e.isLoading,o=e.history;return Object(n.useEffect)((function(){return r(t.params.id,o),function(){c()}}),[t.params.id,r,c,o]),Object(n.useEffect)((function(){var e;null===(e=window.electron)||void 0===e||e.ipcRenderer.send("changeTitle",s.name||"")}),[s.name]),i?Object(h.jsx)(b,{style:{height:"calc(100vh - ".concat(70,"px)")}}):Object(h.jsxs)("div",{className:te.a.PlanetPage,children:[Object(h.jsx)("div",{className:te.a.InfoBlock,children:Object.entries(s).filter((function(e){var t=Object(q.a)(e,2),a=(t[0],t[1]);return a&&a.length>0})).map((function(e){var t=Object(q.a)(e,2),a=t[0],n=t[1];return Object(h.jsx)($,{propertyName:a,values:n},a)}))}),Object(h.jsx)("img",{src:a(53).default,alt:""})]})},ne=Object(u.c)(i.g,Object(l.b)((function(e){return{details:{name:e.currentPlanet.name,rotation_period:e.currentPlanet.rotation_period,diameter:e.currentPlanet.diameter,climate:e.currentPlanet.climate,gravity:e.currentPlanet.gravity,terrain:e.currentPlanet.terrain,population:e.currentPlanet.population,residents:e.currentPlanet.residents},isLoading:e.currentPlanet.isLoading}}),{requestPlanetDetails:function(e){return function(){var t=Object(O.a)(Object(f.a)().mark((function t(a){return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(Y(!0)),y.getPlanetDetails(e).then(function(){var e=Object(O.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.residents.map((function(e){return y.getPerson(e)}))).then((function(e){var t;a((t=e.map((function(e){return e.name})),{type:Z,payload:t}))}));case 2:a({type:U,payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){window.location.hash="#/error"})).finally((function(){a(Y(!1))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},clearCurrentPlanet:function(){return{type:W}}}))(r.a.memo(ae)),re=a(30),ce=a.n(re),se="search/SET_SEARCH_VALUE",ie={searchValue:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return t.type===se?Object(d.a)(Object(d.a)({},e),{},{searchValue:t.payload}):e},le=function(e){var t=e.setSearchValue,a=e.match,r=e.searchValue,c=e.history;Object(n.useEffect)((function(){t(a.params.searchValue||"")}),[a.params.searchValue,t]);return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r?c.push("/search/".concat(r)):c.push("/")},className:ce.a.searchForm,children:[Object(h.jsx)("input",{className:ce.a.search,type:"text",onChange:function(e){return t(e.target.value)},value:r||"",placeholder:"Search planets..."}),Object(h.jsx)("button",{type:"submit"})]})},ue=Object(u.c)(i.g,Object(l.b)((function(e){return{searchValue:e.searchForm.searchValue}}),{setSearchValue:function(e){return{type:se,payload:e}}}))(r.a.memo(le)),de=a(20),pe=a.n(de),je=function(){return Object(h.jsx)("div",{className:pe.a.error,children:Object(h.jsxs)("div",{className:pe.a.contentWrapper,children:[Object(h.jsx)("div",{className:pe.a.title,children:"ERROR"}),Object(h.jsxs)("div",{children:["whoops! ",Object(h.jsx)("span",{children:"Houston, we have a problem"})]}),Object(h.jsx)(A.b,{className:pe.a.mainPageBtn,to:"/",children:"MAIN PAGE"})]})})},he=a(16),be=a.n(he),fe=function(e){var t=e.match,n=e.history;return Object(h.jsxs)("div",{className:be.a.header,children:["/"!==t.path?Object(h.jsx)("img",{src:a(54).default,alt:"ho_back",className:be.a.btn,onClick:function(){return n.goBack()}}):Object(h.jsx)("div",{className:be.a.empty}),Object(h.jsx)("img",{src:"./logo192.png",alt:"ho_back",className:be.a.btn,onClick:function(){return n.goBack()}}),Object(h.jsx)("div",{className:be.a.barOverlay})]})},Oe=(Object(i.g)(r.a.memo(fe)),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ue,{}),Object(h.jsx)(H,{})]})),me=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ue,{}),Object(h.jsx)(ne,{})]}),_e=function(e){return Object(h.jsxs)(h.Fragment,{children:[_,e]})},xe=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{exact:!0,path:"/",render:function(){return _e(Oe)}}),Object(h.jsx)(i.b,{path:"/planet/:id",render:function(){return _e(me)}}),Object(h.jsx)(i.b,{path:"/search/:searchValue",render:function(){return _e(Oe)}}),Object(h.jsx)(i.b,{path:"/error",render:function(){return _e(Object(h.jsx)(je,{}))}}),Object(h.jsx)(i.b,{path:"*",render:function(){return Object(h.jsx)(i.a,{to:"/error"})}})]})})},ve=a(36),ye=Object(u.b)({planets:E,currentPlanet:X,searchForm:oe}),ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,Pe=Object(u.d)(ye,ge(Object(u.a)(ve.a)));s.a.render(Object(h.jsx)(A.a,{children:Object(h.jsx)(l.a,{store:Pe,children:Object(h.jsx)(xe,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.86cd567e.chunk.js.map