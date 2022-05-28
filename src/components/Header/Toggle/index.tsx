import { FC, useEffect, useState } from 'react';
import { IToggle } from '../../../interfaces/IToggle';
import './style.css';

const Toggle: FC<IToggle> = ({ defaultOnAll = true }) => {

  const [showAll, setShowAll] = useState(defaultOnAll);
  const [showFavs, setShowFavs] = useState(!defaultOnAll);

  const handleClickOnShowAll = () => {
    setShowAll(!showAll);
    setShowFavs(!showFavs);
  }

  const handleClickOnShowFavs = () => {
    setShowFavs(!showFavs);
    setShowAll(showFavs);
  }

  return (
    <section>
      <button className={showAll ? 'button_active' : 'button_inactive'} onClick={() => handleClickOnShowAll()}>
        <span className={showAll ? 'text_active' : 'text_inactive'}>All</span>
      </button>
      <button className={showFavs ? 'button_active' : 'button_inactive'} onClick={() => handleClickOnShowFavs()}>
        <span className={showFavs ? 'text_active' : 'text_inactive'}>My faves</span>
      </button>
    </section>
  )
}

export default Toggle