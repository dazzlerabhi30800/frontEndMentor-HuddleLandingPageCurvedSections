import React from "react";

function Community() {
  return (
    <div className="community--wrapper">
      <div className="text--wrapper">
        <h1 className="heading">Build the Community Your Fans Will Love</h1>
        <p className="desc">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="start">Get Started for Free</button>
      </div>
      <div className="img--wrapper">
        <img src="./images/screen-mockups.svg" alt="mockup" />
      </div>
      <div className="stats--wrapper">
        <div className="stats--card">
          <img src="./images/icon-communities.svg" alt="community" />
          <h2>1.4k+</h2>
          <span>Communities Formed</span>
        </div>
        <div className="stats--card">
          <img src="./images/icon-messages.svg" alt="message" />
          <h2>2.7m+</h2>
          <span>Messages Sent</span>
        </div>
      </div>
    </div>
  );
}

export default Community;
