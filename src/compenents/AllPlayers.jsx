import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function AllPlayers (){

    const[puppies, setPuppies] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()

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

    async function deletePup (id) {
        try {
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/players/${id}`, {
                method: 'DELETE',
            })
            const result = await response.json()

            fetchAllPlayers()
            
        } catch (error) {
            `Whoops, trouble removing player #${id} from the roster!`,
            err
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
            <button onClick={() => navigate(`/puppy-details/${puppy.id}`)}>Puppy Details</button>
            <button onClick={() => deletePup(puppy.id)}>Delete Pup</button>
          </li>
        })
        }
        
        </ul>
    
        
        </>
    )


}


export default AllPlayers