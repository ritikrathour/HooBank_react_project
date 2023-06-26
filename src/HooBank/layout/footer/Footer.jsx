import { Footer__list__one, Footer__list__three, Footer__list__two } from "../../Hoobank_data";
import ListItem from "../../componants/ListItem";

const Footer = () => {
    return (
        <>
            <footer className="footer w-[100%]  App__container  h-[3rem]">

                <nav className="footer__nav mt-[70px] pb-10  flex flex-col justify-between gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="footer__logo_content mr-[50px] mb-5">
                        <img src="assets/HooBank.png" className="w-[100px]" alt="" />
                        <p className="text-[12px] sm:text-[14px] max-w-[380px] leading-4 font-sans text-slate-400 mt-2" > A new way to make the payment <br /> easy, raliable and secure</p>
                    </div>
                    <ul className="footer__list sm:ml-[100px]">
                        <h4 className="title font-semibold text-[16px]">Useful Links</h4>
                        {
                            Footer__list__one.map((item) => {
                                return (
                                    <ListItem key={item.id} item={item} />
                                )
                            })
                        }
                    </ul>
                    <ul className="footer__list sm:ml-[100px]">
                        <h4 className="title font-semibold text-[16px]">Community</h4>
                        {
                            Footer__list__two.map((item) => {
                                return (
                                    <ListItem key={item.id} item={item} />
                                )
                            })
                        }
                    </ul>
                    <ul className="footer__list sm:ml-[100px]">
                        <h4 className="title font-semibold text-[16px]">Partner</h4>
                        {
                            Footer__list__three.map((item) => {
                                return (
                                    <ListItem key={item.id} item={item} />
                                )
                            })
                        }
                    </ul>
                </nav>
            </footer>
        </>
    )
}
export default Footer;