import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


function NewPlayersForm (){
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const response = await fetch(
                'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/players',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        breed,
                        status,
                        imageUrl, 
                    })
                }
            )
            const json = await response.json()
            console.log(json)

            navigate('/')
        } catch (error) {
            console.error('Uh oh, trouble rendering the new player form!', err);
        }
    }
    return (
        <>
        <h1>Add Your Pup!</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Puppy Name: <input value={name} onChange={(e) => setName(e.target.value)}/>

            </label>
            <label>
                Puppy Breed: <input value={breed} onChange={(e) => setBreed(e.target.value)}/>

            </label>
            <label>
                Puppy Status <input value={status} onChange={(e) => setStatus(e.target.value)}/>

            </label>
            <label>
                Puppy Pic: <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>

            </label>
            <button>Submit Puppy</button>
        </form>
        </>
    )


}


export default NewPlayersForm