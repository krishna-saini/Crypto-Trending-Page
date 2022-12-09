import React from "react";

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
    <article className="h-80 w-80 rounded-sm bg-slate-500 text-slate-100">
      <h2>{data.name}</h2>
    </article>
  );
};

export default Card;
