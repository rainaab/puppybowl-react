import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function SinglePlayers (){

    const [puppy, setPuppy] = useState({})
    const {id} = useParams()

    useEffect( () => {
        fetchSinglePlayer()
    }, [])
    
    async function fetchSinglePlayer(){
    try {
            const response = await fetch(
                `https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/players/${id}`)
            const json = await response.json();
            setPuppy(json.data.player)
    
        }
     catch (error) {
        console.error(`Oh no, trouble fetching player #${id}!`);
    }
    }
    console.log(puppy)



    return (
        <>
        <h1>SinglePlayer</h1>
        <div>
            <h2>{puppy.name}</h2>
            <h3># {puppy.id}</h3>
            <h3>Breed: {puppy.breed}</h3>
            <h4>Status: {puppy.status}</h4>
            <img src={puppy.imageUrl}/>
        </div>
        </>
    )


}


export default SinglePlayers