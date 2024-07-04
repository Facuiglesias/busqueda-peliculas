import { useEffect, useState } from "react";

function Form({ setMovies }) {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const URL = `http://www.omdbapi.com/?apikey=4287ad07&s=${search}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entre");

    setSearch(inputValue);
  };
  const handleChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();

      if (data.Response == "False") {
        setMovies(false);
      } else {
        setMovies(data.Search);
        setInputValue("");
      }
    };

    fetchMovies();
  }, [search]);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex justify-center gap-8"
    >
      <input
        placeholder="Star Wars III..."
        value={inputValue}
        onChange={(e) => {
          handleChange(e);
        }}
        className="appearence-none outline-none bg-inherit border rounded-3xl pl-4 focus:shadow-[0px_0px_5px_2px_#4299e1]"
        type="text"
      />
      <button
        type="submit"
        className="border rounded-xl p-2 text-sm hover:shadow-[0px_0px_5px_2px_#4299e1]"
      >
        Buscar
      </button>
    </form>
  );
}

export default Form;
