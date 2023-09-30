import {Adding , Deleting} from './Action';


const initialdata = []

const TodoReducer = (state = initialdata, action) => {

    if(action.type == Adding) {

        const array = JSON.stringify([...state, action.payload]);
        localStorage.setItem("Item" , array)
        const data = localStorage.getItem("Item");
        const to_do = JSON.parse(data);
        return to_do;
        
    }

    if(action.type == Deleting) {
        const data = localStorage.getItem("Item");
        const to_do = JSON.parse(data);
        const dlt_to_do = to_do.filter((val) => val.id !== action.payload)
        const s1 = JSON.stringify(dlt_to_do);
        localStorage.setItem("Item",s1);
        return (dlt_to_do);
    }

    else{
        const local_data = localStorage.getItem("Item");
        const to_do = JSON.parse(local_data);
        if(to_do == null){
             return state;
        }
        return to_do;
       
    }
} 
export default TodoReducer;