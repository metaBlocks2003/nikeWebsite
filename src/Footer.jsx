export default function Footer (){
    return (
        <main id="footer">
            <section className=" container lg:flex lg:justify-evenly lg:gap-[150px] lg:max-w-full md:max-w-full lg:h-[550px] md:grid md:grid-cols-1 md:max-h-full bg-zinc-950"> 

            <div className=" container lg:w-1/3 md:w-full grid">
                <img src="https://nike-rosy.vercel.app/assets/footer-logo-4821ca9f.svg" className="pt-28 pl-20 text-4xl font-bold font-sans" />
                <p className=" leading-loose pt-14 pl-20 text-white font-sans text-lg">Get shoes ready for the new term at your nearest Nike store. Find out Your perfect Size In Store. Get Rewards</p>
                <div className="container lg:flex lg:w-1/4 md:flex sm:flex space-x-12 pt-16 rounded-full pl-20">
                <a href="#"><svg className="md:mb-4 hover:stroke-blue-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="full" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                <a href="#"><svg className="md:mb-4 hover:stroke-blue-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="full" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> </a>
                <a href="#"><svg className="md:mb-4 hover:stroke-blue-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="full" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                </div>
            </div>


            <div className=" container  md:w-full md:ml-[-3.5rem]  lg:w-1/4">
                <h1 className=" text-white pt-28 pl-36 text-4xl font-bold font-sans">Products</h1>
                <ul className=" space-y-[-2rem]">
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">Air Force Jordan</a></li>
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">Air Max 1</a></li>
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">Air Jordan 1</a></li>
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">Air Force 2</a></li>
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">Nike Waffle Racer</a></li>
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">Nike Cortez</a></li>
                </ul>
            </div>


            <div className=" container md:ml-[-3.5rem] md:w-full lg:w-1/4">
            <h1 className=" text-white pt-28 pl-36 text-4xl font-bold font-sans">Help</h1>
                <ul className=" space-y-[-2rem]">
                    <li className="text-white pt-14 text-lg pl-36"><a  className="hover:text-blue-500" href="#">About Us</a></li>
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">FAQs</a></li>
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">How it works</a></li>
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">Privacy Policy</a></li>
                    <li className="text-white pt-14 text-lg pl-36"><a className="hover:text-blue-500" href="#">Payment Policy</a></li>
                </ul>
            </div>


            <div className=" container md:ml-[-3.5rem] md:w-full w-1/4">
            <h1 className=" text-white pt-28 pl-28 text-4xl font-bold font-sans">Get In Touch</h1>
            <a href="#"> <ul className=" space-y-[-2rem]">
                    <li className="text-white pt-14 text-lg pl-28 hover:text-blue-500 ">customer@nike.com</li>
                    <li className="text-white pt-14 text-lg pl-28 hover:text-blue-500">+92554862354</li>
                </ul>
                </a>
            </div>
            
            </section>
        </main>
    )
}