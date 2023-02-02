import { Outlet, Form } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header className="header">
        <h1>NewsApi Stories</h1>
        <Form method="get" action="/search">
          <input
            aria-label="search for news"
            type="text"
            name="q"
            required={true}
          />
          <button type="submit">Search</button>
        </Form>
      </header>
      <Outlet />
    </>
  );
}
