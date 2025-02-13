
import { ReactNode } from "react";

const Darkmode = ({children}: {
    
    children: ReactNode
}) => {
  return (
    <div className={"bg-[#020914] h-fit"}>{children}</div>
  )
}

export default Darkmode