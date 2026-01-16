import Input from "./Input"
import '../styles/form.css'
import { sentenceCase } from "change-case";

function Form({name, data, handleToggling, handleInputChange, handleAddingSection}){
    
    function toggle(e){
        e.preventDefault()
        handleToggling(name);
    }

    if (Array.isArray(data)){
        return (
            <>
                <h2>{sentenceCase(name)}</h2>
                <form onSubmit={toggle} className={name}>
                    {data.map((item, index) => (
                    <fieldset>
                        <legend>info {index + 1}</legend>
                        {Object.entries(item).map(([key, value]) => (
                            <Input
                                index={index}
                                key={key}
                                objectKey={key}
                                value={value}
                                handleInputChange={handleInputChange}
                            ></Input>
                        ))}
                    </fieldset>
                    ))}
                    <div className="buttons">
                        <button>Submit</button>
                        <button type="button" onClick={handleAddingSection}>Add Section</button>
                    </div>
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