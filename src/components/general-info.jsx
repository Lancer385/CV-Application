import Form from "./form";
import View from "./view";
function GeneralInfo({name, data, isEditable, handleToggling, handleInputChange}){
        function toggle(){
        handleToggling(name);
    }

   if (isEditable){
        return (
           <Form 
           name={name}
           data={data}
           handleToggling={handleToggling}
           handleInputChange={handleInputChange}
           />
        )
    }
    else {
        return (
            <>
                <h1>General Information</h1>
                <View
                    name={name}
                    data={data}
                    handleToggling={handleToggling}
                 />

            </>
        )
    }
}

export default GeneralInfo