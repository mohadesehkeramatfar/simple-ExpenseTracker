import { useEffect, useState } from "react";

const Search = ({transaction,trans,setTrans}) => {

    const[search,setSearch]=useState("")
    
     
    const searchChangeHandler=(e)=>{
      
        // console.log(e.target.value);
        setSearch(e.target.value)
    }

    const searchHandler=()=>{
        const selecteditem= transaction.filter((itm)=>itm.desc.includes(search))
        console.log(selecteditem);
        setTrans(selecteditem)
      }

       useEffect(()=>{
        searchHandler()
       },[transaction])

    return ( 
        <div>
            <input type="text" placeholder="Search" onChange={searchChangeHandler} value={search}/>
             <button onClick={searchHandler}>Search</button>
        </div>
     );
}
 
export default Search;