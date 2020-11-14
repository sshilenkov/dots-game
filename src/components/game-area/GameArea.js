import React from 'react';
import './GameArea.css';

import classnames from 'classnames';
import axios from 'axios';

import { sectionChange, gameOver } from 'redux/actions/game';
import { connect } from 'react-redux';

const enhance = connect(
    ({ game }) => game,
    { sectionChange, gameOver }
);

class GameArea extends React.Component {
    constructor(props) {
        super(props);
        const { gameSchema } = props;

        this.userPoints = 0;
        this.compPoints = 0;
        this.defferedSchema = [];
        this.randX = Math.floor(Math.random() * gameSchema.length);
        this.randY = Math.floor(Math.random() * gameSchema.length);
    }

    componentDidUpdate() {
        this.setGameplay();
    }

    setGameplay() {
        const { gameIsOn, delay } = this.props;
        
        if (gameIsOn) {
            clearTimeout(this.gameInterval);
            this.gameInterval = setTimeout(() => {
                this.checkPrevSection();
                this.gameLogic();
            }, delay);
        } else {
            clearTimeout(this.gameInterval);
            this.resetGameData();
        }
    }

    checkPrevSection() {
        const { gameSchema } = this.props;
        
        if (this.randX !== undefined && this.randY !== undefined) {
            if (gameSchema[this.randX][this.randY] === 'O') {
                let newSchema = [...gameSchema];
                newSchema[this.randX][this.randY] = '-';
                this.defferedSchema = newSchema;
                this.compPoints++;
            }
        }
    }

    defferedSectionChange() {
        if (this.defferedSchema.length) {
            sectionChange(this.defferedSchema);
            this.defferedSchema = [];
        }
    }

    randCoord() {
        const { gameSchema } = this.props;

        while (gameSchema[this.randX][this.randY] !== '.') {
            this.randX = Math.floor(Math.random() * gameSchema.length);
            this.randY = Math.floor(Math.random() * gameSchema.length);
        }
    }

    sendWinnerData(winnerName) {
        const date = new Date();
        const dateAndTime = `${date.getDate()}.${date.getMonth()}.${date.getYear()} ${date.getHours()}:${date.getMinutes()}`;
        
        axios.post('https://starnavi-frontend-test-task.herokuapp.com/winners', {
            "winner": winnerName,
            "date": dateAndTime
        })
    }

    resetGameData() {
        const { gameSchema } = this.props;

        this.userPoints = 0;
        this.compPoints = 0;
        this.defferedSchema = [];
        this.randX = Math.floor(Math.random() * gameSchema.length);
        this.randY = Math.floor(Math.random() * gameSchema.length);
    }

    gameLogic() {
        const { gameSchema,
                sectionChange,
                gameOver,
                userName } = this.props;
        const halfSections = gameSchema.length**2 / 2;
        const flatGameSchema = gameSchema.flat();
        
        if (this.userPoints > halfSections) {
            gameOver(userName);
            this.sendWinnerData(userName);
            return;
        } else if (this.compPoints > halfSections) {
            gameOver('Computer');
            this.sendWinnerData('Computer');
            return;
        } else if (this.userPoints === halfSections && this.compPoints === halfSections) {
            gameOver('Nobody');
            return;
        }

        if (flatGameSchema.includes('.')) {
            this.randCoord();
        }

        if (this.userPoints < halfSections && this.compPoints < halfSections) {
            let newSchema = [...gameSchema];
            newSchema[this.randX][this.randY] = 'O';
            sectionChange(newSchema);
            this.defferedSectionChange();
        }
    }

    createArea(gameSchema) {
        return gameSchema.map((item, index) => {
            return(
                <div key={index} className="area__row">
                    {item.map((el, i) => {
                        let sectionClass = 'none';
                        let click = null;
                        let newSchema = [...gameSchema];

                        switch (el) {
                            case 'O':
                                sectionClass = 'area__col--illuminated';
                                click = (e) => {
                                    e.target.classList.add('area__col--user');
                                    newSchema[index][i] = '+';
                                    this.userPoints++;
                                    this.defferedSchema = newSchema;
                                }
                                break;

                            case '+':
                                sectionClass = 'area__col--user';
                                break;

                            case '-':
                                sectionClass = 'area__col--comp';
                                break;
                                
                            default:
                                break;
                        }

                        const classname = classnames('area__col', sectionClass)
                        return <div
                                    key={i}
                                    className={classname}
                                    style={{ height: `calc(600px / ${gameSchema.length})` }}
                                    onClick={click}
                                />
                    })}
                </div>
            );
        });
    }

    render() {
        const { gameSchema } = this.props;
        const area = gameSchema.length ? this.createArea(gameSchema) : 'GameArea';

        return(
            <div className="area">{area}</div>
        );
    }
}

export default enhance(GameArea);