import React from "react";
import Film from "./Film";

const FilmListing = ({films}) => {

    const filmNodes = films.map(film => {
        return(
            <Film url={film.url} key={film.id}>{film.name}</Film>
        );
    });

    return (
        <>
            {filmNodes}
        </>
    );
}

export default FilmListing;