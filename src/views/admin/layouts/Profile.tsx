import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu'
import { Avatar, AvatarImage } from '../../../components/ui/avatar'
import { PersonStandingIcon, LogOutIcon } from 'lucide-react'

function Profile() {
  return (
   <>
    <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' alt='profile' className='rounded-full  h-12 w-12 border border-border object-cover' />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-10">
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <div className="flex items-center gap-2 text-foreground cursor-pointer">
                  <PersonStandingIcon className="w-5 h-5 text-foreground" /> View Profile
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center gap-2 text-red-600 cursor-pointer">
                  <LogOutIcon className="w-5 h-5 text-red-600" /> Logout
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
   </>
  )
}

export default Profile