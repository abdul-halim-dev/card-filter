import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postcardImageSin, singlepage } from '../../style';

const Singlepage = () => {
    const product = useParams();
    const [products, setProducts] = useState({});
    useEffect(()=>{
        try {
            const fetchProduct = async ()=>{
                const response = await axios.get(`https://fakestoreapi.com/products/${product.id}`);
                setProducts(response.data);
            }

            fetchProduct();
        } catch (error) {
            console.log(error)
        }
        
    },[product]);
   
  return (
    <div className=' w-full h-full md:h-[90vh]  flex md:flex-row flex-col items-center justify-center gap-[25px] py-[50px] px-[20px]   bg-slate-50'>
    <div className={postcardImageSin}>
    <img className={singlepage} src={products.image} alt="" />
    </div>

    <div className=" w-full md:w-[48%] space-y-6">
        <h1 className=' text-4xl font-bold'>    {products?.title} </h1>
        <p className=' text-xl font-semibold'>     {products?.description} </p>
    </div>
    
    </div>
  )
}

export default Singlepage