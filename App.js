
import { useState } from 'react';

import BmiList from './components/Bmilist';
import BmiScore from './components/Bmiscore';
import './components/App.css';
import Form from './components/Form';

function App() {
  const [show,setShow] = useState(false);
 const[changeWeight,setChangeWeight] = useState({weight:"",type:""});
 const [bmi,setBmi] = useState("00");
 const [bmiType,setBmiType] = useState("Not Calculated");
 const [bmiRange,setBmiRange] = useState({
  underWeight: {low:""},
  normal:{low:"",high:""},
  overWeight:{low:"",high:""},
  obesityOne:{low:"",high:""},
  obesitytwo:{low:"",high:""},
  obesityThree:{high:""}
 });
 const onFormSub =(w,h)=>{
  
  let b = calBmi(w,h);
  setBmi(b);
  
  setBmiType(weightType(b));
  setShow(true);
  
  //console.log(b);
  //console.log(w,h)
  const range = {
    
    underWeight: {low:calWeight(18.5,h)},
    normal:{low:calWeight(18.5,h),high:calWeight(24.9,h)},
    overWeight:{low:calWeight(25,h),high:calWeight(29.9,h)},
    obesityOne:{low:calWeight(30,h),high:calWeight(34.9,h)},
    obesitytwo:{low:calWeight(35,h),high:calWeight(39.9,h)},
    obesityThree:{high:calWeight(40,h)},
   };
   setBmiRange(range);
   setChangeWeight(weightChange(b,w,range));

  
 };

 const calBmi = (w,h) =>  (w/(h*h)).toFixed(2);
 const calWeight = (b,h) =>  (b*10/(h*h)).toFixed(2);

 const weightChange = (b,w,range)=>{
  let changeObj;
  if(b>24.9){
    changeObj = {
      weight:(w - range.normal.high).toFixed(2),
      type:"positive",
    };
    return changeObj;
  }else if(b<18.5){
    changeObj = {
      weight:(range.normal.low - w).toFixed(2),
      type:"negative",
    };
    return changeObj;
  }else{
    changeObj = {weight:0,type:"normal"
  };
  return changeObj;
  }

}  

  const weightType = (bmi) =>{
    if (bmi<18.5){
      return "Under Weight";
    }
    else if (18.5 < bmi && bmi < 24.9){
      return "Normal ";
    }else if (24.9 < bmi && bmi < 29.9){
      return "Over Weight ";
    }else if (29.9 < bmi && bmi < 34.9){
      return " obessity Class 1";
    }else if (34.9 < bmi && bmi < 39.9){
      return "obessity Class 2 ";
    }else if(bmi > 39.9) {
      return "obessity Class 3";
    }
  };
  

 
  return (
    <div className='mybmiapp'>
      <div className='form-box'>
      <Form onFormSub = {onFormSub} />
      </div>
       {show &&(
        <div className='score-range-boxes'>
      <BmiScore bmiName={bmiType} bmiNo={bmi} changeWeight={changeWeight}/>
      
      <BmiList range={bmiRange} bmi={bmi}/>
      </div>
       )}
      </div>
  
      
      
    
  );
}

export default App;
