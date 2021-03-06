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
            <section class="films-container">
                <ul class="film-listing">
                    {filmNodes}
                </ul>
            </section>
        </>
    );
}

export default FilmListing;