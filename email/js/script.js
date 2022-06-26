/*Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);
*/
console.log('JS OK')
//lista email
const emailAddress = [
'angelottimauro@gmail.com',
'beraldomar@gmail.com',
'giuseppe.bergamo67@gmail.com',
'giorgiobocchio2@gmail.com',
'iamsimonebonifazi@gmail.com',
'fausto.boshoff@gmail.com',
'marcocally@gmail.com',
'l.sofiacarrera97@gmail.com',
'chiarellogabriele@gmail.com',
'alfredo.ciarmiello96@gmail.com',
'alessio.cordari@gmail.com',
'gianlucacorreale.1996@gmail.com',
'marco.95112.mc@gmail.com',
'stederosa76@gmail.com',
'dezottiemanuele@gmail.com',
'gabriele.delguerzo@gmail.com',
'salvatore.demontis79@gmail.com',
'daniele.dimento@gmail.com',
'simonediprimagenova@gmail.com',
'fabrizioettori@gmail.com',
'federica.hu339@gmail.com',
'mamelichiara00@gmail.com',
'fmelani13@gmail.com',
'giorgia9288@gmail.com',
'gianlumura97@gmail.com',
'palozzifederico@gmail.com',
'panetta.fabio20@gmail.com',
'pasquale.pedoto123@gmail.com',
'rossi.francesco.dev@gmail.com',
'srsdln97@gmail.com',
'francescotovani1989@gmail.com',
'manueltano98@gmail.com',
'jw220998@gmail.com',
'andrealerri@gmail.com',
];
window.alert('Boolean classe 68')
const logIn = prompt('inserisci la tua mail di Boolean','jw220998@gmail.com');

let search = false;
for (let i = 0; i < emailAddress.length; i++) {
    if (emailAddress[i] === logIn) {
        search = true;
    }
}
    
    if (search) {
        console.log('benvenuto')
        window.alert('Benvenuto nella classe 68')
    }
    else { 
    console.log ('spiacenti l\'email non e presente nella lista')
    window.alert('spiacenti l\'email non e presente nella lista')
}


