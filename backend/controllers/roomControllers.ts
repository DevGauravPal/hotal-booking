import { NextRequest, NextResponse } from "next/server";
import Rooms from "../models/rooms";
import ErrorHandler from "../utils/errorHandler";

//Get all romms => /api/rooms
export const allRooms = async (req: NextRequest) => {
  const resPerPage: Number = 8;
  const rooms = await Rooms.find();

  return NextResponse.json({
    success: true,
    resPerPage,
    rooms,
  });
};

// Creatre new room => /api/admin/rooms
export const newRoom = async (req: NextRequest) => {
  const body = await req.json();
  const room = await Rooms.create(body);

  return NextResponse.json({
    success: true,
    room,
  });
};

// Get room details => /api/rooms/:id
export const getRoomDetails = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {

    const room = await Rooms.findById(params.id);

    throw new ErrorHandler("Hello",400);

    if (!room) {
      return NextResponse.json(
        {
          message: "Room not found",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json({
      success: true,
      room,
    });
  } catch (error: any) {
    console.log(error.statusCode);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: error.statusCode,
      }
    );
  }
};

// Update room details => /api/admin/rooms/:id
export const updateRoom = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  let room = await Rooms.findById(params.id);
  const body = await req.json();
  if (!room) {
    return NextResponse.json(
      {
        message: "Room not found",
      },
      {
        status: 404,
      }
    );
  }

  room = await Rooms.findByIdAndUpdate(params.id, body, {
    new: true,
  });

  return NextResponse.json({
    success: true,
    room,
  });
};

// Delete room details => /api/admin/rooms/:id
export const deleteRoom = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const room = await Rooms.findById(params.id);

  if (!room) {
    return NextResponse.json(
      {
        message: "Room not found",
      },
      {
        status: 404,
      }
    );
  }

  // TODO - Delete image assosiated with the room
  await room.deleteOne();

  return NextResponse.json({
    success: true,
  });
};
