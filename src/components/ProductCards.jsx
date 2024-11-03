import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();
  // console.log(typeof category);
  const data = useLoaderData();
  // console.log(data)

  useEffect(() => {
    if (category) {
      if (category === "All Product") {
        setProducts(data.slice(0,9));
      } else {
        const filteredCategory = [...data].filter(
          (coffee) => coffee.category === category
        );
        setProducts(filteredCategory);
      }
    } else {
      setProducts(data.slice(0,9));
    }
  }, [category, data]);

  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div key={product.product_id}>{product.product_title}</div>
      ))}
    </div>
  );
};

export default ProductCards;
