import type { ElementDefinition } from '@wysiwyg/plugin-core';

export const aswovNavbar: ElementDefinition = {
    type: 'AswovNavbar',
    label: 'ASWOV Navbar',
    icon: 'Menu',
    props: [],
    node: {
        name: 'AswovNavbar',
        propNames: [],
        body: {
            kind: 'component',
            type: 'View',
            style: {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 28,
            },
            children: [
                {
                    kind: 'for',
                    each: { $path: '__magic.pageTree' },
                    as: 'page',
                    keyPath: 'slug',
                    template: {
                        kind: 'component',
                        type: 'Pressable',
                        props: {
                            href: { $path: 'page.slug' },
                        },
                        children: [
                            {
                                kind: 'component',
                                type: 'Text',
                                props: { text: { $path: 'page.name' } },
                                style: {
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#343f52',
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
};
