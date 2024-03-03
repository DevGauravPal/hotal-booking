import { NextRequest, NextResponse } from "next/server";
import Rooms from "../models/rooms";
import ErrorHandler from "../utils/errorHandler";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";

//Get all romms => /api/rooms
export const allRooms = catchAsyncErrors(async (req: NextRequest) => {
  const resPerPage: Number = 8;
  const rooms = await Rooms.find();

  return NextResponse.json({
    success: true,
    resPerPage,
    rooms,
  });
});

// Creatre new room => /api/admin/rooms
export const newRoom = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const room = await Rooms.create(body);

  return NextResponse.json({
    success: true,
    room,
  });
});

// Get room details => /api/rooms/:id
export const getRoomDetails = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Rooms.findById(params.id);

    if (!room) {
      throw new ErrorHandler("Room not found", 404);
    }
    return NextResponse.json({
      success: true,
      room,
    });
  }
);

// Update room details => /api/admin/rooms/:id
export const updateRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    let room = await Rooms.findById(params.id);
    const body = await req.json();
    if (!room) {
      throw new ErrorHandler("Room not found", 404);
    }

    room = await Rooms.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    return NextResponse.json({
      success: true,
      room,
    });
  }
);

// Delete room details => /api/admin/rooms/:id
export const deleteRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Rooms.findById(params.id);

    if (!room) {
      throw new ErrorHandler("Room not found", 404);
    }

    // TODO - Delete image assosiated with the room
    await room.deleteOne();

    return NextResponse.json({
      success: true,
    });
  }
);
