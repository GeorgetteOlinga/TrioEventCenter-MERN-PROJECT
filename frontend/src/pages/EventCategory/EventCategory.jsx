import React from "react";
import style from "./EventCategory.module.css";

const EventCategory = () => {
  return (
    <div className={{...style.wrapper}}>
      <h4>
      <div>Meetings</div>
      <div>Confrences</div>
      <div>Weedings</div>
      <div>Birthday party</div>
      <div>Graduation party</div>
      <div>Show</div></h4>
      <span><img src="https://storage.googleapis.com/mv-prod-blog-en-assets/2020/02/how-to-stop-working-on-weekends.webp" alt="" /></span>
      <span><img src="https://www.heartandsoulgourmetmeals.com.au/wp-content/uploads/2020/05/Family-Gatherings-1.jpg" alt="" /></span>
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