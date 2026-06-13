import type { OverlayDefinition } from '@wysiwyg/plugin-core';

export const aswovInfoPanel: OverlayDefinition = {
    id: 'aswov-info-panel',
    label: 'ASWOV Info Panel',
    node: {
        name: 'AswovInfoPanel',
        propNames: [],
        body: {
            kind: 'component',
            type: 'View',
            props: { pointerEvents: 'box-none' },
            style: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
            },
            children: [
                {
                    kind: 'component',
                    type: 'HoverZone',
                    props: { leaveActions: ['hideOverlay'] },
                    style: {
                        width: 340,
                        backgroundColor: '#ffffff',
                        padding: 36,
                        gap: 28,
                        boxShadow: '-12px 0 40px rgba(0,0,0,0.15)',
                    },
                    children: [
                        {
                            kind: 'component',
                            type: 'Image',
                            props: {
                                src: './assets/img/logos/aswov-logo.jpg',
                                alt: 'ASWOV',
                            },
                            style: {
                                width: '100%',
                                height: 80,
                                objectFit: 'contain',
                            },
                        },
                        {
                            kind: 'component',
                            type: 'Text',
                            props: {
                                text: 'We are a non-profit charity dedicated to granting the wishes of children under the age of 21 who have been diagnosed with a life-threatening disorder.',
                            },
                            style: {
                                fontSize: 14,
                                color: '#343f52',
                                lineHeight: 22,
                            },
                        },
                        {
                            kind: 'component',
                            type: 'View',
                            style: { gap: 6 },
                            children: [
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: 'Contact Info' },
                                    style: {
                                        fontSize: 15,
                                        fontWeight: '700',
                                        color: '#343f52',
                                        marginBottom: 4,
                                    },
                                },
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: 'Post Office Box 674\nSt. Clairsville, OH 43950' },
                                    style: {
                                        fontSize: 13,
                                        color: '#9499a3',
                                        lineHeight: 20,
                                    },
                                },
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: 'aogrady@spwishov.com' },
                                    style: {
                                        fontSize: 13,
                                        color: '#e2626b',
                                        textDecorationLine: 'underline',
                                    },
                                },
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: '(740) 449-2063' },
                                    style: {
                                        fontSize: 13,
                                        color: '#343f52',
                                    },
                                },
                            ],
                        },
                        {
                            kind: 'component',
                            type: 'View',
                            style: { gap: 6 },
                            children: [
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: 'Learn More' },
                                    style: {
                                        fontSize: 15,
                                        fontWeight: '700',
                                        color: '#343f52',
                                        marginBottom: 4,
                                    },
                                },
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: 'Our Story' },
                                    style: { fontSize: 13, color: '#343f52', textDecorationLine: 'underline' },
                                },
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: 'Get Involved' },
                                    style: { fontSize: 13, color: '#343f52', textDecorationLine: 'underline' },
                                },
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: 'Heroes' },
                                    style: { fontSize: 13, color: '#343f52', textDecorationLine: 'underline' },
                                },
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: 'Contact Us' },
                                    style: { fontSize: 13, color: '#343f52', textDecorationLine: 'underline' },
                                },
                            ],
                        },
                        {
                            kind: 'component',
                            type: 'View',
                            style: { gap: 10 },
                            children: [
                                {
                                    kind: 'component',
                                    type: 'Text',
                                    props: { text: 'Follow Us' },
                                    style: {
                                        fontSize: 15,
                                        fontWeight: '700',
                                        color: '#343f52',
                                    },
                                },
                                {
                                    kind: 'component',
                                    type: 'View',
                                    style: { flexDirection: 'row', gap: 14 },
                                    children: [
                                        {
                                            kind: 'component',
                                            type: 'Text',
                                            props: { text: 'Facebook' },
                                            style: {
                                                fontSize: 13,
                                                color: '#3397c7',
                                                textDecorationLine: 'underline',
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
};
