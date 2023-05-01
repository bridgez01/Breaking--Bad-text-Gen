const display = document.querySelector('.display')
const generateBtn = document.querySelector('.button')
function generateJoke() {
    async function generator() {
        try {
            const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');

            const data = await response.json();
            display.innerHTML = `Quote : ${data[0].quote}
                <br\> <br\> Author : ${data[0].author}`
            

        } catch (error) {
            
        }
    }
    generator();
}
generateBtn.addEventListener('click',generateJoke)
document.addEventListener('DOMContentLoaded' , generateJoke)
function scoreSum(scores){
    let sum ;

    scores.forEach(score => {
        sum += score
    });
    return sum ;
}

console.log(scoreSum([5,10,5]))