"use strict";(self.webpackChunkyoutube_client=self.webpackChunkyoutube_client||[]).push([[424],{424:(D,m,r)=>{r.r(m),r.d(m,{YoutubeModule:()=>j});var a=r(6895),u=r(5116),t=r(4650),d=r(8731),l=r(9653);const h=(0,l.ZF)("customCards"),g=((0,l.P1)(h,e=>e.cards),(0,l.ZF)("youtubeCards")),f=((0,l.P1)(g,e=>e.videos),(0,l.P1)(g,h,({videos:e},{cards:o})=>[...e,...o]));var y=r(8461),v=r(5515),C=r(7392),Z=r(4859);let w=(()=>{class e{constructor(i){this.router=i,this.dislikeCount=333}onButtonClick(i){this.router.navigate(["/youtube",i.id])}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-item"]],inputs:{item:"item"},decls:29,vars:15,consts:[[1,"item"],[1,"item__wrapper"],[1,"item__img"],[3,"src","alt"],[1,"item__statistics"],[1,"statistic__view-count"],["color","primary"],[1,"statistic__like-count"],[1,"statistic__dislike-count"],[1,"statistic__comment-count"],[1,"item__title"],["mat-raised-button","","color","primary",1,"item__button",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"span",5)(6,"mat-icon",6),t._uU(7,"visibility"),t.qZA(),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"span",7)(11,"mat-icon",6),t._uU(12,"thumb_up"),t.qZA(),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"span",8)(16,"mat-icon",6),t._uU(17,"thumb_down"),t.qZA(),t._uU(18),t.ALo(19,"number"),t.qZA(),t.TgZ(20,"span",9)(21,"mat-icon",6),t._uU(22,"forum"),t.qZA(),t._uU(23),t.ALo(24,"number"),t.qZA()(),t.TgZ(25,"div",10),t._uU(26),t.qZA()(),t.TgZ(27,"button",11),t.NdJ("click",function(){return n.onButtonClick(n.item)}),t._uU(28," More... "),t.qZA()()),2&i&&(t.xp6(3),t.Q6J("src",n.item.snippet.thumbnails.medium.url,t.LSH)("alt",n.item.snippet.title),t.xp6(5),t.hij(" ",t.lcZ(9,7,n.item.statistics.viewCount)," "),t.xp6(5),t.hij(" ",t.lcZ(14,9,n.item.statistics.likeCount)," "),t.xp6(5),t.hij(" ",t.lcZ(19,11,n.dislikeCount)," "),t.xp6(5),t.hij(" ",t.lcZ(24,13,n.item.statistics.commentCount)," "),t.xp6(3),t.Oqu(n.item.snippet.title))},dependencies:[C.Hw,Z.lW,a.JJ],styles:["[_nghost-%COMP%]{background:#e1e1e1;border-radius:5px}.item[_ngcontent-%COMP%]{height:400px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:1.5rem;cursor:default}.item__statistics[_ngcontent-%COMP%]{max-width:320px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-top:1rem}.item__statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem}.item__title[_ngcontent-%COMP%]{height:70px;overflow-y:hidden;margin-top:2rem;max-width:320px;font-size:1.25rem;font-weight:700;line-height:1.15;text-align:right}.item__button[_ngcontent-%COMP%]{height:50px;min-width:150px}.item__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:320px;height:180px}"]}),e})();const M=Math.floor(182.5);let _=(()=>{class e{constructor(i){this.elRef=i}ngAfterViewInit(){const i=new Date(this.date),s=(new Date).getTime()-i.getTime(),c=Math.floor(s/864e5);this.elRef.nativeElement.style.borderBottom="10px solid transparent",this.elRef.nativeElement.style.borderColor=function O(e){let o;switch(!0){case e<7:o="#3f51b5";break;case e>=7&&e<30:o="#27AE60";break;case e>=30&&e<M:o="#F2C94C";break;default:o="#EB5757"}return o}(c)}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(t.SBq))},e.\u0275dir=t.lG2({type:e,selectors:[["","borderBottomColor",""]],inputs:{date:["borderBottomColor","date"]}}),e})(),P=(()=>{class e{transform(i,n){if(!n)return i;let s=[];return n&&(s=this.filter(i,n)),s}filter(i,n){return i.filter(s=>s.snippet.title.toLowerCase().includes(n))}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=t.Yjl({name:"filter",type:e,pure:!0}),e})(),T=(()=>{class e{transform(i,n){return n&&Object.keys(n).length?this.sort(i,n):i}sort(i,n){return[...i].sort((c,p)=>this.sortCallback(c,p,n.property,n.order))}sortCallback(i,n,s,c){if(s&&c){const[p,x]="date"===s?[new Date(i.snippet.publishedAt).getTime(),new Date(n.snippet.publishedAt).getTime()]:[Number(i.statistics.viewCount),Number(n.statistics.viewCount)];return"ASC"===c?p-x:x-p}return 0}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=t.Yjl({name:"sort",type:e,pure:!0}),e})();function U(e,o){if(1&e&&t._UZ(0,"app-search-item",1),2&e){const i=o.$implicit;t.Q6J("item",i)("borderBottomColor",i.snippet.publishedAt)}}let k=(()=>{class e{constructor(i,n,s){this.filter=i,this.sort=n,this.store=s,this.store$=this.store.select(f)}trackByFn(i,n){return n.id}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(y.i),t.Y36(v.K),t.Y36(l.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-results"]],decls:4,vars:10,consts:[[3,"item","borderBottomColor",4,"ngFor","ngForOf","ngForTrackBy"],[3,"item","borderBottomColor"]],template:function(i,n){1&i&&(t.YNc(0,U,1,2,"app-search-item",0),t.ALo(1,"sort"),t.ALo(2,"filter"),t.ALo(3,"async")),2&i&&t.Q6J("ngForOf",t.xi3(1,2,t.xi3(2,5,t.lcZ(3,8,n.store$),n.filter.value),n.sort.value))("ngForTrackBy",n.trackByFn)},dependencies:[a.sg,w,_,a.Ov,P,T],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;gap:2rem;flex-wrap:wrap;padding:2rem 0}"]}),e})();function S(e,o){1&e&&t._UZ(0,"app-search-results")}let B=(()=>{class e{constructor(i){this.results=i}isShowResults(){return this.results.isShow}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(d.L))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-main"]],decls:3,vars:1,consts:[[1,"main"],[1,"wrapper"],[4,"ngIf"]],template:function(i,n){1&i&&(t.TgZ(0,"main",0)(1,"div",1),t.YNc(2,S,1,0,"app-search-results",2),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngIf",n.isShowResults()))},dependencies:[a.O5,k]}),e})();var F=r(4004);function I(e,o){if(1&e&&(t.TgZ(0,"div",1)(1,"a",2)(2,"mat-icon",3),t._uU(3,"arrow_back_ios"),t.qZA()(),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6)(7,"div",7)(8,"h1",8),t._uU(9),t.qZA(),t.TgZ(10,"div",9),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"div",10)(14,"h4"),t._uU(15,"Description:"),t.qZA(),t.TgZ(16,"p"),t._uU(17),t.qZA()()(),t.TgZ(18,"ul",11)(19,"li",12)(20,"mat-icon",13),t._uU(21,"visibility"),t.qZA(),t._uU(22),t.ALo(23,"number"),t.qZA(),t.TgZ(24,"li",14)(25,"mat-icon",13),t._uU(26,"thumb_up"),t.qZA(),t._uU(27),t.ALo(28,"number"),t.qZA(),t.TgZ(29,"li",15)(30,"mat-icon",13),t._uU(31,"thumb_down"),t.qZA(),t._uU(32),t.ALo(33,"number"),t.qZA(),t.TgZ(34,"li",16)(35,"mat-icon",13),t._uU(36,"forum"),t.qZA(),t._uU(37),t.ALo(38,"number"),t.qZA()()()()),2&e){const i=t.oxw();t.xp6(5),t.Q6J("src",i.item.snippet.thumbnails.high.url,t.LSH)("alt",i.item.snippet.title),t.xp6(1),t.Q6J("borderBottomColor",i.item.snippet.publishedAt),t.xp6(3),t.Oqu(i.item.snippet.title),t.xp6(2),t.Oqu(t.xi3(12,10,i.item.snippet.publishedAt,"fullDate")),t.xp6(6),t.Oqu(i.item.snippet.description),t.xp6(5),t.hij(" ",t.lcZ(23,13,i.item.statistics.viewCount)," "),t.xp6(5),t.hij(" ",t.lcZ(28,15,i.item.statistics.likeCount)," "),t.xp6(5),t.hij(" ",t.lcZ(33,17,i.dislikeCount)," "),t.xp6(5),t.hij(" ",t.lcZ(38,19,i.item.statistics.commentCount)," ")}}const Y=[{path:"",component:B},{path:":id",component:(()=>{class e{constructor(i,n,s){this.activatedRoute=i,this.results=n,this.store=s,this.id="",this.dislikeCount=333}ngOnInit(){this.paramsSubscription=this.activatedRoute.params.subscribe(i=>{this.id=i.id,this.storeSubscription=this.store.select(f).pipe((0,F.U)(n=>{const s=n.find(c=>c.id===this.id);return s?this.item=s:this.results.getVideoById(this.id).subscribe(c=>{this.item=c.items[0]}),this.item})).subscribe()})}ngOnDestroy(){this.paramsSubscription.unsubscribe(),this.storeSubscription.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(u.gz),t.Y36(d.L),t.Y36(l.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-detailed-information"]],decls:1,vars:1,consts:[["class","item",4,"ngIf"],[1,"item"],["routerLink","..",1,"back-button"],[1,"arrow-back"],[1,"video"],[3,"src","alt"],[1,"right-side",3,"borderBottomColor"],[1,"right-side__container"],[1,"title"],[1,"date"],[1,"description"],[1,"statistics"],[1,"view-count"],["color","primary"],[1,"like-count"],[1,"dislike-count"],[1,"comment-count"]],template:function(i,n){1&i&&t.YNc(0,I,39,21,"div",0),2&i&&t.Q6J("ngIf",n.item)},dependencies:[a.O5,u.yS,C.Hw,_,a.JJ,a.uU],styles:["[_nghost-%COMP%]{display:block;margin:2rem 0}.item[_ngcontent-%COMP%]{width:1200px;height:360px;margin:0 auto;display:flex;flex-direction:row;justify-content:center;filter:drop-shadow(5px 10px 20px rgba(51,51,51,.25))}.arrow-back[_ngcontent-%COMP%]{padding:.75rem .25rem .75rem .75rem;background:#e1e1e1;border-radius:5px 0 0 5px;cursor:pointer;color:#000;transition:.2s}.arrow-back[_ngcontent-%COMP%]:hover{background:#3f51b5;color:#f2f2f2}.video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:480px;height:360px;border-radius:0 0 0 5px}.right-side[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:2rem;background:#e1e1e1;border-radius:0 5px 5px 0}.title[_ngcontent-%COMP%]{max-height:84px;overflow-y:hidden;font-weight:700;font-size:24px;line-height:28px}.date[_ngcontent-%COMP%]{position:relative;top:-10px;text-align:right;font-size:10px;line-height:12px;color:#828282}.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:125px;overflow-y:hidden;font-size:12px;line-height:14px;color:#828282}.statistics[_ngcontent-%COMP%]{margin:0;padding:0;display:flex;gap:2rem;flex-direction:row;justify-content:center;list-style:none}.statistics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem}.statistics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:20px;height:20px;font-size:20px}"]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(Y),u.Bz]}),e})();var L=r(898);let j=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,q,L.q]}),e})()}}]);