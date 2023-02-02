const Paginate = ({
  articlesPerPage,
  totalArticles,
  paginate,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <footer className="pagination-container">
      <div className="pagination">
        <button
          type="button"
          onClick={previousPage}
          className="page-number"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageNumbers.map((number) => (
          <button
            type="button"
            key={number}
            onClick={() => paginate(number)}
            className={
              currentPage === number ? "page-number active" : "page-number"
            }
          >
            {number}
          </button>
        ))}
        <button
          type="button"
          onClick={nextPage}
          className="page-number"
          disabled={
            totalArticles === currentPage * articlesPerPage ||
            totalArticles < currentPage * articlesPerPage
          }
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default Paginate;
