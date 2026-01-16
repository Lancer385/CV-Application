import Section  from "./components/Section"
import { cvData } from "./utils/cv-data";
import { useImmer } from "use-immer";
function App() {
    const [data, setData] = useImmer(cvData);

    function handleInput(newInput, key, name, index){
      setData(draft => {
          if (Array.isArray(draft[name])){
            draft[name][index][key] = newInput;
          }
          else {
             draft[name][key] = newInput;
          }
      })
    }

  return (
    <>
     <h1>My Resume</h1>
     <Section
        name= 'generalInformation'
        data={data.generalInformation}
        handleInputChange={handleInput}
     />
     <Section
        name= 'education'
        data={data.education}
        handleInputChange={handleInput}
     />

    </>
  )
}

export default App
