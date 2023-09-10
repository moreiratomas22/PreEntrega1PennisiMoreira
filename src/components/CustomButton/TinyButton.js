const TinyButton = ({pmt, handleButton, disabled}) => {
    return (
        
        <button onClick={handleButton} disabled={disabled} className="bg-botonesTurq hover:bg-hoverButton text-white font-bold text-sm py-1 px-2 rounded inline-flex items-center">{pmt}</button>
    
    )
}

export default TinyButton