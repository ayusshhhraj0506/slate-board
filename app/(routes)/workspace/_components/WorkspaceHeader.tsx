import { Button } from '@/components/ui/button';
import { Link, Save } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function WorkspaceHeader({ onSave }: any) {
  return (
    <div className="p-3 border-b border-neutral-500 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src={'/logo/slate-board-1.png'}
          alt="logo"
          width={50}
          height={50}
        />
        <h2>File Name</h2>
      </div>
      <div className="flex gap-4 items-center">
        <Button
          onClick={() => onSave()}
          className="h-8 text-[12px] gap-2 bg-green-600 hover:bg-green-700"
        >
          Save <Save className="h-4 w-4" />
        </Button>
        <Button className="h-8 text-[12px] gap-2 bg-orange-600 hover:bg-orange-700">
          Share <Link className="h-4 w-4" />{' '}
        </Button>
      </div>
    </div>
  );
}

export default WorkspaceHeader;
