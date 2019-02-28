(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t){e.exports={"v0.10":{start:"2013-03-11",end:"2016-10-31"},"v0.12":{start:"2015-02-06",end:"2016-12-31"},v4:{start:"2015-09-08",lts:"2015-10-12",maintenance:"2017-04-01",end:"2018-04-30",codename:"Argon"},v5:{start:"2015-10-29",maintenance:"2016-04-30",end:"2016-06-30"},v6:{start:"2016-04-26",lts:"2016-10-18",maintenance:"2018-04-30",end:"2019-04-01",codename:"Boron"},v7:{start:"2016-10-25",maintenance:"2017-04-30",end:"2017-06-30"},v8:{start:"2017-05-30",lts:"2017-10-31",maintenance:"2019-01-01",end:"2019-12-31",codename:"Carbon"},v9:{start:"2017-10-01",maintenance:"2018-04-01",end:"2018-06-30"},v10:{start:"2018-04-24",lts:"2018-10-30",maintenance:"2020-04-01",end:"2021-04-01",codename:"Dubnium"},v11:{start:"2018-10-23",maintenance:"2019-04-01",end:"2019-06-30"},v12:{start:"2019-04-23",lts:"2019-10-22",maintenance:"2021-04-01",end:"2022-04-01",codename:""}}},27:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);a(28),a(29);var n=a(0),r=a.n(n),s=a(21),l=a.n(s),i=a(4),c=a(5),u=a(7),m=a(6),o=a(8),d=a(61),h=a(25),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props&&"-"===this.props.value?r.a.createElement("div",null):r.a.createElement("span",{className:"tag is-primary is-medium"},this.props.value)}}]),t}(n.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props&&this.props.data||[];return r.a.createElement("div",{className:"box"},r.a.createElement("table",{className:"table is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("abbr",{title:"V"},"Version")),r.a.createElement("th",null,r.a.createElement("abbr",{title:"LTS"},"LTS Start Date")),r.a.createElement("th",null,r.a.createElement("abbr",{title:"Maint Start Date"},"Maintenance Start Date")),r.a.createElement("th",null,r.a.createElement("abbr",{title:"Maint End Date"},"Maintenance End Date")))),r.a.createElement("tbody",null,e.map(function(e,t){return r.a.createElement("tr",{key:e.version,className:"has-text-centered"},r.a.createElement("td",null,r.a.createElement("div",{className:"is-size-3"},"Node.JS ",e.version)),r.a.createElement("td",null,r.a.createElement(v,{value:e.ltsStart})),r.a.createElement("td",null,r.a.createElement(v,{value:e.maintenanceStart})),r.a.createElement("td",null,r.a.createElement(v,{value:e.endOfLife})))}))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).title="Current",a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data?this.props.data.current:[];return r.a.createElement("div",null,r.a.createElement("div",{className:"is-size-2"},this.title),r.a.createElement(p,{data:e}))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).title="Past",a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data?this.props.data.past:[];return r.a.createElement("div",null,r.a.createElement("div",{className:"is-size-2"},this.title),r.a.createElement(p,{data:e}))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).title="Future",a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data?this.props.data.future:[];return r.a.createElement("div",null,r.a.createElement("div",{className:"is-size-2"},this.title),r.a.createElement(p,{data:e}))}}]),t}(n.Component),j=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content has-text-centered is-small"},r.a.createElement("p",null,"Made with ",r.a.createElement("span",null,"\u2764\ufe0f"),"and \u2615\ufe0f| \xa9 Rajat Kumar 2019")))},O=a(62),N=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(O.a,{to:"/",className:"navbar-item"},r.a.createElement("h2",{className:"is-size-3 has-text-weight-bold is-family-sans-serif"},"NodeLTS")),r.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenuHeroA"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarMenuHeroA",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(O.a,{to:"/current",activeClassName:"is-active",className:"navbar-item"},"Current"),r.a.createElement(O.a,{to:"/future",activeClassName:"is-active",className:"navbar-item"},"Future"),r.a.createElement(O.a,{to:"/past",activeClassName:"is-active",className:"navbar-item"},"Past"),r.a.createElement(O.a,{to:"/raw",activeClassName:"is-active",className:"navbar-item"},"Raw Data"),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{href:"https://www.github.com/rajatkumar",className:"button is-primary is-inverted"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-github"})),r.a.createElement("span",null,"Github")))))))},y=function(e){var t=e.children;return r.a.createElement("section",{className:"hero is-primary is-fullheight"},r.a.createElement("div",{className:"hero-head"},r.a.createElement(N,null)),r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},t)),r.a.createElement("div",{className:"hero-foot"},r.a.createElement("div",{className:"container"},r.a.createElement(j,null))))},g=a(23),w=a.n(g),D=a(24),L=a.n(D),k=function(){function e(t){Object(i.a)(this,e),this.data=null,this.lastUpdated=null,this.releaseList=[],t&&(this.data=t,this.lastUpdated=new Date)}return Object(c.a)(e,[{key:"getData",value:function(e){var t=this,a=new Date,n=a.setDate(a.getDate()-7);if(this.data&&this.lastUpdated>n)e(null,this.data);else{var r=localStorage.getItem("LTSData");if(r){var s=JSON.parse(r);this.data=s.data,this.lastUpdated=s.date,this.transform(),e(null,this.data)}else this.fetchDataRemote(function(a,n){a?(t.data=L.a,t.lastUpdated=new Date):(t.data=n,t.lastUpdated=new Date),t.transform(),e(null,t.data)})}}},{key:"transform",value:function(){if(this.data){this.releaseList=[];var e=this.data;for(var t in this.data){var a=new Date("".concat(e[t].start,"T00:00:00")),n=new Date("".concat(e[t].end,"T00:00:00")),r=new Date,s={version:t,initialRelease:e[t].start||"-",ltsStart:e[t].lts||"-",ltsEnd:e[t].maintenance||"-",maintenanceStart:e[t].maintenance||"-",maintenanceEnd:e[t].end||"-",endOfLife:e[t].end||"-",future:!(r-a>0),past:!(r-n<0)};this.releaseList.push(s)}this.releaseList.sort(function(e,t){return e.initialRelease<t.initialRelease?1:-1})}}},{key:"getFullList",value:function(){return this.releaseList}},{key:"getPastList",value:function(){return this.releaseList.filter(function(e){return e.past})}},{key:"getCurrentList",value:function(){return this.releaseList.filter(function(e){return!e.future&&!e.past})}},{key:"getFutureList",value:function(){return this.releaseList.filter(function(e){return e.future})}},{key:"fetchDataRemote",value:function(e){w.a.get("https://raw.githubusercontent.com/nodejs/Release/master/schedule.json").then(function(t){var a=t.data;return localStorage.setItem("LTSData",JSON.stringify({data:a,date:new Date})),e(null,a)}).catch(function(t){return e(t)})}}]),e}(),S=a(14),C=a.n(S);a(59);var x=function(e,t){return function(a){function n(e){var t;return Object(i.a)(this,n),(t=Object(u.a)(this,Object(m.a)(n).call(this,e))).state={data:null},t}return Object(o.a)(n,a),Object(c.a)(n,[{key:"componentWillMount",value:function(){C.a.start()}},{key:"componentDidMount",value:function(){var e=this;t.getData(function(a,n){e.setState({data:{future:t.getFutureList(),past:t.getPastList(),current:t.getCurrentList()}}),C.a.done()})}},{key:"render",value:function(){return r.a.createElement(e,{dataApapter:t,data:this.state.data})}}]),n}(n.Component)},A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).dataAdapter=new k,a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(y,null,r.a.createElement(h.a,{exact:!0,path:"/",component:x(f,this.dataAdapter)}),r.a.createElement(h.a,{exact:!0,path:"/current",component:x(f,this.dataAdapter)}),r.a.createElement(h.a,{exact:!0,path:"/future",component:x(b,this.dataAdapter)}),r.a.createElement(h.a,{exact:!0,path:"/past",component:x(E,this.dataAdapter)}))))}}]),t}(n.Component);l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2b9f96a5.chunk.js.map