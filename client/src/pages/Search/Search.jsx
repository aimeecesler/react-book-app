import React, { useState } from "react";
import Container from "../../components/Container/Container";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import Row from "../../components/Row/Row";
import axios from "axios";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";
import NoBooksCard from "../../components/NoBooksCard/NoBooksCard";
import Alert from "../../components/Alert/Alert";

const Search = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [messageDisplay, setMessageDisplay] = useState("card mb-3 hide");
  const [alertMessage, setAlertMessage] = useState({
    class: "",
    style: "",
    message: "",
  });
  const handleSearch = function (event) {
    event.preventDefault();
    console.log(searchCategory);
    if (searchCategory === "" || searchQuery === "") {
      setAlertMessage({
        class: "alert alert-danger",
        style: "block",
        message: "You must choose a category and enter a search term in order to search.",
      });
      console.log(alertMessage);
    } else if (searchCategory === "title") {
      searchByTitle();
      setAlertMessage({
        class: "",
        style: "",
        message: "",
      });
    } else if (searchCategory === "author") {
      searchByAuthor();
      setAlertMessage({
        class: "",
        style: "",
        message: "",
      });
    }
  };

  const searchByTitle = function () {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery}&key=AIzaSyAglOANk2Yac7WdENqzlNS2UeiGXECtvVk`
      )
      .then((res) => {
        console.log(res);
        if (res.data.totalItems === 0) {
          setSearchResults([]);
          setMessageDisplay("card mb-3 show");
        } else {
          setSearchResults(res.data.items);
        }
      })
      .catch((err) => console.log(err));
  };

  const searchByAuthor = function () {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchQuery}&key=AIzaSyAglOANk2Yac7WdENqzlNS2UeiGXECtvVk`
      )
      .then((res) => {
        if (res.data.totalItems === 0) {
          setSearchResults([]);
          setMessageDisplay("card mb-3 show");
        } else {
          setSearchResults(res.data.items);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ContainerFluid>
        <LogoHeader />
      </ContainerFluid>
      <Container>
        <Row>
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <form className="bg-light p-4 my-4" onSubmit={handleSearch}>
              <h3>Search Books:</h3>
              <div className="form-group">
                <select
                  className="form-control"
                  id="search-category"
                  name="searchCategory"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  <option value="" className="disabled">
                    Select a Category
                  </option>
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  name="searchQuery"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-info">
                Submit
              </button>
            </form>
            <Alert {...alertMessage} />
          </div>
        </Row>
        <Row>
          {searchResults.length ? (
            searchResults.map((book, index) => (
              <SearchResultCard book={book.volumeInfo} key={index} />
            ))
          ) : (
            <NoBooksCard
              message="Your search did not match any books."
              className={messageDisplay}
            />
          )}
        </Row>
      </Container>
    </>
  );
};

export default Search;
