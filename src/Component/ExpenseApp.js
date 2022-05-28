import { useState,useEffect } from "react";
import ExpenseShow from "./ExpenseShow";
import ExpenseMap from "./ExpenseMap";
import style from "./App.module.css"
import Search from "./Search";


const ExpenseApp = () => {
    const[income,setIncome]=useState(0)
    const[cost,setCost]=useState(0)
    const[transaction,setTransaction]=useState([])
    const[trans,setTrans]=useState(transaction)

    const addExpense=(formValue)=>{
         console.log(formValue)
         setTransaction([...transaction,{...formValue}])
   
    }


    useEffect(()=>{
     let cst=0;
      let inc=0;

      transaction.map((itm)=>{
       itm.type==="cost" ? (cst= cst + parseFloat(itm.amount)): (inc = inc + parseFloat(itm.amount))
     })
     setCost(cst)
     setIncome(inc)
      
    },[transaction])

   

    return ( 
        <div className={style.container}>
             <ExpenseShow
              income={income}
              cost={cost}
              addExpense={addExpense}
             />
             <Search
               transaction={transaction}
               trans={trans}
               setTrans={setTrans}
             />

             <ExpenseMap trans={trans} />
        </div>
     );
}
 
export default ExpenseApp;