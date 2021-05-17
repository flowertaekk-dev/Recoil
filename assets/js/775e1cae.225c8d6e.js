(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(8),r=(n(0),n(151)),i={title:"atom(options)",sidebar_label:"atom()"},c={unversionedId:"api-reference/core/atom",id:"api-reference/core/atom",isDocsHomePage:!1,title:"atom(options)",description:"An atom represents state in Recoil.  The atom() function returns a writeable RecoilState object.",source:"@site/docs/api-reference/core/atom.md",slug:"/api-reference/core/atom",permalink:"/docs/api-reference/core/atom",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/atom.md",version:"current",sidebar_label:"atom()",sidebar:"docs",previous:{title:"<RecoilRoot ...props />",permalink:"/docs/api-reference/core/RecoilRoot"},next:{title:"selector(options)",permalink:"/docs/api-reference/core/selector"}},l=[{value:"Example",id:"example",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An ",Object(r.b)("em",{parentName:"p"},"atom")," represents state in Recoil.  The ",Object(r.b)("inlineCode",{parentName:"p"},"atom()")," function returns a writeable ",Object(r.b)("inlineCode",{parentName:"p"},"RecoilState")," object."),Object(r.b)("hr",null),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"function atom<T>({\n  key: string,\n  default: T | Promise<T> | RecoilValue<T>,\n\n  effects_UNSTABLE?: $ReadOnlyArray<AtomEffect<T>>,\n\n  dangerouslyAllowMutability?: boolean,\n}): RecoilState<T>\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"default")," - The initial value of the atom or a ",Object(r.b)("inlineCode",{parentName:"li"},"Promise")," or another atom or selector representing a value of the same type."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"effects_UNSTABLE")," - An optional array of ",Object(r.b)("a",{parentName:"li",href:"/docs/guides/atom-effects"},"Atom Effects")," for the atom."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - In some cases it may be desireable allow mutating of objects stored in atoms that don't represent state changes.  Use this option to override freezing objects in development mode.")),Object(r.b)("hr",null),Object(r.b)("p",null,"Recoil manages atom state changes to know when to notify components subscribing to that atom to re-render, so you should use the hooks listed below to change atom state.  If an object stored in an atom was mutated directly it may bypass this and cause state changes without properly notifying subscribing components.  To help detect bugs Recoil will freeze objects stored in atoms in development mode."),Object(r.b)("p",null,"Most often, you'll use the following hooks to interact with atoms:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilState"},Object(r.b)("inlineCode",{parentName:"a"},"useRecoilState()")),": Use this hook when you intend on both reading and writing to the atom. This hook subscribes the component to the atom."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilValue"},Object(r.b)("inlineCode",{parentName:"a"},"useRecoilValue()")),": Use this hook when you intend on only reading the atom. This hook subscribes the component to the atom."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},Object(r.b)("inlineCode",{parentName:"a"},"useSetRecoilState()")),": Use this hook when you intend on only writing to the atom."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/api-reference/core/useResetRecoilState"},Object(r.b)("inlineCode",{parentName:"a"},"useResetRecoilState()")),": Use this hook to reset an atom to its default value.")),Object(r.b)("p",null,"For rare cases where you need to read an atom's value without subscribing to the component, see ",Object(r.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},Object(r.b)("inlineCode",{parentName:"a"},"useRecoilCallback()")),"."),Object(r.b)("p",null,"You can initialize an atom either with a static value or with a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," or a ",Object(r.b)("inlineCode",{parentName:"p"},"RecoilValue")," representing a value of the same type.  Because the ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," may be pending or the default selector may be asynchronous it means that the atom value may also be pending or throw an error when reading.  Note that you cannot currently assign a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," when setting an atom.  Please use ",Object(r.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selectors")," for async functions."),Object(r.b)("p",null,"Atoms cannot be used to store ",Object(r.b)("inlineCode",{parentName:"p"},"Promise"),"'s or ",Object(r.b)("inlineCode",{parentName:"p"},"RecoilValue"),"'s directly, but they may be wrapped in an object.  Note that ",Object(r.b)("inlineCode",{parentName:"p"},"Promise"),"'s may be mutable.  Atoms can be set to a ",Object(r.b)("inlineCode",{parentName:"p"},"function"),", as long as it is pure, but to do so you may need to use the updater form of setters. (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"set(myAtom, () => myFunc);"),")."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, useRecoilState} from 'recoil';\n\nconst counter = atom({\n  key: 'myCounter',\n  default: 0,\n});\n\nfunction Counter() {\n  const [count, setCount] = useRecoilState(counter);\n  const incrementByOne = () => setCount(count + 1);\n\n  return (\n    <div>\n      Count: {count}\n      <br />\n      <button onClick={incrementByOne}>Increment</button>\n    </div>\n  );\n}\n")))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=o,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||r;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);