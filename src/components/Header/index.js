import React, {Component} from 'react';
import ButtonSquare from '../Common/ButtonSquare';
import ButtonCircle from '../Common/ButtonCircle';
import { ReactComponent as MenuIcon } from '../../icons/menu.svg';
import { ReactComponent as BellIcon } from '../../icons/bxs-bell.svg';
import { ReactComponent as Calendar } from '../../icons/calendar-outlined.svg';
import './style.css';
import classNames from 'classnames';

const VIEW_LABEL = {
  'cost': 'Стоимость',
  'yield': 'Доходноть',
  'rating': 'Рейтинг',
  'payments': 'Выплаты'
};

const Header = ({
  viewActive,
  viewAvailable,
  onChangeView
}) => {
  return (
  <div className="header">
    <div className="header_wrapper">
      <div className="header_settings">
        <ButtonSquare >
          <MenuIcon />
        </ButtonSquare>
        <ButtonSquare>
          <BellIcon />
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
                <Calendar />
              </ButtonCircle>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="header_view">
      <div className="header_viewList">
        <div className="header_viewList_content">
          {viewAvailable.map((view) => (
            <div
              className={classNames(
                'header_viewItem',
                {'active': view === viewActive}
                )}
              onClick={() => onChangeView(view)}
            >
              {VIEW_LABEL[view]}
            </div>))}
        </div>
      </div>
    </div>
  </div>
)};

export default Header;
