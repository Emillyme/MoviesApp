import axios from 'axios';

import { useState, useEffect } from 'react';

// Aqui, a interface descreve o formato dos dados de um filme
interface Movie {
    id: number;
    title: string;
    overview: string;
    realease_date: string;
    poster_path: string;
}

const apiKey = "17316755c4e858c0edc54f33d3d053ee";
const apiUrl = "https://api.themoviedb.org/3";

export function List() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        // Chamada da API
        axios
            .get(`${apiUrl}/movie/popular?api_key=${apiKey}&language=pt-BR`)
            .then((response) => {
                console.log(response.data.results); // Verifica os dados retornados
                setMovies(response.data.results); // Atualiza o estado com os filmes
            })
            .catch((error) => {
                console.error("Erro ao buscar os filmes:", error);
            });
    }, []); // O array vazio impede que o `useEffect` seja executado mais de uma vez

    return(
        <>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                </div>
            ))}
        </>
    );
}

export default List;