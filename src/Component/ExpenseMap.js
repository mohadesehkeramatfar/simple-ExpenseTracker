import style from "./Map.module.css"
const ExpenseMap = ({trans}) => {
    
    return (  
        <table>
            <th>
                <td>Description</td>
                <td>amount</td>
                <td>Type</td>
                  {
                      trans.map((itm)=>{
                          return(
                              <tr>
                                  <td>{itm.desc}</td>
                                  <td className={`${itm.type==="cost"  ? `${style.negValue}` : `${style.posValue}`}`}>{itm.amount}</td>
                                  <td>{itm.type}</td>
                                
                              </tr>
                          )
                      })
                  }
                  
        </th>
        </table>

        
    );
}
 
export default ExpenseMap;