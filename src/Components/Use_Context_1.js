import React, { useContext } from 'react';
import { Ankita } from '../App';


export default function Use_Context_1() {
    const box = useContext(Ankita);

  return (
    <div>{box}</div>
  )
}
