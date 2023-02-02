import { useLoaderData, useSearchParams } from "react-router-dom";
import NewsList from "./NewsList";

function SearchResults() {
  const loaderData = useLoaderData();

  const [params] = useSearchParams();

  return (
    <div>
      <NewsList data={loaderData} searchParams={params.get("q")} />
    </div>
  );
}

export default SearchResults;

export async function loader({ request }) {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("q");

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  if (!response.ok) {
    throw new Error({ message: "Failed to fetch articles", status: 500 });
  }
  return response;
}
