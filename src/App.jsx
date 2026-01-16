import Section  from "./components/Section"
import { cvData } from "./utils/cv-data";
function App() {

  return (
    <>
     <h1>My Resume</h1>
     {Object.entries(cvData).map(([key, value]) => (
      <Section 
        name={key}
        key={key}
        cvData={value}
      />
     ))}

    </>
  )
}

export default App
