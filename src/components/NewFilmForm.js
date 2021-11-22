import React from "react";

const NewFilmForm = () => {

    return (
        <form>
            <input 
                type="text" 
                placeholder="Film name"
            />
            <input 
                type="text" 
                placeholder="IMDB url"
            />
            <input 
                type="submit" 
                placeholder="Post"
            />
        </form>
    )

}

export default NewFilmForm;