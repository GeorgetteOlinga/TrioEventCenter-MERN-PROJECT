import React, { useState } from "react";
import styles from "../styles/Event.module.css";

const Event = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("2022-01-17");
  const [eventType, setEventType] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [contact, setContact] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const submitHandler = () => {
    let obj = {
      name,
      email,
      date,
      type: eventType,
      people: numberOfPeople,
      number: contact,
      detail: additionalInfo,
    };

    fetch("http://localhost:4000/event", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "success") {
          setName("");
          setEmail("");
          setDate("");
          setEventType("");
          setNumberOfPeople("");
          setAdditionalInfo("");
          setContact("");
          alert(data.message);
        } else {
          console.log("Something went wrong");
        }
      });
  };

  return (
    <div className={styles.eventForm}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          className={styles.inputField}
        />
      </label>

      <label>
        Type of Event:
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className={styles.inputField}
        >
          <option value="">Please choose an option</option>
          <option value="Ceremony">Ceremony</option>
          <option value="Conference">Conference</option>
          <option value="Corporate Meeting">Corporate Meeting</option>
          <option value="Social Gathering">Social Gathering</option>
          <option value="Wedding">Wedding</option>
          <option value="Other">Other</option>
          {/* Add more event types as needed */}
        </select>
      </label>

      <label>
        Number of People:
        <select
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
          className={styles.inputField}
        >
          <option value="">Select Number of People</option>
          <option value="50-150">50-150</option>
          <option value="151-250">151-250</option>
          <option value="251-400">251-400</option>
          <option value="401-600">401-600</option>
          <option value=">600"> More than 600</option>
          {/* Add more options as needed */}
        </select>
      </label>

      <label>
        Telephone Number:
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className={styles.inputField}
        />
      </label>

      <label>
        Tell us more:
        <textarea
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          className={styles.inputField}
        />
      </label>
      <label htmlFor="">
        <button onClick={submitHandler}>Submit</button>
      </label>
      {/* Add submit button or further actions as needed */}
    </div>
  );
};

export default Event;