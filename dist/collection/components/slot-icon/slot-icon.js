export class SlotIcon {
    constructor() {
        this.width = '1em';
        this.height = '1em';
        this.scale = 1;
        this.fill = 'none';
        this.stroke = 'currentColor';
        this.strokeWidth = '2';
        this.icon = '';
    }
    componentWillLoad() {
        if (this.scale !== 1) {
            this.width = `${this.scale}em`;
            this.height = `${this.scale}em`;
        }
    }
    render() {
        return (h("svg", { ref: (el) => this.svg = el, viewBox: "0 0 24 24", width: this.width, height: this.height, fill: this.fill, stroke: this.stroke, "stroke-width": this.strokeWidth, "stroke-linecap": "round", "stroke-linejoin": "round" },
            h("use", { xlinkHref: `#${this.icon}` })));
    }
    static get is() { return "slot-icon"; }
    static get properties() { return {
        "fill": {
            "type": String,
            "attr": "fill"
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "scale": {
            "type": Number,
            "attr": "scale"
        },
        "slotIcon": {
            "elementRef": true
        },
        "stroke": {
            "type": String,
            "attr": "stroke"
        },
        "strokeWidth": {
            "type": String,
            "attr": "stroke-width"
        }
    }; }
}
