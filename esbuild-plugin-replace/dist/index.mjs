var J=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+n+'" is not supported')});var N=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var A=N((j,B)=>{(function(n,t){typeof j=="object"&&typeof B<"u"?t(j):typeof define=="function"&&define.amd?define(["exports"],t):(n=n||self,t(n.sourcemapCodec={}))})(j,function(n){"use strict";for(var t={},e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r=0;r<e.length;r++)t[e.charCodeAt(r)]=r;function i(s){for(var a=[],l=[],c=[0,0,0,0,0],g=0,m=0,w=0,y=0;m<s.length;m++){var b=s.charCodeAt(m);if(b===44)o(l,c,g),g=0;else if(b===59)o(l,c,g),g=0,a.push(l),l=[],c[0]=0;else{var S=t[b];if(S===void 0)throw new Error("Invalid character ("+String.fromCharCode(b)+")");var E=S&32;if(S&=31,y+=S<<w,E)w+=5;else{var k=y&1;y>>>=1,k&&(y=y===0?-2147483648:-y),c[g]+=y,g++,y=w=0}}}return o(l,c,g),a.push(l),a}function o(s,a,l){l===4?s.push([a[0],a[1],a[2],a[3]]):l===5?s.push([a[0],a[1],a[2],a[3],a[4]]):l===1&&s.push([a[0]])}function u(s){for(var a=0,l=0,c=0,g=0,m="",w=0;w<s.length;w++){var y=s[w];if(w>0&&(m+=";"),y.length!==0){for(var b=0,S=[],E=0,k=y;E<k.length;E++){var v=k[E],O=h(v[0]-b);b=v[0],v.length>1&&(O+=h(v[1]-a)+h(v[2]-l)+h(v[3]-c),a=v[1],l=v[2],c=v[3]),v.length===5&&(O+=h(v[4]-g),g=v[4]),S.push(O)}m+=S.join(",")}}return m}function h(s){var a="";s=s<0?-s<<1|1:s<<1;do{var l=s&31;s>>>=5,s>0&&(l|=32),a+=e[l]}while(s>0);return a}n.decode=i,n.encode=u,Object.defineProperty(n,"__esModule",{value:!0})})});var T=N((nt,D)=>{"use strict";var G=A(),I=function n(t){this.bits=t instanceof n?t.bits.slice():[]};I.prototype.add=function(t){this.bits[t>>5]|=1<<(t&31)};I.prototype.has=function(t){return!!(this.bits[t>>5]&1<<(t&31))};var d=function(t,e,r){this.start=t,this.end=e,this.original=r,this.intro="",this.outro="",this.content=r,this.storeName=!1,this.edited=!1,Object.defineProperties(this,{previous:{writable:!0,value:null},next:{writable:!0,value:null}})};d.prototype.appendLeft=function(t){this.outro+=t};d.prototype.appendRight=function(t){this.intro=this.intro+t};d.prototype.clone=function(){var t=new d(this.start,this.end,this.original);return t.intro=this.intro,t.outro=this.outro,t.content=this.content,t.storeName=this.storeName,t.edited=this.edited,t};d.prototype.contains=function(t){return this.start<t&&t<this.end};d.prototype.eachNext=function(t){for(var e=this;e;)t(e),e=e.next};d.prototype.eachPrevious=function(t){for(var e=this;e;)t(e),e=e.previous};d.prototype.edit=function(t,e,r){return this.content=t,r||(this.intro="",this.outro=""),this.storeName=e,this.edited=!0,this};d.prototype.prependLeft=function(t){this.outro=t+this.outro};d.prototype.prependRight=function(t){this.intro=t+this.intro};d.prototype.split=function(t){var e=t-this.start,r=this.original.slice(0,e),i=this.original.slice(e);this.original=r;var o=new d(t,this.end,i);return o.outro=this.outro,this.outro="",this.end=t,this.edited?(o.edit("",!1),this.content=""):this.content=r,o.next=this.next,o.next&&(o.next.previous=o),o.previous=this,this.next=o,o};d.prototype.toString=function(){return this.intro+this.content+this.outro};d.prototype.trimEnd=function(t){if(this.outro=this.outro.replace(t,""),this.outro.length)return!0;var e=this.content.replace(t,"");if(e.length)return e!==this.content&&this.split(this.start+e.length).edit("",void 0,!0),!0;if(this.edit("",void 0,!0),this.intro=this.intro.replace(t,""),this.intro.length)return!0};d.prototype.trimStart=function(t){if(this.intro=this.intro.replace(t,""),this.intro.length)return!0;var e=this.content.replace(t,"");if(e.length)return e!==this.content&&(this.split(this.end-e.length),this.edit("",void 0,!0)),!0;if(this.edit("",void 0,!0),this.outro=this.outro.replace(t,""),this.outro.length)return!0};var M=function(){throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.")};typeof window<"u"&&typeof window.btoa=="function"?M=function(n){return window.btoa(unescape(encodeURIComponent(n)))}:typeof Buffer=="function"&&(M=function(n){return Buffer.from(n,"utf-8").toString("base64")});var L=function(t){this.version=3,this.file=t.file,this.sources=t.sources,this.sourcesContent=t.sourcesContent,this.names=t.names,this.mappings=G.encode(t.mappings)};L.prototype.toString=function(){return JSON.stringify(this)};L.prototype.toUrl=function(){return"data:application/json;charset=utf-8;base64,"+M(this.toString())};function H(n){var t=n.split(`
`),e=t.filter(function(o){return/^\t+/.test(o)}),r=t.filter(function(o){return/^ {2,}/.test(o)});if(e.length===0&&r.length===0)return null;if(e.length>=r.length)return"	";var i=r.reduce(function(o,u){var h=/^ +/.exec(u)[0].length;return Math.min(h,o)},1/0);return new Array(i+1).join(" ")}function P(n,t){var e=n.split(/[/\\]/),r=t.split(/[/\\]/);for(e.pop();e[0]===r[0];)e.shift(),r.shift();if(e.length)for(var i=e.length;i--;)e[i]="..";return e.concat(r).join("/")}var K=Object.prototype.toString;function U(n){return K.call(n)==="[object Object]"}function $(n){for(var t=n.split(`
`),e=[],r=0,i=0;r<t.length;r++)e.push(i),i+=t[r].length+1;return function(u){for(var h=0,s=e.length;h<s;){var a=h+s>>1;u<e[a]?s=a:h=a+1}var l=h-1,c=u-e[l];return{line:l,column:c}}}var R=function(t){this.hires=t,this.generatedCodeLine=0,this.generatedCodeColumn=0,this.raw=[],this.rawSegments=this.raw[this.generatedCodeLine]=[],this.pending=null};R.prototype.addEdit=function(t,e,r,i){if(e.length){var o=[this.generatedCodeColumn,t,r.line,r.column];i>=0&&o.push(i),this.rawSegments.push(o)}else this.pending&&this.rawSegments.push(this.pending);this.advance(e),this.pending=null};R.prototype.addUneditedChunk=function(t,e,r,i,o){for(var u=e.start,h=!0;u<e.end;)(this.hires||h||o.has(u))&&this.rawSegments.push([this.generatedCodeColumn,t,i.line,i.column]),r[u]===`
`?(i.line+=1,i.column=0,this.generatedCodeLine+=1,this.raw[this.generatedCodeLine]=this.rawSegments=[],this.generatedCodeColumn=0,h=!0):(i.column+=1,this.generatedCodeColumn+=1,h=!1),u+=1;this.pending=null};R.prototype.advance=function(t){if(t){var e=t.split(`
`);if(e.length>1){for(var r=0;r<e.length-1;r++)this.generatedCodeLine++,this.raw[this.generatedCodeLine]=this.rawSegments=[];this.generatedCodeColumn=0}this.generatedCodeColumn+=e[e.length-1].length}};var x=`
`,C={insertLeft:!1,insertRight:!1,storeName:!1},f=function(t,e){e===void 0&&(e={});var r=new d(0,t.length,t);Object.defineProperties(this,{original:{writable:!0,value:t},outro:{writable:!0,value:""},intro:{writable:!0,value:""},firstChunk:{writable:!0,value:r},lastChunk:{writable:!0,value:r},lastSearchedChunk:{writable:!0,value:r},byStart:{writable:!0,value:{}},byEnd:{writable:!0,value:{}},filename:{writable:!0,value:e.filename},indentExclusionRanges:{writable:!0,value:e.indentExclusionRanges},sourcemapLocations:{writable:!0,value:new I},storedNames:{writable:!0,value:{}},indentStr:{writable:!0,value:H(t)}}),this.byStart[0]=r,this.byEnd[t.length]=r};f.prototype.addSourcemapLocation=function(t){this.sourcemapLocations.add(t)};f.prototype.append=function(t){if(typeof t!="string")throw new TypeError("outro content must be a string");return this.outro+=t,this};f.prototype.appendLeft=function(t,e){if(typeof e!="string")throw new TypeError("inserted content must be a string");this._split(t);var r=this.byEnd[t];return r?r.appendLeft(e):this.intro+=e,this};f.prototype.appendRight=function(t,e){if(typeof e!="string")throw new TypeError("inserted content must be a string");this._split(t);var r=this.byStart[t];return r?r.appendRight(e):this.outro+=e,this};f.prototype.clone=function(){for(var t=new f(this.original,{filename:this.filename}),e=this.firstChunk,r=t.firstChunk=t.lastSearchedChunk=e.clone();e;){t.byStart[r.start]=r,t.byEnd[r.end]=r;var i=e.next,o=i&&i.clone();o&&(r.next=o,o.previous=r,r=o),e=i}return t.lastChunk=r,this.indentExclusionRanges&&(t.indentExclusionRanges=this.indentExclusionRanges.slice()),t.sourcemapLocations=new I(this.sourcemapLocations),t.intro=this.intro,t.outro=this.outro,t};f.prototype.generateDecodedMap=function(t){var e=this;t=t||{};var r=0,i=Object.keys(this.storedNames),o=new R(t.hires),u=$(this.original);return this.intro&&o.advance(this.intro),this.firstChunk.eachNext(function(h){var s=u(h.start);h.intro.length&&o.advance(h.intro),h.edited?o.addEdit(r,h.content,s,h.storeName?i.indexOf(h.original):-1):o.addUneditedChunk(r,h,e.original,s,e.sourcemapLocations),h.outro.length&&o.advance(h.outro)}),{file:t.file?t.file.split(/[/\\]/).pop():null,sources:[t.source?P(t.file||"",t.source):null],sourcesContent:t.includeContent?[this.original]:[null],names:i,mappings:o.raw}};f.prototype.generateMap=function(t){return new L(this.generateDecodedMap(t))};f.prototype.getIndentString=function(){return this.indentStr===null?"	":this.indentStr};f.prototype.indent=function(t,e){var r=/^[^\r\n]/gm;if(U(t)&&(e=t,t=void 0),t=t!==void 0?t:this.indentStr||"	",t==="")return this;e=e||{};var i={};if(e.exclude){var o=typeof e.exclude[0]=="number"?[e.exclude]:e.exclude;o.forEach(function(g){for(var m=g[0];m<g[1];m+=1)i[m]=!0})}var u=e.indentStart!==!1,h=function(g){return u?""+t+g:(u=!0,g)};this.intro=this.intro.replace(r,h);for(var s=0,a=this.firstChunk;a;){var l=a.end;if(a.edited)i[s]||(a.content=a.content.replace(r,h),a.content.length&&(u=a.content[a.content.length-1]===`
`));else for(s=a.start;s<l;){if(!i[s]){var c=this.original[s];c===`
`?u=!0:c!=="\r"&&u&&(u=!1,s===a.start||(this._splitChunk(a,s),a=a.next),a.prependRight(t))}s+=1}s=a.end,a=a.next}return this.outro=this.outro.replace(r,h),this};f.prototype.insert=function(){throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)")};f.prototype.insertLeft=function(t,e){return C.insertLeft||(console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"),C.insertLeft=!0),this.appendLeft(t,e)};f.prototype.insertRight=function(t,e){return C.insertRight||(console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"),C.insertRight=!0),this.prependRight(t,e)};f.prototype.move=function(t,e,r){if(r>=t&&r<=e)throw new Error("Cannot move a selection inside itself");this._split(t),this._split(e),this._split(r);var i=this.byStart[t],o=this.byEnd[e],u=i.previous,h=o.next,s=this.byStart[r];if(!s&&o===this.lastChunk)return this;var a=s?s.previous:this.lastChunk;return u&&(u.next=h),h&&(h.previous=u),a&&(a.next=i),s&&(s.previous=o),i.previous||(this.firstChunk=o.next),o.next||(this.lastChunk=i.previous,this.lastChunk.next=null),i.previous=a,o.next=s||null,a||(this.firstChunk=i),s||(this.lastChunk=o),this};f.prototype.overwrite=function(t,e,r,i){if(typeof r!="string")throw new TypeError("replacement content must be a string");for(;t<0;)t+=this.original.length;for(;e<0;)e+=this.original.length;if(e>this.original.length)throw new Error("end is out of bounds");if(t===e)throw new Error("Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead");this._split(t),this._split(e),i===!0&&(C.storeName||(console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"),C.storeName=!0),i={storeName:!0});var o=i!==void 0?i.storeName:!1,u=i!==void 0?i.contentOnly:!1;if(o){var h=this.original.slice(t,e);Object.defineProperty(this.storedNames,h,{writable:!0,value:!0,enumerable:!0})}var s=this.byStart[t],a=this.byEnd[e];if(s){for(var l=s;l!==a;){if(l.next!==this.byStart[l.end])throw new Error("Cannot overwrite across a split point");l=l.next,l.edit("",!1)}s.edit(r,o,u)}else{var c=new d(t,e,"").edit(r,o);a.next=c,c.previous=a}return this};f.prototype.prepend=function(t){if(typeof t!="string")throw new TypeError("outro content must be a string");return this.intro=t+this.intro,this};f.prototype.prependLeft=function(t,e){if(typeof e!="string")throw new TypeError("inserted content must be a string");this._split(t);var r=this.byEnd[t];return r?r.prependLeft(e):this.intro=e+this.intro,this};f.prototype.prependRight=function(t,e){if(typeof e!="string")throw new TypeError("inserted content must be a string");this._split(t);var r=this.byStart[t];return r?r.prependRight(e):this.outro=e+this.outro,this};f.prototype.remove=function(t,e){for(;t<0;)t+=this.original.length;for(;e<0;)e+=this.original.length;if(t===e)return this;if(t<0||e>this.original.length)throw new Error("Character is out of bounds");if(t>e)throw new Error("end must be greater than start");this._split(t),this._split(e);for(var r=this.byStart[t];r;)r.intro="",r.outro="",r.edit(""),r=e>r.end?this.byStart[r.end]:null;return this};f.prototype.lastChar=function(){if(this.outro.length)return this.outro[this.outro.length-1];var t=this.lastChunk;do{if(t.outro.length)return t.outro[t.outro.length-1];if(t.content.length)return t.content[t.content.length-1];if(t.intro.length)return t.intro[t.intro.length-1]}while(t=t.previous);return this.intro.length?this.intro[this.intro.length-1]:""};f.prototype.lastLine=function(){var t=this.outro.lastIndexOf(x);if(t!==-1)return this.outro.substr(t+1);var e=this.outro,r=this.lastChunk;do{if(r.outro.length>0){if(t=r.outro.lastIndexOf(x),t!==-1)return r.outro.substr(t+1)+e;e=r.outro+e}if(r.content.length>0){if(t=r.content.lastIndexOf(x),t!==-1)return r.content.substr(t+1)+e;e=r.content+e}if(r.intro.length>0){if(t=r.intro.lastIndexOf(x),t!==-1)return r.intro.substr(t+1)+e;e=r.intro+e}}while(r=r.previous);return t=this.intro.lastIndexOf(x),t!==-1?this.intro.substr(t+1)+e:this.intro+e};f.prototype.slice=function(t,e){for(t===void 0&&(t=0),e===void 0&&(e=this.original.length);t<0;)t+=this.original.length;for(;e<0;)e+=this.original.length;for(var r="",i=this.firstChunk;i&&(i.start>t||i.end<=t);){if(i.start<e&&i.end>=e)return r;i=i.next}if(i&&i.edited&&i.start!==t)throw new Error("Cannot use replaced character "+t+" as slice start anchor.");for(var o=i;i;){i.intro&&(o!==i||i.start===t)&&(r+=i.intro);var u=i.start<e&&i.end>=e;if(u&&i.edited&&i.end!==e)throw new Error("Cannot use replaced character "+e+" as slice end anchor.");var h=o===i?t-i.start:0,s=u?i.content.length+e-i.end:i.content.length;if(r+=i.content.slice(h,s),i.outro&&(!u||i.end===e)&&(r+=i.outro),u)break;i=i.next}return r};f.prototype.snip=function(t,e){var r=this.clone();return r.remove(0,t),r.remove(e,r.original.length),r};f.prototype._split=function(t){if(!(this.byStart[t]||this.byEnd[t]))for(var e=this.lastSearchedChunk,r=t>e.end;e;){if(e.contains(t))return this._splitChunk(e,t);e=r?this.byStart[e.end]:this.byEnd[e.start]}};f.prototype._splitChunk=function(t,e){if(t.edited&&t.content.length){var r=$(this.original)(e);throw new Error("Cannot split a chunk that has already been edited ("+r.line+":"+r.column+' \u2013 "'+t.original+'")')}var i=t.split(e);return this.byEnd[e]=t,this.byStart[e]=i,this.byEnd[i.end]=i,t===this.lastChunk&&(this.lastChunk=i),this.lastSearchedChunk=t,!0};f.prototype.toString=function(){for(var t=this.intro,e=this.firstChunk;e;)t+=e.toString(),e=e.next;return t+this.outro};f.prototype.isEmpty=function(){var t=this.firstChunk;do if(t.intro.length&&t.intro.trim()||t.content.length&&t.content.trim()||t.outro.length&&t.outro.trim())return!1;while(t=t.next);return!0};f.prototype.length=function(){var t=this.firstChunk,e=0;do e+=t.intro.length+t.content.length+t.outro.length;while(t=t.next);return e};f.prototype.trimLines=function(){return this.trim("[\\r\\n]")};f.prototype.trim=function(t){return this.trimStart(t).trimEnd(t)};f.prototype.trimEndAborted=function(t){var e=new RegExp((t||"\\s")+"+$");if(this.outro=this.outro.replace(e,""),this.outro.length)return!0;var r=this.lastChunk;do{var i=r.end,o=r.trimEnd(e);if(r.end!==i&&(this.lastChunk===r&&(this.lastChunk=r.next),this.byEnd[r.end]=r,this.byStart[r.next.start]=r.next,this.byEnd[r.next.end]=r.next),o)return!0;r=r.previous}while(r);return!1};f.prototype.trimEnd=function(t){return this.trimEndAborted(t),this};f.prototype.trimStartAborted=function(t){var e=new RegExp("^"+(t||"\\s")+"+");if(this.intro=this.intro.replace(e,""),this.intro.length)return!0;var r=this.firstChunk;do{var i=r.end,o=r.trimStart(e);if(r.end!==i&&(r===this.lastChunk&&(this.lastChunk=r.next),this.byEnd[r.end]=r,this.byStart[r.next.start]=r.next,this.byEnd[r.next.end]=r.next),o)return!0;r=r.next}while(r);return!1};f.prototype.trimStart=function(t){return this.trimStartAborted(t),this};var F=Object.prototype.hasOwnProperty,p=function(t){t===void 0&&(t={}),this.intro=t.intro||"",this.separator=t.separator!==void 0?t.separator:`
`,this.sources=[],this.uniqueSources=[],this.uniqueSourceIndexByFilename={}};p.prototype.addSource=function(t){if(t instanceof f)return this.addSource({content:t,filename:t.filename,separator:this.separator});if(!U(t)||!t.content)throw new Error("bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`");if(["filename","indentExclusionRanges","separator"].forEach(function(r){F.call(t,r)||(t[r]=t.content[r])}),t.separator===void 0&&(t.separator=this.separator),t.filename)if(!F.call(this.uniqueSourceIndexByFilename,t.filename))this.uniqueSourceIndexByFilename[t.filename]=this.uniqueSources.length,this.uniqueSources.push({filename:t.filename,content:t.content.original});else{var e=this.uniqueSources[this.uniqueSourceIndexByFilename[t.filename]];if(t.content.original!==e.content)throw new Error("Illegal source: same filename ("+t.filename+"), different contents")}return this.sources.push(t),this};p.prototype.append=function(t,e){return this.addSource({content:new f(t),separator:e&&e.separator||""}),this};p.prototype.clone=function(){var t=new p({intro:this.intro,separator:this.separator});return this.sources.forEach(function(e){t.addSource({filename:e.filename,content:e.content.clone(),separator:e.separator})}),t};p.prototype.generateDecodedMap=function(t){var e=this;t===void 0&&(t={});var r=[];this.sources.forEach(function(o){Object.keys(o.content.storedNames).forEach(function(u){~r.indexOf(u)||r.push(u)})});var i=new R(t.hires);return this.intro&&i.advance(this.intro),this.sources.forEach(function(o,u){u>0&&i.advance(e.separator);var h=o.filename?e.uniqueSourceIndexByFilename[o.filename]:-1,s=o.content,a=$(s.original);s.intro&&i.advance(s.intro),s.firstChunk.eachNext(function(l){var c=a(l.start);l.intro.length&&i.advance(l.intro),o.filename?l.edited?i.addEdit(h,l.content,c,l.storeName?r.indexOf(l.original):-1):i.addUneditedChunk(h,l,s.original,c,s.sourcemapLocations):i.advance(l.content),l.outro.length&&i.advance(l.outro)}),s.outro&&i.advance(s.outro)}),{file:t.file?t.file.split(/[/\\]/).pop():null,sources:this.uniqueSources.map(function(o){return t.file?P(t.file,o.filename):o.filename}),sourcesContent:this.uniqueSources.map(function(o){return t.includeContent?o.content:null}),names:r,mappings:i.raw}};p.prototype.generateMap=function(t){return new L(this.generateDecodedMap(t))};p.prototype.getIndentString=function(){var t={};return this.sources.forEach(function(e){var r=e.content.indentStr;r!==null&&(t[r]||(t[r]=0),t[r]+=1)}),Object.keys(t).sort(function(e,r){return t[e]-t[r]})[0]||"	"};p.prototype.indent=function(t){var e=this;if(arguments.length||(t=this.getIndentString()),t==="")return this;var r=!this.intro||this.intro.slice(-1)===`
`;return this.sources.forEach(function(i,o){var u=i.separator!==void 0?i.separator:e.separator,h=r||o>0&&/\r?\n$/.test(u);i.content.indent(t,{exclude:i.indentExclusionRanges,indentStart:h}),r=i.content.lastChar()===`
`}),this.intro&&(this.intro=t+this.intro.replace(/^[^\n]/gm,function(i,o){return o>0?t+i:i})),this};p.prototype.prepend=function(t){return this.intro=t+this.intro,this};p.prototype.toString=function(){var t=this,e=this.sources.map(function(r,i){var o=r.separator!==void 0?r.separator:t.separator,u=(i>0?o:"")+r.content.toString();return u}).join("");return this.intro+e};p.prototype.isEmpty=function(){return!(this.intro.length&&this.intro.trim()||this.sources.some(function(t){return!t.content.isEmpty()}))};p.prototype.length=function(){return this.sources.reduce(function(t,e){return t+e.content.length()},this.intro.length)};p.prototype.trimLines=function(){return this.trim("[\\r\\n]")};p.prototype.trim=function(t){return this.trimStart(t).trimEnd(t)};p.prototype.trimStart=function(t){var e=new RegExp("^"+(t||"\\s")+"+");if(this.intro=this.intro.replace(e,""),!this.intro){var r,i=0;do if(r=this.sources[i++],!r)break;while(!r.content.trimStartAborted(t))}return this};p.prototype.trimEnd=function(t){var e=new RegExp((t||"\\s")+"+$"),r,i=this.sources.length-1;do if(r=this.sources[i--],!r){this.intro=this.intro.replace(e,"");break}while(!r.content.trimEndAborted(t));return this};f.Bundle=p;f.SourceMap=L;f.default=f;D.exports=f});var et=N((q,z)=>{var Q=J("fs"),V=T(),W=n=>typeof n=="function"?n:()=>n,_=n=>n.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&"),X=(n,t)=>t.length-n.length,Y=n=>{let t=n.values?Object.assign({},n.values):Object.assign({},n);return delete t.delimiters,delete t.include,delete t.exclude,Object.keys(t).reduce((e,r)=>{let i=Object.assign({},e);return i[r]=W(t[r]),i},{})},Z=n=>{let t=/.*/,e=null,r=!1;return n.include&&(Object.prototype.toString.call(n.include)!=="[object RegExp]"?console.warn(`Options.include must be a RegExp object, but gets an '${typeof n.include}' type.`):(r=!0,t=n.include)),n.exclude&&(Object.prototype.toString.call(n.exclude)!=="[object RegExp]"?console.warn(`Options.exclude must be a RegExp object, but gets an '${typeof n.exclude}' type.`):r||(e=n.exclude)),{include:t,exclude:e}},tt=(n,t,e,r)=>{let i=new V(n),o=null;for(;o=e.exec(n);){let u=o.index,h=u+o[0].length,s=String(r[o[1]](t));i.overwrite(u,h,s)}return i.toString()};q.replace=(n={})=>{let{include:t,exclude:e}=Z(n),r=Y(n),i=Object.keys(r).length===0,o=Object.keys(r).sort(X).map(_),{delimiters:u}=n,h=u?new RegExp(`${_(u[0])}(${o.join("|")})${_(u[1])}`,"g"):new RegExp(`\\b(${o.join("|")})\\b`,"g");return{name:"replace",setup(s){s.onLoad({filter:t},async a=>{if(e&&a.path.match(e))return;let l=await Q.promises.readFile(a.path,"utf8");return{contents:i?l:tt(l,a.path,h,r),loader:"default"}})}}};z.exports=q});export default et();
