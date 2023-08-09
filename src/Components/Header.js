import NavigationBar from "./NavigationBar";

export default function Header()
{
    return (
        <>
        <NavigationBar/>
        <div className="md:h-[80vh] h-auto bg-slate-500 md:flex md:justify-between  md:flex-row sm:flex-col"  >
         <div className=" md:w-[40%] w-[90%] md:ml-10 mb-2 flex flex-col  md:m-0 m-auto  justify-center">
                
                <h1 className="md:text-5xl  text-2xl font-bold mb-10 md:text-left text-center">"If you want to go fast, go alone..."</h1>
                <p className="text-white md:text-left text-center ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum esse veniam amet. Cum nemo atque ratione, consequatur reprehenderit nostrum veniam ea temporibus dolorum rerum optio in, veritatis, consequuntur quas nobis?
                </p>
         </div>
         <img src="/Images/charactor-1.png" alt="Banner-Image" className=" md:mr-[10%] m-auto md:m-0"/>
        </div>
        </>
    )
}