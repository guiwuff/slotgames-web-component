export class SlotPalugadabet {
    constructor() {
        this.iconScale = 2;
        this.link = '/';
        this.name = 'Brand';
        this.scale = 1;
    }
    componentWillLoad() {
        if (this.scale != 1)
            this.iconScale = this.scale * this.iconScale;
    }
    render() {
        return (h("a", { href: this.link, title: this.name },
            h("slot-icon", { fill: 'none', stroke: 'none', icon: 'palugadabet', scale: this.iconScale }),
            this.withText
                ? h("span", { class: "brand-text pt-3 ml-1" }, "Palugadabet")
                : ''));
    }
    static get is() { return "slot-palugadabet"; }
    static get properties() { return {
        "link": {
            "type": String,
            "attr": "link"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "scale": {
            "type": Number,
            "attr": "scale"
        },
        "withText": {
            "type": String,
            "attr": "with-text"
        }
    }; }
}
