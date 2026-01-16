import { sentenceCase } from "change-case";
function Input({index, objectKey, value, handleInputChange}){
    let inputType = 'text';
    switch (objectKey){
        case 'email':
            inputType = 'email';
            break;
        case 'phoneNumber':
            inputType =  'tel';
            break;
        case 'dateFrom':
        case 'dateTo':
            inputType = 'number'
            break;
    }
    return (
        <>
       <label htmlFor={objectKey}>{sentenceCase(objectKey)}: </label>
       <input id={objectKey}
              type={inputType} 
              value={value} 
              autoComplete="off" 
              onChange={(e) => {handleInputChange(e.target.value, objectKey, index)}} required/>
       </>
    )
}

export default Input