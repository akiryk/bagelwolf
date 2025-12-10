export interface Bagel {
  slug: string;
  name: string;
  description: string;
}

export const bagels: Bagel[] = [
  { slug: 'plain', name: 'Plain', description: 'Classic sourdough bagel — the foundation of everything we do.' },
  { slug: 'sesame', name: 'Sesame', description: 'Topped with toasted sesame seeds for a nutty, aromatic finish.' },
  { slug: 'everything', name: 'Everything', description: 'Sesame, poppy, garlic, onion, and salt — boldly seasoned.' },
  { slug: 'onion', name: 'Onion', description: 'Topped with dried onion flakes for savory depth.' },
  { slug: 'garlic', name: 'Garlic', description: 'Roasted garlic bits baked right into the crust.' },
  { slug: 'pumpernickel', name: 'Pumpernickel', description: 'Dark rye with cocoa and molasses — earthy and slightly sweet.' },
];
