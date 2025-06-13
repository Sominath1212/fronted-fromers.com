import { ProductContext } from "../../context/productContext";
function ProductDetails() {
  const { products } = useContext(ProductContext);
  console.log(products);
  
  return (
    <div>
      <h2>Products</h2>
      {products.map((product, i) => (
        <Link to={`/productdetails/${product._id}`}>
          <div
            className="w-50 h-70 bg-white rounded-2xl shadow-lg overflow-hidden relative group flex-shrink-0 group"
            key={i}
          >
            {/* Product Image */}
            <img
              src={product.image ? product.image : defaultProductImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-[rgb(0,0,0,.5)] bg-opacity-70 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center gap-y-5">
              <h2 className="text-[#c4f254] text-xl font-semibold text-center">
                {product.name}
              </h2>

              {/* <p className="text-white text-sm text-center">
                      {product.description}
                    </p> */}

              <button className="bg-[#c4f254] text-black font-semibold py-2 rounded hover:bg-[#b4e244] transition px-4 cursor-pointer group ">
                View Product
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductDetails;
