import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Postcard from '../postcard/Postcard';
import { categoryStyle } from '../../style';

const Category = () => {
    const one = useParams();
    const [loader, setLoader] = useState(false)

    const [card, setcard]= useState([])

    useEffect(()=>{
    
    const fetchingCard = async ()=>{
      try {
        setLoader(true)
        const response = await axios.get(`https://fakestoreapi.com/products/category/${one.id}`);
        
            setcard(response.data);
            setLoader(false)
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }
    fetchingCard()
    },[one])
    if(loader === true) return <div className='absolute top-[250px] sm:top-[140px] left-0 w-[100vw] h-full flex items-center justify-center bg-slate-100'>
      <h1 className=' text-4xl md:text-6xl lg:text-8xl text-indigo-700 font-extrabold'> Products Loading...... </h1>
    </div>
  return (
    <div className={categoryStyle}>
      {
        card?.map((item)=>(
        <Postcard title={item} key={item.id}/>
        ))
        
      }


    </div>
  )
}

export default Category