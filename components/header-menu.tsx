'use client';

import { useState } from 'react';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';

import { Menu, X, Folder, CreditCard } from 'lucide-react';

const HeaderMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(prevOpen => !prevOpen);
  }

  return (
    <DropdownMenu open={open} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
        <Button className="mr-4" variant="secondary">
          {
            open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />
          }
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link
            href="/dashboard"
            className="flex items-center"
          >
            <Folder className="w-4 h-4 mr-2" />
            <span>Projects</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/payments"
            className="flex items-center"
          >
            <CreditCard className="w-4 h-4 mr-2" />
            <span>Billing</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};

export default HeaderMenu;
