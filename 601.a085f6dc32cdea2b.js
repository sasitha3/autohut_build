"use strict";(self.webpackChunkstorefront=self.webpackChunkstorefront||[]).push([[601],{7516:(Z,b,s)=>{s.d(b,{p:()=>m});var n=s(5e3),p=s(9808);function f(l,u){if(1&l&&(n.ynx(0),n.TgZ(1,"li",3),n.TgZ(2,"a",4),n._UZ(3,"img",5),n.TgZ(4,"span",6),n._uU(5),n.qZA(),n.qZA(),n.qZA(),n._UZ(6,"li",7),n.BQk()),2&l){const i=u.$implicit;n.xp6(3),n.Q6J("src",i.image,n.LSH),n.xp6(2),n.Oqu(i.name)}}let m=(()=>{class l{constructor(){this.layout="columns-8-full",this.brands=[],this.classBlock=!0,this.classBlockBrands=!0}get classBlockBrandsLayoutColumns8Full(){return"columns-8-full"===this.layout}get classBlockBrandsLayoutColumns7Sidebar(){return"columns-7-sidebar"===this.layout}}return l.\u0275fac=function(i){return new(i||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-block-brands"]],hostVars:8,hostBindings:function(i,g){2&i&&n.ekj("block",g.classBlock)("block-brands",g.classBlockBrands)("block-brands--layout--columns-8-full",g.classBlockBrandsLayoutColumns8Full)("block-brands--layout--columns-7-sidebar",g.classBlockBrandsLayoutColumns7Sidebar)},inputs:{layout:"layout",brands:"brands"},decls:3,vars:1,consts:[[1,"container"],[1,"block-brands__list"],[4,"ngFor","ngForOf"],[1,"block-brands__item"],["href","",1,"block-brands__item-link"],["alt","",3,"src"],[1,"block-brands__item-name"],["role","presentation",1,"block-brands__divider"]],template:function(i,g){1&i&&(n.TgZ(0,"div",0),n.TgZ(1,"ul",1),n.YNc(2,f,7,2,"ng-container",2),n.qZA(),n.qZA()),2&i&&(n.xp6(2),n.Q6J("ngForOf",g.brands))},directives:[p.sg],styles:[""]}),l})()},3361:(Z,b,s)=>{s.d(b,{v:()=>g});var n=s(9808),p=s(3075),f=s(6157),m=s(9529),l=s(8995),u=s(6803),i=s(5e3);let g=(()=>{class d{}return d.\u0275fac=function(v){return new(v||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[[n.ez,p.u5,p.UX,f.Bz,m.bB,l.aw.forChild(),u.m]]}),d})()},601:(Z,b,s)=>{s.r(b),s.d(b,{HomeOneModule:()=>G});var n=s(9808),p=s(8995),f=s(3361),m=s(6157),l=s(9646),u=s(1135),i=s(515),g=s(5963),d=s(9300),h=s(8505),v=s(3900),C=s(5577),o=s(5e3),B=s(5385),A=s(794),O=s(5947),k=s(433),P=s(2068),_=s(7516),M=s(7579),$=s(2722),E=s(4782),D=s(9529),L=s(9602),U=s(9886);function I(t,r){if(1&t&&(o.TgZ(0,"li"),o.TgZ(1,"a",11),o._uU(2),o.qZA(),o.qZA()),2&t){const e=r.$implicit,a=o.oxw(2);o.xp6(1),o.Q6J("routerLink",e.url)("queryParams",a.getParams(e.params)),o.xp6(1),o.Oqu(e.name)}}function F(t,r){if(1&t&&(o.TgZ(0,"div",9),o.TgZ(1,"div",10),o.TgZ(2,"a",11),o._uU(3),o.qZA(),o.qZA(),o.TgZ(4,"ul",12),o.YNc(5,I,3,3,"li",13),o.qZA(),o.TgZ(6,"div",14),o.TgZ(7,"a",15),o._uU(8),o.ALo(9,"translate"),o.qZA(),o.qZA(),o.qZA()),2&t){const e=o.oxw();o.xp6(2),o.Q6J("routerLink",e.category.url)("queryParams",e.getParams(e.category.params)),o.xp6(1),o.Oqu(e.category.name),o.xp6(2),o.Q6J("ngForOf",e.children),o.xp6(2),o.Q6J("routerLink",e.category.url)("queryParams",e.getParams(e.category.params)),o.xp6(1),o.Oqu(o.lcZ(9,7,"BUTTON_SHOP_ALL"))}}let S=(()=>{class t{constructor(e,a,c,y){this.shopApi=e,this.language=a,this.cd=c,this.url=y,this.destroy$=new M.x,this.loading=!0,this.showCarousel=!0,this.children=[],this.tabs=[],this.image="",this.mobileImage="",this.category=null,this.classBlock=!0,this.classBlockZone=!0}get currentTab(){return this.currentTab$.value}ngOnChanges(e){var a;e.category&&(this.children=(null===(a=this.category)||void 0===a?void 0:a.children)?this.category.children.slice(0,7):[])}ngOnInit(){var e,a,c;this.language.directionChange$.pipe((0,v.w)(()=>(0,g.H)(250)),(0,$.R)(this.destroy$)).subscribe(()=>{this.initOptions(),this.showCarousel=!1,this.cd.detectChanges(),this.showCarousel=!0}),this.tabs=[{name:"TEXT_TAB_FEATURED",products$:this.shopApi.getFeaturedProducts((null===(e=this.category)||void 0===e?void 0:e.slug)||null,3)},{name:"TEXT_TAB_BESTSELLERS",products$:this.shopApi.getPopularProducts((null===(a=this.category)||void 0===a?void 0:a.slug)||null,6)},{name:"TEXT_TAB_TOP_RATED",products$:this.shopApi.getTopRatedProducts((null===(c=this.category)||void 0===c?void 0:c.slug)||null,6)}],this.currentTab$=new u.X(this.tabs[0]),this.products$=this.currentTab$.pipe((0,h.b)(()=>this.loading=!0),(0,v.w)(y=>y.products$),(0,h.b)(()=>{this.loading=!1,this.initOptions(),this.showCarousel=!1,this.cd.detectChanges(),this.showCarousel=!0}),(0,E.d)(1))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setCurrentTab(e){this.currentTab$.next(e)}initOptions(){this.carouselOptions={dots:!1,margin:20,loop:!0,items:4,rtl:this.language.isRTL(),responsive:{1020:{items:4,margin:20},630:{items:3,margin:16},410:{items:2,margin:16},0:{items:1}}}}getParams(e){return e.data?{data:JSON.stringify(e.data)}:e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(B.MR),o.Y36(L.T),o.Y36(o.sBO),o.Y36(U.i))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-block-zone"]],viewQuery:function(e,a){if(1&e&&o.Gf(D.Fy,5),2&e){let c;o.iGM(c=o.CRH())&&(a.carousel=c.first)}},hostVars:4,hostBindings:function(e,a){2&e&&o.ekj("block",a.classBlock)("block-zone",a.classBlockZone)},inputs:{image:"image",mobileImage:"mobileImage",category:"category"},features:[o.TTD],decls:10,vars:7,consts:[[1,"container"],[1,"block-zone__body"],[1,"block-zone__card","category-card","category-card--layout--overlay"],[1,"category-card__body"],[1,"category-card__overlay-image"],["sizes","(max-width: 575px) 530px, 305px","alt","",3,"srcset","src"],[1,"category-card__overlay-image","category-card__overlay-image--blur"],[1,"category-card__content"],["class","category-card__info",4,"ngIf"],[1,"category-card__info"],[1,"category-card__name"],[3,"routerLink","queryParams"],[1,"category-card__children"],[4,"ngFor","ngForOf"],[1,"category-card__actions"],[1,"btn","btn-primary","btn-sm",3,"routerLink","queryParams"]],template:function(e,a){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o._UZ(5,"img",5),o.qZA(),o.TgZ(6,"div",6),o._UZ(7,"img",5),o.qZA(),o.TgZ(8,"div",7),o.YNc(9,F,10,9,"div",8),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(5),o.hYB("srcset","",a.mobileImage," 530w, ",a.image," 305w",o.LSH),o.s9C("src",a.image,o.LSH),o.xp6(2),o.hYB("srcset","",a.mobileImage," 530w, ",a.image," 305w",o.LSH),o.s9C("src",a.image,o.LSH),o.xp6(2),o.Q6J("ngIf",a.category))},directives:[n.O5,m.yS,n.sg],pipes:[p.X$],styles:[""]}),t})();function x(t,r){1&t&&o._UZ(0,"app-block-space",10)}function R(t,r){if(1&t&&(o.ynx(0),o._UZ(1,"app-block-zone",8),o.ALo(2,"async"),o.YNc(3,x,1,0,"app-block-space",9),o.BQk()),2&t){const e=r.$implicit,a=r.last;o.xp6(1),o.Q6J("image",e.image)("mobileImage",e.mobileImage)("category",o.lcZ(2,4,e.category$)),o.xp6(2),o.Q6J("ngIf",!a)}}const H=function(){return{mainCategory:"vehicles"}},W=function(t){return{data:t}},Q=function(t){return{url:"/forms",params:t,desktopImage:"assets/images/slides/Web-Cover-001.png",mobileImage:"assets/images/slides/Web-Cover-001.png",offer:"30% OFF",title:"Welcome To AUTO-HUT",details:"Reserve your order, Today.",buttonLabel:"Shop Cars"}},T=function(){return{}},j=function(t){return{url:"/shop",params:t,desktopImage:"assets/images/slides/Web-Cover-002.png",mobileImage:"assets/images/slides/Web-Cover-002.png",title:"Not enough <br>spare parts?",details:"We have everything you need \u2013 replacement parts, <br>performance parts, accessories, oil & fluids, <br>tools and much more...",buttonLabel:"Shop Now"}},K=function(t){return{url:"/shop",params:t,desktopImage:"assets/images/slides/Web-Cover-003.png",mobileImage:"assets/images/slides/Web-Cover-003.png",offer:"30% OFF",title:"Big Choice Of <br>Wheel Tires",details:"Any size and diameter, with or without spikes, <br>summer or winter, rain or snow.",buttonLabel:"Shop Now"}},Y=function(t,r,e){return[t,r,e]},N=function(){return[]},X=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(e,a){this.shopApi=e,this.blogApi=a,this.blockZones=[],this.brands$=(0,l.of)([])}ngOnInit(){this.featuredProducts=this.makeCarouselData([{label:"All",products$:this.shopApi.getFeaturedProducts(null,5)},{label:"Cars",products$:this.shopApi.getFeaturedProducts("power-tools",8)},{label:"Auto Parts",products$:this.shopApi.getFeaturedProducts("hand-tools",8)},{label:"Motorcycle",products$:this.shopApi.getFeaturedProducts("plumbing",8)},{label:"Tools",products$:this.shopApi.getFeaturedProducts("plumbing",8)}]),this.blockSale=this.makeDeferredData(this.shopApi.getSpecialOffers(8)),this.blockZones=[{image:"assets/images/categories/category-overlay-1.jpg",mobileImage:"assets/images/categories/category-overlay-1-mobile.jpg",category$:this.shopApi.getCategoryBySlug("tires-wheels",{depth:1})},{image:"assets/images/categories/category-overlay-2.jpg",mobileImage:"assets/images/categories/category-overlay-2-mobile.jpg",category$:this.shopApi.getCategoryBySlug("interior-parts",{depth:1})},{image:"assets/images/categories/category-overlay-3.jpg",mobileImage:"assets/images/categories/category-overlay-3-mobile.jpg",category$:this.shopApi.getCategoryBySlug("engine-drivetrain",{depth:1})}],this.newArrivals=this.makeDeferredData(this.shopApi.getLatestProducts(8)),this.latestPosts=this.makeDeferredData(this.blogApi.getLatestPosts(8)),this.brands$=this.shopApi.getBrands({limit:16}),this.columnTopRated$=this.shopApi.getTopRatedProducts(null,3),this.columnSpecialOffers$=this.shopApi.getSpecialOffers(3),this.columnBestsellers$=this.shopApi.getPopularProducts(null,3)}groupChange(e,a){e.subject$.next(a)}makeCarouselData(e){const a=new u.X(e[0]),c={subject$:a,products$:a.pipe((0,d.h)(y=>null!==y),(0,h.b)(()=>c.loading=!0),(0,v.w)(y=>y.products$),(0,h.b)(()=>c.loading=!1)),loading:!0,groups:e};return c}makeDeferredData(e){const a={loading:!0,data$:i.E};return a.data$=(0,g.H)(0).pipe((0,C.z)(()=>e.pipe((0,h.b)(()=>a.loading=!1)))),a}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(B.MR),o.Y36(B.Uc))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-page-one"]],decls:12,vars:21,consts:[[3,"slides"],["layout","divider-nl"],["layout","top-strip"],["layout","divider-lg"],[4,"ngFor","ngForOf"],["layout","columns-8-full",3,"brands"],["layout","divider-nl",1,"d-xl-block","d-none"],["layout","before-footer"],[3,"image","mobileImage","category"],["layout","divider-sm",4,"ngIf"],["layout","divider-sm"]],template:function(e,a){1&e&&(o._UZ(0,"app-block-slideshow",0),o._UZ(1,"app-block-space",1),o._UZ(2,"app-block-features",2),o._UZ(3,"app-block-space",3),o.YNc(4,R,4,6,"ng-container",4),o._UZ(5,"app-block-space",1),o._UZ(6,"app-block-banners"),o._UZ(7,"app-block-space",1),o._UZ(8,"app-block-brands",5),o.ALo(9,"async"),o._UZ(10,"app-block-space",6),o._UZ(11,"app-block-space",7)),2&e&&(o.Q6J("slides",o.kEZ(16,Y,o.VKq(8,Q,o.VKq(6,W,o.DdM(5,H))),o.VKq(11,j,o.DdM(10,T)),o.VKq(14,K,o.DdM(13,T)))),o.xp6(4),o.Q6J("ngForOf",a.blockZones),o.xp6(4),o.Q6J("brands",o.lcZ(9,3,a.brands$)||o.DdM(20,N)))},directives:[A.i,O.r,k.Q,n.sg,P.I,_.p,S,n.O5],pipes:[n.Ov],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[m.Bz.forChild(X)],m.Bz]}),t})();var V=s(6803);let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[n.ez,p.aw.forChild(),f.v,w,V.m]]}),t})()}}]);