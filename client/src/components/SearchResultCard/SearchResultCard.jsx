import React from "react";
import logo from "../../images/BookBadger.png";

const SearchResultCard = ({ book }) => {
  const details = book.volumeInfo;

  return (
    <div className="col-sm-12">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={details.imageLinks.smallThumbnail}
              className="card-img"
              alt={details.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title">{details.title}</h5>
              <h6 className="card-text">
                Author(s): {details.authors.join(", ")}
              </h6>
              <p className="card-text">{details.description}</p>
              <a
                href={details.infoLink}
                class="btn btn-info mr-1"
                role="button"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
