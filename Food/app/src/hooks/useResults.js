import {useEffect,useState} from "react"
import yelp from "../api/yelp"

export default ()=>{
    let [results,setResults] = useState([])

    const searchApi = async (search) =>{
        try {
            const response = await yelp.get("/search",{
                params:{
                   limit:50,
                   term:search,
                   location:'san jose' 
                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        searchApi("pasta")
        return () => {
           
        }
    }, [])



    return [results,searchApi]

}


