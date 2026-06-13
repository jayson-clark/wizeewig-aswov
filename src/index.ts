import type { PluginSource } from '@wysiwyg/plugin-core';
import { namedColors } from './colors';
import { waveDivider } from './elements/wave-divider';
import { aswovNavbar } from './elements/aswov-navbar';
import { aswovInfoButton } from './elements/aswov-info-button';
import { aswovInfoPanel } from './overlays/aswov-info-panel';

const plugin: PluginSource = {
    elements: [waveDivider, aswovNavbar, aswovInfoButton],
    overlays: [aswovInfoPanel],
    namedColors,
};

export default plugin;
