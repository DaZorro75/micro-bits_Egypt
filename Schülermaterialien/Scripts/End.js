/**
 * Prüft, ob die ID des vorherigen Rätsel dem erwarteten Wert entspricht.
 */
function checkPrevious() {

    //Abrufen der URL-Parameter
    const paramChecker = new URLSearchParams(window.location.search);
    var prev = paramChecker.get('Previous');

    //Stimmt die ID nicht überein wird der Inhalt der Seite entfernt
    if(prev == null || paramChecker.get('Previous').localeCompare((0x53746136 ^ 0xDEADBEEF) * -1) != 0) {
        document.body.innerHTML = '';
        alert("Ihr könnt das Rätsel leider nicht lösen, weil das vorherige nicht gelöst wurde.")
    }
}
