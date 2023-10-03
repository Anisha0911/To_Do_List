import React , {useReducer} from 'react'

export default function Use_Reducer() {
    const updateState = (state , action) => {
        if(action.type == "20"){
            return state + 1;
        }
    }

    const [state, dispatch] = useReducer(updateState, 10);

// const dispatch_data = ()=>{
//     dispatch({type:"20"})
// }


  return (
    <div>{state}
    {/* 1 - method */}
    {/* <button onClick={dispatch_data}>check</button> */}

    {/* 2 - mwthod */}
    <button onClick={()=>{dispatch({type:"20"})}}>check</button>

    </div>
  )
}
