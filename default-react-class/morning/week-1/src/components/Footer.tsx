import { useState } from 'react';

/**
 * 1. Is this going to be a smart or dummy component? 
 * Is the user going to interact with the page or is 
 * this page just going to display information?
 * 
 * 2. Is the information/data displayed going to be static (non changing) or dynamic (changing)
 * 
 * 3. If it's dynamic, what kind of props do you need? what data types are the props? (type PropTypes)
 * 
 * 4. How are we going to display the data in the return? (static or dynamic)
 */

export const Footer = () => {
  const [email, setEmail] = useState("");
  
  return (
    <div>
      <label>Location</label>
      <p>123 Main Street<br />Vancouver, WA<br />98660</p>
      <label>Contact</label>
      <p>360-123-4567</p>
      <label>Stay in the know!</label>
      {/* requires @ */}
      <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
    </div>
  )
};