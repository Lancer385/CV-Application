import Input from "./inputs";
function GeneralInfo({isEditable, handleToggling, data, handleInputChange}){
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
                {Object.entries(data).map(([key, value]) => (
                    <h1 key={key}> {key}: {value} </h1>
                ))}
                
                <button onClick={handleToggling}>Edit</button>
            </>
        )
    }
}

export default GeneralInfo