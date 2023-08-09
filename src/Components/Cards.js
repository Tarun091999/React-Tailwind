export default function Cards(props)
{
    const image = props.image;
    const cardContent = props.content;
    console.log(cardContent)
    return (
        <>
        <div className="flex flex-col  md:w-[20vw] sm:w-[100%] md:mb-0 mb-10 h-auto shadow-2xl">
         
         <div className="bg-slate-500 h-[10px] ">
          
         </div>
         <div className="p-4">    
          <img src={image} alt="card image mb-2" className="w-[25%] m-auto mt-2"/>
            <h1 className="text-center text-xl mb-5">User</h1>
            <p className="text-center">{cardContent}</p>
         </div>
        </div>
        </>
    )
}