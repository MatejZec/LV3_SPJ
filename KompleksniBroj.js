function KompleksniBroj(x, yi)
{
    this.m_x = x;
    this.m_yi = yi;
}

var oKompleksni1 = new KompleksniBroj(-3, 4);
var oKompleksni2 = new KompleksniBroj(6, -4);
var oKompleksni3 = new KompleksniBroj(0, 5);
var oKompleksni4 = new KompleksniBroj(2, -3);
var oKompleksni5 = new KompleksniBroj(4, 2);

var _kb = 
{
    IspisiKompleksniBroj: function(oKb)
    {
        return "Z = " + oKb.m_x + " + " + oKb.m_yi + "i";
    },
    Zbroji: function(oKb1, oKb2)
    {
        var real = oKb1.m_x + oKb2.m_x;
        var imaginary = oKb1.m_yi + oKb2.m_yi;
        return "Z = " + real + " + " + imaginary + "i"; 
    },
    Pomnozi: function(oKb1, oKb2)
    {

        var real = (oKb1.m_x * oKb2.m_x)-(oKb1.m_yi * oKb2.m_yi);
        var imaginary = (oKb1.m_x * oKb2.m_yi)+(oKb1.m_yi * oKb2.m_x);
        return "Z = " + real + " + " + imaginary + "i";
    },

};

console.log(_kb.IspisiKompleksniBroj(oKompleksni1));
console.log(_kb.Zbroji(oKompleksni1, oKompleksni2));
console.log(_kb.Pomnozi(oKompleksni4, oKompleksni5));

function rezultat() 
{
  var odabir = (document.getElementById("odabir").value);
  var x = new KompleksniBroj(parseInt(document.getElementById("realni1").value),parseInt(document.getElementById("imaginarni1").value));
  var yi = new KompleksniBroj(parseInt(document.getElementById("realni2").value),parseInt(document.getElementById("imaginarni2").value));
  parseInt(x);
  parseInt(yi);
  if(odabir == "zbrajanje")
   {
       document.getElementById("odgovor").innerHTML = _kb.Zbroji(x,yi);
   }
   else
   {
       document.getElementById("odgovor").value = _kb.Pomnozi(x,yi);
   }


}

