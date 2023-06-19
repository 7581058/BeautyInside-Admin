import { styled } from 'styled-components'
import { SlArrowLeft } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'

export const AdminForm = ({ link, title }) => {
  return (
    <>
      <PrevButton to={link}>
        <SlArrowLeft />
      </PrevButton>
      <FormWrap>
        <Inner>
          <Label>
            카테고리<span>*</span>
          </Label>
          <Select></Select>
        </Inner>
        <Inner>
          <Label>
            제품명<span>*</span>
          </Label>
          <Input></Input>
        </Inner>
        <Inner>
          <Label>
            가격<span>*</span>
          </Label>
          <Input></Input>
        </Inner>
        <Inner>
          <Label>
            품절여부<span>*</span>
          </Label>
          <Select></Select>
        </Inner>
        <Inner>
          <Label>
            제품 상세 설명<span>*</span>
          </Label>

          <TextArea></TextArea>
        </Inner>
        <Inner>
          <ImagesInner>
            <Label className="image-label">
              제품 썸네일<span>*</span>
            </Label>
            <ImageBox></ImageBox>
            <FileName></FileName>
            <FileLoadButton>파일 불러오기</FileLoadButton>
          </ImagesInner>
          <ImagesInner>
            <Label className="image-label">
              제품 상세 이미지<span>*</span>
            </Label>
            <ImageBox></ImageBox>
            <FileName></FileName>
            <FileLoadButton>파일 불러오기</FileLoadButton>
          </ImagesInner>
        </Inner>
        <ButtonWrap>
          <CancelButton to="/product">취소</CancelButton>
          <SubmitButton to="/product">{title}</SubmitButton>
        </ButtonWrap>
      </FormWrap>
    </>
  )
}

const FormWrap = styled.div`
  padding-top: 40px;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: auto;
`
const Inner = styled.div`
  width: 500px;
  display: flex;
`

const Label = styled.span`
  width: 150px;
  &.image-label {
    width: 200px;
    margin-bottom: 10px;
  }
  span {
    color: ${(props) => props.theme.colors.primary};
    margin-left: 5px;
  }
`
const Select = styled.select`
  width: 325px;
  height: 35px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  color: ${(props) => props.theme.colors.gray_3};
`
const Input = styled.input`
  width: 320px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  padding-left: 5px;
`

const TextArea = styled.textarea`
  width: 320px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
`
const ImagesInner = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
`

const FileName = styled.div`
  height: 25px;
  margin-top: 10px;
`

const FileLoadButton = styled.button`
  width: 110px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: #fff;
  border-radius: 6px;
  margin-top: 10px;
`
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
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 10px;
  margin-top: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`

const SubmitButton = styled(NavLink)`
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  outline: none;
  width: 76px;
  height: 42px;
  border-radius: 6px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

const CancelButton = styled(NavLink)`
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
