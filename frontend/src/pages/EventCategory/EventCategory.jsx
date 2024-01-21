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

// import styles from './CategoryEvent.css';

// export default function CategoryEvent({ categories, activeCat, setActiveCat }) {
//   const cats = categories.map(cat =>
//     <li
//       key={cat}
//       className={cat === activeCat ? styles.active : ''}
//       // FYI, the below will also work, but will give a warning
//       // className={cat === activeCat && 'active'}
//       onClick={() => setActiveCat(cat)}
//     >
//       {cat}
//     </li>
//   );
//   return (
//     <ul className={styles.CategoryEvent}>
//       {cats}
//     </ul>
//   );
// }