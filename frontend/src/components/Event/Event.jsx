import React, { useState } from "react";
import styles from "./Event.module.css";
import axios from 'axios'

const Event = () => {
  
  const [date, setDate] = useState("2022-01-17");
  const [eventType, setEventType] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [contact, setContact] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const submitHandler = async () => {
    let obj = {
      date,
      type: eventType,
      people: numberOfPeople,
      number: contact,
      detail: additionalInfo,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/events', obj, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }

    /**

    fetch("http://localhost:5000/api/events", {
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
   */
    };

  return (
    <div>
 {/* this is the closing botton  */}
 <button title="Close (Esc)" type="button" class="mfp-close">×</button>

      <div className={styles.eventForm}>
      <label>
        Event Date:<br/>
        <input
          type="date"
          className={styles.dateField}

          onChange={(e) => setDate(e.target.value)}
        />
      </label><br/> <br/>

      <label>
        Type of Event:
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className={styles.selectField}
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
          className={styles.selectField}
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
        rows={8}
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
    <p style="{{
      marginLeft: 20,
      fontSize: 12
    }}">  If you’re planning an event or have any questions about our venue, please complete the request information form above, call The Grand Event Center at 614.453.43-- or email trioentertainment@gmail.com.</p>

 </div> );
};

export default Event;