'use client';
import React, { useEffect, useState, use } from 'react';
import WorkspaceHeader from '../_components/WorkspaceHeader';
import Editor from '../_components/Editor';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { FILE } from '../../dashboard/_components/FileList';
import Canvas from '../_components/Canvas';
import Image from 'next/image';

function Workspace({ params }: { params: Promise<{ fileId: string }> }) {
  const { fileId } = use(params);

  const [triggerSave, setTriggerSave] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE>();

  const getFileId = async () => {
    if (!fileId) return;
    const result = await convex.query(api.files.getFileById, {
      _id: fileId as Id<'files'>,
    });
    setFileData(result as FILE);
  };

  useEffect(() => {
    console.log('FILE ID', fileId);
    if (fileId) {
      getFileId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileId]);

  if (!fileData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white"><Image src="/logo/logo-2.png" alt="logo" width={300} height={300} /></p>
      </div>
    );
  }

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="bg-black text-white h-full min-h-screen" style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.25) 0.5px, transparent 0.5px)',
          backgroundSize: '18px 18px',
        }}>
          <Editor
            onSaveTrigger={triggerSave}
            fileId={fileId}
            fileData={fileData}
          />
        </div>

        {/* Whiteboard */}
        <div className=" h-[calc(100vh-64px)] overflow-y-auto border-l border-neutral-500">
          <Canvas onSaveTrigger={triggerSave}
            fileId={fileId}
            fileData={fileData} />
        </div>
      </section>
    </div>
  );
}

export default Workspace;
