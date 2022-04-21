function Grad(Naziv, Broj_stanovnika, Latituda, Longituda)
{
    this.m_Naziv = Naziv;
    this.m_Broj_stanovnika = Broj_stanovnika;
    this.m_Latituda = Latituda;
    this.m_Longituda = Longituda;
}

var oZagreb = new Grad("Zagreb", 769944, 45.815010, 15.981919);
var oVirovitica = new Grad("Virovitica", 21291, 45.831509, 17.386709);
var oOsijek = new Grad("Osijek", 75916, 45.560001, 18.675880);
var oSlatina = new Grad("Slatina", 14819, 45.701988, 17.700741);
var oBjelovar = new Grad("Bjelovar", 36433, 45.898628, 16.842340);
var aGradovi = [oZagreb, oVirovitica, oOsijek, oSlatina, oBjelovar];
Grad.prototype.dajVelicinuGrada = function ()
{
    var kategorija_grada = 0;
    if (this.m_Broj_stanovnika < 30000)
        {
            kategorija_grada = 1;
        }
        else if(this.m_Broj_stanovnika > 30000 && this.m_Broj_stanovnika < 200000)
        {
            kategorija_grada = 2;
        }
        else
        {
            kategorija_grada = 3;
        }
    return kategorija_grada;
}
console.log(oZagreb.dajVelicinuGrada());

function dajUdaljenost(oGrad1, oGrad2/*lat1, lon1, lat2, lon2*/) 
{
    var lat1 = oGrad1.m_Latituda;
    var lon1 = oGrad1.m_Longituda;
    var lat2 = oGrad2.m_Latituda;
    var lon2 = oGrad2.m_Longituda;



    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
     return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
        return Value * Math.PI / 180;
}

console.log(dajUdaljenost(oZagreb, oVirovitica));