import Cards from "./layouts/Cards";
import Header from "../profile/Header";
import TableUI from "./layouts/TableUI";
import Footer from "../footer/Footer";

function AdminContainer() {
  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <Header />
      <Cards />
      <TableUI />
      <Footer />
    </div>
  )
}

export default AdminContainer;
