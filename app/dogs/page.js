'use client'

import axios from "axios";
import { useEffect, useState } from "react";

function Dogs() {

    const [ dogs, alteraDogs ] = useState([])
    const [ racas, alteraRacas ] = useState([])

    async function buscaTodosDogs(){
        const response = await axios.get("https://dog.ceo/api/breeds/image/random/30")
        alteraDogs( response.data.message )
    }   

    async function buscaPorRaca( raca ){
        const response = await axios.get("https://dog.ceo/api/breed/"+raca+"/images")
        alteraDogs( response.data.message )
    }

    async function buscaTodasRacas(){
        const response = await axios.get("https://dog.ceo/api/breeds/list/all")
        alteraRacas( Object.keys( response.data.message ) )
    }

    useEffect(()=> {
        buscaTodosDogs()
        buscaTodasRacas()
    }, [])

    return (
        <div className="px-20">
            
            <h1 className="p-10 mb-10 text-center text-green-700 bg-green-50 text-2xl" >Lista de Doguinhos</h1>
            <p>Os melhores hotdogs estão aqui:</p>

            <hr/>

            <div className="flex" >

                <div className="w-100" >
                    
                    <button onClick={()=> buscaTodosDogs() } className="bg-green-500 text-green-900 my-3 p-3">Mostrar tudo</button>
                    
                    {
                        racas.length > 0 &&
                            racas.map( i => 
                                <button onClick={()=> buscaPorRaca(i) } className="bg-green-200 text-green-700 my-1 p-3"> {i} </button>
                            )
                    }
                    
                </div>
        
                {
                    dogs.length > 0 ?
                        <div className="flex gap-5 flex-wrap" >
                            {
                                dogs.map( i => 
                                    <img src={i} width={100} />
                                )
                            }
                        </div>
                    :
                        <p>Carregando...</p>
                }

            </div>

            

        </div>
    );
}

export default Dogs;