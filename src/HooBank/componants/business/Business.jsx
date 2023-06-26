import { Business__data } from "../../Hoobank_data"
import Btn from "../Btn"

const Business = () => {
    return (
        <>
            <section className="mt-[50px] mb-10 
            " id="business">
                <div className="App__container  flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8 ">
                    <div className="business_content">
                        <h2 className="text-[25px] sm:text-[35px] font-semibold leading-8 sm:leading-snug">
                            You do the business, <br /> we'll handle the money.
                        </h2>
                        <p className="text-[12px] sm:text-[14px] max-w-[380px] leading-5 font-sans text-slate-400 mt-4" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas voluptatem voluptates, expedita ex quis necessitatibus, maiores temporibus accusamus sunt magni iste omnis provident. Doloremque incidunt quos dolorem commodi iste?</p>
                        <Btn value="Get Started"/>
                    </div>
                    <div className="business__list__data">
                        <ul className="business__list flex  flex-col  gap-10">
                            {
                                Business__data.map((item) => {
                                    return (
                                        <li className="flex items-center rounded-[5px] p-[5px] " key={item.id}>
                                            <div className="business__icon mr-4">
                                                <i className={`${item.star} text-teal-400`} ></i>
                                            </div>
                                            <div>
                                                <h4 className="title text-[16px] sm:text-[18px] font-semibold">{item.title}</h4>
                                                <p className="text-[12px] sm:text-[14px] text-slate-400 max-w-[400px] ">{item.description}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Business