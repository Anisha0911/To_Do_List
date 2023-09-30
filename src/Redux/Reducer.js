
export const Reducer = (State = [], action) => {
  if(action.type=="javascript"){
      return action.Answer
  }else{
      return State;
  }
}