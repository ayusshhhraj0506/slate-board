"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useMutation } from 'convex/react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';

function CreateTeam() {
  const [teamName , setTeamName] = useState('')
  const createTeam = useMutation(api.teams.createTeam);
  const {user}:any = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam=()=>{
     createTeam({
      teamName:teamName,
      createdBy:user?.email
     }).then(resp => {
        console.log(resp)
        if(resp){
          router.push('/dashboard');
          toast.success('Team Created Successfully');
        }
     })
  }
  return (
    <section className='bg-black text-white h-screen'>
      <div className='px-6 md:px-16'>
        <Image src="/logo/slate-board-1.png" alt="logo" width={200} height={200} />
      </div>
      <div className='flex flex-col items-center mt-8'>
        <h1 className='font-bold text-[40px] py-3'>What Should we call your team?</h1>
        <p className='text-neutral-500'>You can always change this later from your team settings</p>
        <div className='mt-7 w-[40%]'>
          <label className='text-neutral-400'>Team Name</label>
          <Input onChange={(e)=> setTeamName(e.target.value)} placeholder='Enter Your Team Name...' className='mt-3' />
        </div>
        <Button onClick={() => createNewTeam()} disabled={!(teamName&&teamName.length>0)} className='bg-orange-600 mt-9 w-[40%] hover:bg-orange-700'>Create Team</Button>
      </div>
    </section>
  )
}
 
export default CreateTeam
