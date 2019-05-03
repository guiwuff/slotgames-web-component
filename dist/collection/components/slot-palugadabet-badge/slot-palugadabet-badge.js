export class SlotPalugadabetBadge {
    constructor() {
        this.cssClasses = 'badge badge-brand text-default';
        this.link = 'https://palugadabet.biz';
        this.name = 'PALUGADABET';
        this.iconScale = 1;
    }
    componentWillLoad() {
        if (this.textMode) {
            this.cssClasses = `badge badge-transparent badge-brand-text text-${this.textMode}`;
        }
    }
    render() {
        return (h("a", { href: this.link, title: "Ke Palugadabet", class: this.cssClasses },
            h("div", { class: "badge-inner" },
                h("slot-icon", { icon: "ace", fill: 'currentColor', stroke: 'none', scale: this.iconScale }),
                h("span", { class: "ml-1 my-auto pt-1" }, this.name))));
    }
    static get is() { return "slot-palugadabet-badge"; }
    static get properties() { return {
        "iconScale": {
            "type": Number,
            "attr": "icon-scale"
        },
        "link": {
            "type": String,
            "attr": "link"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "textMode": {
            "type": String,
            "attr": "text-mode"
        }
    }; }
    static get style() { return "/**style-placeholder:slot-palugadabet-badge:**/"; }
}
