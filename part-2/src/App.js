import { useLoaderData } from "react-router-dom";
import NewsList from "./components/NewsList";
import "./App.css";

function App() {
  const loaderData = useLoaderData();

  return (
    <div className="App">
      <NewsList data={loaderData} searchParams={null} />
    </div>
  );
}

export default App;

export async function loader() {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  if (!response.ok) {
    throw new Error({ message: "Failed to fetch articles", status: 500 });
  }
  return response;
}

/*
function App() {

  const loaderData = useLoaderData();

  return (
    <div className="App">
      <Form method="get" action="/search">
        <input
          aria-label="search for news"
          type="text"
          name="q"
          required={true}
        />
        <button type="submit">Search</button>
      </Form>
      <NewsList data={loaderData} />
    </div>
  );
}
*/
