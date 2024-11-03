/* eslint-disable react/prop-types */

const Card = ({ product }) => {
  const { product_image, product_title, price } = product;
  return (
    <div className="p-5">
      <img className="h-[180px] rounded-xl mb-6 w-full object-cover" src={product_image} alt={product_title} />
      <h3 className="text-2xl font-semibold mb-3">{product_title}</h3>
      <p className="text-xl font-medium text-gray-600 mb-4">Price: ${price}</p>
      <button className="btn btn-outline rounded-[32px] text-[#9538E2]">View Details</button>
    </div>
  );
};

export default Card;
