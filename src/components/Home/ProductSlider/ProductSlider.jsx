import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getRandomProducts } from "../../../utils/functions";
import { settings } from "../DealSlider/DealSlider";
import Product from "./Product";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";
const ProductSlider = ({ title, tagline, patho, category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async (
    keyword = "",
    price = [0, 200000],
    ratings = 0,
    currentPage = 1
  ) => {
    try {
      setLoading(true);
      let url = `/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;

      const { data } = await axios.get(url);
      setProducts(data.products);
      console.log(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <section className="bg-white w-full shadow overflow-hidden max-w-[1280px] mx-auto">
      {/* <!-- header --> */}
      <div className="flex px-6 py-4 justify-between items-center">
        <div className="title flex flex-col gap-0.5">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="text-sm text-gray-400">{tagline}</p>
        </div>
        <Link
          to={patho}
          className="bg-[#24292e] text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg uppercase"
        >
          view all
        </Link>
      </div>
      <hr />
      {loading ? null : (
        <Slider {...settings} className="flex items-center justify-between p-1">
          {products &&
            getRandomProducts(products, 12).map((product) => (
              <Product {...product} key={product?._id} />
            ))}
        </Slider>
      )}
    </section>
  );
};

export default ProductSlider;
