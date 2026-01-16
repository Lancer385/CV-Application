import Input from "./inputs"
import '../styles/form.css'
import { sentenceCase } from "change-case";
function Form({name, data, handleToggling, handleInputChange}){
    function toggle(e){
        e.preventDefault()
        handleToggling(name);
    }

    if (Array.isArray(data)){
        return (
            <>
                <h2>{sentenceCase(name)}</h2>
                <form onSubmit={toggle} id={name}>
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
            </>
        )
    }
    else {
        return (
            <>
            <h2>{sentenceCase(name)}</h2>
                <form onSubmit={toggle} id={name}>
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
            </>
        )
    }
}

export default Form