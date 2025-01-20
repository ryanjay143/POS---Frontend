import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { faArrowLeft, faArrowRight, faEye, faPen, faSearch, faSignOutAlt, faUsers, faUserSlash, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function TableUI() {
  return (
    <div className='ml-72 md:ml-0 gap-4 w-xl mr-4 md:mr-0 md:p-5 mt-5 rounded-md min-h-[80px] '>
        <Card className='border border-primary p-5 w-full'>
          <div className='grid grid-cols-3 gap-4'>
            <Button className='bg-white border border-primary'>
              <FontAwesomeIcon className='text-[#22c55e]' icon={faUserTag} />
              List of Active Cashiers
            </Button>
            <Button className='bg-white border border-primary'>
              <FontAwesomeIcon className='text-[#ef4444]' icon={faUserSlash} />
              List of Expired Cashiers
            </Button>
            <Button className='bg-white border border-primary'>
              <FontAwesomeIcon icon={faSignOutAlt} />
              List of Recent Logout
            </Button>
          </div>
        
        <div className='flex justify-between items-center gap-4 md:flex-col mt-10'>
          <div className='flex-1'>
            <Label className='text-lg font-bold me-2'>List of Cashiers</Label>
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className='flex justify-end items-center'>
            <Input
              placeholder='Search'
              className='border border-primary w-64 md:w-72 pr-2 pl-2'
            />
            <FontAwesomeIcon 
                icon={faSearch}
                className={'absolute right-12 md:right-20 xxs:right-20 md:top-24 text-muted-foreground'}
              />
          </div>
        </div>

        <Table className='border border-primary mt-4'>
          <TableCaption>
            {/* {filteredData.length === 0 && (
              <Label className='text-center text-lg mt-4'>No sellers available.</Label>
            )} */}
          </TableCaption>
          <TableHeader>
            <TableRow className='border border-primary'>
              <TableHead className='border border-primary bg-primary text-center text-black text-base'>
                Fullname
              </TableHead>
              <TableHead className='border border-primary bg-primary text-center text-black text-base'>
                Status
              </TableHead>
              <TableHead className='border border-primary bg-primary text-center text-black text-base'>
                Last Login
              </TableHead>
              <TableHead className='border border-primary bg-primary text-center text-black text-base'>
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='border border-primary'>
              <TableRow className='border border-primary text-center hover:bg-muted/10'>
                <TableCell className='border border-primary text-center'>Flora S. Amigan</TableCell>
                <TableCell className='border border-primary text-center text-[#22c55e]'>Active</TableCell>
                <TableCell className='border border-primary text-center'>January 18, 2025, 9:00 AM</TableCell>
                <TableCell className='border border-primary text-center'>
                  <div className='space-x-2 md:space-x-0 slg:space-x-0 md:space-y-1'>
                    {/* View details */}
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button className='rounded-full'>
                          <FontAwesomeIcon icon={faEye} />
                          </Button>                    
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>View Details</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Personal Info</DropdownMenuItem>
                          <DropdownMenuItem>View Transaction</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Edit */}
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button className='rounded-full'>
                          <FontAwesomeIcon icon={faPen} />
                          </Button>                    
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>View Details</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Personal Info</DropdownMenuItem>
                          <DropdownMenuItem>View Transaction</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>

        <div className='flex justify-end mt-4 items-center md:justify-center w-full gap-4'>
          <Button
            >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
            <span>
              Page 1 of 11
            </span>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
        </div>
        </Card>
    </div>
  )
}

export default TableUI