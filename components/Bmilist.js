import "./App.css";

function bmiList({bmi,range}) {
  return (
    <div>
       <div>
      
      <table className="bmi-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>BMI</th>
            <th>Weight</th>
          </tr>
        </thead>
  
        <tbody>
          
        <tr className={bmi<18.5? "select":"noselect"}>
            <td>underWeight </td>
            <td>&#60; 18.5</td>
            <td>{range.underWeight.low + "kg"}</td>
          </tr> 
           
          <tr className={bmi>=18.5&&bmi<=24.9? "select":"noselect"}>
            <td>Normal</td>
            <td>18.5-24.9</td>
            <td>{range.normal.low + "kg -" + range.normal.high + "kg"}</td>
          </tr>
  
          <tr className={bmi>=25&&bmi<=29.9? "select":"noselect"}>
            <td>OverWeight</td>
            <td>25-29.9</td>
            <td>
              {range.overWeight.low + "kg -" + range.overWeight.high + "kg"}
            </td>
          </tr>
  
          <tr className={bmi>=30&&bmi<=34.9? "select":"noselect"}>
            <td>ObesityClass 1</td>
            <td>30-34.9</td>
            <td>
              {range.obesityOne.low + "kg -" + range.obesityOne.high + "kg"}
            </td>
          </tr>
  
          <tr className={bmi>35&&bmi<39.9? "select":"noselect"}>
            <td>ObesityClass 2</td>
            <td>35-39.9</td>
            <td>
              {range.obesitytwo.low + "kg -" + range.obesitytwo.high + "kg"}
            </td>
          </tr>
  
          <tr className={bmi>=40? "select":"noselect"}>
            <td>ObesityClass 3</td>
            <td>&#62; 40</td>
            <td>{range.obesityThree.high + "kg"}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default bmiList