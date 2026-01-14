import GeneralInfo  from "./components/general-info"
import { cvData } from "./utils/cv-data";
import { useImmer } from "use-immer";
import { useState } from "react";
function App() {
    const [isEditable, toggleEdit] = useState(true);
    const [generalData, setGeneralData] = useImmer(cvData.generalInformation);
    function handleToggling(){
        toggleEdit(!isEditable);
    }
    function handleInputChange(newInput, key){
      setGeneralData(draft => {
          draft[key] = newInput;
          console.log(newInput)
      })
    }
  return (
    <>
     <h1>Hello, World</h1>
     <GeneralInfo
        data={generalData}
        isEditable={isEditable}
        handleToggling={handleToggling}
        handleInputChange={handleInputChange}
     />
    </>
  )
}

export default App
