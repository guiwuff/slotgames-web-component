import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'slot-palugadabet-badge',
  styleUrl: 'slot-palugadabet-badge.css'
})
export class SlotPalugadabetBadge {
  cssClasses = 'badge badge-brand text-default';

  @Prop() link = 'https://palugadabet.biz';
  @Prop() name = 'PALUGADABET';
  @Prop() iconScale = 1;

  @Prop() textMode?: string;

  componentWillLoad() {
    if (this.textMode) {
      this.cssClasses = `badge badge-transparent badge-brand-text text-${this.textMode}`;
    }
  }


  render() {
    return (
      <a href={this.link} title="Ke Palugadabet" class={this.cssClasses}>
        <div class="badge-inner">
          <slot-icon icon="ace" fill='currentColor' stroke='none' scale={this.iconScale}></slot-icon>
          <span class="ml-1 my-auto pt-1">{this.name}</span>
        </div>
      </a>
    );
  }
}
