export interface Product {
  id: string;
  name: string;
  line: 'fit' | 'lyte' | 'lyte-advanced' | 'samplers';
  lineLabel: string;
  badge?: string;
  price: string;
  size: string;
  calories: string;
  sugar: string;
  color: string;
  glowColor: string;
  secondaryColor: string;
  textColor: string;
  heroRender: string;
  cutout: string;
  description: string;
  officialUrl: string;
  keyIngredients: string[];
  benefits: string[];
}

export interface Ingredient {
  name: string;
  origin: string;
  benefits: string;
  image: string;
}

export interface Review {
  author: string;
  role?: string;
  text: string;
  verified: boolean;
  highlight?: string;
}

export interface VideoStory {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogItem {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
}

export const PRODUCTS: Product[] = [
  // Berri Fit
  {
    id: 'dragon-fruit',
    name: 'Dragon Fruit',
    line: 'fit',
    lineLabel: 'Berri Fit® Active Hydration',
    badge: 'Fan Favorite',
    price: '$14.99',
    size: '16 fl oz (473 mL)',
    calories: '35 cal / serving',
    sugar: '6g natural sugar',
    color: '#FF2E93',
    glowColor: 'rgba(255, 46, 147, 0.45)',
    secondaryColor: '#00B4D8',
    textColor: '#880E4F',
    heroRender: '/assets/hero-renders/dragon-fruit-hero.webp',
    cutout: '/assets/cutouts/fit/dragon-fruit.webp',
    description: 'A smooth, refreshing tropical blend of coconut, dragon fruit, and raspberries.',
    officialUrl: 'https://berriorganics.com/products/dragon-fruit',
    keyIngredients: ['Organic Dragon Fruit', 'Coconut Water', 'Maca Root', 'Organic Raspberries'],
    benefits: ['Plant-Based Electrolytes', 'Half the Calories of Leading Sports Drinks', 'Sustained Energy & Focus']
  },
  {
    id: 'tropical-punch',
    name: 'Tropical Punch',
    line: 'fit',
    lineLabel: 'Berri Fit® Active Hydration',
    badge: 'New!',
    price: '$14.99',
    size: '16 fl oz (473 mL)',
    calories: '35 cal / serving',
    sugar: '6g natural sugar',
    color: '#FF5E3A',
    glowColor: 'rgba(255, 94, 58, 0.45)',
    secondaryColor: '#FFAA00',
    textColor: '#BF360C',
    heroRender: '/assets/hero-renders/tropical-punch-hero.webp',
    cutout: '/assets/cutouts/fit/tropical-punch.webp',
    description: 'An invigorating burst of organic pineapple, passionfruit, and island botanicals.',
    officialUrl: 'https://berriorganics.com/products/tropical-punch',
    keyIngredients: ['Organic Guava', 'Coconut Water', 'Organic Pineapple', 'Maca Root'],
    benefits: ['1/3 the Sugar of Traditional Sports Drinks', 'Pre- and Post-Workout Recovery', 'No Artificial Dyes']
  },
  {
    id: 'mango',
    name: 'Mango',
    line: 'fit',
    lineLabel: 'Berri Fit® Active Hydration',
    price: '$14.99',
    size: '16 fl oz (473 mL)',
    calories: '35 cal / serving',
    sugar: '6g natural sugar',
    color: '#FFAA00',
    glowColor: 'rgba(255, 170, 0, 0.45)',
    secondaryColor: '#FF5E3A',
    textColor: '#E65100',
    heroRender: '/assets/hero-renders/mango-hero.webp',
    cutout: '/assets/cutouts/fit/mango.webp',
    description: 'Lush organic tropical mango packed with restorative plant electrolytes and maca.',
    officialUrl: 'https://berriorganics.com/products/mango',
    keyIngredients: ['Organic Mango Puree', 'Coconut Water', 'Organic Manuka Honey', 'Sea Salt'],
    benefits: ['Naturally Occurring Potassium & Magnesium', 'Clean Fuel for Casual Athletes', 'Gluten-Free & Paleo Friendly']
  },
  {
    id: 'fit-sampler',
    name: 'Berri Fit Sampler Pack',
    line: 'samplers',
    lineLabel: 'Berri Fit® Variety Pack',
    badge: 'New!',
    price: '$21.99',
    size: 'Multi-Pack',
    calories: '35 cal / serving',
    sugar: '6g natural sugar',
    color: '#00838F',
    glowColor: 'rgba(0, 131, 143, 0.45)',
    secondaryColor: '#00B4D8',
    textColor: '#004D40',
    heroRender: '/assets/hero-renders/fit-sampler-hero.webp',
    cutout: '/assets/cutouts/fit/fit-sampler.webp',
    description: 'Experience all 3 plant-powered active hydration flavors in one convenient pack.',
    officialUrl: 'https://berriorganics.com/products/berrifit-sampler-pack',
    keyIngredients: ['Dragon Fruit', 'Tropical Punch', 'Mango', 'Organic Botanicals'],
    benefits: ['Try All 3 Active Hydration Flavors', 'Great for Families & Athletes', '100% USDA Certified Organic']
  },

  // Berri Lyte
  {
    id: 'strawberry',
    name: 'Strawberry',
    line: 'lyte',
    lineLabel: 'Berri Lyte® Pediatrician Approved',
    badge: 'Best Seller',
    price: '$16.99',
    size: '33.8 fl oz (1 L)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    color: '#E63946',
    glowColor: 'rgba(230, 57, 70, 0.45)',
    secondaryColor: '#00B4D8',
    textColor: '#B71C1C',
    heroRender: '/assets/hero-renders/strawberry-hero.webp',
    cutout: '/assets/cutouts/lyte/strawberry.webp',
    description: 'Pediatrician-approved oral electrolyte solution crafted with real organic strawberries.',
    officialUrl: 'https://berriorganics.com/products/strawberry',
    keyIngredients: ['Organic Strawberry Puree', 'Organic Coconut Water', 'Sweet Potato Juice', 'Zinc'],
    benefits: ['Meets WHO Oral Rehydration Criteria', 'Doctor-Approved for Infants to Adults', 'Natural Electrolyte Restoration']
  },
  {
    id: 'fruit-punch',
    name: 'Fruit Punch',
    line: 'lyte',
    lineLabel: 'Berri Lyte® Rapid Response',
    badge: '20 oz Size',
    price: '$9.98',
    size: '20 fl oz (591 mL)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    color: '#FF4757',
    glowColor: 'rgba(255, 71, 87, 0.45)',
    secondaryColor: '#FFAA00',
    textColor: '#C2185B',
    heroRender: '/assets/hero-renders/fruit-punch-hero.webp',
    cutout: '/assets/cutouts/lyte/fruit-punch.webp',
    description: 'Juicy organic apples, grapes, and strawberries formulated for rapid rehydration.',
    officialUrl: 'https://berriorganics.com/products/new-fruit-punch-20oz-size',
    keyIngredients: ['Organic Apple Juice', 'Organic White Grape', 'Organic Strawberry', 'Sea Salt'],
    benefits: ['On-the-Go 20oz Size', 'No Added Sugar or Artificial Dyes', 'Effective Fluid & Electrolyte Balance']
  },
  {
    id: 'elderberry-apple',
    name: 'Elderberry Apple',
    line: 'lyte',
    lineLabel: 'Berri Lyte® Rapid Response',
    badge: 'Immunity Boost',
    price: '$9.98',
    size: '20 fl oz (591 mL)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    color: '#7B2CBF',
    glowColor: 'rgba(123, 44, 191, 0.45)',
    secondaryColor: '#9D0208',
    textColor: '#4A148C',
    heroRender: '/assets/hero-renders/elderberry-apple-hero.webp',
    cutout: '/assets/cutouts/lyte/elderberry-apple.webp',
    description: 'Antioxidant-rich organic elderberry paired with crisp organic apple juice.',
    officialUrl: 'https://berriorganics.com/products/elderberry-apple',
    keyIngredients: ['Organic Elderberry', 'Organic Apple Juice', 'Guava Zinc', 'Coconut Water'],
    benefits: ['Immune Support with Real Elderberry', 'Rapid Recovery from Cold & Flu', 'Gentle on Little Tummias']
  },
  {
    id: 'acai-berry',
    name: 'Acai Berry',
    line: 'lyte',
    lineLabel: 'Berri Lyte® Pediatrician Approved',
    price: '$16.99',
    size: '33.8 fl oz (1 L)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    color: '#5A189A',
    glowColor: 'rgba(90, 24, 154, 0.45)',
    secondaryColor: '#C71585',
    textColor: '#3A0CA3',
    heroRender: '/assets/hero-renders/acai-berry-hero.webp',
    cutout: '/assets/cutouts/lyte/acai-berry.webp',
    description: 'Superberry hydration fueled by antioxidant organic acai from the Amazon rainforest.',
    officialUrl: 'https://berriorganics.com/products/acai-berry',
    keyIngredients: ['Organic Acai', 'Maqui Superberries', 'Coconut Water', 'Sea Salt'],
    benefits: ['Rich in Anthocyanin Antioxidants', 'WHO Osmolarity Standard', 'Plant-Based Electrolytes']
  },
  {
    id: 'cherry',
    name: 'Cherry',
    line: 'lyte',
    lineLabel: 'Berri Lyte® Pediatrician Approved',
    price: '$16.99',
    size: '33.8 fl oz (1 L)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    color: '#9D0208',
    glowColor: 'rgba(157, 2, 8, 0.45)',
    secondaryColor: '#D90429',
    textColor: '#7F0000',
    heroRender: '/assets/hero-renders/cherry-hero.webp',
    cutout: '/assets/cutouts/lyte/cherry.webp',
    description: 'Rich, authentic tart organic cherry packed with bioavailable electrolytes.',
    officialUrl: 'https://berriorganics.com/products/cherry',
    keyIngredients: ['Organic Tart Cherry', 'Organic Coconut Water', 'Sweet Potato Juice', 'Zinc'],
    benefits: ['Doctor-Approved Oral Hydration', 'Deep Fruit Flavor Kids Love', 'Prevents Dehydration Naturally']
  },
  {
    id: 'wild-berry',
    name: 'Wild Berry',
    line: 'lyte',
    lineLabel: 'Berri Lyte® Rapid Response',
    badge: 'New 20oz',
    price: '$9.98',
    size: '20 fl oz (591 mL)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    color: '#C71585',
    glowColor: 'rgba(199, 21, 133, 0.45)',
    secondaryColor: '#7B2CBF',
    textColor: '#880E4F',
    heroRender: '/assets/hero-renders/wild-berry-hero.webp',
    cutout: '/assets/cutouts/lyte/wild-berry.webp',
    description: 'A vibrant blend of organic berries formulated for rapid response oral hydration.',
    officialUrl: 'https://berriorganics.com/products/new-wild-berry-20oz-size',
    keyIngredients: ['Organic Blueberries', 'Organic Blackberries', 'Coconut Water', 'Monk Fruit'],
    benefits: ['Convenient Grab-and-Go Bottle', 'Effective WHO Oral Formula', 'Zero Artificial Ingredients']
  },
  {
    id: 'lyte-sampler',
    name: 'Berri Lyte Sampler (3 Flavors)',
    line: 'samplers',
    lineLabel: 'Berri Lyte® Trio',
    badge: '3 Large Bottles',
    price: '$22.98',
    size: '3 x 33.8 fl oz (1 L)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    color: '#0077B6',
    glowColor: 'rgba(0, 119, 182, 0.45)',
    secondaryColor: '#00B4D8',
    textColor: '#023E8A',
    heroRender: '/assets/hero-renders/lyte-sampler-hero.webp',
    cutout: '/assets/cutouts/lyte/lyte-sampler.webp',
    description: 'The pediatrician-approved rehydration trio: Strawberry, Acai Berry, and Cherry.',
    officialUrl: 'https://berriorganics.com/products/new-berri-lyte-sampler-3-flavors',
    keyIngredients: ['Strawberry (1L)', 'Acai Berry (1L)', 'Cherry (1L)'],
    benefits: ['Full Family Medicine-Cabinet Hydration', 'Save on 3-Pack Bundle', 'Pediatrician Approved']
  },

  // Berri Lyte Advanced
  {
    id: 'advanced-strawberry',
    name: 'Advanced Strawberry',
    line: 'lyte-advanced',
    lineLabel: 'Berri Lyte® Advanced Formula',
    badge: 'Advanced Formula',
    price: '$16.99',
    size: '33.8 fl oz (1 L)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    color: '#D90429',
    glowColor: 'rgba(217, 4, 41, 0.45)',
    secondaryColor: '#7B2CBF',
    textColor: '#900C3F',
    heroRender: '/assets/hero-renders/advanced-strawberry-hero.webp',
    cutout: '/assets/cutouts/lyte-advanced/advanced-strawberry.webp',
    description: 'Advanced formula provides rapid response hydration + the power of real elderberry.',
    officialUrl: 'https://berriorganics.com/products/advanced-strawberry',
    keyIngredients: ['Advanced Electrolyte Complex', 'Real Organic Elderberry', 'Organic Strawberry', 'Immune Zinc'],
    benefits: ['Maximum Oral Hydration Efficiency', 'Immune Support with Elderberry & Zinc', 'Superior Bioavailable Absorption']
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    name: 'Guava',
    origin: 'Organically sourced from South America',
    benefits: 'Plant-based source of zinc to help support immune system',
    image: '/assets/ingredient_guava.png'
  },
  {
    name: 'Coconut Water',
    origin: 'Tapped from the center of young coconuts in the Philippines',
    benefits: 'Isotonic, hypoallergenic, and all-natural health benefits',
    image: '/assets/ingredient_coconut_water.png'
  },
  {
    name: 'Maca Root',
    origin: 'Hand-selected maca roots harvested in Peru',
    benefits: 'Balanced energy and supports faster muscle recovery and healing',
    image: '/assets/ingredient_maca_root.png'
  },
  {
    name: 'Sweet Potato',
    origin: 'Organically sourced from the U.S.A.',
    benefits: 'Provides carbohydrates and fiber and is a healthier alternative to sugar',
    image: '/assets/ingredient_sweet_potato.png'
  },
  {
    name: 'Ginseng Root',
    origin: 'Organically sourced from Canada',
    benefits: 'Increased energy and focus',
    image: '/assets/ingredient_ginseng_root.png'
  },
  {
    name: 'Sea Salt',
    origin: 'Naturally sourced from the ocean',
    benefits: 'Helps the body absorb potassium and prevents muscle pains, spasms, and cramps',
    image: '/assets/ingredient_sea_salt.png'
  },
  {
    name: 'Amla Fruit',
    origin: 'Organically sourced from Asia',
    benefits: 'Plant-based source of Vitamin C to help support immune system',
    image: '/assets/ingredient_amla_fruit.png'
  },
  {
    name: 'Maqui Superberries',
    origin: 'Organically sourced from Chile',
    benefits: 'Increases energy, supports muscle recovery, and reduces fatigue and soreness',
    image: '/assets/ingredient_maqui_superberries.png'
  }
];

export const PILLARS = [
  {
    title: 'Plant-Based',
    description: 'Crafted exclusively from USDA Organic botanicals, coconuts, and superberries.',
    icon: '/assets/pillar_plant_based.svg'
  },
  {
    title: 'Less Sugar*',
    description: 'Sweetened naturally with organic fruits and pure botanicals, not artificial syrups.',
    icon: '/assets/pillar_less_sugar.svg'
  },
  {
    title: 'Proven to Hydrate',
    description: 'Adheres to WHO oral rehydration guidelines for optimal glucose-to-sodium absorption.',
    icon: '/assets/pillar_proven_to_hydrate.svg'
  },
  {
    title: 'Tastes Great',
    description: 'Crisp, refreshing, true-to-fruit flavors loved by toddlers, parents, and athletes alike.',
    icon: '/assets/pillar_tastes_great.svg'
  }
];

export const WHY_POINTS = [
  {
    num: '01',
    title: 'Less sugar*',
    subtext: 'Our drinks are sweetened with a blend of natural sweeteners.',
    icon: '/assets/why_less_sugar.svg'
  },
  {
    num: '02',
    title: 'Deliciously hydrating',
    subtext: 'A specific balance of electrolytes and glucose designed to help your body absorb water more efficiently.',
    icon: '/assets/why_plant_based.svg'
  },
  {
    num: '03',
    title: 'Powerful electrolytes',
    subtext: 'Doctor-approved hydration made with real fruit and no artificial dyes.',
    icon: '/assets/why_powerful_electrolytes.svg'
  },
  {
    num: '04',
    title: 'Fewer calories*',
    subtext: "Hydration doesn't need filler calories. We only use calories that come naturally from real ingredients.",
    icon: '/assets/why_fewer_calories.svg'
  }
];

export const MEDICAL_QUOTE = {
  quote: "Berri Lyte's glucose to sodium ratio and total osmolarity for oral rehydration solutions is recommended by the World Health Organization (WHO) for dehydration and electrolyte replenishment making it suitable for infants and children of all ages. Berri Lyte has a clear advantage in clean, organic ingredients.",
  author: "Director of Pediatric Gastroenterology",
  institution: "Boston Children's Hospital"
};

export const REVIEWS: Review[] = [
  {
    author: 'Rebekah D',
    text: 'Lower sugar content compared to many traditional electrolyte drinks.',
    verified: true,
    highlight: 'Lower Sugar'
  },
  {
    author: 'Cole L',
    text: 'So easy and tasty, my favorite',
    verified: true,
    highlight: 'Easy & Tasty'
  },
  {
    author: 'Sarah M',
    text: 'My kids love the tropical punch flavor and I love the clean ingredients.',
    verified: true,
    highlight: 'Kids Love It'
  },
  {
    author: 'Nikki Gagnon',
    role: 'Mother, Fitness Enthusiast and Trainer',
    text: 'I avoid Gatorade because of the synthetic poor quality ingredients and high sugar content. I prefer Berri Fit because of the blend of clean, organic ingredients that were designed with the consumer in mind.',
    verified: true,
    highlight: 'Clean Ingredients'
  }
];

export const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'story-1',
    title: 'Parent Review: Recovering from Fever & Illness',
    thumbnail: 'https://berriorganics.com/cdn/shop/files/preview_images/efedd3774f754a4c90fc731592655bf2.thumbnail.0000000000_720x.jpg?v=1787261180',
    videoUrl: 'https://berriorganics.com/cdn/shop/videos/c/vp/efedd3774f754a4c90fc731592655bf2/efedd3774f754a4c90fc731592655bf2.HD-1080p-2.5Mbps-92188742.mp4?v=0'
  },
  {
    id: 'story-2',
    title: 'Active Family Hydration on the Soccer Field',
    thumbnail: 'https://berriorganics.com/cdn/shop/files/preview_images/a5d705204e364cda88c3c700bdef06dc.thumbnail.0000000000_720x.jpg?v=1787261082',
    videoUrl: 'https://berriorganics.com/cdn/shop/videos/c/vp/a5d705204e364cda88c3c700bdef06dc/a5d705204e364cda88c3c700bdef06dc.HD-1080p-2.5Mbps-92188607.mp4?v=0'
  },
  {
    id: 'story-3',
    title: 'Why Pediatric Gastroenterologists Choose Berri Lyte',
    thumbnail: 'https://berriorganics.com/cdn/shop/files/preview_images/f50342952d494bbf88f4412fa1ec9765.thumbnail.0000000000_720x.jpg?v=1787260919',
    videoUrl: 'https://berriorganics.com/cdn/shop/videos/c/vp/f50342952d494bbf88f4412fa1ec9765/f50342952d494bbf88f4412fa1ec9765.HD-1080p-2.5Mbps-92188392.mp4?v=0'
  },
  {
    id: 'story-4',
    title: 'Real Taste Test: Toddlers & Kids Loving Real Fruit',
    thumbnail: 'https://berriorganics.com/cdn/shop/files/preview_images/a72de83dcdbc4b6faeb9c312fab43038.thumbnail.0000000000_720x.jpg?v=1782362893',
    videoUrl: 'https://berriorganics.com/cdn/shop/videos/c/vp/a72de83dcdbc4b6faeb9c312fab43038/a72de83dcdbc4b6faeb9c312fab43038.HD-1080p-2.5Mbps-87367235.mp4?v=0'
  },
  {
    id: 'story-5',
    title: 'Post-Workout Clean Fuel with Maca & Sea Salt',
    thumbnail: 'https://berriorganics.com/cdn/shop/files/preview_images/8ef022e531fc43d1b65801423b7d3454.thumbnail.0000000000_720x.jpg?v=1782362889',
    videoUrl: 'https://berriorganics.com/cdn/shop/videos/c/vp/8ef022e531fc43d1b65801423b7d3454/8ef022e531fc43d1b65801423b7d3454.HD-1080p-2.5Mbps-87367233.mp4?v=0'
  },
  {
    id: 'story-6',
    title: 'Daily Wellness & Immune Hydration Routine',
    thumbnail: 'https://berriorganics.com/cdn/shop/files/preview_images/9f0f1b3f81c6429e8c6f37ae1305dbb3.thumbnail.0000000000_720x.jpg?v=1782362862',
    videoUrl: 'https://berriorganics.com/cdn/shop/videos/c/vp/9f0f1b3f81c6429e8c6f37ae1305dbb3/9f0f1b3f81c6429e8c6f37ae1305dbb3.HD-1080p-2.5Mbps-87367228.mp4?v=0'
  }
];

export const FOUNDER_STORY = {
  heading: 'Fighting to End Pediatric Cancer',
  quote: "Our founder, Jerome, was thriving as a college athlete when he was suddenly diagnosed with cancer. During his recovery, he started making his own hydration: clean electrolytes, without the over-processed ingredients most commercial brands relied on. That experience became Berri Organics: a mission to help families hydrate better, and help build a world without pediatric cancer.",
  mission: "We exist to support families fighting pediatric cancer while helping fund the search for a cure. Every product we make is designed to support the health and well-being of families everywhere.",
  disclosure: "For every bottle sold, Berri Organics makes a donation to Wish Upon a Teen and Dana-Farber Cancer Institute to fight pediatric cancer. A fixed portion of net proceeds from the sales of this product will be donated to Wish Upon a Teen (1%) and The Jimmy Fund (2%) for pediatric cancer research and patient care. The Jimmy Fund is located at 450 Brookline Avenue, Boston, MA 02215, (617) 632-3000. The program is being conducted by a Commercial Co-Venturer. The Jimmy Fund does not endorse or promote any company’s products or services."
};

export const RETAILER_FRAMES = [
  '/assets/Frame_2147228120.png',
  '/assets/Frame_2147228121.png',
  '/assets/Frame_2147228122.png',
  '/assets/Frame_2147228123.png',
  '/assets/Frame_2147228124.png',
  '/assets/Frame_2147228125.png',
  '/assets/Frame_2147228126.png'
];

export const BLOGS: BlogItem[] = [
  {
    title: "The U.S. Is Banning Artificial Dyes. Here's What That Means for Your Kid's Hydration Drink.",
    excerpt: "The U.S. is phasing out 8 artificial food dyes by end of 2026. Here's which ones are in conventional drinks and why certified organic hydration is the safest choice.",
    date: "September 02, 2026",
    image: "https://berriorganics.com/cdn/shop/articles/EXBERRY-beverages-900x550_b51b7bb5-ca69-4a18-b0fc-eb3debfef4d1.jpg?v=1788369109&width=600",
    url: "https://berriorganics.com/blogs/blog/the-u-s-is-banning-artificial-dyes-heres-what-that-means-for-your-kids-hydration-drink"
  },
  {
    title: "Why Hydration Matters When Your Kid Is Sick",
    excerpt: "When your kid has a fever, stomach bug, or cold, hydration is half the battle. Learn why oral rehydration solutions with natural electrolytes make a critical difference.",
    date: "August 28, 2026",
    image: "https://berriorganics.com/cdn/shop/articles/Screenshot_2026-08-29_at_01.38.05.png?v=1787942526&width=600",
    url: "https://berriorganics.com/blogs/blog/why-hydration-matters-when-your-kid-is-sick"
  },
  {
    title: "How Much Water Should Kids Drink? An Age-by-Age Hydration Guide",
    excerpt: "Learn how much water kids should drink by age with this complete pediatric hydration guide, covering recommended daily fluid intakes and electrolyte balance.",
    date: "August 25, 2026",
    image: "https://berriorganics.com/cdn/shop/articles/blog_images.png?v=1787592761&width=600",
    url: "https://berriorganics.com/blogs/blog/how-much-water-should-kids-drink-an-age-by-age-hydration-guide"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What Does USDA Organic Mean? Why Does Berri Use Organic Ingredients?",
    answer: "Berri is USDA Certified Organic so free of GMOS, artificial sweeteners and colors. The organic label designates products produced under the Organic Foods Production Act. Organic products like Berri Fit and Berri Lyte cannot contain antibiotics, hormones, genetic engineering, radiation, or synthetic pesticides or fertilizers. Without labeling, there is no guarantee of these practices."
  },
  {
    question: "What Is the Difference Between a Fitness Beverage and a Sports Drink?",
    answer: "A sports drink is made for competitive athletes who need the high carbohydrate (sugar) and sodium content to compete in high-intensity endurance environments, such as marathons and triathlons. Sports drinks today are artificially made in laboratories. A fitness beverage is made for casual athletes and fitness enthusiasts who want a healthy option to hydrate and refuel. This group often consists of yogis, weekend warriors and active kids, who do not need the high calorie and sugar content associated with artificial sports drinks."
  },
  {
    question: "How Many Calories Are in a Bottle?",
    answer: "There are only 35 calories per serving and 70 calories per bottle of Berri Fit. And only 25 calories per serving and 100 calories per bottle of Berri Lyte!"
  },
  {
    question: "How Many Grams of Sugar Are in Berri Products?",
    answer: "There are only 6 grams of sugar per serving, which is naturally occurring from the organic fruits, manuka honey, and agave nectar inside Berri Fit. There are only 4 grams of sugar per serving, which is naturally occurring from the organic fruits, sweet potato juice, and non-GMO monk fruit inside Berri Lyte!"
  },
  {
    question: "Are Sugar or Artificial Sweeteners Added?",
    answer: "Berri Fit is sweetened with certified organic manuka honey from New Zealand and certified organic agave nectar. Berri Lyte is sweetened with organic sweet potato juice, organic maqui superberries, organic guava, and non-GMO monk fruit. There is no sugar added to Berri products. Berri does not use artificial sweeteners like stevia or erythritol."
  },
  {
    question: "When Is the Best Time to Drink Berri?",
    answer: "Berri Fit is perfect for active lifestyles and every day hydration needs. Made as a workout replenishment, Berri Fit is suitable for the casual athlete or fitness enthusiast whether you are a yogi, soccer mom or weekend warrior. As a low-calorie beverage, Berri Fit is also effective for weight management. Berri Lyte is great for infants to adults. Pediatrician approved Berri Lyte restores natural hydration levels caused by cold, flu or alcoholic beverages."
  },
  {
    question: "Why Is Berri Fit Better Than Traditional Sports Drinks?",
    answer: "Calories and Sugar: Berri Fit has ½ the Calories and ⅓ the Sugar of leading sports drinks. Organic and Plant-Based: Berri Fit is USDA Certified Organic, Gluten-Free, and Paleo Friendly. Essential Ingredients like Maca, Ginseng, Manuka Honey, Maqui Berries, and Sea Salt: Berri Fit provides nutritional benefits from our premium ingredients that other sports drinks cannot offer. More Electrolytes: Berri Fit has more electrolytes than most traditional sports drinks (potassium, calcium, magnesium)."
  }
];

export const POLICY_NOTES = {
  guarantee: "45-Day Money-Back Guarantee",
  shipping: "$6.99 shipping | Free Shipping for orders +$75",
  subscription: "Subscribe & Save 10%",
  conceptNote: "Concept redesign — not the official Berri Organics website. All products, trademarks, and logos belong to Berri Organics.",
  pricesNote: "Prices as listed on berriorganics.com when this concept was designed."
};

