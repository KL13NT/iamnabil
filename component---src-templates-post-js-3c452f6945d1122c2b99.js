(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l}),a.d(t,"pageQuery",function(){return o});a(95),a(96);var i=a(0),r=a.n(i),s=a(175),n=a.n(s);a(176);function l(e){var t=e.data.markdownRemark,a=t.frontmatter,i=t.html;console.log(a);var s="ar"===a.lang?"rightToLeft":null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:s},r.a.createElement("a",{onClick:function(){window.document.referrer.includes("http://iamnabil.me/blog")?window.history.back():window.location="/blog"}},"rightToLeft"===s?"العودة":"Home")),r.a.createElement("div",{style:{width:"700px",margin:"4rem auto"}},r.a.createElement("h1",{className:"article-title "+s},a.title),r.a.createElement("h5",{className:s},a.author," ‎@Nabil_Tharwat16",r.a.createElement("br",null),r.a.createElement("p",{className:s},"rightToLeft"===s?Math.floor(parseInt(a.length)/350)+" دقائق من القراءة":a.date+" - "+Math.floor(parseInt(a.length)/350)+" min read")),r.a.createElement(n.a,{fluid:a.image.childImageSharp.fluid}),r.a.createElement("div",{className:"blog-post-content "+s,dangerouslySetInnerHTML:{__html:i}})))}var o="1004429008"},175:function(e,t,a){"use strict";var i=a(10);t.__esModule=!0,t.default=void 0;var r,s=i(a(8)),n=i(a(42)),l=i(a(98)),o=i(a(99)),d=i(a(0)),c=i(a(5)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+r+t+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},f,{onLoad:n,onError:c,ref:t,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});w.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var v=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var i=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,E=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:L?1:0,transition:I?"opacity "+b+"ms":"none"},l),z="boolean"==typeof m?"lightgray":m,O={transitionDelay:b+"ms"},N=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&O,l,f),T={title:t,alt:this.state.isVisible?"":a,style:N,className:p};if(g){var k=g;return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),z&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&O)}),k.base64&&d.default.createElement(w,(0,o.default)({src:k.base64},T)),k.tracedSVG&&d.default.createElement(w,(0,o.default)({src:k.tracedSVG},T)),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement(w,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,o.default)({alt:a,title:t,loading:E},k))}}))}if(h){var C=h,V=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},s);return"inherit"===s.display&&delete V.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},z&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:z,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},I&&O)}),C.base64&&d.default.createElement(w,(0,o.default)({src:C.base64},T)),C.tracedSVG&&d.default.createElement(w,(0,o.default)({src:C.tracedSVG},T)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(w,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,o.default)({alt:a,title:t,loading:E},C))}}))}return null},t}(d.default.Component);v.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:E,sizes:L,fixed:E,fluid:L,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var I=v;t.default=I}}]);
//# sourceMappingURL=component---src-templates-post-js-3c452f6945d1122c2b99.js.map