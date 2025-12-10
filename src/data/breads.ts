export interface Bread {
  slug: string;
  name: string;
  description: string;
  schedule?: string;
}

export const breads: Bread[] = [
  {
    slug: 'country-sourdough',
    name: 'Country Sourdough',
    description: 'Classic open-crumb sourdough boule with a deep, caramelized crust.',
    schedule: 'Fridays',
  },
  {
    slug: 'olive-rosemary',
    name: 'Olive Rosemary',
    description: 'Sourdough studded with kalamata olives and fresh rosemary.',
    schedule: 'Fridays',
  },
  {
    slug: 'danish-rugbrod',
    name: 'Danish Rugbrød',
    description: 'Dense, seeded Danish rye bread — hearty and full of flavor.',
    schedule: 'Thursdays',
  },
];

export const schedule = [
  { day: 'Thursday', items: 'Rye breads (Danish Rugbrød)' },
  { day: 'Friday', items: 'Boules (Country Sourdough, Olive Rosemary)' },
  { day: 'Saturday', items: 'Bagels (all varieties)' },
];
