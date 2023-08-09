import { Link } from "react-router-dom";

export default function NavigationBar ()
{
    return (
        <>
        <nav className="flex justify-between  bg-purple-950 " >
         <ul className="flex space-x-8 p-2 text-white  shadow-xl ">
            <li className="p-2"><Link to="/">Home</Link></li>
            <li className="p-2"><Link to="/">About</Link></li>
            <li className="p-2"><Link to="/">Contact</Link></li>
         </ul>  
          <button className="bg-yellow-400  mt-3  px-4 py-1 h-[75%] rounded-2xl shadow-md border-none font-bold uppercase mr-12" >Login</button>
        </nav>
        </>
    )
}