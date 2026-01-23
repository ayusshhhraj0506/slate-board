import React, { useEffect, useState } from 'react';
import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from 'lucide-react';
import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { Separator } from '@/components/ui/separator';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export interface TEAM {
  createdBy: string;
  teamName: string;
  _id: string;
}
function SideNavTopSection({ user, setActiveTeamInfo }: any) {
  const menu = [
    {
      id: 1,
      name: 'Create Team Name',
      path: '/teams/create',
      icon: Users,
    },
    {
      id: 2,
      name: 'Settings',
      path: '',
      icon: Settings,
    },
  ];

  const router = useRouter();
  const convex = useConvex();
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const [teamList, setTeamList] = useState<TEAM[]>([]);

  useEffect(() => {
    activeTeam && setActiveTeamInfo(activeTeam);
  }, [activeTeam]);

  const getTeamLists = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    console.log(result);
    setTeamList(result);
    setActiveTeam(result[0]);
  };

  useEffect(() => {
    user && getTeamLists();
  }, [user]);

  const onMenuClick = (item: any) => {
    if (item.path) {
      router.push(item.path);
    }
  };
  return (
    <section>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-2 hover:bg-neutral-800 p-1 rounded-md cursor-pointer">
            <Image
              src="/logo/logo-2.png"
              alt="logo"
              width={50}
              height={50}
              className='rounded-full'
            />
            <h2 className="flex gap-2 items-center font-bold text-[17px]">
              {activeTeam?.teamName}
              <ChevronDown className='w-3 h-3' />{' '}
            </h2>
          </div>
        </PopoverTrigger>
        <PopoverContent className="ml-7 p-4 bg-neutral-900 border border-neutral-600 text-white">
          <div>
            {teamList?.map((team, index) => (
              <h2
                onClick={() => setActiveTeam(team)}
                className={`p-2 hover:bg-neutral-600 rounded-md mb-1 cursor-pointer ${activeTeam?._id === team._id && 'bg-orange-600 text-white hover:bg-orange-600'}`}
                key={index}
              >
                {team.teamName}
              </h2>
            ))}
          </div>
          <Separator className="mt-2 mb-1 bg-neutral-700" />
          <div>
            {menu.map((item, index) => (
              <h2
                onClick={() => onMenuClick(item)}
                key={index}
                className="flex gap-2 items-center p-2 hover:bg-neutral-600 rounded-md text-sm cursor-pointer"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </h2>
            ))}
            <LogoutLink>
              <h2 className="flex gap-2 items-center p-2 hover:bg-red-600 rounded-md text-sm cursor-pointer">
                <LogOut className="h-4 w-4" />
                Logout
              </h2>
            </LogoutLink>
          </div>
          <Separator className="mt-2 bg-neutral-700" />
          {user && (
            <div className="mt-2 flex gap-2 items-center">
              <Image
                src={user?.picture}
                alt="user"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div>
                <h2 className="text-[14px] font-bold">
                  {user?.given_name} {user?.family_name}
                </h2>
                <h2 className="text-[12px] text-neutral-500">{user?.email}</h2>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
      <div>
        <Button
          variant="outline"
          className="w-full justify-start gap-2 font-bold mt-8 border border-neutral-700 bg-neutral-900 hover:bg-neutral-700 hover:text-white text-white"
        >
          <LayoutGrid className="h-5 w-5" />
          All Files
          <span className='ml-auto font-extralight'>
            A
          </span>
        </Button>
      </div>
    </section>
  );
}

export default SideNavTopSection;
