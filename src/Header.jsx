// export default function Header() {
//   return (
//     <div className="w-full bg-amber-500 h-20">
//     <h1 className="text-3xl text-white font-bold p-5 font-mono shadow-gray-800 shadow-lg">
//       Keeper 
//     </h1>
//     </div>
//   )
//
export default function Header(){
   return(
     <main className=" bg-[#f6e3ba] rounded-full  box-border  shadow-2xl shadow-amber-900 mt-0  flex w-full ">
    <div className=" flex  w-full m-3">
      <a href="#"><img className=" h-15 w-20 m-3 ml-16 bg-inherit" src="./src/nike.png" alt="" /></a>
      <a href="#"><h1 className=" text-black font-bold m-6 text-2xl ml-0">Nike</h1></a>
      <ul className=" min-[300px]:max-sm:hidden xs:max-sm:hidden sm:max-md:hidden md:max-lg:hidden flex justify-center fonts items-center text-slate-700 ml-48 space-x-18 m-6  text-lg">
        <a href="#home"><li className=" text-slate-700 hover:bg-amber-950 hover:rounded-full py-2 hover:text-white px-10">Home</li></a>
        <a href="#about-us"><li className=" text-slate-700 hover:bg-amber-950 hover:rounded-full py-2 hover:text-white px-10">About Us</li></a>
        <a href="#product"><li className=" text-slate-700 hover:bg-amber-950 hover:rounded-full py-2 hover:text-white px-10">Products</li></a>
        <a href="#footer"><li className=" text-slate-700 hover:bg-amber-950 hover:rounded-full py-2 hover:text-white px-10">Contact Us</li></a>
      </ul>
      {/* <a href="#"><h1 className=" text-amber-950 font-semibold m-6 text-xl ml-52 ">Sign Up / Explore Now</h1></a> */}
      <div className="px-6 p-3 ml-auto"><a href="#sign-in"><button className=" font-semibold text-xl bg-amber-950 rounded-full p-3 px-10 text-white hover:bg-amber-900">Sign In / Explore Now</button></a></div>
    </div>

  </main>
   )
}