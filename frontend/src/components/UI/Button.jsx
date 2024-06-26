import { cva } from "class-variance-authority";
import PropTypes from 'prop-types';

const buttonVariant=cva(
    'px-2 py-3 rounded-lg w-full text-white hover:brightness-75 font-poppins',
    {
        variants:{
            variant:{
                primary:'bg-primary',
                secondary:'bg-secondary',
                warning:'bg-yellow-500',
                danger:'bg-red-600',
                green:'bg-green-800'
            }
        },
        defaultVariants:{
            variant:'primary'
        }
    }
)

export default function Button({type='submit',onClick,variant,...props}) {
  return (
    <button type={type} className={buttonVariant({variant})} onClick={onClick} {...props}/>
  )
}

Button.propTypes={
    type:PropTypes.string,
    onClick:PropTypes.func,
    variant:PropTypes.string
}
