export const Adding = "Anisha";
export const Deleting = "Shreya";

export function AddingAction(addingdata) {
    return{
        type : Adding,
        payload : {
            name : addingdata,
            id : Math.random(),
            time : `(${new Date().toLocaleTimeString()}, ${new Date().toDateString()} )`,
        }
    }
}

export function DeletingAction(id){
    return{
        type : Deleting,
        payload : id
    }
}
