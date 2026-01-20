'use client';

import React, { useEffect, useState, use } from 'react';
import WorkspaceHeader from '../_components/WorkspaceHeader';
import Editor from '../_components/Editor';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';

function Workspace({ params }: { params: Promise<{ fileId: string }> }) {
  const { fileId } = use(params);

  const [triggerSave, setTriggerSave] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE | any>();

  const getFileId = async () => {
    const result = await convex.query(api.files.getFileById, {
      _id: fileId,
    });
    setFileData(result);
  };
  useEffect(() => {
    console.log('FILE ID', fileId);
    if (fileId) getFileId();
  }, [fileId]);

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="bg-black text-white h-screen">
          <Editor
            onSaveTrigger={triggerSave}
            fileId={fileId}
            fileData={fileData}
          />
        </div>

        {/* Whiteboard */}
        <div className="bg-red-500 h-screen">
          <h1>Whiteboard</h1>
        </div>
      </section>
    </div>
  );
}

export default Workspace;
