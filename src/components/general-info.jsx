import { cvData } from "../utils/cv-data";
import { useImmer } from "use-immer";
import { useState } from "react";
import Input from "./inputs";
function GeneralInfo(){
    const [data, setData] = useImmer(cvData.generalInformation);
    const [isEditable, toggleEdit] = useState(false);

    function handleToggling(){
            toggleEdit(!isEditable);
        
    }

    function handleInput(newData, key){
        setData(draft => {
            draft[key] = newData;
        })
    }
    if (isEditable){
        return (
            <form onSubmit={handleToggling}>
                {Object.entries(data).map(([key, value]) => (
                    <Input 
                        key={key}
                        objectKey ={key}
                        value= {value}
                        onUpdate={handleInput}
                   />
                    
                ))}
                <button type="submit">Submit</button>
            </form>
        
        )
    }
    else {
        return (
            <>
                {Object.entries(data).map(([key, value]) => (
                    <h1 key={key}> {key}: {value} </h1>
                ))}
                
                <button onClick={handleToggling}>Edit</button>
            </>
        )
    }
}

export default GeneralInfo