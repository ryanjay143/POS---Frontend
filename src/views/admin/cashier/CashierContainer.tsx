import ListOfCashier from "./layouts/ListOfCashier"


function CashierContainer() {
  return (
    <div className='flex flex-col w-full overflow-hidden animation-fadeIn'>
      <ListOfCashier />
    </div>
  )
}

export default CashierContainer