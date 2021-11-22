import React, {useState} from "react";

const NewFilmForm = ({onFilmSubmit}) => {

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const nameToSubmit = name.trim();
        const urlToSubmit = url.trim();
        if (!nameToSubmit || !urlToSubmit){
            return
        }
        
        onFilmSubmit({
            name: nameToSubmit,
            url: urlToSubmit
        });

        setName("");
        setUrl("");
    }

    return (
        <div class="form-wrapper">
            <form class="film-form" onSubmit={handleFormSubmit}>
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
        </div>
    )

}

export default NewFilmForm;