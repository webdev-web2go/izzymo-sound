import type { ProductI } from "~/types";

export const adminEmail = "efrachaga@gmail.com";

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
    system: "allInOne",
    price: "$1000 MXN",
    image: "/home/mixers/mixer1.webp",
    href: "/equipment/mixers-and-light/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit 1.",
  },
  {
    model: "XDJ-XZ",
    size: "87 x 46 x 11 cm",
    productFunction: "4ChannelFunction",
    system: "allInOne",
    price: "$1000 MXN",
    image: "/home/mixers/mixer2.webp",
    href: "/equipment/mixers-and-light/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit 2.",
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
  },
] as const;

export const sound = [
  {
    model: "ELX200",
    size: '12"',
    productFunction: "monitor",
    power: "1500 watts",
    price: "$1000 MXN",
    image: "/home/sound/sound2.webp",
    href: "/equipment/sound/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit 6.",
  },
  {
    model: "ETX200",
    size: '12"',
    productFunction: "monitor",
    power: "1200 watts",
    price: "$1000 MXN",
    image: "/home/sound/sound3.webp",
    href: "/equipment/sound/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit 7.",
  },
  {
    model: "EKX200",
    size: '15"',
    productFunction: "monitor",
    power: "1300 watts",
    price: "$1000 MXN",
    image: "/home/sound/sound4.webp",
    href: "/equipment/sound/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit 8.",
  },
  {
    model: "ELX200",
    size: '18"',
    productFunction: "sub",
    power: "1600 watts",
    price: "$1000 MXN",
    image: "/home/sound/sound1.webp",
    href: "/equipment/sound/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit 9.",
  },
  {
    model: "EKX200",
    size: '18"',
    productFunction: "sub",
    power: "1300 watts",
    price: "$1000 MXN",
    image: "/home/sound/sound5.webp",
    href: "/equipment/sound/[model]",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus nihil, voluptatibus nam fugiat sequi illum est eos iure recusandae vitae beatae deleniti dolore veniam repellat labore tempore magnam neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit 10.",
  },
] as const;

export const mixerAndLightProducts = [...mixers, ...lights] as ProductI[];

export const soundProducts = [...sound] as ProductI[];
