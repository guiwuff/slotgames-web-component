import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'slot-palugadabet'
})
export class SlotPalugadabet {

  /** (optional) Display along with the Brand Text */
  @Prop() withText?: string;
  /** URL for link attached to the Brand */
  @Prop() link = '/';
  /** Your Brand, (default to 'Brand') */
  @Prop() name = 'Brand';

  render() {
    return (
      <a href={this.link} title={this.name}>
        <slot-icon fill='none' stroke='none' icon='palugadabet' scale={2}></slot-icon>
        {this.withText
          ? <span class="brand-text pt-3 ml-2">Palugadabet</span>
          : ''}
      </a>
    );
  }
}
