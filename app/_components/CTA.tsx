import React from 'react';
import { cn } from '@/lib/utils';
import { BackgroundLines } from '@/components/aceternity/background-lines';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Waitlist1Props {
  className?: string;
}

const CTA = ({ className }: Waitlist1Props) => {
  return (
    <section
      className={cn(
        'flex h-full font-mono min-h-screen  w-screen items-center justify-center overflow-hidden py-32',
        className
      )}
    >
      <BackgroundLines className="container bg-black flex w-full flex-col items-center justify-center px-4 md:h-full">
        <h2 className="relative z-20 py-2 font-mono text-center text-white text-5xl font-semibold tracking-tighter md:py-10 lg:text-8xl">
          Join The{' '}
          <span className=" font-extrabold text-orange-600">Slate</span>
        </h2>
        <p className="text-md mx-auto max-w-xl text-center text-neutral-500 lg:text-lg">
          Leave your email and collaborate on building a smarter workspace.
        </p>
        <div className="relative z-20 mt-8 w-full max-w-xl mx-auto">
          <div className="flex w-full items-center gap-3 rounded-full p-1">
            <Input
              className="h-12 w-full rounded-xl border-none bg-neutral-800 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none active:ring-0 active:outline-0"
              placeholder="Enter your email"
            />
            <Button className="h-12 rounded-xl bg-white text-black hover:bg-white hover:text-orange-600 cursor-pointer">
              Create Together
            </Button>
          </div>
        </div>

        {/* <div className="mt-6 w-full max-w-xl mx-auto flex items-center gap-3 justify-center">
          <span className="inline-flex items-center -space-x-2.5">
            {Array.from({ length: 6 }).map((_, index) => (
              <Avatar key={index} className="h-8 w-8">
                <AvatarImage
                  src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar${index + 1}.png`}
                  alt="placeholder"
                />
              </Avatar>
            ))}
          </span>
          <p className="tracking-tight text-neutral-500 ml-2">
            +1000 people already joined
          </p>
        </div> */}
      </BackgroundLines>
    </section>
  );
};

export { CTA };
