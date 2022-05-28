import { useState } from "react";
import ExpenseAddForm from "./ExpenseAddForm";
import style from "./App.module.css"

const ExpenseShow = ({income,cost,addExpense}) => {
const[add,setAdd]=useState(false)
const balance=income-cost

    return ( 

    
        <div>
            <div className={style.balance}>
                <button className={ `${add ? `${style.btn} ${style.btnCancel}` : `${style.btn} ${style.btnadd}`}`} onClick={()=>setAdd(!add)}>{add ? "Cancel" : "Add"}</button>
                <div className={style.balanceTitle}>Balance:<span className={`${balance<0 ? `${style.negValue}` : `${style.posValue}`}`}> {balance}$ </span></div>
            </div>

            <div className={style.totalvalue}>

                <div className={style.negValue}>Cost: {cost} $</div>
                <div className={style.posValue}>Income: {income} $</div>
            </div>
            {add && <ExpenseAddForm addExpense={addExpense}/>}
        </div>
     );
}
 
export default ExpenseShow;