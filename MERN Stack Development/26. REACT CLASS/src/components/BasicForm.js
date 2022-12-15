import React, { useEffect, useState } from "react";

function BasicForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 1) {
      document.title = `Side Effets (${count})`;
    } else {
      document.title = `Side Effets`;
    }
    // console.log(email, password);
  }, [email, password]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]);

      setCount(count + 1);
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill the email and password");
    }
  };
  
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Passowrd</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            autoComplete="off"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {allEntry.map((curElem) => {
          return (
            <div key={curElem.id}>
              <p>{curElem.email}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BasicForm;
