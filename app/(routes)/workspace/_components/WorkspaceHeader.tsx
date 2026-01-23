import { Button } from '@/components/ui/button';
import { Link, Save } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function WorkspaceHeader({ onSave }: any) {
  return (
    <div className="p-1 border-b border-neutral-700 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src={'/logo/logo-2.png'}
          alt="logo"
          width={50}
          height={50}
        />
        <h2>file name</h2>
      </div>
      <div className="flex border border-neutral-600 rounded-sm overflow-hidden">
        <Button className="rounded-none border-0 border-r border-neutral-600 bg-neutral-900 hover:bg-neutral-700">
          Document
        </Button>
        <Button className="rounded-none border-0 border-r border-neutral-600 bg-neutral-700 hover:bg-neutral-700">
          Both
        </Button>
        <Button className="rounded-none border-0 bg-neutral-900 hover:bg-neutral-700">
          WhiteBoard
        </Button>
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
