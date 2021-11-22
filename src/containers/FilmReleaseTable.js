import React, {useState} from "react";
import FilmListing from "../components/FilmListing";

const FilmReleaseTable = () => {

    return (
        <>
            <h1>Upcoming Film Releases for UK</h1>
            <FilmListing />
        </>
    );
}

export default FilmReleaseTable;