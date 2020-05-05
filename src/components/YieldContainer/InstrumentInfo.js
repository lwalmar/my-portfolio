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
        <ButtonCircle
          diameter={'45px'}
        />
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
        <div className='instrumentInfoItem_title'>{'Ставка купона:'}</div>
        <div>{`${data.coupon} %`}</div>
      </div>
      <div className='instrumentInfo_item'>
        <div className='instrumentInfoItem_title'>{'Накопленный купон:'}</div>
        <div>{`+${(data.coupon*data.currentInvestment/100).toFixed(2)}`}</div>
      </div>
    </div>
  </Fragment>
)};

export default CostInstrumentInfo;
