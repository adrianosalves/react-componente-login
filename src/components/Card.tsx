interface ICard {
	id: string

}

// Todo componente é uma função que retorna alguma coisa!
export const Card = ({id}: ICard) => {
     return(
        <div>
           <h1>{id}</h1>  
         
        </div>
    )
}