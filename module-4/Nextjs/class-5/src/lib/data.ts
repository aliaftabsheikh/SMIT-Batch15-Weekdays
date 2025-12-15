export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  category: string;
  image: string;
  images: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
  features: { [key: string]: string };
  colors: string[];
  sizes: string[];
  sku: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Noise-Cancelling Headphones',
    brand: 'AudioTech',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviewsCount: 1240,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
    ],
    inStock: true,
    isBestSeller: true,
    description: 'Experience world-class silence with our newest noise-cancelling headphones. Designed for comfort and engineered for sound.',
    features: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '250g',
      'Warranty': '2 Years'
    },
    colors: ['Black', 'Silver', 'Navy'],
    sizes: ['One Size'],
    sku: 'AT-WH-1000XM5'
  },
  {
    id: '2',
    name: 'Minimalist Analog Watch',
    brand: 'Timeless',
    price: 129.00,
    rating: 4.5,
    reviewsCount: 85,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80'
    ],
    inStock: true,
    isNew: true,
    description: 'A classic timepiece for the modern professional. Features a genuine leather strap and sapphire crystal glass.',
    features: {
      'Movement': 'Japanese Quartz',
      'Water Resistance': '50m',
      'Case Material': 'Stainless Steel',
      'Strap': 'Genuine Leather'
    },
    colors: ['Brown/Gold', 'Black/Silver'],
    sizes: ['40mm', '44mm'],
    sku: 'TL-AW-2024'
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    brand: 'WorkComfort',
    price: 450.00,
    originalPrice: 599.00,
    rating: 4.7,
    reviewsCount: 320,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&q=80',
      'https://images.unsplash.com/photo-1617364852223-75f57e78dc96?w=800&q=80'
    ],
    inStock: false,
    description: 'Designed for all-day comfort. Adjustable lumbar support, armrests, and headrest.',
    features: {
      'Material': 'Mesh Back, Fabric Seat',
      'Max Load': '150kg',
      'Adjustability': 'Height, Tilt, Armrests',
      'Assembly': 'Required'
    },
    colors: ['Grey', 'Black'],
    sizes: ['Standard'],
    sku: 'WC-EOC-500'
  },
  {
    id: '4',
    name: 'Smart Fitness Tracker',
    brand: 'FitTech',
    price: 89.99,
    rating: 4.2,
    reviewsCount: 2100,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
      'https://images.unsplash.com/photo-1557858310-905282d1b035?w=800&q=80'
    ],
    inStock: true,
    isBestSeller: true,
    description: 'Track your steps, heart rate, and sleep with our advanced fitness tracker. Water-resistant and long battery life.',
    features: {
      'Battery Life': '7 Days',
      'Sensors': 'HR, SpO2, Accelerometer',
      'Water Resistance': 'IP68',
      'Compatibility': 'iOS & Android'
    },
    colors: ['Black', 'Pink', 'Teal'],
    sizes: ['S/M', 'M/L'],
    sku: 'FT-SFT-300'
  },
  {
    id: '5',
    name: 'Cotton Crew Neck T-Shirt',
    brand: 'Basics',
    price: 25.00,
    rating: 4.4,
    reviewsCount: 500,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
    inStock: true,
    description: 'A wardrobe staple. Made from 100% organic cotton for a soft feel and breathable fit.',
    features: {
      'Material': '100% Organic Cotton',
      'Fit': 'Regular',
      'Care': 'Machine Wash Cold',
      'Origin': 'Made in Portugal'
    },
    colors: ['White', 'Black', 'Grey', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sku: 'BS-CNT-001'
  },
  {
    id: '6',
    name: 'Leather Crossbody Bag',
    brand: 'LuxeLeather',
    price: 180.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 45,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80'
    ],
    inStock: true,
    isNew: true,
    description: 'Handcrafted from premium full-grain leather. Features multiple compartments and an adjustable strap.',
    features: {
      'Material': 'Full-Grain Leather',
      'Dimensions': '25cm x 18cm x 8cm',
      'Hardware': 'Gold-tone',
      'Lining': 'Cotton Canvas'
    },
    colors: ['Tan', 'Black', 'Burgundy'],
    sizes: ['One Size'],
    sku: 'LL-LCB-101'
  }
];

export async function getProducts(searchParams: { [key: string]: string | string[] | undefined }) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredProducts = [...products];

  const category = searchParams.category;
  const minPrice = searchParams.price_min ? Number(searchParams.price_min) : 0;
  const maxPrice = searchParams.price_max ? Number(searchParams.price_max) : Infinity;
  const sort = searchParams.sort;
  const inStock = searchParams.in_stock === 'true';
  const search = searchParams.search;

  if (search && typeof search === 'string') {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchLower) || 
      p.brand.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower)
    );
  }

  if (category && typeof category === 'string') {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  filteredProducts = filteredProducts.filter(p => p.price >= minPrice && p.price <= maxPrice);

  if (inStock) {
    filteredProducts = filteredProducts.filter(p => p.inStock);
  }

  if (sort === 'price_asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price_desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'newest') {
    // Mock logic for newest, assuming higher ID is newer or using isNew flag
    filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  } else if (sort === 'best_selling') {
    filteredProducts.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
  }

  return filteredProducts;
}

export async function getProductById(id: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  return products.find(p => p.id === id);
}

export async function getCategories() {
  const categories = Array.from(new Set(products.map(p => p.category)));
  return categories;
}
