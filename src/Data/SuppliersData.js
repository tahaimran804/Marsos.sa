const SupplierData = [
  {
    id: 1,
    title: 'Gulf Precision Industries',
    verified: false,
    name: 'GPI',

    category: 'Manufacturing',
    industry: 'Industrial Components',
    specialization: 'Metal Fabrication',

    country: 'Saudi Arabia',
    city: 'Jeddah',
    location: 'Jeddah · Industrial Area Phase 3',

    certifications: ['ISO 9001'],
    certificationsCount: 1,

    minimumOrderQty: '100 Units',

    rating: 4.2,
    reviews: 89,

    responseTime: '4 Hours',

    capacity: 70,

    tags: ['Manufacturing', 'Metal', 'Fabrication', 'Custom Parts'],

    actions: {
      contact: true,
      requestQuote: true,
    },
  },

  {
    id: 2,
    title: 'Al Noor Manufacturing Co.',
    verified: true,
    name: 'ANM',

    category: 'Manufacturing',
    industry: 'Metal & Spare Parts',
    specialization: 'CNC Machining',

    country: 'Saudi Arabia',
    city: 'Riyadh',
    location: 'Riyadh · Riyadh 2nd Industrial City',

    certifications: ['ISO 9001', 'ISO 14001'],
    certificationsCount: 2,

    minimumOrderQty: '50 Units',

    rating: 4.6,
    reviews: 128,

    responseTime: '2 Hours',

    capacity: 85,

    tags: [
      'Manufacturing',
      'Metal',
      'Spare Parts',
      'CNC Machining',
      'Make-to-Order',
    ],

    actions: {
      contact: true,
      requestQuote: true,
    },
  },
];

export default SupplierData;
