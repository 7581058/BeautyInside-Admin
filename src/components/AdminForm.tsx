import { styled } from 'styled-components'
import { SlArrowLeft } from 'react-icons/sl'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addProduct } from '../apis/api'

export const AdminForm = ({ link, formtype }) => {
  const [Category, setCategory] = useState([])
  const [Title, setTitle] = useState('')
  const [Price, setPrice] = useState(0)
  const [Description, setDescription] = useState('')
  const [Thumb, setThumb] = useState('')
  const [Detail, setDetail] = useState('')
  const [ThumbTitle, setThumbTitle] = useState('')
  const [DetailTitle, setDetailTitle] = useState('')
  const navigate = useNavigate()
  const CATEGORYOPTION = [
    { label: '카테고리', value: '카테고리' },
    { label: '페이스', value: '페이스' },
    { label: '립', value: '립' },
    { label: '아이', value: '아이' },
  ]
  //이미지 최대 용량
  const THUMB_MAX = 1024 ** 2 //1MB
  const DETAIL_MAX = 1024 ** 2 * 4 //4MB

  const handleChangeCategoryoption = (e) => {
    setCategory(e.target.value)
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value.trim())
  }

  const handleChangePrice = (e) => {
    setPrice(Number(e.target.value))
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value.trim())
  }

  const handleOnInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
  }

  const handleUploadImage = (e) => {
    const { name, files } = e.target
    const file: any = files
    if (file.length === 0) {
      return
    } else {
      const {
        currentTarget: { files },
      } = e
      const theFile = files[0]
      const reader = new FileReader()
      reader?.readAsDataURL(theFile)
      reader.onloadend = (finishedEvent) => {
        const {
          currentTarget: { result },
        }: any = finishedEvent
        if (name === 'thumbnail' && theFile.size < THUMB_MAX) {
          setThumb(result)
          setThumbTitle(theFile.name)
        } else if (name === 'detailimage' && theFile.size < DETAIL_MAX) {
          setDetail(result)
          setDetailTitle(theFile.name)
        }
      }
    }
  }

  const requestAddProduct = async () => {
    const AddProduct = await addProduct({
      title: Title,
      price: Price,
      description: Description,
      tags: Category,
      thumbnailBase64: Thumb,
      photoBase64: Detail,
    })
  }

  const handleClickSubmitButton = (e) => {
    if (
      Category.length === 0 ||
      Category[0] === '카테고리' ||
      Title.length === 0 ||
      Price === 0 ||
      Description.length === 0 ||
      Thumb.length === 0 ||
      Detail.length === 0
    ) {
      alert('필수 항목을 정확하게 입력해주세요.')
    } else {
      if (formtype === '등록') {
        e?.preventDefault()
        requestAddProduct()
        alert('등록이 완료되었습니다.')
        navigate('/product')
      } else if (formtype === '수정') {
        console.log('수정요청')
      }
    }
  }

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
          <Select onChange={handleChangeCategoryoption}>
            {CATEGORYOPTION.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Inner>
        <Inner>
          <Label>
            제품명<span>*</span>
          </Label>
          <Input onChange={handleChangeTitle}></Input>
        </Inner>
        <Inner>
          <Label>
            가격<span>*</span>
          </Label>
          <Input onChange={handleChangePrice} onInput={handleOnInput}></Input>
        </Inner>
        {formtype === '등록' ? (
          ''
        ) : (
          <Inner>
            <Label>
              품절여부<span>*</span>
            </Label>
            <Select></Select>
          </Inner>
        )}
        <Inner>
          <Label>
            제품 상세 설명<span>*</span>
          </Label>
          <TextArea onChange={handleChangeDescription}></TextArea>
        </Inner>
        <Inner>
          <ImagesInner>
            <Label className="image-label">
              제품 썸네일<span>*</span>
            </Label>
            <ImageBox>{Thumb && <img alt="썸네일 이미지" src={Thumb} />}</ImageBox>
            <FileName>{ThumbTitle}</FileName>
            <FileLoadButton htmlFor="filethumb">파일찾기</FileLoadButton>
            <FileLoadInput
              type="file"
              id="filethumb"
              name="thumbnail"
              onChange={handleUploadImage}
            />
          </ImagesInner>
          <ImagesInner>
            <Label className="image-label">
              제품 상세 이미지<span>*</span>
            </Label>
            <ImageBox>{Detail && <img alt="제품 상세 이미지" src={Detail} />}</ImageBox>
            <FileName>{DetailTitle}</FileName>
            <FileLoadButton htmlFor="filedetail">파일찾기</FileLoadButton>
            <FileLoadInput
              type="file"
              id="filedetail"
              name="detailimage"
              onChange={handleUploadImage}
            />
          </ImagesInner>
        </Inner>
        <ButtonWrap>
          <CancelButton to="/product">취소</CancelButton>
          <SubmitButton onClick={handleClickSubmitButton}>{formtype}</SubmitButton>
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
  outline: none;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`
const Input = styled.input`
  width: 320px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  padding-left: 5px;
  outline: none;
  &:invalid {
    border: 3px solid red;
  }
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`

const TextArea = styled.textarea`
  width: 320px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  outline: none;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
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
  img {
    width: 100%;
    height: 100%;
  }
`

const FileName = styled.div`
  width: 200px;
  height: 25px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const FileLoadButton = styled.label`
  width: 110px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: #fff;
  border-radius: 6px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FileLoadInput = styled.input`
  display: none;
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

// const SubmitButton = styled(NavLink)`
//   right: 0;
//   bottom: 0;
//   background-color: ${(props) => props.theme.colors.primary};
//   border: none;
//   outline: none;
//   width: 76px;
//   height: 42px;
//   border-radius: 6px;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;
// `
const SubmitButton = styled.button`
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
