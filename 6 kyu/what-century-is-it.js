// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
//
//   Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"


function whatCentury(year) {
    const yS = year.split('')
    const lastTwo = Number(year.slice(2))
    const a = yS.slice(0, 2).join('')


    if (lastTwo > 0 ) {
        let y = (Number(a) + 1).toString()
        const DDD = (Number(y[y.length - 1]) === 1 ? 'st' : Number(y[y.length - 1]) === 2 ? 'nd' : Number(y[y.length - 1]) === 3 ? 'rd' : 'th')
        let N = Number(y[0])
        if (N === 1) {

            return y + 'th'
        } else return y + DDD

    } else if (lastTwo === 0 ) {
        let y = (Number(a)).toString()
        const DDD = (Number(y[y.length - 1]) === 1 ? 'st' : Number(y[y.length - 1]) === 2 ? 'nd' : Number(y[y.length - 1]) === 3 ? 'rd' : 'th')
        let N = Number(y[0])

        if (N === 1) {
            return y + 'th'
        } else return y + DDD
    }
}

const b = whatCentury('2090')
console.log(b)





