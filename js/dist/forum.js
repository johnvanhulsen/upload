module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)n.d(e,a,function(o){return t[o]}.bind(null,a));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=20)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat.extend},function(t,o,n){"use strict";function e(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}n.d(o,"a",(function(){return e}))},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat.Component},,function(t,o){t.exports=flarum.core.compat["components/TextEditor"]},,function(t,o){t.exports=flarum.core.compat["components/Modal"]},,function(t,o){t.exports=flarum.core.compat["components/Post"]},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,o){t.exports=flarum.core.compat["components/ReplyComposer"]},function(t,o){t.exports=flarum.core.compat["components/EditPostComposer"]},,,,,,function(t,o,n){"use strict";n.r(o);var e=n(0),a=n.n(e),r=n(1),i=n(10),s=n.n(i),l=n(6),p=n.n(l),u=n(2),c=n(4),A=n.n(c),d=n(8),f=n.n(d),g=n(3),h=n.n(g),E=function(t){function o(){return t.apply(this,arguments)||this}Object(u.a)(o,t);var n=o.prototype;return n.init=function(){t.prototype.init.call(this)},n.className=function(){return"Modal--small"},n.title=function(){return app.translator.trans("fof-upload.forum.upload.title")},n.content=function(){return m("div",{className:"Modal-body"},m("div",null,m("p",{style:"display: flex; justify-content: center; align-items: center;"},m("img",{src:"data:image/gif;base64,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",width:"16",style:"margin:auto;"}))))},o}(f.a),C=function(){var t=new E;app.modal.show(t)},b=function(t){function o(){return t.apply(this,arguments)||this}Object(u.a)(o,t);var n=o.prototype;return n.init=function(){t.prototype.init.call(this)},n.className=function(){return"Modal--small"},n.title=function(){return app.translator.trans("fof-upload.forum.legal.title")},n.content=function(){return m("div",{className:"Modal-body"},m("div",null,m("p",null,app.translator.trans("fof-upload.forum.legal.desc")),m("p",null,app.translator.trans("fof-upload.forum.legal.faq",{a:m("a",{href:"https://pretpark.club/veelgestelde-vragen",target:"_blank"})})),m("p",null,app.translator.trans("fof-upload.forum.legal.policy",{a:m("a",{href:"https://pretpark.club/huisregels",target:"_blank"})})),m("div",{className:"Form-group"},h.a.component({className:"Button Button--block Button--primary",children:app.translator.trans("fof-upload.forum.legal.agree"),onclick:this.accept.bind(this)}),h.a.component({className:"Button Button--block",children:app.translator.trans("fof-upload.forum.legal.disagree"),onclick:this.decline.bind(this)}))))},n.accept=function(){C(),app.legalupload=!0},n.decline=function(){app.legalupload=!1,app.modal.close()},o}(f.a),v=function(){var t=new b;app.modal.show(t)},w=n(11),B=n.n(w),Q=n(12),F=n.n(Q),y=n(13),D=n.n(y),I=n(14),L=n.n(I),U=function(t){function o(){return t.apply(this,arguments)||this}Object(u.a)(o,t);var n=o.prototype;return n.init=function(){this.textAreaObj=null,this.uploading=m.prop(!1)},n.view=function(){var t=this.uploading()?a.a.translator.trans("fof-upload.forum.states.loading"):a.a.translator.trans("fof-upload.forum.buttons.attach");return m(".Button.hasIcon.fof-upload-button.Button--icon",{className:this.uploading()?"uploading":""},[this.uploading()?F.a.component({size:"tiny",className:"LoadingIndicator--inline Button-icon"}):B()("fas fa-file-upload",{className:"Button-icon"}),m("span.Button-label",t),m("form",[m("input",{type:"file",multiple:!0,onchange:this.process.bind(this)})])])},n.process=function(t){var o=this.$("input").prop("files"),n=this;delete a.a.legalupload,v(),function t(){void 0===a.a.legalupload&&a.a.modal.component?setTimeout((function(){t()}),1e3):a.a.legalupload&&(n.loading=!0,m.redraw(),n.uploadFiles(o))}()},n.uploadFiles=function(t){this.uploading(!0),m.redraw();for(var o=new FormData,n=0;n<t.length;n++)o.append("files[]",t[n]);return a.a.request({method:"POST",url:a.a.forum.attribute("apiUrl")+"/fof/upload",serialize:function(t){return t},data:o}).then(this.success.bind(this),this.failure.bind(this))},n.failure=function(t){alert(a.a.translator.trans("fof-upload.forum.states.error")),a.a.modal.close()},n.success=function(t){var o=this;t.forEach((function(t){o.textAreaObj.insertAtCursor(t+"\n")})),a.a.modal.close(),a.a.composer.component instanceof D.a&&m.route(a.a.route.discussion(a.a.composer.component.props.discussion,"reply")),a.a.composer.component instanceof L.a&&m.route(a.a.route.post(a.a.composer.component.props.post)),setTimeout((function(){o.$("form")[0].reset(),o.uploading(!1),m.redraw()}),1e3)},o}(A.a),O=function(){function t(t,o){this.uploadButton=t,this.composerElement=o,this.handlers={},this.supportsFileDragging()&&(this.composerElement.addEventListener("dragover",this.handlers.in=this.in.bind(this)),this.composerElement.addEventListener("dragleave",this.handlers.out=this.out.bind(this)),this.composerElement.addEventListener("dragend",this.handlers.out),this.composerElement.addEventListener("drop",this.handlers.dropping=this.dropping.bind(this)),this.isDropping=this.over=!1)}var o=t.prototype;return o.supportsFileDragging=function(){var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window},o.unload=function(){this.handlers.in&&(this.composerElement.removeEventListener("dragover",this.handlers.in),this.composerElement.removeEventListener("dragleave",this.handlers.out),this.composerElement.removeEventListener("dragend",this.handlers.out),this.composerElement.removeEventListener("drop",this.handlers.dropping))},o.isNotFile=function(t){if(t.dataTransfer.items)for(var o=0;o<t.dataTransfer.items.length;o++)if("file"!==t.dataTransfer.items[o].kind)return!0;return!1},o.in=function(t){this.isNotFile(t)||(t.preventDefault(),this.over||(this.composerElement.classList.add("fof-upload-dragging"),this.over=!0))},o.out=function(t){this.isNotFile(t)||(t.preventDefault(),this.over&&(this.composerElement.classList.remove("fof-upload-dragging"),this.over=!1))},o.dropping=function(t){var o=this;this.isNotFile(t)||(t.preventDefault(),this.isDropping||(this.isDropping=!0,this.composerElement.classList.add("fof-upload-dropping"),this.uploadButton.uploadFiles(t.dataTransfer.files).then((function(){o.composerElement.classList.remove("fof-upload-dropping"),o.isDropping=!1}))))},t}(),x=function(){function t(t,o){this.uploadButton=t,o.addEventListener("paste",this.paste.bind(this))}return t.prototype.paste=function(t){if(t.clipboardData&&t.clipboardData.items){for(var o=t.clipboardData.items,n=[],e=0;e<o.length;e++)-1!==o[e].type.indexOf("image")&&n.push(o[e].getAsFile());n.length>0&&(t.preventDefault(),this.uploadButton.uploadFiles(n))}},t}();a.a.initializers.add("fof-upload",(function(){Object(r.extend)(p.a.prototype,"init",(function(){a.a.forum.attribute("fof-upload.canUpload")&&(this.fofUploadButton=new U,this.fofUploadButton.textAreaObj=this)})),Object(r.extend)(p.a.prototype,"controlItems",(function(t){a.a.forum.attribute("fof-upload.canUpload")&&t.add("fof-upload",this.fofUploadButton.render())})),Object(r.extend)(p.a.prototype,"config",(function(t,o,n){if(!o&&a.a.forum.attribute("fof-upload.canUpload")){var e=new O(this.fofUploadButton,this.$().parents(".Composer")[0]),i=function(){e.unload()};n.onunload?Object(r.extend)(n,"onunload",i):n.onunload=i}})),Object(r.extend)(p.a.prototype,"configTextarea",(function(t,o,n){n||a.a.forum.attribute("fof-upload.canUpload")&&new x(this.fofUploadButton,o)})),Object(r.extend)(s.a.prototype,"config",(function(t){var o=this;t||this.$("[data-fof-upload-download-uuid]").unbind("click").on("click",(function(t){if(t.preventDefault(),t.stopPropagation(),a.a.forum.attribute("fof-upload.canDownload")){var n=a.a.forum.attribute("apiUrl")+"/fof/download";n+="/"+t.currentTarget.dataset.fofUploadDownloadUuid,n+="/"+o.props.post.id(),n+="/"+a.a.session.csrfToken,window.open(n)}else alert(a.a.translator.trans("fof-upload.forum.states.unauthorized"))}))}))}))}]);
//# sourceMappingURL=forum.js.map