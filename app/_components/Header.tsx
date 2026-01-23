import { Button } from '@/components/ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import { Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <header className=" font-mono">
      <div className="mx-auto flex h-16 rounded-full mt-5 max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <Image
          src="/logo/logo-2.png"
          alt="logo"
          width={150}
          height={150}
          className='p-1 rounded-full'
        />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-orange-600 hover:underline-offset-4 hover:underline"
                  href="#"
                >
                  {' '}
                  Home{' '}
                </a>
              </li>


              <li>
                <a
                  className="text-white transition hover:text-orange-600 hover:underline-offset-4 hover:underline"
                  href="#"
                >
                  {' '}
                  Features{' '}
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-orange-600 hover:underline-offset-4 hover:underline"
                  href="#"
                >
                  {' '}
                  How It Works{' '}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-orange-600 hover:underline-offset-4 hover:underline"
                  href="#"
                >
                  {' '}
                  About Us{' '}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-orange-600 hover:underline-offset-4 hover:underline"
                  href="#"
                >
                  {' '}
                  Contact Us{' '}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div
                className="block rounded-xl  px-5 py-2.5 text-sm font-medium 
            text-white border  border-orange-600 transition "
              >
                <LoginLink postLoginRedirectURL="/dashboard"> Sign In</LoginLink>
              </div>

              <div
                className="hidden rounded-xl bg-orange-600 
            px-5 py-2.5 text-sm font-medium
             text-white transition
              hover:bg-orange-500 sm:block"
              >
                <RegisterLink>Get Started</RegisterLink>
              </div>
              {/* <div>
                <Button className="bg-neutral-700 mt-1 rounded-xl hover:bg-neutral-800 border border-orange-600 ">
                  <Github className="h-5 w-5 text-orange-600 hover:bg-orange-600 hover:text-bg-neutral-600" />
                </Button>
              </div> */}
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
