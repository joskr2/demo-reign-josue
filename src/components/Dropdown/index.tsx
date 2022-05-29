import { FC, useState } from 'react'
import { IDropdown, IDropdownOption } from '../../interfaces/IDropdown'
import './style.css';
import Down from './../../assets/images/down-chevron.png';
import Up from './../../assets/images/up-chevron.png';


const Dropdown: FC<IDropdown> = ({ title, items }) => {

  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<IDropdownOption>();
  const toggle = () => setOpen(prevState => !prevState);

  const handleOnClick = (item: IDropdownOption) => {
    setSelection(item);
    console.log(selection)
  }

  return (
    <div className="wrapper">
      <div
        tabIndex={0}
        className="header"
        role="button"
        onClick={toggle}
      >
        <div className="header__title">
          <p className="header__title--placeholder">{!selection?.label ? title : selection?.label}</p>
        </div>  
        <div className="header__action" >
          <img src={open ? Up : Down} alt="chevron" width='14px'  height='14px'/>
        </div>
      </div>
      {open && (
        <ul className="list">
          {items.map(item => (
            <li className="list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <img src={item.url} alt='item' width='24px' />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown