import React from "react";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are currently open. Come viist us or order online.</p>
          <button className="btn">order</button>
        </div>
      ) : (
        <p>{`We are currently closed. Please come visit us or order online from ${openHour}:00 to ${closeHour}:00`}</p>
      )}
    </footer>
  );
}
