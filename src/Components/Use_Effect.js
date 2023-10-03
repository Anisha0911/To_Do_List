import React, {useEffect} from 'react'

export default function Use_Effect() {
    useEffect(()=>{
        setTimeout(() => {
            document.getElementById("data").innerHTML="I am a Full stack developer"
        }, 10000)
    })



  return (
    <div id="data">Use_Effect</div>
  )
}
