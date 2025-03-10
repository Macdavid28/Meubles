import product from "../data/products.json";
import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cart-slice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  // Handle Add To Cart Notification
  const notification = () => {
    toast.success("Added to cart", {
      autoClose: 500,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
    });
  };
  // Function to handle search input value
  const handleSearchInput = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
  };
  // No Results Found
  const handleNoInput = (productInput) => {
    const filteredProduct = productInput.filter((prod) => {
      return prod.name.toLowerCase().includes(searchInput.trim().toLowerCase());
    });
    if (filteredProduct.length === 0) {
      return (
        <div className="block text-center">
          <h1 className="text-3xl font-bold py-4">
            No result found for "{searchInput}" !
          </h1>
          <p className="text-sm text-gray-500 w-96 mx-auto">
            Sorry we couldn't find any result that match your search
            query.Please try refining your search
          </p>
        </div>
      );
    }
  };

  // Function to filter items based on search input
  const filterItems = (dataArray) => {
    return dataArray
      .filter((item) => {
        return searchInput.trim().toLowerCase() === ""
          ? false
          : item.name
              .toLowerCase()
              .includes(searchInput.trim().toLowerCase()) ||
              item.category
                .toLowerCase()
                .includes(searchInput.trim().toLowerCase()) ||
              item.color
                .toLowerCase()
                .includes(searchInput.trim().toLowerCase());
      })
      .map((item) => (
        <div className="shadow-md rounded-md p-4 my-4" key={item.id}>
          <span className="">
            <Link to={`/products/${item.name}`}>
              <img src={item.imgUrl} className="h-72" alt="" />
            </Link>
            <span className="flex items-center justify-between">
              <h1 className="text-md font-semibold text-gray-800">
                {item.name}
              </h1>
              <h2 className="text-sm lg:text-md font-medium text-gray-600">
                ₦{" "}
                {item.price.toLocaleString().toLocaleString().toLocaleString()}
              </h2>
            </span>
          </span>
          {/* Buttons */}

          <button
            className="rounded-md bg-black my-4 p-2 lg:p-2 text-xs lg:text-lg font-normal text-white flex items-center justify-center gap-4 w-full"
            onClick={() =>
              dispatch(
                cartActions.addToCart({
                  id: item.id,
                  name: item.name,
                  imgUrl: item.imgUrl,
                  price: item.price.toLocaleString().toLocaleString(),
                }),
                notification()
              )
            }
          >
            <ShoppingBagIcon className="w-5" />
            Add to cart
          </button>
        </div>
      ));
  };

  return (
    // Input Section
    <div className="min-h-[60vh] flex flex-col mt-12 items-center">
      <div>
        <input
          type="text"
          className="shadow-black shadow-sm placeholder:text-gray-800 p-4 w-[69vw] rounded-full flex justify-center mx-auto outline-none"
          onChange={handleSearchInput}
          placeholder="           
          Search Here..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 ">
          {filterItems(product.products)}
        </div>
        {handleNoInput(product.products)}
      </div>
      
    </div>
  );
};
