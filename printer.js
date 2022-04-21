function Printer(nivo_tonera, dvostranoIspisivanje)
{
    this.m_toner = nivo_tonera;
    this.m_dvostranoIspisivanje = dvostranoIspisivanje;
    this.m_ukupanBrojStranica = 0;

    if(this.m_toner > 100 )
    {
        this.m_toner = 100;
    }
    else if(this.m_toner < 0)
    {
        this.m_toner = 0;
    }
}

var oSamsung_M283x = new Printer (77 ,true);
var oEpson_Sx105 = new Printer (65, false);
var oCannon_Pixma = new Printer(26, true);
var oHP_Smart_tank_500 = new Printer( 50, true);

Printer.prototype.dodajBoju = function ()
{
 
    if (this.m_toner < 15 )
    {
        console.log("Stanje tonera = " + this.m_toner);
        console.log("Nadopunjavanje boje...");
        this.m_toner = 100;
        console.log("Stanje tonera = " + this.m_toner);
    }
    else if (this.m_toner > 15 )
    {
        console.log("U printeru ima dovoljno boje");
    }
}
oEpson_Sx105.dodajBoju();


Printer.prototype.printaj = function(broj_str)
{
    if(this.m_dvostranoIspisivanje == false)
    {
        var kolicina_boje_potrebna = broj_str * 0.1;  
        this.m_toner = this.m_toner - kolicina_boje_potrebna; 
        this.m_ukupanBrojStranica = this.m_ukupanBrojStranica + broj_str;
        if(this.m_toner == 0 || this.m_toner < 0)
        {
             console.log("Nema dovoljno boje!");
        }
        console.log("Isprintano " + this.m_ukupanBrojStranica + " stranica!");
        console.log("Stanje tonera = " + this.m_toner);
    }
    else
    {
        var kolicina_boje_potrebna = broj_str * 0.1;  
        this.m_toner = this.m_toner - kolicina_boje_potrebna; 
        var broj = Math.round(broj_str/2);
        this.m_ukupanBrojStranica = this.m_ukupanBrojStranica + broj;
        if(this.m_toner == 0 || this.m_toner < 0)
        {
             console.log("Nema dovoljno boje!");
        }
        console.log("Isprintano " + this.m_ukupanBrojStranica + " stranica!");
        console.log("Stanje tonera = " + this.m_toner);
    } 
}
oEpson_Sx105.printaj(50);
oSamsung_M283x.printaj(50);