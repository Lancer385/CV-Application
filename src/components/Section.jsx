import Form from "./Form";
import View from "./View";
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

    function handleAddingSection(){
        setData(draft => {
            if (draft.length > 0){
              draft.push(Object.fromEntries(Object.keys(draft[0]).map(key => [key, ''])))
            }
        })
    }

    function handleDeletingSection(){
        setData(draft => {
            if (draft.length > 1){
              draft.pop()
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
           handleAddingSection={handleAddingSection}
           handleDeletingSection={handleDeletingSection}
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