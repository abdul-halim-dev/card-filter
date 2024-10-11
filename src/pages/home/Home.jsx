import axios from 'axios'
import   { useEffect, useState } from 'react'
import Postcard from '../postcard/Postcard'
import { homeContainer } from '../../style'

const Home = () => {

const [card, setcard]= useState([])

useEffect(()=>{

const fetchingCard = async ()=>{

    const mainCard = await axios.get( "https://fakestoreapi.com/products");
    let storeCard = mainCard.data;
    console.log(storeCard)
        setcard(storeCard)
}

fetchingCard()

},[])
 
console.log(card)

  return (
    <div className={homeContainer}>
        {
            card.map( (item)=>(
                <Postcard key={item.id} title={item}/>
            ) )
        }
    </div>
  )
}

export default Home