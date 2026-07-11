---
title: Free Samples
layout: layout.njk

person:
  title: Honorable
  theme: kozatskiya
  name: |
    Hong Xiaohua
    红小花
  suffixes: KKP OCCC
  image: /images/libraries/bio/tsar-karla-i/Karla_I_Eduardovich_Soyokov_1740.jpg
  imagecaption: Karla I in 1740
  born: |
    November 9, 1696
    Sinyaya Selo,
    Karlskroniya, Tsardom of Cossackia
  died: |
    N/A
  causeofdeath: |
    Asthma attack
  burial: |
    12 November 2024
    Chapel of the Holy Family,
    Karlagrad
  spouse: Jadwiga of Krakow
  children: |
    Karla II
    Archduchess Elizabeth
  names: |
    Karla Eduardovich Soyokov
    Karla Eduard Sojokowski
  house: Soyokov
  father: Eduard IV of Cossackia
  mother: Maria Teresa of Kyiv
  religion: Roman Catholic
  signature: /images/libraries/bio/tsar-karla-i/karla-i-signature-c_1739.png
  signaturecaption: Karla I's signature during the Treaty of Vyborg. (1739)
---

# Free Samples

*From TSIKHI, the Cossackian encyclopedia.*

Here, you can see our new assets being loaded in! Have fun!

# Infoboxes

{% include "infoboxes/people/biography.njk" %}

# War Participants

{% set treelist = [

{
    heading: "Allies",

    items: [

        {
            icon: "/images/flag-repcsk.png",
            title: "Cossackia",
            url: "/libraries/countries/cossackia/",
            description: "Empire",

            children: [

                {
                    icon: "/images/flag-repcsk.png",
                    title: "Imperial Army",
                    description: "Ground Forces",

                    children: [

                        {
                            title: "1st Army",

                            children: [

                                {
                                    title: "1st Corps",

                                    children: [

                                        {
                                            title: "1st Infantry Division"
                                        },

                                        {
                                            title: "2nd Infantry Division"
                                        }

                                    ]
                                },

                                {
                                    title: "2nd Corps"
                                }

                            ]
                        },

                        {
                            title: "2nd Army"
                        }

                    ]
                },

                {
                    icon: "/images/flag-repcsk.png",
                    title: "Imperial Navy",

                    children: [

                        {
                            title: "Northern Fleet"
                        },

                        {
                            title: "Southern Fleet"
                        }

                    ]
                },

                {
                    icon: "/images/flag-repcsk.png",
                    title: "Imperial Air Force",

                    children: [

                        {
                            title: "1st Fighter Wing"
                        },

                        {
                            title: "2nd Bomber Wing"
                        }

                    ]
                }

            ]
        },

        {
            icon: "/images/flag-russia.png",
            title: "Russia",
            url: "/libraries/countries/russia/",

            children: [

                {
                    title: "Russian Army",

                    children: [

                        {
                            title: "Western Military District"
                        },

                        {
                            title: "Eastern Military District"
                        }

                    ]
                },

                {
                    title: "Russian Navy"
                }

            ]
        }

    ]
},

{
    heading: "Axis",

    items: [

        {
            icon: "/images/flag-germany.png",
            title: "Germany",
            url: "/libraries/countries/germany/",

            children: [

                {
                    title: "Heer"
                },

                {
                    title: "Kriegsmarine"
                },

                {
                    title: "Luftwaffe"
                }

            ]
        }

    ]
},

{
    heading: "Neutral",

    items: [

        {
            icon: "/images/flag-switzerland.png",
            title: "Switzerland"
        },

        {
            icon: "/images/flag-sweden.png",
            title: "Sweden"
        }

    ]
}

] %}

{% include "components/treelist.njk" %}