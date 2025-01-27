import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonREsponse = await response.json();
    setJoke({ setup: jsonREsponse.setup, punchline: jsonREsponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonREsponse = await response.json();
      setJoke({ setup: jsonREsponse.setup, punchline: jsonREsponse.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h1>Joker!</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
