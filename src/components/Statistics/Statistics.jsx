import PropTypes from 'prop-types';
import {
  Statistics,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Stat({ title, stats }) {
  return (
    <Statistics>
      <Title>{title}</Title>
      <StatList>
        {stats.map(stats => (
          <Item id={stats.id} key={stats.id}>
            <Label>{stats.label}</Label>
            <Percentage>{stats.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Statistics>
  );
}

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
