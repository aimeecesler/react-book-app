import React, { useState } from "react";
import Container from "../../components/Container/Container";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import Row from "../../components/Row/Row";

const Search = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = function (event) {
    event.preventDefault();
    console.log(searchQuery, searchCategory);
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
                  <option value="" className="disabled">Select a Category</option>
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
      </Container>
    </>
  );
};

export default Search;
