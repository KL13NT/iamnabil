(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h})),a.d(t,"pageQuery",(function(){return g}));a(217),a(56),a(8),a(15),a(37);var r=a(0),n=a.n(r),i=a(102),s=a(218),o=a.n(s),l=a(204),c=a(205),d=a(220),u=a.n(d);a(221);function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e){var t,a;function r(t){var a;return m(f(a=e.call(this,t)||this),"frontmatterToEnglish",(function(e){e.author="by "+e.author,e.length=Math.ceil(parseInt(e.length)/150)+" min read",a.setState({frontmatter:e})})),m(f(a),"frontmatterToArabic",(function(e){e.date=a.convertEnglishDate(e.date),e.author="كتبه: "+e.author+" في",e.length=Math.ceil(parseInt(e.length)/150)+" دقائق من القراءة",a.setState({frontmatter:e})})),m(f(a),"convertEnglishDate",(function(e){var t="يناير فبراير مارس ابريل مايو يونيو يوليو اغسطس سبتمبر اكتوبر نوفمبر ديسمبر".split(" "),a=e.split(" "),r=t[["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(a[0])],n=a.slice(1).toString().replace(/[0-9]/g,(function(e){return"۰١٢٣٤٥٦٧٨٩"[+e]})).replace(",","").split(",");return n[0]+" "+r+", "+n[1]})),m(f(a),"switchNightMode",(function(e){var t=e.currentTarget.dataset.theme;a.state.activeTheme==t?(a.setState({activeTheme:null}),e.currentTarget.classList.remove("button-active"),document.querySelector("body").style.background="#f3f7f9","nightmode--pitchblack"===t?a.setState({isBlackTheme:null}):a.setState({isDarkTheme:null})):(a.setState({activeTheme:t}),"nightmode--pitchblack"===t?(document.querySelector("body").style.background="black",a.setState({activeTheme:t,isBlackTheme:"button-active",isDarkTheme:null})):"nightmode--dark"===t&&(document.querySelector("body").style.background="rgb(20, 20, 20)",a.setState({activeTheme:t,isBlackTheme:null,isDarkTheme:"button-active"})))})),m(f(a),"manageFontSize",(function(e){e.stopPropagation();var t=document.querySelector("html"),a=t.dataset.fontsize;"increase"===e.currentTarget.dataset.fontfunction?(++a,console.log(a),t.dataset.fontsize=a,t.style.fontSize=a+"px"):"decrease"===e.currentTarget.dataset.fontfunction?(--a,t.dataset.fontsize=a,t.style.fontSize=a+"px"):"reset"===e.currentTarget.dataset.fontfunction&&(t.style.fontSize=t.dataset.originalfontsize+"px",t.dataset.fontsize=t.dataset.originalfontsize)})),m(f(a),"handleArticleClick",(function(e){window.innerWidth<992&&(null!=a.state.activeTheme?a.setState({activeTheme:null}):a.setState({activeTheme:"nightmode--pitchblack"}))})),a.state={activeTheme:"",fontSize:null,originalFontSize:null},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=r.prototype;return s.componentWillMount=function(){this.setState({markdownRemark:this.props.data.markdownRemark,html:this.props.data.markdownRemark.html,languageClass:"ar"===this.props.data.markdownRemark.frontmatter.lang?"rightToLeft":null,frontmatter:this.props.data.markdownRemark.frontmatter})},s.componentDidMount=function(){var e=document.querySelector("html"),t=parseInt(window.getComputedStyle(e,null).getPropertyValue("font-size"));e.dataset.fontsize=t,e.dataset.originalfontsize=t,"rightToLeft"===this.state.languageClass?this.frontmatterToArabic(this.state.frontmatter):this.frontmatterToEnglish(this.state.frontmatter)},s.render=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement(c.a,{title:this.state.frontmatter.title,description:this.state.frontmatter.description,lang:"en-gb"}),n.a.createElement(i.Helmet,null,n.a.createElement("title",null,this.state.frontmatter.title),n.a.createElement("meta",{property:"og:title",content:this.state.frontmatter.title}),n.a.createElement("meta",{property:"og:description",content:this.state.frontmatter.description}),n.a.createElement("meta",{property:"og:url",content:"https://kl13nt.github.io/blog"+this.state.frontmatter.path}),n.a.createElement("meta",{property:"og:image:url",content:"https://kl13nt.github.io/blog/"+this.state.frontmatter.ogImageName+"."+this.state.frontmatter.ogImageExtension}),n.a.createElement("meta",{property:"og:image",content:"https://kl13nt.github.io/blog/"+this.state.frontmatter.ogImageName+"."+this.state.frontmatter.ogImageExtension}),n.a.createElement("meta",{property:"og:site_name",content:"Nabil Tharwat - Blog"})),n.a.createElement("div",{className:this.state.activeTheme},n.a.createElement("article",{onClick:this.handleArticleClick},n.a.createElement("div",{className:"styleControl "+u.a.styleControl,"data-content":"styleControl"},n.a.createElement("div",null,n.a.createElement("button",{onClick:this.manageFontSize,"data-fontfunction":"decrease"},n.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 42 42",style:{enableBackground:"new 0 0 42 42"}},n.a.createElement("path",{d:"M37.059,16H26H16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16h10h11.059C39.776,26,42,23.718,42,21\r S39.776,16,37.059,16z"}))),n.a.createElement("button",{onClick:this.manageFontSize,"data-fontfunction":"reset"},n.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"475.082px",height:"475.082px",viewBox:"0 0 475.082 475.082",style:{enableBackground:"new 0 0 475.082 475.082"}},n.a.createElement("g",null,n.a.createElement("path",{d:"M473.371,433.11c-10.657-3.997-20.458-6.563-29.407-7.706c-8.945-0.767-15.516-2.95-19.701-6.567\r c-2.475-1.529-5.808-6.95-9.996-16.279c-7.806-15.604-13.989-29.786-18.555-42.537c-7.427-20.181-13.617-35.789-18.565-46.829\r c-10.845-25.311-19.982-47.678-27.401-67.092c-4.001-10.466-15.797-38.731-35.405-84.796L255.813,24.265l-3.142-5.996h-15.129\r h-21.414l-79.94,206.704L68.523,400.847c-5.33,9.896-9.9,16.372-13.706,19.417c-3.996,2.848-14.466,5.805-31.405,8.843\r c-11.042,2.102-18.654,3.812-22.841,5.141L0,456.812h5.996c16.37,0,32.264-1.334,47.679-3.997l13.706-2.279\r c53.868,3.806,87.082,5.708,99.642,5.708c0.381-1.902,0.571-4.476,0.571-7.706c0-5.715-0.094-11.231-0.287-16.563\r c-3.996-0.568-7.851-1.143-11.561-1.711c-3.711-0.575-6.567-1.047-8.565-1.431c-1.997-0.373-3.284-0.568-3.855-0.568\r c-14.657-2.094-24.46-5.14-29.407-9.134c-3.236-2.282-4.854-6.375-4.854-12.278c0-3.806,2.19-11.796,6.567-23.982\r c14.277-39.776,24.172-65.856,29.692-78.224l128.483,0.568l26.269,65.096l13.411,32.541c1.144,3.241,1.711,6.283,1.711,9.138\r s-1.14,5.428-3.426,7.707c-2.285,1.905-8.753,4.093-19.417,6.563l-37.404,7.994c-0.763,6.283-1.136,13.702-1.136,22.271\r l16.56-0.575l57.103-3.138c10.656-0.38,23.51-0.575,38.547-0.575c18.264,0,36.251,0.763,53.957,2.282\r c21.313,1.523,39.588,2.283,54.819,2.283c0.192-2.283,0.281-4.754,0.281-7.423C475.082,445.957,474.513,440.537,473.371,433.11z\r M251.245,270.941c-2.666,0-7.662-0.052-14.989-0.144c-7.327-0.089-18.649-0.233-33.973-0.425\r c-15.321-0.195-29.93-0.383-43.824-0.574l48.535-128.477c7.424,15.037,16.178,35.117,26.264,60.242\r c11.425,27.79,20.179,50.727,26.273,68.809L251.245,270.941z"})))),n.a.createElement("button",{onClick:this.manageFontSize,"data-fontfunction":"increase"},n.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 42 42",style:{enableBackground:"new 0 0 42 42"}},n.a.createElement("path",{d:"M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16v11.059\r C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"})))),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement("button",{className:"night-mode-check night-mode-check--black "+this.state.isBlackTheme,"data-theme":"nightmode--pitchblack",onClick:this.switchNightMode}),n.a.createElement("button",{className:"night-mode-check night-mode-check--dark "+this.state.isDarkTheme,"data-theme":"nightmode--dark",onClick:this.switchNightMode}))),n.a.createElement(o.a,{fluid:this.state.frontmatter.image.childImageSharp.fluid}),n.a.createElement("h1",{className:u.a.articleTitle+" "+u.a[this.state.languageClass],style:{textAlign:"center"}},this.state.frontmatter.title),n.a.createElement("h5",{className:u.a.articleDescription+" "+u.a[this.state.languageClass]},"rightToLeft"===this.state.languageClass?this.state.frontmatter.author+" "+this.state.frontmatter.date:this.state.frontmatter.date+" "+this.state.frontmatter.author,n.a.createElement("br",null),n.a.createElement("p",{className:""+u.a.articleTime},this.state.frontmatter.length)),n.a.createElement("hr",{className:u.a.frontmatterBreak}),n.a.createElement("section",{className:"blog-post-content "+u.a[this.state.languageClass],dangerouslySetInnerHTML:{__html:this.state.html}})))))},r}(n.a.Component),g="692340680"},214:function(e,t,a){var r=a(1),n=a(9),i=a(36),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},217:function(e,t,a){"use strict";a(214)("fontsize",(function(e){return function(t){return e(this,"font","size",t)}}))},218:function(e,t,a){"use strict";a(16),a(17),a(8),a(101),a(141),a(219);var r=a(19);t.__esModule=!0,t.default=void 0;var n,i=r(a(77)),s=r(a(76)),o=r(a(142)),l=r(a(143)),c=r(a(0)),d=r(a(45)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),h=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,b=p&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var T=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+c+s+o+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(L,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},L=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||p&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=T(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,h=e.fluid,g=e.fixed,p=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,k=e.loading,T=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:I?1:0,transition:x?"opacity "+b+"ms":"none"},o),N="boolean"==typeof p?"lightgray":p,O={transitionDelay:b+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},x&&O,{},o,{},f),M={title:t,alt:this.state.isVisible?"":a,style:V,className:m};if(h){var B=h,_=B[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),N&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&O)}),_.base64&&c.default.createElement(z,{src:_.base64,spreadProps:M,imageVariants:B,generateSources:w}),_.tracedSVG&&c.default.createElement(z,{src:_.tracedSVG,spreadProps:M,imageVariants:B,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(B),c.default.createElement(L,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:k,draggable:T})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:k},_,{imageVariants:B}))}}))}if(g){var P=g,q=P[0],j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete j.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},N&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:N,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},x&&O)}),q.base64&&c.default.createElement(z,{src:q.base64,spreadProps:M,imageVariants:P,generateSources:w}),q.tracedSVG&&c.default.createElement(z,{src:q.tracedSVG,spreadProps:M,imageVariants:P,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(P),c.default.createElement(L,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:k,draggable:T})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:k},q,{imageVariants:P}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});I.propTypes={resolutions:x,sizes:R,fixed:d.default.oneOfType([x,d.default.arrayOf(x)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var N=I;t.default=N},219:function(e,t,a){"use strict";a(214)("fixed",(function(e){return function(){return e(this,"tt","","")}}))}}]);
//# sourceMappingURL=component---src-templates-post-js-edf4b3664bb2ac8bdd98.js.map