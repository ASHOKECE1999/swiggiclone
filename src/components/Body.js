

import { useEffect, useState } from "react"
import RestroCard from "./RestroCard"
import ShimmerUI from "./ShimmerUI"
import useOnlineCheck from "../utils/useOnlineCheck"
const Body=()=>{
    const [data,dataSetter]=useState([])
    const isOnline=useOnlineCheck()

    useEffect(()=>{
    getData()
    },[])

    const getData=async()=>{
        const respone=await fetch("https://jsonplaceholder.typicode.com/users")
        const reponseData=await respone.json()
        dataSetter(reponseData)
        console.log(reponseData)
    }

    if(data.length===0 ) return <ShimmerUI/>
    if(!isOnline) return <h1>Hey your are offline !!!! pelase check internet</h1>
    return(
        <div className='body'>
            <div className='search-bar'>
                <input type='text' placeholder='Search Here'/>
            </div>
            <div className='res-container'>
                {
                    data.map((item)=>(
                        <RestroCard key={item.id} data={item}/>
                    ))
                }
                
            </div>

        </div>
    )
}
export default Body