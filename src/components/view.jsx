import { sentenceCase } from "change-case"

function View({name, data, handleToggling}){
    function toggle(){
        handleToggling(name)
    }
    if (Array.isArray(data)){
        return (
            <>
            <h2>{sentenceCase(name)}</h2>
                {data.map((item) => (
                    Object.entries(item).map(([key, value]) => (
                    <div className="view" key={key}>
                    <p>{key}: {value}</p>
                    </div>
                ))
            ))}
            <button onClick={toggle}>Edit</button>
            </>
        )
    }
    else {
        return (
            <>
             <h2>{sentenceCase(name)}</h2>
                {Object.entries(data).map(([key, value]) => (
                    <div className="view" key={key}>
                    <p>{key}: {value}</p>
                    </div>
                ))}
                <button onClick={toggle}>Edit</button>
            </>
        )
    }
}

export default View