import React from "react";

export default function Form() {
  return (
    <form action="https://formspree.io/f/mwpeejer
    " method="post">
       <label>Full Name</label>
        <input type="text" />

       <label>Email</label>
        <input type="text" />
        
       <label>Phone Number</label>
        <input type="text" />

       <label>Subject</label>
        <input type="text" />
        
       <label>Message</label>
        <textarea rows={10} id="message"/>

        <div id="submit">
          <button type="submit" className="submit button">Submit</button>
        </div>
    </form>
  )
}