export interface Chars {
    id:string;
    status:string;
    rarity:string;
    weapon:string;
    element:string;
    region:string;
    ascensionMat1?:string;
    ascensionMat2?:string;
    ascensionMat3?:string;
    ascensionGem1?:string;
    ascensionGem2?:string;
    ascensionGem3?:string;
    ascensionGem4?:string;
    ascensionMatBoss?:string;
    ascensionMatUnique?:string;
    ascensionBoss?:string;
    talentBoss?:string;
    talentMat1?:string;
    talentMat2?:string;
    talentMat3?:string;
    talentBook1?:string;
    talentBook2?:string;
    talentBook3?:string;
    talentMatUnique?:string;
    crown?:string;
}

interface vision {
    id:string;
    active:boolean;
}

const characters:Chars[] = [
    {
        id: 'Noelle',
        status: 'complete',
        rarity: '4-stars',
        element: 'Geo',
        weapon: 'Claymore',
        region: 'Mondstadt',
        ascensionMat1: 'Damaged Mask',
        ascensionMat2: 'Stained Mask',
        ascensionMat3: 'Ominous Mask',
        ascensionGem1: 'Prithiva Topaz Sliver',
        ascensionGem2: 'Prithiva Topaz Fragment',
        ascensionGem3: 'Prithiva Topaz Chunk',
        ascensionGem4: 'Prithiva Topaz Gemstone',
        ascensionMatBoss: 'Basalt Pillar',
        ascensionMatUnique: 'Valberry',
        ascensionBoss: 'Geo Hypostasis',
        talentBoss: 'Stormterror',
        talentMat1: 'Damaged Mask',
        talentMat2: 'Stained Mask',
        talentMat3: 'Ominous Mask',
        talentBook1: 'Teachings of Resistance',
        talentBook2: 'Guide to Resistance',
        talentBook3: 'Philosophies of Resistance',
        talentMatUnique: 'Dvalins Claw',
        crown: 'Crown of Insight',
    },
    {
        id: 'Jean',
        status: 'complete',
        rarity: '5-stars',
        element: 'Anemo',
        weapon: 'Sword',
        region: 'Mondstadt',
        ascensionMat1: 'Damaged Mask',
        ascensionMat2: 'Stained Mask',
        ascensionMat3: 'Ominous Mask',
        ascensionGem1: 'Vayuda Turquoise Sliver',
        ascensionGem2: 'Vayuda Turquoise Fragment',
        ascensionGem3: 'Vayuda Turquoise Chunk',
        ascensionGem4: 'Vayuda Turquoise Gemstone',
        ascensionMatBoss: 'Hurricane Seed',
        ascensionMatUnique: 'Dandelion Seed',
        ascensionBoss: 'Anemo Hypostasis',
        talentBoss: 'Stormterror',
        talentMat1: 'Damaged Mask',
        talentMat2: 'Stained Mask',
        talentMat3: 'Ominous Mask',
        talentBook1: 'Teachings of Resistance',
        talentBook2: 'Guide to Resistance',
        talentBook3: 'Philosophies of Resistance',
        talentMatUnique: 'Dvalins Plume',
        crown: 'Crown of Insight',
    },
    {
        id: 'Amber',
        status: 'complete',
        rarity: '4-stars',
        element: 'Pyro',
        weapon: 'Bow',
        region: 'Mondstadt',
        ascensionMat1: 'Firm Arrowhead',
        ascensionMat2: 'Sharp Arrowhead',
        ascensionMat3: 'Weathered Arrowhead',
        ascensionGem1: 'Agnidus Agate Sliver',
        ascensionGem2: 'Agnidus Agate Fragment',
        ascensionGem3: 'Agnidus Agate Chunk',
        ascensionGem4: 'Agnidus Agate Gemstone',
        ascensionMatBoss: 'Everflame Seed',
        ascensionMatUnique: 'Small Lamp Grass',
        ascensionBoss: 'Pyro Regisvine',
        talentBoss: 'Stormterror',
        talentMat1: 'Firm Arrowhead',
        talentMat2: 'Sharp Arrowhead',
        talentMat3: 'Weathered Arrowhead',
        talentBook1: 'Teachings of Freedom',
        talentBook2: 'Guide to Freedom',
        talentBook3: 'Philosophies of Freedom',
        talentMatUnique: 'Dvalins Sigh',
        crown: 'Crown of Insight',
    },
    {
        id: 'Yunjin',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Lance',
        element: 'Geo',
        region: 'Liyue'
    },
    {
        id: 'Zhongli',
        status: 'pending',
        rarity: '5-stars',
        weapon: 'Lance',
        element: 'Geo',
        region: 'Liyue'
    },
    {
        id: 'Sayu',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Claymore',
        element: 'Anemo',
        region: 'Inazuma'
    },
    {
        id: 'Sucrose',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Catalyst',
        element: 'Anemo',
        region: 'Mondstadt'
    },
    {
        id: 'Chongyun',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Claymore',
        element: 'Cryo',
        region: 'Liyue'
    },
    {
        id: 'Diona',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Bow',
        element: 'Cryo',
        region: 'Mondstadt'
    },
    {
        id: 'Eula',
        status: 'pending',
        rarity: '5-stars',
        weapon: 'Claymore',
        element: 'Cryo',
        region: 'Mondstadt'
    },
    {
        id: 'Beidou',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Claymore',
        element: 'Electro',
        region: 'Liyue'
    },
    {
        id: 'Lisa',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Catalyst',
        element: 'Electro',
        region: 'Mondstadt'
    },
    {
        id: 'Razor',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Claymore',
        element: 'Electro',
        region: 'Mondstadt'
    },
    {
        id: 'Barbara',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Catalyst',
        element: 'Hydro',
        region: 'Mondstadt'
    },
    {
        id: 'Kokomi',
        status: 'pending',
        rarity: '5-stars',
        weapon: 'Catalyst',
        element: 'Hydro',
        region: 'Inazuma'
    },
    {
        id: 'Mona',
        status: 'pending',
        rarity: '5-stars',
        weapon: 'Catalyst',
        element: 'Hydro',
        region: 'Mondstadt'
    },
    {
        id: 'Bennett',
        status: 'pending',
        rarity: '4-stars',
        weapon: 'Sword',
        element: 'Pyro',
        region: 'Mondstadt'
    },
    {
        id: 'Hutao',
        status: 'pending',
        rarity: '5-stars',
        weapon: 'Lance',
        element: 'Pyro',
        region: 'Liyue'
    }
];

export const elements:vision[] = [
    {
        id: 'Geo',
        active: false
    },
    {
        id: 'Anemo',
        active: false
    },
    {
        id: 'Electro',
        active: false
    },
    {
        id: 'Pyro',
        active: false
    },
    {
        id: 'Cryo',
        active: false
    },
    {
        id: 'Hydro',
        active: false
    }
];

export default characters;