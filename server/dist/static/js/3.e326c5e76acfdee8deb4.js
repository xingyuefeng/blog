webpackJsonp([3],{"0zxy":function(e,t){},EFqf:function(e,t,n){(function(t){(function(){"use strict";var t={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:c,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:c,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:c,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};function n(e){this.tokens=[],this.tokens.links={},this.options=e||d.defaults,this.rules=t.normal,this.options.gfm&&(this.options.tables?this.rules=t.tables:this.rules=t.gfm)}t.bullet=/(?:[*+-]|\d+\.)/,t.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,t.item=h(t.item,"gm")(/bull/g,t.bullet)(),t.list=h(t.list)(/bull/g,t.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+t.def.source+")")(),t.blockquote=h(t.blockquote)("def",t.def)(),t._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",t.html=h(t.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,t._tag)(),t.paragraph=h(t.paragraph)("hr",t.hr)("heading",t.heading)("lheading",t.lheading)("blockquote",t.blockquote)("tag","<"+t._tag)("def",t.def)(),t.normal=g({},t),t.gfm=g({},t.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),t.gfm.paragraph=h(t.paragraph)("(?!","(?!"+t.gfm.fences.source.replace("\\1","\\2")+"|"+t.list.source.replace("\\1","\\3")+"|")(),t.tables=g({},t.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),n.rules=t,n.lex=function(e,t){return new n(t).lex(e)},n.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},n.prototype.token=function(e,n,s){var r,i,l,o,h,a,p,u,c;for(e=e.replace(/^ +$/gm,"");e;)if((l=this.rules.newline.exec(e))&&(e=e.substring(l[0].length),l[0].length>1&&this.tokens.push({type:"space"})),l=this.rules.code.exec(e))e=e.substring(l[0].length),l=l[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?l:l.replace(/\n+$/,"")});else if(l=this.rules.fences.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"code",lang:l[2],text:l[3]||""});else if(l=this.rules.heading.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"heading",depth:l[1].length,text:l[2]});else if(n&&(l=this.rules.nptable.exec(e))){for(e=e.substring(l[0].length),a={type:"table",header:l[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:l[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:l[3].replace(/\n$/,"").split("\n")},u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=a.cells[u].split(/ *\| */);this.tokens.push(a)}else if(l=this.rules.lheading.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"heading",depth:"="===l[2]?1:2,text:l[1]});else if(l=this.rules.hr.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"hr"});else if(l=this.rules.blockquote.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"blockquote_start"}),l=l[0].replace(/^ *> ?/gm,""),this.token(l,n,!0),this.tokens.push({type:"blockquote_end"});else if(l=this.rules.list.exec(e)){for(e=e.substring(l[0].length),o=l[2],this.tokens.push({type:"list_start",ordered:o.length>1}),r=!1,c=(l=l[0].match(this.rules.item)).length,u=0;u<c;u++)p=(a=l[u]).length,~(a=a.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(p-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+p+"}","gm"),"")),this.options.smartLists&&u!==c-1&&(o===(h=t.bullet.exec(l[u+1])[0])||o.length>1&&h.length>1||(e=l.slice(u+1).join("\n")+e,u=c-1)),i=r||/\n\n(?!\s*$)/.test(a),u!==c-1&&(r="\n"===a.charAt(a.length-1),i||(i=r)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(a,!1,s),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(l=this.rules.html.exec(e))e=e.substring(l[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===l[1]||"script"===l[1]||"style"===l[1]),text:l[0]});else if(!s&&n&&(l=this.rules.def.exec(e)))e=e.substring(l[0].length),this.tokens.links[l[1].toLowerCase()]={href:l[2],title:l[3]};else if(n&&(l=this.rules.table.exec(e))){for(e=e.substring(l[0].length),a={type:"table",header:l[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:l[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:l[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=a.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(n&&(l=this.rules.paragraph.exec(e)))e=e.substring(l[0].length),this.tokens.push({type:"paragraph",text:"\n"===l[1].charAt(l[1].length-1)?l[1].slice(0,-1):l[1]});else if(l=this.rules.text.exec(e))e=e.substring(l[0].length),this.tokens.push({type:"text",text:l[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var s={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ <>]+(@|:\/)[^ <>]+)>/,url:c,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:c,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};function r(e,t){if(this.options=t||d.defaults,this.links=e,this.rules=s.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=s.breaks:this.rules=s.gfm:this.options.pedantic&&(this.rules=s.pedantic)}function i(e){this.options=e||{}}function l(e){this.tokens=[],this.token=null,this.options=e||d.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function h(e,t){return e=e.source,t=t||"",function n(s,r){return s?(r=(r=r.source||r).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(s,r),n):new RegExp(e,t)}}function a(e,t){return p[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?p[" "+e]=e+"/":p[" "+e]=e.replace(/[^/]*$/,"")),e=p[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}s._inside=/(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,s._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,s.link=h(s.link)("inside",s._inside)("href",s._href)(),s.reflink=h(s.reflink)("inside",s._inside)(),s.normal=g({},s),s.pedantic=g({},s.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),s.gfm=g({},s.normal,{escape:h(s.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:h(s.text)("]|","~]|")("|","|https?://|")()}),s.breaks=g({},s.gfm,{br:h(s.br)("{2,}","*")(),text:h(s.gfm.text)("{2,}","*")()}),r.rules=s,r.output=function(e,t,n){return new r(t,n).output(e)},r.prototype.output=function(e){for(var t,n,s,r,i="";e;)if(r=this.rules.escape.exec(e))e=e.substring(r[0].length),i+=r[1];else if(r=this.rules.autolink.exec(e))e=e.substring(r[0].length),"@"===r[2]?(n=o(":"===r[1].charAt(6)?this.mangle(r[1].substring(7)):this.mangle(r[1])),s=this.mangle("mailto:")+n):s=n=o(r[1]),i+=this.renderer.link(s,null,n);else if(this.inLink||!(r=this.rules.url.exec(e))){if(r=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(r[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(r[0])&&(this.inLink=!1),e=e.substring(r[0].length),i+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):o(r[0]):r[0];else if(r=this.rules.link.exec(e))e=e.substring(r[0].length),this.inLink=!0,i+=this.outputLink(r,{href:r[2],title:r[3]}),this.inLink=!1;else if((r=this.rules.reflink.exec(e))||(r=this.rules.nolink.exec(e))){if(e=e.substring(r[0].length),t=(r[2]||r[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){i+=r[0].charAt(0),e=r[0].substring(1)+e;continue}this.inLink=!0,i+=this.outputLink(r,t),this.inLink=!1}else if(r=this.rules.strong.exec(e))e=e.substring(r[0].length),i+=this.renderer.strong(this.output(r[2]||r[1]));else if(r=this.rules.em.exec(e))e=e.substring(r[0].length),i+=this.renderer.em(this.output(r[2]||r[1]));else if(r=this.rules.code.exec(e))e=e.substring(r[0].length),i+=this.renderer.codespan(o(r[2].trim(),!0));else if(r=this.rules.br.exec(e))e=e.substring(r[0].length),i+=this.renderer.br();else if(r=this.rules.del.exec(e))e=e.substring(r[0].length),i+=this.renderer.del(this.output(r[1]));else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),i+=this.renderer.text(o(this.smartypants(r[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(r[0].length),s=n=o(r[1]),i+=this.renderer.link(s,null,n);return i},r.prototype.outputLink=function(e,t){var n=o(t.href),s=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,o(e[1]))},r.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},r.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",s=e.length,r=0;r<s;r++)t=e.charCodeAt(r),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},i.prototype.code=function(e,t,n){if(this.options.highlight){var s=this.options.highlight(e,t);null!=s&&s!==e&&(n=!0,e=s)}return t?'<pre><code class="'+this.options.langPrefix+o(t,!0)+'">'+(n?e:o(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:o(e,!0))+"\n</code></pre>"},i.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},i.prototype.html=function(e){return e},i.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},i.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},i.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},i.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},i.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},i.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},i.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},i.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},i.prototype.strong=function(e){return"<strong>"+e+"</strong>"},i.prototype.em=function(e){return"<em>"+e+"</em>"},i.prototype.codespan=function(e){return"<code>"+e+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(e){return"<del>"+e+"</del>"},i.prototype.link=function(e,t,n){if(this.options.sanitize){try{var s=decodeURIComponent((r=e,r.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===s.indexOf("javascript:")||0===s.indexOf("vbscript:")||0===s.indexOf("data:"))return n}var r;this.options.baseUrl&&!u.test(e)&&(e=a(this.options.baseUrl,e));var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},i.prototype.image=function(e,t,n){this.options.baseUrl&&!u.test(e)&&(e=a(this.options.baseUrl,e));var s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">"},i.prototype.text=function(e){return e},l.parse=function(e,t,n){return new l(t,n).parse(e)},l.prototype.parse=function(e){this.inline=new r(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},l.prototype.next=function(){return this.token=this.tokens.pop()},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,s,r="",i="";for(n="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(r+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});i+=this.renderer.tablerow(n)}return this.renderer.table(r,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var l=this.token.ordered;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,l);case"list_item_start":for(i="";"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":var o=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(o);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var p={},u=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function c(){}function g(e){for(var t,n,s=1;s<arguments.length;s++)for(n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function d(e,t,s){if(s||"function"==typeof t){s||(s=t,t=null);var r,i,h=(t=g({},d.defaults,t||{})).highlight,a=0;try{r=n.lex(e,t)}catch(e){return s(e)}i=r.length;var p=function(e){if(e)return t.highlight=h,s(e);var n;try{n=l.parse(r,t)}catch(t){e=t}return t.highlight=h,e?s(e):s(null,n)};if(!h||h.length<3)return p();if(delete t.highlight,!i)return p();for(;a<r.length;a++)!function(e){"code"!==e.type?--i||p():h(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--i||p():(e.text=n,e.escaped=!0,void(--i||p()))})}(r[a])}else try{return t&&(t=g({},d.defaults,t)),l.parse(n.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(t||d.defaults).silent)return"<p>An error occurred:</p><pre>"+o(e.message+"",!0)+"</pre>";throw e}}c.exec=c,d.options=d.setOptions=function(e){return g(d.defaults,e),d},d.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new i,xhtml:!1,baseUrl:null},d.Parser=l,d.parser=l.parse,d.Renderer=i,d.Lexer=n,d.lexer=n.lex,d.InlineLexer=r,d.inlineLexer=r.output,d.parse=d,e.exports=d}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,n("DuR2"))},G8tP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("EFqf"),r=n.n(s),i={data:function(){return{title:"",content:""}},created:function(){var e=this,t=this.$route.params.id;this.axios.post("/article/detail",{id:t}).then(function(t){0===t.data.code&&(e.title=t.data.data.title,e.content=r()(t.data.data.content))})}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"article_title"},[this._v(this._s(this.title))]),this._v(" "),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"detail",domProps:{innerHTML:this._s(this.content)}})])},staticRenderFns:[]};var o=n("VU/8")(i,l,!1,function(e){n("0zxy")},null,null);t.default=o.exports}});
//# sourceMappingURL=3.e326c5e76acfdee8deb4.js.map