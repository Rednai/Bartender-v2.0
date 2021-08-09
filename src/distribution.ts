import { ipcMain } from "electron";
import { Gpio } from "onoff";
import _doses from "./data/doses.json";
import _drinks from "./data/drinks.json";

interface Pins {
    [index: number]: any
}
interface Doses {
    [key: string]: number
}
interface Drink {
    name: string,
    logo: string,
    color: string,
    pin: number
}

const isWin = process.platform === "win32";
const doses = _doses as Doses;
const drinks = _drinks as Drink[];
let pins: Pins = {};

// Pins initialisation
if (!isWin) {
    drinks.forEach(drink => {
        pins[drink.pin] = new Gpio(drink.pin, 'high');
        console.log('Initiation du pin : ' + drink.pin);
    });
}

ipcMain.on('distribution', (event, arg) => {
    if (isWin) {
        return event.reply('distribution-finish', 'finish');
    }
    console.log('Fermeture du pin ' + arg.drink.pin + ' pendant ' + doses[arg.quantity] + ' secondes');
    pins[arg.drink.pin].writeSync(Gpio.LOW);
    setTimeout(() => {
        console.log('Ouverture du pin : ' + arg.drink.pin);
        pins[arg.drink.pin].writeSync(Gpio.HIGH);
        event.reply('distribution-finish', 'finish');
    }, doses[arg.quantity] * 1000);
});
