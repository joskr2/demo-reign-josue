import './style.css';
import FavIcon from '../../assets/images/favorite.png'
import NoFavIcon from '../../assets/images/no-favorite.png';
import LightClockIcon from '../../assets/images/time-light.png';
import DarkClockIcon from '../../assets/images/time-dark.png';

const Card = () => {
  return (
    <div className="card">
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
          <img className="card-icon" src={NoFavIcon} width='24px' height='22px' />
        </div>
      </div>
    </div>
  )
}

export default Card;