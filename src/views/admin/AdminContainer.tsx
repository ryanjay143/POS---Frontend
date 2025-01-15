
import Cards from "./layouts/Cards";
import Header from "./layouts/header";
import TableUI from "./layouts/TableUI";

function AdminContainer() {
  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <Header />
      <Cards />
      <TableUI />
    </div>


     

  )
}

export default AdminContainer;
