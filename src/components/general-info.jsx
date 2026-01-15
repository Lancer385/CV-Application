import Input from "./inputs";
import View from "./view";
function GeneralInfo({data, isEditable, handleToggling, handleInputChange}){
    
    if (isEditable){
        return (
            <form onSubmit={handleToggling}>
                {Object.entries(data).map(([key, value]) => (
                    <Input 
                        key={key}
                        objectKey ={key}
                        value= {value}
                        onUpdate={handleInputChange}
                   />
                ))}
                <button type="submit">Submit</button>
            </form>
        
        )
    }
    else {
        return (
            <>
                <h1>General Information</h1>
                {Object.entries(data).map(([key, value]) => (
                    <View 
                        key={key}
                        objectKey={key}
                        value={value}
                        handleToggling={handleToggling}
                    />
                ))}
                <button onClick={handleToggling}>Edit</button>

            </>
        )
    }
}

export default GeneralInfo