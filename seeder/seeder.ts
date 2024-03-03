import Rooms from "../backend/models/rooms";
import mongoose from "mongoose";
import { rooms } from "./data";

const seedRoom = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/hotal-booking")

        await Rooms.deleteMany();
        console.log('Room are deleted!...');

        await Rooms.insertMany(rooms);
        console.log("Room are added!...");
        process.exit();
    }catch (error){
        console.log(error);
        process.exit();
    }
}

seedRoom();