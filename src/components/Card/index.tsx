import './style.css';
import FavIcon from '../../assets/images/favorite.png'
import NoFavIcon from '../../assets/images/no-favorite.png';
import DarkClockIcon from '../../assets/images/time-dark.png';
import { useState } from 'react';

const Card = () => {

  const [isSelected, setIsSelected] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(prevState => !prevState);
  const toggleSelected = () => setIsSelected(prevState => !prevState);

  const handleOpenLink = (url: string) => {
    toggleSelected();

    // if(isSelected){
    //   window.open(url, '_blank')
    // }
  }

  const saveToFavoritesToLocalStorage = (item: any) => {
    console.log(`Save to favorites ${item}`);
    // const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    // const isFavorite = favorites.some(item => item.id === id);

    // if (isFavorite) {
    //   const newFavorites = favorites.filter(item => item.id !== id);
    //   localStorage.setItem('favorites', JSON.stringify(newFavorites));
    // }
    // else {
    //   localStorage.setItem('favorites', JSON.stringify([...favorites, { id }]));
    // }

    if (isFavorite) {
      // save to local storage
      console.log('save to local storage');
      toggleFavorite();
    } else {
      // remove from local storage
      toggleFavorite();
      console.log('remove from local storage');
    }
  }

  return (
    <div onClick={() => handleOpenLink('')} className={isSelected ? 'card card-selected' : 'card'}>
      <div className="card-body">
        <div className="card-content">
          <div className="card-time-info">
            <img className="card-time-info-icon" src={DarkClockIcon} alt="time-icon" width='16px' height='16px' />
            <span className="card-time-info-text">
              3 hours ago by author
            </span>
          </div>
          <div className="card-info">
            <span>Yes, React is taking over front-end development. The question is why.</span>
          </div>
        </div>
        <div className='card-icon-container'>
          <img onClick={saveToFavoritesToLocalStorage} className="card-icon" src={!isFavorite ? NoFavIcon : FavIcon} width='24px' height='22px' />
        </div>
      </div>
    </div>
  )
}

export default Card;