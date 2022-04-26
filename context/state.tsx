import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export const MyContext = createContext(
  {} as {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
  }
)

type Props = {
  children: React.ReactNode
}
export const MyProvider = ({ children }: Props) => {
  const [show, setShow] = useState(false)
  return (
    <MyContext.Provider value={{ show, setShow }}>
      {children}
    </MyContext.Provider>
  )
}

export function useMyContext() {
  return useContext(MyContext)
}
