
const Button = ({ text, leftIcon, className, ...props }) => {
    return (
        <button 
            {...props} 
            className={`flex items-center gap-2 bg-primary text-white px-8 py-3 font-semibold rounded-full cursor-pointer ${className}`}
        >
            {leftIcon && leftIcon}
            <div className="text-nowrap">{text}</div>
        </button>
    )
}

export default Button;