const moment = require('moment');
export const formatDate = (date) => {
    const pastDate = moment(date).format("YYYY-MM-DD")
    const isItWithinAWeek = moment().subtract(7, 'days').startOf('day');
    const isWithinAWeek = (momentDate) => {
        return moment(momentDate).isAfter(isItWithinAWeek);
    }
    return isWithinAWeek(pastDate) ? moment(date).calendar() : (`${moment(date).format("MMM Do")} at ${moment(date).format("h:mm a")}`);
}
