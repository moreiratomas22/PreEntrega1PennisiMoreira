
const TinyButton = ({pmt, handleButton, disabled, danger, clear}) => {
    return (
        
        <button onClick={handleButton} disabled={disabled} className={`terminarCompra bg-botonesTurq hover:bg-hoverButton text-white font-bold text-sm py-1 px-2 rounded ${danger && 'bg-red-400'} ${clear && 'bg-green-900'}`}>{pmt}</button>
    
    )
}

export default TinyButton