// alteranative import
// import {
//   defineConfig,
//   extractorSvelte,
//   presetIcons,
//   presetUno,
//   presetAttributify,
//   transformerDirectives,
//   transformerVariantGroup,
// } from "unocss";

// https://github.com/unocss/unocss/tree/main/packages/vite
// https://github.com/unocss/unocss/tree/main/packages/vite#svelte
// https://github.com/unocss/unocss/tree/main/packages/preset-uno
// https://github.com/unocss/unocss/tree/main/packages/preset-attributify
// https://github.com/unocss/unocss/tree/main/packages/preset-icons
// https://github.com/unocss/unocss/tree/main/packages/transformer-directives
// https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group

import { defineConfig } from "@unocss/vite";
import { extractorSvelte } from "@unocss/core";
import presetUno from "@unocss/preset-uno";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import transformerDirective from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

const h = {
  base: {
    100: "hsl(0, 0%, 100%)",
    "100Alt": "hsl(240, 6.7%, 97.1%)",

    200: "hsl(0, 0%, 97%)",
    "200Alt": "hsl(0, 0%, 98%)", // sd
    // '200Alt': "hsl(206, 54%, 97%)" // sd

    300: "hsl(228, 16.1%, 93.9%)",
    "300Alt": "hsl(192, 19%, 95%)", // sd

    400: "hsl(228, 16.1%, 93.9%)",
    "400Alt": "hsl(228, 14%, 93%)", // sd

    content: "hsl(190, 13%, 18%)",
    contentAlt: "hsl(228, 6%, 15%)", // sd
    contentMuted: "hsl(207, 4%, 59%)",
  },
  // Primary (blue-vivid)
  primary: {
    DEFAULT: "hsl(249, 26.5%, 9.6%)",
    content: "hsl(0, 0%, 100%)",
    "50": "#E6F6FF",
    "100": "#BAE3FF",
    "200": "#7CC4FA",
    "300": "#47A3F3",
    "400": "#2186EB",
    "500": "#0967D2",
    "600": "#0552B5",
    "700": "#03449E",
    "800": "#01337D",
    "900": "#002159",
  },

  // Neutrals
  neutral: {
    "50": "#F5F7FA",
    "100": "#E4E7EB",
    "200": "#CBD2D9",
    "300": "#9AA5B1",
    "400": "#7B8794",
    "500": "#616E7C",
    "600": "#52606D",
    "700": "#3E4C59",
    "800": "#323F4B",
    "900": "#1F2933",
  },

  // Supporting
  // cyan-vivid
  cyanV: {
    "50": "#E1FCF8",
    "100": "#C1FEF6",
    "200": "#92FDF2",
    "300": "#62F4EB",
    "400": "#3AE7E1",
    "500": "#1CD4D4",
    "600": "#0FB5BA",
    "700": "#099AA4",
    "800": "#07818F",
    "900": "#05606E",
  },

  // orange-vivid
  orangeV: {
    "50": "#FFE8D9",
    "100": "#FFD0B5",
    "200": "#FFB088",
    "300": "#FF9466",
    "400": "#F9703E",
    "500": "#F35627",
    "600": "#DE3A11",
    "700": "#C52707",
    "800": "#AD1D07",
    "900": "#841003",
  },

  // red-vivid
  redV: {
    "50": "#FFE3E3",
    "100": "#FFBDBD",
    "200": "#FF9B9B",
    "300": "#F86A6A",
    "400": "#EF4E4E",
    "500": "#E12D39",
    "600": "#CF1124",
    "700": "#AB091E",
    "800": "#8A041A",
    "900": "#610316",
  },

  // yellow-vivid
  yellowV: {
    "50": "#FFFBEA",
    "100": "#FFF3C4",
    "200": "#FCE588",
    "300": "#FADB5F",
    "400": "#F7C948",
    "500": "#F0B429",
    "600": "#DE911D",
    "700": "#CB6E17",
    "800": "#B44D12",
    "900": "#8D2B0B",
  },

  // my addition
  teal: {
    "50": "#EFFCF6",
    "100": "#C6F7E2",
    "200": "#8EEDC7",
    "300": "#65D6AD",
    "400": "#3EBD93",
    "500": "#27AB83",
    "600": "#199473",
    "700": "#147D64",
    "800": "#0C6B58",
    "900": "#014D40",
  },
};

// https://github.com/unocss/unocss#configurations
export default defineConfig({
  extractors: [extractorSvelte],

  // https://github.com/unocss/unocss#extend-theme
  theme: {
    colors: {
      primaryBlue: "#123870",
      secondaryGreen: "#34BF42",
      grey: "#D9D9D9",
    },
    fontFamily: {
      primary: "OpenSans",
      secondary: "Poppins",
    },
  },

  // https://github.com/unocss/unocss#custom-rules
  rules: [],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: [
    [
      // s-flex stands for flex-shortcut
      // to avoid mixups with default flex utilities like flex-wrap
      /^s-flex-([a-z]+)-?([a-z]*)$/,
      ([, justify, align]) => `flex justify-${justify} items-${align || "center"}`,
    ],
    {
      // s-flex-col stands for flex-col-shortcut
      // to avoid mixups with default flex utilities like flex-col
      "s-flex-col": "flex flex-col",
    },
    // use when width and height values are the same
    [/^square-(.*)$/, ([, v]) => `h-${v} w-${v}`],
  ],

  // https://github.com/unocss/unocss#using-presets
  presets: [presetUno(), presetIcons({ scale: 1.2 }), presetAttributify()],
  transformers: [transformerDirective(), transformerVariantGroup()],
});
