
const Heading = ({ text, className, ...props }) => {
    return (
       <div className={`font-childhood text-white ${className}`}>{text}</div>  
    )
}

export default Heading;