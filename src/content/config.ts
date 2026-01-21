import { defineCollection, z } from 'astro:content';

const about = defineCollection({
  type: 'content',
  schema: z.object({
    // Intro section
    title: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageCaption: z.string().optional(),
    // Process section
    processTitle: z.string(),
    processBody: z.string(),
    // Values section
    valuesTitle: z.string(),
    values: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    // Photo section
    photoImage: z.string(),
    photoAlt: z.string(),
    photoCaption: z.string(),
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

const bagelsPage = defineCollection({
  type: 'content',
  schema: z.object({
    // Intro section
    introTitle: z.string(),
    introBody: z.string(),
    // Bagel items
    items: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        image: z.string().optional(),
      })
    ),
    // Philosophy section
    philosophyTitle: z.string(),
    philosophyBody: z.string(),
    // Order CTA section
    ctaTitle: z.string(),
    ctaBody: z.string(),
  }),
});

const breadPage = defineCollection({
  type: 'content',
  schema: z.object({
    // Intro section
    introTitle: z.string(),
    introBody: z.string(),
    // Bread items
    items: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        image: z.string().optional(),
      })
    ),
    // Philosophy/Info section (replaces baking schedule)
    infoTitle: z.string(),
    infoBody: z.string(),
    // Order CTA section
    ctaTitle: z.string(),
    ctaBody: z.string(),
  }),
});

export const collections = {
  about,
  signup,
  'featured-bagels': featuredBagels,
  'featured-breads': featuredBreads,
  'order-button': orderButton,
  'site-settings': siteSettings,
  'bagels-page': bagelsPage,
  'bread-page': breadPage,
};
