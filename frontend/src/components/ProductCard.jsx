function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-blue-600 font-bold">₹{product.price}</p>
    </div>
  );
}

export default ProductCard;
