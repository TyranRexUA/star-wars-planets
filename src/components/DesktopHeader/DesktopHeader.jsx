import React from 'react';
import { withRouter } from 'react-router-dom';
import s from './DesktopHeader.module.scss';

const DesktopHeader = ({ match, history }) => {
  return (
    <div className={s.header}>
      {match.path !== '/'
        ? (
          <img src={require('../../img/back.svg').default} alt="ho_back" className={s.btn} onClick={() => history.goBack()} />
        ) : <div className={s.empty} />}
      <img src="./logo192.png" alt="ho_back" className={s.btn} onClick={() => history.goBack()} />
      <div className={s.barOverlay} />
    </div>
  )
};

export default withRouter(React.memo(DesktopHeader))