export const AllProducts = [
  {
    id: 1,
    category: 'additive_manufacturing',
    categoryImage: 'Rawmeterial.jpg',
    title: 'profuct_title',
    shortDesc: 'shortDesc',
    company: 'pro_company_name',
    price: 45000,
    location: 'county',
    stock: 'stock_rp',
    reviews: 4.6,
    featured: true,
    customize: false,
    specifications: {
      modelNumber: 'iac',
      power: 'hp',
      MOQ: 'unit',
      leadTime: 'lead_time',
    },
    images: ['/Product1.jpg'],
    slug: 'cnc-milling-machine-x500',
  },

  {
    id: 2,
    category: 'laser_cut',
    categoryImage: 'Wood.jpg',
    title: 'laser_cutting_title',
    shortDesc: 'laser_cutting_shortDesc',
    company: 'laser_company',
    price: 62000,
    location: 'saudi',
    stock: 'limited_stock',
    reviews: 4.4,
    featured: true,
    customize: false,

    specifications: {
      modelNumber: 'laser_model',
      power: 'laser_power',
      MOQ: 'laser_moq',
      leadTime: 'laser_lead_time',
    },

    images: ['/Product2.jpg'],
    slug: 'laser-cutting-machine-pro',
  },

  {
    id: 3,
    category: '3d_title',
    categoryImage: 'Paper.jpg',
    title: 'industrial_3d_printer_title',
    shortDesc: 'industrial_3d_printer_shortDesc',
    company: 'printworks_company',
    price: 88000,
    location: 'ua',
    stock: 'in_stock',
    reviews: 4.8,
    featured: true,
    customize: true,

    specifications: {
      modelNumber: 'z9_model',
      power: 'z9_power',
      MOQ: 'z9_moq',
      leadTime: 'z9_lead_time',
    },

    images: ['/Product3.jpg'],
    slug: 'industrial-3d-printer-z9',
  },

  {
    id: 4,
    category: 'hydraulic',
    categoryImage: 'Plastic.jpg',
    title: 'hydraulic_press_title',
    shortDesc: 'hydraulic_press_shortDesc',
    company: 'hydrotech_company',
    price: 71500,
    location: 'chi',
    stock: 'out_of_stock',
    reviews: 4.2,
    featured: true,
    customize: false,

    specifications: {
      modelNumber: 'hpm_model',
      power: 'hpm_power',
      MOQ: 'hpm_moq',
      leadTime: 'hpm_lead_time',
    },

    images: ['/Product4.jpg'],
    slug: 'hydraulic-press-machine-h300',
  },
];
