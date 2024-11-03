import  {useState} from 'react'

export const useAnimation = () => {
  const [IsAnimated,setIsAnimated] = useState(false);

  const handleMouseEnter=()=>setIsAnimated(true);
  
  const handleMouseLeave=()=>setIsAnimated(false);
  return { IsAnimated, handleMouseEnter, handleMouseLeave };
}

