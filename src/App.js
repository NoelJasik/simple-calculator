import { useState } from 'react';
import './App.css';

function App() {

  const [currentValue, setCurrentValue] = useState("0");
  const [history, setHistory] = useState([]);


  const addNum = (num) => {
    let tempValue = String(currentValue);
    if(tempValue == 0 && num != ".")
    {
      tempValue = num;
    } else {
      tempValue += String(num);
    }
    setCurrentValue(tempValue);
  }

  const clear = () => {
    setCurrentValue("0");
  }
  const calculate = () => {
    let tempValue = currentValue + 0;
    // let nums = [[]];
    // let numSection = 0;
    // for (let index = 0; index < tempValue.length; index++) {
    //   let tempNum = Number(tempValue[index]);
    //   if(tempNum != null)
    //   {
    //     console.log(tempNum.typeOf)
    //     nums[numSection].push(tempNum);
    //   } else
    //   {
    //     numSection++;
    //     nums.push([]);
    //   }
    //   console.log(nums);
    // }
    let result = eval(currentValue);
    let tempTable = history;
    tempTable.push(currentValue + " = " + result);
    setHistory(tempTable);
    setCurrentValue(result);
  }

  function NumKey(props) {
    return <button onClick={() => addNum(props.value)}>{props.value}</button>
  }

  function ClearKey(props) {
    return <button onClick={() => clear()}>C</button>
  }
  
  function CalculateButton(props) {
    return <button onClick={() => calculate()}>=</button>

  }
 

  return (
    <div className="App">
      <div className='calculator'>
        <p>{currentValue}</p>
        <NumKey value={1}></NumKey><NumKey value={2}></NumKey><NumKey value={3}> </NumKey> <NumKey value="/"></NumKey><br></br>
        <NumKey value={4}></NumKey><NumKey value={5}></NumKey><NumKey value={6}></NumKey> <NumKey value="*"></NumKey><br></br>
        <NumKey value={7}></NumKey><NumKey value={8}></NumKey><NumKey value={9}></NumKey> <NumKey value="-"></NumKey><br></br>
        <ClearKey></ClearKey><NumKey value={0}></NumKey> <NumKey value={"."}></NumKey><NumKey value="+"></NumKey><br></br>
        <CalculateButton></CalculateButton>
      </div>
      <div className='history'>
     {history.map((equasion) => {
      return <p>{equasion}</p>
     })}
      </div>
    </div>
  );
}

export default App;
