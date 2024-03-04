function getOnlyFirstInCapitalLetter(text) {
    if (!text) return
    let hasUpperCase = false
    return [...text.toLowerCase()]
        .map((char) => {
            if(!hasUpperCase && char !== char.toUpperCase()) {
                hasUpperCase = true
                return char.toUpperCase()
            }
            return char.toLowerCase()
        })
        .join('')
}

module.exports = getOnlyFirstInCapitalLetter