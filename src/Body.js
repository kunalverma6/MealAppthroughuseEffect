import React,{useState ,useEffect} from 'react'
import axios from 'axios'
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import './Body.css'
const Body = () => {
    const [item, setitem] = useState([])
  
    useEffect(() => {
 
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')        

        .then(res=>{

console.log(res.data)


setitem(res.data.meals)


})
.catch(err=>{

    console.log(err);
  
})


    }, [])

    const Ram = item.map((a)=>{
        return(
        <div>
            <p>{a.strMeal}</p>
            <img src={a.strMealThumb}  className="img-fluid" />
            <p>{a.idMeal}</p>

        </div>)
    })

    return (
        <><div className="row">
          {Ram}
        </div>

            
        </>  
    )
}

export default Body
