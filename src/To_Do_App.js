import './To_Do_App.css';
import React from 'react';
import { useState } from 'react';
import { AddingAction, DeletingAction} from './TO_DO_ACTIONS/Action';
import { useDispatch, useSelector } from 'react-redux';


const To_Do_App = () => {
    const todos = useSelector((sta) => sta);

const dispatch = useDispatch(); 

let[livetask, changeliveTask] = useState('');
let btnClick = () => {
    if(livetask.trim() != '') {
        dispatch(AddingAction(livetask));
        changeliveTask(' ');
    }
}

let deletebtn = (id) => {
    dispatch(DeletingAction(id));
}

    return (
        <div className='container main_Sec'>
            {/* <div className="row main_Sec my-4"> */}
        <h1 className='my-'>TO DO APP LIST</h1>
            {/* <div className="col-sm-8 mx-auto my-3"> */}
                <input type="text" className="main_input" 
                 aria-label="To do list" value={livetask}
                 onChange={(e) => changeliveTask(e.target.value)}
                aria-describedby="button-addon2"/>
             
                <button className="main_btn" 
                onClick={() => btnClick()}
                type="button" id="button-addon2">Action</button>
           
            {/* </div>
            </div> */}
            <ul className='ul'>
                {
                    todos.map(
                        val =>
                    <li className="show_data my-4"><div className=" show m-2 d-flex justify-content-center text-center"> 
                    {/* <p>{livetask}</p> */}
                    <p className="P_tag" style={{paddingTop : "15px"}}>{val.name} || {val.time}</p>
                    </div>
                    <button className="main_btn dlt_btn" onClick={() => deletebtn((val.id))} 
                    type="button">Delete</button>
                 
                    </li>
                    )
                }
            </ul>
        </div>
    )
}
export default To_Do_App;