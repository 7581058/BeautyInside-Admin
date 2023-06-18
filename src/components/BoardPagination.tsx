import { styled } from 'styled-components'
import { useState } from 'react'

export const BoardPagination = ({ limitPage, totalProduct, paginate, curpage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProduct / limitPage); i += 1) {
    pageNumbers.push(i)
  }

  return (
    <PageButtonWrap>
      <PageMoveButton>처음</PageMoveButton>
      {pageNumbers.map((page, index) => (
        <PageButton
          key={index}
          value={page}
          onClick={() => paginate(page)}
          className={page === curpage ? 'active' : ''}
        >
          {page}
        </PageButton>
      ))}
      <PageMoveButton>마지막</PageMoveButton>
    </PageButtonWrap>
  )
}

const PageButtonWrap = styled.div`
  display: flex;
  align-items: center;
`

const PageButton = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #fff;
  &.active {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

const PageMoveButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.gray_3};
  width: 60px;
  height: 25px;
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;
`
