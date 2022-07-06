const gewicht = document.getElementById("gewicht").value;
const groesse = document.getElementById("groesse").value;

// BMI Formel zur Berechnung des BMI
const calc = () => {
  // Berechnung durchführen
  const bmi = gewicht / groesse / groesse;
  document.getElementById("ausgabe").innerHTML = bmi;

  console.log(bmi);
};
calc();
