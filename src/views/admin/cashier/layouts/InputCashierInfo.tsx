import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { faUserSlash, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function InputCashierInfo() {
  return (
    <div className='ml-72 md:ml-0 gap-4 w-xl mr-4 md:mr-0 md:p-5 m-5 rounded-md  '>
        <Card className='border border-primary p-5 w-full'>
            <Label className='text-primary text-3xl'>Account Information</Label>
            <hr className="w-full border-accent md:mt-5 mt-4 " />
            <Input placeholder='Username' className='mt-3 w-96 h-14' />
            <Input placeholder='Email' className='mt-3 w-96 h-14' />
            <Input placeholder='Password' className='mt-3 w-96 h-14' />
            <Input placeholder='Confirm Password' className='mt-3 w-96 h-14' />
            <Input placeholder='Active' disabled className='text-green-500 mt-3 w-96 h-14' />
           
            <Button className='mt-4' variant='secondary'>
                <FontAwesomeIcon icon={faUserTag} className='mr-2' />
                Add Cashier
            </Button>
            <Button className='mt-3'>
                <FontAwesomeIcon icon={faUserSlash} className='mr-2' />
                Delete Cashier
            </Button>
        </Card>
    </div>
  )
}

export default InputCashierInfo