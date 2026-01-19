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
  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);

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
          getFiles();
          toast.success('File Created Successfully!');
        }
      },
      (e) => {
        toast.error('Something went wrong', e);
      }
    );
  };

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });
    console.log(result);
    setFileList_(result);
    setTotalFiles(result?.length);
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
