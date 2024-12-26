const SquareButton = ({ value, onClick }) => {
    return <button onClick={ onClick } className="bg-white border-gray-400 border-2 text-black font-bold text-5xl h-20 w-24">{value}</button>
}
export default SquareButton;