import { useState, useEffect } from 'react'


function AllPlayers (){

    const[puppies, setPuppies] = useState([])
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/`;

    useEffect (() => {
        fetchAllPlayers()

    }, [])

    async function fetchAllPlayers () {
        try {
            const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/players')
            const json = await response.json()
            setPuppies(json.data.players)
            console.log(json)
            
        } catch (error) {
            console.error('Uh oh, trouble fetching players!', err);
        }
    }

    return (
        <>
        <h1>All Players</h1>
        <ul className='puppies-card'>
        {
        puppies.map(puppy => {
          return <li key={puppy.id}>
            <h3>{puppy.name}</h3>
            <h3>#{puppy.id}</h3>
            <img src={puppy.imageUrl} />
          </li>
        })
        }
        
        </ul>
    
        
        </>
    )


}


export default AllPlayers