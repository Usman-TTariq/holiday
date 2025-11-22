
const Button = ({ text, leftIcon, className, ...props }) => {
    return (
        <button 
            {...props} 
            className={`flex items-center gap-2 bg-primary text-white px-8 py-3 font-semibold rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 active:scale-95 ${className}`}
        >
            {leftIcon && leftIcon}
            <div className="text-nowrap">{text}</div>
        </button>
    )
}

export default Button;