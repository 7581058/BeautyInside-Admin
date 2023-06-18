import { styled } from 'styled-components'
import {
  HiOutlineCircleStack,
  HiOutlineArchiveBox,
  HiOutlineArchiveBoxXMark,
  HiOutlineCube,
} from 'react-icons/hi2'
import { FiCheckSquare, FiMinusSquare } from 'react-icons/fi'

const today = new Date()
const dateString = today.toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
})

export const DashBoard = () => {
  return (
    <>
      <BoardWrap>
        <TopWrap>
          <BoardLabel>
            오늘<span>({dateString})</span>
          </BoardLabel>
          <TopBox>
            <TopCard>
              <CardText className="label">거래 수</CardText>
              <CardText className="data">10</CardText>
            </TopCard>
            <TopCard>
              <CardText className="label">거래 취소 수</CardText>
              <CardText className="data">3</CardText>
            </TopCard>
            <TopCard>
              <CardText className="label">거래 확정 수</CardText>
              <CardText className="data">7</CardText>
            </TopCard>
            <TopCard className="total-sales">
              <CardText className="label">
                <HiOutlineCircleStack />총 매출
              </CardText>
              <CardText className="data">3,523,000원</CardText>
            </TopCard>
          </TopBox>
        </TopWrap>

        <MiddleWrap>
          <MiddleBox>
            <BoardLabel>상품 현황</BoardLabel>
            <MiddleCard>
              <div>
                <HiOutlineArchiveBox />
                <span>총 상품 수</span>
                <span>84</span>
              </div>
              <div>
                <HiOutlineArchiveBoxXMark />
                <span>현재 품절 상품 수</span>
                <span>4</span>
              </div>
            </MiddleCard>
          </MiddleBox>
          <MiddleBox>
            <BoardLabel>이번달 거래</BoardLabel>
            <MiddleCard>
              <div>
                <HiOutlineCube />
                <span>거래 수</span>
                <span>324</span>
              </div>
              <div>
                <FiMinusSquare />
                <span>거래 취소 수</span>
                <span>35</span>
              </div>
              <div>
                <FiCheckSquare />
                <span>거래 확정 수</span>
                <span>248</span>
              </div>
            </MiddleCard>
          </MiddleBox>
        </MiddleWrap>
        <BottomWrap>
          <BoardLabel>매출 통계</BoardLabel>
          <Chart></Chart>
        </BottomWrap>
      </BoardWrap>
    </>
  )
}

const BoardWrap = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.text_primary};
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const BoardLabel = styled.p`
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
  span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.primary};
    margin-left: 10px;
  }
`

const TopWrap = styled.div`
  height: 100%;
  width: 100%;
  flex-grow: 0.8;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
`
const TopBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 20px;
`

const TopCard = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.total-sales {
    flex-grow: 2;
  }
`

const CardText = styled.p`
  margin: 0;
  &.label {
    font-size: 18px;
  }
  &.data {
    font-size: 30px;
  }
`

const MiddleWrap = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`
const MiddleBox = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
`

const MiddleCard = styled.div`
  height: 100%;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray_1};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: #fff;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    margin-left: 10px;
  }
`

const BottomWrap = styled.div`
  flex-grow: 1.5;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
`

const Chart = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
`
