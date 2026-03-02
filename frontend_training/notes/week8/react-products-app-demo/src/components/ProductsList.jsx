import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {set, useForm} from "react-hook-form";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");

  const {register, handleSubmit} = useForm();


  const navigate = useNavigate();
  const gotoProduct=(productObj)=>{
    // navigate to product details page
    navigate(`/product` ,{
      state: {product: productObj}
    })
  }



  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);

        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Unable to fetch products");
        }

        const productsData = await res.json();
        if(category){
          const filterProduct=productsData.filter(d=>d.category===category);
          setProducts(filterProduct);
      
        }
        else{
        setProducts(productsData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, [category]);

  function searchProducts(data){
    setCategory(data.category);
      // fetch products based on category
  }
  if (loading) {
    return <p className="text-center text-2xl text-blue-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl text-red-500">Error: {error}</p>;
  }

return (
  <div>
    <div className=" flex justify-center items-center">
      <form onSubmit={handleSubmit(searchProducts)} className="flex mt-10">
        <input
          type="text"
          name=""
          id=""
          className="border w-100 p-2 rounded-md"
          placeholder="Search products..." {...register("category")}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 ml-2 rounded-md"
        >
          Search
        </button>
      </form>
    </div>
    <div
      className="grid grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-4
                  gap-12 p-4 
                  md:grid-cols-3
                  mt-10
                  text-center "
    >
      {products.map((productObj) => (
        <div
          key={productObj.id}
          className="border border-gray-200 rounded-lg shadow-md p-2 cursor-pointer"
          onClick={() => gotoProduct(productObj)}
        >
          <img
            src={productObj.image}
            alt={productObj.title}
            className="h-44 object-contain"
          />
          <p className="text-center font-semibold">{productObj.title}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default ProductsList
