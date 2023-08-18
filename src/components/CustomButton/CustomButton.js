
const CustomButton = ({pmt, handleButton, disabled}) => {
    return (
        
        <button onClick={handleButton} disabled={disabled} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">{pmt}</button>
    
    )
}

export default CustomButton