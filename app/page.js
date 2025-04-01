'use client'
import axios from "axios";
import { useState } from "react";

export default function Home() {

    const [ pokemons, alteraPokemons ] = useState({})
    const [ pesquisa, alteraPesquisa ] = useState("")

    async function buscaPokemon(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+pesquisa)
        console.log(response.data)
        alteraPokemons(response.data)
    }

    async function proximoPokemon( proximo ){
        
        const proximoID = parseInt(pokemons.id) + (proximo == true ? 1 : -1);

        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+proximoID)
        alteraPokemons(response.data)
    }

    return (
        <div className="px-20" >

            <h1 className="p-10 mb-10 text-center text-indigo-700 bg-indigo-50 text-2xl" >Pokédex</h1>
            <p>Os melhores Pokémons estão aqui</p>

            <hr/>

            <form onSubmit={ (e)=> { e.preventDefault(); buscaPokemon() } } >
                <p>Digite o nome de um Pokémon:</p>
                <input onChange={ (e)=> alteraPesquisa(e.target.value) } className="border my-5" />
                <br/>
                <button className="bg-indigo-700 text-indigo-50 p-3 mb-10" >Pesquisar</button>
            </form>

            {
                pokemons.id ?
                    <div>
                        <img src={pokemons.sprites.other.showdown.front_default} />
                        <h2> {pokemons.name} </h2>
                        <p> {pokemons.types[0].type.name} </p>

                        <button onClick={()=>proximoPokemon(false)} className="bg-indigo-300 p-3" >Anterior</button>
                        <button onClick={()=>proximoPokemon(true)} className="bg-indigo-300 p-3" >Próximo</button>

                    </div>
                :
                    <p> Carregando... </p>
            }
            

        </div>
    );
}
