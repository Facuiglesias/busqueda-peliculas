import { useState } from "react";
import Form from "./components/Form.jsx";
import Movie from "./components/Movie.jsx";

function App() {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <main className="bg-[#222] max-w-[1000px] w-4/5 h-4/5 m-auto flex flex-col gap-8 text-white p-8 rounded-3xl shadow-[0px_0px_30px_5px_#4299e1]">
      <h1 className="text-center text-4xl font-bold">Busqueda de Peliculas</h1>
      <Form setError={setError} setMovies={setMovies} setLoading={setLoading} />
      <section className="border-t grid-responsive gap-4 p-8 overflow-auto container">
        {(movies === "" && (
          <h2 className="text-2xl font-bold text-center">Busca una pelicula</h2>
        )) ||
          (movies.length > 0 && movies.map((movie) => <Movie movie={movie} />))}
        {loading && (
          <>
            <div className="h-[250px] bg-[#373737]"></div>
            <div className="bg-[#373737]"></div>
            <div className="bg-[#373737]"></div>
            <div className="h-[250px] bg-[#373737]"></div>
            <div className="bg-[#373737]"></div>
            <div className="bg-[#373737]"></div>
            <div className="h-[250px] bg-[#373737]"></div>
            <div className="bg-[#373737]"></div>
            <div className="bg-[#373737]"></div>
          </>
        )}
        {error && <p>error: {error}</p>}
      </section>
    </main>
  );
}

export default App;
