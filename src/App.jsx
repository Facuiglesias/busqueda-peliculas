import { useState } from "react";
import Form from "./components/Form.jsx";
import Movie from "./components/Movie.jsx";

function App() {
  const [movies, setMovies] = useState(false);

  return (
    <main className="bg-[#222] max-w-[1000px] w-4/5 h-4/5 m-auto flex flex-col gap-8 text-white p-8 rounded-3xl shadow-[0px_0px_30px_5px_#4299e1]">
      <h1 className="text-center text-4xl font-bold">Busqueda de Peliculas</h1>
      <Form setMovies={setMovies} />
      <section className="border-t grid-responsive gap-4 p-8 overflow-auto container">
        {movies && movies.map((movie) => <Movie movie={movie} />)}
      </section>
    </main>
  );
}

export default App;
