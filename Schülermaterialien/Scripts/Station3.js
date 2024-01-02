/**
 * Prüft, ob die ID des vorherigen Rätsel dem erwarteten Wert entspricht.
 */
function checkPrevious() {

    //Abrufen der URL-Parameter
    const paramChecker = new URLSearchParams(window.location.search);
    var prev = paramChecker.get('Previous');

    //Stimmt die ID nicht überein wird der Inhalt der Seite entfernt
    if(prev == null || paramChecker.get('Previous').localeCompare((0x53746132 ^ 0xDEADBEEF) * -1) != 0) {
        document.body.innerHTML = '';
        alert("Ihr könnt das Rätsel leider nicht lösen, weil das vorherige nicht gelöst wurde.")
    }
}

/**
 * Diese Funktion überprüft die Lösung. Ist diese korrekt wird der Button um zum nächsten Rätsel zu springen aktiviert, 
 * die Maske um eine Lösung einzugeben hingegen deaktiviert.
 */
function checkSolution(){
        
    //Dies ist die Lösung des Rätsels.
    if(document.getElementById("numberOfSteps").value == 20) {

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
            * wird der Name des Rätsels als hexadezimaler Wert mitgegeben ("Station21")
            */
            location.href = "Station4.html?Previous=" + ((0x53746133 ^ 0xDEADBEEF) * -1);

        }

        //Verbergen der Eingabemaske
        document.getElementById("solutionInput").hidden = true;

    }

    else {

            //Wenn das Rätsel nicht gelöst wurde, kann dies den Schüler*innen einfach kurz mitgeteilt werden.
            alert("Nein, diese Lösung ist leider nicht richtig. Probiert es erneut.");
    }
}