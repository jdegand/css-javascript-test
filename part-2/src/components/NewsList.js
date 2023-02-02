import { useState, useEffect } from "react";
import Paginate from "./Paginate";
import TimeAgo from "timeago-react";

function NewsList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = props.data.articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextPage = () => {
    if (
      currentPage !== Math.ceil(props.data.articles.length / articlesPerPage)
    ) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (props.searchParams) {
      setCurrentPage(1);
    }
  }, [props.searchParams]);

  return (
    <>
      <section className="news-list-section">
        {props.data.articles.length === 0 && <h2>No Articles found.</h2>}
        {currentArticles.map((article, index) => (
          <article key={index}>
            <h2>
              <a href={article.url} target="_blank" rel="noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
            <div className="time-ago-div">
              <TimeAgo datetime={article.publishedAt} locale="en-US" />
            </div>
            {article.urlToImage ? (
              <img className="article-image" src={article.urlToImage} alt="" />
            ) : (
              <a href="https://placeholder.com">
                <img src="https://via.placeholder.com/300" alt="" />
              </a>
            )}
          </article>
        ))}
      </section>
      <Paginate
        articlesPerPage={articlesPerPage}
        totalArticles={props.data.articles.length}
        paginate={paginate}
        nextPage={nextPage}
        previousPage={previousPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default NewsList;

/*
import NewsItem from "./NewsItem";

function NewsList(props) {

    return (
      <section>
        {props.data.articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
      </section>
    );
}
  
export default NewsList;
*/

/*
function NewsList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = props.data.articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextPage = () => {
    if (
      currentPage !== Math.ceil(props.data.articles.length / articlesPerPage)
    ) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="news-list-section">
        {props.data.articles.length === 0 && <h2>No Articles found.</h2>}
        {currentArticles.map((article, index) => (
          <article key={index}>
            <h2>
              <a href={article.url} target="_blank" rel="noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
            <h3>By {article.author}</h3>
            {article.urlToImage && (
              <img className="article-image" src={article.urlToImage} alt="" />
            )}
          </article>
        ))}
      </section>
      <Paginate
        articlesPerPage={articlesPerPage}
        totalArticles={props.data.articles.length}
        paginate={paginate}
        nextPage={nextPage}
        previousPage={previousPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default NewsList;

*/

/*
import { useState } from "react";
import Paginate from "./Paginate";
import TimeAgo from 'timeago-react';

function NewsList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = props.data.articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextPage = () => {
    if (
      currentPage !== Math.ceil(props.data.articles.length / articlesPerPage)
    ) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="news-list-section">
        {props.data.articles.length === 0 && <h2>No Articles found.</h2>}
        {currentArticles.map((article, index) => (
          <article key={index}>
            <h2>
              <a href={article.url} target="_blank" rel="noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
            <div className="time-ago-div">
              <TimeAgo datetime={article.publishedAt} locale="en-US" />
            </div>
            {article.urlToImage && (
              <img className="article-image" src={article.urlToImage} alt="" />
            )}
          </article>
        ))}
      </section>
      <Paginate
        articlesPerPage={articlesPerPage}
        totalArticles={props.data.articles.length}
        paginate={paginate}
        nextPage={nextPage}
        previousPage={previousPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default NewsList;
*/
