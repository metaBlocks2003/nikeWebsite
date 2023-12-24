export default function Card(){
    return (
        <main>
            <section className=" sm:max-lg:gap-24 sm:max-lg:mt-[50rem] grid lg:grid-cols-3 space-x-10 p-8 pt-48 pb-40">
                <div className=" sm:max-lg:ml-[40px] box-border shadow-2xl shadow-amber-900 sh rounded-lg w-[400px] h-[300px]">
                   <div className="p-8"> <img className="bg-amber-900 rounded-full p-4" src="https://nike-rosy.vercel.app/assets/truck-fast-9039ad27.svg" alt="" /> </div>
                   <h1 className=" text-2xl font-sans text-slate-950 font-bold p-4 pl-8 pt-0">Free Shipping</h1>
                   <p className="p-4 pl-8 pt-0 text-xl font-sans text-slate-700">Enjoy seamless shopping with our complimentary shipping service.</p>


                </div>
                <div className=" box-border shadow-2xl shadow-amber-900 sh rounded-lg w-[400px] h-[300px]">
                <div className="p-8"> <img className="bg-amber-900 rounded-full p-4" src="https://nike-rosy.vercel.app/assets/shield-tick-e2e16ca6.svg" alt="" /> </div>
                <h1 className=" text-2xl font-sans text-slate-950 font-bold p-4 pl-8 pt-0">Secure Payment</h1>
                <p className="p-4 pl-8 pt-0 text-xl font-sans text-slate-700">Experience worry-free transactions with our secure payment options.</p>
  
                </div>
                <div className=" box-border shadow-2xl shadow-amber-900 sh rounded-lg w-[400px] h-[300px]">
                <div className="p-8"> <img className="bg-amber-900 rounded-full p-4" src="https://nike-rosy.vercel.app/assets/support-43744df6.svg" alt="" /> </div>
                <h1 className=" text-2xl font-sans text-slate-950 font-bold p-4 pl-8 pt-0">Love to help you</h1>
                <p className="p-4 pl-8 pt-0 text-xl font-sans text-slate-700">Our dedicated team is here to assist you every step of the way.</p>
                </div>

            </section>

        </main>
    )
}