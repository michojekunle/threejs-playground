import ChairCanvas from "./components/chair-canvas";
import GlassChair from "./components/glass-chair";
import LearnCanvas from "./components/learn-canvas";
import LivingRoomCanvas from "./components/living-room-canvas";
import TestCanvas from "./components/test-canvas";

function App() {
  return (
    // <GlassChair/>
    // <ChairCanvas/>
    <>
      <LivingRoomCanvas />
    </>
    // <div id="canvas-container" className="flex items-center justify-center min-h-screen w-full">

    //   <div className="max-w-md mx-auto h-96 flex flex-col">
    //     <h1 className="text-4xl mb-5 font-bold text-center">3D Model Viewer</h1>
    //     <div className="w-full flex-1">
    //       <TestCanvas/>
    //     </div>
    //   </div>

    //   <div className="max-w-md mx-auto h-96 flex flex-col">
    //     <h1 className="text-4xl mb-5 font-bold text-center">(Learn RTF/RTD)</h1>
    //     <div className="w-full flex-1">
    //       <LearnCanvas/>
    //     </div>
    //   </div>
    //   {/* <Confirmation/> */}
    // </div>
  );
}

export default App;
