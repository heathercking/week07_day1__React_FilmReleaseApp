import React, {useState} from "react";

const NewFilmForm = () => {

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    }

    return (
        <form>
            <input 
                type="text" 
                placeholder="Film name"
                value={name}
                onChange={handleNameChange}
            />
            <input 
                type="text" 
                placeholder="IMDB url"
                value={url}
                onChange={handleUrlChange}
            />
            <input 
                type="submit" 
                placeholder="Post"
            />
        </form>
    )

}

export default NewFilmForm;