import { ipcMain } from "electron";

ipcMain.on('distribution', (event, arg) => {
    event.reply('distribution-finish', 'finish');
});

console.log("En attente de distribution ...");
