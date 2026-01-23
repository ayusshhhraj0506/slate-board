import { FilesListContext } from '@/app/_context/FilesListContext';
import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import { Archive, MoreHorizontalIcon, Trash } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export interface FILE {
  _id: string;
  fileName: string;
  teamId: string;
  createBy: string;
  archive: boolean;
  document: string;
  whiteboard: string;
  _creationTime: number;
}

function FileList() {
  const { fileList_, setFileList_ } = useContext(FilesListContext);
  const [fileList, setFileList] = useState<any>();
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();
  useEffect(() => {
    fileList_ && setFileList(fileList_);
    console.log(fileList_);
  }, [fileList_]);
  return (
    <div className="mt-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-neutral-700">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-white">
              <th className="px-3 py-2 whitespace-nowrap">File Name</th>
              <th className="px-3 py-2 whitespace-nowrap">Created At</th>
              <th className="px-3 py-2 whitespace-nowrap">Edited</th>
              <th className="px-3 py-2 whitespace-nowrap">Author</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-700">
            {fileList?.map((file: FILE, index: number) => (
              <tr
                onClick={() => router.push('/workspace/' + file._id)}
                key={index}
                className="*:text-white *:first:font-medium hover:bg-neutral-900 cursor-pointer"
              >
                <td className="px-3 py-2 whitespace-nowrap capitalize">{file.fileName}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {moment(file._creationTime).format(' DD MMM YYYY')}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {moment(file._creationTime).format(' DD MMM YYYY')}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <Image
                    src={user?.picture}
                    alt="user"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontalIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="gap-3">
                        {' '}
                        <Archive className="h-4 w-4" /> Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-3">
                        {' '}
                        <Trash className="h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileList;
