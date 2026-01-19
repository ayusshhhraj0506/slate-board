import { Button } from '@/components/ui/button';
import { Archive, Flag, Github, Plus } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

function SideNavBottomSection({ onFileCreate }: any) {
  const menuList = [
    {
      id: 1,
      name: 'Getting Started',
      icon: Flag,
      path: '',
    },
    {
      id: 2,
      name: 'Github',
      icon: Github,
      path: '',
    },
    {
      id: 3,
      name: 'Archive',
      icon: Archive,
      path: '',
    },
  ];
  const [fileInput, setFileInput] = useState('');
  return (
    <div>
      {menuList.map((menu, index) => (
        <h2
          key={index}
          className="flex gap-2 p-1 px-2 text-[14px] hover:bg-neutral-600 rounded-md cursor-pointer"
        >
          <menu.icon className="h-5 w-5" />
          {menu.name}
        </h2>
      ))}
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button className="w-full bg-orange-600 hover:bg-orange-500 mt-3 justify-start">
            New File <Plus className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-black border border-neutral-600">
          <DialogHeader>
            <DialogTitle className="text-white">Create New File</DialogTitle>
            <DialogDescription>
              <Input
                onChange={(e) => setFileInput(e.target.value)}
                placeholder="Write File Name"
                className="mt-5"
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                onClick={() => onFileCreate(fileInput)}
                disabled={!(fileInput && fileInput.length > 3)}
                type="button"
                className="bg-orange-600 hover:bg-orange-500"
              >
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="h-4 w-full bg-neutral-300 rounded-full mt-5">
        <div className="h-4 w-[40%] bg-green-600 rounded-full"></div>
      </div>
      <div>
        <h2 className="text-[12px] mt-3">
          <strong>1</strong> out of <strong>5</strong> files used
        </h2>
        <h2 className="text-[10px] mt-1">
          <span className="underline">Upgrade</span> your plan for unlimited
          features.
        </h2>
      </div>
    </div>
  );
}

export default SideNavBottomSection;
