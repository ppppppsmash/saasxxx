import Image from 'next/image';

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import HeaderMenu from './header-menu';

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b
      bg-white/20 backdrop-blur-md">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto">
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
                  className="bg-black text-white"
                >
                Sign In
              </Button>
              </SignInButton>

              <SignUpButton>
                <Button
                  variant="outline"
                  className="bg-black text-white"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader;
