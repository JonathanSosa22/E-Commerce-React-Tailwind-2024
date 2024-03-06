<<<<<<< HEAD
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import { useEffect, useState } from "react";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";

const Home = () => {
  const products = useSelector((state) => state.products);
  const [inputValue, setInputValue] = useState("");
  const [priceMinMax, setPriceMinMax] = useState({ min: 0, max: Infinity });
  const [showModal, setShowModal] = useState(window.innerWidth > 1024);

  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const callBackFilter = (product) =>
    product.title.toLowerCase().includes(inputValue);

  const callBackFilterPrice = (prod) => {
    const condMin = priceMinMax.min <= prod.price;
    const condMax = prod.price <= priceMinMax.max;
    return condMin && condMax;
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleResize = () => {
    setShowModal(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SearchFilterClosed = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <input
          onChange={handleSearchName}
          type="text"
          className="p-2 m-2 border-2 border-gray-400 w-[270px] md:w-[80%]"
          placeholder="Search..."
          value={inputValue}
        />
        <i className="bx bx-search font-bold text-2xl bg-red-500 text-white p-2 px-3 cursor-pointer rounded-md "></i>
      </div>
      <div className="flex">
        <div
          className={`flex flex-col m-2 absolute bg-white z-50 lg:static ${
            showModal ? "border-2 border-gray-300 w-[300px] h-[535px]" : ""
          }`}
        >
          <button className="self-end" onClick={toggleModal}>
            {showModal ? (
              <i className="bx bx-x text-4xl cursor-pointer text-red-500"></i>
            ) : (
              <i className="bx bx-filter text-4xl cursor-pointer text-red-500"></i>
            )}
          </button>

          {showModal && (
            <div>
              <div>
                <FilterPrice
                  priceMinMax={priceMinMax}
                  setPriceMinMax={setPriceMinMax}
                  onClose={SearchFilterClosed}
                />
              </div>
              <div>
                <FilterCategory onClose={SearchFilterClosed} />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-6 p-4 mx-auto pt-14 lg:pt-0">
          {products
            ?.filter(callBackFilter)
            .filter(callBackFilterPrice)
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
=======
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import { useEffect, useState } from "react";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";

const Home = () => {
  const products = useSelector((state) => state.products);
  const [inputValue, setInputValue] = useState("");
  const [priceMinMax, setPriceMinMax] = useState({ min: 0, max: Infinity });
  const [showModal, setShowModal] = useState(window.innerWidth > 1024);

  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const callBackFilter = (product) =>
    product.title.toLowerCase().includes(inputValue);

  const callBackFilterPrice = (prod) => {
    const condMin = priceMinMax.min <= prod.price;
    const condMax = prod.price <= priceMinMax.max;
    return condMin && condMax;
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleResize = () => {
    setShowModal(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SearchFilterClosed = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="flex justify-center items-center relative">
        <input
          onChange={handleSearchName}
          type="text"
          className="p-2 m-2 border-2 border-gray-400 md:w-[80%]"
          placeholder="Search..."
          value={inputValue}
        />
        <i className="bx bx-search font-bold text-2xl bg-red-500 text-white p-2 px-3 cursor-pointer rounded-md"></i>
      </div>
      <div className="flex">
        <div
          className={`flex flex-col m-2 absolute bg-white z-50 lg:static ${
            showModal ? "border-2 border-gray-300 w-[300px] h-[535px]" : ""
          }`}
        >
          <button className="self-end" onClick={toggleModal}>
            {showModal ? (
              <i className="bx bx-x text-4xl cursor-pointer text-red-500"></i>
            ) : (
              <i className="bx bx-filter text-4xl cursor-pointer text-red-500"></i>
            )}
          </button>

          {showModal && (
            <div>
              <div>
                <FilterPrice
                  priceMinMax={priceMinMax}
                  setPriceMinMax={setPriceMinMax}
                  onClose={SearchFilterClosed}
                />
              </div>
              <div>
                <FilterCategory onClose={SearchFilterClosed} />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-6 p-4 mx-auto pt-14 lg:pt-0">
          {products
            ?.filter(callBackFilter)
            .filter(callBackFilterPrice)
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
>>>>>>> 879fc736ed181e73856edc0bc3e02ae0bf96632e
