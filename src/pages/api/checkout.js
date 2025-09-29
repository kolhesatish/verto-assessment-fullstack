export default function handler(req, res) {
  if (req.method === 'POST') {
    const { items, totalAmount, customerInfo } = req.body;
    
    // Validate the order data
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid order data' 
      });
    }
    
    // Log the order to console (in production, save to database)
    console.log('=================================');
    console.log('NEW ORDER RECEIVED');
    console.log('=================================');
    console.log('Order Time:', new Date().toISOString());
    console.log('Customer Info:', customerInfo || 'Guest');
    console.log('Items Ordered:');
    items.forEach(item => {
      console.log(`  - ${item.name} (ID: ${item.id})`);
      console.log(`    Quantity: ${item.quantity}`);
      console.log(`    Price: $${item.price}`);
      console.log(`    Subtotal: $${(item.price * item.quantity).toFixed(2)}`);
    });
    console.log('---------------------------------');
    console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
    console.log('=================================\n');
    
    // Generate order ID
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    // Return success response
    res.status(200).json({
      success: true,
      message: 'Order placed successfully!',
      orderId: orderId,
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}