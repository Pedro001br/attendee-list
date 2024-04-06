import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean;
}
export function IconButton({transparent, ...props}: IconButtonProps){
  return(
   <button 
   {...props} 
    className={twMerge(
      'border border-white/10 round-md p-1.5',
      transparent? 'bg-black/20' : 'bg-white/10',
      props.disabled ? 'opacity-50' : null,
    )}
 />
  )
}
/* Na linha 4 temos o conhecimento que o operador "?" significa OPCIONAL "se" Boolean é o operador logico de  true or false. */