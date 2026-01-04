import React from "react";

export default function RoomCard({ room }) {
  return (
    <div className="room-card">
      {/* Left: Image */}
      <div className="room-image">
        <img src={room.image} alt={room.title} />
      </div>

      {/* Right: Details */}
      <div className="room-details">
        <h3>{room.title}</h3>

        <div className="room-meta">
          <span>📐 {room.size} sqft</span>
          <span>🛏 {room.bed}</span>
          <span>🌊 {room.view}</span>
        </div>

        <p className="room-description">{room.description}</p>

        <ul className="room-features">
          {room.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        <button className="btn">Book this room</button>
      </div>
    </div>
  );
}
