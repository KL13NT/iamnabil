(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f}),a.d(t,"pageQuery",function(){return p});a(175),a(42),a(66),a(96);var r=a(0),i=a.n(r),n=a(166),o=a(177),s=a.n(o),l=a(162),c=a(164),d=a(178),u=a.n(d);function f(e){var t=e.data.markdownRemark,a=t.frontmatter,r=t.html,o="ar"===a.lang?"rightToLeft":null;console.log(a.ogImageName,a.ogImageExtension,a);var d=function(e){var t="يناير فبراير مارس ابريل مايو يونيو يوليو اغسطس سبتمبر اكتوبر نوفمبر ديسمبر".split(" "),a=e.split(" "),r=t[["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(a[0])],i=a.slice(1).toString().replace(/[0-9]/g,function(e){return"۰١٢٣٤٥٦٧٨٩"[+e]}).replace(",","").split(",");return i[0]+" "+r+", "+i[1]};return"rightToLeft"===o?function(e){e.date=d(e.date),e.author="كتبه: "+e.author+" في",e.length=Math.floor(parseInt(e.length)/350)+" دقائق من القراءة"}(a):function(e){e.author="by "+e.author,e.length=Math.floor(parseInt(e.length)/350)+" min read"}(a),i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null,i.a.createElement(c.a,{title:a.title,description:a.description,lang:"en-gb"}),i.a.createElement(n.Helmet,null,i.a.createElement("title",null,a.title),i.a.createElement("meta",{property:"og:title",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"text.article"}),i.a.createElement("meta",{property:"og:description",content:a.description}),i.a.createElement("meta",{property:"og:url",content:"http://iamnabil.me/blog/"+a.path}),i.a.createElement("meta",{property:"og:image",content:"/static/"+a.ogImageName+"."+a.ogImageExtension}),i.a.createElement("meta",{property:"og:site_name",content:"Nabil Tharwat - Blog"})),i.a.createElement("article",null,i.a.createElement(s.a,{fluid:a.image.childImageSharp.fluid}),i.a.createElement("h1",{className:u.a.articleTitle+" "+u.a[o]},a.title),i.a.createElement("h5",{className:u.a.articleDescription+" "+u.a[o]},"rightToLeft"===o?a.author+" "+a.date:a.date+" "+a.author,i.a.createElement("br",null),i.a.createElement("p",{className:""+u.a.articleTime},a.length)),i.a.createElement("hr",{className:u.a.frontmatterBreak}),i.a.createElement("section",{className:"blog-post-content "+u.a[o],dangerouslySetInnerHTML:{__html:r}}))))}var p="218202256"},159:function(e,t,a){var r;e.exports=(r=a(161))&&r.default||r},160:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),i=a.n(r),n=a(5),o=a.n(n),s=a(40),l=a.n(s);a.d(t,"a",function(){return l.a});a(159);var c=i.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,r=e.query,n=e.render,o=a?a.data:t[r]&&t[r].data;return i.a.createElement(i.a.Fragment,null,o&&n(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,n=e.children;return i.a.createElement(c.Consumer,null,function(e){return i.a.createElement(d,{data:t,query:a,render:r||n,staticQueryData:e})})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,a){"use strict";a.r(t);a(41);var r=a(0),i=a.n(r),n=a(5),o=a.n(n),s=a(64),l=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},162:function(e,t,a){"use strict";var r=a(163),i=a(0),n=a.n(i),o=a(5),s=a.n(o),l=a(160),c=(a(167),function(e){var t=e.children;return n.a.createElement(l.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,t)},data:r})});c.propTypes={children:s.a.node.isRequired},t.a=c},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Nabil's Blog"}}}}},164:function(e,t,a){"use strict";var r=a(165),i=a(0),n=a.n(i),o=a(5),s=a.n(o),l=a(166),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,s=r.data.site,l=t||s.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(i)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=d},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Nabil's Blog",description:"Kick off your next, great project with a curated list of helpful blog posts.",author:"@Nabil_Tharwat16"}}}}},175:function(e,t,a){"use strict";a(176);var r=a(6),i=a(95),n=a(10),o=/./.toString,s=function(e){a(14)(RegExp.prototype,"toString",e,!0)};a(13)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?i.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},176:function(e,t,a){a(10)&&"g"!=/./g.flags&&a(12).f(RegExp.prototype,"flags",{configurable:!0,get:a(95)})},177:function(e,t,a){"use strict";var r=a(11);t.__esModule=!0,t.default=void 0;var i,n=r(a(8)),o=r(a(43)),s=r(a(98)),l=r(a(99)),c=r(a(0)),d=r(a(5)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+l+a+i+t+o+n+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:o,onError:d,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});E.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var S=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:L?1:0,transition:I?"opacity "+b+"ms":"none"},s),T="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},O=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&N,s,f),z={title:t,alt:this.state.isVisible?"":a,style:O,className:p};if(g){var x=g;return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),T&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&N)}),x.base64&&c.default.createElement(E,(0,l.default)({src:x.base64},z)),x.tracedSVG&&c.default.createElement(E,(0,l.default)({src:x.tracedSVG},z)),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(E,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:a,title:t,loading:w},x))}}))}if(m){var q=m,M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete M.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},T&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:T,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},I&&N)}),q.base64&&c.default.createElement(E,(0,l.default)({src:q.base64},z)),q.tracedSVG&&c.default.createElement(E,(0,l.default)({src:q.tracedSVG},z)),this.state.isVisible&&c.default.createElement("picture",null,q.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),c.default.createElement(E,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:a,title:t,loading:w},q))}}))}return null},t}(c.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});S.propTypes={resolutions:w,sizes:L,fixed:w,fluid:L,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var I=S;t.default=I}}]);
//# sourceMappingURL=component---src-templates-post-js-3de171dbba274f98fb05.js.map