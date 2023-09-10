import React from 'react'
import { useSelector } from 'react-redux';

function Output_pg() {
  let output = useSelector((y) => y)
  //console.log(output)
  return (
      <div>
          {
              output.map((item) =>
                  <div className="card">
                      <div className="card-title">
                            Question: {item.Q}
                      </div>
                      <div className="card-text">
                            Selected: {item.S}
                      </div>
                      <div className="card-text">
                            Output: {item.R}
                      </div>

                  </div>
              )
          }
      </div>
  )
}

export default Output_pg