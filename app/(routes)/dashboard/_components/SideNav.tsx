import React from 'react';
import SideNavTopSection from './SideNavTopSection';
import SideNavBottomSection from './SideNavBottomSection';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

function SideNav() {
  const { user }: any = useKindeBrowserClient();

  return (
    <>
      <div className="flex flex-col bg-black h-screen fixed w-64 border-r border-neutral-600 p-6">
        <div className="flex-1">
          <SideNavTopSection user={user} />
        </div>
        <div>
          <SideNavBottomSection />
        </div>
      </div>
    </>
  );
}

export default SideNav;
