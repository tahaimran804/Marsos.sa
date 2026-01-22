export const AllProducts = [
  {
    id: 1,
    category: 'Additive Manufacturing',
    categoryImage: 'Rawmeterial.jpg',
    title: 'CNC Milling Machine X500',
    shortDesc:
      'High precision CNC milling machine for industrial manufacturing.',
    company: 'TechCorp Industries',
    price: 'SAR 45,000',
    location: 'Pakistan',
    stock: 'In Stock',
    reviews: 4.6,
    featured: true,
    customize: false,

    specifications: {
      modelNumber: 'IAC-500-HD',
      power: '5.5 HP',
      MOQ: '1 Units',
      leadTime: '3-5 Days',
    },

    images: ['/Product1.jpg'],
    slug: 'cnc-milling-machine-x500',
  },

  {
    id: 2,
    category: 'Laser Cutting',
    categoryImage: 'Wood.jpg',
    title: 'Laser Cutting Machine Pro',
    shortDesc: 'Advanced laser cutting machine with high-speed accuracy.',
    company: 'LaserTech',
    price: 'SAR 62,000',
    location: 'Saudi Arabia',
    stock: 'Limited Stock',
    reviews: 4.4,
    featured: true,
    customize: false,

    specifications: {
      modelNumber: 'LCP-900X',
      power: '6 HP',
      MOQ: '1 Units',
      leadTime: '5-7 Days',
    },

    images: ['/Product2.jpg'],
    slug: 'laser-cutting-machine-pro',
  },

  {
    id: 3,
    category: '3D Printing',
    categoryImage: 'Paper.jpg',

    title: 'Industrial 3D Printer Z9',
    shortDesc: 'Heavy-duty industrial 3D printer for additive manufacturing.',
    company: 'PrintWorks',
    price: 'SAR 88,000',
    location: 'UAE',
    stock: 'In Stock',
    reviews: 4.8,
    featured: true,
    customize: true,

    specifications: {
      modelNumber: 'Z9-IND',
      power: '4.8 HP',
      MOQ: '1 Units',
      leadTime: '4-6 Days',
    },

    images: ['/Product3.jpg'],
    slug: 'industrial-3d-printer-z9',
  },

  {
    id: 4,
    category: 'Hydraulic Machines',
    categoryImage: 'Plastic.jpg',
    title: 'Hydraulic Press Machine H300',
    shortDesc: 'Robust hydraulic press machine for heavy industrial use.',
    company: 'HydroTech',
    price: 'SAR 71,500',
    location: 'China',
    stock: 'Out of Stock',
    reviews: 4.2,
    featured: true,
    customize: false,

    specifications: {
      modelNumber: 'HPM-300X',
      power: '7 HP',
      MOQ: '1 Units',
      leadTime: '7-10 Days',
    },

    images: ['/Product4.jpg'],
    slug: 'hydraulic-press-machine-h300',
  },
];
