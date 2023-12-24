export default function Testimonials(){
    return(
        <main>
            <section className=" grid md:grid-cols-1 sm:grid-cols-1 w-full bg-[#f6e3ba] h-[850px]">
                <div className="flex justify-center pt-20">
                    <h1 className=" text-center w-3/4 text-5xl font-bold ">What Our Customers Say?
                    <br />
                    <p className=" w-3/4 text-2xl pt-8 text-amber-900 text-center ml-32 font-normal">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
                    </h1>

                </div>

                <div className=" flex space-x-[450px] p-20 pl-96">
                <img className="h-32 w-32 rounded-full" src="https://nike-rosy.vercel.app/assets/customer1-68e0c3c8.jpeg" alt="" />
                <img className=" sm:max-lg:hidden h-32 w-32 rounded-full" src="https://nike-rosy.vercel.app/assets/customer2-e014463b.svg" alt="" />
                </div>

                <div className=" sm:max-lg:ml-[35px] sm:max-lg:mb-[-10px] flex  justify-center space-x-20 w-full ">
                    <h1 className=" text-center w-1/3 text-2xl text-amber-800">The attention to detail and the quality of the product exceeded my expectations. Highly recommended!
                    <br />
                    <h1 className=" text-3xl font-bold text-amber-950 p-6">Morich Brown (4.5 stars) </h1>
                    <br />

                
                   
                    </h1>
                    <h1 className=" sm:max-lg:hidden text-center w-1/3 text-2xl text-amber-800">The product not only met but exceeded my expectations. I&apos;ll definitely be a returning customer!
                    <br />
                    <h1 className=" sm:max-lg:hidden text-3xl font-bold text-amber-950 p-6">Jane Doe (4.9 stars)</h1>
                    <br />
                    
                    </h1>
                    
                    
                </div>

            </section>
        </main>
    )
}
