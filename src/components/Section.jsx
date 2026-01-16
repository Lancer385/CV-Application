import Form from "./form";
import View from "./view";

function GeneralInfo({name, data, isEditable, handleToggling, handleInputChange}){
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

export default GeneralInfo