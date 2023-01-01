var x=Object.defineProperty;var o=(i,a)=>x(i,"name",{value:a,configurable:!0});import"./jsx-runtime.8ca03ec3.js";import{c as e,A as u,M as b,C as n}from"./Props.74687dec.js";import"./iframe.e78cb6ec.js";import{F as t,W as m,a as A}from"./Form.b46e49d0.js";import{D as s,V as y}from"./Dictation.59128803.js";import"./string.bcc86dd7.js";import"./es.map.constructor.b0a81e12.js";import"./es.number.to-fixed.8cc96c5e.js";import"./XMarkIcon.46a63fc5.js";import"./index.0579b088.js";import"./index.74675b2c.js";import"./index.63f181ca.js";function p(){return p=Object.assign?Object.assign.bind():function(i){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(i[d]=r[d])}return i},p.apply(this,arguments)}o(p,"_extends");const C={},f="wrapper";function c({components:i,...a}){return e(f,p({},C,a,{components:i,mdxType:"MDXLayout"}),e(b,{title:"Components/Field",argTypes:{},component:t,mdxType:"Meta"}),e("h1",null,"Field"),e("p",null,"Let's define a story for our ",e("inlineCode",{parentName:"p"},"Field")," component"),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`import { Field } from '@bradley-r-martin/web-ui'
`)),e("h2",null,"Image"),e(n,{mdxSource:"%0A%3CWebUIConfig%3E%0A%20%20%20%20%3CField%20type='image'%20/%3E%0A%20%20%3C/WebUIConfig%3E%0A",mdxType:"Canvas"},e(m,{mdxType:"WebUIConfig"},e(t,{type:"image",mdxType:"Field"}))),e("h2",null,"Date"),e(n,{mdxSource:"%0A%3CField%20type='date'%20/%3E%0A",mdxType:"Canvas"},e(t,{type:"date",mdxType:"Field"})),e("h2",null,"Textarea"),e(n,{mdxSource:"%0A%3CField%20type='textarea'%20enhancers=%7B%7B%0A%20%20right:%20Dictation,%0A%20%20bottom:%20Vocabulary%0A%7D%7D%20/%3E%0A",mdxType:"Canvas"},e(t,{type:"textarea",enhancers:{right:s,bottom:y},mdxType:"Field"})),e("h2",null,"checkbox"),e(n,{mdxSource:"%0A%3CField%20type='checkbox'%20label='Inline'%20inline%20variant='filled'%20/%3E%0A%0A%3CField%20type='checkbox'%20label='Stacked'%20variant='outlined'%20/%3E%0A",mdxType:"Canvas"},e(t,{type:"checkbox",label:"Inline",inline:!0,variant:"filled",mdxType:"Field"}),e(t,{type:"checkbox",label:"Stacked",variant:"outlined",mdxType:"Field"})),e("h2",null,"Radio"),e(n,{mdxSource:"%0A%3CField%20type='radio'%20label='Inline'%20inline%20variant='filled'%20/%3E%0A%0A%3CField%20type='radio'%20label='Stacked'%20variant='outlined'%20/%3E%0A",mdxType:"Canvas"},e(t,{type:"radio",label:"Inline",inline:!0,variant:"filled",mdxType:"Field"}),e(t,{type:"radio",label:"Stacked",variant:"outlined",mdxType:"Field"})),e("h2",null,"Transfer"),e(n,{mdxSource:"%0A%3CField%20type='transfer'%20label='Transfer'%20orderable%20options=%7B%5B%7B%0A%20%20id:%20'1',%0A%20%20text:%20'test'%0A%7D,%20%7B%0A%20%20id:%20'2',%0A%20%20text:%20'test%202'%0A%7D%5D%7D%20/%3E%0A",mdxType:"Canvas"},e(t,{type:"transfer",label:"Transfer",orderable:!0,options:[{id:"1",text:"test"},{id:"2",text:"test 2"}],mdxType:"Field"})),e("h2",null,"with form"),e(n,{mdxSource:"%0A%3CWebUIConfig%3E%0A%20%20%20%20%3CForm%20locked=%7Bfalse%7D%3E%0A%20%20%20%20%20%20%3CField%20type='image'%20/%3E%0A%20%20%20%20%20%20%3CField%20type='textarea'%20enhancers=%7B%7B%0A%20%20%20%20%20%20right:%20Dictation,%0A%20%20%20%20%20%20bottom:%20Vocabulary%0A%20%20%20%20%7D%7D%20/%3E%0A%20%20%20%20%20%20%3CField%20type='radio'%20label='Inline'%20inline%20variant='filled'%20value='test'%20name='filter.option'%20/%3E%0A%20%20%20%20%20%20%3CField%20type='radio'%20label='Two'%20inline%20value='two'%20name='filter.option'%20/%3E%0A%20%20%20%20%20%20%3CField%20type='checkbox'%20label='Inline'%20inline%20/%3E%0A%20%20%20%20%3C/Form%3E%0A%20%20%3C/WebUIConfig%3E%0A",mdxType:"Canvas"},e(m,{mdxType:"WebUIConfig"},e(A,{locked:!1,mdxType:"Form"},e(t,{type:"image",mdxType:"Field"}),e(t,{type:"textarea",enhancers:{right:s,bottom:y},mdxType:"Field"}),e(t,{type:"radio",label:"Inline",inline:!0,variant:"filled",value:"test",name:"filter.option",mdxType:"Field"}),e(t,{type:"radio",label:"Two",inline:!0,value:"two",name:"filter.option",mdxType:"Field"}),e(t,{type:"checkbox",label:"Inline",inline:!0,mdxType:"Field"})))))}o(c,"MDXContent");c.isMDXComponent=!0;const F=o(()=>{throw new Error("Docs-only story")},"__page");F.parameters={docsOnly:!0};const l={title:"Components/Field",component:t,argTypes:{},includeStories:["__page"]},T={};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:()=>e(u,{mdxStoryNameToKey:T,mdxComponentAnnotations:l},e(c,null))};const U=["__page"];export{U as __namedExportsOrder,F as __page,l as default};
//# sourceMappingURL=Field.stories.e6e15501.js.map
