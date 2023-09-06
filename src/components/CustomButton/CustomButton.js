const CustomButton = ({pmt, handleButton, disabled}) => {
    return (
        
        <button onClick={handleButton} disabled={disabled} className="bg-botonesTurq hover:bg-hoverButton text-white font-bold py-2 px-4 rounded inline-flex items-center">{pmt}</button>
    
    )
}

export default CustomButton