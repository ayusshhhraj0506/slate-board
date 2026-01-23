import { Button } from '@/components/ui/button';
import { Archive, Flag, Github, Plus, Rocket } from 'lucide-react';
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
import Constant from '@/app/_constant/Constant';
import { toast } from 'sonner';

function SideNavBottomSection({ onFileCreate, totalFiles }: any) {
  const menuList = [
    {
      id: 1,
      name: 'Getting Started',
      icon: Flag,
      path: '',
      keyboard: "⌘ + K",
    },
    {
      id: 2,
      name: 'Github',
      icon: Github,
      path: '',
      keyboard: "⌘ + G",
    },
    {
      id: 3,
      name: 'Archive',
      icon: Archive,
      path: '',
      keyboard: "⌘ + Shift + A",
    },
  ];
  const [fileInput, setFileInput] = useState('');
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    if (totalFiles >= Constant.MAX_FREE_FILE) {
      toast.error('Max file limit reached | UPGRADE PLAN');
      return;
    }
    setOpen(true);
  };

  return (
    <div>
      {menuList.map((menu, index) => (
        <h2
          key={index}
          className="flex items-center gap-2 p-1 px-2 text-[14px] hover:bg-neutral-800 rounded-lg cursor-pointer"
        >
          <menu.icon className="h-5 w-5" />
          <span className="flex-1">{menu.name}</span>
          {menu.keyboard && (
            <span className="bg-neutral-700 rounded-lg px-2 py-0.5 text-[10px] font-mono">
              {menu.keyboard}
            </span>
          )}
        </h2>
      ))}
      <h2
        className="flex gap-2 p-1 px-2 text-[14px] hover:bg-neutral-800 rounded-lg cursor-pointer"
      >
        <Rocket className='h-5 w-5' />
        Help Us Improve
      </h2>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="w-full" asChild>
          <Button
            onClick={handleDialogOpen}
            className="w-full bg-orange-600 hover:bg-orange-700 mt-3 justify-start"
          >
            New File <Plus className="h-4 w-4 ml-auto" />
          </Button>
        </DialogTrigger>
        {totalFiles < Constant.MAX_FREE_FILE && (
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
                  onClick={() => {
                    onFileCreate(fileInput);
                    setFileInput('');
                    setOpen(false);
                  }}
                  disabled={!(fileInput && fileInput.length > 3)}
                  type="button"
                  className="bg-orange-600 hover:bg-orange-500"
                >
                  Create
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      <div className="h-4 w-full bg-neutral-300 rounded-full mt-5">
        <div
          className={`h-4  bg-green-600 rounded-full`}
          style={{ width: `${(totalFiles / 5) * 100}%` }}
        ></div>
      </div>
      <div>
        <h2 className="text-[12px] mt-3">
          <strong>{totalFiles}</strong> out of <strong>{Constant.MAX_FREE_FILE}</strong> files used
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
