var z=Object.defineProperty;var I=(e,t)=>{for(var r in t)z(e,r,{get:t[r],enumerable:!0})};var b={};I(b,{IntoUnderlyingByteSource:()=>M,IntoUnderlyingSink:()=>T,IntoUnderlyingSource:()=>q,MinifyConfig:()=>L,PipeOptions:()=>C,PolishConfig:()=>Y,QueuingStrategy:()=>S,R2Range:()=>$,ReadableStreamGetReaderOptions:()=>F,RequestRedirect:()=>Z,__wbg_buffer_610b70c8fd30da2d:()=>Ct,__wbg_buffer_cf65c07de34b9a08:()=>lt,__wbg_byobRequest_a3c74c3694777d1b:()=>Et,__wbg_byteLength_1fef7842ca4200fa:()=>Tt,__wbg_byteOffset_ede786cfcf88d3dd:()=>St,__wbg_bytesliteral_efe7d360639bf32b:()=>At,__wbg_call_9495de66fdbe016b:()=>pt,__wbg_cf_23036f27554431ca:()=>et,__wbg_close_045ed342139beb7d:()=>qt,__wbg_close_a41954830b65c455:()=>$t,__wbg_enqueue_3a8a8e67e44d2567:()=>Ft,__wbg_headers_ab5251d2727ac41e:()=>tt,__wbg_instanceof_Error_749a7378f4439ee0:()=>_t,__wbg_length_27a2afe8ab42b09f:()=>dt,__wbg_log_7bb108d119bafbc1:()=>vt,__wbg_method_d1ee174c753ca2be:()=>G,__wbg_new_15d3966e9981a196:()=>Lt,__wbg_new_9d3a9ce4282a18a8:()=>bt,__wbg_new_f1c3a9c2533a55b8:()=>rt,__wbg_new_f9876326328f45ed:()=>Dt,__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5:()=>wt,__wbg_newwithlength_b56c882b57805732:()=>ct,__wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63:()=>ut,__wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be:()=>ft,__wbg_resolve_fd40f858d9db1a04:()=>mt,__wbg_respond_f4778bef04e912a6:()=>Ot,__wbg_set_17499e8aa4003ebd:()=>ht,__wbg_set_6aa458a4ebdb65cb:()=>It,__wbg_set_a5d34c36a1a4ebd1:()=>nt,__wbg_then_ec5db6d509eb475f:()=>kt,__wbg_toString_cec163b212643722:()=>st,__wbg_url_bd2775644ef804ec:()=>Q,__wbg_view_d1a31268af734e5d:()=>Mt,__wbindgen_cb_drop:()=>jt,__wbindgen_closure_wrapper716:()=>Nt,__wbindgen_debug_string:()=>yt,__wbindgen_memory:()=>gt,__wbindgen_number_new:()=>zt,__wbindgen_object_clone_ref:()=>Wt,__wbindgen_object_drop_ref:()=>it,__wbindgen_string_get:()=>ot,__wbindgen_string_new:()=>at,__wbindgen_throw:()=>xt,fetch:()=>W,getMemory:()=>H});function v(){return"bytes"}import N from"./index.wasm";var R=new WebAssembly.Instance(N,{"./index_bg.js":b}),n=R.exports;function H(){return n.memory}var g=new Array(128).fill(void 0);g.push(void 0,null,!0,!1);function _(e){return g[e]}var l=0,m=null;function k(){return(m===null||m.byteLength===0)&&(m=new Uint8Array(n.memory.buffer)),m}var P=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder,E=new P("utf-8"),U=typeof E.encodeInto=="function"?function(e,t){return E.encodeInto(e,t)}:function(e,t){let r=E.encode(e);return t.set(r),{read:e.length,written:r.length}};function O(e,t,r){if(r===void 0){let u=E.encode(e),x=t(u.length);return k().subarray(x,x+u.length).set(u),l=u.length,x}let o=e.length,s=t(o),p=k(),c=0;for(;c<o;c++){let u=e.charCodeAt(c);if(u>127)break;p[s+c]=u}if(c!==o){c!==0&&(e=e.slice(c)),s=r(s,o,o=c+e.length*3);let u=k().subarray(s+c,s+o);c+=U(e,u).written}return l=c,s}function d(e){return e==null}var j=null;function f(){return(j===null||j.byteLength===0)&&(j=new Int32Array(n.memory.buffer)),j}var h=g.length;function J(e){e<132||(g[e]=h,h=e)}function a(e){let t=_(e);return J(e),t}var V=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder,D=new V("utf-8",{ignoreBOM:!0,fatal:!0});D.decode();function y(e,t){return D.decode(k().subarray(e,e+t))}function i(e){h===g.length&&g.push(g.length+1);let t=h;return h=g[t],g[t]=e,t}function A(e){let t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){let s=e.description;return s==null?"Symbol":`Symbol(${s})`}if(t=="function"){let s=e.name;return typeof s=="string"&&s.length>0?`Function(${s})`:"Function"}if(Array.isArray(e)){let s=e.length,p="[";s>0&&(p+=A(e[0]));for(let c=1;c<s;c++)p+=", "+A(e[c]);return p+="]",p}let r=/\[object ([^\]]+)\]/.exec(toString.call(e)),o;if(r.length>1)o=r[1];else return toString.call(e);if(o=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:o}function B(e,t,r,o){let s={a:e,b:t,cnt:1,dtor:r},p=(...c)=>{s.cnt++;let u=s.a;s.a=0;try{return o(u,s.b,...c)}finally{--s.cnt===0?n.__wbindgen_export_2.get(s.dtor)(u,s.b):s.a=u}};return p.original=s,p}function K(e,t,r){n.__wbindgen_export_3(e,t,i(r))}function W(e,t,r){let o=n.fetch(i(e),i(t),i(r));return a(o)}function w(e,t){try{return e.apply(this,t)}catch(r){n.__wbindgen_export_4(i(r))}}function X(e,t,r,o){n.__wbindgen_export_5(e,t,i(r),i(o))}var Y=Object.freeze({Off:0,0:"Off",Lossy:1,1:"Lossy",Lossless:2,2:"Lossless"}),Z=Object.freeze({Error:0,0:"Error",Follow:1,1:"Follow",Manual:2,2:"Manual"}),M=class{__destroy_into_raw(){let t=this.ptr;return this.ptr=0,t}free(){let t=this.__destroy_into_raw();n.__wbg_intounderlyingbytesource_free(t)}get type(){let t=n.intounderlyingbytesource_type(this.ptr);return a(t)}get autoAllocateChunkSize(){return n.intounderlyingbytesource_autoAllocateChunkSize(this.ptr)>>>0}start(t){n.intounderlyingbytesource_start(this.ptr,i(t))}pull(t){let r=n.intounderlyingbytesource_pull(this.ptr,i(t));return a(r)}cancel(){let t=this.__destroy_into_raw();n.intounderlyingbytesource_cancel(t)}},T=class{__destroy_into_raw(){let t=this.ptr;return this.ptr=0,t}free(){let t=this.__destroy_into_raw();n.__wbg_intounderlyingsink_free(t)}write(t){let r=n.intounderlyingsink_write(this.ptr,i(t));return a(r)}close(){let t=this.__destroy_into_raw(),r=n.intounderlyingsink_close(t);return a(r)}abort(t){let r=this.__destroy_into_raw(),o=n.intounderlyingsink_abort(r,i(t));return a(o)}},q=class{__destroy_into_raw(){let t=this.ptr;return this.ptr=0,t}free(){let t=this.__destroy_into_raw();n.__wbg_intounderlyingsource_free(t)}pull(t){let r=n.intounderlyingsource_pull(this.ptr,i(t));return a(r)}cancel(){let t=this.__destroy_into_raw();n.intounderlyingsource_cancel(t)}},L=class{__destroy_into_raw(){let t=this.ptr;return this.ptr=0,t}free(){let t=this.__destroy_into_raw();n.__wbg_minifyconfig_free(t)}get js(){return n.__wbg_get_minifyconfig_js(this.ptr)!==0}set js(t){n.__wbg_set_minifyconfig_js(this.ptr,t)}get html(){return n.__wbg_get_minifyconfig_html(this.ptr)!==0}set html(t){n.__wbg_set_minifyconfig_html(this.ptr,t)}get css(){return n.__wbg_get_minifyconfig_css(this.ptr)!==0}set css(t){n.__wbg_set_minifyconfig_css(this.ptr,t)}},C=class{__destroy_into_raw(){let t=this.ptr;return this.ptr=0,t}free(){let t=this.__destroy_into_raw();n.__wbg_pipeoptions_free(t)}get preventClose(){return n.pipeoptions_preventClose(this.ptr)!==0}get preventCancel(){return n.pipeoptions_preventCancel(this.ptr)!==0}get preventAbort(){return n.pipeoptions_preventAbort(this.ptr)!==0}get signal(){let t=n.pipeoptions_signal(this.ptr);return a(t)}},S=class{__destroy_into_raw(){let t=this.ptr;return this.ptr=0,t}free(){let t=this.__destroy_into_raw();n.__wbg_queuingstrategy_free(t)}get highWaterMark(){return n.queuingstrategy_highWaterMark(this.ptr)}},$=class{__destroy_into_raw(){let t=this.ptr;return this.ptr=0,t}free(){let t=this.__destroy_into_raw();n.__wbg_r2range_free(t)}get offset(){try{let o=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_r2range_offset(o,this.ptr);var t=f()[o/4+0],r=f()[o/4+1];return t===0?void 0:r>>>0}finally{n.__wbindgen_add_to_stack_pointer(16)}}set offset(t){n.__wbg_set_r2range_offset(this.ptr,!d(t),d(t)?0:t)}get length(){try{let o=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_r2range_length(o,this.ptr);var t=f()[o/4+0],r=f()[o/4+1];return t===0?void 0:r>>>0}finally{n.__wbindgen_add_to_stack_pointer(16)}}set length(t){n.__wbg_set_r2range_length(this.ptr,!d(t),d(t)?0:t)}get suffix(){try{let o=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_r2range_suffix(o,this.ptr);var t=f()[o/4+0],r=f()[o/4+1];return t===0?void 0:r>>>0}finally{n.__wbindgen_add_to_stack_pointer(16)}}set suffix(t){n.__wbg_set_r2range_suffix(this.ptr,!d(t),d(t)?0:t)}},F=class{__destroy_into_raw(){let t=this.ptr;return this.ptr=0,t}free(){let t=this.__destroy_into_raw();n.__wbg_readablestreamgetreaderoptions_free(t)}get mode(){let t=n.readablestreamgetreaderoptions_mode(this.ptr);return a(t)}};function G(e,t){let r=_(t).method,o=O(r,n.__wbindgen_export_0,n.__wbindgen_export_1),s=l;f()[e/4+1]=s,f()[e/4+0]=o}function Q(e,t){let r=_(t).url,o=O(r,n.__wbindgen_export_0,n.__wbindgen_export_1),s=l;f()[e/4+1]=s,f()[e/4+0]=o}function tt(e){let t=_(e).headers;return i(t)}function et(e){let t=_(e).cf;return d(t)?0:i(t)}function rt(){return w(function(){let e=new Headers;return i(e)},arguments)}function nt(){return w(function(e,t,r,o,s){_(e).set(y(t,r),y(o,s))},arguments)}function ot(e,t){let r=_(t),o=typeof r=="string"?r:void 0;var s=d(o)?0:O(o,n.__wbindgen_export_0,n.__wbindgen_export_1),p=l;f()[e/4+1]=p,f()[e/4+0]=s}function _t(e){let t;try{t=_(e)instanceof Error}catch{t=!1}return t}function st(e){let t=_(e).toString();return i(t)}function it(e){a(e)}function ct(e){let t=new Uint8Array(e>>>0);return i(t)}function ut(){return w(function(e,t){let r=new Response(_(e),_(t));return i(r)},arguments)}function ft(){return w(function(e,t){let r=new Response(_(e),_(t));return i(r)},arguments)}function pt(){return w(function(e,t,r){let o=_(e).call(_(t),_(r));return i(o)},arguments)}function at(e,t){let r=y(e,t);return i(r)}function bt(e,t){try{var r={a:e,b:t},o=(p,c)=>{let u=r.a;r.a=0;try{return X(u,r.b,p,c)}finally{r.a=u}};let s=new Promise(o);return i(s)}finally{r.a=r.b=0}}function dt(e){return _(e).length}function gt(){let e=n.memory;return i(e)}function lt(e){let t=_(e).buffer;return i(t)}function wt(e,t,r){let o=new Uint8Array(_(e),t>>>0,r>>>0);return i(o)}function ht(e,t,r){_(e).set(_(t),r>>>0)}function yt(e,t){let r=A(_(t)),o=O(r,n.__wbindgen_export_0,n.__wbindgen_export_1),s=l;f()[e/4+1]=s,f()[e/4+0]=o}function xt(e,t){throw new Error(y(e,t))}function mt(e){let t=Promise.resolve(_(e));return i(t)}function jt(e){let t=a(e).original;return t.cnt--==1?(t.a=0,!0):!1}function kt(e,t){let r=_(e).then(_(t));return i(r)}function Et(e){let t=_(e).byobRequest;return d(t)?0:i(t)}function Ot(e,t){_(e).respond(t>>>0)}function At(){let e=v();return i(e)}function Mt(e){let t=_(e).view;return d(t)?0:i(t)}function Tt(e){return _(e).byteLength}function qt(e){_(e).close()}function Lt(e,t){let r=new Error(y(e,t));return i(r)}function Ct(e){let t=_(e).buffer;return i(t)}function St(e){return _(e).byteOffset}function $t(e){_(e).close()}function Ft(e,t){_(e).enqueue(_(t))}function Wt(e){let t=_(e);return i(t)}function vt(e){console.log(_(e))}function Dt(){let e=new Object;return i(e)}function zt(e){return i(e)}function It(){return w(function(e,t,r){return Reflect.set(_(e),_(t),_(r))},arguments)}function Nt(e,t,r){let o=B(e,t,34,K);return i(o)}import Kt from"./index.wasm";(void 0)?.();var Xt={fetch:W,scheduled:void 0,queue:void 0};export{M as IntoUnderlyingByteSource,T as IntoUnderlyingSink,q as IntoUnderlyingSource,L as MinifyConfig,C as PipeOptions,Y as PolishConfig,S as QueuingStrategy,$ as R2Range,F as ReadableStreamGetReaderOptions,Z as RequestRedirect,Ct as __wbg_buffer_610b70c8fd30da2d,lt as __wbg_buffer_cf65c07de34b9a08,Et as __wbg_byobRequest_a3c74c3694777d1b,Tt as __wbg_byteLength_1fef7842ca4200fa,St as __wbg_byteOffset_ede786cfcf88d3dd,At as __wbg_bytesliteral_efe7d360639bf32b,pt as __wbg_call_9495de66fdbe016b,et as __wbg_cf_23036f27554431ca,qt as __wbg_close_045ed342139beb7d,$t as __wbg_close_a41954830b65c455,Ft as __wbg_enqueue_3a8a8e67e44d2567,tt as __wbg_headers_ab5251d2727ac41e,_t as __wbg_instanceof_Error_749a7378f4439ee0,dt as __wbg_length_27a2afe8ab42b09f,vt as __wbg_log_7bb108d119bafbc1,G as __wbg_method_d1ee174c753ca2be,Lt as __wbg_new_15d3966e9981a196,bt as __wbg_new_9d3a9ce4282a18a8,rt as __wbg_new_f1c3a9c2533a55b8,Dt as __wbg_new_f9876326328f45ed,wt as __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5,ct as __wbg_newwithlength_b56c882b57805732,ut as __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63,ft as __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be,mt as __wbg_resolve_fd40f858d9db1a04,Ot as __wbg_respond_f4778bef04e912a6,ht as __wbg_set_17499e8aa4003ebd,It as __wbg_set_6aa458a4ebdb65cb,nt as __wbg_set_a5d34c36a1a4ebd1,kt as __wbg_then_ec5db6d509eb475f,st as __wbg_toString_cec163b212643722,Q as __wbg_url_bd2775644ef804ec,Mt as __wbg_view_d1a31268af734e5d,jt as __wbindgen_cb_drop,Nt as __wbindgen_closure_wrapper716,yt as __wbindgen_debug_string,gt as __wbindgen_memory,zt as __wbindgen_number_new,Wt as __wbindgen_object_clone_ref,it as __wbindgen_object_drop_ref,ot as __wbindgen_string_get,at as __wbindgen_string_new,xt as __wbindgen_throw,Xt as default,W as fetch,H as getMemory,Kt as wasmModule};
