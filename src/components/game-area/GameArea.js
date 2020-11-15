import React from 'react';
import './GameArea.css';

import classnames from 'classnames';

import { sectionChange, gameOver } from 'redux/actions/game';
import { connect } from 'react-redux';

const enhance = connect(
    ({ game }) => game,
    { sectionChange, gameOver }
);

class GameArea extends React.Component {
    constructor(props) {
        super(props);

        this.resetGameData();
    }

    componentDidUpdate() {
        this.setGameplay();
    }

    setGameplay() {
        const { gameIsOn, delay, gameSchema } = this.props;
        
        if (gameIsOn) {
            clearTimeout(this.gameInterval);
            this.gameInterval = setTimeout(() => {
                this.defferedSchema = JSON.parse(JSON.stringify(gameSchema));
                this.checkPrevSection();
                this.gameLogic();
                this.defferedSectionChange();
            }, delay);
        } else if (gameIsOn !== null) {
            clearTimeout(this.gameInterval);
            this.resetGameData();
        }
    }

    checkPrevSection() {
        const { gameSchema } = this.props;
        
        if (this.randX !== undefined && this.randY !== undefined) {
            if (gameSchema[this.randX][this.randY] === 'O') {
                this.defferedSchema[this.randX][this.randY] = '-';
                this.compPoints++;
            }
        }
    }

    defferedSectionChange() {
        const { sectionChange } = this.props;

        if (this.defferedSchema.length) {
            sectionChange(this.defferedSchema);
        }
    }

    randCoord() {
        const { gameSchema } = this.props;
        
        while (gameSchema[this.randX][this.randY] !== '.') {
            this.randX = Math.floor(Math.random() * gameSchema.length);
            this.randY = Math.floor(Math.random() * gameSchema.length);
        }        
    }

    resetGameData() {
        this.userPoints = 0;
        this.compPoints = 0;
        this.defferedSchema = [];
        this.randX = Math.floor(Math.random() * 5);
        this.randY = Math.floor(Math.random() * 5);
    }

    gameLogic() {
        const { gameSchema,
                gameOver,
                userName } = this.props;
        const halfSections = gameSchema.length**2 / 2;
        const flatGameSchema = gameSchema.flat();
        
        if (this.userPoints > halfSections) {
            this.defferedSectionChange();
            gameOver(userName);
            return;
        } else if (this.compPoints > halfSections) {
            this.defferedSectionChange();
            gameOver('Computer');
            return;
        } else if (this.userPoints === halfSections && this.compPoints === halfSections) {
            this.defferedSectionChange();
            gameOver('Nobody');
            return;
        }

        if (flatGameSchema.includes('.')) {
            this.randCoord();
        }

        this.defferedSchema[this.randX][this.randY] = 'O';
    }

    createArea(gameSchema) {
        return gameSchema.map((item, index) => {
            return(
                <div key={index} className="area__row">
                    {item.map((el, i) => {
                        let sectionClass = '';
                        let click = null;

                        switch (el) {
                            case 'O':
                                sectionClass = 'area__col--illuminated';
                                click = (e) => {
                                    e.target.classList.add('area__col--user');
                                    this.defferedSchema[index][i] = '+';
                                    this.userPoints++;
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
        const area = gameSchema.length ? this.createArea(gameSchema) : <div className="area__empty"></div>;

        return(
            <div className="area">{area}</div>
        );
    }
}

export default enhance(GameArea);