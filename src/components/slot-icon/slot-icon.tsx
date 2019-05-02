/**
 * The icon system utilize SVG Sprites injected
 * to the page through different script.
 *
 */
import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'slot-icon'
})
export class SlotIcon {
  svg: HTMLElement;
  width = '1em';
  height = '1em';

  /** Reference to Host Element */
  @Element() slotIcon: HTMLElement;
  /** Scale the icon size (default 1) */
  @Prop() scale: number = 1;
  /** Fill color (default 'none') */
  @Prop() fill = 'none';
  /** Stroke color (default 'currentColor) */
  @Prop() stroke= 'currentColor';
  /** Stroke width (default 2) */
  @Prop() strokeWidth = '2'
  /** The Icon name (default '') */
  @Prop() icon = '';


  componentWillLoad() {
    /** Adjust Height and Width based on the scale */
    if (this.scale !== 1) {
      this.width = `${this.scale}em`;
      this.height = `${this.scale}em`;
    }
  }
  render() {
    return (
      <svg
        ref={(el) => this.svg = el as HTMLElement}
        viewBox="0 0 24 24"
        width={this.width}
        height={this.height}
        fill={this.fill}
        stroke={this.stroke}
        stroke-width={this.strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round">
        <use xlinkHref={`#${this.icon}`} />
      </svg>
    )
  }
}
