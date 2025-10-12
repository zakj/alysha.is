// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      VALISE_API_KEY: envField.string({ context: "server", access: "secret" }),
    },
  },
});
