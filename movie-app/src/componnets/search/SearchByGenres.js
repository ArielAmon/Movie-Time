import { Button, Container } from "react-bootstrap";
import GenresFilterButton from "./GenresFilterButton";
import useApi from "../utils/UseApi";
import React, { useEffect, useState } from "react";
import SvgIcon from "../utils/SvgIcon";

function SearchByGenres({ setUrl }) {
    const [{ data, isError }, doFetch] = useApi("", []);
    const [filterGenre, setFilterGenre] = useState(-1);

    useEffect(() => {
        console.log("genres");
        doFetch("https://api.themoviedb.org/3/genre/movie/list?");
    }, [doFetch]);

    const handleClick = () => {
        setUrl(`https://api.themoviedb.org/3/discover/movie?with_genres=${filterGenre}`);
    };

    return (
        <Container className="bg-white bg-opacity-10 rounded-pill py-5 text-center container-sm">
            <GenresFilterButton
                isError={isError}
                onChange={setFilterGenre}
                data={data}
                filterGenre={filterGenre}
            />
            <Button
                type="submit"
                className="mt-3 dates-search-btn btn-danger rounded-circle"
                onClick={handleClick}
            >
                <SvgIcon size={16} name={"search"} />
            </Button>
        </Container>
    );
}

export default SearchByGenres;
