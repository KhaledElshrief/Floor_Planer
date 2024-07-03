import React from "react";
import "../App.css";
const Contact = () => {
  return (
    <section class="contact" id="contact">
      <div class="contact-wrapper">
        <div class="contact-left"></div>
        <div class="contact-right">
          <h1 class="contact-heading">Contact</h1>
          <form>
            <div class="input-group">
              <input type="text" class="field" />
              <label class="input-label">Full Name</label>
            </div>
            <div class="input-group">
              <input type="email" class="field" />
              <label class="input-label">Email</label>
            </div>
            <div class="input-group">
              <textarea class="field"></textarea>
              <label class="message">Message</label>
            </div>
            <input type="submit" class="submit-btn" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
