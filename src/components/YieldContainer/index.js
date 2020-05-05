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

const YieldContainer = ({
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
    <div className="yieldContainer">
      {isLoading ? (
        <div className="myPortfolio_loading">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="yieldContainer_wrapper">
          {bondsDataList.map((bondData) => (
            <div
              className='yieldContainerItem'
              key={bondData.isin}
              onClick={() => setSelectedIsin(bondData.isin)}
            >
              <div className='yieldContainerItem_wrapper'>
                <div className='yieldContainerItem_logo'>
                  <ButtonCircle diameter={'45px'}>
                    {bondData.img &&
                      <div className='yieldContainerItemLogo_wrapper'>
                        <img src={require(`../../icons/logos/${bondData.img}.png`)} alt="Smiley face"/>
                      </div>
                    }
                  </ButtonCircle>
                </div>
                <div className='yieldContainerItem_info'>
                  <div className='yieldContainerItemInfo_title'>
                    <div>{bondData.standardName}</div>
                    <div>${bondData.yield}</div>
                  </div>
                  <div className='yieldContainerItemInfo_values'>
                    <div>{`${bondData.quantity} шт.`}</div>
                    <div>{`К погашению ${bondData.maturityDate}`}</div>
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
      )}
    </div>
)};

export default YieldContainer;
