(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(6),u=n(5),h=(n(13),n(14),function(e){return a.a.createElement("input",{className:"Search",type:"search",placeholder:e.placeholder,onChange:e.onSearch})}),m=(n(15),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monsters",src:"https://robohash.org/".concat(e.Monster.id,"/?set=set2&size=180x180")}),a.a.createElement("h2",null,e.Monster.name),a.a.createElement("p",null,e.Monster.email))}),d=(n(16),function(e){return a.a.createElement("div",{className:"Card"},e.filterdMonsters.map((function(e){return a.a.createElement(m,{key:e.id,Monster:e})})))}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearch=function(t){return e.setState({SearchField:t.target.value})},e.state={Monsters:[],SearchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({Monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.Monsters,n=e.SearchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement("div",null,a.a.createElement("h1",null,"Monster Rolodex"),a.a.createElement(h,{onSearch:this.onSearch,placeholder:"monsters"}),a.a.createElement(d,{filterdMonsters:r}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c7b62dc6.chunk.js.map