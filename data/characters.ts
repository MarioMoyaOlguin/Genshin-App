export interface Chars {
    id:string;
    characterImage:string;
    backgroundImage:string;
    status:string;
    rarity:string;
    rarityUrl:string;
    weapon:string;
    element:string;
    elementUrl:string;
    region:string;
    ascensionMat1:string;
    ascensionMat1Url:string;
    ascensionMat2:string;
    ascensionMat2Url:string;
    ascensionMat3:string;
    ascensionMat3Url:string;
    ascensionGem1:string;
    ascensionGem2:string;
    ascensionGem3:string;
    ascensionGem4:string;
    ascensionMatBoss:string;
    ascensionMatUnique:string;
    ascensionMatUniqueUrl:string;
    ascensionBoss:string;
    ascensionBossUrl:string;
    talentBoss:string;
    talentBossUrl:string;
    talentBook1:string;
    talentBook1Url:string;
    talentBook2:string;
    talentBook2Url:string;
    talentBook3:string;
    talentBook3Url:string;
    talentMatUnique:string;
}

export interface vision {
    id:string;
    active:boolean;
    url:string
}

export const loader:Chars = {
    id: 'loaded',
    characterImage: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    backgroundImage: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    status: 'complete',
    rarity: '4-stars',
    rarityUrl: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    element: '',
    elementUrl: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    weapon: '',
    region: '',
    ascensionMat1: '',
    ascensionMat1Url: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionMat2: '',
    ascensionMat2Url: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionMat3: '',
    ascensionMat3Url: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionGem1: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionGem2: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionGem3: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionGem4: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionMatBoss: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionMatUnique: '',
    ascensionMatUniqueUrl: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionBoss: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    ascensionBossUrl: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    talentBoss: '',
    talentBossUrl: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    talentBook1: '',
    talentBook1Url: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    talentBook2: '',
    talentBook2Url: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    talentBook3: '',
    talentBook3Url: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO',
    talentMatUnique: 'https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO'
}

const characters:Chars[] = [
    {
        id: 'Noelle',
        characterImage: 'https://drive.google.com/uc?id=17SlTXFAPiHnD3uqd6VtwADfdMKDKstjc',
        backgroundImage: 'https://drive.google.com/uc?id=1fRR0AOfTH6NC9O4GwYS2sJSu3CsNWMH8',
        status: 'complete',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        element: 'Geo',
        elementUrl: 'https://drive.google.com/uc?id=1aqT45mcob0WVritpN6QGl95TrlkRu7QU',
        weapon: 'Claymore',
        region: 'Mondstadt',
        ascensionMat1: 'Damaged Mask',
        ascensionMat1Url: 'https://drive.google.com/uc?id=1Gea5t2N7FmYLVMhhFyJmWik2lSkCTeLG',
        ascensionMat2: 'Stained Mask',
        ascensionMat2Url: 'https://drive.google.com/uc?id=1MjX1f2TUvOODQOUDs736Rf4fyE20uAd8',
        ascensionMat3: 'Ominous Mask',
        ascensionMat3Url: 'https://drive.google.com/uc?id=1pjf1NwuW5EppRTFbE_c_XUQ1zVXnqQQH',
        ascensionGem1: 'https://drive.google.com/uc?id=1TRJYCbKCgfa9TuYj7Ur9MDGC4-PVyomA',
        ascensionGem2: 'https://drive.google.com/uc?id=1-LzgEwDafKc1SosdC9OMb7rsDAHZe1UF',
        ascensionGem3: 'https://drive.google.com/uc?id=1-TJEuXzvmMHrrC8lg9PBWkQchL8Uual_',
        ascensionGem4: 'https://drive.google.com/uc?id=1NXZuJjiPz-HOUJuq-GUT5c8prOWcplzT',
        ascensionMatBoss: 'https://drive.google.com/uc?id=1g0ilyV-ZlZ3o_RcMMmzRnYLAxva95CAl',
        ascensionMatUnique: 'Valberry',
        ascensionMatUniqueUrl: 'https://drive.google.com/uc?id=1mKFHTrdGx22cKi6d2gdGtVn6m5z3r_fL',
        ascensionBoss: 'Geo Hypostasis',
        ascensionBossUrl: 'https://drive.google.com/uc?id=1JcDthqDaKXu0RqslCIWmTYdQXbvIqeUr',
        talentBoss: 'Stormterror',
        talentBossUrl: 'https://drive.google.com/uc?id=1ceb6qKXEke18xLPT4UP5RZbPvUUO7s6r',
        talentBook1: 'Teachings of Resistance',
        talentBook1Url: 'https://drive.google.com/uc?id=1NXZuJjiPz-HOUJuq-GUT5c8prOWcplzT',
        talentBook2: 'Guide to Resistance',
        talentBook2Url: 'https://drive.google.com/uc?id=1NXZuJjiPz-HOUJuq-GUT5c8prOWcplzT',
        talentBook3: 'Philosophies of Resistance',
        talentBook3Url: 'https://drive.google.com/uc?id=1NXZuJjiPz-HOUJuq-GUT5c8prOWcplzT',
        talentMatUnique: 'https://drive.google.com/uc?id=1dulf-gdvXwpFm3K8g2WSCFp2mXRVX6p8'
    },
    {
        id: 'Jean',
        characterImage: 'https://drive.google.com/uc?id=1eHpQs4YtoXsm6sdmqlUsATjTLLTTFZKQ',
        backgroundImage: 'https://drive.google.com/uc?id=1XdBe-5ILYJ989bNkjn2YVzz7PzZi-e3i',
        status: 'complete',
        rarity: '5-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1Ch-CF4-u5nksdCjvG_NI3bux-KLPn_Gh',
        element: 'Anemo',
        elementUrl: 'https://drive.google.com/uc?id=13lpaYOnAmEYmRssIzQuMu0Ciu_z9NSaV',
        weapon: 'Sword',
        region: 'Mondstadt',
        ascensionMat1: 'Damaged Mask',
        ascensionMat1Url: 'https://drive.google.com/uc?id=1Gea5t2N7FmYLVMhhFyJmWik2lSkCTeLG',
        ascensionMat2: 'Stained Mask',
        ascensionMat2Url: 'https://drive.google.com/uc?id=1MjX1f2TUvOODQOUDs736Rf4fyE20uAd8',
        ascensionMat3: 'Ominous Mask',
        ascensionMat3Url: 'https://drive.google.com/uc?id=1pjf1NwuW5EppRTFbE_c_XUQ1zVXnqQQH',
        ascensionGem1: 'https://drive.google.com/uc?id=1a915P4dq-3fatY9EvnoaY3ElmXjY6RkZ',
        ascensionGem2: 'https://drive.google.com/uc?id=1D-rI_SuI6H53Uhoh6GmXvHveXsn4hdJO',
        ascensionGem3: 'https://drive.google.com/uc?id=1Ei6DFY50EiF7sj5XV1w6RmaRA7JAFHS5',
        ascensionGem4: 'https://drive.google.com/uc?id=1RAgwfT9nCqlPqwZfmB_sjyqF23-b8goG',
        ascensionMatBoss: 'https://drive.google.com/uc?id=1tP7t4WVs_RPaTOnN926TepSU0AAARHvA',
        ascensionMatUnique: 'Dandelion Seed',
        ascensionMatUniqueUrl: 'https://drive.google.com/uc?id=1EJ6FFqPVyvCH0p0L2s0LOK9bABiYbzjh',
        ascensionBoss: 'Anemo Hypostasis',
        ascensionBossUrl: 'https://drive.google.com/uc?id=109vLMVo-Y3AEqRTGBpyO2VDkVEpXUGr8',
        talentBoss: 'Stormterror',
        talentBossUrl: 'https://drive.google.com/uc?id=1ceb6qKXEke18xLPT4UP5RZbPvUUO7s6r',
        talentBook1: 'Teachings of Resistance',
        talentBook1Url: 'https://drive.google.com/uc?id=1NXZuJjiPz-HOUJuq-GUT5c8prOWcplzT',
        talentBook2: 'Guide to Resistance',
        talentBook2Url: 'https://drive.google.com/uc?id=1NXZuJjiPz-HOUJuq-GUT5c8prOWcplzT',
        talentBook3: 'Philosophies of Resistance',
        talentBook3Url: 'https://drive.google.com/uc?id=1NXZuJjiPz-HOUJuq-GUT5c8prOWcplzT',
        talentMatUnique: 'https://drive.google.com/uc?id=14kdAN5auKuXdpWoEdiZg1g1tVk9yA5Om'
    },
    {
        id: 'Amber',
        characterImage: 'https://drive.google.com/uc?id=1ewmfoj0DVONUN7b3zTmbXT4bH-f9TW6V',
        backgroundImage: 'https://drive.google.com/uc?id=1iABC1zdful8H1Aa2t1_y-1L-a_XeN_EK',
        status: 'complete',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        element: 'Pyro',
        elementUrl: 'https://drive.google.com/uc?id=1KmXYNYgcCxUE_uE6VLiPvvABgorT4CUL',
        weapon: 'Bow',
        region: 'Mondstadt',
        ascensionMat1: 'Firm Arrowhead',
        ascensionMat1Url: 'https://drive.google.com/uc?id=1tQCH09CzoiyKEiU_u1VP1HRLRXlkv53D',
        ascensionMat2: 'Sharp Arrowhead',
        ascensionMat2Url: 'https://drive.google.com/uc?id=1DLQCb9LSsgkGrCMLRvcWd579Q727m-EB',
        ascensionMat3: 'Weathered Arrowhead',
        ascensionMat3Url: 'https://drive.google.com/uc?id=1eqZX72D13xnr2ik8w2SeqqIeq5nUIpDH',
        ascensionGem1: 'https://drive.google.com/uc?id=1xIfhbrDe8Vbx3vNTdFkS0hg5PMSQVzv3',
        ascensionGem2: 'https://drive.google.com/uc?id=1IEMfrof5YHpScv7tVAJ1psgQDTUP-agx',
        ascensionGem3: 'https://drive.google.com/uc?id=1FpaYoCFsUvpCd92OCAL-QVy8yg1ZHkG0',
        ascensionGem4: 'https://drive.google.com/uc?id=1N37nRv7ng3-ogoPKj3zfuGjF6Yg8PthF',
        ascensionMatBoss: 'https://drive.google.com/uc?id=1-3b1PrcoHB_ubbv84kbaN0nZyA_LQD7i',
        ascensionMatUnique: 'Small Lamp Grass',
        ascensionMatUniqueUrl: 'https://drive.google.com/uc?id=1_JraI-k7MQjgUNagMhESxeZDeT5X3CHD',
        ascensionBoss: 'Pyro Regisvine',
        ascensionBossUrl: 'https://drive.google.com/uc?id=1NA6eJnJj2Wwnx_jAK8F61xsMF01Gtgc5',
        talentBoss: 'Stormterror',
        talentBossUrl: 'https://drive.google.com/uc?id=1ceb6qKXEke18xLPT4UP5RZbPvUUO7s6r',
        talentBook1: 'Teachings of Freedom',
        talentBook1Url: 'https://drive.google.com/uc?id=1sGSxuHnt0j0F1a_0SMd62ilp9x_Xri__',
        talentBook2: 'Guide to Freedom',
        talentBook2Url: 'https://drive.google.com/uc?id=1VHwxzxDzIk86tZLE-DrR4KSYH4gDZ4qF',
        talentBook3: 'Philosophies of Freedom',
        talentBook3Url: 'https://drive.google.com/uc?id=1DGnT09f5qYKDbqnofru1VKh7bPPD7DzA',
        talentMatUnique: 'https://drive.google.com/uc?id=1etbaZV1yHEDJn0s_3dTiZYWudfYj9OVm'
    },
    {
        id: 'Yunjin',
        characterImage: 'https://drive.google.com/uc?id=1Oh1J_EJkQEfXZjErMvwLP7Tsqog4lE0S',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Lance',
        element: 'Geo',
        elementUrl: 'https://drive.google.com/uc?id=1aqT45mcob0WVritpN6QGl95TrlkRu7QU',
        region: 'Liyue',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Zhongli',
        characterImage: 'https://drive.google.com/uc?id=1C_vE_CzJCDbYBOcqOlYbqF7VsywczKUs',
        backgroundImage: '',
        status: 'pending',
        rarity: '5-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1Ch-CF4-u5nksdCjvG_NI3bux-KLPn_Gh',
        weapon: 'Lance',
        element: 'Geo',
        elementUrl: 'https://drive.google.com/uc?id=1aqT45mcob0WVritpN6QGl95TrlkRu7QU',
        region: 'Liyue',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Sayu',
        characterImage: 'https://drive.google.com/uc?id=1sGMElab_cv2lKlsMeXJ6WhKcoBIsI4cG',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Claymore',
        element: 'Anemo',
        elementUrl: 'https://drive.google.com/uc?id=13lpaYOnAmEYmRssIzQuMu0Ciu_z9NSaV',
        region: 'Inazuma',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Sucrose',
        characterImage: 'https://drive.google.com/uc?id=18SiVXjijtZbV4qTmzvcs8sh0qCxk2mdw',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Catalyst',
        element: 'Anemo',
        elementUrl: 'https://drive.google.com/uc?id=13lpaYOnAmEYmRssIzQuMu0Ciu_z9NSaV',
        region: 'Mondstadt',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Chongyun',
        characterImage: 'https://drive.google.com/uc?id=1GDpMpi-oEx4QQOHnrXp7R7Mhx8W7JG9c',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Claymore',
        element: 'Cryo',
        elementUrl: 'https://drive.google.com/uc?id=1S2l9zhtwduEuiHj3IafeuIQwb715QkhA',
        region: 'Liyue',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Diona',
        characterImage: 'https://drive.google.com/uc?id=1F_K-2Z7UQWfD1eYRnjL2fOsqLcjET6Rq',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Bow',
        element: 'Cryo',
        elementUrl: 'https://drive.google.com/uc?id=1S2l9zhtwduEuiHj3IafeuIQwb715QkhA',
        region: 'Mondstadt',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Eula',
        characterImage: 'https://drive.google.com/uc?id=1baION04o14zPfY85CVBFP0FJfPpQng60',
        backgroundImage: '',
        status: 'pending',
        rarity: '5-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1Ch-CF4-u5nksdCjvG_NI3bux-KLPn_Gh',
        weapon: 'Claymore',
        element: 'Cryo',
        elementUrl: 'https://drive.google.com/uc?id=1S2l9zhtwduEuiHj3IafeuIQwb715QkhA',
        region: 'Mondstadt',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Beidou',
        characterImage: 'https://drive.google.com/uc?id=1-tV-D4eSoJNBGmR5GbSixsxii8hJsAxP',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Claymore',
        element: 'Electro',
        elementUrl: 'https://drive.google.com/uc?id=1P2UBoWI6uCvc7CawnfgjwpxYEkSpX2o3',
        region: 'Liyue',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Lisa',
        characterImage: 'https://drive.google.com/uc?id=14wjRxMbpzhBy8BWa81iuxL69qahPgOIA',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Catalyst',
        element: 'Electro',
        elementUrl: 'https://drive.google.com/uc?id=1P2UBoWI6uCvc7CawnfgjwpxYEkSpX2o3',
        region: 'Mondstadt',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Razor',
        characterImage: 'https://drive.google.com/uc?id=1nf9DZHYRyWSggaLZjBiR0L9OJZExWS1m',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Claymore',
        element: 'Electro',
        elementUrl: 'https://drive.google.com/uc?id=1P2UBoWI6uCvc7CawnfgjwpxYEkSpX2o3',
        region: 'Mondstadt',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Barbara',
        characterImage: 'https://drive.google.com/uc?id=1JEIsv2LDQFJkmpYcEzl3Daf_oB9sYqXD',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Catalyst',
        element: 'Hydro',
        elementUrl: 'https://drive.google.com/uc?id=1KlSouss__3qRGi8rJyJJ9KdhWjG3_Opp',
        region: 'Mondstadt',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Kokomi',
        characterImage: 'https://drive.google.com/uc?id=1kZEuPXH-G9QEZMFA5X0UMFozObE6ujeV',
        backgroundImage: '',
        status: 'pending',
        rarity: '5-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1Ch-CF4-u5nksdCjvG_NI3bux-KLPn_Gh',
        weapon: 'Catalyst',
        element: 'Hydro',
        elementUrl: 'https://drive.google.com/uc?id=1KlSouss__3qRGi8rJyJJ9KdhWjG3_Opp',
        region: 'Inazuma',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Mona',
        characterImage: 'https://drive.google.com/uc?id=1KlEZwNIBs7j4phS0XYjSlMztaTa1SRYm',
        backgroundImage: '',
        status: 'pending',
        rarity: '5-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1Ch-CF4-u5nksdCjvG_NI3bux-KLPn_Gh',
        weapon: 'Catalyst',
        element: 'Hydro',
        elementUrl: 'https://drive.google.com/uc?id=1KlSouss__3qRGi8rJyJJ9KdhWjG3_Opp',
        region: 'Mondstadt',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Bennett',
        characterImage: 'https://drive.google.com/uc?id=1E334UGtnntkl2pyqiY8iFjzsVvJysomn',
        backgroundImage: '',
        status: 'pending',
        rarity: '4-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1DMJylo0KDILgYggzBHpZLiWF53rDiKlH',
        weapon: 'Sword',
        element: 'Pyro',
        elementUrl: 'https://drive.google.com/uc?id=1KmXYNYgcCxUE_uE6VLiPvvABgorT4CUL',
        region: 'Mondstadt',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    },
    {
        id: 'Hutao',
        characterImage: 'https://drive.google.com/uc?id=1-W5T9-dj2eEspL4hJzxH2tLX1wP4EG3H',
        backgroundImage: '',
        status: 'pending',
        rarity: '5-stars',
        rarityUrl: 'https://drive.google.com/uc?id=1Ch-CF4-u5nksdCjvG_NI3bux-KLPn_Gh',
        weapon: 'Lance',
        element: 'Pyro',
        elementUrl: 'https://drive.google.com/uc?id=1KmXYNYgcCxUE_uE6VLiPvvABgorT4CUL',
        region: 'Liyue',
        ascensionMat1: '',
        ascensionMat1Url: '',
        ascensionMat2: '',
        ascensionMat2Url: '',
        ascensionMat3: '',
        ascensionMat3Url: '',
        ascensionGem1: '',
        ascensionGem2: '',
        ascensionGem3: '',
        ascensionGem4: '',
        ascensionMatBoss: '',
        ascensionMatUnique: '',
        ascensionMatUniqueUrl: '',
        ascensionBoss: '',
        ascensionBossUrl: '',
        talentBoss: '',
        talentBossUrl: '',
        talentBook1: '',
        talentBook1Url: '',
        talentBook2: '',
        talentBook2Url: '',
        talentBook3: '',
        talentBook3Url: '',
        talentMatUnique: '',
    }
];

export const elements:vision[] = [
    {
        id: 'Geo',
        active: false,
        url:'https://drive.google.com/uc?id=1aqT45mcob0WVritpN6QGl95TrlkRu7QU'
    },
    {
        id: 'Anemo',
        active: false,
        url:'https://drive.google.com/uc?id=13lpaYOnAmEYmRssIzQuMu0Ciu_z9NSaV'
    },
    {
        id: 'Electro',
        active: false,
        url:'https://drive.google.com/uc?id=1P2UBoWI6uCvc7CawnfgjwpxYEkSpX2o3'
    },
    {
        id: 'Pyro',
        active: false,
        url:'https://drive.google.com/uc?id=1KmXYNYgcCxUE_uE6VLiPvvABgorT4CUL'
    },
    {
        id: 'Cryo',
        active: false,
        url:'https://drive.google.com/uc?id=1S2l9zhtwduEuiHj3IafeuIQwb715QkhA'
    },
    {
        id: 'Hydro',
        active: false,
        url:'https://drive.google.com/uc?id=1KlSouss__3qRGi8rJyJJ9KdhWjG3_Opp'
    }
];

export default characters;