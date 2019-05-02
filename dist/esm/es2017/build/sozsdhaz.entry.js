import { h } from '../slotgames.core.js';

class SlotPalugadabetBadge {
    constructor() {
        this.cssClasses = 'badge badge-brand text-default';
        this.link = 'https://palugadabet.biz';
        this.name = 'PALUGADABET';
    }
    componentWillLoad() {
        if (this.textMode) {
            this.cssClasses = `badge badge-transparent badge-brand-text text-${this.textMode}`;
        }
    }
    render() {
        return (h("a", { href: this.link, title: "Ke Palugadabet", class: this.cssClasses },
            h("div", { class: "badge-inner" },
                h("slot-icon", { icon: "ace", fill: 'currentColor', scale: 1.1 }),
                h("span", { class: "ml-1 my-auto pt-1" }, this.name))));
    }
    static get is() { return "slot-palugadabet-badge"; }
    static get properties() { return {
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
}

export { SlotPalugadabetBadge };
