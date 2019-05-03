import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'slot-palugadabet'
})
export class SlotPalugadabet {

  iconScale = 2;

  /** (optional) Display along with the Brand Text */
  @Prop() withText?: string;
  /** URL for link attached to the Brand */
  @Prop() link = '/';
  /** Your Brand, (default to 'Brand') */
  @Prop() name = 'Brand';
  /** The scale of the brand, (default to 1) */
  @Prop() scale = 1;
  // TODO: Add Scale to the text
  componentWillLoad() {
    if (this.scale != 1) this.iconScale = this.scale * this.iconScale;
  }

  render() {
    return (
      <a href={this.link} title={this.name}>
        <slot-icon fill='none' stroke='none' icon='palugadabet' scale={this.iconScale}></slot-icon>
        {this.withText
          ? <span class="brand-text pt-3 ml-1">Palugadabet</span>
          : ''}
      </a>
    );
  }
}
