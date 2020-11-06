import React from "react";

const SearchResultCard = ({ book }) => {
  const saveBook = function (book) {
    console.log(book);
  };

  return (
    <div className="col-sm-12">
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-2">
            <img
              src={book.imageLinks.thumbnail}
              className="card-img"
              alt={book.title}
            />
          </div>
          <div className="col-md-10">
            <div className="card-body text-center">
              <h5 className="card-title">{book.title}</h5>
              <h6 className="card-text">
                Author(s): {book.authors.join(", ")}
              </h6>
              <p className="card-text">{book.description}</p>
              <a href={book.infoLink} class="btn btn-info mr-1" role="button">
                More Info
              </a>
              <button
                className="btn btn-info ml-1"
                onClick={() => saveBook(book)}
              >
                Save Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
