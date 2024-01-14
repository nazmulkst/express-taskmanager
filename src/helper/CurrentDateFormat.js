const moment = require('moment');

const CurrentDateFormat = () => {
    return moment(new Date).format('YYYY-MM-DD hh:mm:ss');
}

module.exports = CurrentDateFormat;