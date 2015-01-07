
function Vraag(vraag,foto,correctantwoord,fouteantwoorden){
    this.vraag = vraag;
    this.foto = foto;
    this.correctantwoord = correctantwoord;
    this.fouteantwoorden = fouteantwoorden;
}

Vraag.prototype = {
    get Vraag() { return this.vraag },
    get Foto() { return this.foto },
    get CorrectAntwoord() { return this.correctantwoord },
    get FouteAntwoorden(){return this.fouteantwoorden}
}