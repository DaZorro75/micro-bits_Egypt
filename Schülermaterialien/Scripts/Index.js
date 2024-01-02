/**
 * Lädt automatisch das nächste Rätsel.
 */
function loadNext() {

    window.location = "Station1.html"
}


/**
 * Diese Funktion wird zu Beginn genutzt, um den micro:bit für die eingebetteten MakeCode-Umgebungen 
 * zu koppeln, damit beim Klick auf "Herunterladen" automatisch auf den verbundenen micro:bit geflasht wird.
 */
async function connectMicroBit() {
    try {

        /*
        Auswählen des USB-Gerätes. VendorID verfügbar unter: https://support.microbit.org/support/solutions/articles/19000035697-what-are-the-usb-vid-pid-numbers-for-micro-bit
        Stellt zudem sicher, dass keine ungewollten USB-Geräte gekoppelt werden.
        */
        const device = await navigator.usb.requestDevice({ filters: [{ vendorId: 0x0d28 }] });

        //Herstellen der Verbindung.
        await device.open();

        //Initialisieren des USB-Gerätes.
        await device.selectConfiguration(1);

    }
    catch (error) {
        //Für den Fall das Fehler auftreten eine Meldung an die Schülerinen und Schüler. Der genaue Fehler kann dann in der Konsole (Entwicklertools) nachgelesen werden.
        console.error(error);
        alert("Fehler beim koppeln des micro:bits. Wendet Euch an den Tutor um Hilfe zu erhalten.");
    }
    finally {
        //Der Button um die Rätsel zu starten ist solange deaktiviert, bis der micro:bit erfolgreich verbunden wurde.
        document.getElementById("nextButton").disabled = false;
    }
}
