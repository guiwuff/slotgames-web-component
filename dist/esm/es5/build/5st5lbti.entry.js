import{h}from"../slotgames.core.js";var SlotPalugadabet=function(){function t(){this.link="/",this.name="Brand"}return t.prototype.render=function(){return h("a",{href:this.link,title:this.name},h("slot-icon",{fill:"none",stroke:"none",icon:"palugadabet",scale:2}),this.withText?h("span",{class:"brand-text pt-3 ml-2"},"Palugadabet"):"")},Object.defineProperty(t,"is",{get:function(){return"slot-palugadabet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{link:{type:String,attr:"link"},name:{type:String,attr:"name"},withText:{type:String,attr:"with-text"}}},enumerable:!0,configurable:!0}),t}();export{SlotPalugadabet};