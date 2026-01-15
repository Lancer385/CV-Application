import GeneralInfo  from "./components/general-info"
import Education from "./components/education";
import { cvData } from "./utils/cv-data";
import { useImmer } from "use-immer";
function App() {
    const [data, setData] = useImmer(cvData);
    const [isEditable, toggleEdit] = useImmer(
      {
        generalInformation: true,
        education: true,
        practicalExperience: true,
      }
    );

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

    function handleToggling(name){
        toggleEdit(draft => {draft[name] = !draft[name]});
    }
  return (
    <>
     <h1>My Resume</h1>
     <GeneralInfo
        name= 'generalInformation'
        data={data.generalInformation}
        isEditable={isEditable.generalInformation}
        handleToggling={handleToggling}
        handleInputChange={handleInput}
     />
     <Education
        name= 'education'
        data={data.education}
        isEditable={isEditable.education}
        handleToggling={handleToggling}
        handleInputChange={handleInput}
     />

    </>
  )
}

export default App
