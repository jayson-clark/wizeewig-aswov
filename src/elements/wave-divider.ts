import type { ElementDefinition } from '@wysiwyg/plugin-core';

export const waveDivider: ElementDefinition = {
    type: 'WaveDivider',
    label: 'Wave Divider',
    icon: 'Waves',
    propGroups: [{ name: 'appearance', label: 'Appearance' }],
    props: [
        { name: 'color', label: 'Color', input: 'color', default: '#0f172a', group: 'appearance' },
    ],
    node: {
        name: 'WaveDivider',
        propNames: ['color'],
        body: {
            kind: 'component',
            type: 'Svg',
            props: {
                viewBox: '0 0 1440 100',
                path: 'M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z',
                fill: { $coalesce: [{ $path: 'color' }, '#0f172a'] },
            },
            style: { width: '100%' },
        },
    },
};
