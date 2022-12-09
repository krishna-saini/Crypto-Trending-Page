import React from "react";
import Icon from "./Icon";
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
    <article className="h-80 w-72 rounded-3xl border border-space-200 border-opacity-25 bg-space-400 drop-shadow-sm">
      <Icon src={data.icon} />
      <h2 className="mt-16 text-center font-tomorrow text-sm font-semibold text-space-300">
        {data.name} ({data.ticker})
      </h2>
      {/* <NamePrice price={data.price} percentage={data.changePercentage} /> */}
    </article>
  );
};

export default Card;
