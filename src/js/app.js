import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "./Game";

const game = new Game();
game.start();