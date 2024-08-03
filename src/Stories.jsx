import React, { useEffect } from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {
  const context = useGlobalContext();
  const {hits, nbPages} = context
  return (
    <div> <h2>My Tech Posts</h2>
      {
        hits.map((hit) => {
          return <h2>{hit.title}</h2>
        })
      }
    </div>
  )
}

export default Stories