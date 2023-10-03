import React from "react";
// useState , useEffect, useContext, useRef , useReducer , useCallback , useMemo, CustomHook
import { useState } from "react";

export default function Use_State() {
    const [ X, setState] = useState("ABCD")
    // const [ Y, setState] = useState(10)

    
  return (
    <div>
        {X}
        <button onClick={() => {setState("Data - 28-06-23")}}>Use State Button</button>
        {/* <button onClick={() => {setState(Y+1)}}>Use State Button</button> */}

    </div>
  )
}
