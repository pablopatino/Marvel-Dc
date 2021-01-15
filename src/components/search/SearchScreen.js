import React, { useMemo } from 'react'
import queryString from 'query-string'

import { useLocation } from 'react-router-dom'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'


export const SearchScreen = ({ history }) => {
    
    const  location  = useLocation();
    
    const { q = '' } = queryString.parse( location.search )

    


    const initialForm = {
        searchText: q
    }
    
    
    const [  formularios, manejarFormulario  ] = useForm( initialForm )
    
    const { searchText } = formularios
    
    
    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${ searchText }`);
        
    }
    
    const heroesFiltro = useMemo(() => getHeroesByName( q ), [ q ])
    
    
    return (
        <div>
            <h1> SearchScreen </h1>
            <hr/>


            <div className="roww">
                <div className="col-5">
                    <h4> Search Form </h4>
                    
                    <form onSubmit= { handleSearch }>
                        <input
                            type="text"
                            placeholder="Busca tu heroe"
                            className="form-control"
                            name="searchText"
                            value = { searchText }
                            onChange= { manejarFormulario }
                            autoComplete= "off"
                        >
                        </input>

                         <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                         >
                             Search....
                         </button>   

                    </form>


                </div>

                <div className="col-7">

                    <h4> Results </h4>
                    <hr/>

                    {
                        (q==='')
                        &&
                        <div className="alert alert-info">
                            Search a Hero..
                        </div>
                    }

                    {
                        (q !=='' && heroesFiltro.length === 0)
                        &&
                        <div className="alert alert-warning">
                            No hay un heroe con { q }
                        </div>
                    }

                    {
                        heroesFiltro.map( hero => (
                            <HeroCard
                                key = { hero.id }
                                {...hero}
                            
                            />
                        ))
                    }


                </div>

            </div>
        </div>
    )
}
