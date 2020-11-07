import React from "react";

const SearchResultCard = ({ book, saveBook }) => {

  return (
    <div className="col-sm-12">
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-2">
            <img
              src={book.imageLinks.thumbnail}
              className="card-img p-3"
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
              <a href={book.infoLink} className="btn btn-info mr-1" role="button" target="blank">
                More Info
              </a>
              <button
                className="btn btn-info ml-1"
                onClick={(e) => saveBook(e, book)}
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
