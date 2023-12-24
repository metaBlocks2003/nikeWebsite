export default function Mid (){
    return (
        <main id="about-us">

            <section className="flex w-full">
            <img className=" box-border  shadow-2xl shadow-red-950 w-[760px] h-[723px] rounded-full p-8 m-8" src="https://images.unsplash.com/photo-1581088583819-dcaf14ddc654?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className=" sm:max-lg:hidden p-6 pt-40 text-5xl font-extrabold font-sans">Special <span className=" text-amber-900">Offer</span> <br />
            <p className=" sm:max-lg:hidden ml-[-20px] text-2xl font-sans font-normal p-6 text-slate-700 ">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart. <br /> <br /> Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
            <br />
            <div className=" sm:max-lg:hidden space-x-6">
            <button className=" box-border shadow-2xl shadow-amber-950 text-white bg-amber-950 rounded-full px-10 p-3 font-normal text-2xl">Shop Now ➜</button>
            <button className=" box-border shadow-2xl shadow-amber-950 rounded-full px-10 p-3 font-normal text-2xl text-amber-900 bg-inherit border-2 border-amber-950">Learn More</button>
            </div>
            </h1>
            </section>
        </main>
    )
}