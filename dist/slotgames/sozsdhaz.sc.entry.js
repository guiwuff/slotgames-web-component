const t=window.slotgames.h;class e{constructor(){this.cssClasses="badge badge-brand text-default",this.link="https://palugadabet.biz",this.name="PALUGADABET"}componentWillLoad(){this.textMode&&(this.cssClasses=`badge badge-transparent badge-brand-text text-${this.textMode}`)}render(){return t("a",{href:this.link,title:"Ke Palugadabet",class:this.cssClasses},t("div",{class:"badge-inner"},t("slot-icon",{icon:"ace",fill:"currentColor",scale:1.1}),t("span",{class:"ml-1 my-auto pt-1"},this.name)))}static get is(){return"slot-palugadabet-badge"}static get properties(){return{link:{type:String,attr:"link"},name:{type:String,attr:"name"},textMode:{type:String,attr:"text-mode"}}}}export{e as SlotPalugadabetBadge};