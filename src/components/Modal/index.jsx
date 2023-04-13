import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './index.css';
import { bonusActions } from '../../actions/bonusActions';
import { selectBonusInfo } from './selector';
import FireSvg from '../icons/FireSvg';

function Modal() {
  const { date, burningQuantity, currentQuantity, isModalVisible } = useSelector(selectBonusInfo);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(bonusActions.setModalState(false));
  };

  if (!isModalVisible) {
    return <></>;
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__bonus-title">{currentQuantity} бонусов</h2>
        <div className="modal__info">
          <span className="modal__deadline">{date} сгорит</span>
          <FireSvg />
          <span className="modal__deadline-bonus">{burningQuantity} бонусов</span>
        </div>
      </div>
      <div className="modal__btn" onClick={() => handleClose()}>
        <span className="modal__btn-line"></span>
        <span className="modal__btn-line modal__btn-line_left"></span>
      </div>
    </div>
  );
}

export default Modal;
