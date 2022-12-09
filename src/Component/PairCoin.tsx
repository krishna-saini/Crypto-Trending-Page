// import Cryptoprops from './props/props_data'
export interface PairCoinsProps {
  popularPairs: {
    name: string;
    ticker: string;
    icon: string;
  }[];
}

function PairCoin(props: PairCoinsProps) {
  const { popularPairs } = props;
  return (
    <div className="w-[241px] space-y-2 text-center">
      <p className="font-tomorrow flex h-[40px] w-[242px] items-center justify-center rounded-[17px] border-[1px] bg-[#14172B] pl-16 font-[600]">
        {popularPairs.map((el, i) => (
          <img key={i} src={el.icon} alt={`${el.name}`} />
        ))}
      </p>
      <p className="font-tomorrow text-xs font-[600] text-[#5a5f7d] opacity-90">
        Popular Pairs
      </p>
    </div>
  );
}

export default PairCoin;
