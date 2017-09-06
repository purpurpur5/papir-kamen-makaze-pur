var korisnikBira = prompt("Izaberite papir, kamen ili makaze ?");
var kompjuterBira = Math.random();

if (korisnikBira === "kamen" || korisnikBira === "papir" || korisnikBira === "makaze" )
{
    if (kompjuterBira < 0.34)
{   
    kompjuterBira = "kamen";
}


else if (kompjuterBira<=0.67)
{   
    kompjuterBira = "papir";
}

else
{   
    kompjuterBira = "makaze";
}

var izbor1=korisnikBira;
var izbor2=kompjuterBira;

console.log("Vi ste izabrali " + izbor1);
console.log("Kompjuter je izabrao " + izbor2);

var compare = function(izbor1, izbor2)
{
    if (izbor1===izbor2)
    {
        return("Rezultat je nerešen! Reload stranicu i pokušaj opet :)");
    }

    if (izbor1==="kamen")
    {
        if (izbor2==="makaze")
        {
            return("Kamen pobedjuje!");
        }

        else
        {
            return("Papir pobedjuje!"); 
        }
    }


    if (izbor1==="papir")
    {
        if (izbor2==="kamen")
        {
            return("Papir pobedjuje!");
        }

        else
        {
            return("Makaze pobedjuju!"); 
        }
    }

    if (izbor1==="makaze")
    {
        if (izbor2==="kamen")
        {
            return("Kamen pobedjuje!");
        }

        else
        {
            return("Makaze pobedjuju!"); 
        }
    }
};

console.log(compare(izbor1, izbor2));
}

else
{
    console.log("Ne znas da se igras! Reload stranicu i pisi malim slovima :P")
}