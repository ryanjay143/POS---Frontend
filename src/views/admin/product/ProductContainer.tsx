
import Header from '../profile/Header'
import Footer from '../footer/Footer'
import TableUI from './layouts/TableUI'

function ProductContainer() {
  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <Header />
      <TableUI />
      <Footer />
    </div>
  )
}

export default ProductContainer