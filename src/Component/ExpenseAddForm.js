import { useState } from "react";
import style from "./App.module.css"

const ExpenseAddForm = ({addExpense}) => {

    const[formValue,setFormValue]=useState(
        {
            id:Math.floor(Math.random()*1000),
            desc:"",
            amount:0,
            type:"cost"
        }
    )

    const changeFormHandler=(e)=>{
      
      setFormValue({...formValue,[e.target.name]:e.target.value})
    } 

    const submitHandler=(e)=>{
       e.preventDefault()
       addExpense(formValue)
    }


    return (  
        <form onSubmit={submitHandler} className={style.form}>
            <div className={style.detailForm}>
            <input 
                className={style.inputValue}
                type="text" 
                name="desc" 
                value={formValue.desc} 
                onChange={changeFormHandler}
                placeholder="Description"
                />
                
                
                <input 
                className={style.inputValue}
                type="number"  
                name="amount" 
                value={formValue.amount} 
                onChange={changeFormHandler}
                
                />
           
            <div className={style.inputradio} >
                
                <div className={style.costRadio}>
                    <input 
                    type="radio" 
                    name="type" 
                    value="cost"
                    checked={formValue.type==="cost"} 
                    onChange={changeFormHandler}/>
                    <label>cost</label>
                </div>
            
                <div className={style.incomeRadio}>
                <input type="radio"
                name="type" 
                value="income" 
                checked={formValue.type==="income"}
                onChange={changeFormHandler}/>
                <label>Income</label>
                </div>
                
            </div>

            <button type="submit" className={`${style.btn} ${style.btninsert}`}>Insert Expense</button>

            </div>
                
        </form>
    );
}
 
export default ExpenseAddForm;