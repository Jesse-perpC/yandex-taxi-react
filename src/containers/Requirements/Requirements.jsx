import React from 'react'
import ScrollableAnchor, { goToAnchor, configureAnchors, goToTop } from 'react-scrollable-anchor'
import Button from '../../components/Button'
import TitleContainer from '../../components/TitleContainer'
import { FaCheck } from 'react-icons/fa'
import CarTop from '../../img/car-top.png'
import './requirements.css'

const items = [
  {
    id: 1,
    title: 'Возраст от 21 года',
  },
  {
    id: 2,
    title: 'Стаж В/У от 3 лет',
  },
  {
    id: 3,
    title: 'Страховка пассажиров',
  },
  {
    id: 4,
    title: 'Страховка от 2003 года',
  },
  {
    id: 5,
    title: 'Смартфон на Android',
  },
]

export default class Requirements extends React.Component {
  componentWillMount() {
    configureAnchors({ offset: -80, scrollDuration: 800 })
  }

  render() {
    return (
      <div className="requirements-container">
        <div>
          <ScrollableAnchor id={'requirements'}>
            <TitleContainer title="Условия работы и требования" />
          </ScrollableAnchor>
          <div className="requirements-list-block">
            <ul>
              {items.map(item => <li key={item.id}><FaCheck className="requirements-list-check-icon" />{item.title}</li>)}
            </ul>
            <Button title="СТАТЬ ВОДИТЕЛЕМ" scroll />
          </div>
        </div>
        <img src={CarTop} alt="car top" />
      </div>
    )
  }
}