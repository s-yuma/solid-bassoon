import React from 'react'

const Pagination = ({totalPage=5}) => {
  return (
    <div>
      {[...Array(totalPage)].map((ele, ind) => (
        <button key={ind}>{ind + 1}</button>
      ))}
    </div>
  )
}

export default Pagination