(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1482:function(e,r,t){"use strict";t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n),i=t(1),c=t.n(i),o=t(17),s=t(2),u=t(55),l=t(293),p=t(2372),f=t.n(p),v=function(e,r){var t=Object(u.a)(r);return(a.a.createElement("div",{className:f.a.subheaderDealerReviews},!Object(o.a)("SEEING_DEALER_STARS_VDP")&&a.a.createElement(l.a,{rating:e,starSize:20}),a.a.createElement("span",{className:f.a.count},1===r?Object(s.a)("dealer.user_review.reviews.count.one"):function(e){return Object(s.a)("dealer.user_review.reviews.count.many",e)}(t))))},d=function(e,r){var t=Math.floor(10*e)/10;return r&&e?v(t,r):Object(s.a)("listings.vdp.reviews.histogram.subheader.no_recent_reviews")},m=function(e){var r=e.averageDealerRating,t=e.totalReviewCount,n=d(r,t);return a.a.createElement("h4",{className:f.a.subheader},n)};m.propTypes={averageDealerRating:c.a.number,totalReviewCount:c.a.number},m.defaultProps={averageDealerRating:null,totalReviewCount:null},r.a=m},1483:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}},1484:function(e,r,t){"use strict";t.d(r,"c",(function(){return s})),t.d(r,"a",(function(){return v})),t.d(r,"b",(function(){return d}));var n,a,i=t(2),c=t(1485);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var s={BY_FAVORABLE:"BY_FAVORABLE",BY_UNFAVORABLE:"BY_UNFAVORABLE",BY_NEWEST:"BY_NEWEST",BY_OLDEST:"BY_OLDEST",BY_HELPFULNESS:"BY_HELPFULNESS"},u=(o(n={},s.BY_FAVORABLE,Object(i.a)("dealer.reviews.sort.favorable")),o(n,s.BY_UNFAVORABLE,Object(i.a)("dealer.reviews.sort.unfavorable")),o(n,s.BY_NEWEST,Object(i.a)("dealer.reviews.sort.newest")),o(n,s.BY_OLDEST,Object(i.a)("dealer.reviews.sort.oldest")),o(n,s.BY_HELPFULNESS,Object(i.a)("dealer.reviews.sort.most_helpful")),n),l="rating",p="rawDate",f="positiveRatings",v=(o(a={},s.BY_FAVORABLE,[{prop:l,direction:c.a.DESC},{prop:p,direction:c.a.DESC}]),o(a,s.BY_UNFAVORABLE,[{prop:l,direction:c.a.ASC},{prop:p,direction:c.a.DESC}]),o(a,s.BY_NEWEST,[{prop:p,direction:c.a.DESC}]),o(a,s.BY_OLDEST,[{prop:p,direction:c.a.ASC}]),o(a,s.BY_HELPFULNESS,[{prop:f,direction:c.a.DESC}]),a),d=[{name:u[s.BY_NEWEST],value:s.BY_NEWEST},{name:u[s.BY_OLDEST],value:s.BY_OLDEST},{name:u[s.BY_FAVORABLE],value:s.BY_FAVORABLE},{name:u[s.BY_UNFAVORABLE],value:s.BY_UNFAVORABLE},{name:u[s.BY_HELPFULNESS],value:s.BY_HELPFULNESS}]},1485:function(e,r,t){"use strict";var n;function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,"a",(function(){return o})),t.d(r,"b",(function(){return l}));var o={ASC:"ASC",DESC:"DESC"},s=(c(n={},o.ASC,(function(e,r){return e>r?1:-1})),c(n,o.DESC,(function(e,r){return e>r?-1:1})),n),u=function(e,r,t,n){var a=e.itemA,c=e.itemB,o=r.prop,u=r.direction,l=a[o],p=c[o],f=t+1===n.length,v=l===p;if(v&&f&&!e.result)return i(i({},e),{},{result:0});if(v||e.result)return e;var d=(0,s[u])(l,p);return i(i({},e),{},{result:d})},l=function(e,r){return e.sort((function(e,t){return r.reduce(u,{itemA:e,itemB:t}).result}))}},1526:function(e,r,t){"use strict";t.d(r,"b",(function(){return p})),t.d(r,"a",(function(){return f}));var n=t(13),a=t(24),i=t(12),c=t(534),o=t(136),s=function(e){if(!e.ok)throw new o.a("Error sending rating");return e.json()},u=function(e,r,t){return function(e,r){var t=r?Object(i.a)("f:common.rating.rateUpSomethingAjax"):Object(i.a)("f:common.rating.rateDownSomethingAjax"),n={ratableId:e,ratableType:"DEALER_SALES_REVIEW"};return a.a.requestPost({path:t,body:n,traditional:!0,requestOptions:{headers:new Headers({Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"})}})}(r,t).then(s).then((function(t){var n=t.success,a=t.total,i=t.positive,o=t.currentUserRating,s=t.errors;if(!n)throw new c.a(s.action);return{sellerId:e,ratableId:r,totalRatings:parseInt(a,10),positiveRatings:parseInt(i,10),currentUserRating:parseInt(o,10)}}))},l=function(e,r,t){return function(a){return u(e,r,t).then((function(e){return a(function(e){return{type:n.t,payload:e}}(e))}),(function(){return a((i={sellerId:e,ratableId:r,currentUserRating:t?1:-1},{type:n.s,payload:i}));var i}))}},p=function(e,r){return l(e,r,!0)},f=function(e,r){return l(e,r,!1)}},1655:function(e,r,t){"use strict";var n=t(2),a=t(1),i=t.n(a),c=t(0),o=t.n(c),s=function(e){var r,t=e.className,a=e.contemporaryName,i=e.isPriorOwner;return r=i&&a?Object(n.a)("dealer.user_review.previous_owner.response",a):!i&&a?Object(n.a)("dealer.user_review.current_owner.response.with.name",a):Object(n.a)("dealer.user_review.current_owner.response"),o.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:r}})};s.propTypes={className:i.a.string,contemporaryName:i.a.string,isPriorOwner:i.a.bool},s.defaultProps={className:void 0,contemporaryName:null,isPriorOwner:!1},r.a=s},1659:function(e,r,t){"use strict";var n=t(2),a=t(1),i=t.n(a),c=t(0),o=t.n(c),s=function(e){var r=e.className;return(o.a.createElement("div",{className:r},o.a.createElement("span",null,Object(n.a)("dealer.user_review.ownership_change.generic"))))};s.propTypes={className:i.a.string},s.defaultProps={className:void 0},r.a=s},1660:function(e,r,t){"use strict";var n=t(0),a=t.n(n),i=t(1),c=t.n(i),o=t(330),s=t(1484),u=function(e){var r=e.handleSortSelect;return(a.a.createElement(o.a,{onSelectChange:r,selectId:"sort-dealer-current-reviews"},s.b.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.name)}))))};u.propTypes={handleSortSelect:c.a.func.isRequired},r.a=u},1661:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var n=t(0),a=t.n(n),i=t(1),c=t.n(i),o=t(7),s=t.n(o),u=t(1083),l=t(18),p=t(2),f=t(2375),v=t.n(f);var d=function(e){var r=e.onSearchInput,t=e.currentSearchTerm,n=e.numResults,i=String.fromCharCode(160);t&&(i=1===n?Object(p.a)("dealer.review.search.one_matching_review"):n>1?Object(p.a)("dealer.review.search.many_matching_reviews",n):Object(p.a)("dealer.review.search.no_matching_reviews"));var c,o,f;return(a.a.createElement("div",{className:v.a.header},a.a.createElement("div",{className:v.a.wrapper},a.a.createElement(l.FontAwesomeIcon,{icon:u.faSearch,className:v.a.icon}),a.a.createElement("input",{placeholder:Object(p.a)("dealer.review.search.search_reviews"),className:v.a.input,onChange:r,"aria-describedby":"reviewSearchResultsCount"}),a.a.createElement("span",{id:"reviewSearchResultsCount",className:s()(v.a.resultText,(c={},o=v.a.showResults,f=!!t,o in c?Object.defineProperty(c,o,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[o]=f,c)),"aria-live":"polite"},i))))};d.propTypes={onSearchInput:c.a.func.isRequired,currentSearchTerm:c.a.string,numResults:c.a.number},d.defaultProps={currentSearchTerm:"",numResults:0}},2056:function(e,r,t){"use strict";var n=t(0),a=t.n(n),i=t(1),c=t.n(i),o=t(55),s=t(293),u=t(2370),l=t.n(u),p=function(e){var r=e.rating,t=function(e,r){return e>0?Math.floor(100*e/r):0}(e.ratingCount,e.totalCount),n="".concat(t,"%"),i=t/100;return a.a.createElement("div",{className:l.a.row},a.a.createElement("div",{className:l.a.starWrapper},a.a.createElement(s.a,{rating:r,starSize:20})),a.a.createElement("div",{className:l.a.barWrapper},a.a.createElement("div",{className:l.a.ratingBar,style:{width:"".concat(n)}})),a.a.createElement("div",{className:l.a.ratingPercentage},Object(o.a)(i,{style:"percent"})))};p.propTypes={rating:c.a.number.isRequired,ratingCount:c.a.number.isRequired,totalCount:c.a.number.isRequired};var f=p,v=t(2371),d=t.n(v);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){h(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var g={5:0,4:0,3:0,2:0,1:0},E=function(e,r){var t=r.rating,n=e[t];return b(b({},e),{},h({},t,n+1))},w=function(e){var r=e.currentReviews,t=r.reduce(E,g),n=r.length;return a.a.createElement("div",{className:d.a.wrapper},[5,4,3,2,1].map((function(e){return a.a.createElement(f,{key:e,rating:e,ratingCount:t[e],totalCount:n})})))};w.propTypes={currentReviews:c.a.arrayOf(c.a.shape({rating:c.a.number}))},w.defaultProps={currentReviews:[]};r.a=w},2057:function(e,r,t){"use strict";var n=t(1),a=t.n(n),i=t(0),c=t.n(i),o=t(256),s=t(1483),u=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{text:e,highlight:r}},l=t(2374),p=t.n(l),f=function(e){var r=e.children,t=e.className,n=e.highlightText,a=e.useRDFa,i=function(e,r){if(!r)return[u(e)];for(var t=Object(s.a)(r),n=new RegExp(t,"i"),a=r.length,i=[],c=e;c.length;){var o=c.search(n);-1===o?(i.push(u(c)),c=""):(o>0&&(i.push(u(c.slice(0,o))),c=c.slice(o)),i.push(u(c.slice(0,a),!0)),c=c.slice(a))}return i}(r,n);return c.a.createElement(o.a,{className:t,property:a?"reviewBody":void 0},i.map((function(e,r){if(e.highlight){var t="".concat(e.text).concat(r);return(c.a.createElement("span",{key:t,className:p.a.searchHighlight},e.text))}return e.text})))};f.propTypes={children:a.a.string,className:a.a.string,highlightText:a.a.string,useRDFa:a.a.bool},f.defaultProps={children:void 0,className:void 0,highlightText:void 0,useRDFa:!1};r.a=f},2370:function(e,r,t){e.exports={row:"_3ZzooA",starWrapper:"_3UnWEw",barWrapper:"_42zXRc",ratingBar:"UmP4ca",ratingPercentage:"hVKvZS"}},2371:function(e,r,t){e.exports={wrapper:"_3cdntu"}},2372:function(e,r,t){e.exports={subheader:"_47gzfS",subheaderDealerReviews:"_6Vxnrs",count:"_4wjwai"}},2374:function(e,r,t){e.exports={searchHighlight:"_3EdXQe"}},2375:function(e,r,t){e.exports={header:"bcEnHg",wrapper:"_2v2Z5A",icon:"_2nE2ua",input:"irni6F",resultText:"_2rjm9d",showResults:"fRXEoS"}}}]);
//# sourceMappingURL=2ab9e7cc7d9b0e89290f43ca7f699999.js.map