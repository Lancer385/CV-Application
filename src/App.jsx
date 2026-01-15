import GeneralInfo  from "./components/general-info"
import { cvData } from "./utils/cv-data";
import { useImmer } from "use-immer";
import { useState } from "react";
function App() {
    const [data, setData] = useImmer(cvData);
    const [isEditable, toggleEdit] = useImmer(
      {
        generalInformation: true,
      }
    );

    function handleGeneralInfo(newInput, key){
      setData(draft => {
          draft.generalInformation[key] = newInput;
      })
    }
    function handleGeneralInfoToggling(){
        toggleEdit(draft => {draft.generalInformation = !draft.generalInformation});
    }
  return (
    <>
     <h1>My Resume</h1>
     <GeneralInfo
        data={data.generalInformation}
        isEditable={isEditable.generalInformation}
        handleToggling={handleGeneralInfoToggling}
        handleInputChange={handleGeneralInfo}
     />
    </>
  )
}

export default App
