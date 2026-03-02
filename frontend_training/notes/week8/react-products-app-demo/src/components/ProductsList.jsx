import { useEffect, useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);

        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Unable to fetch products");
        }

        const productsData = await res.json();
        setProducts(productsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-2xl text-blue-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl text-red-500">Error: {error}</p>;
  }

return (
  <div className="grid grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-4
                  gap-12 p-4 
                  md:grid-cols-3
                  mt-10
                  text-center">
  {products.map((productObj)=>
  <div key ={productObj.id} className="border border-gray-200 rounded-lg shadow-md p-2">
    <img src={productObj.image} alt={productObj.title}  className="h-44 object-contain"/>
    <p className="text-center font-semibold">{productObj.title}</p>

  </div>
  
  )}
    
  </div>
);
}

export default ProductsList
