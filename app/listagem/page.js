'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function Listagem() {

    const [ pokemons, alteraPokemons ] = useState([])

    async function buscaTodosPokemons(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
        console.log(response)
        alteraPokemons( response.data.results )
    }

    useEffect( ()=> {
        buscaTodosPokemons()
    }, [] )

    return ( 
        <div className="px-20">
            
            <h1 className="p-10 mb-10 text-center text-red-700 bg-red-50 text-2xl" >Lista de Pokémons</h1>
            <p>Veja quais são todos os Pokémons</p>

            <hr/>

            {
                pokemons.length > 0 ?
                    <ul>
                        {
                            pokemons.map( (i, index) =>     
                                <li className="flex items-center gap-4" > 
                                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+(index+1)+".png"} />
                                    <p> <strong> {index+1} </strong> <br/> {i.name} </p>
                                </li>
                            )
                        }
                    </ul>
                    
                :
                    <p>Carregando...</p>
            }

        </div>
    );
}

export default Listagem;