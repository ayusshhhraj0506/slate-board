'use client';
import { useEffect } from 'react';
import Header from './_components/Header';
import Hero from './_components/Hero';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Features } from './_components/Features';
import { CTA } from './_components/CTA';
import { Contact } from './_components/Contact';
import { GitStar } from './_components/GitStart';
import { MacbookScrollDemo } from './_components/MacbookScroll';
export default function Home() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div
      style={{
        backgroundImage:
          'radial-gradient(rgba(255,255,255,0.25) 0.5px, transparent 0.5px)',
        backgroundSize: '18px 18px',
      }}
    >
      <Header />
      <Hero />
      <Features />
      <MacbookScrollDemo />
      {/* <Features2 /> */}
      {/* <Pricing /> */}
      <GitStar />
      <CTA />
      <Contact />
    </div>
  );
}
