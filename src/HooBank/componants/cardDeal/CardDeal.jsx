import Btn from "../Btn";


const CardDeal = () => {
    return (
        <>
            <section className=" App__container flex flex-col-reverse gap-5 sm:flex-row pt-16 sm:justify-between sm:items-center" id="progress">
                <div >
                    <h2 className="text-[25px] sm:text-[35px] font-semibold leading-8 sm:leading-snug">
                        Find a better card deal <br /> in few easy steps.
                    </h2>
                    <p className="text-[12px] sm:text-[14px] max-w-[380px] leading-5 font-sans text-slate-400 mt-4" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eligendi deserunt quisquam perferendis, deleniti et?
                    </p>
                    <Btn value="Get Started"/>
                </div>
                <img src="./assets/circle_img.png" className=" mt-10 w-[100%] sm:max-w-[400px] lg:max-w-[460px]" alt="payment image" />
            </section>
        </>
    )
}
export default CardDeal;