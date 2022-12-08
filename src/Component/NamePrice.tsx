import React from "react";

interface NamePriceProps {
  name: string;
  price: number;
  change: number;
  tvl: number;
}

function NamePrice(props: NamePriceProps) {
  const { name, price, tvl, change } = props;
  return (
    <div className="w-[241px] space-y-2 text-center">
      <p className="font-tomorrow text-xs font-[600] opacity-90">{name}</p>
      <p className="font-tomorrow flex h-[40px] w-[242px] items-center justify-center rounded-[17px] border-[1px] bg-[#14172B] pl-16 font-[600]">
        <span className="text-xl text-[#ECF0FF]">${price}</span>
        <span className="{change > 0 ? 'text-[#00FFA3]' : 'text-[]#FF4D4D]'} pl-6 text-xs">
          {change}%
        </span>
      </p>
      <p className="font-tomorrow text-xs font-[600] text-[#5a5f7d] opacity-90">
        Price
      </p>
      <p className="font-tomorrow flex h-[40px] w-[242px] items-center justify-center rounded-[17px] border-[1px] bg-[#14172B] font-[600] text-[#ECF0FF]">
        {tvl}
      </p>
      <p className="font-tomorrow text-xs font-[600] text-[#5a5f7d] opacity-90">
        TVL
      </p>
    </div>
  );
}

export default NamePrice;
