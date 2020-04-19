import React, {Component} from 'react';
import ButtonSquare from '../Common/ButtonSquare';
import ButtonCircle from '../Common/ButtonCircle';
import Icon, {GLYPHS} from '../Common/Icon';
import './style.css';
import classNames from 'classnames';

const VIEW_LABEL = {
  'cost': 'Стоимость',
  'yield': 'Доходноть',
  'rating': 'Рейтинг',
  'payment': 'Выплаты'
};

const Header = ({
  viewActive,
  viewAvailable,
  onChangeView
}) => {
  console.log('GLYPHS', GLYPHS)
  return (
  <div>
    <div className="header_settings">
      <ButtonSquare >
        <Icon
          glyph={GLYPHS.INFO}
          height={25}
          width={25}
        />
      </ButtonSquare>
      <ButtonSquare>
        <Icon
          glyph={GLYPHS.PORTFOLIO}
          height={25}
          width={25}
        />
      </ButtonSquare>
    </div>
    <div className="header_info">
      <div className="headerInfo_total">{"937 584,00 ₽"}</div>
      <div className="headerInfo_inDetail">
        <div className="headerInfo_yieldInPercent">{"17,14 %"}</div>
        <div className="headerInfo_yieldInCcy">{"27370,71 ₽"}</div>
        <div className="headerInfo_time">
          {"24 часа"}
          <span className="headerInfoTime_icon">
            <ButtonCircle>
              <Icon
                glyph={GLYPHS.CALENDAR1}
                height={25}
                width={25}
              />
            </ButtonCircle>
          </span>
        </div>
      </div>
    </div>
    <div className="header_view">
      <div className="header_viewList">
        <div className="header_viewList_content">
          {viewAvailable.map((view) => (
            <div className={classNames(
              'header_viewItem',
              {'active': view === viewActive}
            )}>
              {VIEW_LABEL[view]}
            </div>))};
        </div>
      </div>
    </div>
  </div>
)};

export default Header;
