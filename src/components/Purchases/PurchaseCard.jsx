/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const PurchaseCard = ({ purchase }) => {
  return (
    <div className="flex flex-col gap-10 p-2 m-2 justify-between items-center border-t-4 md:flex-row ">
      <img
        src={purchase.product.images[0].url}
        alt={purchase.product.title}
        className="w-[80px] h-[80px] p-2 object-contain"
      />
      <h2 className="font-bold truncate ">{purchase.product.title}</h2>
      <div className="flex justify-between w-[150px]">
        <span className="border-gray-200 border-2 w-12 h-8 flex items-center justify-center">
          {purchase.quantity} x
        </span>
        <span className="font-bold">${purchase.product.price}</span>
      </div>
    </div>
  );
};

export default PurchaseCard;
