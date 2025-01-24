import CashierNav from './layouts/CashierNav';
import InputCashierInfo from './layouts/InputCashierInfo';

function Addcashier() {


  // Navigate to the list of cashiers when the add button is clicked
  return (
    <div className='flex flex-col w-full overflow-hidden animation-fadeIn'>
      <CashierNav />
      <InputCashierInfo />
    </div>

    
  );
}

export default Addcashier;