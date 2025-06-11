import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className="top-0 fixed w-full bg-gray-800 text-white backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center h-17 my-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </Link>
        <div>
          <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="secondary">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header
