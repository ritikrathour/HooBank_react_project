import { Testemonial__card__data } from "../../Hoobank_data";

const Testemonial = () => {

    return (
        <>
            <section className=" App__container flex flex-col">
                <div className="testemonial__head mt-10 flex flex-col sm:flex-row justify-between w-full">
                    <h2 className="text-[25px] sm:text-[35px] font-semibold leading-8 sm:leading-snug">
                        What people are <br />saying about us
                    </h2>
                    <p className="text-[12px] sm:text-[14px] max-w-[250px] leading-5 font-sans text-slate-400 mt-4" >
                        Everything you need to accept card payment and grow your business anywhere on the planet.
                    </p>
                </div>
                <div className="cards flex flex-col relative gap-5 mt-10 sm:flex-row sm:justify-between sm:items-center my-10 sm:grid-cols-2 sm:grid lg:grid-cols-3">
                    <div className="filter_blur_2"></div>
                    {
                        Testemonial__card__data.map((card) => {
                            return (
                                <article className="card p-[20px] flex flex-col justify-between items-start rounded-[5px]" key={card.id}>
                                    <h2 className="text-[50px] leading-5 text-teal-500">{card.qoute}</h2>
                                    <p className="description text-[16px] leading-5 font-medium font-sans text-slate-100 mb-5">{card.text}</p>
                                    <div className="client flex items-center">
                                        <img src={card.client_image} className="w-[40px] h-[40px] rounded-full" alt={card.client_name} />
                                        <div className="clientName ml-3 leading-4">
                                            <h4 className="text-[14px]">{card.client_name}</h4>
                                            <p className="text-[12px]">{card.client_profession}</p>
                                        </div>

                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Testemonial;