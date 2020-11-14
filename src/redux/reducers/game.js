import { GAME_MODE,
         CHANGE_NAME,
         SET_GAME_CONFIG,
         SECTION_CHANGE,
         GAME_OVER } from '../actions/game';

const initState = {
    mode: null,
    userName: '',
    error: null,
    message: "Let's play?",
    delay: null,
    gameSchema: [],
    gameIsOn: null
}

const game = (state = initState, action) => {
    switch (action.type) {
        case GAME_MODE:
            return { ...state, mode: action.mode };

        case CHANGE_NAME:
            return { ...state, userName: action.value };

        case SET_GAME_CONFIG:
            if (action.config === undefined) {
                return { ...state, error: 'Please, select game mode' };
            }

            if (action.userName === undefined || action.userName === '') {
                return { ...state, error: 'Please, enter your name' };
            }

            const { field, delay } = action.config;
            
            // create game field schema
            let gameSchema = [];
            for (let i = 0; i < field; i++) {
                let arr = [];
                
                for (let j = 0; j < field; j++) {
                    arr.push('.');
                }
                
                gameSchema.push(arr);
            }

            return {
                ...state,
                error: null,
                message: 'Game start!',
                delay,
                gameSchema,
                gameIsOn: true
            };

        case SECTION_CHANGE:
            return {
                ...state,
                gameSchema: action.newSchema
            }

        case GAME_OVER:
            return {
                ...state,
                message: `${action.winner} won!`,
                gameIsOn: false,
            }

        default:
            return { ...state };
    }
}

export default game;