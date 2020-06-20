let arrowDirections = function(deg: number){
    if((deg > 315 || deg > 0) && deg < 45) {
        return basic.showString("N") //images.arrowImage(ArrowNames.North)
    }
    if(deg > 46 && deg < 135) {
        return basic.showString("E") //images.arrowImage(ArrowNames.East)
    }
    if(deg > 136 && deg < 225) {
        return basic.showString("S") //images.arrowImage(ArrowNames.South)
    }
    if(deg > 226 && deg < 314) {
        return basic.showString("W") //images.arrowImage(ArrowNames.West)
    }
    return images.arrowImage(ArrowNames.North);
}

basic.forever(function () {arrowDirections(input.compassHeading())})
