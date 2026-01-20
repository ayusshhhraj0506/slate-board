import React from 'react';
import WorkspaceHeader from '../_components/WorkspaceHeader';
import Editor from '../_components/Editor';
import Header from '@editorjs/header';

function Workspace() {
  return (
    <div>
      <WorkspaceHeader />

      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="bg-black text-white h-screen">
          <Editor />
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
