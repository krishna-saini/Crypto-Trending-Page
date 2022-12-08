import React from 'react'
import { isConstTypeReference } from 'typescript';

interface PairCoinsProps {
    icon: JSX.Element;
 }

function PairCoins(props:PairCoinsProps) {
    const {icon} = props;
  return (
    <>{icon}</>
  )
}

export default PairCoins