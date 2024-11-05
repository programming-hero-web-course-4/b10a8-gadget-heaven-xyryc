import { toast } from "react-toastify";

const getCartList = () => {
  const storedListStr = localStorage.getItem("gadget-heaven-cart");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToCart = (id) => {
  const storedList = getCartList();

  if (storedList.includes(id)) {
    // already exist
    toast.error("Already exist in cart!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("gadget-heaven-cart", storedListStr);

    toast.success("Item added to cart.");
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("gadget-heaven-wishlist");

  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const storedWishList = getStoredWishList();

  if (storedWishList.includes(id)) {
    // already exist
    toast.error("Already exist in the wishlist!");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("gadget-heaven-wishlist", storedWishListStr);

    toast.success("Item added to your wishlist.");
  }
};

const clearCartList = () => {
  localStorage.removeItem("gadget-heaven-cart");
};


const removeFromWishList = (id) => {
  const storedWishList = getStoredWishList();
  const updatedWishList = storedWishList.filter((itemId) => itemId !== id);

  if (storedWishList.length !== updatedWishList.length) {
    localStorage.setItem("gadget-heaven-wishlist", JSON.stringify(updatedWishList));
    toast.success("Item removed from your wishlist.");
  } else {
    toast.error("Item not found in wishlist.");
  }
};

export {
  addToCart,
  addToWishList,
  getCartList,
  getStoredWishList,
  clearCartList,
  removeFromWishList
};
