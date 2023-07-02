
import { useEffect,useState } from "react";
import Allanime from "./Allanime";
import React from "react";
import ReactLoading from "react-loading";

const Main=()=>{

    let[anime , setAnime] = useState(null)
    let[pending , setPending] = useState(true)
    let[error , setError] = useState(null)
       
    useEffect(()=>{
        setTimeout(()=>{
           let data= fetch("https://api.jikan.moe/v4/anime")
           data.then((response)=>
            {
               if(response.ok===true)
               {
                 //let {data}=response;
                  return response.json();
               }
               else
               {
                  throw Error("data not found")
               }
               })
            .then(({data})=>{setAnime(data);setPending(false);console.log(anime)})
            .catch((err)=>{setError(err.message);setPending(false)
               })
        },3000)
        
    },[anime])
        
    
    return ( <div className="home">
    {error && <h1>{error}</h1>}
{pending && <div className="loading-container">
   <ReactLoading
                type="spinningBubbles"
                color="#0000FF"
                height={300}
                width={100}
            /></div> }
    {anime && <Allanime a={anime}></Allanime>}
</div> );

}
export default Main