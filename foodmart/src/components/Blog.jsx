import React from "react";
import post1 from "../assets/post-thumb-1.jpg";
import post2 from "../assets/post-thumb-2.jpg";
import post3 from "../assets/post-thumb-3.jpg";

export default function Blog() {
  const blogs = [
    { img: post1, title: "10 Different Types of comfortable clothes ideas for women", text: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam.", price: "$29.99" },
    { img: post2, title: "Top 10 casual look ideas to dress up your kids", text: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam.", price: "$19.99" },
    { img: post3, title: "Latest trends of wearing street wears supremely", text: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam.", price: "$39.99" }
  ];

  return (
    <section className="blog">
      {blogs.map((b, i) => (
        <div key={i} className="card" style={{ width: "25rem" }}>
          <img src={b.img} className="card-img-top" alt={b.title} />
          <div className="card-body">
            <h5 className="card-title">{b.title}</h5>
            <p className="card-text">{b.text}</p>
            <h6>{b.price}</h6>
            <button className="btn btn-dark">Add to Cart</button>
          </div>
        </div>
      ))}
    </section>
  );
}
