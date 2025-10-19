import React from "react";

export default function ButtonsSection() {
  const buttons = [
    "Blue diamon almonds","Angie's Boomchickapop Corn","Salty kettle Corn","Chobani Greek Yogurt",
    "Sweet Vanilla Yogurt","Foster Farms Takeout Crispy wings","Warrior Blend Organic","Sweet Vanilla Yogurt",
    "Chao Cheese Creamy","Chicken meatballs","Angie's Boomchickapop Corn","Blue diamon almonds",
    "Salty kettle Corn","Choban Greek Yogurt","Foster Farms Takeout Crispy wings","Warrior Blend Organic",
    "Chao Cheese Creamy","Chicken meatballs"
  ];

  return (
    <section className="buttons">
      {buttons.map((b, i) => (
        <button key={i} className="butn">{b}</button>
      ))}
    </section>
  );
}
