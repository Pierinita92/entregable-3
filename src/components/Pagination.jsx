import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({setPage, RESIDENTS_PERPAGE, location}) => {
  return (
    <ul className='pagination_list'>
    {
      numbersPage(location, RESIDENTS_PERPAGE).map(numbersPage => <li onClick={() => setPage (numbersPage)} key={numbersPage}>{numbersPage}</li>)
    }
  </ul>
  )
}

export default Pagination