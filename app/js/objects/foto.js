function Foto(locatie, bestandslocatie, descriptie) {
    this.locatie = locatie;
    this.bestandslocatie = bestandslocatie;
    this.descriptie = descriptie;
}

Parking.prototype = {
    get Locatie() { return this.locatie },
    get Bestandslocatie() { return this.bestandslocatie },
    get Descriptie(){return this.descriptie}
}