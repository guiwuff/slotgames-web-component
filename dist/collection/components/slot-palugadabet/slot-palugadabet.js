export class SlotPalugadabet {
    constructor() {
        this.link = '/';
        this.name = 'Brand';
    }
    render() {
        return (h("a", { href: this.link, title: this.name },
            h("slot-icon", { fill: 'none', stroke: 'none', icon: 'palugadabet', scale: 2 }),
            this.withText
                ? h("span", { class: "brand-text pt-3 ml-2" }, "Palugadabet")
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
        "withText": {
            "type": String,
            "attr": "with-text"
        }
    }; }
}
