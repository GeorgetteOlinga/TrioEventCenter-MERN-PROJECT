import style from "../styles/EventCategory.module.css";

const EventCategory = () => {
  return (
    <div className={style.wrapper}>
      <div>Meetings</div>
      <div>Confrences</div>
      <div>Weedings</div>
      <div>Birthday party</div>
      <div>Graduation party</div>
      <div>Show</div>
    </div>
  );
};

export default EventCategory;
