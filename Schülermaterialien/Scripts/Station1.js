/**
 * Diese Funktion überprüft die Lösung. Ist diese korrekt wird der Button um zum nächsten Rätsel zu springen aktiviert, 
 * die Maske um eine Lösung einzugeben hingegen deaktiviert.
 */
function checkSolution(){
        
    //Dies ist die Lösung des Rätsels.
        if(document.getElementById("stepsRight").value == 3 && document.getElementById("stepsDown").value == 3) {

            //Den Schüler*innen eine kurze Rückmeldung geben.
            alert("Ihr habt das Rätsel richtig gelöst!");

            /*
            * Wir können hier einfach den bereits vorhandenen Button nutzen und umfunktionieren.
            */
            document.getElementById("button1").textContent = "Zum nächsten Rätsel";
            document.getElementById("button1").style.backgroundColor = "red";
            document.getElementById("button1").onclick = function() {

                /*
                * Damit nicht geschummelt werden kann (z.B. wenn ein späteres Rätsel durch Aufruf der entsprechenden HTML-Seite gestartet werden soll),
                * wird die ID des Rätsels ("Sta1") als hexadezimaler Wert mit 0xDEADBEEF geXORt.
                */
                location.href = "Station2.html?Previous=" + ((0x53746131 ^ 0xDEADBEEF) * -1);
            }

            //Verbergen der Eingabemaske
            document.getElementById("solutionInput").hidden = true;

        }

        else {

            //Wenn das Rätsel nicht gelöst wurde, kann dies den Schüler*innen einfach kurz mitgeteilt werden.
            alert("Nein, diese Lösung ist leider nicht richtig. Probiert es erneut.");
        }
    }