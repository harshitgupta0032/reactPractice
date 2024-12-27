const CalculateWinner = (square) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // All case of winner in horizontal lines
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //All case of winner in vertical lines
        [0, 4, 8], [2, 4, 6]             // All case of winner in diagonal lines
    ];

    for (let i = 0; i < lines.length; i++) {
        let [a, b, c] = lines[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }

    }
    return null;

}
export default CalculateWinner;