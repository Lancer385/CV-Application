import Input from "./inputs"

function Form({name, data, handleToggling, handleInputChange}){
    function toggle(e){
        e.preventDefault()
        handleToggling(name);
    }

    if (Array.isArray(data)){
        return (
             <form onSubmit={toggle}>
                {data.map((item, index) => (
                    Object.entries(item).map(([key, value]) => (
                        <Input
                            name={name}
                            index={index}
                            key={key}
                            objectKey={key}
                            value={value}
                            handleInputChange={handleInputChange}
                        ></Input>
                    ))
                ))}
                <button type="submit">Submit</button>
            </form>
        )
    }
    else {
        return (
            <form onSubmit={toggle}>
                {Object.entries(data).map(([key, value]) => (
                    <Input
                        name={name}
                        key={key}
                        objectKey ={key}
                        value= {value}
                        handleInputChange={handleInputChange}
                   />
                ))}
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form