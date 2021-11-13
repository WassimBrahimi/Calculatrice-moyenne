
  function solve(){
  var exam1 = Number(document.getElementById("myForm").elements.namedItem("exam1").value);
  var cc1 = Number(document.getElementById("myForm").elements.namedItem("cc1").value);
  var exam2 = Number(document.getElementById("myForm").elements.namedItem("exam2").value);
  var cc2 = Number(document.getElementById("myForm").elements.namedItem("cc2").value);
  var exam3 = Number(document.getElementById("myForm").elements.namedItem("exam3").value);
  var cc3 = Number(document.getElementById("myForm").elements.namedItem("cc3").value);
  var exam4 = Number(document.getElementById("myForm").elements.namedItem("exam4").value);
  var cc4 = Number(document.getElementById("myForm").elements.namedItem("cc4").value);
  var exam6 = Number(document.getElementById("myForm").elements.namedItem("exam6").value);
  var cc6 = Number(document.getElementById("myForm").elements.namedItem("cc6").value);
  var exam7 = Number(document.getElementById("myForm").elements.namedItem("exam7").value);
  var cc7 = Number(document.getElementById("myForm").elements.namedItem("cc7").value);
  var exam5 = Number(document.getElementById("myForm").elements.namedItem("exam5").value);
  var cc5 = Number(document.getElementById("myForm").elements.namedItem("cc5").value);
  var examA = Number(document.getElementById("myForm").elements.namedItem("examA").value);
  document.getElementById("resultat").innerHTML =((((((Number(exam1)*2)+Number(cc1))/3)*2)+((((Number(exam3)*2)+Number(cc3))/3)*2)+((((Number(exam4)*2)+Number(cc4))/3)*2)+((((Number(exam7)*2)+Number(cc7))/3)*2)+((((Number(exam6)*2)+Number(cc6))/3)*2)+((((Number(exam5)*2)+Number(cc5))/3)*2)+(Number(examA))+((((Number(exam2)*2)+Number(cc2))/3)*2))/15).toFixed(2);}
