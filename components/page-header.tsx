import Image from 'next/image'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b">
        <div className="flex h-14 items-center justify-between">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={200}
          />

          <div>
            <SignedOut>
              <SignInButton>
                <Button
                  variant="outline"
                  className="bg-black text-white rounded-xl"
                >
                Sign In
              </Button>
              </SignInButton>

              <SignUpButton>
                <Button
                  variant="outline"
                  className="bg-black text-white rounded-xl"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader;
