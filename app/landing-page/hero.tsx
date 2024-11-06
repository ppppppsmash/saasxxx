import Link from 'next/link';
import {
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { LogIn, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="grow">
      <div>
        <div>
          <h1>Collect your feedback seamlessly</h1>
          <p>Easily integrate Kurosawa and start collecting feedback today.</p>
        </div>
        <div>
          <SignedOut>
            <SignUpButton>
              <div className="flex gap-3">
                <Button>
                  <LogIn className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="https://github.com">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </SignedIn>
        </div>
      </div>
    </section>
  );
}

export default Hero;