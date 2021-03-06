const secondsContainer = document.getElementById('seconds')
const minutesContainer = document.getElementById('minutes')
const hoursContainer = document.getElementById('hours')
const daysContainer = document.getElementById('days')

let x = setInterval(() => Countdown.updateCountdown, 1000);

const Modal = {
    open() {
        document
            .querySelector('.content')
            .style
            .display = 'none'
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
        document
            .querySelector('.content')
            .style
            .display = 'flex'
    }
}

const Countdown = {

    getTimeUnit(unit) {
        return unit < 10 ? '0' + unit : unit
    },

    insertCountdownValues({ days, hours, minutes, seconds }) {
        daysContainer.textContent = this.getTimeUnit(days)
        hoursContainer.textContent = this.getTimeUnit(hours)
        minutesContainer.textContent = this.getTimeUnit(minutes)
        secondsContainer.textContent = this.getTimeUnit(seconds)
    },

    startCountdown() {
        setInterval(Countdown.updateCountdown, 1000)
        Modal.close()
    },

    updateCountdown() {
        const date = new Date(
            document
                .querySelector('input[type="date"]')
                .value
                .split('-')
        )

        const currentTime = new Date()
        const difference = date - currentTime
        const days = Math.floor(difference / 1000 / 60 / 60 / 24)
        const hours = Math.floor(difference / 1000 / 60 / 60) % 24
        const minutes = Math.floor(difference / 1000 / 60) % 60
        const seconds = Math.floor(difference / 1000) % 60
        Countdown.insertCountdownValues({ days, hours, minutes, seconds })
    },

    restartCountdown() {
        clearInterval(x)
        Modal.open()
    }
}

let today = new Date()
let day = Countdown.getTimeUnit(today.getDate())
let month = Countdown.getTimeUnit(today.getMonth() + 1)
let year = today.getFullYear()

today = `${year}-${month}-${day}`

document.querySelector('input[type="date"]').setAttribute('min', today)