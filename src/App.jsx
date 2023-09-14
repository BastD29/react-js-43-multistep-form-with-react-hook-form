import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/state";

import { Contact } from "./components/Steps/Contact";
import { About } from "./components/Steps/About";
import { Education } from "./components/Steps/Education";
import { Confirm } from "./components/Steps/Confirm";
import { Stepper } from "./components/Steps/Stepper";

export default function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Stepper />
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}
