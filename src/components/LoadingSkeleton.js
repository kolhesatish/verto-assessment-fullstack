export default function LoadingSkeleton({ type = 'product' }) {
  if (type === 'product') {
    return (
      <div className="glass-morphism rounded-2xl p-6 animate-pulse">
        <div className="w-full h-64 bg-gray-300/50 rounded-xl mb-4" />
        <div className="h-6 bg-gray-300/50 rounded mb-2" />
        <div className="h-4 bg-gray-300/50 rounded mb-4 w-3/4" />
        <div className="flex justify-between items-center">
          <div className="h-8 w-24 bg-gray-300/50 rounded" />
          <div className="h-10 w-28 bg-gray-300/50 rounded-xl" />
        </div>
      </div>
    );
  }
  
  if (type === 'cart-item') {
    return (
      <div className="glass-morphism rounded-xl p-4 animate-pulse">
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-gray-300/50 rounded-lg" />
          <div className="flex-1">
            <div className="h-5 bg-gray-300/50 rounded mb-2 w-3/4" />
            <div className="h-4 bg-gray-300/50 rounded mb-3 w-1/2" />
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-300/50 rounded-lg" />
              <div className="w-12 h-8 bg-gray-300/50 rounded-lg" />
              <div className="w-8 h-8 bg-gray-300/50 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return null;
}