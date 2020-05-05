import React, { Fragment, useState, useEffect } from 'react';
import ButtonSquare from '../Common/ButtonSquare';
import ButtonCircle from '../Common/ButtonCircle';
import LoadingSpinner from './../Common/LoadingSpinner';
import { ReactComponent as ArrowIncrease } from '../../icons/arrow-increase.svg';
import './style.css';
import {bondsDataMap} from './../../data';
import classNames from 'classnames';
import InstrumentInfo from './InstrumentInfo';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const loadData = (isins) =>
  new Promise((resolve, error) => setTimeout(() => {
    const result = isins.map((isin) => bondsDataMap[isin]);
    resolve(result)
    }, 800));

const CostContainer = ({
  isins
}) => {
  const [bondsDataList, setBondsDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIsin, setSelectedIsin] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await loadData(isins);
      setBondsDataList(result);
      setIsLoading(false);
    };
    fetchData();
  }, [isins]);

  return (
    <div className="costContainer">
      {isLoading ? (
        <div className="myPortfolio_loading">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="costContainer_wrapper">
          {bondsDataList.map((bondData) => (
            <div
              className='costContainerItem'
              onClick={() => setSelectedIsin(bondData.isin)}
            >
              <div className='costContainerItem_wrapper'>
                <div className='costContainerItem_logo'>
                  <ButtonCircle
                    diameter={'45px'}
                  />
                </div>
                <div className='costContainerItem_info'>
                  <div className='costContainerItemInfo_title'>
                    <div>{bondData.standardName}</div>
                    <div>{`${bondData.currentInvestment} ${bondData.ccy}`}</div>
                  </div>
                  <div className='costContainerItemInfo_values'>
                    <div>{`${bondData.quantity} шт.`}</div>
                    <div>{
                      bondData.currentInvestmentsChangeInPercent >= 0
                      ? <span className='costContainerItem_increase'>
                        <ArrowIncrease />
                      </span>
                      : <span className='costContainerItem_decrease'>
                        <ArrowIncrease />
                      </span>
                    }
                      <span>
                        {bondData.currentInvestmentsChangeInPercent > 0 && '+'}
                        {bondData.currentInvestmentsChangeInPercent}
                      </span>
                    </div>
                    <div>{
                      bondData.currentInvestmentsChangeInPercent >= 0 && '+'
                    }
                      <span>{(bondData.currentInvestmentsChangeInPercent * bondData.currentInvestment / 100).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>))};
            <Modal open={Boolean(selectedIsin)} onClose={() => setSelectedIsin(null)} center>
              <InstrumentInfo
                data={bondsDataMap[selectedIsin]}
              />
            </Modal>
        </div>
      )}
    </div>
)};

export default CostContainer;
