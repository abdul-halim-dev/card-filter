 
import { NavLink } from 'react-router-dom'






// const Header = () => {

// const two =[
//     {
//         id:1,
//         title:"men's clothing"
//     },
//     {
//         id:2,
//         title:"women's clothing"
//     },
//     {
//         id:3,
//         title:"jewelery"
//     },
//     {
//         id:4,
//         title:"electronics"
//     },
    



// ]



//   return (
//    <header className='w-full h-[20px] bg-slate-400 flex items-center justify-between p-[40px] '>
// <h1>Halim</h1>
// <nav>
//     <ul className='flex items-center justify-center gap-3 '>
//         {
//             two.map((item)=>(
//                 <li key={item.id}> <Link to={`/category/${item.title}`}> {item.title} </Link> </li>
//             ))
//         }
//     </ul>
// </nav>

//    </header>
//   )
// }

 



  
 
 
 
const Header = () => {


    const two = [
         
        {
            id:1,
            title:"men's clothing"
        },
        {
            id:2,
            title:"women's clothing"
        },
        {
            id:3,
            title:"jewelery"
        },
        {
            id:4,
            title:"electronics"
        },

    ];

    
   
   
    
    return (
        <header className=" bg-slate-500 w-full  flex items-center justify-center flex-col gap-5 px-[15px] md:px-[50px] ">
          <div className=" w-full flex items-center justify-center text-white py-[10px] text-2xl sm:text-4xl uppercase font-bold ">
            
          <span> Card Filtering System </span>
            </div>

            <nav  className=" pb-[30px] ">
            
               
                <ul className=" flex items-center justify-center gap-4  flex-wrap "  >
                    <li className=" text-xl font-semibold py-[6px] sm:py-[8px] px-[8px] sm:px-[12px] rounded-md bg-[#d9832e] text-white ">   <NavLink    className={({ isActive, isPending }) =>
                    isPending ? " text-white " : isActive ? " text-black " : ""
                }   to="/"> Home</NavLink> </li>
                            
                    {
                    two.map((item)=>(
                        <li className=" text-white text-sm sm:text-xl font-semibold py-[4px] sm:py-[8px] px-[8px] sm:px-[12px] rounded-md bg-[#d9832e]   " key={item.id}>   <NavLink className={({ isActive, isPending }) =>
                            isPending ? " text-white " : isActive ? " text-black " : ""
                        }  to={`/category/${item.title}`}>  { item.title.toUpperCase()} </NavLink> </li>

                    ))
                        }
              
                </ul>
           
            
             </nav> 

            
         
        </header>
    );
};

export default Header;