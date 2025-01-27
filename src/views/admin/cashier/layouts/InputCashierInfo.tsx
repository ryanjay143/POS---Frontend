import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from 'react';


function InputCashierInfo() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [gender, setGender] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const [isExtensionEnabled, setIsExtensionEnabled] = useState(false);

  const handleGenderChange = (value: any) => {
    setGender(value);
    if (value === 'male') {
      setIsExtensionEnabled(true);
    } else {
      setIsExtensionEnabled(false);
    }
  };

  useEffect(() => {
    const generateAccountNo = () => {
      const randomAccountNo = 'ACC-' + Math.floor(Math.random() * 1000000);
      setAccountNo(randomAccountNo);
      console.log(randomAccountNo);
    };

    generateAccountNo(); 


    const defaultPassword = generatePassword(); // Generate the initial default password
    setGeneratedPassword(defaultPassword);
  }, []);

  
  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomPassword = '';
    const length = 12; // Set desired password length (10 or more)

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomPassword += characters[randomIndex];
    }

    return randomPassword;
  };


  return (
    <div className='ml-72 md:ml-0 gap-4 w-xl mr-4 md:mr-0 md:p-5 m-5 rounded-md  '>
        <Card className='border border-primary p-5 w-full'>
          <div>
          <Label className='text-primary text-3xl md:text-xl'>Account Information</Label>
             <div className='grid grid-cols-4 md:grid-cols-2 gap-4 mt-3'>
                <div>
                  <Label className='text-primary'>Account No.</Label>
                  <Input className='border border-primary' placeholder='Enter account number' value={accountNo} readOnly />
                </div>
              
                <div>
                  <Label className='text-primary'>Username</Label>
                  <Input className='border border-primary' placeholder='Enter username' />
                </div>

                <div>
                  <Label className='text-primary'>Email</Label>
                  <Input className='border border-primary' type='email' placeholder='Enter email' />
                </div>

                
                <div className='grid grid-cols-2 gap-2'>
                <Label className='text-primary'>Default Password</Label>
                  <Input
                    className='border border-primary col-span-2'
                    value={generatedPassword}
                    placeholder='Click "Generate" to create a password'
                  />
                  <Button
                    className='col-span-2 text-accent'
                    onClick={() => setGeneratedPassword(generatePassword())}
                  >
                    Generate Password
                  </Button>
                </div>

                {/* <div>
                  <Label className='text-primary'>Confirm Password</Label>
                  <Input className='border border-primary' placeholder='Re-Enter password' />
                </div> */}
             </div>
          </div>
            
            <div className='mt-5'>
            <Label className='text-primary text-3xl md:text-xl'>Personal Information</Label>
              <div className='grid grid-cols-4 md:grid-cols-2 gap-4 mt-3'>
                  <div>
                    <Label className='text-primary'>First Name</Label>
                    <Input className='border border-primary' placeholder='Enter first name' />
                  </div>
                
                  <div>
                    <Label className='text-primary'>Last Name</Label>
                    <Input className='border border-primary' placeholder='Enter last name' />
                  </div>

                  <div>
                    <Label className='text-primary'>Middle name</Label>
                    <Input className='border border-primary' placeholder='Enter middle name' />
                  </div>

                  <div>
                  <Label className='text-primary'>Gender</Label>
                  <Select onValueChange={handleGenderChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>

                  </div>

                  <div>
                  <Label className='text-primary'>Extension name</Label>
                  <Select disabled={!isExtensionEnabled}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select extension name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jr">Jr.</SelectItem>
                      <SelectItem value="sr">Sr.</SelectItem>
                      <SelectItem value="iii">III</SelectItem>
                    </SelectContent>
                  </Select>

                  </div>
  
                  <div>
                    <Label className='text-primary'>Phone No.</Label>
                    <Input className='border border-primary' placeholder='Enter phone number' />
                  </div>
  
                  <div>
                    <Label className='text-primary'>Address</Label>
                    <Input className='border border-primary' placeholder='Enter address' />
                  </div>

                  <div>
                    <Label className='text-primary'>Birthdate</Label>
                    <Input className='border border-primary' type='date' />
                  </div>

                  <div>
                    <Label className='text-primary'>Photo</Label>
                    <Input className='border border-primary' id="picture" type="file" />
                  </div>

                  <div>
                    <Label className='text-primary'>Date hired</Label>
                    <Input className='border border-primary' type='date' defaultValue={today}/>
                  </div>

                  <div>
                  <Label className='text-primary'>Religion</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select religion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="roman_catholic">Roman Catholic</SelectItem>
                      <SelectItem value="christianity">Christian</SelectItem>
                      <SelectItem value="sda">Seventh day Adventist</SelectItem>
                      <SelectItem value="inc">Iglesia ni Cristo</SelectItem>
                      <SelectItem value="islam">Islam</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  </div>
              </div>
            </div>

            <div className='mt-10'>
            <Label className='text-primary text-3xl md:text-xl'>Emergency Contact</Label>
              <div className='grid grid-cols-3 md:grid-cols-2 gap-4 mt-3'>
                  <div>
                    <Label className='text-primary'>Name</Label>
                    <Input className='border border-primary' placeholder='Enter name' />
                  </div>
                
                  <div>
                    <Label className='text-primary'>Contact number</Label>
                    <Input className='border border-primary' placeholder='Enter number' />
                  </div>

                 

                  <div>
                  <Label className='text-primary'>Relation</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select relation" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="sister">Sister</SelectItem>
                      <SelectItem value="brother">Brother</SelectItem>
                      <SelectItem value="son">Son</SelectItem>
                      <SelectItem value="daughter">Daughter</SelectItem>
                      <SelectItem value="grandmother">Grandmother</SelectItem>
                      <SelectItem value="grandfather">Grandfather</SelectItem>
                      <SelectItem value="aunt">Aunt</SelectItem>
                      <SelectItem value="uncle">Uncle</SelectItem>
                      <SelectItem value="cousin">Cousin</SelectItem>
                      <SelectItem value="nephew">Nephew</SelectItem>
                      <SelectItem value="niece">Niece</SelectItem>
                      <SelectItem value="partner">Partner</SelectItem>
                      <SelectItem value="spouse">Spouse</SelectItem>
                      <SelectItem value="guardian">Guardian</SelectItem>
                    </SelectContent>
                  </Select>

                  </div>
              </div>
            </div>

             
          
           <div className='flex mt-10 justify-end'>
            <Button className='bg-primary text-accent md:w-full md:mt-0' type='button'>
               <FontAwesomeIcon icon={faArrowRight}/> Submit
            </Button>
           </div>
          
    
            
           
          
        </Card>
    </div>
  )
}

export default InputCashierInfo