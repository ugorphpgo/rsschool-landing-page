const products = [
  {
    id: 'coffee-1',
    name: 'Irish coffee',
    image: 'assets/images/coffee-1-preview.webp',
    description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    price: '7.00',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'coffee-2',
    name: 'Kahlua coffee',
    image: 'assets/images/coffee-2-preview.webp',
    description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    price: '7.00',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'coffee-3',
    name: 'Honey raf',
    image: 'assets/images/coffee-3-preview.webp',
    description: 'Espresso with frothed milk, cream and aromatic honey',
    price: '5.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'coffee-4',
    name: 'Ice cappuccino',
    image: 'assets/images/coffee-4-preview.webp',
    description: 'Cappuccino with soft thick foam in summer version with ice',
    price: '5.00',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'coffee-5',
    name: 'Espresso',
    image: 'assets/images/coffee-5-preview.webp',
    description: 'Classic black coffee',
    price: '4.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'coffee-6',
    name: 'Latte',
    image: 'assets/images/coffee-6-preview.webp',
    description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
    price: '5.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'coffee-7',
    name: 'Latte macchiato',
    image: 'assets/images/coffee-7-preview.webp',
    description: 'Espresso with frothed milk and chocolate',
    price: '5.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'coffee-8',
    name: 'Coffee with cognac',
    image: 'assets/images/coffee-8-preview.webp',
    description: 'Fragrant black coffee with cognac and whipped cream',
    price: '6.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'tea-1',
    name: 'Moroccan',
    image: 'assets/images/tea-1.webp',
    description:
      'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    price: '4.50',
    category: 'tea',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'tea-2',
    name: 'Ginger',
    image: 'assets/images/tea-2.webp',
    description: 'Original black tea with fresh ginger, lemon and honey',
    price: '5.00',
    category: 'tea',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'tea-3',
    name: 'Cranberry',
    image: 'assets/images/tea-3.webp',
    description: 'Invigorating black tea with cranberry and honey',
    price: '5.00',
    category: 'tea',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'tea-4',
    name: 'Sea buckthorn',
    image: 'assets/images/tea-4.webp',
    description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    price: '5.50',
    category: 'tea',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'dessert-1',
    image: 'assets/images/dessert-1.webp',
    name: 'Marble cheesecake',
    description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: '3.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'dessert-2',
    image: 'assets/images/dessert-2.webp',
    name: 'Red velvet',
    description: 'Layer cake with cream cheese frosting',
    price: '4.00',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'dessert-3',
    image: 'assets/images/dessert-3.webp',
    name: 'Cheesecakes',
    description:
      'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    price: '4.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'dessert-4',
    image: 'assets/images/dessert-4.webp',
    name: 'Creme brulee',
    description: 'Delicate creamy dessert in a caramel basket with wild berries',
    price: '4.00',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'dessert-5',
    image: 'assets/images/dessert-5.webp',
    name: 'Pancakes',
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    price: '4.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'dessert-6',
    image: 'assets/images/dessert-6.webp',
    name: 'Honey cake',
    description: 'Classic honey cake with delicate custard',
    price: '4.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'dessert-7',
    image: 'assets/images/dessert-7.webp',
    name: 'Chocolate cake',
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    price: '5.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 'dessert-8',
    image: 'assets/images/dessert-8.webp',
    name: 'Black forest',
    description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    price: '6.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },
];