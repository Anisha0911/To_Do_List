import './App.css';
import Homepg from './Home/Home';
import Output_pg from './Output/Output';
import { Routes, Route } from 'react-router-dom';

 import To_Do_Call from './TO DO APP/To_Do_Call ';
 import { Fragment, createContext } from 'react';
// import Function_Comp from './Components/Function_Component';
// import Class_Comp from './Components/Class_Component';
// import Using_props from './Components/Props';
// import State from './Components/State';
// import Use_State from './Components/Use_State';
// import Use_Effect from './Components/Use_Effect';
// import Use_Context_1 from './Components/Use_Context_1';
// import Use_Context_2 from './Components/Use_Context_2';
// import Use_Ref from './Components/Use_Ref';
// import Use_Reducer from './Components/Use_Reducer';
// import React_form from './Components/React_form';

// COntext

export const Ankita = createContext();

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      {/* <Routes>  start
        <Route path="/" element={<Homepg />} />
        <Route path="/output" element={<Output_pg />} />
      </Routes>  end*/}  
      {/* </BrowserRouter> */}
     {/* <Homepg/> */}
      <To_Do_Call/>
     {/* <Class_Comp/>
      <Function_Comp/> */}
      {/* <Using_props Name = "Anisha Prajapati"/>
      <Using_props Email = "panisha@gmail.com"/> */}
      {/* <State/> */}
      {/* <Use_State/> */}
      {/* <Use_Effect/> */}
{/* ------------------------------ */}
      {/* <Ankita.Provider value="Shreya">

      <Use_Context_1/>
      <Use_Context_2/>

      </Ankita.Provider> */}
{/* ------------------------------ */}

{/* <Use_Ref/> */}
{/* <Use_Reducer/> */}

{/* <React_form/> */}
    </div>
  );
}

export default App;
