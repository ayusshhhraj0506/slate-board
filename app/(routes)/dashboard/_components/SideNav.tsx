import React, { useContext, useEffect, useState } from 'react';
import SideNavTopSection, { TEAM } from './SideNavTopSection';
import SideNavBottomSection from './SideNavBottomSection';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { FilesListContext } from '@/app/_context/FilesListContext';

function SideNav() {
  const { user }: any = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const convex = useConvex();
  const [totalFiles, setTotalFiles] = useState<number>();
  const { fileList_, setFileList_ } = useContext(FilesListContext);

  const getFiles = async (teamId: string) => {
    const result = await convex.query(api.files.getFiles, {
      teamId: teamId,
    });
    console.log(result);
    setFileList_(result);
    setTotalFiles(result?.length);
  };

  useEffect(() => {
    const teamId = activeTeam?._id;
    if (teamId) {
      getFiles(teamId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTeam?._id]);

  const onFileCreate = (fileName: string) => {
    const teamId = activeTeam?._id;
    if (!teamId) {
      toast.error('Please select a team first');
      return;
    }
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: teamId,
      createBy: user?.email || '',
      archive: false,
      document: '',
      whiteboard: '',
    }).then(
      (resp) => {
        if (resp) {
          getFiles(teamId);
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
          <SideNavBottomSection
            totalFiles={totalFiles}
            onFileCreate={onFileCreate}
          />
        </div>
      </div>
    </>
  );
}

export default SideNav;
