import { useState } from "react";
import Form from "./form";
import View from "./view";

function Section({name, data, handleInputChange}){
    const [isEditable, toggleEdit] = useState(false)

    function handleToggling(){
        toggleEdit(!isEditable)
    };
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