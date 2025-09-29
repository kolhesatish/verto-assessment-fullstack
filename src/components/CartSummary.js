import { useCart } from './CartProvider';
import { formatCurrency, calculateTax, calculateShipping, getOrderTotal } from '../utils/helpers';

export default function CartSummary() {
  const { getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping(subtotal);
  const total = getOrderTotal(subtotal);

  return (
    <div className="glass-morphism rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-gray-900 text-lg mb-4">Order Summary</h3>
      
      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      
      <div className="flex justify-between text-gray-700">
        <span>Tax</span>
        <span>{formatCurrency(tax)}</span>
      </div>
      
      <div className="flex justify-between text-gray-700">
        <span>Shipping</span>
        <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
          {shipping === 0 ? 'FREE' : formatCurrency(shipping)}
        </span>
      </div>
      
      {shipping > 0 && subtotal < 100 && (
        <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded-lg">
          Add {formatCurrency(100 - subtotal)} more for free shipping!
        </div>
      )}
      
      <div className="border-t border-gray-300/50 pt-3">
        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
}