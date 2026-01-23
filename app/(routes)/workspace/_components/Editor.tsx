'use client';
import React, { useEffect, useRef } from 'react';
// ts-ignore
import EditorJS from '@editorjs/editorjs';
// ts-ignore
import Header from '@editorjs/header';
// ts-ignore
import EditorjsList from '@editorjs/list';
// ts-ignore
import ImageTool from '@editorjs/image';
// ts-ignore
import CodeTool from '@editorjs/code';
// ts-ignore
import Paragraph from '@editorjs/paragraph';
// ts-ignore
import Quote from '@editorjs/quote';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { toast } from 'sonner';
import { FILE } from '../../dashboard/_components/FileList';

// const rawDocument = {
//   "time": 1550476186479,
//   blocks: [
//     {
//       data: {
//         text: 'Untitled File',
//         level: 1,
//       },
//       id: '123',
//       type: 'header',
//     },
//     {
//       data: {
//         level: 4,
//       },
//       id: '1234',
//       type: 'header',
//     },

//   ],
//   version: '2.8.1',
// };

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      id: '123',
      type: 'header',
      data: {
        text: 'Untitled File',
        level: 1,
      },
    },
    {
      data: {
        level: 4,
      },
      id: '1234',
      type: 'header',
    },
  ],
  version: '2.8.1',
};

function Editor({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: boolean;
  fileId: string;
  fileData: FILE;
}) {
  const editorRef = useRef<EditorJS | null>(null);
  const updateDocument = useMutation(api.files.updateDocument);


  const onSaveDocument = async () => {
    if (!editorRef.current) {
      console.log('Editor not ready yet');
      return;
    }

    try {
      const outputData = await editorRef.current.save(); // ✅ now valid
      console.log('Article data:', outputData);

      updateDocument({
        _id: fileId as Id<'files'>,
        document: JSON.stringify(outputData),
      }).then(
        () => toast.success('Document Updated Successfully'),
        () => toast.error('Something went wrong')
      );
    } catch (error) {
      console.log('Saving failed:', error);
    }
  };

  useEffect(() => {
    console.log('Trigger Value', onSaveTrigger);
    if (onSaveTrigger) {
      onSaveDocument();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSaveTrigger]);

  const initEditor = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tools: any = {
      List: {
        class: EditorjsList,
        inlineToolbar: true,
        config: {
          defaultStyle: 'unordered',
        },
      },
      header: {
        class: Header,
        shortcut: 'CMD+SHIFT+H',
        config: {
          placeholder: 'Type your note or document here',
          defaultLevel: 1,
        },
      },
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
          },
        },
      },
      code: {
        class: CodeTool,
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+O',
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: "Quote's author",
        },
      },
    };

    const editor = new EditorJS({
      tools,
      holder: 'editorjs',
      data: fileData?.document ? JSON.parse(fileData.document) : rawDocument,
    });
    editorRef.current = editor;
  };

  // useEffect(() => {
  //   if (fileData) {
  //     initEditor();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [fileData]);

  useEffect(() => {
    if (!fileData) return;
    if (editorRef.current) return;

    initEditor();
  }, [fileData]);


  return (
    <div>
      <div id="editorjs" className="ml-15"></div>
    </div>
  );
}

export default Editor;
