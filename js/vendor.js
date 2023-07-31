/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/*!
 * jQuery Scrollify
 * Version 1.0.20
 *
 * Requires:
 * - jQuery 1.7 or higher
 *
 * https://github.com/lukehaas/Scrollify
 *
 * Copyright 2016, Luke Haas
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



if touchScroll is false - update index

 */
(function (global,factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], function($) {
      return factory($, global, global.document);
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'), global, global.document);
  } else {
    // Browser globals
    factory(jQuery, global, global.document);
  }
}(typeof window !== 'undefined' ? window : this, function ($, window, document, undefined) {
  "use strict";
  var heights = [],
    names = [],
    elements = [],
    overflow = [],
    index = 0,
    currentIndex = 0,
    interstitialIndex = 1,
    hasLocation = false,
    timeoutId,
    timeoutId2,
    $window = $(window),
    portHeight,
    top = $window.scrollTop(),
    scrollable = false,
    locked = false,
    scrolled = false,
    manualScroll,
    swipeScroll,
    util,
    disabled = false,
    scrollSamples = [],
    scrollTime = new Date().getTime(),
    firstLoad = true,
    initialised = false,
    destination = 0,
    wheelEvent = 'onwheel' in document ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll',
    settings = {
      //section should be an identifier that is the same for each section
      section: ".section",
      sectionName: "section-name",
      interstitialSection: "",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset: 0,
      scrollbars: true,
      target:"html,body",
      standardScrollElements: false,
      setHeights: true,
      overflowScroll:true,
      updateHash: true,
      touchScroll:true,
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    };
  function getportHeight() {
    return ($window.height() + settings.offset);
  }
  function animateScroll(index,instant,callbacks,toTop) {
    if(currentIndex===index) {
      callbacks = false;
    }
    if(disabled===true) {
      return true;
    }
    if(names[index]) {
      scrollable = false;
      if(firstLoad===true) {
        firstLoad = false;
        settings.afterRender();
      }
      if(callbacks) {
        if( typeof settings.before == 'function' && settings.before(index,elements) === false ){
          return true;
        }
      }
      interstitialIndex = 1;
      destination = (!index) ? 0 : heights[index];
      if(firstLoad===false && currentIndex>index && toTop===false) {
        //We're going backwards
        if(overflow[index]) {
          portHeight = getportHeight();

          interstitialIndex = parseInt(elements[index].outerHeight()/portHeight);

          destination = parseInt(heights[index])+(elements[index].outerHeight()-portHeight);
        }
      }


      if(settings.updateHash && settings.sectionName && !(firstLoad===true && index===0)) {
        if(history.pushState) {
            try {
              history.replaceState(null, null, names[index]);
            } catch (e) {
              if(window.console) {
                console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.");
              }
            }

        } else {
          window.location.hash = names[index];
        }
      }

      currentIndex = index;
      if(instant) {
        $(settings.target).stop().scrollTop(destination);
        if(callbacks) {
          settings.after(index,elements);
        }
      } else {
        locked = true;
        if( $().velocity ) {
          $(settings.target).stop().velocity('scroll', {
            duration: settings.scrollSpeed,
            easing: settings.easing,
            offset: destination,
            mobileHA: false
          });
        } else {
          $(settings.target).stop().animate({
            scrollTop: destination
          }, settings.scrollSpeed,settings.easing);
        }

        if(window.location.hash.length && settings.sectionName && window.console) {
          try {
            if($(window.location.hash).length) {
              console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.");
            }
          } catch (e) {}
        }
        $(settings.target).promise().done(function(){
          locked = false;
          firstLoad = false;
          if(callbacks) {
            settings.after(index,elements);
          }
        });
      }

    }
  }

  function isAccelerating(samples) {
    function average(num) {
      var sum = 0;

      var lastElements = samples.slice(Math.max(samples.length - num, 1));

      for(var i = 0; i < lastElements.length; i++){
          sum += lastElements[i];
      }

      return Math.ceil(sum/num);
    }

    var avEnd = average(10);
    var avMiddle = average(70);

    if(avEnd >= avMiddle) {
      return true;
    } else {
      return false;
    }
  }
  var scrollify = function(options) {
    initialised = true;
    $.easing['easeOutExpo'] = function(x, t, b, c, d) {
      return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    };

    manualScroll = {
      handleMousedown:function() {
        if(disabled===true) {
          return true;
        }
        scrollable = false;
        scrolled = false;
      },
      handleMouseup:function() {
        if(disabled===true) {
          return true;
        }
        scrollable = true;
        if(scrolled) {
          //instant,callbacks
          manualScroll.calculateNearest(false,true);
        }
      },
      handleScroll:function() {
        if(disabled===true) {
          return true;
        }
        if(timeoutId){
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(function(){
          scrolled = true;
          if(scrollable===false) {
            return false;
          }
          scrollable = false;
          //instant,callbacks
          manualScroll.calculateNearest(false,true);
        }, 200);
      },
      calculateNearest:function(instant,callbacks) {
        top = $window.scrollTop();
        var i =1,
          max = heights.length,
          closest = 0,
          prev = Math.abs(heights[0] - top),
          diff;
        for(;i<max;i++) {
          diff = Math.abs(heights[i] - top);

          if(diff < prev) {
            prev = diff;
            closest = i;
          }
        }
        if((atBottom() && closest>index) || atTop()) {
          index = closest;
          //index, instant, callbacks, toTop
          animateScroll(closest,instant,callbacks,false);
        }
      },
      wheelHandler:function(e) {
        if(disabled===true) {
          return true;
        } else if(settings.standardScrollElements) {
          if($(e.target).is(settings.standardScrollElements) || $(e.target).closest(settings.standardScrollElements).length) {
            return true;
          }
        }
        if(!overflow[index]) {
          e.preventDefault();
        }
        var currentScrollTime = new Date().getTime();


        e = e || window.event;
        var value;
        if (e.originalEvent) {
            value = e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail;
        } else {
            value = e.wheelDelta || -e.deltaY || -e.detail;
        }
        var delta = Math.max(-1, Math.min(1, value));

        //delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;

        if(scrollSamples.length > 149){
          scrollSamples.shift();
        }
        //scrollSamples.push(Math.abs(delta*10));
        scrollSamples.push(Math.abs(value));

        if((currentScrollTime-scrollTime) > 200){
          scrollSamples = [];
        }
        scrollTime = currentScrollTime;


        if(locked) {
          return false;
        }
        if(delta<0) {
          if(index<heights.length-1) {
            if(atBottom()) {
              if(isAccelerating(scrollSamples)) {
                e.preventDefault();
                index++;
                locked = true;
                //index, instant, callbacks, toTop
                animateScroll(index,false,true, false);
              } else {
                return false;
              }
            }
          }
        } else if(delta>0) {
          if(index>0) {
            if(atTop()) {
              if(isAccelerating(scrollSamples)) {
                e.preventDefault();
                index--;
                locked = true;
                //index, instant, callbacks, toTop
                animateScroll(index,false,true, false);
              } else {
                return false
              }
            }
          }
        }

      },
      keyHandler:function(e) {
        if(disabled===true || document.activeElement.readOnly===false) {
          return true;
        } else if(settings.standardScrollElements) {
          if($(e.target).is(settings.standardScrollElements) || $(e.target).closest(settings.standardScrollElements).length) {
            return true;
          }
        }
        if(locked===true) {
          return false;
        }
        if(e.keyCode==38 || e.keyCode==33) {
          if(index>0) {
            if(atTop()) {
              e.preventDefault();
              index--;
              //index, instant, callbacks, toTop
              animateScroll(index,false,true,false);
            }
          }
        } else if(e.keyCode==40 || e.keyCode==34) {
          if(index<heights.length-1) {
            if(atBottom()) {
              e.preventDefault();
              index++;
              //index, instant, callbacks, toTop
              animateScroll(index,false,true,false);
            }
          }
        }
      },
      init:function() {
        if(settings.scrollbars) {
          $window.on('mousedown', manualScroll.handleMousedown);
          $window.on('mouseup', manualScroll.handleMouseup);
          $window.on('scroll', manualScroll.handleScroll);
        } else {
          $("body").css({"overflow":"hidden"});
        }
        window.addEventListener(wheelEvent, manualScroll.wheelHandler, { passive: false });
        //$(document).bind(wheelEvent,manualScroll.wheelHandler);
        $window.on('keydown', manualScroll.keyHandler);
      }
    };

    swipeScroll = {
      touches : {
        "touchstart": {"y":-1,"x":-1},
        "touchmove" : {"y":-1,"x":-1},
        "touchend"  : false,
        "direction" : "undetermined"
      },
      options:{
        "distance" : 30,
        "timeGap" : 800,
        "timeStamp" : new Date().getTime()
      },
      touchHandler: function(event) {
        if(disabled===true) {
          return true;
        } else if(settings.standardScrollElements) {
          if($(event.target).is(settings.standardScrollElements) || $(event.target).closest(settings.standardScrollElements).length) {
            return true;
          }
        }
        var touch;
        if (typeof event !== 'undefined'){
          if (typeof event.touches !== 'undefined') {
            touch = event.touches[0];
            switch (event.type) {
              case 'touchstart':
                swipeScroll.touches.touchstart.y = touch.pageY;
                swipeScroll.touches.touchmove.y = -1;

                swipeScroll.touches.touchstart.x = touch.pageX;
                swipeScroll.touches.touchmove.x = -1;

                swipeScroll.options.timeStamp = new Date().getTime();
                swipeScroll.touches.touchend = false;
              case 'touchmove':
                swipeScroll.touches.touchmove.y = touch.pageY;
                swipeScroll.touches.touchmove.x = touch.pageX;
                if(swipeScroll.touches.touchstart.y!==swipeScroll.touches.touchmove.y && (Math.abs(swipeScroll.touches.touchstart.y-swipeScroll.touches.touchmove.y)>Math.abs(swipeScroll.touches.touchstart.x-swipeScroll.touches.touchmove.x))) {
                  //if(!overflow[index]) {
                    event.preventDefault();
                  //}
                  swipeScroll.touches.direction = "y";
                  if((swipeScroll.options.timeStamp+swipeScroll.options.timeGap)<(new Date().getTime()) && swipeScroll.touches.touchend == false) {

                    swipeScroll.touches.touchend = true;
                    if (swipeScroll.touches.touchstart.y > -1) {

                      if(Math.abs(swipeScroll.touches.touchmove.y-swipeScroll.touches.touchstart.y)>swipeScroll.options.distance) {
                        if(swipeScroll.touches.touchstart.y < swipeScroll.touches.touchmove.y) {

                          swipeScroll.up();

                        } else {
                          swipeScroll.down();

                        }
                      }
                    }
                  }
                }
                break;
              case 'touchend':
                if(swipeScroll.touches[event.type]===false) {
                  swipeScroll.touches[event.type] = true;
                  if (swipeScroll.touches.touchstart.y > -1 && swipeScroll.touches.touchmove.y > -1 && swipeScroll.touches.direction==="y") {

                    if(Math.abs(swipeScroll.touches.touchmove.y-swipeScroll.touches.touchstart.y)>swipeScroll.options.distance) {
                      if(swipeScroll.touches.touchstart.y < swipeScroll.touches.touchmove.y) {
                        swipeScroll.up();

                      } else {
                        swipeScroll.down();

                      }
                    }
                    swipeScroll.touches.touchstart.y = -1;
                    swipeScroll.touches.touchstart.x = -1;
                    swipeScroll.touches.direction = "undetermined";
                  }
                }
              default:
                break;
            }
          }
        }
      },
      down: function() {

        if(index<heights.length) {

          if(atBottom() && index<heights.length-1) {

            index++;
            //index, instant, callbacks, toTop
            animateScroll(index,false,true,false);
          } else {
            portHeight = getportHeight();
            if(Math.floor(elements[index].height()/portHeight)>interstitialIndex) {

              interstitialScroll(parseInt(heights[index])+(portHeight*interstitialIndex));
              interstitialIndex += 1;

            } else {
              interstitialScroll(parseInt(heights[index])+(elements[index].outerHeight()-portHeight));
            }

          }
        }
      },
      up: function() {
        if(index>=0) {
          if(atTop() && index>0) {

            index--;
            //index, instant, callbacks, toTop
            animateScroll(index,false,true,false);
          } else {

            if(interstitialIndex>2) {
              portHeight = getportHeight();

              interstitialIndex -= 1;
              interstitialScroll(parseInt(heights[index])+(portHeight*interstitialIndex));

            } else {

              interstitialIndex = 1;
              interstitialScroll(parseInt(heights[index]));
            }
          }

        }
      },
      init: function() {
        if (document.addEventListener && settings.touchScroll) {
          var eventListenerOptions = {
            passive: false
          };
          document.addEventListener('touchstart', swipeScroll.touchHandler, eventListenerOptions);
          document.addEventListener('touchmove', swipeScroll.touchHandler, eventListenerOptions);
          document.addEventListener('touchend', swipeScroll.touchHandler, eventListenerOptions);
        }
      }
    };


    util = {
      refresh:function(withCallback,scroll) {
        clearTimeout(timeoutId2);
        timeoutId2 = setTimeout(function() {
          //retain position
          sizePanels(true);
          //scroll, firstLoad
          calculatePositions(scroll,false);
          if(withCallback) {
              settings.afterResize();
          }
        },400);
      },
      handleUpdate:function() {
        //callbacks, scroll
        //changed from false,true to false,false
        util.refresh(false,false);
      },
      handleResize:function() {
        //callbacks, scroll
        util.refresh(true,false);
      },
      handleOrientation:function() {
        //callbacks, scroll
        util.refresh(true,true);
      }
    };
    settings = $.extend(settings, options);

    //retain position
    sizePanels(false);

    calculatePositions(false,true);

    if(true===hasLocation) {
      //index, instant, callbacks, toTop
      animateScroll(index,false,true,true);
    } else {
      setTimeout(function() {
        //instant,callbacks
        manualScroll.calculateNearest(true,false);
      },200);
    }
    if(heights.length) {
      manualScroll.init();
      swipeScroll.init();

      $window.on("resize",util.handleResize);
      if (document.addEventListener) {
        window.addEventListener("orientationchange", util.handleOrientation, false);
      }
    }
    function interstitialScroll(pos) {
      if( $().velocity ) {
        $(settings.target).stop().velocity('scroll', {
          duration: settings.scrollSpeed,
          easing: settings.easing,
          offset: pos,
          mobileHA: false
        });
      } else {
        $(settings.target).stop().animate({
          scrollTop: pos
        }, settings.scrollSpeed,settings.easing);
      }
    }

    function sizePanels(keepPosition) {
      if(keepPosition) {
        top = $window.scrollTop();
      }

      var selector = settings.section;
      overflow = [];
      if(settings.interstitialSection.length) {
        selector += "," + settings.interstitialSection;
      }
      if(settings.scrollbars===false) {
        settings.overflowScroll = false;
      }
      portHeight = getportHeight();
      $(selector).each(function(i) {
        var $this = $(this);

        if(settings.setHeights) {
          if($this.is(settings.interstitialSection)) {
            overflow[i] = false;
          } else {
            if(($this.css("height","auto").outerHeight()<portHeight) || $this.css("overflow")==="hidden") {
              $this.css({"height":portHeight});

              overflow[i] = false;
            } else {

              $this.css({"height":$this.outerHeight()});

              if(settings.overflowScroll) {
                overflow[i] = true;
              } else {
                overflow[i] = false;
              }
            }

          }

        } else {

          if(($this.outerHeight()<portHeight) || (settings.overflowScroll===false)) {
            overflow[i] = false;
          } else {
            overflow[i] = true;
          }
        }
      });
      if(keepPosition) {
        $window.scrollTop(top);
      }
    }
    function calculatePositions(scroll,firstLoad) {
      var selector = settings.section;
      if(settings.interstitialSection.length) {
        selector += "," + settings.interstitialSection;
      }
      heights = [];
      names = [];
      elements = [];
      $(selector).each(function(i){
          var $this = $(this);
          if(i>0) {
            heights[i] = parseInt($this.offset().top) + settings.offset;
          } else {
            heights[i] = parseInt($this.offset().top);
          }
          if(settings.sectionName && $this.data(settings.sectionName)) {
            names[i] = "#" + $this.data(settings.sectionName).toString().replace(/ /g,"-");
          } else {
            if($this.is(settings.interstitialSection)===false) {
              names[i] = "#" + (i + 1);
            } else {
              names[i] = "#";
              if(i===$(selector).length-1 && i>1) {
                heights[i] = heights[i-1] + (parseInt($($(selector)[i-1]).outerHeight()) - parseInt($(window).height())) + parseInt($this.outerHeight());
              }
            }
          }
          elements[i] = $this;
          try {
            if($(names[i]).length && window.console) {
              console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.");
            }
          } catch (e) {}

          if(window.location.hash===names[i]) {
            index = i;
            hasLocation = true;
          }

      });

      if(true===scroll) {
        //index, instant, callbacks, toTop
        animateScroll(index,false,false,false);
      }
    }

    function atTop() {
      if(!overflow[index]) {
        return true;
      }
      top = $window.scrollTop();
      if(top>parseInt(heights[index])) {
        return false;
      } else {
        return true;
      }
    }
    function atBottom() {
      if(!overflow[index]) {
        return true;
      }
      top = $window.scrollTop();
      portHeight = getportHeight();

      if(top<parseInt(heights[index])+(elements[index].outerHeight()-portHeight)-28) {

        return false;

      } else {
        return true;
      }
    }
  }

  function move(panel,instant) {
    var z = names.length;
    for(;z>=0;z--) {
      if(typeof panel === 'string') {
        if (names[z]===panel) {
          index = z;
          //index, instant, callbacks, toTop
          animateScroll(z,instant,true,true);
        }
      } else {
        if(z===panel) {
          index = z;
          //index, instant, callbacks, toTop
          animateScroll(z,instant,true,true);
        }
      }
    }
  }
  scrollify.move = function(panel) {
    if(panel===undefined) {
      return false;
    }
    if(panel.originalEvent) {
      panel = $(this).attr("href");
    }
    move(panel,false);
  };
  scrollify.instantMove = function(panel) {
    if(panel===undefined) {
      return false;
    }
    move(panel,true);
  };
  scrollify.next = function() {
    if(index<names.length) {
      index += 1;
      //index, instant, callbacks, toTop
      animateScroll(index,false,true,true);
    }
  };
  scrollify.previous = function() {
    if(index>0) {
      index -= 1;
      //index, instant, callbacks, toTop
      animateScroll(index,false,true,true);
    }
  };
  scrollify.instantNext = function() {
    if(index<names.length) {
      index += 1;
      //index, instant, callbacks, toTop
      animateScroll(index,true,true,true);
    }
  };
  scrollify.instantPrevious = function() {
    if(index>0) {
      index -= 1;
      //index, instant, callbacks, toTop
      animateScroll(index,true,true,true);
    }
  };
  scrollify.destroy = function() {
    if(!initialised) {
      return false;
    }
    if(settings.setHeights) {
      $(settings.section).each(function() {
        $(this).css("height","auto");
      });
    }
    $window.off("resize",util.handleResize);
    if(settings.scrollbars) {
      $window.off('mousedown', manualScroll.handleMousedown);
      $window.off('mouseup', manualScroll.handleMouseup);
      $window.off('scroll', manualScroll.handleScroll);
    }
    // $window.off(wheelEvent,manualScroll.wheelHandler);
    window.removeEventListener(wheelEvent,manualScroll.wheelHandler);
    $window.off('keydown', manualScroll.keyHandler);

    if (document.addEventListener && settings.touchScroll) {
      document.removeEventListener('touchstart', swipeScroll.touchHandler, false);
      document.removeEventListener('touchmove', swipeScroll.touchHandler, false);
      document.removeEventListener('touchend', swipeScroll.touchHandler, false);
    }
    heights = [];
    names = [];
    elements = [];
    overflow = [];
  };
  scrollify.update = function() {
    if(!initialised) {
      return false;
    }
    util.handleUpdate();
  };
  scrollify.current = function() {
    return elements[index];
  };
  scrollify.currentIndex = function() {
    return index;
  };
  scrollify.disable = function() {
    disabled = true;
  };
  scrollify.enable = function() {
    disabled = false;
    if (initialised) {
      //instant,callbacks
      manualScroll.calculateNearest(false,false);
    }
  };
  scrollify.isDisabled = function() {
    return disabled;
  };
  scrollify.setOptions = function(updatedOptions) {
    if(!initialised) {
      return false;
    }
    if(typeof updatedOptions === "object") {
      settings = $.extend(settings, updatedOptions);
      util.handleUpdate();
    } else if(window.console) {
      console.warn("Scrollify warning: setOptions expects an object.");
    }
  };
  $.scrollify = scrollify;
  return scrollify;
}));

/*! UIkit 3.1.5 | http://www.getuikit.com | (c) 2014 - 2018 YOOtheme | MIT License */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("uikit",e):(t=t||self).UIkit=e()}(this,function(){"use strict";function l(n,i){return function(t){var e=arguments.length;return e?1<e?n.apply(i,arguments):n.call(i,t):n.call(i)}}var e=Object.prototype,n=e.hasOwnProperty;function c(t,e){return n.call(t,e)}var i={},r=/([a-z\d])([A-Z])/g;function d(t){return t in i||(i[t]=t.replace(r,"$1-$2").toLowerCase()),i[t]}var o=/-(\w)/g;function f(t){return t.replace(o,s)}function s(t,e){return e?e.toUpperCase():""}function p(t){return t.length?s(0,t.charAt(0))+t.slice(1):""}var t=String.prototype,a=t.startsWith||function(t){return 0===this.lastIndexOf(t,0)};function w(t,e){return a.call(t,e)}var h=t.endsWith||function(t){return this.substr(-t.length)===t};function u(t,e){return h.call(t,e)}function m(t,e){return~this.indexOf(t,e)}var g=Array.prototype,v=t.includes||m,b=g.includes||m;function y(t,e){return t&&(D(t)?v:b).call(t,e)}var x=g.findIndex||function(t){for(var e=arguments,n=0;n<this.length;n++)if(t.call(e[1],this[n],n,this))return n;return-1};function k(t,e){return x.call(t,e)}var $=Array.isArray;function I(t){return"function"==typeof t}function S(t){return null!==t&&"object"==typeof t}function T(t){return S(t)&&Object.getPrototypeOf(t)===e}function E(t){return S(t)&&t===t.window}function A(t){return S(t)&&9===t.nodeType}function C(t){return S(t)&&!!t.jquery}function N(t){return t instanceof Node||S(t)&&1<=t.nodeType}var _=e.toString;function M(t){return _.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/)}function O(t){return"boolean"==typeof t}function D(t){return"string"==typeof t}function B(t){return"number"==typeof t}function z(t){return B(t)||D(t)&&!isNaN(t-parseFloat(t))}function P(t){return!($(t)?t.length:S(t)&&Object.keys(t).length)}function H(t){return void 0===t}function L(t){return O(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function F(t){var e=Number(t);return!isNaN(e)&&e}function j(t){return parseFloat(t)||0}function W(t){return N(t)||E(t)||A(t)?t:M(t)||C(t)?t[0]:$(t)?W(t[0]):null}function V(t){return N(t)?[t]:M(t)?g.slice.call(t):$(t)?t.map(W).filter(Boolean):C(t)?t.toArray():[]}function Y(t){return $(t)?t:D(t)?t.split(/,(?![^(]*\))/).map(function(t){return z(t)?F(t):L(t.trim())}):[t]}function R(t){return t?u(t,"ms")?j(t):1e3*j(t):0}function q(t,n){return t===n||S(t)&&S(n)&&Object.keys(t).length===Object.keys(n).length&&K(t,function(t,e){return t===n[e]})}function U(t,e,n){return t.replace(new RegExp(e+"|"+n,"mg"),function(t){return t===e?n:e})}var X=Object.assign||function(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];t=Object(t);for(var i=0;i<e.length;i++){var r=e[i];if(null!==r)for(var o in r)c(r,o)&&(t[o]=r[o])}return t};function K(t,e){for(var n in t)if(!1===e(t[n],n))return!1;return!0}function G(t,r){return t.sort(function(t,e){var n=t[r];void 0===n&&(n=0);var i=e[r];return void 0===i&&(i=0),i<n?1:n<i?-1:0})}function J(t,n){var i=new Set;return t.filter(function(t){var e=t[n];return!i.has(e)&&(i.add(e)||!0)})}function Z(t,e,n){return void 0===e&&(e=0),void 0===n&&(n=1),Math.min(Math.max(F(t)||0,e),n)}function Q(){}function tt(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function et(t,e){return t.x<=e.right&&t.x>=e.left&&t.y<=e.bottom&&t.y>=e.top}var nt={ratio:function(t,e,n){var i,r="width"===e?"height":"width";return(i={})[r]=t[e]?Math.round(n*t[r]/t[e]):t[r],i[e]=n,i},contain:function(n,i){var r=this;return K(n=X({},n),function(t,e){return n=n[e]>i[e]?r.ratio(n,e,i[e]):n}),n},cover:function(n,i){var r=this;return K(n=this.contain(n,i),function(t,e){return n=n[e]<i[e]?r.ratio(n,e,i[e]):n}),n}};function it(t,e,n){if(S(e))for(var i in e)it(t,i,e[i]);else{if(H(n))return(t=W(t))&&t.getAttribute(e);V(t).forEach(function(t){I(n)&&(n=n.call(t,it(t,e))),null===n?ot(t,e):t.setAttribute(e,n)})}}function rt(t,e){return V(t).some(function(t){return t.hasAttribute(e)})}function ot(t,e){t=V(t),e.split(" ").forEach(function(e){return t.forEach(function(t){return t.hasAttribute(e)&&t.removeAttribute(e)})})}function st(t,e){for(var n=0,i=[e,"data-"+e];n<i.length;n++)if(rt(t,i[n]))return it(t,i[n])}function at(t,e){return W(t)||ut(t,ct(t,e))}function ht(t,e){var n=V(t);return n.length&&n||lt(t,ct(t,e))}function ct(t,e){return void 0===e&&(e=document),mt(t)||A(e)?e:e.ownerDocument}function ut(t,e){return W(dt(t,e,"querySelector"))}function lt(t,e){return V(dt(t,e,"querySelectorAll"))}function dt(t,s,e){if(void 0===s&&(s=document),!t||!D(t))return null;var a;mt(t=t.replace(pt,"$1 *"))&&(a=[],t=function(t){return t.match(gt).map(function(t){return t.replace(/,$/,"").trim()})}(t).map(function(t,e){var n=s;if("!"===t[0]){var i=t.substr(1).trim().split(" ");n=xt(s.parentNode,i[0]),t=i.slice(1).join(" ").trim()}if("-"===t[0]){var r=t.substr(1).trim().split(" "),o=(n||s).previousElementSibling;n=bt(o,t.substr(1))?o:null,t=r.slice(1).join(" ")}return n?(n.id||(n.id="uk-"+Date.now()+e,a.push(function(){return ot(n,"id")})),"#"+It(n.id)+" "+t):null}).filter(Boolean).join(","),s=document);try{return s[e](t)}catch(t){return null}finally{a&&a.forEach(function(t){return t()})}}var ft=/(^|[^\\],)\s*[!>+~-]/,pt=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g;function mt(t){return D(t)&&t.match(ft)}var gt=/.*?[^\\](?:,|$)/g;var vt=Element.prototype,wt=vt.matches||vt.webkitMatchesSelector||vt.msMatchesSelector;function bt(t,e){return V(t).some(function(t){return wt.call(t,e)})}var yt=vt.closest||function(t){var e=this;do{if(bt(e,t))return e;e=e.parentNode}while(e&&1===e.nodeType)};function xt(t,e){return w(e,">")&&(e=e.slice(1)),N(t)?t.parentNode&&yt.call(t,e):V(t).map(function(t){return xt(t,e)}).filter(Boolean)}function kt(t,e){for(var n=[],i=W(t).parentNode;i&&1===i.nodeType;)bt(i,e)&&n.push(i),i=i.parentNode;return n}var $t=window.CSS&&CSS.escape||function(t){return t.replace(/([^\x7f-\uFFFF\w-])/g,function(t){return"\\"+t})};function It(t){return D(t)?$t.call(null,t):""}var St={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function Tt(t){return V(t).some(function(t){return St[t.tagName.toLowerCase()]})}function Et(t){return V(t).some(function(t){return t.offsetWidth||t.offsetHeight||t.getClientRects().length})}var At="input,select,textarea,button";function Ct(t){return V(t).some(function(t){return bt(t,At)})}function Nt(t,e){return V(t).filter(function(t){return bt(t,e)})}function _t(t,e){return D(e)?bt(t,e)||xt(t,e):t===e||(A(e)?e.documentElement:W(e)).contains(W(t))}function Mt(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=Pt(t),i=n[0],r=n[1],o=n[2],s=n[3],a=n[4];return i=Ft(i),o&&(s=function(t,i,r){var o=this;return function(n){t.forEach(function(t){var e=">"===i[0]?lt(i,t).reverse().filter(function(t){return _t(n.target,t)})[0]:xt(n.target,i);e&&(n.delegate=t,n.current=e,r.call(o,n))})}}(i,o,s)),1<s.length&&(s=function(e){return function(t){return $(t.detail)?e.apply(void 0,[t].concat(t.detail)):e(t)}}(s)),r.split(" ").forEach(function(e){return i.forEach(function(t){return t.addEventListener(e,s,a)})}),function(){return Ot(i,r,s,a)}}function Ot(t,e,n,i){void 0===i&&(i=!1),t=Ft(t),e.split(" ").forEach(function(e){return t.forEach(function(t){return t.removeEventListener(e,n,i)})})}function Dt(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=Pt(t),i=n[0],r=n[1],o=n[2],s=n[3],a=n[4],h=n[5],c=Mt(i,r,o,function(t){var e=!h||h(t);e&&(c(),s(t,e))},a);return c}function Bt(t,n,i){return Ft(t).reduce(function(t,e){return t&&e.dispatchEvent(zt(n,!0,!0,i))},!0)}function zt(t,e,n,i){if(void 0===e&&(e=!0),void 0===n&&(n=!1),D(t)){var r=document.createEvent("CustomEvent");r.initCustomEvent(t,e,n,i),t=r}return t}function Pt(t){return I(t[2])&&t.splice(2,0,!1),t}function Ht(t){return t&&"addEventListener"in t}function Lt(t){return Ht(t)?t:W(t)}function Ft(t){return $(t)?t.map(Lt).filter(Boolean):D(t)?lt(t):Ht(t)?[t]:V(t)}function jt(t){return"touch"===t.pointerType||t.touches}function Wt(t,e){void 0===e&&(e="client");var n=t.touches,i=t.changedTouches,r=n&&n[0]||i&&i[0]||t;return{x:r[e+"X"],y:r[e+"Y"]}}function Vt(){var n=this;this.promise=new Yt(function(t,e){n.reject=e,n.resolve=t})}var Yt="Promise"in window?window.Promise:Ut,Rt=2,qt="setImmediate"in window?setImmediate:setTimeout;function Ut(t){this.state=Rt,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}Ut.reject=function(n){return new Ut(function(t,e){e(n)})},Ut.resolve=function(n){return new Ut(function(t,e){t(n)})},Ut.all=function(s){return new Ut(function(n,t){var i=[],r=0;function e(e){return function(t){i[e]=t,(r+=1)===s.length&&n(i)}}0===s.length&&n(i);for(var o=0;o<s.length;o+=1)Ut.resolve(s[o]).then(e(o),t)})},Ut.race=function(i){return new Ut(function(t,e){for(var n=0;n<i.length;n+=1)Ut.resolve(i[n]).then(t,e)})};var Xt=Ut.prototype;function Kt(s,a){return new Yt(function(t,e){var n=X({data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:Q,responseType:""},a);n.beforeSend(n);var i=n.xhr;for(var r in n)if(r in i)try{i[r]=n[r]}catch(t){}for(var o in i.open(n.method.toUpperCase(),s),n.headers)i.setRequestHeader(o,n.headers[o]);Mt(i,"load",function(){0===i.status||200<=i.status&&i.status<300||304===i.status?t(i):e(X(Error(i.statusText),{xhr:i,status:i.status}))}),Mt(i,"error",function(){return e(X(Error("Network Error"),{xhr:i}))}),Mt(i,"timeout",function(){return e(X(Error("Network Timeout"),{xhr:i}))}),i.send(n.data)})}function Gt(i,r,o){return new Yt(function(t,e){var n=new Image;n.onerror=e,n.onload=function(){return t(n)},o&&(n.sizes=o),r&&(n.srcset=r),n.src=i})}Xt.resolve=function(t){var e=this;if(e.state===Rt){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var i=t&&t.then;if(null!==t&&S(t)&&I(i))return void i.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},Xt.reject=function(t){var e=this;if(e.state===Rt){if(t===e)throw new TypeError("Promise settled with itself.");e.state=1,e.value=t,e.notify()}},Xt.notify=function(){var o=this;qt(function(){if(o.state!==Rt)for(;o.deferred.length;){var t=o.deferred.shift(),e=t[0],n=t[1],i=t[2],r=t[3];try{0===o.state?I(e)?i(e.call(void 0,o.value)):i(o.value):1===o.state&&(I(n)?i(n.call(void 0,o.value)):r(o.value))}catch(t){r(t)}}})},Xt.then=function(n,i){var r=this;return new Ut(function(t,e){r.deferred.push([n,i,t,e]),r.notify()})},Xt.catch=function(t){return this.then(void 0,t)};var Jt=/msie|trident/i.test(window.navigator.userAgent),Zt="rtl"===it(document.documentElement,"dir"),Qt="ontouchstart"in window,te=window.PointerEvent,ee=Qt||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints,ne=te?"pointerdown":Qt?"touchstart":"mousedown",ie=te?"pointermove":Qt?"touchmove":"mousemove",re=te?"pointerup":Qt?"touchend":"mouseup",oe=te?"pointerenter":Qt?"":"mouseenter",se=te?"pointerleave":Qt?"":"mouseleave",ae=te?"pointercancel":"touchcancel";function he(t){if("loading"===document.readyState)var e=Mt(document,"DOMContentLoaded",function(){e(),t()});else t()}function ce(t,e){return e?V(t).indexOf(W(e)):V((t=W(t))&&t.parentNode.children).indexOf(t)}function ue(t,e,n,i){void 0===n&&(n=0),void 0===i&&(i=!1);var r=(e=V(e)).length;return t=z(t)?F(t):"next"===t?n+1:"previous"===t?n-1:ce(e,t),i?Z(t,0,r-1):(t%=r)<0?t+r:t}function le(t){return(t=Se(t)).innerHTML="",t}function de(t,e){return t=Se(t),H(e)?t.innerHTML:fe(t.hasChildNodes()?le(t):t,e)}function fe(e,t){return e=Se(e),ge(t,function(t){return e.appendChild(t)})}function pe(e,t){return e=Se(e),ge(t,function(t){return e.parentNode.insertBefore(t,e)})}function me(e,t){return e=Se(e),ge(t,function(t){return e.nextSibling?pe(e.nextSibling,t):fe(e.parentNode,t)})}function ge(t,e){return(t=D(t)?$e(t):t)?"length"in t?V(t).map(e):e(t):null}function ve(t){V(t).map(function(t){return t.parentNode&&t.parentNode.removeChild(t)})}function we(t,e){for(e=W(pe(t,e));e.firstChild;)e=e.firstChild;return fe(e,t),e}function be(t,e){return V(V(t).map(function(t){return t.hasChildNodes?we(V(t.childNodes),e):fe(t,e)}))}function ye(t){V(t).map(function(t){return t.parentNode}).filter(function(t,e,n){return n.indexOf(t)===e}).forEach(function(t){pe(t,t.childNodes),ve(t)})}var xe=/^\s*<(\w+|!)[^>]*>/,ke=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;function $e(t){var e=ke.exec(t);if(e)return document.createElement(e[1]);var n=document.createElement("div");return xe.test(t)?n.insertAdjacentHTML("beforeend",t.trim()):n.textContent=t,1<n.childNodes.length?V(n.childNodes):n.firstChild}function Ie(t,e){if(t&&1===t.nodeType)for(e(t),t=t.firstElementChild;t;)Ie(t,e),t=t.nextElementSibling}function Se(t,e){return D(t)?Ee(t)?W($e(t)):ut(t,e):W(t)}function Te(t,e){return D(t)?Ee(t)?V($e(t)):lt(t,e):V(t)}function Ee(t){return"<"===t[0]||t.match(/^\s*</)}function Ae(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];De(t,e,"add")}function Ce(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];De(t,e,"remove")}function Ne(t,e){it(t,"class",function(t){return(t||"").replace(new RegExp("\\b"+e+"\\b","g"),"")})}function _e(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];e[0]&&Ce(t,e[0]),e[1]&&Ae(t,e[1])}function Me(t,e){return e&&V(t).some(function(t){return t.classList.contains(e.split(" ")[0])})}function Oe(t){for(var i=[],e=arguments.length-1;0<e--;)i[e]=arguments[e+1];if(i.length){var r=D((i=Be(i))[i.length-1])?[]:i.pop();i=i.filter(Boolean),V(t).forEach(function(t){for(var e=t.classList,n=0;n<i.length;n++)ze.Force?e.toggle.apply(e,[i[n]].concat(r)):e[(H(r)?!e.contains(i[n]):r)?"add":"remove"](i[n])})}}function De(t,n,i){(n=Be(n).filter(Boolean)).length&&V(t).forEach(function(t){var e=t.classList;ze.Multiple?e[i].apply(e,n):n.forEach(function(t){return e[i](t)})})}function Be(t){return t.reduce(function(t,e){return t.concat.call(t,D(e)&&y(e," ")?e.trim().split(" "):e)},[])}var ze={get Multiple(){return this.get("_multiple")},get Force(){return this.get("_force")},get:function(t){if(!c(this,t)){var e=document.createElement("_").classList;e.add("a","b"),e.toggle("c",!1),this._multiple=e.contains("b"),this._force=!e.contains("c")}return this[t]}},Pe={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0};function He(t,e,r){return V(t).map(function(n){if(D(e)){if(e=Ye(e),H(r))return Fe(n,e);r||B(r)?n.style[e]=z(r)&&!Pe[e]?r+"px":r:n.style.removeProperty(e)}else{if($(e)){var i=Le(n);return e.reduce(function(t,e){return t[e]=i[Ye(e)],t},{})}S(e)&&K(e,function(t,e){return He(n,e,t)})}return n})[0]}function Le(t,e){return(t=W(t)).ownerDocument.defaultView.getComputedStyle(t,e)}function Fe(t,e,n){return Le(t,n)[e]}var je={};function We(t){var e=document.documentElement;if(!Jt)return Le(e).getPropertyValue("--uk-"+t);if(!(t in je)){var n=fe(e,document.createElement("div"));Ae(n,"uk-"+t),je[t]=Fe(n,"content",":before").replace(/^["'](.*)["']$/,"$1"),ve(n)}return je[t]}var Ve={};function Ye(t){var e=Ve[t];return e||(e=Ve[t]=function(t){t=d(t);var e=document.documentElement.style;if(t in e)return t;var n,i=Re.length;for(;i--;)if((n="-"+Re[i]+"-"+t)in e)return n}(t)||t),e}var Re=["webkit","moz","ms"];function qe(t,s,a,h){return void 0===a&&(a=400),void 0===h&&(h="linear"),Yt.all(V(t).map(function(o){return new Yt(function(n,i){for(var t in s){var e=He(o,t);""===e&&He(o,t,e)}var r=setTimeout(function(){return Bt(o,"transitionend")},a);Dt(o,"transitionend transitioncanceled",function(t){var e=t.type;clearTimeout(r),Ce(o,"uk-transition"),He(o,{"transition-property":"","transition-duration":"","transition-timing-function":""}),"transitioncanceled"===e?i():n()},!1,function(t){var e=t.target;return o===e}),Ae(o,"uk-transition"),He(o,X({"transition-property":Object.keys(s).map(Ye).join(","),"transition-duration":a+"ms","transition-timing-function":h},s))})}))}var Ue={start:qe,stop:function(t){return Bt(t,"transitionend"),Yt.resolve()},cancel:function(t){Bt(t,"transitioncanceled")},inProgress:function(t){return Me(t,"uk-transition")}},Xe="uk-animation-",Ke="uk-cancel-animation";function Ge(t,e,n,a,h){var c=arguments;return void 0===n&&(n=200),Yt.all(V(t).map(function(s){return new Yt(function(i,r){if(Me(s,Ke))requestAnimationFrame(function(){return Yt.resolve().then(function(){return Ge.apply(void 0,c).then(i,r)})});else{var t=e+" "+Xe+(h?"leave":"enter");w(e,Xe)&&(a&&(t+=" uk-transform-origin-"+a),h&&(t+=" "+Xe+"reverse")),o(),Dt(s,"animationend animationcancel",function(t){var e=t.type,n=!1;"animationcancel"===e?(r(),o()):(i(),Yt.resolve().then(function(){n=!0,o()})),requestAnimationFrame(function(){n||(Ae(s,Ke),requestAnimationFrame(function(){return Ce(s,Ke)}))})},!1,function(t){var e=t.target;return s===e}),He(s,"animationDuration",n+"ms"),Ae(s,t)}function o(){He(s,"animationDuration",""),Ne(s,Xe+"\\S*")}})}))}var Je=new RegExp(Xe+"(enter|leave)"),Ze={in:function(t,e,n,i){return Ge(t,e,n,i,!1)},out:function(t,e,n,i){return Ge(t,e,n,i,!0)},inProgress:function(t){return Je.test(it(t,"class"))},cancel:function(t){Bt(t,"animationcancel")}},Qe={width:["x","left","right"],height:["y","top","bottom"]};function tn(t,e,u,l,d,n,i,r){u=un(u),l=un(l);var f={element:u,target:l};if(!t||!e)return f;var p=nn(t),m=nn(e),g=m;if(cn(g,u,p,-1),cn(g,l,m,1),d=ln(d,p.width,p.height),n=ln(n,m.width,m.height),d.x+=n.x,d.y+=n.y,g.left+=d.x,g.top+=d.y,i){var o=[nn(bn(t))];r&&o.unshift(nn(r)),K(Qe,function(t,s){var a=t[0],h=t[1],c=t[2];!0!==i&&!y(i,a)||o.some(function(i){var t=u[a]===h?-p[s]:u[a]===c?p[s]:0,e=l[a]===h?m[s]:l[a]===c?-m[s]:0;if(g[h]<i[h]||g[h]+p[s]>i[c]){var n=p[s]/2,r="center"===l[a]?-m[s]/2:0;return"center"===u[a]&&(o(n,r)||o(-n,-r))||o(t,e)}function o(e,t){var n=g[h]+e+t-2*d[a];if(n>=i[h]&&n+p[s]<=i[c])return g[h]=n,["element","target"].forEach(function(t){f[t][a]=e?f[t][a]===Qe[s][1]?Qe[s][2]:Qe[s][1]:f[t][a]}),!0}})})}return en(t,g),f}function en(n,i){if(n=W(n),!i)return nn(n);var r=en(n),o=He(n,"position");["left","top"].forEach(function(t){if(t in i){var e=He(n,t);He(n,t,i[t]-r[t]+j("absolute"===o&&"auto"===e?rn(n)[t]:e))}})}function nn(t){var e,n,i=bn(t=W(t)),r=i.pageYOffset,o=i.pageXOffset;if(E(t)){var s=t.innerHeight,a=t.innerWidth;return{top:r,left:o,height:s,width:a,bottom:r+s,right:o+a}}Et(t)||"none"!==He(t,"display")||(e=it(t,"style"),n=it(t,"hidden"),it(t,{style:(e||"")+";display:block !important;",hidden:null}));var h=t.getBoundingClientRect();return H(e)||it(t,{style:e,hidden:n}),{height:h.height,width:h.width,top:h.top+r,left:h.left+o,bottom:h.bottom+r,right:h.right+o}}function rn(i){var r=(i=W(i)).offsetParent||function(t){return yn(t).documentElement}(i),o=en(r),t=["top","left"].reduce(function(t,e){var n=p(e);return t[e]-=o[e]+j(He(i,"margin"+n))+j(He(r,"border"+n+"Width")),t},en(i));return{top:t.top,left:t.left}}var on=an("height"),sn=an("width");function an(i){var r=p(i);return function(t,e){if(t=W(t),H(e)){if(E(t))return t["inner"+r];if(A(t)){var n=t.documentElement;return Math.max(n["offset"+r],n["scroll"+r])}return(e="auto"===(e=He(t,i))?t["offset"+r]:j(e)||0)-hn(i,t)}He(t,i,e||0===e?+e+hn(i,t)+"px":"")}}function hn(t,n,e){return void 0===e&&(e="border-box"),He(n,"boxSizing")===e?Qe[t].slice(1).map(p).reduce(function(t,e){return t+j(He(n,"padding"+e))+j(He(n,"border"+e+"Width"))},0):0}function cn(o,s,a,h){K(Qe,function(t,e){var n=t[0],i=t[1],r=t[2];s[n]===r?o[i]+=a[e]*h:"center"===s[n]&&(o[i]+=a[e]*h/2)})}function un(t){var e=/left|center|right/,n=/top|center|bottom/;return 1===(t=(t||"").split(" ")).length&&(t=e.test(t[0])?t.concat(["center"]):n.test(t[0])?["center"].concat(t):["center","center"]),{x:e.test(t[0])?t[0]:"center",y:n.test(t[1])?t[1]:"center"}}function ln(t,e,n){var i=(t||"").split(" "),r=i[0],o=i[1];return{x:r?j(r)*(u(r,"%")?e/100:1):0,y:o?j(o)*(u(o,"%")?n/100:1):0}}function dn(t){switch(t){case"left":return"right";case"right":return"left";case"top":return"bottom";case"bottom":return"top";default:return t}}function fn(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=0),!Et(t))return!1;var i=bn(t=W(t)),r=t.getBoundingClientRect(),o={top:-e,left:-n,bottom:e+on(i),right:n+sn(i)};return tt(r,o)||et({x:r.left,y:r.top},o)}function pn(t,e){if(void 0===e&&(e=0),!Et(t))return 0;var n=bn(t=W(t)),i=yn(t),r=t.offsetHeight+e,o=gn(t)[0],s=on(n),a=s+Math.min(0,o-s),h=Math.max(0,s-(on(i)+e-(o+r)));return Z((a+n.pageYOffset-o)/((a+(r-(h<s?h:0)))/100)/100)}function mn(t,e){if(E(t=W(t))||A(t)){var n=bn(t);(0,n.scrollTo)(n.pageXOffset,e)}else t.scrollTop=e}function gn(t){var e=[0,0];do{if(e[0]+=t.offsetTop,e[1]+=t.offsetLeft,"fixed"===He(t,"position")){var n=bn(t);return e[0]+=n.pageYOffset,e[1]+=n.pageXOffset,e}}while(t=t.offsetParent);return e}function vn(t,e,n){return void 0===e&&(e="width"),void 0===n&&(n=window),z(t)?+t:u(t,"vh")?wn(on(bn(n)),t):u(t,"vw")?wn(sn(bn(n)),t):u(t,"%")?wn(nn(n)[e],t):j(t)}function wn(t,e){return t*j(e)/100}function bn(t){return E(t)?t:yn(t).defaultView}function yn(t){return W(t).ownerDocument}var xn={reads:[],writes:[],read:function(t){return this.reads.push(t),kn(),t},write:function(t){return this.writes.push(t),kn(),t},clear:function(t){return In(this.reads,t)||In(this.writes,t)},flush:function(){$n(this.reads),$n(this.writes.splice(0,this.writes.length)),this.scheduled=!1,(this.reads.length||this.writes.length)&&kn()}};function kn(){xn.scheduled||(xn.scheduled=!0,requestAnimationFrame(xn.flush.bind(xn)))}function $n(t){for(var e;e=t.shift();)e()}function In(t,e){var n=t.indexOf(e);return!!~n&&!!t.splice(n,1)}function Sn(){}function Tn(t,e){return(e.y-t.y)/(e.x-t.x)}Sn.prototype={positions:[],position:null,init:function(){var i=this;this.positions=[],this.position=null;var r=!1;this.unbind=Mt(document,"mousemove",function(n){r||(setTimeout(function(){var t=Date.now(),e=i.positions.length;e&&100<t-i.positions[e-1].time&&i.positions.splice(0,e),i.positions.push({time:t,x:n.pageX,y:n.pageY}),5<i.positions.length&&i.positions.shift(),r=!1},5),r=!0)})},cancel:function(){this.unbind&&this.unbind()},movesTo:function(t){if(this.positions.length<2)return!1;var e=en(t),n=this.positions[this.positions.length-1],i=this.positions[0];if(e.left<=n.x&&n.x<=e.right&&e.top<=n.y&&n.y<=e.bottom)return!1;var r=[[{x:e.left,y:e.top},{x:e.right,y:e.bottom}],[{x:e.right,y:e.top},{x:e.left,y:e.bottom}]];return e.right<=n.x||(e.left>=n.x?(r[0].reverse(),r[1].reverse()):e.bottom<=n.y?r[0].reverse():e.top>=n.y&&r[1].reverse()),!!r.reduce(function(t,e){return t+(Tn(i,e[0])<Tn(n,e[0])&&Tn(i,e[1])>Tn(n,e[1]))},0)}};var En={};function An(t,e,n){return En.computed(I(t)?t.call(n,n):t,I(e)?e.call(n,n):e)}function Cn(t,e){return t=t&&!$(t)?[t]:t,e?t?t.concat(e):$(e)?e:[e]:t}function Nn(e,n,i){var r={};if(I(n)&&(n=n.options),n.extends&&(e=Nn(e,n.extends,i)),n.mixins)for(var t=0,o=n.mixins.length;t<o;t++)e=Nn(e,n.mixins[t],i);for(var s in e)h(s);for(var a in n)c(e,a)||h(a);function h(t){r[t]=(En[t]||function(t,e){return H(e)?t:e})(e[t],n[t],i)}return r}function _n(t,e){var n;void 0===e&&(e=[]);try{return t?w(t,"{")?JSON.parse(t):e.length&&!y(t,":")?((n={})[e[0]]=t,n):t.split(";").reduce(function(t,e){var n=e.split(/:(.*)/),i=n[0],r=n[1];return i&&!H(r)&&(t[i.trim()]=r.trim()),t},{}):{}}catch(t){return{}}}En.events=En.created=En.beforeConnect=En.connected=En.beforeDisconnect=En.disconnected=En.destroy=Cn,En.args=function(t,e){return!1!==e&&Cn(e||t)},En.update=function(t,e){return G(Cn(t,I(e)?{read:e}:e),"order")},En.props=function(t,e){return $(e)&&(e=e.reduce(function(t,e){return t[e]=String,t},{})),En.methods(t,e)},En.computed=En.methods=function(t,e){return e?t?X({},t,e):e:t},En.data=function(e,n,t){return t?An(e,n,t):n?e?function(t){return An(e,n,t)}:n:e};function Mn(t){this.id=++On,this.el=W(t)}var On=0;function Dn(t,e){try{t.contentWindow.postMessage(JSON.stringify(X({event:"command"},e)),"*")}catch(t){}}Mn.prototype.isVideo=function(){return this.isYoutube()||this.isVimeo()||this.isHTML5()},Mn.prototype.isHTML5=function(){return"VIDEO"===this.el.tagName},Mn.prototype.isIFrame=function(){return"IFRAME"===this.el.tagName},Mn.prototype.isYoutube=function(){return this.isIFrame()&&!!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)},Mn.prototype.isVimeo=function(){return this.isIFrame()&&!!this.el.src.match(/vimeo\.com\/video\/.*/)},Mn.prototype.enableApi=function(){var e=this;if(this.ready)return this.ready;var n,i=this.isYoutube(),r=this.isVimeo();return i||r?this.ready=new Yt(function(t){Dt(e.el,"load",function(){if(i){var t=function(){return Dn(e.el,{event:"listening",id:e.id})};n=setInterval(t,100),t()}}),function(i){return new Yt(function(n){Dt(window,"message",function(t,e){return n(e)},!1,function(t){var e=t.data;if(e&&D(e)){try{e=JSON.parse(e)}catch(t){return}return e&&i(e)}})})}(function(t){return i&&t.id===e.id&&"onReady"===t.event||r&&Number(t.player_id)===e.id}).then(function(){t(),n&&clearInterval(n)}),it(e.el,"src",e.el.src+(y(e.el.src,"?")?"&":"?")+(i?"enablejsapi=1":"api=1&player_id="+e.id))}):Yt.resolve()},Mn.prototype.play=function(){var t=this;if(this.isVideo())if(this.isIFrame())this.enableApi().then(function(){return Dn(t.el,{func:"playVideo",method:"play"})});else if(this.isHTML5())try{var e=this.el.play();e&&e.catch(Q)}catch(t){}},Mn.prototype.pause=function(){var t=this;this.isVideo()&&(this.isIFrame()?this.enableApi().then(function(){return Dn(t.el,{func:"pauseVideo",method:"pause"})}):this.isHTML5()&&this.el.pause())},Mn.prototype.mute=function(){var t=this;this.isVideo()&&(this.isIFrame()?this.enableApi().then(function(){return Dn(t.el,{func:"mute",method:"setVolume",value:0})}):this.isHTML5()&&(this.el.muted=!0,it(this.el,"muted","")))};var Bn="IntersectionObserver"in window?window.IntersectionObserver:function(){function t(e,t){var n=this;void 0===t&&(t={});var i=t.rootMargin;void 0===i&&(i="0 0"),this.targets=[];var r,o=(i||"0 0").split(" ").map(j),s=o[0],a=o[1];this.offsetTop=s,this.offsetLeft=a,this.apply=function(){r||(r=requestAnimationFrame(function(){return setTimeout(function(){var t=n.takeRecords();t.length&&e(t,n),r=!1})}))},this.off=Mt(window,"scroll resize load",this.apply,{passive:!0,capture:!0})}return t.prototype.takeRecords=function(){var n=this;return this.targets.filter(function(t){var e=fn(t.target,n.offsetTop,n.offsetLeft);if(null===t.isIntersecting||e^t.isIntersecting)return t.isIntersecting=e,!0})},t.prototype.observe=function(t){this.targets.push({target:t,isIntersecting:null}),this.apply()},t.prototype.disconnect=function(){this.targets=[],this.off()},t}();function zn(t){return!(!w(t,"uk-")&&!w(t,"data-uk-"))&&f(t.replace("data-uk-","").replace("uk-",""))}function Pn(t){this._init(t)}var Hn,Ln,Fn,jn,Wn,Vn,Yn,Rn,qn;function Un(t,e){if(t)for(var n in t)t[n]._connected&&t[n]._callUpdate(e)}function Xn(t,e){var n={},i=t.args;void 0===i&&(i=[]);var r=t.props;void 0===r&&(r={});var o=t.el;if(!r)return n;for(var s in r){var a=d(s),h=st(o,a);if(!H(h)){if(h=r[s]===Boolean&&""===h||Zn(r[s],h),"target"===a&&(!h||w(h,"_")))continue;n[s]=h}}var c=_n(st(o,e),i);for(var u in c){var l=f(u);void 0!==r[l]&&(n[l]=Zn(r[l],c[u]))}return n}function Kn(i,r,o){Object.defineProperty(i,r,{enumerable:!0,get:function(){var t=i._computeds,e=i.$props,n=i.$el;return c(t,r)||(t[r]=(o.get||o).call(i,e,n)),t[r]},set:function(t){var e=i._computeds;e[r]=o.set?o.set.call(i,t):t,H(e[r])&&delete e[r]}})}function Gn(e,n,i){T(n)||(n={name:i,handler:n});var t=n.name,r=n.el,o=n.handler,s=n.capture,a=n.passive,h=n.delegate,c=n.filter,u=n.self;r=I(r)?r.call(e):r||e.$el,$(r)?r.forEach(function(t){return Gn(e,X({},n,{el:t}),i)}):!r||c&&!c.call(e)||(o=function(e){return function(t){return $(t.detail)?e.apply(void 0,[t].concat(t.detail)):e(t)}}(D(o)?e[o]:l(o,e)),u&&(o=function(e){return function(t){if(t.target===t.currentTarget||t.target===t.current)return e.call(null,t)}}(o)),e._events.push(Mt(r,t,h?D(h)?h:h.call(e):null,o,O(a)?{passive:a,capture:s}:s)))}function Jn(t,e){return t.every(function(t){return!t||!c(t,e)})}function Zn(t,e){return t===Boolean?L(e):t===Number?F(e):"list"===t?Y(e):t?t(e):e}Pn.util=Object.freeze({ajax:Kt,getImage:Gt,transition:qe,Transition:Ue,animate:Ge,Animation:Ze,attr:it,hasAttr:rt,removeAttr:ot,data:st,addClass:Ae,removeClass:Ce,removeClasses:Ne,replaceClass:_e,hasClass:Me,toggleClass:Oe,positionAt:tn,offset:en,position:rn,height:on,width:sn,boxModelAdjust:hn,flipPosition:dn,isInView:fn,scrolledOver:pn,scrollTop:mn,offsetPosition:gn,toPx:vn,ready:he,index:ce,getIndex:ue,empty:le,html:de,prepend:function(e,t){return(e=Se(e)).hasChildNodes()?ge(t,function(t){return e.insertBefore(t,e.firstChild)}):fe(e,t)},append:fe,before:pe,after:me,remove:ve,wrapAll:we,wrapInner:be,unwrap:ye,fragment:$e,apply:Ie,$:Se,$$:Te,isIE:Jt,isRtl:Zt,hasTouch:ee,pointerDown:ne,pointerMove:ie,pointerUp:re,pointerEnter:oe,pointerLeave:se,pointerCancel:ae,on:Mt,off:Ot,once:Dt,trigger:Bt,createEvent:zt,toEventTargets:Ft,isTouch:jt,getEventPos:Wt,fastdom:xn,isVoidElement:Tt,isVisible:Et,selInput:At,isInput:Ct,filter:Nt,within:_t,bind:l,hasOwn:c,hyphenate:d,camelize:f,ucfirst:p,startsWith:w,endsWith:u,includes:y,findIndex:k,isArray:$,isFunction:I,isObject:S,isPlainObject:T,isWindow:E,isDocument:A,isJQuery:C,isNode:N,isNodeCollection:M,isBoolean:O,isString:D,isNumber:B,isNumeric:z,isEmpty:P,isUndefined:H,toBoolean:L,toNumber:F,toFloat:j,toNode:W,toNodes:V,toList:Y,toMs:R,isEqual:q,swap:U,assign:X,each:K,sortBy:G,uniqueBy:J,clamp:Z,noop:Q,intersectRect:tt,pointInRect:et,Dimensions:nt,MouseTracker:Sn,mergeOptions:Nn,parseOptions:_n,Player:Mn,Promise:Yt,Deferred:Vt,IntersectionObserver:Bn,query:at,queryAll:ht,find:ut,findAll:lt,matches:bt,closest:xt,parents:kt,escape:It,css:He,getStyles:Le,getStyle:Fe,getCssVar:We,propName:Ye}),Pn.data="__uikit__",Pn.prefix="uk-",Pn.options={},Fn=(Hn=Pn).data,Hn.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},Hn.mixin=function(t,e){(e=(D(e)?Hn.component(e):e)||this).options=Nn(e.options,t)},Hn.extend=function(t){function e(t){this._init(t)}return t=t||{},((e.prototype=Object.create(this.prototype)).constructor=e).options=Nn(this.options,t),e.super=this,e.extend=this.extend,e},Hn.update=function(t,e){(function t(e,n){e&&e!==document.body&&e.parentNode&&(t(e.parentNode,n),n(e.parentNode))})(t=t?W(t):document.body,function(t){return Un(t[Fn],e)}),Ie(t,function(t){return Un(t[Fn],e)})},Object.defineProperty(Hn,"container",{get:function(){return Ln||document.body},set:function(t){Ln=Se(t)}}),(jn=Pn).prototype._callHook=function(t){var e=this,n=this.$options[t];n&&n.forEach(function(t){return t.call(e)})},jn.prototype._callConnected=function(){this._connected||(this._data={},this._computeds={},this._initProps(),this._callHook("beforeConnect"),this._connected=!0,this._initEvents(),this._initObserver(),this._callHook("connected"),this._callUpdate())},jn.prototype._callDisconnected=function(){this._connected&&(this._callHook("beforeDisconnect"),this._observer&&(this._observer.disconnect(),this._observer=null),this._unbindEvents(),this._callHook("disconnected"),this._connected=!1)},jn.prototype._callUpdate=function(t){var o=this;void 0===t&&(t="update");var s=t.type||t;y(["update","resize"],s)&&this._callWatches();var e=this.$options.update,n=this._frames,a=n.reads,h=n.writes;e&&e.forEach(function(t,e){var n=t.read,i=t.write,r=t.events;"update"!==s&&!y(r,s)||(n&&!y(xn.reads,a[e])&&(a[e]=xn.read(function(){var t=o._connected&&n.call(o,o._data,s);!1===t&&i?xn.clear(h[e]):T(t)&&X(o._data,t)})),i&&!y(xn.writes,h[e])&&(h[e]=xn.write(function(){return o._connected&&i.call(o,o._data,s)})))})},Vn=0,(Wn=Pn).prototype._init=function(t){(t=t||{}).data=function(t,e){var n=t.data,i=(t.el,e.args),r=e.props;if(void 0===r&&(r={}),n=$(n)?P(i)?void 0:n.slice(0,i.length).reduce(function(t,e,n){return T(e)?X(t,e):t[i[n]]=e,t},{}):n)for(var o in n)H(n[o])?delete n[o]:n[o]=r[o]?Zn(r[o],n[o]):n[o];return n}(t,this.constructor.options),this.$options=Nn(this.constructor.options,t,this),this.$el=null,this.$props={},this._frames={reads:{},writes:{}},this._events=[],this._uid=Vn++,this._initData(),this._initMethods(),this._initComputeds(),this._callHook("created"),t.el&&this.$mount(t.el)},Wn.prototype._initData=function(){var t=this.$options.data;for(var e in void 0===t&&(t={}),t)this.$props[e]=this[e]=t[e]},Wn.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=l(t[e],this)},Wn.prototype._initComputeds=function(){var t=this.$options.computed;if(this._computeds={},t)for(var e in t)Kn(this,e,t[e])},Wn.prototype._callWatches=function(){var t=this.$options.computed,e=this._computeds;for(var n in e){var i=e[n];delete e[n],t[n].watch&&!q(i,this[n])&&t[n].watch.call(this,this[n],i)}},Wn.prototype._initProps=function(t){var e;for(e in t=t||Xn(this.$options,this.$name))H(t[e])||(this.$props[e]=t[e]);var n=[this.$options.computed,this.$options.methods];for(e in this.$props)e in t&&Jn(n,e)&&(this[e]=this.$props[e])},Wn.prototype._initEvents=function(){var n=this,t=this.$options.events;t&&t.forEach(function(t){if(c(t,"handler"))Gn(n,t);else for(var e in t)Gn(n,t[e],e)})},Wn.prototype._unbindEvents=function(){this._events.forEach(function(t){return t()}),this._events=[]},Wn.prototype._initObserver=function(){var n=this,t=this.$options,i=t.attrs,e=t.props,r=t.el;if(!this._observer&&e&&!1!==i){i=$(i)?i:Object.keys(e),this._observer=new MutationObserver(function(){var e=Xn(n.$options,n.$name);i.some(function(t){return!H(e[t])&&e[t]!==n.$props[t]})&&n.$reset()});var o=i.map(function(t){return d(t)}).concat(this.$name);this._observer.observe(r,{attributes:!0,attributeFilter:o.concat(o.map(function(t){return"data-"+t}))})}},Rn=(Yn=Pn).data,qn={},Yn.component=function(s,t){if(!t)return T(qn[s])&&(qn[s]=Yn.extend(qn[s])),qn[s];Yn[s]=function(t,n){for(var e=arguments.length,i=Array(e);e--;)i[e]=arguments[e];var r=Yn.component(s);return T(t)?new r({data:t}):r.options.functional?new r({data:[].concat(i)}):t&&t.nodeType?o(t):Te(t).map(o)[0];function o(t){var e=Yn.getComponent(t,s);if(e){if(!n)return e;e.$destroy()}return new r({el:t,data:n})}};var e=T(t)?X({},t):t.options;if(e.name=s,e.install&&e.install(Yn,e,s),Yn._initialized&&!e.functional){var n=d(s);xn.read(function(){return Yn[s]("[uk-"+n+"],[data-uk-"+n+"]")})}return qn[s]=T(t)?e:t},Yn.getComponents=function(t){return t&&t[Rn]||{}},Yn.getComponent=function(t,e){return Yn.getComponents(t)[e]},Yn.connect=function(t){if(t[Rn])for(var e in t[Rn])t[Rn][e]._callConnected();for(var n=0;n<t.attributes.length;n++){var i=zn(t.attributes[n].name);i&&i in qn&&Yn[i](t)}},Yn.disconnect=function(t){for(var e in t[Rn])t[Rn][e]._callDisconnected()},function(i){var r=i.data;i.prototype.$mount=function(t){var e=this.$options.name;t[r]||(t[r]={}),t[r][e]||((t[r][e]=this).$el=this.$options.el=this.$options.el||t,_t(t,document)&&this._callConnected())},i.prototype.$emit=function(t){this._callUpdate(t)},i.prototype.$reset=function(){this._callDisconnected(),this._callConnected()},i.prototype.$destroy=function(t){void 0===t&&(t=!1);var e=this.$options,n=e.el,i=e.name;n&&this._callDisconnected(),this._callHook("destroy"),n&&n[r]&&(delete n[r][i],P(n[r])||delete n[r],t&&ve(this.$el))},i.prototype.$create=function(t,e,n){return i[t](e,n)},i.prototype.$update=i.update,i.prototype.$getComponent=i.getComponent;var e={};Object.defineProperties(i.prototype,{$container:Object.getOwnPropertyDescriptor(i,"container"),$name:{get:function(){var t=this.$options.name;return e[t]||(e[t]=i.prefix+d(t)),e[t]}}})}(Pn);var Qn={connected:function(){Me(this.$el,this.$name)||Ae(this.$el,this.$name)}},ti={props:{cls:Boolean,animation:"list",duration:Number,origin:String,transition:String,queued:Boolean},data:{cls:!1,animation:[!1],duration:200,origin:!1,transition:"linear",queued:!1,initProps:{overflow:"",height:"",paddingTop:"",paddingBottom:"",marginTop:"",marginBottom:""},hideProps:{overflow:"hidden",height:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0}},computed:{hasAnimation:function(t){return!!t.animation[0]},hasTransition:function(t){var e=t.animation;return this.hasAnimation&&!0===e[0]}},methods:{toggleElement:function(c,u,l){var d=this;return new Yt(function(t){c=V(c);function e(t){return Yt.all(t.map(function(t){return d._toggleElement(t,u,l)}))}var n,i=c.filter(function(t){return d.isToggled(t)}),r=c.filter(function(t){return!y(i,t)});if(d.queued&&H(l)&&H(u)&&d.hasAnimation&&!(c.length<2)){var o=document.body,s=o.scrollTop,a=i[0],h=Ze.inProgress(a)&&Me(a,"uk-animation-leave")||Ue.inProgress(a)&&"0px"===a.style.height;n=e(i),h||(n=n.then(function(){var t=e(r);return o.scrollTop=s,t}))}else n=e(r.concat(i));n.then(t,Q)})},toggleNow:function(e,n){var i=this;return new Yt(function(t){return Yt.all(V(e).map(function(t){return i._toggleElement(t,n,!1)})).then(t,Q)})},isToggled:function(t){var e=V(t||this.$el);return this.cls?Me(e,this.cls.split(" ")[0]):!rt(e,"hidden")},updateAria:function(t){!1===this.cls&&it(t,"aria-hidden",!this.isToggled(t))},_toggleElement:function(t,e,n){var i=this;if(e=O(e)?e:Ze.inProgress(t)?Me(t,"uk-animation-leave"):Ue.inProgress(t)?"0px"===t.style.height:!this.isToggled(t),!Bt(t,"before"+(e?"show":"hide"),[this]))return Yt.reject();var r=(I(n)?n:!1!==n&&this.hasAnimation?this.hasTransition?function(t){var s=t.isToggled,a=t.duration,h=t.initProps,c=t.hideProps,u=t.transition,l=t._toggle;return function(t,e){var n=Ue.inProgress(t),i=t.hasChildNodes?j(He(t.firstElementChild,"marginTop"))+j(He(t.lastElementChild,"marginBottom")):0,r=Et(t)?on(t)+(n?0:i):0;Ue.cancel(t),s(t)||l(t,!0),on(t,""),xn.flush();var o=on(t)+(n?0:i);return on(t,r),(e?Ue.start(t,X({},h,{overflow:"hidden",height:o}),Math.round(a*(1-r/o)),u):Ue.start(t,c,Math.round(a*(r/o)),u).then(function(){return l(t,!1)})).then(function(){return He(t,h)})}}(this):function(t){var n=t.animation,i=t.duration,r=t.origin,o=t._toggle;return function(t,e){return Ze.cancel(t),e?(o(t,!0),Ze.in(t,n[0],i,r)):Ze.out(t,n[1]||n[0],i,r).then(function(){return o(t,!1)})}}(this):this._toggle)(t,e);Bt(t,e?"show":"hide",[this]);function o(){Bt(t,e?"shown":"hidden",[i]),i.$update(t)}return r?r.then(o):Yt.resolve(o())},_toggle:function(t,e){var n;t&&(e=Boolean(e),this.cls?(n=y(this.cls," ")||e!==Me(t,this.cls))&&Oe(t,this.cls,y(this.cls," ")?void 0:e):(n=e===rt(t,"hidden"))&&it(t,"hidden",e?null:""),Te("[autofocus]",t).some(function(t){return Et(t)?t.focus()||!0:t.blur()}),this.updateAria(t),n&&this.$update(t))}}};var ei={mixins:[Qn,ti],props:{targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,transition:String},data:{targets:"> *",active:!1,animation:[!0],collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",transition:"ease"},computed:{items:function(t,e){return Te(t.targets,e)}},events:[{name:"click",delegate:function(){return this.targets+" "+this.$props.toggle},handler:function(t){t.preventDefault(),this.toggle(ce(Te(this.targets+" "+this.$props.toggle,this.$el),t.current))}}],connected:function(){if(!1!==this.active){var t=this.items[Number(this.active)];t&&!Me(t,this.clsOpen)&&this.toggle(t,!1)}},update:function(){var e=this;this.items.forEach(function(t){return e._toggle(Se(e.content,t),Me(t,e.clsOpen))});var t=!this.collapsible&&!Me(this.items,this.clsOpen)&&this.items[0];t&&this.toggle(t,!1)},methods:{toggle:function(r,o){var s=this,t=ue(r,this.items),a=Nt(this.items,"."+this.clsOpen);(r=this.items[t])&&[r].concat(!this.multiple&&!y(a,r)&&a||[]).forEach(function(t){var e=t===r,n=e&&!Me(t,s.clsOpen);if(n||!e||s.collapsible||!(a.length<2)){Oe(t,s.clsOpen,n);var i=t._wrapper?t._wrapper.firstElementChild:Se(s.content,t);t._wrapper||(t._wrapper=we(i,"<div>"),it(t._wrapper,"hidden",n?"":null)),s._toggle(i,!0),s.toggleElement(t._wrapper,n,o).then(function(){Me(t,s.clsOpen)===n&&(n||s._toggle(i,!1),t._wrapper=null,ye(i))})}})}}},ni={mixins:[Qn,ti],args:"animation",props:{close:String},data:{animation:[!0],selClose:".uk-alert-close",duration:150,hideProps:X({opacity:0},ti.data.hideProps)},events:[{name:"click",delegate:function(){return this.selClose},handler:function(t){t.preventDefault(),this.close()}}],methods:{close:function(){var t=this;this.toggleElement(this.$el).then(function(){return t.$destroy(!0)})}}};function ii(r){he(function(){var n;r.update(),Mt(window,"load resize",function(){return r.update(null,"resize")}),Mt(document,"loadedmetadata load",function(t){var e=t.target;return r.update(e,"resize")},!0),Mt(window,"scroll",function(t){if(!n){n=!0,xn.write(function(){return n=!1});var e=t.target;r.update(1!==e.nodeType?document.body:e,t.type)}},{passive:!0,capture:!0});var e,i=0;Mt(document,"animationstart",function(t){var e=t.target;(He(e,"animationName")||"").match(/^uk-.*(left|right)/)&&(i++,He(document.body,"overflowX","hidden"),setTimeout(function(){--i||He(document.body,"overflowX","")},R(He(e,"animationDuration"))+100))},!0),Mt(document,ne,function(t){if(e&&e(),jt(t)){var r=Wt(t),o="tagName"in t.target?t.target:t.target.parentNode;e=Dt(document,re,function(t){var e=Wt(t),n=e.x,i=e.y;(o&&n&&100<Math.abs(r.x-n)||i&&100<Math.abs(r.y-i))&&setTimeout(function(){Bt(o,"swipe"),Bt(o,"swipe"+function(t,e,n,i){return Math.abs(t-n)>=Math.abs(e-i)?0<t-n?"Left":"Right":0<e-i?"Up":"Down"}(r.x,r.y,n,i))})})}},{passive:!0})})}var ri,oi,si={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},computed:{inView:function(t){return"inview"===t.autoplay}},connected:function(){this.inView&&!rt(this.$el,"preload")&&(this.$el.preload="none"),this.player=new Mn(this.$el),this.automute&&this.player.mute()},update:{read:function(){return!!this.player&&{visible:Et(this.$el)&&"hidden"!==He(this.$el,"visibility"),inView:this.inView&&fn(this.$el)}},write:function(t){var e=t.visible,n=t.inView;!e||this.inView&&!n?this.player.pause():(!0===this.autoplay||this.inView&&n)&&this.player.play()},events:["resize","scroll"]}},ai={mixins:[Qn,si],props:{width:Number,height:Number},data:{automute:!0},update:{read:function(){var t=this.$el;if(!Et(t))return!1;var e=t.parentNode;return{height:e.offsetHeight,width:e.offsetWidth}},write:function(t){var e=t.height,n=t.width,i=this.$el,r=this.width||i.naturalWidth||i.videoWidth||i.clientWidth,o=this.height||i.naturalHeight||i.videoHeight||i.clientHeight;r&&o&&He(i,nt.cover({width:r,height:o},{width:n+(n%2?1:0),height:e+(e%2?1:0)}))},events:["resize"]}},hi={props:{pos:String,offset:null,flip:Boolean,clsPos:String},data:{pos:"bottom-"+(Zt?"right":"left"),flip:!0,offset:!1,clsPos:""},computed:{pos:function(t){var e=t.pos;return(e+(y(e,"-")?"":"-center")).split("-")},dir:function(){return this.pos[0]},align:function(){return this.pos[1]}},methods:{positionAt:function(t,e,n){var i;Ne(t,this.clsPos+"-(top|bottom|left|right)(-[a-z]+)?"),He(t,{top:"",left:""});var r=this.offset,o=this.getAxis();z(r)||(r=(i=Se(r))?en(i)["x"===o?"left":"top"]-en(e)["x"===o?"right":"bottom"]:0);var s=tn(t,e,"x"===o?dn(this.dir)+" "+this.align:this.align+" "+dn(this.dir),"x"===o?this.dir+" "+this.align:this.align+" "+this.dir,"x"===o?""+("left"===this.dir?-r:r):" "+("top"===this.dir?-r:r),null,this.flip,n).target,a=s.x,h=s.y;this.dir="x"===o?a:h,this.align="x"===o?h:a,Oe(t,this.clsPos+"-"+this.dir+"-"+this.align,!1===this.offset)},getAxis:function(){return"top"===this.dir||"bottom"===this.dir?"y":"x"}}},ci={mixins:[hi,ti],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryAlign:Boolean,delayShow:Number,delayHide:Number,clsDrop:String},data:{mode:["click","hover"],toggle:"- *",boundary:window,boundaryAlign:!1,delayShow:0,delayHide:800,clsDrop:!1,hoverIdle:200,animation:["uk-animation-fade"],cls:"uk-open"},computed:{boundary:function(t,e){return at(t.boundary,e)},clsDrop:function(t){return t.clsDrop||"uk-"+this.$options.name},clsPos:function(){return this.clsDrop}},created:function(){this.tracker=new Sn},connected:function(){Ae(this.$el,this.clsDrop);var t=this.$props.toggle;this.toggle=t&&this.$create("toggle",at(t,this.$el),{target:this.$el,mode:this.mode}),this.toggle||Bt(this.$el,"updatearia")},events:[{name:"click",delegate:function(){return"."+this.clsDrop+"-close"},handler:function(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate:function(){return'a[href^="#"]'},handler:function(t){var e=t.target.hash;e||t.preventDefault(),e&&_t(e,this.$el)||this.hide(!1)}},{name:"beforescroll",handler:function(){this.hide(!1)}},{name:"toggle",self:!0,handler:function(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(e,!1)}},{name:oe,filter:function(){return y(this.mode,"hover")},handler:function(t){jt(t)||(ri&&ri!==this&&ri.toggle&&y(ri.toggle.mode,"hover")&&!_t(t.target,ri.toggle.$el)&&!et({x:t.pageX,y:t.pageY},en(ri.$el))&&ri.hide(!1),t.preventDefault(),this.show(this.toggle))}},{name:"toggleshow",handler:function(t,e){e&&!y(e.target,this.$el)||(t.preventDefault(),this.show(e||this.toggle))}},{name:"togglehide "+se,handler:function(t,e){jt(t)||e&&!y(e.target,this.$el)||(t.preventDefault(),this.toggle&&y(this.toggle.mode,"hover")&&this.hide())}},{name:"beforeshow",self:!0,handler:function(){this.clearTimers(),Ze.cancel(this.$el),this.position()}},{name:"show",self:!0,handler:function(){this.tracker.init(),Bt(this.$el,"updatearia"),function(){if(oi)return;oi=!0,Mt(document,re,function(t){var e,n=t.target,i=t.defaultPrevented;if(!i)for(;ri&&ri!==e&&!_t(n,ri.$el)&&(!ri.toggle||!_t(n,ri.toggle.$el));)(e=ri).hide(!1)})}()}},{name:"beforehide",self:!0,handler:function(){this.clearTimers()}},{name:"hide",handler:function(t){var e=t.target;this.$el===e?(ri=this.isActive()?null:ri,Bt(this.$el,"updatearia"),this.tracker.cancel()):ri=null===ri&&_t(e,this.$el)&&this.isToggled()?this:ri}},{name:"updatearia",self:!0,handler:function(t,e){t.preventDefault(),this.updateAria(this.$el),(e||this.toggle)&&(it((e||this.toggle).$el,"aria-expanded",this.isToggled()?"true":"false"),Oe(this.toggle.$el,this.cls,this.isToggled()))}}],update:{write:function(){this.isToggled()&&!Ze.inProgress(this.$el)&&this.position()},events:["resize"]},methods:{show:function(e,n){var i=this;void 0===n&&(n=!0);function r(){return!i.isToggled()&&i.toggleElement(i.$el,!0)}function t(){if(i.toggle=e||i.toggle,i.clearTimers(),!i.isActive())if(n&&ri&&ri!==i&&ri.isDelaying)i.showTimer=setTimeout(i.show,10);else{if(i.isParentOf(ri)){if(!ri.hideTimer)return;ri.hide(!1)}else if(ri&&i.isChildOf(ri))ri.clearTimers();else if(ri&&!i.isChildOf(ri)&&!i.isParentOf(ri))for(var t;ri&&ri!==t&&!i.isChildOf(ri);)(t=ri).hide(!1);n&&i.delayShow?i.showTimer=setTimeout(r,i.delayShow):r(),ri=i}}e&&this.toggle&&e.$el!==this.toggle.$el?(Dt(this.$el,"hide",t),this.hide(!1)):t()},hide:function(t){var e=this;void 0===t&&(t=!0);function n(){return e.toggleNow(e.$el,!1)}this.clearTimers(),this.isDelaying=this.tracker.movesTo(this.$el),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,this.hoverIdle):t&&this.delayHide?this.hideTimer=setTimeout(n,this.delayHide):n()},clearTimers:function(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive:function(){return ri===this},isChildOf:function(t){return t&&t!==this&&_t(this.$el,t.$el)},isParentOf:function(t){return t&&t!==this&&_t(t.$el,this.$el)},position:function(){Ne(this.$el,this.clsDrop+"-(stack|boundary)"),He(this.$el,{top:"",left:"",display:"block"}),Oe(this.$el,this.clsDrop+"-boundary",this.boundaryAlign);var t=en(this.boundary),e=this.boundaryAlign?t:en(this.toggle.$el);if("justify"===this.align){var n="y"===this.getAxis()?"width":"height";He(this.$el,n,e[n])}else this.$el.offsetWidth>Math.max(t.right-e.left,e.right-t.left)&&Ae(this.$el,this.clsDrop+"-stack");this.positionAt(this.$el,this.boundaryAlign?this.boundary:this.toggle.$el,this.boundary),He(this.$el,"display","")}}};var ui={extends:ci},li={mixins:[Qn],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:function(t,e){return Se(At,e)},state:function(){return this.input.nextElementSibling},target:function(t,e){var n=t.target;return n&&(!0===n&&this.input.parentNode===e&&this.input.nextElementSibling||at(n,e))}},update:function(){var t=this.target,e=this.input;if(t){var n,i=Ct(t)?"value":"textContent",r=t[i],o=e.files&&e.files[0]?e.files[0].name:bt(e,"select")&&(n=Te("option",e).filter(function(t){return t.selected})[0])?n.textContent:e.value;r!==o&&(t[i]=o)}},events:{change:function(){this.$emit()}}},di={update:{read:function(t){var e=fn(this.$el);if(!e||t.isInView===e)return!1;t.isInView=e},write:function(){this.$el.src=this.$el.src},events:["scroll","resize"]}},fi={props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},update:{read:function(t){var e=this.$el.children;if(!e.length||!Et(this.$el))return t.rows=[[]];t.rows=pi(e),t.stacks=!t.rows.some(function(t){return 1<t.length})},write:function(t){var i=this;t.rows.forEach(function(t,n){return t.forEach(function(t,e){Oe(t,i.margin,0!==n),Oe(t,i.firstColumn,0===e)})})},events:["resize"]}};function pi(t){for(var e=[[]],n=0;n<t.length;n++){var i=t[n],r=mi(i);if(r.height)for(var o=e.length-1;0<=o;o--){var s=e[o];if(!s[0]){s.push(i);break}var a=void 0;if(a=s[0].offsetParent===i.offsetParent?mi(s[0]):(r=mi(i,!0),mi(s[0],!0)),r.top>=a.bottom-1){e.push([i]);break}if(r.bottom>a.top){if(r.left<a.left&&!Zt){s.unshift(i);break}s.push(i);break}if(0===o){e.unshift([i]);break}}}return e}function mi(t,e){var n;void 0===e&&(e=!1);var i=t.offsetTop,r=t.offsetLeft,o=t.offsetHeight;return e&&(i=(n=gn(t))[0],r=n[1]),{top:i,left:r,height:o,bottom:i+o}}var gi={extends:fi,mixins:[Qn],name:"grid",props:{masonry:Boolean,parallax:Number},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0},computed:{length:function(t,e){return e.children.length},parallax:function(t){var e=t.parallax;return e&&this.length?Math.abs(e):""}},connected:function(){this.masonry&&Ae(this.$el,"uk-flex-top uk-flex-wrap-top")},update:[{read:function(t){var r=t.rows;(this.masonry||this.parallax)&&(r=r.map(function(t){return G(t,"offsetLeft")}),Zt&&r.map(function(t){return t.reverse()}));var e=r.some(function(t){return t.some(Ue.inProgress)}),n=!1,i="";if(this.masonry&&this.length){var o=0;n=r.reduce(function(n,t,i){return n[i]=t.map(function(t,e){return 0===i?0:j(n[i-1][e])+(o-j(r[i-1][e]&&r[i-1][e].offsetHeight))}),o=t.reduce(function(t,e){return Math.max(t,e.offsetHeight)},0),n},[]),i=function(t){return Math.max.apply(Math,t.reduce(function(n,t){return t.forEach(function(t,e){return n[e]=(n[e]||0)+t.offsetHeight}),n},[]))}(r)+function(t,e){var n=V(t.children),i=n.filter(function(t){return Me(t,e)})[0];return j(i?He(i,"marginTop"):He(n[0],"paddingLeft"))}(this.$el,this.margin)*(r.length-1)}return{rows:r,translates:n,height:!e&&i}},write:function(t){var e=t.stacks,n=t.height;Oe(this.$el,this.clsStack,e),He(this.$el,"paddingBottom",this.parallax),!1!==n&&He(this.$el,"height",n)},events:["resize"]},{read:function(t){var e=t.height;return{scrolled:!!this.parallax&&pn(this.$el,e?e-on(this.$el):0)*this.parallax}},write:function(t){var e=t.rows,i=t.scrolled,r=t.translates;!1===i&&!r||e.forEach(function(t,n){return t.forEach(function(t,e){return He(t,"transform",i||r?"translateY("+((r&&-r[n][e])+(i?e%2?i:i/8:0))+"px)":"")})})},events:["scroll","resize"]}]};var vi=Jt?{data:{selMinHeight:!1,forceHeight:!1},computed:{elements:function(t,e){var n=t.selMinHeight;return n?Te(n,e):[e]}},update:[{read:function(){He(this.elements,"height","")},order:-5,events:["resize"]},{write:function(){var n=this;this.elements.forEach(function(t){var e=j(He(t,"minHeight"));e&&(n.forceHeight||Math.round(e+hn("height",t,"content-box"))>=t.offsetHeight)&&He(t,"height",e)})},order:5,events:["resize"]}]}:{},wi={mixins:[vi],args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0,forceHeight:!0},computed:{elements:function(t,e){return Te(t.target,e)}},update:{read:function(){return{rows:(this.row?pi(this.elements):[this.elements]).map(bi)}},write:function(t){t.rows.forEach(function(t){var n=t.heights;return t.elements.forEach(function(t,e){return He(t,"minHeight",n[e])})})},events:["resize"]}};function bi(t){var e;if(t.length<2)return{heights:[""],elements:t};var n=yi(t),i=n.heights,r=n.max,o=t.some(function(t){return t.style.minHeight}),s=t.some(function(t,e){return!t.style.minHeight&&i[e]<r});return o&&s&&(He(t,"minHeight",""),e=yi(t),i=e.heights,r=e.max),{heights:i=t.map(function(t,e){return i[e]===r&&j(t.style.minHeight).toFixed(2)!==r.toFixed(2)?"":r}),elements:t}}function yi(t){var e=t.map(function(t){return en(t).height-hn("height",t,"content-box")});return{heights:e,max:Math.max.apply(null,e)}}var xi={mixins:[vi],props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},update:{read:function(){var t="",e=hn("height",this.$el,"content-box");if(this.expand)t=on(window)-(ki(document.documentElement)-ki(this.$el))-e||"";else{if(t="calc(100vh",this.offsetTop){var n=en(this.$el).top;t+=n<on(window)/2?" - "+n+"px":""}!0===this.offsetBottom?t+=" - "+ki(this.$el.nextElementSibling)+"px":z(this.offsetBottom)?t+=" - "+this.offsetBottom+"vh":this.offsetBottom&&u(this.offsetBottom,"px")?t+=" - "+j(this.offsetBottom)+"px":D(this.offsetBottom)&&(t+=" - "+ki(at(this.offsetBottom,this.$el))+"px"),t+=(e?" - "+e+"px":"")+")"}return{minHeight:t}},write:function(t){var e=t.minHeight;He(this.$el,{minHeight:e}),this.minHeight&&j(He(this.$el,"minHeight"))<this.minHeight&&He(this.$el,"minHeight",this.minHeight)},events:["resize"]}};function ki(t){return t&&t.offsetHeight||0}var $i={args:"src",props:{id:Boolean,icon:String,src:String,style:String,width:Number,height:Number,ratio:Number,class:String,strokeAnimation:Boolean,attributes:"list"},data:{ratio:1,include:["style","class"],class:"",strokeAnimation:!1},beforeConnect:function(){var t,e=this;if(this.class+=" uk-svg",!this.icon&&y(this.src,"#")){var n=this.src.split("#");1<n.length&&(t=n,this.src=t[0],this.icon=t[1])}this.svg=this.getSvg().then(function(t){return e.applyAttributes(t),e.svgEl=function(t,e){{if(Tt(e)||"CANVAS"===e.tagName){it(e,"hidden",!0);var n=e.nextElementSibling;return Ai(t,n)?n:me(e,t)}var i=e.lastElementChild;return Ai(t,i)?i:fe(e,t)}}(t,e.$el)},Q)},disconnected:function(){var e=this;Tt(this.$el)&&it(this.$el,"hidden",null),this.svg&&this.svg.then(function(t){return(!e._connected||t!==e.svgEl)&&ve(t)},Q),this.svg=this.svgEl=null},update:{read:function(){return!!(this.strokeAnimation&&this.svgEl&&Et(this.svgEl))},write:function(){!function(t){var e=Ei(t);e&&t.style.setProperty("--uk-animation-stroke",e)}(this.svgEl)},type:["resize"]},methods:{getSvg:function(){var e=this;return function(n){if(Ii[n])return Ii[n];return Ii[n]=new Yt(function(e,t){n?w(n,"data:")?e(decodeURIComponent(n.split(",")[1])):Kt(n).then(function(t){return e(t.response)},function(){return t("SVG not found.")}):t()})}(this.src).then(function(t){return function(t,e){e&&y(t,"<symbol")&&(t=function(t,e){if(!Ti[t]){var n;for(Ti[t]={};n=Si.exec(t);)Ti[t][n[3]]='<svg xmlns="http://www.w3.org/2000/svg"'+n[1]+"svg>";Si.lastIndex=0}return Ti[t][e]}(t,e)||t);return(t=Se(t.substr(t.indexOf("<svg"))))&&t.hasChildNodes()&&t}(t,e.icon)||Yt.reject("SVG not found.")})},applyAttributes:function(n){var i=this;for(var t in this.$options.props)this[t]&&y(this.include,t)&&it(n,t,this[t]);for(var e in this.attributes){var r=this.attributes[e].split(":",2),o=r[0],s=r[1];it(n,o,s)}this.id||ot(n,"id");var a=["width","height"],h=[this.width,this.height];h.some(function(t){return t})||(h=a.map(function(t){return it(n,t)}));var c=it(n,"viewBox");c&&!h.some(function(t){return t})&&(h=c.split(" ").slice(2)),h.forEach(function(t,e){(t=(0|t)*i.ratio)&&it(n,a[e],t),t&&!h[1^e]&&ot(n,a[1^e])}),it(n,"data-svg",this.icon||this.src)}}},Ii={};var Si=/<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,Ti={};function Ei(t){return Math.ceil(Math.max.apply(Math,Te("[stroke]",t).map(function(t){return t.getTotalLength&&t.getTotalLength()||0}).concat([0])))}function Ai(t,e){return it(t,"data-svg")===it(e,"data-svg")}var Ci={},Ni={spinner:'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',totop:'<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',marker:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',"close-icon":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',"close-large":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',"navbar-toggle-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',"overlay-icon":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',"pagination-next":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',"pagination-previous":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',"search-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',"search-large":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',"search-navbar":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',"slidenav-next":'<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',"slidenav-next-large":'<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',"slidenav-previous":'<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',"slidenav-previous-large":'<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'},_i={install:function(r){r.icon.add=function(t,e){var n,i=D(t)?((n={})[t]=e,n):t;K(i,function(t,e){Ni[e]=t,delete Ci[e]}),r._initialized&&Ie(document.body,function(t){return K(r.getComponents(t),function(t){t.$options.isIcon&&t.icon in i&&t.$reset()})})}},extends:$i,args:"icon",props:["icon"],data:{include:[]},isIcon:!0,beforeConnect:function(){Ae(this.$el,"uk-icon")},methods:{getSvg:function(){var t=function(t){if(!Ni[t])return null;Ci[t]||(Ci[t]=Se(Ni[t].trim()));return Ci[t].cloneNode(!0)}(function(t){return Zt?U(U(t,"left","right"),"previous","next"):t}(this.icon));return t?Yt.resolve(t):Yt.reject("Icon not found.")}}},Mi={args:!1,extends:_i,data:function(t){return{icon:d(t.constructor.options.name)}},beforeConnect:function(){Ae(this.$el,this.$name)}},Oi={extends:Mi,beforeConnect:function(){Ae(this.$el,"uk-slidenav")},computed:{icon:function(t,e){var n=t.icon;return Me(e,"uk-slidenav-large")?n+"-large":n}}},Di={extends:Mi,computed:{icon:function(t,e){var n=t.icon;return Me(e,"uk-search-icon")&&kt(e,".uk-search-large").length?"search-large":kt(e,".uk-search-navbar").length?"search-navbar":n}}},Bi={extends:Mi,computed:{icon:function(){return"close-"+(Me(this.$el,"uk-close-large")?"large":"icon")}}},zi={extends:Mi,connected:function(){var e=this;this.svg.then(function(t){return 1!==e.ratio&&He(Se("circle",t),"strokeWidth",1/e.ratio)},Q)}};var Pi={args:"dataSrc",props:{dataSrc:String,dataSrcset:Boolean,sizes:String,width:Number,height:Number,offsetTop:String,offsetLeft:String,target:String},data:{dataSrc:"",dataSrcset:!1,sizes:!1,width:!1,height:!1,offsetTop:"50vh",offsetLeft:0,target:!1},computed:{cacheKey:function(t){var e=t.dataSrc;return this.$name+"."+e},width:function(t){var e=t.width,n=t.dataWidth;return e||n},height:function(t){var e=t.height,n=t.dataHeight;return e||n},sizes:function(t){var e=t.sizes,n=t.dataSizes;return e||n},isImg:function(t,e){return Yi(e)},target:{get:function(t){var e=t.target;return[this.$el].concat(ht(e,this.$el))},watch:function(){this.observe()}},offsetTop:function(t){return vn(t.offsetTop,"height")},offsetLeft:function(t){return vn(t.offsetLeft,"width")}},connected:function(){qi[this.cacheKey]?Hi(this.$el,qi[this.cacheKey]||this.dataSrc,this.dataSrcset,this.sizes):this.isImg&&this.width&&this.height&&Hi(this.$el,function(t,e,n){var i;n&&(i=nt.ratio({width:t,height:e},"width",vn(Fi(n))),t=i.width,e=i.height);return'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+e+'"></svg>'}(this.width,this.height,this.sizes)),this.observer=new Bn(this.load,{rootMargin:this.offsetTop+"px "+this.offsetLeft+"px"}),requestAnimationFrame(this.observe)},disconnected:function(){this.observer.disconnect()},update:{read:function(t){var e=this,n=t.image;if(n||"complete"!==document.readyState||this.load(this.observer.takeRecords()),this.isImg)return!1;n&&n.then(function(t){return t&&""!==t.currentSrc&&Hi(e.$el,Ri(t))})},write:function(t){if(this.dataSrcset&&1!==window.devicePixelRatio){var e=He(this.$el,"backgroundSize");!e.match(/^(auto\s?)+$/)&&j(e)!==t.bgSize||(t.bgSize=function(t,e){var n=vn(Fi(e)),i=(t.match(Vi)||[]).map(j).sort(function(t,e){return t-e});return i.filter(function(t){return n<=t})[0]||i.pop()||""}(this.dataSrcset,this.sizes),He(this.$el,"backgroundSize",t.bgSize+"px"))}},events:["resize"]},methods:{load:function(t){var e=this;t.some(function(t){return t.isIntersecting})&&(this._data.image=Gt(this.dataSrc,this.dataSrcset,this.sizes).then(function(t){return Hi(e.$el,Ri(t),t.srcset,t.sizes),qi[e.cacheKey]=Ri(t),t},Q),this.observer.disconnect())},observe:function(){var e=this;!this._data.image&&this._connected&&this.target.forEach(function(t){return e.observer.observe(t)})}}};function Hi(t,e,n,i){if(Yi(t))i&&(t.sizes=i),n&&(t.srcset=n),e&&(t.src=e);else if(e){!y(t.style.backgroundImage,e)&&(He(t,"backgroundImage","url("+It(e)+")"),Bt(t,zt("load",!1)))}}var Li=/\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;function Fi(t){var e,n;for(Li.lastIndex=0;e=Li.exec(t);)if(!e[1]||window.matchMedia(e[1]).matches){e=w(n=e[2],"calc")?n.substring(5,n.length-1).replace(ji,function(t){return vn(t)}).replace(/ /g,"").match(Wi).reduce(function(t,e){return t+ +e},0):n;break}return e||"100vw"}var ji=/\d+(?:\w+|%)/g,Wi=/[+-]?(\d+)/g;var Vi=/\s+\d+w\s*(?:,|$)/g;function Yi(t){return"IMG"===t.tagName}function Ri(t){return t.currentSrc||t.src}var qi,Ui="__test__";try{(qi=window.sessionStorage||{})[Ui]=1,delete qi[Ui]}catch(t){qi={}}var Xi={props:{media:Boolean},data:{media:!1},computed:{matchMedia:function(){var t=function(t){if(D(t))if("@"===t[0]){var e="breakpoint-"+t.substr(1);t=j(We(e))}else if(isNaN(t))return t;return!(!t||isNaN(t))&&"(min-width: "+t+"px)"}(this.media);return!t||window.matchMedia(t).matches}}};var Ki,Gi,Ji={mixins:[Qn,Xi],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill:function(t){return t.fill||We("leader-fill-content")}},connected:function(){var t;t=be(this.$el,'<span class="'+this.clsWrapper+'">'),this.wrapper=t[0]},disconnected:function(){ye(this.wrapper.childNodes)},update:{read:function(t){var e=t.changed,n=t.width,i=n;return{width:n=Math.floor(this.$el.offsetWidth/2),fill:this.fill,changed:e||i!==n,hide:!this.matchMedia}},write:function(t){Oe(this.wrapper,this.clsHide,t.hide),t.changed&&(t.changed=!1,it(this.wrapper,this.attrFill,new Array(t.width).join(t.fill)))},events:["resize"]}},Zi={props:{container:Boolean},data:{container:!0},computed:{container:function(t){var e=t.container;return!0===e&&this.$container||e&&Se(e)}}},Qi={mixins:[Qn,Zi,ti],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1},computed:{panel:function(t,e){return Se(t.selPanel,e)},transitionElement:function(){return this.panel},bgClose:function(t){return t.bgClose&&this.panel}},beforeDisconnect:function(){this.isToggled()&&this.toggleNow(this.$el,!1)},events:[{name:"click",delegate:function(){return this.selClose},handler:function(t){t.preventDefault(),this.hide()}},{name:"toggle",self:!0,handler:function(t){t.defaultPrevented||(t.preventDefault(),this.toggle())}},{name:"beforeshow",self:!0,handler:function(t){var n=Ki&&Ki!==this&&Ki;Ki=this,n?this.stack?this.prev=n:((Ki=n).isToggled()?n.hide().then(this.show):Dt(n.$el,"beforeshow hidden",this.show,!1,function(t){var e=t.target;return"hidden"===t.type&&e===n.$el}),t.preventDefault()):function(){if(Gi)return;Gi=[Mt(document,re,function(t){var e=t.target,n=t.defaultPrevented;!Ki||!Ki.bgClose||n||Ki.overlay&&!_t(e,Ki.$el)||_t(e,Ki.panel)||Ki.hide()}),Mt(document,"keydown",function(t){27===t.keyCode&&Ki&&Ki.escClose&&(t.preventDefault(),Ki.hide())})]}()}},{name:"show",self:!0,handler:function(){Me(document.documentElement,this.clsPage)||(this.scrollbarWidth=sn(window)-sn(document),He(document.body,"overflowY",this.scrollbarWidth&&this.overlay?"scroll":"")),Ae(document.documentElement,this.clsPage)}},{name:"hide",self:!0,handler:function(){Ki&&(Ki!==this||this.prev)||(Gi&&Gi.forEach(function(t){return t()}),Gi=null)}},{name:"hidden",self:!0,handler:function(){var t,e=this.prev;if(Ki=Ki&&Ki!==this&&Ki||e)for(;e;){if(e.clsPage===this.clsPage){t=!0;break}e=e.prev}else He(document.body,"overflowY","");t||Ce(document.documentElement,this.clsPage)}}],methods:{toggle:function(){return this.isToggled()?this.hide():this.show()},show:function(){var e=this;return this.isToggled()?Yt.resolve():this.container&&this.$el.parentNode!==this.container?(fe(this.container,this.$el),new Yt(function(t){return requestAnimationFrame(function(){return e.show().then(t)})})):this.toggleElement(this.$el,!0,tr(this))},hide:function(){return this.isToggled()?this.toggleElement(this.$el,!1,tr(this)):Yt.resolve()},getActive:function(){return Ki}}};function tr(t){var r=t.transitionElement,o=t._toggle;return function(n,i){return new Yt(function(t,e){return Dt(n,"show hide",function(){n._reject&&n._reject(),n._reject=e,o(n,i),R(He(r,"transitionDuration"))?Dt(r,"transitionend",t,!1,function(t){return t.target===r}):t()})})}}var er={install:function(a){a.modal.dialog=function(t,e){var i=a.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">'+t+"</div> </div> ",e);return i.show(),Mt(i.$el,"hidden",function(t){var e=t.target,n=t.currentTarget;e===n&&Yt.resolve(function(){return i.$destroy(!0)})}),i},a.modal.alert=function(e,n){return n=X({bgClose:!1,escClose:!1,labels:a.modal.labels},n),new Yt(function(t){return Mt(a.modal.dialog(' <div class="uk-modal-body">'+(D(e)?e:de(e))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>'+n.labels.ok+"</button> </div> ",n).$el,"hide",t)})},a.modal.confirm=function(r,o){return o=X({bgClose:!1,escClose:!0,labels:a.modal.labels},o),new Yt(function(e,t){var n=a.modal.dialog(' <form> <div class="uk-modal-body">'+(D(r)?r:de(r))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+o.labels.cancel+'</button> <button class="uk-button uk-button-primary" autofocus>'+o.labels.ok+"</button> </div> </form> ",o),i=!1;Mt(n.$el,"submit","form",function(t){t.preventDefault(),e(),i=!0,n.hide()}),Mt(n.$el,"hide",function(){i||t()})})},a.modal.prompt=function(t,o,s){return s=X({bgClose:!1,escClose:!0,labels:a.modal.labels},s),new Yt(function(e){var n=a.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>'+(D(t)?t:de(t))+'</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+s.labels.cancel+'</button> <button class="uk-button uk-button-primary">'+s.labels.ok+"</button> </div> </form> ",s),i=Se("input",n.$el);i.value=o;var r=!1;Mt(n.$el,"submit","form",function(t){t.preventDefault(),e(i.value),r=!0,n.hide()}),Mt(n.$el,"hide",function(){r||e(null)})})},a.modal.labels={ok:"Ok",cancel:"Cancel"}},mixins:[Qi],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler:function(){Me(this.panel,"uk-margin-auto-vertical")?Ae(this.$el,"uk-flex"):He(this.$el,"display","block"),on(this.$el)}},{name:"hidden",self:!0,handler:function(){He(this.$el,"display",""),Ce(this.$el,"uk-flex")}}]};var nr={extends:ei,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}},ir={mixins:[Qn,vi],props:{dropdown:String,mode:"list",align:String,offset:Number,boundary:Boolean,boundaryAlign:Boolean,clsDrop:String,delayShow:Number,delayHide:Number,dropbar:Boolean,dropbarMode:String,dropbarAnchor:Boolean,duration:Number},data:{dropdown:".uk-navbar-nav > li",align:Zt?"right":"left",clsDrop:"uk-navbar-dropdown",mode:void 0,offset:void 0,delayShow:void 0,delayHide:void 0,boundaryAlign:void 0,flip:"x",boundary:!0,dropbar:!1,dropbarMode:"slide",dropbarAnchor:!1,duration:200,forceHeight:!0,selMinHeight:".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"},computed:{boundary:function(t,e){var n=t.boundary,i=t.boundaryAlign;return!0===n||i?e:n},dropbarAnchor:function(t,e){return at(t.dropbarAnchor,e)},pos:function(t){return"bottom-"+t.align},dropdowns:function(t,e){return Te(t.dropdown+" ."+t.clsDrop,e)}},beforeConnect:function(){var t=this.$props.dropbar;this.dropbar=t&&(at(t,this.$el)||Se("+ .uk-navbar-dropbar",this.$el)||Se("<div></div>")),this.dropbar&&(Ae(this.dropbar,"uk-navbar-dropbar"),"slide"===this.dropbarMode&&Ae(this.dropbar,"uk-navbar-dropbar-slide"))},disconnected:function(){this.dropbar&&ve(this.dropbar)},update:function(){var e=this;this.$create("drop",this.dropdowns.filter(function(t){return!e.getDropdown(t)}),X({},this.$props,{boundary:this.boundary,pos:this.pos,offset:this.dropbar||this.offset}))},events:[{name:"mouseover",delegate:function(){return this.dropdown},handler:function(t){var e=t.current,n=this.getActive();n&&n.toggle&&!_t(n.toggle.$el,e)&&!n.tracker.movesTo(n.$el)&&n.hide(!1)}},{name:"mouseleave",el:function(){return this.dropbar},handler:function(){var t=this.getActive();t&&!this.dropdowns.some(function(t){return bt(t,":hover")})&&t.hide()}},{name:"beforeshow",capture:!0,filter:function(){return this.dropbar},handler:function(){this.dropbar.parentNode||me(this.dropbarAnchor||this.$el,this.dropbar)}},{name:"show",capture:!0,filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el,i=e.dir;this.clsDrop&&Ae(n,this.clsDrop+"-dropbar"),"bottom"===i&&this.transitionTo(n.offsetHeight+j(He(n,"marginTop"))+j(He(n,"marginBottom")),n)}},{name:"beforehide",filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el,i=this.getActive();bt(this.dropbar,":hover")&&i&&i.$el===n&&t.preventDefault()}},{name:"hide",filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el,i=this.getActive();(!i||i&&i.$el===n)&&this.transitionTo(0)}}],methods:{getActive:function(){var t=this.dropdowns.map(this.getDropdown).filter(function(t){return t&&t.isActive()})[0];return t&&y(t.mode,"hover")&&_t(t.toggle.$el,this.$el)&&t},transitionTo:function(t,e){var n=this,i=this.dropbar,r=Et(i)?on(i):0;return He(e=r<t&&e,"clip","rect(0,"+e.offsetWidth+"px,"+r+"px,0)"),on(i,r),Ue.cancel([e,i]),Yt.all([Ue.start(i,{height:t},this.duration),Ue.start(e,{clip:"rect(0,"+e.offsetWidth+"px,"+t+"px,0)"},this.duration)]).catch(Q).then(function(){He(e,{clip:""}),n.$update(i)})},getDropdown:function(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")}}},rr={mixins:[Qi],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close"},computed:{clsFlip:function(t){var e=t.flip,n=t.clsFlip;return e?n:""},clsOverlay:function(t){var e=t.overlay,n=t.clsOverlay;return e?n:""},clsMode:function(t){var e=t.mode;return t.clsMode+"-"+e},clsSidebarAnimation:function(t){var e=t.mode,n=t.clsSidebarAnimation;return"none"===e||"reveal"===e?"":n},clsContainerAnimation:function(t){var e=t.mode,n=t.clsContainerAnimation;return"push"!==e&&"reveal"!==e?"":n},transitionElement:function(t){return"reveal"===t.mode?this.panel.parentNode:this.panel}},events:[{name:"click",delegate:function(){return'a[href^="#"]'},handler:function(t){var e=t.current;e.hash&&Se(e.hash,document.body)&&this.hide()}},{name:"touchstart",passive:!0,el:function(){return this.panel},handler:function(t){var e=t.targetTouches;1===e.length&&(this.clientY=e[0].clientY)}},{name:"touchmove",self:!0,passive:!1,filter:function(){return this.overlay},handler:function(t){t.cancelable&&t.preventDefault()}},{name:"touchmove",passive:!1,el:function(){return this.panel},handler:function(t){if(1===t.targetTouches.length){var e=event.targetTouches[0].clientY-this.clientY,n=this.panel,i=n.scrollTop,r=n.scrollHeight,o=n.clientHeight;!(r<=o||0===i&&0<e||r-i<=o&&e<0)||t.cancelable&&t.preventDefault()}}},{name:"show",self:!0,handler:function(){"reveal"!==this.mode||Me(this.panel.parentNode,this.clsMode)||(we(this.panel,"<div>"),Ae(this.panel.parentNode,this.clsMode)),He(document.documentElement,"overflowY",this.overlay?"hidden":""),Ae(document.body,this.clsContainer,this.clsFlip),He(this.$el,"display","block"),Ae(this.$el,this.clsOverlay),Ae(this.panel,this.clsSidebarAnimation,"reveal"!==this.mode?this.clsMode:""),on(document.body),Ae(document.body,this.clsContainerAnimation),this.clsContainerAnimation&&(or().content+=",user-scalable=0")}},{name:"hide",self:!0,handler:function(){Ce(document.body,this.clsContainerAnimation);var t=this.getActive();("none"===this.mode||t&&t!==this&&t!==this.prev)&&Bt(this.panel,"transitionend")}},{name:"hidden",self:!0,handler:function(){this.clsContainerAnimation&&function(){var t=or();t.content=t.content.replace(/,user-scalable=0$/,"")}(),"reveal"===this.mode&&ye(this.panel),Ce(this.panel,this.clsSidebarAnimation,this.clsMode),Ce(this.$el,this.clsOverlay),He(this.$el,"display",""),Ce(document.body,this.clsContainer,this.clsFlip),He(document.documentElement,"overflowY","")}},{name:"swipeLeft swipeRight",handler:function(t){this.isToggled()&&u(t.type,"Left")^this.flip&&this.hide()}}]};function or(){return Se('meta[name="viewport"]',document.head)||fe(document.head,'<meta name="viewport">')}var sr={mixins:[Qn],props:{selContainer:String,selContent:String},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog"},computed:{container:function(t,e){return xt(e,t.selContainer)},content:function(t,e){return xt(e,t.selContent)}},connected:function(){He(this.$el,"minHeight",150)},update:{read:function(){return!(!this.content||!this.container)&&{current:j(He(this.$el,"maxHeight")),max:Math.max(150,on(this.container)-(en(this.content).height-on(this.$el)))}},write:function(t){var e=t.current,n=t.max;He(this.$el,"maxHeight",n),Math.round(e)!==Math.round(n)&&Bt(this.$el,"resize")},events:["resize"]}},ar={props:["width","height"],connected:function(){Ae(this.$el,"uk-responsive-width")},update:{read:function(){return!!(Et(this.$el)&&this.width&&this.height)&&{width:sn(this.$el.parentNode),height:this.height}},write:function(t){on(this.$el,nt.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},hr={props:{duration:Number,offset:Number},data:{duration:1e3,offset:0},methods:{scrollTo:function(e){var n=this;e=e&&Se(e)||document.body;var t=on(document),i=on(window),r=en(e).top-this.offset;if(t<r+i&&(r=t-i),Bt(this.$el,"beforescroll",[this,e])){var o=Date.now(),s=window.pageYOffset,a=function(){var t=s+(r-s)*function(t){return.5*(1-Math.cos(Math.PI*t))}(Z((Date.now()-o)/n.duration));mn(window,t),t!==r?requestAnimationFrame(a):Bt(n.$el,"scrolled",[n,e])};a()}}},events:{click:function(t){t.defaultPrevented||(t.preventDefault(),this.scrollTo(It(decodeURIComponent(this.$el.hash)).substr(1)))}}};var cr={args:"cls",props:{cls:String,target:String,hidden:Boolean,offsetTop:Number,offsetLeft:Number,repeat:Boolean,delay:Number},data:function(){return{cls:!1,target:!1,hidden:!0,offsetTop:0,offsetLeft:0,repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}},computed:{elements:function(t,e){var n=t.target;return n?Te(n,e):[e]}},update:[{write:function(){this.hidden&&He(Nt(this.elements,":not(."+this.inViewClass+")"),"visibility","hidden")}},{read:function(t){var n=this;t.update&&this.elements.forEach(function(t){var e=t._ukScrollspyState;e||(e={cls:st(t,"uk-scrollspy-class")||n.cls}),e.show=fn(t,n.offsetTop,n.offsetLeft),t._ukScrollspyState=e})},write:function(r){var o=this;if(!r.update)return this.$emit(),r.update=!0;this.elements.forEach(function(t){var n=t._ukScrollspyState,e=n.cls;if(!n.show||n.inview||n.queued){if(!n.show&&(n.inview||n.queued)&&o.repeat){if(n.abort&&n.abort(),!n.inview)return;He(t,"visibility",o.hidden?"hidden":""),Ce(t,o.inViewClass),Oe(t,e),Bt(t,"outview"),o.$update(t),n.inview=!1}}else{var i=function(){He(t,"visibility",""),Ae(t,o.inViewClass),Oe(t,e),Bt(t,"inview"),o.$update(t),n.inview=!0,n.abort&&n.abort()};o.delay?(n.queued=!0,r.promise=(r.promise||Yt.resolve()).then(function(){return!n.inview&&new Yt(function(t){var e=setTimeout(function(){i(),t()},r.promise||1===o.elements.length?o.delay:0);n.abort=function(){clearTimeout(e),t(),n.queued=!1}})})):i()}})},events:["scroll","resize"]}]},ur={props:{cls:String,closest:String,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:function(t,e){return Te('a[href^="#"]',e).filter(function(t){return t.hash})},elements:function(t){var e=t.closest;return xt(this.links,e||"*")},targets:function(){return Te(this.links.map(function(t){return It(t.hash).substr(1)}).join(","))}},update:[{read:function(){this.scroll&&this.$create("scroll",this.links,{offset:this.offset||0})}},{read:function(o){var s=this,a=window.pageYOffset+this.offset+1,h=on(document)-on(window)+this.offset;o.active=!1,this.targets.every(function(t,e){var n=en(t).top,i=e+1===s.targets.length;if(!s.overflow&&(0===e&&a<n||i&&n+t.offsetTop<a))return!1;if(!i&&en(s.targets[e+1]).top<=a)return!0;if(h<=a)for(var r=s.targets.length-1;e<r;r--)if(fn(s.targets[r])){t=s.targets[r];break}return!(o.active=Se(Nt(s.links,'[href="#'+t.id+'"]')))})},write:function(t){var e=t.active;this.links.forEach(function(t){return t.blur()}),Ce(this.elements,this.cls),e&&Bt(this.$el,"active",[e,Ae(this.closest?xt(e,this.closest):e,this.cls)])},events:["scroll","resize"]}]},lr={mixins:[Qn,Xi],props:{top:null,bottom:Boolean,offset:Number,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,widthElement:Boolean,showOnUp:Boolean,targetOffset:Number},data:{top:0,bottom:!1,offset:0,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",widthElement:!1,showOnUp:!1,targetOffset:!1},computed:{selTarget:function(t,e){var n=t.selTarget;return n&&Se(n,e)||e},widthElement:function(t,e){return at(t.widthElement,e)||this.placeholder},isActive:{get:function(){return Me(this.selTarget,this.clsActive)},set:function(t){t&&!this.isActive?(_e(this.selTarget,this.clsInactive,this.clsActive),Bt(this.$el,"active")):t||Me(this.selTarget,this.clsInactive)||(_e(this.selTarget,this.clsActive,this.clsInactive),Bt(this.$el,"inactive"))}}},connected:function(){this.placeholder=Se("+ .uk-sticky-placeholder",this.$el)||Se('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.isActive=!1},disconnected:function(){this.isFixed&&(this.hide(),Ce(this.selTarget,this.clsInactive)),ve(this.placeholder),this.placeholder=null,this.widthElement=null},events:[{name:"load hashchange popstate",el:window,handler:function(){var i=this;if(!1!==this.targetOffset&&location.hash&&0<window.pageYOffset){var r=Se(location.hash);r&&xn.read(function(){var t=en(r).top,e=en(i.$el).top,n=i.$el.offsetHeight;i.isFixed&&t<=e+n&&e<=t+r.offsetHeight&&mn(window,t-n-(z(i.targetOffset)?i.targetOffset:0)-i.offset)})}}}],update:[{read:function(t,e){var n=t.height;this.isActive&&"update"!==e&&(this.hide(),n=this.$el.offsetHeight,this.show()),n=this.isActive?n:this.$el.offsetHeight,this.topOffset=en(this.isFixed?this.placeholder:this.$el).top,this.bottomOffset=this.topOffset+n;var i=dr("bottom",this);return this.top=Math.max(j(dr("top",this)),this.topOffset)-this.offset,this.bottom=i&&i-n,this.inactive=!this.matchMedia,{lastScroll:!1,height:n,margins:He(this.$el,["marginTop","marginBottom","marginLeft","marginRight"])}},write:function(t){var e=t.height,n=t.margins,i=this.placeholder;He(i,X({height:e},n)),_t(i,document)||(me(this.$el,i),it(i,"hidden","")),this.isActive=this.isActive},events:["resize"]},{read:function(t){var e=t.scroll;return void 0===e&&(e=0),this.width=(Et(this.widthElement)?this.widthElement:this.$el).offsetWidth,this.scroll=window.pageYOffset,{dir:e<=this.scroll?"down":"up",scroll:this.scroll,visible:Et(this.$el),top:gn(this.placeholder)[0]}},write:function(t,e){var n=this,i=t.initTimestamp;void 0===i&&(i=0);var r=t.dir,o=t.lastDir,s=t.lastScroll,a=t.scroll,h=t.top,c=t.visible,u=performance.now();if(!((t.lastScroll=a)<0||a===s||!c||this.disabled||this.showOnUp&&"scroll"!==e||((300<u-i||r!==o)&&(t.initScroll=a,t.initTimestamp=u),t.lastDir=r,this.showOnUp&&Math.abs(t.initScroll-a)<=30&&Math.abs(s-a)<=10)))if(this.inactive||a<this.top||this.showOnUp&&(a<=this.top||"down"===r||"up"===r&&!this.isFixed&&a<=this.bottomOffset)){if(!this.isFixed)return void(Ze.inProgress(this.$el)&&a<h&&(Ze.cancel(this.$el),this.hide()));this.isFixed=!1,this.animation&&a>this.topOffset?(Ze.cancel(this.$el),Ze.out(this.$el,this.animation).then(function(){return n.hide()},Q)):this.hide()}else this.isFixed?this.update():this.animation?(Ze.cancel(this.$el),this.show(),Ze.in(this.$el,this.animation).catch(Q)):this.show()},events:["resize","scroll"]}],methods:{show:function(){this.isFixed=!0,this.update(),it(this.placeholder,"hidden",null)},hide:function(){this.isActive=!1,Ce(this.$el,this.clsFixed,this.clsBelow),He(this.$el,{position:"",top:"",width:""}),it(this.placeholder,"hidden","")},update:function(){var t=0!==this.top||this.scroll>this.top,e=Math.max(0,this.offset);this.bottom&&this.scroll>this.bottom-this.offset&&(e=this.bottom-this.scroll),He(this.$el,{position:"fixed",top:e+"px",width:this.width}),this.isActive=t,Oe(this.$el,this.clsBelow,this.scroll>this.bottomOffset),Ae(this.$el,this.clsFixed)}}};function dr(t,e){var n=e.$props,i=e.$el,r=e[t+"Offset"],o=n[t];if(o){if(z(o))return r+j(o);if(D(o)&&o.match(/^-?\d+vh$/))return on(window)*j(o)/100;var s=!0===o?i.parentNode:at(o,i);return s?en(s).top+s.offsetHeight:void 0}}var fr,pr={mixins:[ti],args:"connect",props:{connect:String,toggle:String,active:Number,swiping:Boolean},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",active:0,swiping:!0,cls:"uk-active",clsContainer:"uk-switcher",attrItem:"uk-switcher-item",queued:!0},computed:{connects:function(t,e){return ht(t.connect,e)},toggles:function(t,e){return Te(t.toggle,e)}},events:[{name:"click",delegate:function(){return this.toggle+":not(.uk-disabled)"},handler:function(e){e.preventDefault(),this.show(V(this.$el.children).filter(function(t){return _t(e.current,t)})[0])}},{name:"click",el:function(){return this.connects},delegate:function(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler:function(t){t.preventDefault(),this.show(st(t.current,this.attrItem))}},{name:"swipeRight swipeLeft",filter:function(){return this.swiping},el:function(){return this.connects},handler:function(t){var e=t.type;this.show(u(e,"Left")?"next":"previous")}}],update:function(){var e=this;this.connects.forEach(function(t){return e.updateAria(t.children)});var t=this.$el.children;this.show(Nt(t,"."+this.cls)[0]||t[this.active]||t[0])},methods:{index:function(){return!P(this.connects)&&ce(Nt(this.connects[0].children,"."+this.cls)[0])},show:function(t){for(var e,n,i=this,r=this.$el.children,o=r.length,s=this.index(),a=0<=s,h="previous"===t?-1:1,c=ue(t,r,s),u=0;u<o;u++,c=(c+h+o)%o)if(!bt(this.toggles[c],".uk-disabled *, .uk-disabled, [disabled]")){e=this.toggles[c],n=r[c];break}!n||0<=s&&Me(n,this.cls)||s===c||(Ce(r,this.cls),Ae(n,this.cls),it(this.toggles,"aria-expanded",!1),it(e,"aria-expanded",!0),this.connects.forEach(function(t){a?i.toggleElement([t.children[s],t.children[c]]):i.toggleNow(t.children[c])}))}}},mr={mixins:[Qn],extends:pr,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item"},connected:function(){var t=Me(this.$el,"uk-tab-left")?"uk-tab-left":!!Me(this.$el,"uk-tab-right")&&"uk-tab-right";t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}},gr={mixins:[Xi,ti],args:"target",props:{href:String,target:null,mode:"list"},data:{href:!1,target:!1,mode:"click",queued:!0},computed:{target:function(t,e){var n=t.href,i=t.target;return(i=ht(i||n,e)).length&&i||[e]}},connected:function(){Bt(this.target,"updatearia",[this])},events:[{name:oe+" "+se,filter:function(){return y(this.mode,"hover")},handler:function(t){jt(t)||this.toggle("toggle"+(t.type===oe?"show":"hide"))}},{name:"click",filter:function(){return y(this.mode,"click")||ee&&y(this.mode,"hover")},handler:function(t){var e;(xt(t.target,'a[href="#"], a[href=""]')||(e=xt(t.target,"a[href]"))&&(this.cls||!Et(this.target)||e.hash&&bt(this.target,e.hash)))&&t.preventDefault(),this.toggle()}}],update:{read:function(){return!(!y(this.mode,"media")||!this.media)&&{match:this.matchMedia}},write:function(t){var e=t.match,n=this.isToggled(this.target);(e?!n:n)&&this.toggle()},events:["resize"]},methods:{toggle:function(t){Bt(this.target,t||"toggle",[this])&&this.toggleElement(this.target)}}};Pn.version="3.1.5",(fr=Pn).component("accordion",ei),fr.component("alert",ni),fr.component("cover",ai),fr.component("drop",ci),fr.component("dropdown",ui),fr.component("formCustom",li),fr.component("gif",di),fr.component("grid",gi),fr.component("heightMatch",wi),fr.component("heightViewport",xi),fr.component("icon",_i),fr.component("img",Pi),fr.component("leader",Ji),fr.component("margin",fi),fr.component("modal",er),fr.component("nav",nr),fr.component("navbar",ir),fr.component("offcanvas",rr),fr.component("overflowAuto",sr),fr.component("responsive",ar),fr.component("scroll",hr),fr.component("scrollspy",cr),fr.component("scrollspyNav",ur),fr.component("sticky",lr),fr.component("svg",$i),fr.component("switcher",pr),fr.component("tab",mr),fr.component("toggle",gr),fr.component("video",si),fr.component("close",Bi),fr.component("marker",Mi),fr.component("navbarToggleIcon",Mi),fr.component("overlayIcon",Mi),fr.component("paginationNext",Mi),fr.component("paginationPrevious",Mi),fr.component("searchIcon",Di),fr.component("slidenavNext",Oi),fr.component("slidenavPrevious",Oi),fr.component("spinner",zi),fr.component("totop",Mi),fr.use(ii);var vr={mixins:[Qn],props:{date:String,clsWrapper:String},data:{date:"",clsWrapper:".uk-countdown-%unit%"},computed:{date:function(t){var e=t.date;return Date.parse(e)},days:function(t,e){return Se(t.clsWrapper.replace("%unit%","days"),e)},hours:function(t,e){return Se(t.clsWrapper.replace("%unit%","hours"),e)},minutes:function(t,e){return Se(t.clsWrapper.replace("%unit%","minutes"),e)},seconds:function(t,e){return Se(t.clsWrapper.replace("%unit%","seconds"),e)},units:function(){var e=this;return["days","hours","minutes","seconds"].filter(function(t){return e[t]})}},connected:function(){this.start()},disconnected:function(){var e=this;this.stop(),this.units.forEach(function(t){return le(e[t])})},events:[{name:"visibilitychange",el:document,handler:function(){document.hidden?this.stop():this.start()}}],update:{write:function(){var i=this,r=function(t){var e=t-Date.now();return{total:e,seconds:e/1e3%60,minutes:e/1e3/60%60,hours:e/1e3/60/60%24,days:e/1e3/60/60/24}}(this.date);r.total<=0&&(this.stop(),r.days=r.hours=r.minutes=r.seconds=0),this.units.forEach(function(t){var e=String(Math.floor(r[t]));e=e.length<2?"0"+e:e;var n=i[t];n.textContent!==e&&((e=e.split("")).length!==n.children.length&&de(n,e.map(function(){return"<span></span>"}).join("")),e.forEach(function(t,e){return n.children[e].textContent=t}))})}},methods:{start:function(){var t=this;this.stop(),this.date&&this.units.length&&(this.$emit(),this.timer=setInterval(function(){return t.$emit()},1e3))},stop:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}}};var wr,br="uk-animation-target",yr={props:{animation:Number},data:{animation:150},computed:{target:function(){return this.$el}},methods:{animate:function(t){var i=this;!function(){if(wr)return;(wr=fe(document.head,"<style>").sheet).insertRule("."+br+" > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }",0)}();var r=V(this.target.children),o=r.map(function(t){return xr(t,!0)}),e=on(this.target),n=window.pageYOffset;t(),Ue.cancel(this.target),r.forEach(Ue.cancel),kr(this.target),this.$update(this.target),xn.flush();var s=on(this.target),a=(r=r.concat(V(this.target.children).filter(function(t){return!y(r,t)}))).map(function(t,e){return!!(t.parentNode&&e in o)&&(o[e]?Et(t)?$r(t):{opacity:0}:{opacity:Et(t)?1:0})});return o=a.map(function(t,e){var n=r[e].parentNode===i.target&&(o[e]||xr(r[e]));if(n)if(t){if(!("opacity"in t)){n.opacity%1?t.opacity=1:delete n.opacity}}else delete n.opacity;return n}),Ae(this.target,br),r.forEach(function(t,e){return o[e]&&He(t,o[e])}),He(this.target,"height",e),mn(window,n),Yt.all(r.map(function(t,e){return o[e]&&a[e]?Ue.start(t,a[e],i.animation,"ease"):Yt.resolve()}).concat(Ue.start(this.target,{height:s},this.animation,"ease"))).then(function(){r.forEach(function(t,e){return He(t,{display:0===a[e].opacity?"none":"",zIndex:""})}),kr(i.target),i.$update(i.target),xn.flush()},Q)}}};function xr(t,e){var n=He(t,"zIndex");return!!Et(t)&&X({display:"",opacity:e?He(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===n?ce(t):n},$r(t))}function kr(t){He(t.children,{height:"",left:"",opacity:"",pointerEvents:"",position:"",top:"",width:""}),Ce(t,br),He(t,"height","")}function $r(t){var e=t.getBoundingClientRect(),n=e.height,i=e.width,r=rn(t),o=r.top,s=r.left;return{top:o+=j(He(t,"marginTop")),left:s,height:n,width:i}}var Ir={mixins:[yr],args:"target",props:{target:Boolean,selActive:Boolean},data:{target:null,selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",animation:250},computed:{toggles:{get:function(t,e){t.attrItem;return Te("["+this.attrItem+"],[data-"+this.attrItem+"]",e)},watch:function(){this.updateState()}},target:function(t,e){return Se(t.target,e)},children:{get:function(){return V(this.target.children)},watch:function(t,e){!function(t,e){return t.length===e.length&&t.every(function(t){return~e.indexOf(t)})}(t,e)&&this.updateState()}}},events:[{name:"click",delegate:function(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler:function(t){t.preventDefault(),this.apply(t.current)}}],connected:function(){var e=this;if(this.updateState(),!1!==this.selActive){var n=Te(this.selActive,this.$el);this.toggles.forEach(function(t){return Oe(t,e.cls,y(n,t))})}},methods:{apply:function(t){this.setState(Tr(t,this.attrItem,this.getState()))},getState:function(){var n=this;return this.toggles.filter(function(t){return Me(t,n.cls)}).reduce(function(t,e){return Tr(e,n.attrItem,t)},{filter:{"":""},sort:[]})},setState:function(o,t){var s=this;void 0===t&&(t=!0),o=X({filter:{"":""},sort:[]},o),Bt(this.$el,"beforeFilter",[this,o]);var a=this.children;this.toggles.forEach(function(t){return Oe(t,s.cls,!!function(t,e,n){var i=n.filter;void 0===i&&(i={"":""});var r=n.sort,o=r[0],s=r[1],a=Sr(t,e),h=a.filter;void 0===h&&(h="");var c=a.group;void 0===c&&(c="");var u=a.sort,l=a.order;void 0===l&&(l="asc");return H(u)?c in i&&h===i[c]||!h&&c&&!(c in i)&&!i[""]:o===u&&s===l}(t,s.attrItem,o))});function e(){var e=function(t){var e=t.filter,n="";return K(e,function(t){return n+=t||""}),n}(o);a.forEach(function(t){return He(t,"display",e&&!bt(t,e)?"none":"")});var t=o.sort,n=t[0],i=t[1];if(n){var r=function(t,n,i){return X([],t).sort(function(t,e){return st(t,n).localeCompare(st(e,n),void 0,{numeric:!0})*("asc"===i||-1)})}(a,n,i);q(r,a)||r.forEach(function(t){return fe(s.target,t)})}}t?this.animate(e).then(function(){return Bt(s.$el,"afterFilter",[s])}):(e(),Bt(this.$el,"afterFilter",[this]))},updateState:function(){var t=this;xn.write(function(){return t.setState(t.getState(),!1)})}}};function Sr(t,e){return _n(st(t,e),["filter"])}function Tr(t,e,n){var i=Sr(t,e),r=i.filter,o=i.group,s=i.sort,a=i.order;return void 0===a&&(a="asc"),(r||H(s))&&(o?r?(delete n.filter[""],n.filter[o]=r):(delete n.filter[o],(P(n.filter)||""in n.filter)&&(n.filter={"":r||""})):n.filter={"":r||""}),H(s)||(n.sort=[s,a]),n}var Er={slide:{show:function(t){return[{transform:Cr(-100*t)},{transform:Cr()}]},percent:function(t){return Ar(t)},translate:function(t,e){return[{transform:Cr(-100*e*t)},{transform:Cr(100*e*(1-t))}]}}};function Ar(t){return Math.abs(He(t,"transform").split(",")[4]/t.offsetWidth)||0}function Cr(t,e){return void 0===t&&(t=0),void 0===e&&(e="%"),"translateX("+t+(t?e:"")+")"}function Nr(t){return"scale3d("+t+", "+t+", 1)"}var _r=X({},Er,{fade:{show:function(){return[{opacity:0},{opacity:1}]},percent:function(t){return 1-He(t,"opacity")},translate:function(t){return[{opacity:1-t},{opacity:t}]}},scale:{show:function(){return[{opacity:0,transform:Nr(.8)},{opacity:1,transform:Nr(1)}]},percent:function(t){return 1-He(t,"opacity")},translate:function(t){return[{opacity:1-t,transform:Nr(1-.2*t)},{opacity:t,transform:Nr(.8+.2*t)}]}}});function Mr(t,e,n){Bt(t,zt(e,!1,!1,n))}var Or={mixins:[{props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected:function(){this.autoplay&&this.startAutoplay()},disconnected:function(){this.stopAutoplay()},update:function(){it(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:document,filter:function(){return this.autoplay},handler:function(){document.hidden?this.stopAutoplay():this.startAutoplay()}},{name:"mouseenter",filter:function(){return this.autoplay&&this.pauseOnHover},handler:function(){this.isHovering=!0}},{name:"mouseleave",filter:function(){return this.autoplay&&this.pauseOnHover},handler:function(){this.isHovering=!1}}],methods:{startAutoplay:function(){var t=this;this.stopAutoplay(),this.interval=setInterval(function(){return!_t(document.activeElement,t.$el)&&!t.isHovering&&!t.stack.length&&t.show("next")},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)}}},{props:{draggable:Boolean},data:{draggable:!0,threshold:10},created:function(){var i=this;["start","move","end"].forEach(function(t){var n=i[t];i[t]=function(t){var e=Wt(t).x*(Zt?-1:1);i.prevPos=e!==i.pos?i.pos:i.prevPos,i.pos=e,n(t)}})},events:[{name:ne,delegate:function(){return this.selSlides},handler:function(t){!this.draggable||!jt(t)&&function(t){return!t.children.length&&t.childNodes.length}(t.target)||0<t.button||this.length<2||this.start(t)}},{name:"touchmove",passive:!1,handler:"move",delegate:function(){return this.selSlides}},{name:"dragstart",handler:function(t){t.preventDefault()}}],methods:{start:function(){var t=this;this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index;var e="touchmove"!=ie?Mt(document,ie,this.move,{passive:!1}):Q;this.unbindMove=function(){e(),t.unbindMove=null},Mt(window,"scroll",this.unbindMove),Mt(document,re,this.end,!0),He(this.list,"userSelect","none")},move:function(t){var e=this;if(this.unbindMove){var n=this.pos-this.drag;if(!(0==n||this.prevPos===this.pos||!this.dragging&&Math.abs(n)<this.threshold)){He(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=n<0?1:-1;for(var i=this.slides,r=this.prevIndex,o=Math.abs(n),s=this.getIndex(r+this.dir,r),a=this._getDistance(r,s)||i[r].offsetWidth;s!==r&&a<o;)this.drag-=a*this.dir,r=s,o-=a,s=this.getIndex(r+this.dir,r),a=this._getDistance(r,s)||i[r].offsetWidth;this.percent=o/a;var h,c=i[r],u=i[s],l=this.index!==s,d=r===s;[this.index,this.prevIndex].filter(function(t){return!y([s,r],t)}).forEach(function(t){Bt(i[t],"itemhidden",[e]),d&&(h=!0,e.prevIndex=r)}),(this.index===r&&this.prevIndex!==r||h)&&Bt(i[this.index],"itemshown",[this]),l&&(this.prevIndex=r,this.index=s,d||Bt(c,"beforeitemhide",[this]),Bt(u,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),c,!d&&u),l&&(d||Bt(c,"itemhide",[this]),Bt(u,"itemshow",[this]))}}},end:function(){if(Ot(window,"scroll",this.unbindMove),this.unbindMove&&this.unbindMove(),Ot(document,re,this.end,!0),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null;else{var t=(Zt?this.dir*(Zt?1:-1):this.dir)<0==this.prevPos>this.pos;this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(0<this.dir&&!t||this.dir<0&&t?"next":"previous",!0)}He(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},{data:{selNav:!1},computed:{nav:function(t,e){return Se(t.selNav,e)},selNavItem:function(t){var e=t.attrItem;return"["+e+"],[data-"+e+"]"},navItems:function(t,e){return Te(this.selNavItem,e)}},update:{write:function(){var n=this;this.nav&&this.length!==this.nav.children.length&&de(this.nav,this.slides.map(function(t,e){return"<li "+n.attrItem+'="'+e+'"><a href="#"></a></li>'}).join("")),Oe(Te(this.selNavItem,this.$el).concat(this.nav),"uk-hidden",!this.maxIndex),this.updateNav()},events:["resize"]},events:[{name:"click",delegate:function(){return this.selNavItem},handler:function(t){t.preventDefault(),this.show(st(t.current,this.attrItem))}},{name:"itemshow",handler:"updateNav"}],methods:{updateNav:function(){var n=this,i=this.getValidIndex();this.navItems.forEach(function(t){var e=st(t,n.attrItem);Oe(t,n.clsActive,F(e)===i),Oe(t,"uk-invisible",n.finite&&("previous"===e&&0===i||"next"===e&&i>=n.maxIndex))})}}}],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number},data:function(){return{easing:"ease",finite:!1,velocity:1,index:0,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}},computed:{duration:function(t,e){var n=t.velocity;return Dr(e.offsetWidth/n)},length:function(){return this.slides.length},list:function(t,e){return Se(t.selList,e)},maxIndex:function(){return this.length-1},selSlides:function(t){return t.selList+" > *"},slides:function(){return V(this.list.children)}},events:{itemshown:function(){this.$update(this.list)}},methods:{show:function(t,e){var n=this;if(void 0===e&&(e=!1),!this.dragging&&this.length){var i=this.stack,r=e?0:i.length,o=function(){i.splice(r,1),i.length&&n.show(i.shift(),!0)};if(i[e?"unshift":"push"](t),!e&&1<i.length)2===i.length&&this._transitioner.forward(Math.min(this.duration,200));else{var s=this.index,a=Me(this.slides,this.clsActive)&&this.slides[s],h=this.getIndex(t,this.index),c=this.slides[h];if(a!==c){if(this.dir=function(t,e){return"next"===t?1:"previous"===t?-1:t<e?-1:1}(t,s),this.prevIndex=s,this.index=h,a&&Bt(a,"beforeitemhide",[this]),!Bt(c,"beforeitemshow",[this,a]))return this.index=this.prevIndex,void o();var u=this._show(a,c,e).then(function(){return a&&Bt(a,"itemhidden",[n]),Bt(c,"itemshown",[n]),new Yt(function(t){xn.write(function(){i.shift(),i.length?n.show(i.shift(),!0):n._transitioner=null,t()})})});return a&&Bt(a,"itemhide",[this]),Bt(c,"itemshow",[this]),u}o()}}},getIndex:function(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.index),Z(ue(t,this.slides,e,this.finite),0,this.maxIndex)},getValidIndex:function(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),this.getIndex(t,e)},_show:function(t,e,n){if(this._transitioner=this._getTransitioner(t,e,this.dir,X({easing:n?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing},this.transitionOptions)),!n&&!t)return this._transitioner.translate(1),Yt.resolve();var i=this.stack.length;return this._transitioner[1<i?"forward":"show"](1<i?Math.min(this.duration,75+75/(i-1)):this.duration,this.percent)},_getDistance:function(t,e){return new this._getTransitioner(t,t!==e&&e).getDistance()},_translate:function(t,e,n){void 0===e&&(e=this.prevIndex),void 0===n&&(n=this.index);var i=this._getTransitioner(e!==n&&e,n);return i.translate(t),i},_getTransitioner:function(t,e,n,i){return void 0===t&&(t=this.prevIndex),void 0===e&&(e=this.index),void 0===n&&(n=this.dir||1),void 0===i&&(i=this.transitionOptions),new this.Transitioner(B(t)?this.slides[t]:t,B(e)?this.slides[e]:e,n*(Zt?-1:1),i)}}};function Dr(t){return.5*t+300}var Br={mixins:[Or],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:Er,Transitioner:function(o,s,a,t){var e=t.animation,h=t.easing,n=e.percent,i=e.translate,r=e.show;void 0===r&&(r=Q);var c=r(a),u=new Vt;return{dir:a,show:function(t,e,n){var i=this;void 0===e&&(e=0);var r=n?"linear":h;return t-=Math.round(t*Z(e,-1,1)),this.translate(e),Mr(s,"itemin",{percent:e,duration:t,timing:r,dir:a}),Mr(o,"itemout",{percent:1-e,duration:t,timing:r,dir:a}),Yt.all([Ue.start(s,c[1],t,r),Ue.start(o,c[0],t,r)]).then(function(){i.reset(),u.resolve()},Q),u.promise},stop:function(){return Ue.stop([s,o])},cancel:function(){Ue.cancel([s,o])},reset:function(){for(var t in c[0])He([s,o],t,"")},forward:function(t,e){return void 0===e&&(e=this.percent()),Ue.cancel([s,o]),this.show(t,e,!0)},translate:function(t){this.reset();var e=i(t,a);He(s,e[1]),He(o,e[0]),Mr(s,"itemtranslatein",{percent:t,dir:a}),Mr(o,"itemtranslateout",{percent:1-t,dir:a})},percent:function(){return n(o||s,s,a)},getDistance:function(){return o&&o.offsetWidth}}}},computed:{animation:function(t){var e=t.animation,n=t.Animations;return X(e in n?n[e]:n.slide,{name:e})},transitionOptions:function(){return{animation:this.animation}}},events:{"itemshow itemhide itemshown itemhidden":function(t){var e=t.target;this.$update(e)},itemshow:function(){B(this.prevIndex)&&xn.flush()},beforeitemshow:function(t){Ae(t.target,this.clsActive)},itemshown:function(t){Ae(t.target,this.clsActivated)},itemhidden:function(t){Ce(t.target,this.clsActive,this.clsActivated)}}},zr={mixins:[Zi,Qi,ti,Br],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:function(){return{preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",pauseOnHover:!1,velocity:2,Animations:_r,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}},created:function(){var t=this;this.$mount(fe(this.container,this.template)),this.caption=Se(".uk-lightbox-caption",this.$el),this.items.forEach(function(){return fe(t.list,"<li></li>")})},events:[{name:ie+" "+ne+" keydown",handler:"showControls"},{name:"click",self:!0,delegate:function(){return this.selSlides},handler:function(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler:function(){this.showControls()}},{name:"hide",self:!0,handler:function(){this.hideControls(),Ce(this.slides,this.clsActive),Ue.stop(this.slides)}},{name:"hidden",self:!0,handler:function(){this.$destroy(!0)}},{name:"keyup",el:document,handler:function(t){if(this.isToggled(this.$el))switch(t.keyCode){case 37:this.show("previous");break;case 39:this.show("next")}}},{name:"beforeitemshow",handler:function(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleNow(this.$el,!0),this.animation=_r.scale,Ce(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler:function(t){var e=ce(t.target),n=this.getItem(e).caption;He(this.caption,"display",n?"":"none"),de(this.caption,n);for(var i=0;i<=this.preload;i++)this.loadItem(this.getIndex(e+i)),this.loadItem(this.getIndex(e-i))}},{name:"itemshown",handler:function(){this.draggable=this.$props.draggable}},{name:"itemload",handler:function(t,r){var o,s=this,e=r.source,n=r.type,i=r.alt;if(this.setItem(r,"<span uk-spinner></span>"),e)if("image"===n||e.match(/\.(jp(e)?g|png|gif|svg|webp)($|\?)/i))Gt(e).then(function(t){return s.setItem(r,'<img width="'+t.width+'" height="'+t.height+'" src="'+e+'" alt="'+(i||"")+'">')},function(){return s.setError(r)});else if("video"===n||e.match(/\.(mp4|webm|ogv)($|\?)/i)){var a=Se("<video controls playsinline"+(r.poster?' poster="'+r.poster+'"':"")+' uk-video="'+this.videoAutoplay+'"></video>');it(a,"src",e),Dt(a,"error loadedmetadata",function(t){"error"===t?s.setError(r):(it(a,{width:a.videoWidth,height:a.videoHeight}),s.setItem(r,a))})}else if("iframe"===n||e.match(/\.(html|php)($|\?)/i))this.setItem(r,'<iframe class="uk-lightbox-iframe" src="'+e+'" frameborder="0" allowfullscreen></iframe>');else if(o=e.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/)||e.match(/()youtu\.be\/(.*)/)){var h=o[2],c=function(t,e){return void 0===t&&(t=640),void 0===e&&(e=450),s.setItem(r,Pr("https://www.youtube"+(o[1]||"")+".com/embed/"+h,t,e,s.videoAutoplay))};Gt("https://img.youtube.com/vi/"+h+"/maxresdefault.jpg").then(function(t){var e=t.width,n=t.height;120===e&&90===n?Gt("https://img.youtube.com/vi/"+h+"/0.jpg").then(function(t){var e=t.width,n=t.height;return c(e,n)},c):c(e,n)},c)}else(o=e.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/))&&Kt("https://vimeo.com/api/oembed.json?maxwidth=1920&url="+encodeURI(e),{responseType:"json",withCredentials:!1}).then(function(t){var e=t.response,n=e.height,i=e.width;return s.setItem(r,Pr("https://player.vimeo.com/video/"+o[2],i,n,s.videoAutoplay))},function(){return s.setError(r)})}}],methods:{loadItem:function(t){void 0===t&&(t=this.index);var e=this.getItem(t);e.content||Bt(this.$el,"itemload",[e])},getItem:function(t){return void 0===t&&(t=this.index),this.items[t]||{}},setItem:function(t,e){X(t,{content:e});var n=de(this.slides[this.items.indexOf(t)],e);Bt(this.$el,"itemloaded",[this,n]),this.$update(n)},setError:function(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls:function(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),Ae(this.$el,"uk-active","uk-transition-active")},hideControls:function(){Ce(this.$el,"uk-active","uk-transition-active")}}};function Pr(t,e,n,i){return'<iframe src="'+t+'" width="'+e+'" height="'+n+'" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: '+i+'" uk-responsive></iframe>'}var Hr,Lr={install:function(t,e){t.lightboxPanel||t.component("lightboxPanel",zr);X(e.props,t.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles:{get:function(t,e){return Te(t.toggle,e)},watch:function(){this.hide()}},items:function(){return J(this.toggles.map(Fr),"source")}},disconnected:function(){this.hide()},events:[{name:"click",delegate:function(){return this.toggle+":not(.uk-disabled)"},handler:function(t){t.preventDefault();var e=st(t.current,"href");this.show(k(this.items,function(t){return t.source===e}))}}],methods:{show:function(t){var e=this;return this.panel=this.panel||this.$create("lightboxPanel",X({},this.$props,{items:this.items})),Mt(this.panel.$el,"hidden",function(){return e.panel=!1}),this.panel.show(t)},hide:function(){return this.panel&&this.panel.hide()}}};function Fr(n){return["href","caption","type","poster","alt"].reduce(function(t,e){return t["href"===e?"source":e]=st(n,e),t},{})}var jr={},Wr={functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:null,pos:"top-center",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:function(r){r.notification.closeAll=function(n,i){Ie(document.body,function(t){var e=r.getComponent(t,"notification");!e||n&&n!==e.group||e.close(i)})}},computed:{marginProp:function(t){return"margin"+(w(t.pos,"top")?"Top":"Bottom")},startProps:function(){var t;return(t={opacity:0})[this.marginProp]=-this.$el.offsetHeight,t}},created:function(){jr[this.pos]||(jr[this.pos]=fe(this.$container,'<div class="uk-notification uk-notification-'+this.pos+'"></div>'));var t=He(jr[this.pos],"display","block");this.$mount(fe(t,'<div class="'+this.clsMsg+(this.status?" "+this.clsMsg+"-"+this.status:"")+'"> <a href="#" class="'+this.clsClose+'" data-uk-close></a> <div>'+this.message+"</div> </div>"))},connected:function(){var t,e=this,n=j(He(this.$el,this.marginProp));Ue.start(He(this.$el,this.startProps),((t={opacity:1})[this.marginProp]=n,t)).then(function(){e.timeout&&(e.timer=setTimeout(e.close,e.timeout))})},events:(Hr={click:function(t){xt(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()}},Hr[oe]=function(){this.timer&&clearTimeout(this.timer)},Hr[se]=function(){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},Hr),methods:{close:function(t){function e(){Bt(n.$el,"close",[n]),ve(n.$el),jr[n.pos].children.length||He(jr[n.pos],"display","none")}var n=this;this.timer&&clearTimeout(this.timer),t?e():Ue.start(this.$el,this.startProps).then(e)}}};var Vr=["x","y","bgx","bgy","rotate","scale","color","backgroundColor","borderColor","opacity","blur","hue","grayscale","invert","saturate","sepia","fopacity","stroke"],Yr={mixins:[Xi],props:Vr.reduce(function(t,e){return t[e]="list",t},{}),data:Vr.reduce(function(t,e){return t[e]=void 0,t},{}),computed:{props:function(m,g){var v=this;return Vr.reduce(function(t,e){if(H(m[e]))return t;var n,i,r,o=e.match(/color/i),s=o||"opacity"===e,a=m[e].slice(0);s&&He(g,e,""),a.length<2&&a.unshift(("scale"===e?1:s?He(g,e):0)||0);var h=function(t){return t.reduce(function(t,e){return D(e)&&e.replace(/-|\d/g,"").trim()||t},"")}(a);if(o){var c=g.style.color;a=a.map(function(t){return function(t,e){return He(He(t,"color",e),"color").split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(j)}(g,t)}),g.style.color=c}else if(w(e,"bg")){var u="bgy"===e?"height":"width";if(a=a.map(function(t){return vn(t,u,v.$el)}),He(g,"background-position-"+e[2],""),i=He(g,"backgroundPosition").split(" ")["x"===e[2]?0:1],v.covers){var l=Math.min.apply(Math,a),d=Math.max.apply(Math,a),f=a.indexOf(l)<a.indexOf(d);r=d-l,a=a.map(function(t){return t-(f?l:d)}),n=(f?-r:0)+"px"}else n=i}else a=a.map(j);if("stroke"===e){if(!a.some(function(t){return t}))return t;var p=Ei(v.$el);He(g,"strokeDasharray",p),"%"===h&&(a=a.map(function(t){return t*p/100})),a=a.reverse(),e="strokeDashoffset"}return t[e]={steps:a,unit:h,pos:n,bgPos:i,diff:r},t},{})},bgProps:function(){var e=this;return["bgx","bgy"].filter(function(t){return t in e.props})},covers:function(t,e){return function(t){var e=t.style.backgroundSize,n="cover"===He(He(t,"backgroundSize",""),"backgroundSize");return t.style.backgroundSize=e,n}(e)}},disconnected:function(){delete this._image},update:{read:function(t){var h=this;if(t.active=this.matchMedia,t.active){if(!t.image&&this.covers&&this.bgProps.length){var e=He(this.$el,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1");if(e){var n=new Image;n.src=e,(t.image=n).naturalWidth||(n.onload=function(){return h.$emit()})}}var i=t.image;if(i&&i.naturalWidth){var c={width:this.$el.offsetWidth,height:this.$el.offsetHeight},u={width:i.naturalWidth,height:i.naturalHeight},l=nt.cover(u,c);this.bgProps.forEach(function(t){var e=h.props[t],n=e.diff,i=e.bgPos,r=e.steps,o="bgy"===t?"height":"width",s=l[o]-c[o];if(s<n)c[o]=l[o]+n-s;else if(n<s){var a=c[o]/vn(i,o,h.$el);a&&(h.props[t].steps=r.map(function(t){return t-(s-n)/a}))}l=nt.cover(u,c)}),t.dim=l}}},write:function(t){var e=t.dim;t.active?e&&He(this.$el,{backgroundSize:e.width+"px "+e.height+"px",backgroundRepeat:"no-repeat"}):He(this.$el,{backgroundSize:"",backgroundRepeat:""})},events:["resize"]},methods:{reset:function(){var n=this;K(this.getCss(0),function(t,e){return He(n.$el,e,"")})},getCss:function(l){var d=this.props;return Object.keys(d).reduce(function(t,e){var n=d[e],i=n.steps,r=n.unit,o=n.pos,s=function(t,e,n){void 0===n&&(n=2);var i=Rr(t,e),r=i[0],o=i[1],s=i[2];return(B(r)?r+Math.abs(r-o)*s*(r<o?1:-1):+o).toFixed(n)}(i,l);switch(e){case"x":case"y":r=r||"px",t.transform+=" translate"+p(e)+"("+j(s).toFixed("px"===r?0:2)+r+")";break;case"rotate":r=r||"deg",t.transform+=" rotate("+(s+r)+")";break;case"scale":t.transform+=" scale("+s+")";break;case"bgy":case"bgx":t["background-position-"+e[2]]="calc("+o+" + "+s+"px)";break;case"color":case"backgroundColor":case"borderColor":var a=Rr(i,l),h=a[0],c=a[1],u=a[2];t[e]="rgba("+h.map(function(t,e){return t+=u*(c[e]-t),3===e?j(t):parseInt(t,10)}).join(",")+")";break;case"blur":r=r||"px",t.filter+=" blur("+(s+r)+")";break;case"hue":r=r||"deg",t.filter+=" hue-rotate("+(s+r)+")";break;case"fopacity":r=r||"%",t.filter+=" opacity("+(s+r)+")";break;case"grayscale":case"invert":case"saturate":case"sepia":r=r||"%",t.filter+=" "+e+"("+(s+r)+")";break;default:t[e]=s}return t},{transform:"",filter:""})}}};function Rr(t,e){var n=t.length-1,i=Math.min(Math.floor(n*e),n-1),r=t.slice(i,i+2);return r.push(1===e?1:e%(1/n)*n),r}var qr={mixins:[Yr],props:{target:String,viewport:Number,easing:Number},data:{target:!1,viewport:1,easing:1},computed:{target:function(t,e){var n=t.target;return function t(e){return e?"offsetTop"in e?e:t(e.parentNode):document.body}(n&&at(n,e)||e)}},update:{read:function(t,e){var n=t.percent;if("scroll"!==e&&(n=!1),t.active){var i=n;return{percent:n=function(t,e){return Z(t*(1-(e-e*t)))}(pn(this.target)/(this.viewport||1),this.easing),style:i!==n&&this.getCss(n)}}},write:function(t){var e=t.style;t.active?e&&He(this.$el,e):this.reset()},events:["scroll","resize"]}};var Ur={update:{write:function(){if(!this.stack.length&&!this.dragging){var t=this.getValidIndex();delete this.index,Ce(this.slides,this.clsActive,this.clsActivated),this.show(t)}},events:["resize"]}};function Xr(t,e,n){var i=Jr(t,e);return n?i-function(t,e){return Zr(e).width/2-Zr(t).width/2}(t,e):Math.min(i,Kr(e))}function Kr(t){return Math.max(0,Gr(t)-Zr(t).width)}function Gr(t){return to(t).reduce(function(t,e){return Zr(e).width+t},0)}function Jr(t,e){return(rn(t).left+(Zt?Zr(t).width-Zr(e).width:0))*(Zt?-1:1)}function Zr(t){return t.getBoundingClientRect()}function Qr(t,e,n){Bt(t,zt(e,!1,!1,n))}function to(t){return V(t.children)}var eo={mixins:[Qn,Or,Ur],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:function(r,i,o,t){var e=t.center,s=t.easing,a=t.list,h=new Vt,n=r?Xr(r,a,e):Xr(i,a,e)+Zr(i).width*o,c=i?Xr(i,a,e):n+Zr(r).width*o*(Zt?-1:1);return{dir:o,show:function(t,e,n){void 0===e&&(e=0);var i=n?"linear":s;return t-=Math.round(t*Z(e,-1,1)),this.translate(e),r&&this.updateTranslates(),e=r?e:Z(e,0,1),Qr(this.getItemIn(),"itemin",{percent:e,duration:t,timing:i,dir:o}),r&&Qr(this.getItemIn(!0),"itemout",{percent:1-e,duration:t,timing:i,dir:o}),Ue.start(a,{transform:Cr(-c*(Zt?-1:1),"px")},t,i).then(h.resolve,Q),h.promise},stop:function(){return Ue.stop(a)},cancel:function(){Ue.cancel(a)},reset:function(){He(a,"transform","")},forward:function(t,e){return void 0===e&&(e=this.percent()),Ue.cancel(a),this.show(t,e,!0)},translate:function(t){var e=this.getDistance()*o*(Zt?-1:1);He(a,"transform",Cr(Z(e-e*t-c,-Gr(a),Zr(a).width)*(Zt?-1:1),"px")),this.updateTranslates(),r&&(t=Z(t,-1,1),Qr(this.getItemIn(),"itemtranslatein",{percent:t,dir:o}),Qr(this.getItemIn(!0),"itemtranslateout",{percent:1-t,dir:o}))},percent:function(){return Math.abs((He(a,"transform").split(",")[4]*(Zt?-1:1)+n)/(c-n))},getDistance:function(){return Math.abs(c-n)},getItemIn:function(t){void 0===t&&(t=!1);var e=this.getActives(),n=G(to(a),"offsetLeft"),i=ce(n,e[0<o*(t?-1:1)?e.length-1:0]);return~i&&n[i+(r&&!t?o:0)]},getActives:function(){var n=Xr(r||i,a,e);return G(to(a).filter(function(t){var e=Jr(t,a);return n<=e&&e+Zr(t).width<=Zr(a).width+n}),"offsetLeft")},updateTranslates:function(){var n=this.getActives();to(a).forEach(function(t){var e=y(n,t);Qr(t,"itemtranslate"+(e?"in":"out"),{percent:e?1:0,dir:t.offsetLeft<=i.offsetLeft?1:-1})})}}}},computed:{avgWidth:function(){return Gr(this.list)/this.length},finite:function(t){return t.finite||Gr(this.list)<Zr(this.list).width+function(t){return to(t).reduce(function(t,e){return Math.max(t,Zr(e).width)},0)}(this.list)+this.center},maxIndex:function(){if(!this.finite||this.center&&!this.sets)return this.length-1;if(this.center)return this.sets[this.sets.length-1];He(this.slides,"order","");for(var t=Kr(this.list),e=this.length;e--;)if(Jr(this.list.children[e],this.list)<t)return Math.min(e+1,this.length-1);return 0},sets:function(t){var o=this,e=t.sets,s=Zr(this.list).width/(this.center?2:1),a=0,h=s,c=0;return!P(e=e&&this.slides.reduce(function(t,e,n){var i=Zr(e).width;if(a<c+i&&(!o.center&&n>o.maxIndex&&(n=o.maxIndex),!y(t,n))){var r=o.slides[n+1];o.center&&r&&i<h-Zr(r).width/2?h-=i:(h=s,t.push(n),a=c+s+(o.center?i/2:0))}return c+=i,t},[]))&&e},transitionOptions:function(){return{center:this.center,list:this.list}}},connected:function(){Oe(this.$el,this.clsContainer,!Se("."+this.clsContainer,this.$el))},update:{write:function(){var n=this;Te("["+this.attrItem+"],[data-"+this.attrItem+"]",this.$el).forEach(function(t){var e=st(t,n.attrItem);n.maxIndex&&Oe(t,"uk-hidden",z(e)&&(n.sets&&!y(n.sets,j(e))||e>n.maxIndex))})},events:["resize"]},events:{beforeitemshow:function(t){!this.dragging&&this.sets&&this.stack.length<2&&!y(this.sets,this.index)&&(this.index=this.getValidIndex());var e=Math.abs(this.index-this.prevIndex+(0<this.dir&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0));if(!this.dragging&&1<e){for(var n=0;n<e;n++)this.stack.splice(1,0,0<this.dir?"next":"previous");t.preventDefault()}else this.duration=Dr(this.avgWidth/this.velocity)*(Zr(this.dir<0||!this.slides[this.prevIndex]?this.slides[this.index]:this.slides[this.prevIndex]).width/this.avgWidth),this.reorder()},itemshow:function(){H(this.prevIndex)||Ae(this._getTransitioner().getItemIn(),this.clsActive)},itemshown:function(){var e=this,n=this._getTransitioner(this.index).getActives();this.slides.forEach(function(t){return Oe(t,e.clsActive,y(n,t))}),this.sets&&!y(this.sets,j(this.index))||this.slides.forEach(function(t){return Oe(t,e.clsActivated,y(n,t))})}},methods:{reorder:function(){var n=this;if(He(this.slides,"order",""),!this.finite){var i=0<this.dir&&this.slides[this.prevIndex]?this.prevIndex:this.index;if(this.slides.forEach(function(t,e){return He(t,"order",0<n.dir&&e<i?1:n.dir<0&&e>=n.index?-1:"")}),this.center)for(var t=this.slides[i],e=Zr(this.list).width/2-Zr(t).width/2,r=0;0<e;){var o=this.getIndex(--r+i,i),s=this.slides[o];He(s,"order",i<o?-2:-1),e-=Zr(s).width}}},getValidIndex:function(t,e){if(void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),t=this.getIndex(t,e),!this.sets)return t;var n;do{if(y(this.sets,t))return t;n=t,t=this.getIndex(t+this.dir,e)}while(t!==n);return t}}},no={mixins:[Yr],data:{selItem:"!li"},computed:{item:function(t,e){return at(t.selItem,e)}},events:[{name:"itemshown",self:!0,el:function(){return this.item},handler:function(){He(this.$el,this.getCss(.5))}},{name:"itemin itemout",self:!0,el:function(){return this.item},handler:function(t){var e=t.type,n=t.detail,i=n.percent,r=n.duration,o=n.timing,s=n.dir;Ue.cancel(this.$el),He(this.$el,this.getCss(ro(e,s,i))),Ue.start(this.$el,this.getCss(io(e)?.5:0<s?1:0),r,o).catch(Q)}},{name:"transitioncanceled transitionend",self:!0,el:function(){return this.item},handler:function(){Ue.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el:function(){return this.item},handler:function(t){var e=t.type,n=t.detail,i=n.percent,r=n.dir;Ue.cancel(this.$el),He(this.$el,this.getCss(ro(e,r,i)))}}]};function io(t){return u(t,"in")}function ro(t,e,n){return n/=2,io(t)?e<0?1-n:n:e<0?n:1-n}var oo,so=X({},Er,{fade:{show:function(){return[{opacity:0,zIndex:0},{zIndex:-1}]},percent:function(t){return 1-He(t,"opacity")},translate:function(t){return[{opacity:1-t,zIndex:0},{zIndex:-1}]}},scale:{show:function(){return[{opacity:0,transform:Nr(1.5),zIndex:0},{zIndex:-1}]},percent:function(t){return 1-He(t,"opacity")},translate:function(t){return[{opacity:1-t,transform:Nr(1+.5*t),zIndex:0},{zIndex:-1}]}},pull:{show:function(t){return t<0?[{transform:Cr(30),zIndex:-1},{transform:Cr(),zIndex:0}]:[{transform:Cr(-100),zIndex:0},{transform:Cr(),zIndex:-1}]},percent:function(t,e,n){return n<0?1-Ar(e):Ar(t)},translate:function(t,e){return e<0?[{transform:Cr(30*t),zIndex:-1},{transform:Cr(-100*(1-t)),zIndex:0}]:[{transform:Cr(100*-t),zIndex:0},{transform:Cr(30*(1-t)),zIndex:-1}]}},push:{show:function(t){return t<0?[{transform:Cr(100),zIndex:0},{transform:Cr(),zIndex:-1}]:[{transform:Cr(-30),zIndex:-1},{transform:Cr(),zIndex:0}]},percent:function(t,e,n){return 0<n?1-Ar(e):Ar(t)},translate:function(t,e){return e<0?[{transform:Cr(100*t),zIndex:0},{transform:Cr(-30*(1-t)),zIndex:-1}]:[{transform:Cr(-30*t),zIndex:-1},{transform:Cr(100*(1-t)),zIndex:0}]}}}),ao={mixins:[Qn,Br,Ur],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:so},update:{read:function(){var t=this.ratio.split(":").map(Number),e=t[0],n=t[1];return n=n*this.list.offsetWidth/e||0,this.minHeight&&(n=Math.max(this.minHeight,n)),this.maxHeight&&(n=Math.min(this.maxHeight,n)),{height:n-hn(this.list,"content-box")}},write:function(t){var e=t.height;He(this.list,"minHeight",e)},events:["resize"]}},ho={mixins:[Qn,yr],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1},created:function(){var o=this;["init","start","move","end"].forEach(function(t){var r=o[t];o[t]=function(t){o.scrollY=window.pageYOffset;var e=Wt(t,"page"),n=e.x,i=e.y;o.pos={x:n,y:i},r(t)}})},events:{name:ne,passive:!1,handler:"init"},update:{write:function(){if(this.clsEmpty&&Oe(this.$el,this.clsEmpty,P(this.$el.children)),He(this.handle?Te(this.handle,this.$el):this.$el.children,{touchAction:"none",userSelect:"none"}),this.drag){en(this.drag,{top:this.pos.y+this.origin.top,left:this.pos.x+this.origin.left});var t,e=en(this.drag),n=e.top,i=n+e.height;0<n&&n<this.scrollY?t=this.scrollY-5:i<on(document)&&i>on(window)+this.scrollY&&(t=this.scrollY+5),t&&setTimeout(function(){return mn(window,t)},5)}}},methods:{init:function(t){var e=t.target,n=t.button,i=t.defaultPrevented,r=V(this.$el.children).filter(function(t){return _t(e,t)})[0];!r||i||0<n||Ct(e)||_t(e,"."+this.clsNoDrag)||this.handle&&!_t(e,this.handle)||(t.preventDefault(),this.touched=[this],this.placeholder=r,this.origin=X({target:e,index:ce(r)},this.pos),Mt(document,ie,this.move),Mt(document,re,this.end),Mt(window,"scroll",this.scroll),this.threshold||this.start(t))},start:function(t){this.drag=fe(this.$container,this.placeholder.outerHTML.replace(/^<li/i,"<div").replace(/li>$/i,"div>")),He(this.drag,X({boxSizing:"border-box",width:this.placeholder.offsetWidth,height:this.placeholder.offsetHeight},He(this.placeholder,["paddingLeft","paddingRight","paddingTop","paddingBottom"]))),it(this.drag,"uk-no-boot",""),Ae(this.drag,this.clsDrag,this.clsCustom),on(this.drag.firstElementChild,on(this.placeholder.firstElementChild));var e=en(this.placeholder),n=e.left,i=e.top;X(this.origin,{left:n-this.pos.x,top:i-this.pos.y}),Ae(this.placeholder,this.clsPlaceholder),Ae(this.$el.children,this.clsItem),Ae(document.documentElement,this.clsDragState),Bt(this.$el,"start",[this,this.placeholder]),this.move(t)},move:function(t){if(this.drag){this.$emit();var e="mousemove"===t.type?t.target:document.elementFromPoint(this.pos.x-window.pageXOffset,this.pos.y-window.pageYOffset),n=this.getSortable(e),i=this.getSortable(this.placeholder),r=n!==i;if(n&&!_t(e,this.placeholder)&&(!r||n.group&&n.group===i.group)){if(e=n.$el===e.parentNode&&e||V(n.$el.children).filter(function(t){return _t(e,t)})[0],r)i.remove(this.placeholder);else if(!e)return;n.insert(this.placeholder,e),y(this.touched,n)||this.touched.push(n)}}else(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end:function(t){if(Ot(document,ie,this.move),Ot(document,re,this.end),Ot(window,"scroll",this.scroll),this.drag){var e=this.getSortable(this.placeholder);this===e?this.origin.index!==ce(this.placeholder)&&Bt(this.$el,"moved",[this,this.placeholder]):(Bt(e.$el,"added",[e,this.placeholder]),Bt(this.$el,"removed",[this,this.placeholder])),Bt(this.$el,"stop",[this,this.placeholder]),ve(this.drag),this.drag=null;var n=this.touched.map(function(t){return t.clsPlaceholder+" "+t.clsItem}).join(" ");this.touched.forEach(function(t){return Ce(t.$el.children,n)}),Ce(document.documentElement,this.clsDragState)}else"touchend"===t.type&&t.target.click()},scroll:function(){var t=window.pageYOffset;t!==this.scrollY&&(this.pos.y+=t-this.scrollY,this.scrollY=t,this.$emit())},insert:function(t,e){var n=this;Ae(this.$el.children,this.clsItem);function i(){e?!_t(t,n.$el)||function(t,e){return t.parentNode===e.parentNode&&ce(t)>ce(e)}(t,e)?pe(e,t):me(e,t):fe(n.$el,t)}this.animation?this.animate(i):i()},remove:function(t){_t(t,this.$el)&&(He(this.handle?Te(this.handle,t):t,{touchAction:"",userSelect:""}),this.animation?this.animate(function(){return ve(t)}):ve(t))},getSortable:function(t){return t&&(this.$getComponent(t,"sortable")||this.getSortable(t.parentNode))}}};var co,uo,lo,fo=[],po={mixins:[Zi,ti,hi],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active",clsPos:"uk-tooltip"},beforeConnect:function(){this._hasTitle=rt(this.$el,"title"),it(this.$el,{title:"","aria-expanded":!1})},disconnected:function(){this.hide(),it(this.$el,{title:this._hasTitle?this.title:null,"aria-expanded":null})},methods:{show:function(){var e=this;this.isActive()||(fo.forEach(function(t){return t.hide()}),fo.push(this),this._unbind=Mt(document,re,function(t){return!_t(t.target,e.$el)&&e.hide()}),clearTimeout(this.showTimer),this.showTimer=setTimeout(function(){e._show(),e.hideTimer=setInterval(function(){Et(e.$el)||e.hide()},150)},this.delay))},hide:function(){!this.isActive()||bt(this.$el,"input")&&this.$el===document.activeElement||(fo.splice(fo.indexOf(this),1),clearTimeout(this.showTimer),clearInterval(this.hideTimer),it(this.$el,"aria-expanded",!1),this.toggleElement(this.tooltip,!1),this.tooltip&&ve(this.tooltip),this.tooltip=!1,this._unbind())},_show:function(){this.tooltip=fe(this.container,'<div class="'+this.clsPos+'" aria-expanded="true" aria-hidden> <div class="'+this.clsPos+'-inner">'+this.title+"</div> </div>"),this.positionAt(this.tooltip,this.$el),this.origin="y"===this.getAxis()?dn(this.dir)+"-"+this.align:this.align+"-"+dn(this.dir),this.toggleElement(this.tooltip,!0)},isActive:function(){return y(fo,this)}},events:(oo={focus:"show",blur:"hide"},oo[oe+" "+se]=function(t){jt(t)||(t.type===oe?this.show():this.hide())},oo[ne]=function(t){jt(t)&&(this.isActive()?this.hide():this.show())},oo)},mo={props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,msgInvalidMime:String,msgInvalidName:String,msgInvalidSize:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,msgInvalidMime:"Invalid File Type: %s",msgInvalidName:"Invalid File Name: %s",msgInvalidSize:"Invalid File Size: %s Kilobytes Max",multiple:!1,name:"files[]",params:{},type:"",url:"",abort:Q,beforeAll:Q,beforeSend:Q,complete:Q,completeAll:Q,error:Q,fail:Q,load:Q,loadEnd:Q,loadStart:Q,progress:Q},events:{change:function(t){bt(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop:function(t){vo(t);var e=t.dataTransfer;e&&e.files&&(Ce(this.$el,this.clsDragover),this.upload(e.files))},dragenter:function(t){vo(t)},dragover:function(t){vo(t),Ae(this.$el,this.clsDragover)},dragleave:function(t){vo(t),Ce(this.$el,this.clsDragover)}},methods:{upload:function(t){var i=this;if(t.length){Bt(this.$el,"upload",[t]);for(var e=0;e<t.length;e++){if(this.maxSize&&1e3*this.maxSize<t[e].size)return void this.fail(this.msgInvalidSize.replace("%s",this.maxSize));if(this.allow&&!go(this.allow,t[e].name))return void this.fail(this.msgInvalidName.replace("%s",this.allow));if(this.mime&&!go(this.mime,t[e].type))return void this.fail(this.msgInvalidMime.replace("%s",this.mime))}this.multiple||(t=[t[0]]),this.beforeAll(this,t);var r=function(t,e){for(var n=[],i=0;i<t.length;i+=e){for(var r=[],o=0;o<e;o++)r.push(t[i+o]);n.push(r)}return n}(t,this.concurrent),o=function(t){var e=new FormData;for(var n in t.forEach(function(t){return e.append(i.name,t)}),i.params)e.append(n,i.params[n]);Kt(i.url,{data:e,method:i.method,responseType:i.type,beforeSend:function(t){var e=t.xhr;e.upload&&Mt(e.upload,"progress",i.progress),["loadStart","load","loadEnd","abort"].forEach(function(t){return Mt(e,t.toLowerCase(),i[t])}),i.beforeSend(t)}}).then(function(t){i.complete(t),r.length?o(r.shift()):i.completeAll(t)},function(t){return i.error(t)})};o(r.shift())}}}};function go(t,e){return e.match(new RegExp("^"+t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$","i"))}function vo(t){t.preventDefault(),t.stopPropagation()}function wo(){yo(document.body,uo),xn.flush(),new MutationObserver(function(t){return t.forEach(bo)}).observe(document,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),co._initialized=!0}function bo(t){var e=t.target;("attributes"!==t.type?function(t){for(var e=t.addedNodes,n=t.removedNodes,i=0;i<e.length;i++)yo(e[i],uo);for(var r=0;r<n.length;r++)yo(n[r],lo);return!0}(t):function(t){var e=t.target,n=t.attributeName;if("href"===n)return!0;var i=zn(n);if(i&&i in co){if(rt(e,n))return co[i](e),!0;var r=co.getComponent(e,i);return r?(r.$destroy(),!0):void 0}}(t))&&co.update(e)}function yo(t,e){if(1===t.nodeType&&!rt(t,"uk-no-boot"))for(e(t),t=t.firstElementChild;t;){var n=t.nextElementSibling;yo(t,e),t=n}}return Pn.component("countdown",vr),Pn.component("filter",Ir),Pn.component("lightbox",Lr),Pn.component("lightboxPanel",zr),Pn.component("notification",Wr),Pn.component("parallax",qr),Pn.component("slider",eo),Pn.component("sliderParallax",no),Pn.component("slideshow",ao),Pn.component("slideshowParallax",no),Pn.component("sortable",ho),Pn.component("tooltip",po),Pn.component("upload",mo),uo=(co=Pn).connect,lo=co.disconnect,"MutationObserver"in window&&(document.body?wo():new MutationObserver(function(){document.body&&(this.disconnect(),wo())}).observe(document,{childList:!0,subtree:!0})),Pn});
/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);


