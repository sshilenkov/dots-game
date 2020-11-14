export const GAME_MODE = 'GAME_MODE';
export const CHANGE_NAME = 'CHANGE_NAME';
export const GET_GAME_CONFIG = 'GET_GAME_CONFIG';
export const SET_GAME_CONFIG = 'SET_GAME_CONFIG';
export const SECTION_CHANGE = 'SECTION_CHANGE';
export const GAME_OVER = 'GAME_OVER';

export function gameMode(mode) {
    return { type: GAME_MODE, mode };
}

export function changeName(value) {
    return { type: CHANGE_NAME, value };
}

export function getGameConfig() {
    return { type: GET_GAME_CONFIG };
}

export function setGameConfig(config, userName) {
    return { type: SET_GAME_CONFIG, config, userName };
}

export function sectionChange(newSchema) {
    return { type: SECTION_CHANGE, newSchema };
}

export function gameOver(winner) {
    return { type: GAME_OVER, winner };
}