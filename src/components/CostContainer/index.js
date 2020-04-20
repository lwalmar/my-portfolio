import React, {Component} from 'react';
import ButtonSquare from '../Common/ButtonSquare';
import ButtonCircle from '../Common/ButtonCircle';
import Icon, {GLYPHS} from '../Common/Icon';
import './style.css';
import classNames from 'classnames';

const CostContainer = ({
  isins
}) => {
  return (
    <div className="costContainer">
      <div className="costContainer_wrapper">
        {isins.map((isin) => (
          <div
            className='costContainerItem'
            onClick={() => null}
          >
            <div className='costContainerItem_wrapper'>
              <div className='costContainerItem_logo'>
                <ButtonCircle
                  diameter={'45px'}
                />
              </div>
              <div className='costContainerItem_info'>
                <div className='costContainerItemInfo_title'>
                  <div>{'Альфа Банк'}</div>
                  <div>{'101,58 %'}</div>
                </div>
                <div className='costContainerItemInfo_values'>
                  <div>{'02.02.2022'}</div>
                  <div>{'10833,35 ₽'}</div>
                  <div>{'12,42 %'}</div>
                </div>
              </div>
            </div>
          </div>))};
      </div>
    </div>
)};

export default CostContainer;
