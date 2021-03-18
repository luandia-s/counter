const secondsContainer = document.getElementById('seconds')
const minutesContainer = document.getElementById('minutes')
const hoursContainer = document.getElementById('hours')
const daysContainer = document.getElementById('days')   

let x = setInterval(() => countdown.updateCountdown, 1000);

const modal = {
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


const countdown = {

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
        setInterval(countdown.updateCountdown, 1000)
        modal.close()
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
        countdown.insertCountdownValues({ days, hours, minutes, seconds })
    },

    restartCountdown() {
        clearInterval(x)
        modal.open()
    }
}

