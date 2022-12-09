import React from "react";
import NamePrice from "./NamePrice";

interface props {
  data: {
    icon: string;
    name: string;
    ticker: string;
    price: number;
    changePercentage: string;
    TVL: number;
    popularPairs: {
      name: string;
      ticker: string;
      icon: string;
    }[];
  };
}

const Card: React.FC<props> = ({ data }) => {
  return (
    <article className="h-80 w-80 rounded-sm bg-space-400">
      <h2 className="text-center font-tomorrow text-sm font-semibold text-space-300">
        {data.name} ({data.ticker})
      </h2>
      <NamePrice price={data.price} percentage={data.changePercentage} />
    </article>
  );
};

export default Card;
