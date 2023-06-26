import Button from "../Button";
const Home = () => {

    return (
        <>
            <section className="relative App__container home flex flex-col sm:flex-row sm:justify-between sm:items-center 
            " id="home">
                <div>
                    <p className="bg-text-gradient-2 rounded-[5px] max-w-[310px] bg-gradient px-2 text-[13px] space-x-1 uppercase font-semibold text-gray-400 "><span className="text-white upper">20% </span> Descount for <span className="text-white upper"> 1 month </span> /account</p>
                    <div className="flex items-center justify-between gap-4">
                        <h1 className="home_title mt-[10px] md:text-[50px] lg:text-[64px] text-[35px] font-[600] sm:leading-tight">
                            The Next <br />
                            <span className="bg-text-gradient">Generation</span>
                        </h1>
                        <Button />
                    </div>
                    <h1 className="text-[30px] md:text-[45px] lg:text-[55px] font-[600]">Payment Method.</h1>
                    <p className="text-[12px] sm:text-[14px] max-w-[380px] leading-5 font-sans text-slate-400" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas voluptatem voluptates, expedita ex quis necessitatibus, maiores temporibus accusamus sunt magni iste omnis provident. Doloremque incidunt quos dolorem commodi iste?</p>
                </div>
                <div className="home__img-box mt-[20px]">
                    <img src="./assets/hand.png" alt="home_image" className="  w-[100%] sm:w-[400px] md:w-[500px] lg:w-[550px]" />
                    <div className="filter_blur_1"></div>
                    <div className="filter_blur_2"></div>
                    <div className="filter_blur_3"></div>
                </div>
            </section>
        </>
    )
}
export default Home;