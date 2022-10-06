"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[902],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5281:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],a={id:"testing",title:"Testing with Jest",slug:"/testing"},l=void 0,u={unversionedId:"guides/testing",id:"guides/testing",title:"Testing with Jest",description:"Since FlashList does not immediately render but waits for the size of the underlying ScrollView (unless you specify estimatedListSize), we need to mock triggering onLayout event.",source:"@site/docs/guides/testing.md",sourceDirName:"guides",slug:"/testing",permalink:"/flash-list/docs/testing",editUrl:"https://github.com/shopify/flash-list/edit/main/docusaurus/docs/guides/testing.md",tags:[],version:"current",lastUpdatedBy:"James Simpson",lastUpdatedAt:1665073032,formattedLastUpdatedAt:"10/6/2022",frontMatter:{id:"testing",title:"Testing with Jest",slug:"/testing"},sidebar:"autoSidebar",previous:{title:"SectionList",permalink:"/flash-list/docs/guides/section-list"},next:{title:"Known issues",permalink:"/flash-list/docs/known-issues"}},c=[{value:"Setup",id:"setup",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"FlashList")," does not immediately render but waits for the size of the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," (unless you specify ",(0,o.kt)("a",{parentName:"p",href:"usage#estimatedlistsize"},(0,o.kt)("inlineCode",{parentName:"a"},"estimatedListSize")),"), we need to mock triggering ",(0,o.kt)("inlineCode",{parentName:"p"},"onLayout")," event."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Add the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-setup.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'require("@shopify/flash-list/jestSetup");\n')),(0,o.kt)("p",null,"To be sure, check if your jest.config.js file contains:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\npreset: 'react-native',\nsetupFiles: ['./jest-setup.js'],\n...\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is an example of using ",(0,o.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-testing-library/"},(0,o.kt)("inlineCode",{parentName:"a"},"@testing-library/react-native")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { render } from "@testing-library/react-native";\n\ndescribe("MyFlashListComponent", () => {\n  it("renders items", () => {\n    const { getByText } = render(<MyFlashListComponent />);\n    const element = getByText("Title of one of the items");\n    // Do something with element ...\n  });\n});\n')))}d.isMDXComponent=!0}}]);