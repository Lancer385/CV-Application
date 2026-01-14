function Input({objectKey, value, onUpdate}){
    let inputType = '';
    switch (objectKey){
        case 'fullName':
            inputType = "text";
            break;
        case 'email':
            inputType = 'email';
            break;
        case 'phoneNumber':
            inputType =  'tel';
            break;
    }
    return (
       <input type={inputType} value={value} onChange={(e) => {onUpdate(e.target.value, objectKey)}} required/>
    )
}

export default Input