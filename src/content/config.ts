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

const signup = defineCollection({
  type: 'content',
  schema: z.object({
    heading: z.string(),
  }),
});

const featuredBagels = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
      })
    ),
    ctaText: z.string(),
    ctaLink: z.string(),
  }),
});

const featuredBreads = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
      })
    ),
    ctaText: z.string(),
    ctaLink: z.string(),
  }),
});

const orderButton = defineCollection({
  type: 'content',
  schema: z.object({
    text: z.string(),
    url: z.string(),
  }),
});

const siteSettings = defineCollection({
  type: 'content',
  schema: z.object({
    tagline: z.string(),
    locationText: z.string(),
  }),
});

export const collections = {
  about,
  signup,
  'featured-bagels': featuredBagels,
  'featured-breads': featuredBreads,
  'order-button': orderButton,
  'site-settings': siteSettings,
};
