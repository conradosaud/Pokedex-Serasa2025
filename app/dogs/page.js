'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function Dogs() {

    const [ dogs, alteraDogs ] = useState([])

    async function buscaTodosDogs(){
        const response = await axios.get("https://dog.ceo/api/breeds/image/random/50")
        console.log(response)
        alteraDogs(response.data.message)
    }

    useEffect(()=> {
        buscaTodosDogs()
    }, [])

    return (
        <div className="px-20">
            
            <h1 className="p-10 mb-10 text-center text-green-700 bg-green-50 text-2xl" >Lista de Doguinhos</h1>
            <p>Os melhores hotdogs estão aqui:</p>

            <hr/>

            <div className="flex flex-wrap gap-5">
            {
                dogs.map(i => <img src={i} width={150} /> )
            }
            </div>
            

        </div>
    );
}

export default Dogs;