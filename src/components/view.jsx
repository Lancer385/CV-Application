function View({name, data, handleToggling}){
    function toggle(){
        handleToggling(name)
    }
    if (Array.isArray(data)){
        return (
            <>
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