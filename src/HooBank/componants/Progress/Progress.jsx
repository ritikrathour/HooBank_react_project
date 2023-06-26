import { Progress__data } from "../../Hoobank_data";

const Progress = () => {
    return (
        <>
            <section className=" pro App__container flex flex-col  sm:flex-row pt-16 sm:justify-between sm:items-center " id="progress">
                <ul className="progress__list w-full flex md:flex-row sm:flex-row flex-col gap-[10px]  justify-between my-[30px]">
                {
                    Progress__data.map((item)=>{
                        return(
                            <li className="flex items-center gap-[10px]" key={item.id}>
                                <span className="text-[20px] font-semibold">{item.number}</span>
                                <span className="bg-text-gradient uppercase text-[12px] font-semibold">
                                {item.text}
                                </span>
                            </li>
                        )
                    })
                }
                </ul>
            </section>
        </>
    )
}
export default Progress;