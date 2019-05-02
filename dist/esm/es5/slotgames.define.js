
// slotgames: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './slotgames.core.js';
import { COMPONENTS } from './slotgames.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
