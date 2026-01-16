import { sentenceCase } from "change-case"
import '../styles/view.css'
function View({name, data, handleToggling}){
    function toggle(){
        handleToggling(name)
    }
    
    if (Array.isArray(data)){
        return (
            <div className="view">
            <h2>{sentenceCase(name)}</h2>
                {data.map((item, index) => (
                <div className="info" key={index}>
                {Object.entries(item).map(([key, value]) => (
                    <div className={key} key={key}>
                        <h3>{sentenceCase(key)}</h3>
                        <p>{value}</p>
                    </div>
                ))}
                </div>
            ))}

            <button onClick={toggle}>Edit</button>
            </div>
        )
    }
    else {
        return (
            <div className="view">
             <h2>{sentenceCase(name)}</h2>
             <div className="info">
                {Object.entries(data).map(([key, value]) => (
                    <div className={key} key={key}>
                    <h3>{sentenceCase(key)}</h3>
                    <p>{value}</p>
                    </div>
                ))}
            </div>
                <button onClick={toggle}>Edit</button>
            </div>
        )
    }
}

export default View