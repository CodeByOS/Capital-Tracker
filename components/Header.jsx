import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { ChartNoAxesCombined, ListFilterPlus } from 'lucide-react'

const Header = () => {
  return (
    <div className="top-0 fixed w-full bg-transparent text-white backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-8 py-8 flex justify-between items-center h-17 my-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={170}
            height={40}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          {/* Links for authenticated users */}
          <SignedIn>
            {/* Link to the dashboard page */}
            <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
              <Button variant="secondary">
                <ChartNoAxesCombined />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            {/* Link to the transaction page */}
            <Link href={"/transaction/create"}>
              <Button className="flex items-center gap-2">
                <ListFilterPlus />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>

          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="secondary">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
                userButtonAvatarBox: 'h-10 w-10',
                userButtonAvatar: 'h-10 w-10 rounded-full',
              },
            }} />
          </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header
