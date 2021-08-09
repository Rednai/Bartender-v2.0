import { ipcMain } from "electron";
import { Gpio } from "onoff";
import * as _doses from "./data/doses.json";
import * as _drinks from "./data/drinks.json";

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
    // drinks.forEach(drink => {
    //     pins[drink.pin] = new Gpio(drink.pin, 'high');
    // });
}

ipcMain.on('distribution', (event, arg) => {
    if (isWin) {
        return event.reply('distribution-finish', 'finish');
    }
    pins[arg.drink.pin].writeSync(Gpio.LOW);
    setTimeout(() => {
        pins[arg.drink.pin].writeSync(Gpio.HIGH);
        event.reply('distribution-finish', 'finish');
    }, doses[arg.quantity] * 1000);
});
