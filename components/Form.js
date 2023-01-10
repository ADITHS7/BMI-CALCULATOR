import { useState } from "react";
import "./App.css";

function Form({onFormSub}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert,setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(weight)||isNaN(height)){
      setAlert(true);
    }else{
      onFormSub(weight,height);
      setAlert(false);
      setHeight("");
      setWeight("");
    }
   
  };

  return (
    <div className="bmi-box">
      <h1 className="heading">BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <div className="inputing-values">
          <div className="weight">
            <label>Weight (Kg:)</label>
            <br />
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="textbox"
              required
            ></input>
          </div>
          <div className="height">
            <label>Height (m:)</label>
            <br />
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="textbox"
              type="text"
              required
            ></input>
          </div>
        </div>
        <button className="get-bmi-button" type="submit">
          Get BMI
        </button>
        
      </form>
      {alert && <div className="alert">Plz enter valid data</div>}
      
    </div>
  );
}

export default Form;
