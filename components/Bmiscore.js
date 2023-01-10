

export default function BmiScore({bmiNo,bmiName,changeWeight}) {
  console.log(changeWeight)
  return (
    <div>
      <div className='bmisc-box'>
        <h3>Your BMI Score</h3>
        <div className='bmi-view' >{bmiNo}</div>
        <h1>{bmiName}</h1>
        {changeWeight.type === "positive" && (
         <p>You need to lose <span>{changeWeight.weight}</span></p>
        )}
        {changeWeight.type === "negative" && (
         <p>You need to gain <span>{changeWeight.weight}</span></p>
        )}
        {changeWeight.type === "normal" && (
         <p >Wow!!! Your weight is normal</p>
        )}
      </div>
      </div>
    
  );
};


