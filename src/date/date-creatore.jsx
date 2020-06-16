const i = new Date()

export let date = () => i.toLocaleString('en-gb', { day:'numeric', weekday: 'long', month: 'long' })