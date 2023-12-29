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
    href: "/equipment/mixers-and-light/mixer/[model]",
  },
  {
    model: "XDJ-XZ",
    size: "87 x 46 x 11 cm",
    productFunction: "4ChannelFunction",
    system: "allInOne",
    price: "$1000 MXN",
    image: "/home/mixers/mixer2.webp",
    href: "",
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
    href: "",
  },
  {
    model: "18 LEDs",
    size: "Pending",
    productFunction: "LEDFunction",
    power: "25MtsRange",
    price: "$1000 MXN",
    image: "/home/light/light2.webp",
    href: "",
  },
  {
    model: "Pending",
    size: "Pending",
    productFunction: "LEDFunction",
    power: "25MtsRange",
    price: "$1000 MXN",
    image: "/home/light/light3.webp",
    href: "",
  },
] as const;
