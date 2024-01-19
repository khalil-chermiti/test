import React from 'react'
import Place from '../types/Place'

interface Props {
  place: Place
}

const PlaceComponent: React.FC<Props> = ({place}) => {
  return (
      <div key={place.xid}>
        <h2>{place.name}</h2>
      </div>
  )
}

export default PlaceComponent