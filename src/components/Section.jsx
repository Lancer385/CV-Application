import Form from "./form";
import View from "./view";
import { useState } from "react";
import { useImmer } from "use-immer";

function Section({name, cvData}){
    const [isEditable, toggleEdit] = useState(false)
    const [data, setData] = useImmer(cvData);
    
    function handleToggling(){
        toggleEdit(!isEditable)
    };

    function handleInputChange(newInput, key, index){
      setData(draft => {
          if (Array.isArray(draft)){
            draft[index][key] = newInput;
          }
          else {
             draft[key] = newInput;
          }
      })
    }
    
   if (isEditable){
        return (
          <>
           <Form 
           name={name}
           data={data}
           handleToggling={handleToggling}
           handleInputChange={handleInputChange}
           />
           </>
        )
    }
    else {
        return (
            <div id={name}>
                <View
                    name={name}
                    data={data}
                    handleToggling={handleToggling}
                 />

            </div>
        )
    }
}

export default Section