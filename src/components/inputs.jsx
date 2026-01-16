import { sentenceCase } from "change-case";
function Input({name, index, objectKey, value, handleInputChange}){
    let inputType = 'text';
    switch (objectKey){
        case 'email':
            inputType = 'email';
            break;
        case 'phoneNumber':
            inputType =  'tel';
            break;
    }
    return (
        <>
       <label htmlFor={objectKey}>{sentenceCase(objectKey)}</label>
       <input id={objectKey} type={inputType} value={value} autoComplete="off" onChange={(e) => {handleInputChange(e.target.value, objectKey, name, index)}} required/>
       </>
    )
}

export default Input