import { Navbar } from "@/components/Navbar";
import { Conversation } from "@/components/Conversation";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Navbar />
      <Conversation />
    </div>
  );
}

export default App;
