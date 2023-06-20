import { AdminBoard } from '../components/AdminBoard'
import { getUserList, User } from '../apis/api'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { BoardPagination } from '../components/BoardPagination'

export const UserList = () => {
  const [UserList, setUserList] = useState<User[]>([])

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

  useEffect(() => {
    ;(async () => {
      try {
        const data = await getUserList()
        setUserList(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    })()
  }, [])

  return (
    <AdminBoard title="사용자 목록">
      <BoardHeader>
        <span className="board-header index">No</span>
        <span className="board-header profile">프로필</span>
        <span className="board-header email">이메일</span>
        <span className="board-header name">이름</span>
      </BoardHeader>
      <BoardContent>
        {UserList.length === 0 ? (
          <EmptyList>가입된 사용자가 없습니다.</EmptyList>
        ) : (
          currentPages(UserList).map((user, index) => (
            <BoardItem key={index}>
              <span className="board-header index">{index + 1}</span>
              <img className="board-header profile" src={user.profileImg} />
              <span className="board-header email">{user.email}</span>
              <span className="board-header name">{user.displayName}</span>
            </BoardItem>
          ))
        )}
      </BoardContent>
      <BottomWrap>
        <BoardPagination
          limitPage={limitPage}
          totalProduct={UserList.length}
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
  .name {
    flex-grow: 3;
  }
`
const BoardContent = styled.div`
  width: 100%;
  max-height: 360px;
  overflow: hidden;
`
const BoardItem = styled.div`
  width: 100%;
  height: 120px;
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
  .profile {
    width: 100px;
    height: 100px;
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
