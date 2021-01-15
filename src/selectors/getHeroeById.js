

import { heroes } from '../data/heroes'

export const getHeroesById = ( Id ) => {


    //Validar que el id existe 
  
    return heroes.find( heroe => heroe.id === Id )


}