const ReplaceWithK = (number) => {
    let countInString = number.toString();
    if (countInString.length > 4) {
        let newNumber = countInString.slice(0, 2) + 'K';
        return newNumber;
    }
    return number;
};

export default ReplaceWithK;
