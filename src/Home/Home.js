import React, { useEffect, useState } from 'react'
import './Home.css';
import JsQ25 from '../Questions/JavascriptQuestions.json';
import { useDispatch } from 'react-redux';
import { JsQ } from '../Redux/Action';
import { useNavigate } from 'react-router-dom'; 

function Homepg() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [QNo, setQ] = useState(0);    
    const [CurrQ, SetCurrQ] = useState(JsQ25[0])
    //console.log(CurrQ,QNo)  .... line no. -- 18 {CurrQ.Question}

    //Selected
    const [SelectOut, SetSelectOut] = useState("")
    const [StoreQ, SetStoreQ] = useState([])


    useEffect(()=>{
        if (QNo == JsQ25.length){
            dispatch(JsQ(StoreQ))
            navigate('/output')
            // console.log(StoreQ)
        }

        if(QNo <= 0){
            SetCurrQ(JsQ25[0])
            setQ(0)
        }else if(QNo >= JsQ25.length-1){
            SetCurrQ(JsQ25[JsQ25.length-1])
            setQ(JsQ25.length-1)
        }else{
            SetCurrQ(JsQ25[QNo])
        }
    },[QNo]);

    const Selected = (ans) =>{
        if(ans == CurrQ.Currect){
            SetSelectOut(ans)
            //alert("COrrect");pp
        }else{
            SetSelectOut(ans)
            //alert("Not Correct");
        }
    }
    const NextBtn = () =>{
            SetStoreQ([...StoreQ, {
                Q: CurrQ.Questions,
                S: SelectOut,
                R: CurrQ.Currect
            }])}

    return (
        <div>
            <div className="container-md">
                <header className='d-flex justify-content-between align-items-center bg-primary p-3 text-white '  >
                    <div>JS Quiz</div>
                    <div>Question: {QNo + 1} of 25 </div>
                </header>
                <div className=" question-area h1">
                    <div className="h1">{CurrQ.Questions}</div>
                </div>
                <div className="output bg-warning p-3 ">

                    <div className='select-ans' >
                        <input className="form-check-input" onClick={() => Selected(CurrQ.OPt[0])} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">{CurrQ.OPt[0]}</label>
                    </div>
                    <div className='select-ans mt-3'>
                        <input className="form-check-input" onClick={() => Selected(CurrQ.OPt[1])} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">{CurrQ.OPt[1]}</label>
                    </div>
                    <div className='select-ans mt-3'>
                        <input className="form-check-input" onClick={() => Selected(CurrQ.OPt[2])} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">{CurrQ.OPt[2]}</label>
                    </div>
                    <div className='select-ans mt-3'>
                        <input className="form-check-input" onClick={() => Selected(CurrQ.OPt[3])} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">{CurrQ.OPt[3]}</label>
                    </div>
                    
                </div>
                <div className='Btn_div'>
                    <button type="button" className="btn btn-primary my-4 mx-2" onClick={()=> setQ(QNo -1 )}>Previous</button>
                    <button type="button" className="btn btn-secondary mx-2" 
                    onClick={()=>  {
                        setQ(QNo + 1)
                        NextBtn()}}>Next</button>
                    </div>
            </div>
        </div>
    )
}
export default Homepg;