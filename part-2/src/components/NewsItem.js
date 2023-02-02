import { useState } from "react";

function NewsItem(props) {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };

  return (
    <article>
      <h2>
        <a href={props.article.url} target="_blank" rel="noreferrer">
          {props.article.title}
        </a>
      </h2>
      <h3>{props.article.author}</h3>
      {props.article.urlToImage && (
        <img className="article-image" src={props.article.urlToImage} alt="" />
      )}
      <button type="button" onClick={handleClick}>
        Read Description
      </button>
      {toggle && <p>{props.article.description}</p>}
    </article>
  );
}

export default NewsItem;
