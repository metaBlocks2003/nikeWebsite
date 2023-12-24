export default function Form (){
    return(
        <main id="sign-in">
            <section className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between w-full  ">

                <div className="py-10">
                    <h1 className=" leading-loose text-amber-900 text-5xl p-16 font-bold">Sign Up for <span className="text-amber-950">Updates</span>  <br /> & Newsletter</h1>
                </div>


                <div className="py-10 px-16">
                    <input className="rounded-full p-7 mt-24 pr-96" placeholder="subscribe@nike.com" type="email" />
                </div>

            </section>
        </main>
    )
}