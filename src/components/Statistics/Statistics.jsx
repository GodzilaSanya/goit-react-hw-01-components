import getRandomHexColor from 'helpers/randomHexColor';
import css from './statistics.module.css';

const Statistics = ({ title, data }) => {
  const statisticItems = data.map(({ id, label, percentage }) => (
    <li
      key={id}
      className={css.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
      <ul className={css.stat_list}>{statisticItems}</ul>
    </section>
  );
};
export default Statistics;
