(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b}),a.d(t,"pageQuery",function(){return v});a(176),a(178),a(43),a(66),a(96);var r=a(42),n=a.n(r),i=a(8),s=a.n(i),o=a(44),l=a.n(o),c=a(0),d=a.n(c),u=a(166),f=a(180),m=a.n(f),h=a(162),g=a(164),p=a(181),y=a.n(p),b=(a(182),function(e){function t(t){var a;return a=e.call(this,t)||this,l()(n()(a),"frontmatterToEnglish",function(e){e.author="by "+e.author,e.length=Math.ceil(parseInt(e.length)/350)+" min read",a.setState({frontmatter:e})}),l()(n()(a),"frontmatterToArabic",function(e){e.date=a.convertEnglishDate(e.date),e.author="كتبه: "+e.author+" في",e.length=Math.ceil(parseInt(e.length)/350)+" دقائق من القراءة",a.setState({frontmatter:e})}),l()(n()(a),"convertEnglishDate",function(e){var t="يناير فبراير مارس ابريل مايو يونيو يوليو اغسطس سبتمبر اكتوبر نوفمبر ديسمبر".split(" "),a=e.split(" "),r=t[["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(a[0])],n=a.slice(1).toString().replace(/[0-9]/g,function(e){return"۰١٢٣٤٥٦٧٨٩"[+e]}).replace(",","").split(",");return n[0]+" "+r+", "+n[1]}),l()(n()(a),"switchNightMode",function(e){var t=e.currentTarget.dataset.theme;a.state.activeTheme==t?(a.setState({activeTheme:null}),e.currentTarget.classList.remove("button-active"),"nightmode--pitchblack"===t?a.setState({isBlackTheme:null}):a.setState({isDarkTheme:null})):(a.setState({activeTheme:t}),"nightmode--pitchblack"===t?a.setState({activeTheme:t,isBlackTheme:"button-active",isDarkTheme:null}):"nightmode--dark"===t&&a.setState({activeTheme:t,isBlackTheme:null,isDarkTheme:"button-active"}))}),l()(n()(a),"manageFontSize",function(e){e.stopPropagation();var t=document.querySelector("html"),a=t.dataset.fontsize;"increase"===e.currentTarget.dataset.fontfunction?(++a,console.log(a),t.dataset.fontsize=a,t.style.fontSize=a+"px"):"decrease"===e.currentTarget.dataset.fontfunction?(--a,t.dataset.fontsize=a,t.style.fontSize=a+"px"):"reset"===e.currentTarget.dataset.fontfunction&&(t.style.fontSize=t.dataset.originalfontsize+"px",t.dataset.fontsize=t.dataset.originalfontsize)}),l()(n()(a),"handleArticleClick",function(e){window.innerWidth<992&&(null!=a.state.activeTheme?a.setState({activeTheme:null}):a.setState({activeTheme:"nightmode--pitchblack"}))}),a.state={activeTheme:"",fontSize:null,originalFontSize:null},a}s()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.setState({markdownRemark:this.props.data.markdownRemark,html:this.props.data.markdownRemark.html,languageClass:"ar"===this.props.data.markdownRemark.frontmatter.lang?"rightToLeft":null,frontmatter:this.props.data.markdownRemark.frontmatter})},a.componentDidMount=function(){var e=document.querySelector("html"),t=parseInt(window.getComputedStyle(e,null).getPropertyValue("font-size"));e.dataset.fontsize=t,e.dataset.originalfontsize=t,"rightToLeft"===this.state.languageClass?this.frontmatterToArabic(this.state.frontmatter):this.frontmatterToEnglish(this.state.frontmatter)},a.render=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,null,d.a.createElement(g.a,{title:this.state.frontmatter.title,description:this.state.frontmatter.description,lang:"en-gb"}),d.a.createElement(u.Helmet,null,d.a.createElement("title",null,this.state.frontmatter.title),d.a.createElement("meta",{property:"og:title",content:this.state.frontmatter.title}),d.a.createElement("meta",{property:"og:description",content:this.state.frontmatter.description}),d.a.createElement("meta",{property:"og:url",content:"http://iamnabil.me/blog"+this.state.frontmatter.path}),d.a.createElement("meta",{property:"og:image:url",content:"http://iamnabil.me/blog/"+this.state.frontmatter.ogImageName+"."+this.state.frontmatter.ogImageExtension}),d.a.createElement("meta",{property:"og:site_name",content:"Nabil Tharwat - Blog"})),d.a.createElement("div",{className:this.state.activeTheme},d.a.createElement("article",{onClick:this.handleArticleClick},d.a.createElement("div",{className:"styleControl "+y.a.styleControl,"data-content":"styleControl"},d.a.createElement("div",null,d.a.createElement("button",{onClick:this.manageFontSize,"data-fontfunction":"decrease"},d.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 42 42",style:{enableBackground:"new 0 0 42 42"}},d.a.createElement("path",{d:"M37.059,16H26H16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16h10h11.059C39.776,26,42,23.718,42,21\r S39.776,16,37.059,16z"}))),d.a.createElement("button",{onClick:this.manageFontSize,"data-fontfunction":"reset"},d.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"475.082px",height:"475.082px",viewBox:"0 0 475.082 475.082",style:{enableBackground:"new 0 0 475.082 475.082"}},d.a.createElement("g",null,d.a.createElement("path",{d:"M473.371,433.11c-10.657-3.997-20.458-6.563-29.407-7.706c-8.945-0.767-15.516-2.95-19.701-6.567\r c-2.475-1.529-5.808-6.95-9.996-16.279c-7.806-15.604-13.989-29.786-18.555-42.537c-7.427-20.181-13.617-35.789-18.565-46.829\r c-10.845-25.311-19.982-47.678-27.401-67.092c-4.001-10.466-15.797-38.731-35.405-84.796L255.813,24.265l-3.142-5.996h-15.129\r h-21.414l-79.94,206.704L68.523,400.847c-5.33,9.896-9.9,16.372-13.706,19.417c-3.996,2.848-14.466,5.805-31.405,8.843\r c-11.042,2.102-18.654,3.812-22.841,5.141L0,456.812h5.996c16.37,0,32.264-1.334,47.679-3.997l13.706-2.279\r c53.868,3.806,87.082,5.708,99.642,5.708c0.381-1.902,0.571-4.476,0.571-7.706c0-5.715-0.094-11.231-0.287-16.563\r c-3.996-0.568-7.851-1.143-11.561-1.711c-3.711-0.575-6.567-1.047-8.565-1.431c-1.997-0.373-3.284-0.568-3.855-0.568\r c-14.657-2.094-24.46-5.14-29.407-9.134c-3.236-2.282-4.854-6.375-4.854-12.278c0-3.806,2.19-11.796,6.567-23.982\r c14.277-39.776,24.172-65.856,29.692-78.224l128.483,0.568l26.269,65.096l13.411,32.541c1.144,3.241,1.711,6.283,1.711,9.138\r s-1.14,5.428-3.426,7.707c-2.285,1.905-8.753,4.093-19.417,6.563l-37.404,7.994c-0.763,6.283-1.136,13.702-1.136,22.271\r l16.56-0.575l57.103-3.138c10.656-0.38,23.51-0.575,38.547-0.575c18.264,0,36.251,0.763,53.957,2.282\r c21.313,1.523,39.588,2.283,54.819,2.283c0.192-2.283,0.281-4.754,0.281-7.423C475.082,445.957,474.513,440.537,473.371,433.11z\r M251.245,270.941c-2.666,0-7.662-0.052-14.989-0.144c-7.327-0.089-18.649-0.233-33.973-0.425\r c-15.321-0.195-29.93-0.383-43.824-0.574l48.535-128.477c7.424,15.037,16.178,35.117,26.264,60.242\r c11.425,27.79,20.179,50.727,26.273,68.809L251.245,270.941z"})))),d.a.createElement("button",{onClick:this.manageFontSize,"data-fontfunction":"increase"},d.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 42 42",style:{enableBackground:"new 0 0 42 42"}},d.a.createElement("path",{d:"M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16v11.059\r C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"})))),d.a.createElement("hr",null),d.a.createElement("div",null,d.a.createElement("button",{className:"night-mode-check night-mode-check--black "+this.state.isBlackTheme,"data-theme":"nightmode--pitchblack",onClick:this.switchNightMode}),d.a.createElement("button",{className:"night-mode-check night-mode-check--dark "+this.state.isDarkTheme,"data-theme":"nightmode--dark",onClick:this.switchNightMode}))),d.a.createElement(m.a,{fluid:this.state.frontmatter.image.childImageSharp.fluid}),d.a.createElement("h1",{className:y.a.articleTitle+" "+y.a[this.state.languageClass],style:{textAlign:"center"}},this.state.frontmatter.title),d.a.createElement("h5",{className:y.a.articleDescription+" "+y.a[this.state.languageClass]},"rightToLeft"===this.state.languageClass?this.state.frontmatter.author+" "+this.state.frontmatter.date:this.state.frontmatter.date+" "+this.state.frontmatter.author,d.a.createElement("br",null),d.a.createElement("p",{className:""+y.a.articleTime},this.state.frontmatter.length)),d.a.createElement("hr",{className:y.a.frontmatterBreak}),d.a.createElement("section",{className:"blog-post-content "+y.a[this.state.languageClass],dangerouslySetInnerHTML:{__html:this.state.html}})))))},t}(d.a.Component)),v="218202256"},159:function(e,t,a){var r;e.exports=(r=a(161))&&r.default||r},160:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),i=a(5),s=a.n(i),o=a(40),l=a.n(o);a.d(t,"a",function(){return l.a});a(159);var c=n.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,s=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,s&&i(s),!s&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(c.Consumer,null,function(e){return n.a.createElement(d,{data:t,query:a,render:r||i,staticQueryData:e})})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},161:function(e,t,a){"use strict";a.r(t);a(41);var r=a(0),n=a.n(r),i=a(5),s=a.n(i),o=a(64),l=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},162:function(e,t,a){"use strict";var r=a(163),n=a(0),i=a.n(n),s=a(5),o=a.n(s),l=a(160),c=(a(167),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,t)},data:r})});c.propTypes={children:o.a.node.isRequired},t.a=c},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Nabil's Blog"}}}}},164:function(e,t,a){"use strict";var r=a(165),n=a(0),i=a.n(n),s=a(5),o=a.n(s),l=a(166),c=a.n(l);function d(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(n)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=d},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Nabil's Blog",description:"Kick off your next, great project with a curated list of helpful blog posts.",author:"@Nabil_Tharwat16"}}}}},176:function(e,t,a){"use strict";a(177)("fontsize",function(e){return function(t){return e(this,"font","size",t)}})},177:function(e,t,a){var r=a(9),n=a(12),i=a(25),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},178:function(e,t,a){"use strict";a(179);var r=a(6),n=a(95),i=a(10),s=/./.toString,o=function(e){a(14)(RegExp.prototype,"toString",e,!0)};a(12)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?o(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?n.call(e):void 0)}):"toString"!=s.name&&o(function(){return s.call(this)})},179:function(e,t,a){a(10)&&"g"!=/./g.flags&&a(13).f(RegExp.prototype,"flags",{configurable:!0,get:a(95)})},180:function(e,t,a){"use strict";var r=a(11);t.__esModule=!0,t.default=void 0;var n,i=r(a(8)),s=r(a(42)),o=r(a(98)),l=r(a(99)),c=r(a(0)),d=r(a(5)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),h=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,y=p&&window.IntersectionObserver,b=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function S(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var T=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)}).join("")+"<img "+c+s+o+a+r+t+i+n+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(C,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},C=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},f,{onLoad:s,onError:d,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&h(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&y&&!t.critical&&!a.seenBefore;var r=t.critical||p&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=T(e,function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,h=e.fluid,g=e.fixed,p=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,k=e.loading,T=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:T?1:0,transition:x?"opacity "+y+"ms":"none"},o),I="boolean"==typeof p?"lightgray":p,N={transitionDelay:y+"ms"},O=(0,l.default)({opacity:this.state.imgLoaded?0:1},x&&N,o,f),M={title:t,alt:this.state.isVisible?"":a,style:O,className:m};if(h){var V=h,q=V[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),I&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&N)}),q.base64&&c.default.createElement(L,{src:q.base64,spreadProps:M,imageVariants:V,generateSources:w}),q.tracedSVG&&c.default.createElement(L,{src:q.tracedSVG,spreadProps:M,imageVariants:V,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(V),c.default.createElement(C,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:k},q,{imageVariants:V}))}}))}if(g){var B=g,j=B[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete F.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},I&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:I,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},x&&N)}),j.base64&&c.default.createElement(L,{src:j.base64,spreadProps:M,imageVariants:B,generateSources:w}),j.tracedSVG&&c.default.createElement(L,{src:j.tracedSVG,spreadProps:M,imageVariants:B,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(B),c.default.createElement(C,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:k},j,{imageVariants:B}))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),I=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});x.propTypes={resolutions:R,sizes:I,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([I,d.default.arrayOf(I)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var N=x;t.default=N}}]);
//# sourceMappingURL=component---src-templates-post-js-f949b64d511efb5df771.js.map