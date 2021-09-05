const os = require('os')

function systemInfo (type, release, totalmem, freemem) {
    return {
        type,
        release,
        totalmem,
        freemem
    }
}

const snapShot = systemInfo(os.type(), os.release(), os.totalmem(), os.freemem())

console.log(snapShot)
