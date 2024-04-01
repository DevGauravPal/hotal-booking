"use client";
import React from "react";
import RoomItems from "./Rooms/RoomItems";

const Home = () => {
  return (
    <div>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">All Rooms</h2>
        <a href="/search" className="ml-2 back-to-search">
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
        <div className="row mt-4">
          <RoomItems />
          {/* <RoomItems /> */}
        </div>
      </section>
    </div>
  );
};

export default Home;