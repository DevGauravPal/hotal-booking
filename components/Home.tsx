"use client";
import React, { useEffect } from "react";
import RoomItems from "./Rooms/RoomItems";
import { IRoom } from "@/backend/models/rooms";

interface Props {
  data: {
    success: boolean,
    resPerPage: number
    filteredRoomsCount: number,
    rooms: IRoom[],

    message: string,
    error: string,
    status: number,
    totalRooms: number,
  }
}

const Home = ({ data }: Props) => {

  const { rooms, resPerPage, totalRooms, filteredRoomsCount } = data;

  console.log(rooms, 'rooms');

  return (
    <div>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">All Rooms</h2>
        <a href="/search" className="ml-2 back-to-search">
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
        <div className="row mt-4">
          {rooms?.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Rooms.</b>
            </div>
          ) : (
            rooms?.map((room) => <RoomItems key={room._id} room={room} />)
          )
          }
          {/* <RoomItems /> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
