(this["webpackJsonpreact-router-swapi"]=this["webpackJsonpreact-router-swapi"]||[]).push([[0],{47:function(e,t,a){e.exports=a(90)},53:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);a(31),a(32);var n=a(0),i=a.n(n),s=a(21),l=a.n(s),o=(a(53),a(6)),c=a(7),r=a(9),u=a(8),m=a(10),p=a(15),h=a(18),d=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container2"},i.a.createElement("div",{className:"container1"},i.a.createElement("h1",null,"Welcome to SWAPI-React!"),i.a.createElement("div",{className:"about"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam, ante eget viverra laoreet, dolor mi elementum nibh, at malesuada massa lorem in nisi. Morbi mattis tellus at quam ultrices, efficitur consequat arcu egestas. In et nulla ac turpis facilisis commodo eu convallis lacus. Sed nec odio pulvinar mi pharetra ultrices id sed diam. Vestibulum euismod dui venenatis ante accumsan rhoncus. Nullam et leo et sem mattis mattis. Proin sollicitudin odio eu justo sollicitudin, eget mollis tellus eleifend. Praesent efficitur vulputate lectus, eget commodo ligula porta at. In libero augue, elementum non felis quis, auctor faucibus odio. In porttitor congue mauris, ut consequat turpis tristique non. Etiam sodales hendrerit libero non porttitor. Mauris venenatis semper ipsum ac egestas. Nunc laoreet egestas magna ac luctus. Donec fermentum rutrum massa. Ut porttitor malesuada odio in ultricies. Nam hendrerit venenatis lorem vel ultrices."),i.a.createElement("p",null,"Aliquam nisl nibh, consequat vitae mauris vitae, egestas semper urna. Mauris mauris orci, scelerisque a luctus at, hendrerit ut enim. Ut finibus, est eget venenatis aliquam, eros turpis gravida mauris, et venenatis augue odio ut dolor. Praesent id congue neque, vitae lacinia sapien. Mauris at elit erat. Nullam commodo lorem vel risus ullamcorper vestibulum. Aenean vel tempus ante. Cras ornare lobortis finibus. Donec hendrerit scelerisque felis, quis euismod turpis congue in. Maecenas vitae leo at urna egestas lobortis at sit amet mauris. Vivamus sodales, lectus a ullamcorper feugiat, urna dolor vulputate sapien, eu varius risus mauris eu massa. Nam in eros eu erat laoreet facilisis. Maecenas fermentum lacus enim. Nulla faucibus quis nulla congue condimentum."),i.a.createElement("p",null,"Aenean libero sapien, auctor eu nibh ac, mattis porta augue. Nulla in lobortis est. Donec mollis vehicula quam, vitae dignissim metus ultricies ac. Sed dictum tortor sit amet vestibulum posuere. Aliquam lobortis egestas risus vel tristique. Praesent sed tellus id risus venenatis imperdiet. Praesent sit amet leo eros. Suspendisse potenti. Sed ultrices purus eget euismod fermentum. Proin imperdiet ullamcorper nulla congue convallis. Phasellus vel mauris blandit, eleifend libero sit amet, sollicitudin neque. Nunc laoreet gravida tellus nec blandit. Donec vitae nunc vel sapien elementum tincidunt. In sapien est, hendrerit sit amet volutpat sed, accumsan vitae ante. Pellentesque suscipit tempor auctor. Nullam iaculis tristique orci, vel mattis lectus varius vel."))))}}]),t}(i.a.Component),v=a(22),f=a.n(v),b=a(12),E=a.n(b),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).fetchSWAPI=function(){fetch("https://swapi.co/api/films").then((function(e){return e.json()})).then((function(t){var a=t.results.map((function(e){return i.a.createElement("div",{key:E()(),className:"allFilms"},i.a.createElement("h2",null,e.title),i.a.createElement("p",null,e.opening_crawl))}));e.setState({pictures:a}),console.log(a,"movies")})).catch((function(e){console.log(e.number+": "+e.message)})).finally((function(){console.log("finished")}))},e._isMounted=!1,e.state={pictures:[],loading:!0},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchSWAPI()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return i.a.createElement("div",{className:"container1 "},i.a.createElement(f.a,{type:"ThreeDots",color:"",height:100,width:460,offset:100,timeout:4e3,className:"loaderCon col-centered spinz"}),i.a.createElement("div",{className:"container2"},this.state.pictures))}}]),t}(i.a.Component),y=a(39),k=a(41),j=a(42),N=1,O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this))).fetchSWAPI=function(){fetch("https://swapi.co/api/people/?page="+N).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.next;console.log("next is : ",t),a.setState({pagination:t});var n=e.results.map((function(e){return i.a.createElement(y.a,{key:E()()},i.a.createElement(k.a,null,i.a.createElement(j.a,{md:{span:10,offset:1},key:E()(),className:"allFilms align-self-center"},i.a.createElement("h2",null,e.name),i.a.createElement("p",null,"Height: ",e.height),i.a.createElement("p",null,"Hair Colour: ",e.hair_color),i.a.createElement("p",null,"Eye colour: ",e.eye_color),i.a.createElement("p",null,"Gender: ",e.gender))))}));a.setState({peoples:n})})).catch((function(e){console.log(e.number+": "+e.message)})).finally((function(){console.log("finished")}))},a._isMounted=!1,a.state={peoples:[],page:0,pagination:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handlePageNext",value:function(e){null===this.page&&(this.page=1),this.page=1,N++,console.log("pageNum from handle func is: "+N)}},{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchSWAPI()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return i.a.createElement("div",{className:"container1 "},i.a.createElement(f.a,{type:"ThreeDots",color:"",height:100,width:460,offset:100,timeout:4e3,className:"loaderCon col-centered spinz"}),i.a.createElement("div",{className:"container2"},this.state.peoples))}}]),t}(i.a.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this))).state={planets:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/planets/").then((function(e){return e.json()})).then((function(t){var a=t.results.map((function(e){return i.a.createElement("div",{key:e.results,className:"allFilms"},i.a.createElement("h2",null,e.name),i.a.createElement("p",null,"Rotation Period: ",e.rotation_period),i.a.createElement("p",null,"Orbital Period: ",e.orbital_period),i.a.createElement("p",null,"Diameter: ",e.diameter),i.a.createElement("p",null,"Climate: ",e.climate),i.a.createElement("p",null,"Gravity: ",e.gravity),i.a.createElement("p",null,"Terrain: ",e.terrain))}));e.setState({planets:a}),console.log("state",e.state)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"container2"},i.a.createElement("div",{className:"container1"},this.state.planets))}},{key:"shouldComponentUpdate",value:function(){return!0}}]),t}(i.a.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this))).state={species:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/species/").then((function(e){return e.json()})).then((function(t){var a=t.results.map((function(e){return i.a.createElement("div",{key:e.results,className:"allFilms"},i.a.createElement("h2",null,e.name),i.a.createElement("p",null,"Classification: ",e.classification))}));e.setState({species:a}),console.log("state",e.state)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"container2"},i.a.createElement("div",{className:"container1"},this.state.species))}},{key:"shouldComponentUpdate",value:function(){return!0}}]),t}(i.a.Component),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this))).state={starships:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/starships/").then((function(e){return e.json()})).then((function(t){var a=t.results.map((function(e){return i.a.createElement("div",{key:e.results,className:"allFilms"},i.a.createElement("h2",null,e.name),i.a.createElement("p",null,"Model: ",e.model))}));e.setState({starships:a}),console.log("state",e.state)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"container2"},i.a.createElement("div",{className:"container1"},this.state.starships))}},{key:"shouldComponentUpdate",value:function(){return!0}}]),t}(i.a.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this))).state={vehicles:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/vehicles/").then((function(e){return e.json()})).then((function(t){var a=t.results.map((function(e){return i.a.createElement("div",{key:e.results,className:"allFilms"},i.a.createElement("h2",null,e.name),i.a.createElement("p",null,"Model: ",e.model))}));e.setState({vehicles:a}),console.log("state",e.state)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"container2"},i.a.createElement("div",{className:"container1"},this.state.vehicles))}},{key:"shouldComponentUpdate",value:function(){return!0}}]),t}(i.a.Component),w=a(94),P=a(93),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={isClacked:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(w.a,{bg:"light",expand:"lg",className:"navStyle"},i.a.createElement(w.a,{href:"/",className:"nameStyle"},"SWAPI / React"),i.a.createElement(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(w.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(P.a,{className:"mr-auto"},i.a.createElement(p.b,{to:"/",className:"nav-link"},"Home"),i.a.createElement(p.b,{to:"/films",className:"nav-link"},"Films"),i.a.createElement(p.b,{to:"/people",className:"nav-link"},"People"),i.a.createElement(p.b,{to:"/planets",className:"nav-link"},"Planets"),i.a.createElement(p.b,{to:"/species",className:"nav-link"},"Species"),i.a.createElement(p.b,{to:"/starships",className:"nav-link"},"Starships"),i.a.createElement(p.b,{to:"/vehicles",className:"nav-link"},"Vehicles")))),i.a.createElement("div",{className:"container fill"},i.a.createElement(h.a,{path:"/",component:d,exact:!0,key:E()()}),i.a.createElement(h.a,{path:"/films",component:g,key:E()()}),i.a.createElement(h.a,{path:"/people",component:O,key:E()()}),i.a.createElement(h.a,{path:"/planets",component:M,key:E()()}),i.a.createElement(h.a,{path:"/species",component:S,key:E()()}),i.a.createElement(h.a,{path:"/starships",component:q,key:E()()}),i.a.createElement(h.a,{path:"/vehicles",component:C,key:E()()})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.bd261518.chunk.js.map