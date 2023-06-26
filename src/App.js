import Header from "./HooBank/layout/header/Header"
import Footer from "./HooBank/layout/footer/Footer";
import Billing from "./HooBank/componants/billing/Billing"
import Progress from "./HooBank/componants/Progress/Progress"
import Business from "./HooBank/componants/business/Business"
import CTA from "./HooBank/componants/CTA/CTA"
import CardDeal from "./HooBank/componants/cardDeal/CardDeal"
import Testemonial from "./HooBank/componants/testemonial/Testemonial"
import Home from "./HooBank/componants/Home/Home";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Progress />
        <Business />
        <Billing />
        <CardDeal />
        <Testemonial />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
export default App; 