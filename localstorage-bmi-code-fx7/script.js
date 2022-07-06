// BMI Formel zur Berechnung des BMI
const calc = () => {
  // Schritt 2
  const alterBMI = localStorage.getItem("alterBMI");

  // Benutzereingaben holen
  const gewicht = document.getElementById("gewicht").value;
  const groesse = document.getElementById("groesse").value;

  // Berechnung durchführen
  const bmi = gewicht / groesse / groesse;
  // Schritt 1
  localStorage.setItem("alterBMI", bmi);

  console.log(bmi);

  // Ausgabe im Parapraphen
  //document.getElementById("ausgabe").innerHTML = bmi;

  document.getElementById("ausgabe").innerHTML =
    bmi + " und alter Wert war: " + alterBMI;
};

// Die Nutzerin Barbara berechnet ihren BMI jede Woche neu.
// Aber Sie hat vergessen, was der alte BMI von letzter Woche war.
// LocalStorage soll sich deshalb den letzten Wert merken und mit der neuen Berechnung ausgeben.

// 1. Eine Berechnung in LocalStorage speichern
// 2. In den Paragraphen zusätzlich den (alten) Wert aus LocalStorage ausgeben
