import { defineCollection, z } from 'astro:content';

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageCaption: z.string().optional(),
  }),
});

export const collections = {
  about,
};
