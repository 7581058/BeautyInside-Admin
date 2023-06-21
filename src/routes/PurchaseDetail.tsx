import { AdminBoard } from '../components/AdminBoard'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { SlArrowLeft } from 'react-icons/sl'
import { useLocation, NavLink, useNavigate } from 'react-router-dom'

export const PurchaseDetail = () => {
  return (
    <>
      <PrevButton to="/purchase">
        <SlArrowLeft />
      </PrevButton>
      <AdminBoard title="거래 내역 상세 정보">
        <ButtonWrap>
          <Button>취소해제</Button>
          <Button>거래완료</Button>
        </ButtonWrap>
        <DetailWrap>
          <ProductWrap>
            <ImageBox>
              <img src="" alt="" />
            </ImageBox>
            <ProductInfo>
              <Label>상품정보</Label>
              <Info>
                <Labels>카테고리</Labels> <span>립</span>
              </Info>
              <Info>
                <Labels>상품명</Labels> <span>립스틱-비바렐라</span>
              </Info>
              <Info>
                <Labels>가격</Labels> <span>40,000원</span>
              </Info>
            </ProductInfo>
          </ProductWrap>
          <InfoBox>
            <Inner>
              <Label>구매자 정보</Label>
              <div>
                <Info>
                  <Labels>구매자 이메일</Labels> <span>guest1@email.com</span>
                </Info>
                <Info>
                  <Labels>구매자 이름</Labels> <span>guest1</span>
                </Info>
              </div>
            </Inner>
            <Inner>
              <Label>계좌 정보</Label>
              <div>
                <Info>
                  <Labels>은행명</Labels> <span>guest1@email.com</span>
                </Info>
                <Info>
                  <Labels>계좌번호</Labels> <span>guest1@email.com</span>
                </Info>
              </div>
            </Inner>
            <Inner>
              <Label>거래 정보</Label>
              <div>
                <Info>
                  <Labels>거래일</Labels> <span>guest1@email.com</span>
                </Info>
                <Info>
                  <Labels>취소여부</Labels> <span>guest1@email.com</span>
                </Info>
                <Info>
                  <Labels>완료여부</Labels> <span>guest1@email.com</span>
                </Info>
              </div>
            </Inner>
          </InfoBox>
        </DetailWrap>
      </AdminBoard>
    </>
  )
}

const PrevButton = styled(NavLink)`
  position: fixed;
  top: 15px;
  left: 240px;
  width: 35px;
  height: 35px;
  background-color: #fff;
  z-index: 11;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const ButtonWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  justify-content: right;
  gap: 10px;
  //margin-top: 20px;
  box-sizing: border-box;
`

const Button = styled.button`
  right: 96px;
  bottom: 0;
  background-color: #fff;
  border: none;
  outline: none;
  width: 76px;
  height: 42px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  color: ${(props) => props.theme.colors.text_secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
const DetailWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const ProductWrap = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  img {
    width: 100%;
  }
`
const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`

const Inner = styled.div`
  display: flex;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

const Label = styled.p`
  font-size: 20px;
  font-weight: 700;
  width: 130px;
  margin: 0;
`
const Labels = styled.span`
  width: 130px;
  margin: 0;
`

const Info = styled.p`
  font-size: 18px;
  display: flex;
  margin: 0;
`
