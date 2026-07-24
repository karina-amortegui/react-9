import { useState } from "react";

/*
Requirements:
- Create inputs for:
  - Name
  - Email
- Store values using state (controlled inputs)
- On submit:
  - Prevent page reload
  - Display submitted values or conditional success message
- Clear form after submission
*/

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setHasSubmitted(true);
    setName("");
    setEmail("");
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
      {hasSubmitted && (
        <p>Submitted :)</p> 
      )}
    </form>
  );
}

