import type { ElementDefinition } from '@wysiwyg/plugin-core';

export const aswovInfoButton: ElementDefinition = {
    type: 'AswovInfoButton',
    label: 'ASWOV Info Button',
    icon: 'Info',
    propGroups: [
        { name: 'icon', label: 'Icon' },
        { name: 'layout', label: 'Layout' },
    ],
    props: [
        { name: 'iconSize', label: 'Icon size', input: 'number', default: 22, group: 'icon' },
        { name: 'iconColor', label: 'Icon color', input: 'color', default: '#343f52', group: 'icon' },
        { name: 'buttonSize', label: 'Button size', input: 'number', default: 36, group: 'layout' },
        {
            name: 'align',
            label: 'Alignment',
            input: 'select',
            default: 'center',
            group: 'layout',
            options: [
                { label: 'Left', value: 'flex-start' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'flex-end' },
            ],
        },
    ],
    node: {
        name: 'AswovInfoButton',
        propNames: ['iconSize', 'iconColor', 'buttonSize', 'align'],
        body: {
            kind: 'component',
            type: 'View',
            style: {
                alignItems: { $coalesce: [{ $path: 'align' }, 'center'] },
            },
            children: [
                {
                    kind: 'component',
                    type: 'Pressable',
                    actions: ['showOverlay:aswov:aswov-info-panel'],
                    style: {
                        width: { $coalesce: [{ $path: 'buttonSize' }, 36] },
                        height: { $coalesce: [{ $path: 'buttonSize' }, 36] },
                        borderRadius: { $op: ['/', { $coalesce: [{ $path: 'buttonSize' }, 36] }, 2] },
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    children: [
                        {
                            kind: 'component',
                            type: 'Icon',
                            props: {
                                name: 'Info',
                                size: { $coalesce: [{ $path: 'iconSize' }, 22] },
                                color: { $coalesce: [{ $path: 'iconColor' }, '#343f52'] },
                            },
                        },
                    ],
                },
            ],
        },
    },
};
