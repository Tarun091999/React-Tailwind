import NavigationBar from "./NavigationBar";

export default function Header()
{
    return (
        <>
        <NavigationBar/>
        <div className="h-[80vh] bg-slate-500 flex justify-between" >
         <div className="w-[40%] ml-10 mb-2 flex flex-col justify-center">
                
                <h1 className="text-5xl font-bold mb-10">"If you want to go fast, go alone..."</h1>
                <p className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum esse veniam amet. Cum nemo atque ratione, consequatur reprehenderit nostrum veniam ea temporibus dolorum rerum optio in, veritatis, consequuntur quas nobis?
                </p>
         </div>
         <img src="/Images/charactor-1.png" alt="Banner-Image" className=" mr-[10%]"/>
        </div>
        </>
    )
}