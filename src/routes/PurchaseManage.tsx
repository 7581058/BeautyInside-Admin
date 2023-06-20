import { AdminBoard } from '../components/AdminBoard'
import { getPurchaseList, TransactionDetail } from '../apis/api'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { BoardPagination } from '../components/BoardPagination'

export const PurchaseManage = () => {
  const [purchaseList, setpurchaseList] = useState<TransactionDetail[]>([])

  const [curPage, setCurPage] = useState(1)
  const [limitPage, setLimitPage] = useState(5)

  //페이지 계산
  const lastPage = curPage * limitPage
  const firstPage = lastPage - limitPage
  const currentPages = (page) => {
    let currentPages = 0
    currentPages = page.slice(firstPage, lastPage)
    return currentPages
  }

  return (
    <AdminBoard title="거래 내역">
      <BoardHeader>
        <span className="board-header index">No</span>
        <span className="board-header date">거래일</span>
        <span className="board-header name">거래 고객명</span>
        <span className="board-header price">거래금액</span>
        <span className="board-header bank">거래은행</span>
        <span className="board-header title">상품명</span>
        <span className="board-header calcel">취소여부</span>
        <span className="board-header done">완료여부</span>
      </BoardHeader>
      <BoardContent>
        {purchaseList.length === 0 ? (
          <EmptyList>거래 내역이 없습니다.</EmptyList>
        ) : (
          currentPages(purchaseList).map((list, index) => (
            <BoardItem key={index}>
              <span className="board-header index">No</span>
              <span className="board-header date">{list.timePaid}</span>
              <span className="board-header name">{list.user.displayName}</span>
              <span className="board-header price">{list.product.price}</span>
              <span className="board-header bank">{list.account.bankName}</span>
              <span className="board-header title">{list.product.title}</span>
              <span className="board-header cancel">{list.isCanceled ? 'Y' : 'N'}</span>
              <span className="board-header done">{list.done ? 'Y' : 'N'}</span>
            </BoardItem>
          ))
        )}
      </BoardContent>
      <BottomWrap>
        <BoardPagination
          limitPage={limitPage}
          totalProduct={purchaseList.length}
          paginate={setCurPage}
          curpage={curPage}
        />
      </BottomWrap>
    </AdminBoard>
  )
}

const BoardHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .board-header {
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .index {
    flex-grow: 0.5;
  }
  .date {
    flex-grow: 1.2;
  }
  .title {
    flex-grow: 3;
  }
  .done {
    flex-grow: 0.5;
  }
  .cancel {
    flex-grow: 0.5;
  }
`
const BoardContent = styled.div`
  width: 100%;
  max-height: 360px;
  overflow: hidden;
`

const BoardItem = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .board-header {
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .index {
    flex-grow: 0.5;
  }
  .date {
    flex-grow: 1.2;
  }
  .title {
    flex-grow: 3;
  }
  .done {
    flex-grow: 0.5;
  }
  .cancel {
    flex-grow: 0.5;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.gray_1};
  }
`

const EmptyList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
`
const BottomWrap = styled.div`
  position: absolute;
  width: calc(100% - 40px);
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
