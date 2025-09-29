const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality noise-canceling headphones"
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Elegant timepiece with leather strap"
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    description: "UV protection with style"
  },
  {
    id: 4,
    name: "Premium Leather Wallet",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
    description: "Genuine leather with RFID protection"
  },
  {
    id: 5,
    name: "Smart Water Bottle",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    description: "Track your hydration levels"
  },
  {
    id: 6,
    name: "Luxury Perfume",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop",
    description: "Exclusive fragrance collection"
  },
  {
    id: 7,
    name: "Wireless Earbuds Pro",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    description: "Premium sound quality"
  },
  {
    id: 8,
    name: "Designer Backpack",
    price: 179.99,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Urban style meets functionality"
  }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Simulate network delay for realism
    setTimeout(() => {
      res.status(200).json({
        success: true,
        products: products,
        timestamp: new Date().toISOString()
      });
    }, 300);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}