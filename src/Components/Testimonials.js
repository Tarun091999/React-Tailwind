import Cards from "./Cards";
export default function Testimonial()
{
    const dummyData = `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor exercitationem ullam perferendis dicta temporibus consequatur pariatur perspiciatis magnam tempora assumenda eaque... `

    return (
    <div className="w-[90%] m-auto flex justify-between mt-10 md:flex-row flex-col">
     <Cards image="/Images/user.png" content={dummyData} />
     <Cards image="/Images/user.png" content={dummyData}/>
     <Cards image="/Images/user.png" content={dummyData}/>
     <Cards image="/Images/user.png" content={dummyData}/>
    </div>
    )
}