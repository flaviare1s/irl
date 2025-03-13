import { Link } from "react-router-dom"

export const Button = ({ rota, text, bgColor }) => {
  return (
    <Link to={rota} className={`${bgColor} text-white font-bold h-[50px] md:h-[60px] px-5 rounded-full flex justify-center items-center`}>
      {text}
    </Link>
  )
}

