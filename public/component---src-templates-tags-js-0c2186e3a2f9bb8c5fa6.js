(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return i});var n=a(0),r=a.n(n),l=a(162),u=a(164),c=a(170);t.default=function(e){var t=e.pageContext,a=e.data,n=t.tag,i=a.allMarkdownRemark,s=i.edges,o=i.totalCount,d=o+" post"+(1===o?"":"s")+' tagged with "'+n+'"';return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,d),r.a.createElement(c.a,{edges:s}),r.a.createElement(l.a,{to:"/tags"},"All tags")))};var i="2233356276"},161:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},162:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),l=a(5),u=a.n(l),c=a(40),i=a.n(c);a.d(t,"a",function(){return i.a});a(161);var s=r.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,u=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,u&&l(u),!u&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(o,{data:t,query:a,render:n||l,staticQueryData:e})})};d.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},163:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),l=a(5),u=a.n(l),c=a(64),i=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=i},164:function(e,t,a){"use strict";var n=a(165),r=a(0),l=a.n(r),u=a(5),c=a.n(u),i=a(162),s=(a(169),function(e){var t=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,t)},data:n})});s.propTypes={children:c.a.node.isRequired},t.a=s},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Nabil's Blog"}}}}},170:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(0),r=a.n(n),l=a(162),u=function(e){var t=e.edges;return r.a.createElement("ul",{className:"c-postList"},t.map(function(e){var t=e.node.frontmatter,a="ar"===t.lang?"rightToLeft":null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:a},r.a.createElement(l.a,{to:t.path},t.title),r.a.createElement("p",{className:a},t.description),"ar"===t.lang?r.a.createElement("h5",null,"نشر في ",t.date,","," ",Math.ceil(parseInt(t.length)/150)," دقائق من القرائة"):r.a.createElement("h5",null,"Posted ",t.date,","," ",Math.ceil(parseInt(t.length)/150)," min read"),t.tags?r.a.createElement("ul",{className:"o-tagsContainer"},t.tags.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(l.a,{to:"tags/"+e},e))})):null))}))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-0c2186e3a2f9bb8c5fa6.js.map