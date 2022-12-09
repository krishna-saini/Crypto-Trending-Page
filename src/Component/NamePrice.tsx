import React from "react";
// import CryptoProps from './props/props_Data'

interface NamePriceProps {
  name: string;
  ticker:string;
  price: number;
  changePercentage: number;
  TVL: number;
}

function NamePrice(props: NamePriceProps) {
  // function NamePrice: React.FC<NamePriceProps> = (props)=>{
  const { name,ticker, price, TVL, changePercentage } = props;
  return (
    <div className="w-[241px] space-y-2 text-center">
      <p className="font-tomorrow text-xs font-[600] opacity-90">{name}({ticker})</p>
      <p className="font-tomorrow flex h-[40px] w-[242px] items-center justify-center rounded-[17px] border-[1px] bg-[#14172B] pl-16 font-[600]">
        <span className="text-xl text-[#ECF0FF]">${price}</span>
        <span className={`${changePercentage > 0 ? "text-[#00FFA3]" : "text-[]#FF4D4D]"} pl-6 text-xs`}>
          {changePercentage}%
        </span>
      </p>
      <p className="font-tomorrow text-xs font-[600] text-[#5a5f7d] opacity-90">
        Price
      </p>
      <p className="font-tomorrow flex h-[40px] w-[242px] items-center justify-center rounded-[17px] border-[1px] bg-[#14172B] font-[600] text-[#ECF0FF]">
        {TVL}
      </p>
      <p className="font-tomorrow text-xs font-[600] text-[#5a5f7d] opacity-90">
        TVL
      </p>
    </div>
  );
}

export default NamePrice;
