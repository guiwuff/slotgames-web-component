import{h}from"../slotgames.core.js";var SlotPalugadabetBadge=function(){function e(){this.cssClasses="badge badge-brand text-default",this.link="https://palugadabet.biz",this.name="PALUGADABET",this.iconScale=1}return e.prototype.componentWillLoad=function(){this.textMode&&(this.cssClasses="badge badge-transparent badge-brand-text text-"+this.textMode)},e.prototype.render=function(){return h("a",{href:this.link,title:"Ke Palugadabet",class:this.cssClasses},h("div",{class:"badge-inner"},h("slot-icon",{icon:"ace",fill:"currentColor",stroke:"none",scale:this.iconScale}),h("span",{class:"ml-1 my-auto pt-1"},this.name)))},Object.defineProperty(e,"is",{get:function(){return"slot-palugadabet-badge"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{iconScale:{type:Number,attr:"icon-scale"},link:{type:String,attr:"link"},name:{type:String,attr:"name"},textMode:{type:String,attr:"text-mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".badge-brand{border-radius:.15rem!important;padding:.15rem!important;padding-right:.3rem!important}.badge-brand slot-icon,.badge-brand span{margin:auto}.badge-brand-text{letter-spacing:.05rem}.badge-inner{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center}"},enumerable:!0,configurable:!0}),e}();export{SlotPalugadabetBadge};