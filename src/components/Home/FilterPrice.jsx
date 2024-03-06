/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

const FilterPrice = ({ priceMinMax, setPriceMinMax, onClose }) => {
  const { register, reset, handleSubmit } = useForm();

  const submit = (data) => {
    const min = data.from.trim() === "" ? 0 : +data.from;
    const max = data.to.trim() === "" ? Infinity : +data.to;

    setPriceMinMax({ min, max });
    onClose();
  };

  const handleClearFilter = () => {
    setPriceMinMax({ min: 0, max: Infinity });
    reset({ from: "", to: "" });
  };

  return (
    <div className="flex flex-col gap-3 p-2 m-2">
      <h3 className="text-xl font-bold pb-3">Price</h3>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(submit)}>
        <div className="flex">
          <label htmlFor="from" className="w-12 font-bold text-gray-500">
            From
          </label>
          <input
            type="number"
            id="from"
            className="border-2 border-gray-400 p-1 w-[210px]"
            {...register("from")}
          />
        </div>
        <div className="flex">
          <label htmlFor="to" className="w-12 font-bold text-gray-500">
            To
          </label>
          <input
            type="number"
            id="to"
            className="border-2 border-gray-400 p-1 w-[210px]"
            {...register("to")}
          />
        </div>
        <div className="flex justify-end">
          <button className="p-2 bg-red-600 text-white w-[100px] rounded">
            Filter Price
          </button>
        </div>
      </form>
      {priceMinMax.min !== 0 || priceMinMax.max !== Infinity ? (
        <p className="ml-4 pt-2">
          <span className="font-bold text-gray-500">From</span>{" "}
          {priceMinMax.min} <span className="font-bold text-gray-500">To</span>{" "}
          {priceMinMax.max}{" "}
          <span
            className="font-bold cursor-pointer text-red-600 text-xl pl-2"
            onClick={handleClearFilter}
          >
            X
          </span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilterPrice;
