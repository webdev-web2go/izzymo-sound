import type { ProductI } from "~/types";

export const adminEmails = ["izzymo1313@gmail.com", "efrachaga@gmail.com"];

export const navItems = [
  {
    label: "mixerCardTitle",
    href: "/equipment/mixers-and-light",
  },
  {
    label: "soundCardTitle",
    href: "/equipment/sound",
  },
  {
    label: "equipmentCardTitle",
    href: "/equipment/packages",
  },
] as const;

export const heroImages = [
  "/home/hero1.webp",
  "/home/hero2.webp",
  "/home/hero3.webp",
  "/home/hero4.webp",
] as const;

export const homeCardLinks = [
  {
    href: "/equipment/mixers-and-light",
    image: "/home/mixers/mixer_card.webp",
    title: "mixerCardTitle",
    description: "mixerCardDescription",
  },
  {
    href: "/equipment/sound",
    image: "/home/sound/sound_card.webp",
    title: "soundCardTitle",
    description: "soundCardDescription",
  },
  {
    href: "/equipment/packages",
    image: "/home/equipment_collage.webp",
    title: "equipmentCardTitle",
    description: "equipmentCardDescription",
  },
] as const;

export const mixers = [
  {
    model: "XDJ-XZ",
    size: "72 x 41 x 10 cm",
    productFunction: "2ChannelFunction",
    productFunctionNoTranslate: "2 canales",
    system: "allInOne",
    price: "$1500 MXN",
    image: "/home/mixers/mixer1.webp",
    href: "/equipment/mixers-and-light/[model]",
    description: "XDJ2ChannelDescription",
    totalPieces: 1,
  },
  {
    model: "XDJ-XZ",
    size: "87 x 46 x 11 cm",
    productFunction: "4ChannelFunction",
    productFunctionNoTranslate: "4 canales",
    system: "allInOne",
    price: "$4500 MXN",
    image: "/home/mixers/mixer2.webp",
    href: "/equipment/mixers-and-light/[model]",
    description: "XDJ4ChannelDescription",
    totalPieces: 1,
  },
] as const;

export const lights = [
  {
    model: "S-BAR240",
    size: "100 x 7 x 8 cm",
    productFunction: "LEDFunction",
    power: "sBarPower",
    price: "$1000 MXN",
    image: "/home/light/light1.webp",
    href: "/equipment/mixers-and-light/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit 3.",
    totalPieces: 1,
  },
  {
    model: "18 LEDs",
    size: "Pending",
    productFunction: "LEDFunction",
    power: "25MtsRange",
    price: "$1000 MXN",
    image: "/home/light/light2.webp",
    href: "/equipment/mixers-and-light/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit 4.",
    totalPieces: 1,
  },
  {
    model: "Pending",
    size: "Pending",
    productFunction: "LEDFunction",
    power: "25MtsRange",
    price: "$1000 MXN",
    image: "/home/light/light3.webp",
    href: "/equipment/mixers-and-light/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit5 .",
    totalPieces: 1,
  },
] as const;

export const sound = [
  {
    model: "ELX200",
    size: '12"',
    productFunction: "monitor",
    productFunctionNoTranslate: "Monitor y medios",
    power: "1500 watts",
    price: "$1200 MXN",
    image: "/home/sound/sound2.webp",
    href: "/equipment/sound/[model]",
    description: "EKX200-15",
    totalPieces: 2,
  },
  {
    model: "EKX200",
    size: '12"',
    productFunction: "monitor",
    productFunctionNoTranslate: "Monitor y medios",
    power: "1200 watts",
    price: "$1000 MXN",
    image: "/home/sound/sound3.webp",
    href: "/equipment/sound/[model]",
    description: "EKX200-12",
    totalPieces: 1,
  },
  {
    model: "EKX200",
    size: '15"',
    productFunction: "monitor",
    productFunctionNoTranslate: "Monitor y medios",
    power: "1300 watts",
    price: "$1000 MXN",
    image: "/home/sound/sound4.webp",
    href: "/equipment/sound/[model]",
    description: "EKX200-15",
    totalPieces: 2,
  },
  {
    model: "ELX200",
    size: '18"',
    productFunction: "sub",
    productFunctionNoTranslate: "Sub buffer",
    power: "1500 watts",
    price: "$2000 MXN",
    image: "/home/sound/sound1.webp",
    href: "/equipment/sound/[model]",
    description: "ELX200-18",
    totalPieces: 2,
  },
  {
    model: "EKX200",
    size: '18"',
    productFunction: "sub",
    productFunctionNoTranslate: "Sub buffer",
    power: "1300 watts",
    price: "$1500 MXN",
    image: "/home/sound/sound5.webp",
    href: "/equipment/sound/[model]",
    description: "EKX200-18",
    totalPieces: 2,
  },
] as const;

export const mixerAndLightProducts = [...mixers, ...lights] as ProductI[];

export const soundProducts = [...sound] as ProductI[];

export const allProducts = [...mixerAndLightProducts, ...soundProducts];

export const packages = [
  {
    id: 1,
    category: "audio",
    equipment: "packageOneAudio",
    size: "packageOneAudioSize",
    price: "$3500 MXN",
    extraHourPrice: "$500 MXN",
    isFavorite: false,
    timeForPrice: "6Hours",
  },
  {
    id: 2,
    category: "audio",
    equipment: "packageTwoAudio",
    size: "packageTwoAudioSize",
    price: "$8000 MXN",
    extraHourPrice: "$750 MXN",
    isFavorite: false,
    timeForPrice: "6Hours",
  },
  {
    id: 3,
    category: "audio",
    equipment: "packageThreeAudio",
    size: "packageThreeAudioSize",
    price: "$15000 MXN",
    extraHourPrice: "$1500 MXN",
    isFavorite: true,
    timeForPrice: "6Hours",
  },
  {
    id: 4,
    category: "lighting",
    equipment: "packageOneLighting",
    size: null,
    price: "$1000 MXN",
    extraHourPrice: null,
    isFavorite: false,
    timeForPrice: "fixedPrice",
  },
  {
    id: 5,
    category: "lighting",
    equipment: "packageTwoLighting",
    size: null,
    price: "$2000 MXN",
    extraHourPrice: null,
    isFavorite: false,
    timeForPrice: "fixedPrice",
  },
] as const;
