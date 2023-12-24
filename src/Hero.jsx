// export default function Card (props){
//     return (
//          <div className=" flex w-72 h-24 bg-slate-400 m-5 rounded-md shadow-slate-400 shadow-md">
//             <h2 className="text-start font-bold text-lg p-3 ">{props.title} <br />   <p className="text-start font-semibold text-base ">{props.content}</p> </h2>
//             <img src={props.image} alt="image"/>
//         </div>
//     )
// }

export default function Hero(){
    return (
        <main id="home">
            <section className="w-full">
                <h1 id="heading" className=" text-amber-950 p-20 font-light m-6 pt-2 text-3xl ml-[-3px]">Our summer Collections</h1>


               <div id="hero" className="flex ">  
               <h2 className=" text-amber-900 text-8xl p-16 font-extrabold  pt-2 ml-[-3px]">The New Arrival <br /> <span className=" text-amber-950">Nike</span> Shoes
               <br />
               <div className=" text-stone-700 font-normal  text-2xl p-6">
                <h1 className=" py-6 mt-1">Discover stylish Nike arrivals,  quality <br /> comfort, and innovation for your active life.
               <br />
               <div className="py-6 my-8">
               <button className=" bg-amber-950 rounded-full p-3 px-10 text-white text-lg">Shop Now ➜</button>
               </div>
               <div className="flex w-full">
               <ul className="flex justify-start items-start text-3xl font-extrabold gap-20">
                <li>1k+ <br /><span className=" text-xl text-slate-700 font-normal">brands</span></li>
                <li>500+ <br /><span className=" text-xl text-slate-700 font-normal">shops</span></li>
                <li>250k+ <br /><span className=" text-xl text-slate-700 font-normal">customers</span></li>
               </ul>
               </div>
               </h1>
               </div>
               
               </h2>
               <div className="flex justify-center items-center h-3/4 w-3/4 bg-hero p-3 rounded-full box-border shadow-2xl shadow-amber-950">
               <img className="" src="https://nike-rosy.vercel.app/assets/big-shoe1-0c574e3f.png" alt=""  />
                
               
               </div>
               
               
               </div>

            </section>
        </main>
    )
}