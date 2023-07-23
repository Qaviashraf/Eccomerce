import { createContext, useState } from "react"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [items, setitems] = useState([])

  return (
    <ProductContext.Provider value={{ items, setitems }}>
      {children}
    </ProductContext.Provider>
  )
}