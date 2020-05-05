import React, { Fragment, useState, useEffect, useRef } from 'react';
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
  const [groupedDataMap, setGroupedDataMap] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIsin, setSelectedIsin] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await loadData(isins);
      const groupedDataMap = result.reduce((groupsMap, data) => {
        if (groupsMap[data.rating]) {
          groupsMap[data.rating].push(data);
        } else {
          groupsMap[data.rating] = [data]
        }
        return groupsMap;
      }, {})
      setGroupedDataMap(groupedDataMap);
      setIsLoading(false);
    };
    fetchData();
  }, [isins]);

  return (
    <div className="ratingContainer">
      {isLoading ? (
        <div className="myPortfolio_loading">
          <LoadingSpinner />
        </div>
      ) : (
        <div>{
          Object.keys(groupedDataMap).map((rating) => (
            <div key={rating}>
              <div className="ratingContainer_title">{rating}</div>
              <div className="ratingContainer_wrapper">
                {groupedDataMap[rating].map((bondData) => (
                  <div
                    key={bondData.isin}
                    className='ratingContainerItem'
                    onClick={() => setSelectedIsin(bondData.isin)}
                  >
                    <div className='ratingContainerItem_wrapper'>
                      <div className='ratingContainerItem_logo'>
                        <ButtonCircle diameter={'45px'}>
                          {bondData.img &&
                          <div className='ratingContainerItemLogo_wrapper'>
                            <img src={require(`../../icons/logos/${bondData.img}.png`)} alt="Smiley face"/>
                          </div>
                          }
                        </ButtonCircle>
                      </div>
                      <div className='ratingContainerItem_info'>
                        <div className='ratingContainerItemInfo_title'>
                          <div>{bondData.standardName}</div>
                          <div>{`${bondData.currentInvestment} ${bondData.ccy}`}</div>
                        </div>
                        <div className='ratingContainerItemInfo_values'>
                          <div>{`${bondData.quantity} шт.`}</div>
                          <div>{
                            bondData.currentInvestmentsChangeInPercent >= 0
                              ? <span className='ratingContainerItem_increase'>
                        <ArrowIncrease />
                      </span>
                              : <span className='ratingContainerItem_decrease'>
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
                  </div>))}
                <Modal open={Boolean(selectedIsin)} onClose={() => setSelectedIsin(null)} center>
                  <InstrumentInfo
                    data={bondsDataMap[selectedIsin]}
                  />
                </Modal>
              </div>
            </div>
          ))
        }</div>
      )}
    </div>
)};

export default CostContainer;
