import React, { Fragment, useState, useEffect } from 'react';
import ButtonSquare from '../Common/ButtonSquare';
import ButtonCircle from '../Common/ButtonCircle';
import { ReactComponent as ArrowIncrease } from '../../icons/arrow-increase.svg';
import './InstrumentInfo.css';
import classNames from 'classnames';

const CostInstrumentInfo = ({
  data
}) => {
  if (!data) {
    return null;
  }
  return (
  <Fragment>
    <div className='instrumentInfo_header'>
      <div className='instrumentInfo_logo'>
        <ButtonCircle diameter={'45px'}>
          {data.img &&
          <div className='costContainerItemLogo_wrapper'>
            <img src={require(`../../icons/logos/${data.img}.png`)} alt="Smiley face"/>
          </div>
          }
        </ButtonCircle>
      </div>
      <div className='instrumentInfo_info'>
        <div className='instrumentInfo_title'>
          <div>{data.standardName}</div>
          <div className='instrumentInfoTitle_rating'>{data.rating}</div>
        </div>
      </div>
    </div>
    <div className='instrumentInfo_list'>
      <div className='instrumentInfo_item'>
        <div className='instrumentInfoItem_title'>{'Количество:'}</div>
        <div>{`${data.quantity} шт.`}</div>
      </div>
      <div className='instrumentInfo_item'>
        <div className='instrumentInfoItem_title'>{'Стоимость:'}</div>
        <div>{`${data.currentInvestment} ${data.ccy}`}</div>
      </div>
      <div className='instrumentInfo_item'>
        <div className='instrumentInfoItem_title'>{'Изменение:'}</div>
        <div>
          <div>{
            data.currentInvestmentsChangeInPercent >= 0
              ? <span className='costContainerItem_increase'>
                <ArrowIncrease />
              </span>
              : <span className='costContainerItem_decrease'>
                <ArrowIncrease />
              </span>
          }
            <span>
              {data.currentInvestmentsChangeInPercent > 0 && '+'}
              {data.currentInvestmentsChangeInPercent}</span>
          </div>
        </div>
        <div>{
          data.currentInvestmentsChangeInPercent > 0 && '+'
        }
          <span>{(data.currentInvestmentsChangeInPercent * data.currentInvestment / 100).toFixed(2)}</span>
        </div>
      </div>
      <div className='instrumentInfo_item'>
        <div className='instrumentInfoItem_title'>{'Дата погашения:'}</div>
        <div>{`${data.maturityDate}`}</div>
      </div>
    </div>
  </Fragment>
)};

export default CostInstrumentInfo;
