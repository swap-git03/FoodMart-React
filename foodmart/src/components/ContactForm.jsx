import React from "react";

export default function ContactForm() {
  return (
    <section className="contact-form">
      <div className="c-form">
        <div className="c-left">
          <h1>Get 25% Discount <br /> your first <br />purchase</h1>
          <h5>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere
            maecenas. At tellus ut nunc amet velegestas.</h5>
        </div>

        <div className="c-right">
          <form>
            <div className="name">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name" id="name" />
            </div>
            <div className="email">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your valid email" id="email" />
            </div>
            <div className="checkbox">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Subscribe to the newsletter</label>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
