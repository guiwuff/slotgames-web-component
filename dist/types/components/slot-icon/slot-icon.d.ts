import '../../stencil.core';
export declare class SlotIcon {
    svg: HTMLElement;
    width: string;
    height: string;
    /** Reference to Host Element */
    slotIcon: HTMLElement;
    /** Scale the icon size (default 1) */
    scale: number;
    /** Fill color (default 'none') */
    fill: string;
    /** Stroke color (default 'currentColor) */
    stroke: string;
    /** Stroke width (default 2) */
    strokeWidth: string;
    /** The Icon name (default '') */
    icon: string;
    componentWillLoad(): void;
    render(): JSX.Element;
}
