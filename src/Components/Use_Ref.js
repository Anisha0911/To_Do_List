import React, { useRef } from 'react'
// to change currnt value we use use ref
export default function Use_Ref() {
    let x = useRef(10000);
  return (
    <div>{x.current + 22}</div>
  )
}
