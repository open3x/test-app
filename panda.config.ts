import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        blue: { value: "#0088FF" },
        orange: { value: "#F37021" },
        yellow: { value: "#FED41D" },
      },
      fonts: {
        body: { value: "system-ui, sans-serif" },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
