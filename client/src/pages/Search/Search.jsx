import React, { useState } from "react";
import Container from "../../components/Container/Container";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import Row from "../../components/Row/Row";
import axios from "axios";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";
import NoBooksCard from "../../components/NoBooksCard/NoBooksCard";

const Search = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [messageDisplay, setMessageDisplay] = useState("card mb-3 hide");
  const handleSearch = function (event) {
    event.preventDefault();
    if (searchCategory === "title") {
      searchByTitle();
    } else if (searchCategory === "author") {
      searchByAuthor();
    }
  };

  const searchByTitle = function () {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery}&key=AIzaSyAglOANk2Yac7WdENqzlNS2UeiGXECtvVk`
      )
      .then((res) => {
        console.log(res);
        if (res.data.totalItems === 0){
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
        if (res.data.totalItems === 0){
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
          </div>
        </Row>
        <Row>
          {searchResults.length ? (
            searchResults.map((book, index) => (
              <SearchResultCard book={book.volumeInfo} key={index} />
            ))
          ) : (
            <NoBooksCard message="Your search did not match any books." display={messageDisplay}/>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Search;
