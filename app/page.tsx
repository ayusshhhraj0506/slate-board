'use client';
import { useEffect } from 'react';
import Header from './_components/Header';
import Hero from './_components/Hero';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Features } from './_components/Features';
import { Features2 } from './_components/Features-2';
import { Pricing } from './_components/Pricing';
import { CTA } from './_components/CTA';
import { Contact } from './_components/Contact';
import { GitStar } from './_components/GitStart';

export default function Home() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Header />
      <Hero />
      <Features />
      {/* <Features2 /> */}
      {/* <Pricing /> */}
      <GitStar />
      <CTA />
      <Contact />
    </div>
  );
}
