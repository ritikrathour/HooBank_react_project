 

const Billing = () => {
    return (
        <>
            <section className="relative App__container flex flex-col  sm:flex-row pt-16 sm:justify-between sm:items-center " id="progress">
                <img src="./assets/Payment.png" className="w-[100%] sm:max-w-[400px] lg:max-w-[460px]" alt="payment image" />
                <div className="filter_blur_1"></div>
                <div>
                <h2 className="text-[25px] sm:text-[35px] font-semibold leading-8 sm:leading-snug">
                           Easily control your <br /> billing & invoicing.
                        </h2>
                        <p className="text-[12px] sm:text-[14px] max-w-[380px] leading-5 font-sans text-slate-400 mt-4" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas voluptatem voluptates, expedita ex quis necessitatibus, maiores temporibus accusamus sunt magni iste omnis provident. Doloremque incidunt quos dolorem commodi iste?</p>
                        <div className="flex items-center">
                            <img className="w-[100px] h-[100px] cursor-pointer" src="./assets/app_store.png" alt="app store" />

                            <img className="w-[140px] h-[100px] object-cover cursor-pointer" src="./assets/google_play.png" alt="google play" />
                        </div>
                </div>
            </section>
        </>
    )
}
export default Billing;