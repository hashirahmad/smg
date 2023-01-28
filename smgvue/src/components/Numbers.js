class Numbers {
    constructor() {
        this.numbersList = Array.from(JSON.parse(localStorage.numbers || '[]'))
    }

    isValidNumber(number) {
        const numberToBeAdded = Number(number)
        const isNumber = !Number.isNaN(numberToBeAdded)
        return isNumber
    }

    add(number) {
        if (this.isValidNumber(number)) {
            this.numbersList.push(Number(number))
            localStorage.numbers = JSON.stringify(this.numbersList)
        }
    }

    removeNumber(index) {
        this.numbersList.splice(index, 1)
        localStorage.numbers = JSON.stringify(this.numbersList)
    }

    sumOfNumbers() {
        let sum = 0
        for (let i = 0; i < this.numbersList.length; i += 1) {
            const number = this.numbersList[i]
            sum += number
        }
        return sum
    }
}

export default new Numbers()