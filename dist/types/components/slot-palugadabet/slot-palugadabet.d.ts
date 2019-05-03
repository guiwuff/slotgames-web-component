import '../../stencil.core';
export declare class SlotPalugadabet {
    iconScale: number;
    /** (optional) Display along with the Brand Text */
    withText?: string;
    /** URL for link attached to the Brand */
    link: string;
    /** Your Brand, (default to 'Brand') */
    name: string;
    /** The scale of the brand, (default to 1) */
    scale: number;
    componentWillLoad(): void;
    render(): JSX.Element;
}
