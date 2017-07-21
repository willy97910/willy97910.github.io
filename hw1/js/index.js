$('button').on('click', function() {

    var shutter = $('#shutter').val()
    var aperture = $('#aperture').val()
    var iso = $('#iso').val()

    var loc = -1;
    loc = shutter.indexOf("/")
    if (loc != -1) {
        var shutter_num = Number(shutter.substr(0, loc))
            //console.log(shutter_num)
        var shutter_den = Number(shutter.substr(loc + 1))
        console.log(shutter_den)
        shutter = shutter_num / shutter_den
        console.log(shutter)
    } else {
        shutter = Number(shutter)
    }

    aperture = Number(aperture)
    iso = Number(iso)

    var ev
    ev = Math.log(aperture * aperture / shutter) / Math.log(2) + Math.log(iso / 100) / Math.log(2)
    console.log(ev)

    $('#ev').val(Math.round(ev))
})