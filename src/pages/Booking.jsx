import React from "react";
import RoomCard from "../components/RoomCard";
import Navbar from "../components/NavBar";

import deluxeImg from "../assets/b3.jpg";
import familyImg from "../assets/Gallery/g8.jpg";

export default function Booking() {
  const rooms = [
    {
      id: 1,
      title: "Deluxe Double Room with Balcony Sea View",
      image: deluxeImg,
      size: "168",
      bed: "1 King Bed",
      view: "Sea View",
      description:
        "Spacious deluxe room with private balcony, air conditioning, spacious bathroom and minibar.",
      features: [
        "Private bathroom",
        "Balcony",
        "Air conditioning",
        "Free Wi-Fi",
        "Private kitchen",
      ],
    },
    {
      id: 2,
      title: "Deluxe Double Room with Sea View",
      image: familyImg,
      size: "168",
      bed: "1 King Bed",
      view: "Sea & Garden View",
      description:
        "Perfect for Couples, featuring a king sized bed, garden view, and all modern comforts.",
      features: [
        "Private bathroom",
        "Garden view",
        "Air conditioning",
        "Free Wi-Fi",
        "Mini fridge",
      ],
    },
  ];

  return (
    <div className="app">
      {/* ✅ Navbar goes here */}
      <Navbar />

      <main className="container booking-page">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Choose Your Room
        </h2>

        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </main>
    </div>
  );
}
