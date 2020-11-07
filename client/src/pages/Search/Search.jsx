import React, { useState } from "react";
import Container from "../../components/Container/Container";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import Row from "../../components/Row/Row";
import axios from "axios";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";
import NoBooksCard from "../../components/NoBooksCard/NoBooksCard";
import Alert from "../../components/Alert/Alert";
import SaveModal from "../../components/SaveModal/SaveModal";

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
  const [showModal, setShowModal] = useState(false);
  const handleSearch = function (event) {
    event.preventDefault();
    if (searchCategory === "" || searchQuery === "") {
      setAlertMessage({
        class: "alert alert-danger",
        style: "block",
        message:
          "You must choose a category and enter a search term in order to search.",
      });
    } else if (searchCategory === "title") {
      console.log(searchQuery);
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

  const handleReset = function () {
    setSearchCategory("");
    setSearchQuery("");
    setSearchResults([]);
    setMessageDisplay("card mb-3 hide");
    setAlertMessage({
      class: "",
      style: "",
      message: "",
    });
    document.getElementById("search-form").reset();
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

  const saveBook = function (e, book) {
    e.preventDefault();
    axios
      .post("/api/books", {
        title: book.title,
        authors: book.authors,
        description: book.description,
        image: book.imageLinks.thumbnail,
        link: book.infoLink,
      })
      .then((response) => {
        console.log(response.data);
        toggleModal();
      })
      .catch((err) => console.log(err));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
            <form
              id="search-form"
              className="bg-light p-4 my-4 text-center"
              onSubmit={handleSearch}
            >
              <h3 className="text-left">Search Books:</h3>
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
              <button type="submit" className="btn btn-info mr-1">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-warning ml-1"
                onClick={handleReset}
              >
                Clear Results
              </button>
            </form>
            <Alert {...alertMessage} />
          </div>
        </Row>
        <Row>
          {searchResults.length ? (
            searchResults.map((book, index) => (
              <SearchResultCard
                book={book.volumeInfo}
                key={index}
                saveBook={saveBook}
              />
            ))
          ) : (
            <NoBooksCard
              message="Your search did not match any books."
              className={messageDisplay}
            />
          )}
        </Row>
      </Container>
      <SaveModal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Search;
