import { useEffect, useState } from "react";
import { getCartList, getStoredWishList } from "../utility/addToLs";
import { useLoaderData } from "react-router-dom";
import { TbSortDescending2 } from "react-icons/tb";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart"); // Track active tab
  const [items, setItems] = useState([]);

  const allProducts = useLoaderData();

  // Fetch items based on the active tab (cart or wishlist)
  useEffect(() => {
    if (activeTab === "cart") {
      const storedCartList = getCartList();
      const storedCartListInt = storedCartList.map((id) => parseInt(id));

      const cartList = allProducts.filter((product) =>
        storedCartListInt.includes(product.product_id)
      );

      setItems(cartList);
    } else {
      const storedWishList = getStoredWishList();
      const storedWishListInt = storedWishList.map((id) => parseInt(id));

      const wishList = allProducts.filter((product) =>
        storedWishListInt.includes(product.product_id)
      );

      setItems(wishList);
    }
  }, [activeTab, allProducts]);

  // Toggle active tab and fetch items
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const cartDiv = (
    <div className="flex justify-between items-center">
      <h1>Cart</h1>

      <div className="flex gap-5 items-center">
        <p>Total Cost: $999</p>
        <button className="btn btn-outline text-[#8332C5] rounded-[32px]">
          Sort by Price <TbSortDescending2 />
        </button>
        <button className="btn text-white bg-gradient-to-b from-[#8332C5] to-[#9538E2] rounded-[32px]">
          Purchase
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className=" text-center mb-8">
        <h1 className="font-bold text-[32px] mb-4">Dashboard</h1>
        <p className="md:w-3/5 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="mt-8 mb-20 space-x-6">
          <button
            onClick={() => handleTabClick("cart")}
            className={`btn btn-wide rounded-[32px] ${
              activeTab === "cart" ? "bg-white text-[#9538E2]" : "btn-outline"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleTabClick("wishlist")}
            className={`btn btn-wide rounded-[32px] ${
              activeTab === "wishlist"
                ? "bg-white text-[#9538E2]"
                : "btn-outline "
            }`}
          >
            Wishlist
          </button>
        </div>

        <div className="text-left">
          <h3 className="font-bold text-2xl mb-8">
            {activeTab === "cart" ? cartDiv : "Wishlist"}
          </h3>
          {items.length > 0 ? (
            <div>
              {items.map((item) => (
                <div
                  key={item.product_id}
                  className="flex flex-col sm:flex-row gap-8 p-8"
                >
                  <img
                    className=" h-[124px] rounded-xl object-cover"
                    src={item.product_image}
                    alt={item.product_title}
                  />
                  <div>
                    <h3 className="font-semibold text-2xl">
                      {item.product_title}
                    </h3>
                    <p className="text-lg text-gray-600 mt-3 mb-4">
                      {item.description}
                    </p>
                    <p className="font-semibold text-xl text-gray-800">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 font-extrabold text-5xl">
              No items in {activeTab}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
