import { useState, useEffect } from 'react'
import { getProductList, addProduct, Product } from '../apis/api'
import styled from 'styled-components'
import { AdminBoard } from '../components/AdminBoard'

export const ProductManage = () => {
  //상품리스트
  const [productList, setProductList] = useState<Product[]>([])
  // 페이지
  const [pageList, setPageList] = useState([1])
  const [curPage, setCurPage] = useState(0)
  const [prevBlock, setPrevBlock] = useState(0)
  const [nextBlock, setNextBlock] = useState(0)
  const [lastPage, setLastPage] = useState(0)

  const requestAddProduct = async () => {
    const AddProduct = await addProduct({
      title: 'test4',
      price: 50000,
      description: 'test4 description',
      tags: ['페이스'],
    })
  }

  const handleClickAddProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault()
    requestAddProduct()
  }

  useEffect(() => {
    ;(async () => {
      try {
        const data = await getProductList()
        setProductList(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    })()
  }, [])
  const CATEGORYOPTION = [
    {
      label: '카테고리',
      value: '카테고리',
    },
    {
      label: '페이스',
      value: '페이스',
    },
    {
      label: '립',
      value: '립',
    },
    {
      label: '아이',
      value: '아이',
    },
  ]
  const SORTOPTION = [
    { label: '정렬', value: '정렬' },
    { label: '낮은가격', value: '낮은가격' },
    { label: '높은가격', value: '높은가격' },
    { label: '품절여부', value: '품절여부' },
  ]

  //<button onClick={handleClickAddProduct}>추가</button>
  return (
    <>
      <AdminBoard title="상품관리">
        <Select className="category">
          {CATEGORYOPTION.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Select>
          {SORTOPTION.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <BoardHeader>
          <input type="checkbox" name="" id="" className="board-header chk" />
          <span className="board-header index">No</span>
          <span className="board-header cate">카테고리</span>
          <span className="board-header title">상품명</span>
          <span className="board-header price">가격</span>
          <span className="board-header sold">품절여부</span>
        </BoardHeader>
        <BoardContent>
          {productList.map((product, index) => (
            <BoardItem>
              <input type="checkbox" name="" id="" className="board-header chk" />
              <span className="board-header index">{index + 1}</span>
              <span className="board-header cate">{product.tags}</span>
              <span className="board-header title">{product.title}</span>
              <span className="board-header price">{product.price}</span>
              <span className="board-header sold">{product.isSoldOut ? 'Y' : 'N'}</span>
            </BoardItem>
          ))}
        </BoardContent>
        <ButtonWrap>
          <DeleteButton>삭제</DeleteButton>
          <PageButtonWrap>
            <PageMoveButton>처음</PageMoveButton>
            {pageList.map((page) => (
              <PageButton value={page}>{page}</PageButton>
            ))}
            <PageMoveButton value={lastPage}>마지막</PageMoveButton>
          </PageButtonWrap>
          <AddButton>등록</AddButton>
        </ButtonWrap>
      </AdminBoard>
    </>
  )
}

const BoardWrap = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.text_primary};
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  border-radius: ${(props) => props.theme.borderRadius};
`

const BoardHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .board-header {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .chk {
    flex-grow: 0.5;
  }
  .index {
    flex-grow: 0.5;
  }
  .title {
    flex-grow: 3;
  }
`

const BoardContent = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
`

const BoardItem = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .board-header {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .chk {
    flex-grow: 0.5;
  }
  .index {
    flex-grow: 0.5;
  }
  .title {
    flex-grow: 3;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.gray_1};
  }
`

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AddButton = styled.button`
  border: none;
  outline: none;
  width: 76px;
  height: 42px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  color: #fff;
`

const DeleteButton = styled.button`
  background-color: #fff;
  border: none;
  outline: none;
  width: 76px;
  height: 42px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  color: ${(props) => props.theme.colors.text_secondary};
`
const PageButtonWrap = styled.div`
  display: flex;
  align-items: center;
`

const PageButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
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

const Select = styled.select`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 90px;
  height: 32px;
  border: 1px solid ${(props) => props.theme.colors.gray_3};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.gray_3};
  outline: ${(props) => props.theme.colors.primary};
  &.category {
    right: 130px;
  }
`
