import PropTypes from 'prop-types';
import React from 'react';
import style from './style.css';

/* eslint-disable global-require, max-len */
export const GLYPHS = {
  INFO: require('./icons/info.svg'),
  GEAR: require('./icons/gear.svg'),
  PORTFOLIO: require('./icons/portfolio.svg'),
  ARROW_UP: require('./icons/arrow-up.svg'),
  ARROW_DOWN: require('./icons/arrow-down.svg'),
  MARKET: require('./icons/market.svg'),
  DISCUSSION: require('./icons/discussion.svg'),
  EDIT: require('./icons/edit.svg'),
  CALENDAR1: require('./icons/calendar-picker--cross.svg')
};
/* eslint-enable global-require, max-len */

const Icon = ({
  dataId,
  glyph,
  height,
  width
}) => (
  <div
    className={style.iconWrapper}
    data-id={dataId}
  >
    <svg
      className={style.svgIcon}
      height={height}
      stroke={null}
      width={width}
    >
      <use xlinkHref={`#${glyph.id}`} />
    </svg>
  </div>
);

Icon.propTypes = {
  dataId: PropTypes.string,
  glyph: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  height: PropTypes.string.isRequired,
  strokeWidth: PropTypes.string,
  width: PropTypes.string.isRequired
};

Icon.defaultProps = {
  dataId: null,
  strokeWidth: null
};

export default Icon;
