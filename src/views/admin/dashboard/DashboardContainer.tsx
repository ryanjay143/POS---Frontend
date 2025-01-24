import Cards from "./layouts/Cards";
import TableUI from "./layouts/TableUI";

function AdminContainer() {
  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <Cards />
      <TableUI />
    </div>
  )
}

export default AdminContainer;
