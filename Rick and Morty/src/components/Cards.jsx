import Card from './Card';
import React from 'react'

export default function Cards({characters}) {
   console.log(characters)
   return (
   <div className='Cards'>
       {
         characters && characters.map((personaje)=>{
            return <Card 
            key={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />;
         })
      } 
   </div>
   )
}
