'use client';
import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';

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
        level: 2,
      },
      id: '1234',
      type: 'header',
    },
  ],
  version: '2.8.1',
};

function Editor() {
  const ref = useRef<EditorJS | null>(null);
  const [document, setDocument] = useState(rawDocument);
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
      data: document,
    });
    ref.current = editor;
  };
  useEffect(() => {
    initEditor();
  }, []);
  return (
    <div>
      <div id="editorjs" className="ml-20"></div>
    </div>
  );
}

export default Editor;
