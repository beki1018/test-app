function padToTwoSympbols (num) {
    return num.toString().padStart(2, '0');
}

function getDate (date) {
        if (!date) {
            console.error("No Date field for Event block component");
            return "No Date";
        }
        return [date.getFullYear(),
            padToTwoSympbols(date.getMonth() + 1),
            padToTwoSympbols(date.getDate()),
        ].join('-');
    }

export default getDate;