/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import usePurchase from "../hooks/usePurchase";
import PurchaseCard from "../components/Purchases/PurchaseCard";
const Purchases = () => {
  const { purchases, getAllPurchases } = usePurchase();

  useEffect(() => {
    getAllPurchases();
  }, []);

  return (
    <div className="flex flex-col mx-auto p-4 m-2 w-[90%]">
      <h2 className="text-2xl font-bold text-red-400 text-center pb-6">
        Purchases
      </h2>
      <div>
        {purchases?.map((purchase) => (
          <PurchaseCard key={purchase.id} purchase={purchase} />
        ))}
      </div>
    </div>
  );
};

export default Purchases;
