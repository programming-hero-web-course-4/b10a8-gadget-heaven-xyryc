import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addToWishList } from "../utility/addToLs";
import { useContext } from "react";
import { CartContext, WishlistContext } from "../layouts/MainLayout";

const ProductDetails = () => {
  const { productId } = useParams(); //dynamic url
  const id = parseInt(productId);
  const allProducts = useLoaderData(); // all product

  const selectedProduct = allProducts.find(
    (product) => product.product_id === id
  );

  const {
    product_id: currentId,
    product_image,
    product_title,
    price,
    availability,
    description,
    Specification,
    rating,
  } = selectedProduct;

  const [cart, setCart] = useContext(CartContext);
  const [wishlist, setWishlist] = useContext(WishlistContext);

  return (
    <div>
      <div className="md:w-3/5 mx-auto text-center mb-8">
        <h1 className="font-bold text-[32px] mb-4">Product Details</h1>
        <p className="">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="mb-24 flex flex-col md:flex-row gap-8 justify-center p-8 bg-white">
        <img
          className="h-[500px] w-[425px] rounded-2xl object-cover"
          src={product_image}
          alt=""
        />

        <div>
          <h1 className="text-[28px] font-semibold mb-3">{product_title}</h1>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Price: ${price}
          </p>
          <button className="btn btn-sm btn-outline rounded-[32px] btn-success">
            {availability ? "In Stock" : "Out of Stock"}
          </button>
          <p className="my-4  text-lg text-gray-600">{description}</p>

          <p className="mb-2 text-lg font-bold">Specification</p>
          <ol className="text-lg text-gray-600 mb-4">
            {Specification.map((spec, index) => (
              <li key={index}>
                {index + 1}. {spec}
              </li>
            ))}
          </ol>

          <p className="font-bold text-lg">Rating: {rating}</p>

          <div className="space-x-4 mt-4">
            <a
              onClick={() => {
                addToCart(currentId);
                setCart(cart + 1);
              }}
              className="btn rounded-[32px] bg-[#9538E2] text-white"
            >
              Add to cart
              <IoCartOutline />
            </a>
            <a
              onClick={() => {
                addToWishList(currentId);
                setWishlist(wishlist + 1);
              }}
              className="btn btn-circle btn-outline"
            >
              <FaRegHeart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
