
import dynamic from "next/dynamic";
import "@excalidraw/excalidraw/index.css";
import { LoadScene, SaveToActiveFile, ToggleTheme } from "@excalidraw/excalidraw/components/main-menu/DefaultItems";
import { MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { FILE } from "../../dashboard/_components/FileList";
import { useEffect, useState } from "react";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);
export default function Canvas({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FILE }) {

  const [whiteBoardData, setWhiteBoardData] = useState<any>()
  const updateWhiteboard = useMutation(api.files.updateWhiteboard);
  const saveWhiteBoard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData),
    }).then(resp => console.log(resp))
  }

  useEffect(() => {
    if (onSaveTrigger) {
      saveWhiteBoard();
    }
  }, [onSaveTrigger, saveWhiteBoard])

  if (!fileData) return null;

  return (
    <Excalidraw
      theme='light'
      initialData={{
        elements: fileData?.whiteboard && JSON.parse(fileData?.whiteboard)
      }}
      onChange={(excalidrawElements, appState, files) =>
        setWhiteBoardData(excalidrawElements)}
      UIOptions={{
        canvasActions: {
          saveToActiveFile: false,
          loadScene: false,
          export: false,
          toggleTheme: false

        }
      }}
    >
      <MainMenu>
        <MainMenu.DefaultItems.ClearCanvas />
        <MainMenu.DefaultItems.SaveAsImage />
        <MainMenu.DefaultItems.ChangeCanvasBackground />
      </MainMenu>
      <WelcomeScreen>
        <WelcomeScreen.Hints.MenuHint />
        <WelcomeScreen.Hints.HelpHint />
        <WelcomeScreen.Hints.ToolbarHint />
        <WelcomeScreen.Center>
          <WelcomeScreen.Center.Heading>
            Diagram Made Simple
          </WelcomeScreen.Center.Heading>
          <WelcomeScreen.Center.Menu>
            <WelcomeScreen.Center.MenuItemHelp />
          </WelcomeScreen.Center.Menu>
        </WelcomeScreen.Center>
      </WelcomeScreen>
    </Excalidraw>
  );
}