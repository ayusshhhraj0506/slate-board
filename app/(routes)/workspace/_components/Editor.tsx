'use client';
import React, { useEffect, useRef, useState } from 'react';
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
import { toast } from 'sonner';
import { FILE } from '../../dashboard/_components/FileList';

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      data: {
        text: 'Document Name',
        level: 2,
      },
      id: '123',
      type: 'header',
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
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) {
  const editorRef = useRef<any>(null);
  const updateDocument = useMutation(api.files.updateDocument);
  const [document, setDocument] = useState(rawDocument);

  // const onSaveDocument = () => {
  //   if (!editorRef.current) {
  //     ref.current
  //       .save()
  //       .then((outputData) => {
  //         console.log('Article data: ', outputData);
  //         updateDocument({
  //           _id: fileId,
  //           document: JSON.stringify(outputData),
  //         }).then(
  //           (resp) => {
  //             toast.success('Document Updated Successfully');
  //           },
  //           (e) => {
  //             toast.error('Something went wrong', e);
  //           }
  //         );
  //       })
  //       .catch((error) => {
  //         console.log('Saving failed: ', error);
  //       });
  //   }
  // };

  const onSaveDocument = async () => {
    if (!editorRef.current) {
      console.log('Editor not ready yet');
      return;
    }

    try {
      const outputData = await editorRef.current.save(); // ✅ now valid
      console.log('Article data:', outputData);

      updateDocument({
        _id: fileId,
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
    onSaveDocument();
  }, [onSaveTrigger]);

  const initEditor = () => {
    const editor = new EditorJS({
      tools: {
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
            placeholder: 'Enter a header',
            levels: [2, 3, 4],
            defaultLevel: 3,
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
          type: 'code',
          data: {
            code: 'body {\n font-size: 14px;\n line-height: 16px;\n}',
          },
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
      },
      holder: 'editorjs',
      data: fileData?.document ? JSON.parse(fileData.document) : rawDocument,
    });
    editorRef.current = editor;
  };
  useEffect(() => {
    fileData && initEditor();
  }, [fileData]);

  return (
    <div>
      <div id="editorjs" className="ml-20"></div>
    </div>
  );
}

export default Editor;
