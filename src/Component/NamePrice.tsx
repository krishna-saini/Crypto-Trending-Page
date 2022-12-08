interface NamePriceProps {
    name:string;
    price: number;
    change:number;
    tvl:number;
 }

function NamePrice(props:NamePriceProps) {
    const {name, price, tvl, change} = props;
  return (
    <>
    <p>{name}</p>
    <p>{price} <span>{change}%</span> </p>
    <p>Price</p>
    <p>{tvl}</p>
    <p>TVL</p>
    
    </>
  )
}

export default NamePrice