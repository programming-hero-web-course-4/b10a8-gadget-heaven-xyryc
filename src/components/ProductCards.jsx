import { useParams } from "react-router-dom";

const ProductCards = () => {
  const { category } = useParams();
  console.log(category);

  return <div>product</div>;
};

export default ProductCards;
