import Btn from "../Btn";

const CTA = ()=>{
return(
    <>
     <section className="App__container
            " id="CTA">  
                <div className="newsletter my-[50px] bg-text-gradient-2 p-4 flex flex-col items-start sm:flex-row justify-between sm:items-center" >
                    <div className="content">
                    <h2 className="text-[22px] sm:text-[35px] font-semibold leading-8 sm:leading-snug">
                            Let's try our services now! 
                        </h2>
                        <p className="text-[12px] sm:text-[14px] max-w-[380px] leading-5 font-sans text-slate-400 mt-4" >Everything you need to accept card payment and <br className="hidden sm:block"/> grow your business anywhere on the planet.</p>
                    </div>
                    <Btn value="Get Started"/>
                </div>
            </section>
    </>
)
}
export default CTA;