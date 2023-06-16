import { useState, useEffect } from 'react'
import { getProductList, addProduct, Product } from '../apis/api'
import styled from 'styled-components'

export const ProductManage = () => {
  const [productList, setProductList] = useState<Product[]>([])

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

  return (
    <>
      <div className="test">상품 관리</div>
      <button onClick={handleClickAddProduct}>추가</button>
      {productList.map((product) => (
        <>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>카테고리 : {product.tags}</div>
          <div>매진여부 : {product.isSoldOut ? 'Y' : 'N'}</div>
        </>
      ))}
    </>
  )
}
