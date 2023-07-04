import { useState } from "react";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import UserInput from "./components/UserInput/UserInput";


const App = ()=>{
  const [userInput, setUserInput] = useState(null)
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  
const yearlyData = []; 
if(userInput)
{
  let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
  const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput['expected-return'] / 100;
  const duration = +userInput['duration'];

 
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }

}
   
  return (
    <div>
      <Header/>
      <UserInput onCalculate={calculateHandler}/>
      <ResultTable/>
    </div>
  );
}

export default App;
