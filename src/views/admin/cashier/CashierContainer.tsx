import Footer from "../footer/Footer"
import Header from "../profile/Header"
import TableUI from "./layouts/TableUI"


function CashierContainer() {
  return (
    <div className='flex flex-col w-full overflow-hidden'>
        <Header />
        <TableUI />
        <Footer />
  </div>
  )
}

export default CashierContainer