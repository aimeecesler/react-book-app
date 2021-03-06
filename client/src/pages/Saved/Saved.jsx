import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import Row from "../../components/Row/Row";
import axios from "axios";
import SavedBookCard from "../../components/SavedBookCard/SavedBookCard";
import NoBooksCard from "../../components/NoBooksCard/NoBooksCard";

const Saved = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = function () {
    axios
      .get("/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBook = function (_id) {
    axios
      .delete(`/api/books/${_id}`)
      .then((response) => {
        console.log(response.data);
        getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ContainerFluid>
        <LogoHeader />
      </ContainerFluid>
      <Container>
        <Row>
          <div className="col-sm-12 text-center my-5">
            <h1>My Saved Books</h1>
          </div>
        </Row>
        <Row>
          {books.length ? (
            books.map((book, index) => <SavedBookCard {...book} key={index} deleteBook={deleteBook} />)
          ) : (
            <NoBooksCard message="No Saved Books" className="card mb-3"/>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Saved;
