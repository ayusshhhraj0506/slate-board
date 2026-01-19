import React, { useState } from 'react';
import SideNavTopSection, { TEAM } from './SideNavTopSection';
import SideNavBottomSection from './SideNavBottomSection';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';

function SideNav() {
  const { user }: any = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const onFileCreate = (fileName: string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createBy: user?.email,
      archive: false,
      document: '',
      whiteboard: '',
    }).then(
      (resp) => {
        if (resp) {
          toast.success('File Created Successfully!');
        }
      },
      (e) => {
        toast.error('Something went wrong', e);
      }
    );
  };
  return (
    <>
      <div className="flex flex-col bg-black h-screen fixed w-64 border-r border-neutral-600 p-6">
        <div className="flex-1">
          <SideNavTopSection
            user={user}
            setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
          />
        </div>
        <div>
          <SideNavBottomSection onFileCreate={onFileCreate} />
        </div>
      </div>
    </>
  );
}

export default SideNav;
