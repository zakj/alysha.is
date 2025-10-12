import { defineCollection } from "astro:content";
import { VALISE_API_KEY } from "astro:env/server";
import { artworksLoader, collectionsLoader } from "astro-loader-valise";

export const collections = {
  artwork: defineCollection({
    loader: artworksLoader(VALISE_API_KEY),
  }),
  collections: defineCollection({
    loader: collectionsLoader(VALISE_API_KEY),
  }),
};
