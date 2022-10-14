import React from "react";
import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <section className="home-section">
        <Navbar />
        <Banner />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row
          title="Documentary Movies"
          fetchUrl={requests.fetchDocumantaries}
        />
      </section>
    </>
  );
}
