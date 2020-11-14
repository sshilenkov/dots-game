import React from 'react';
import './UserConfig.css';

import { DropdownButton, Dropdown, FormControl, Button } from 'react-bootstrap';

import { gameMode, changeName, getGameConfig } from 'redux/actions/game';
import { connect } from 'react-redux';

const enhance = connect(
    ({ game }) => ({ mode: game.mode, gameIsOn: game.gameIsOn }),
    { gameMode, changeName, getGameConfig }
)

class UserConfig extends React.Component {

    handleChangeMode = (e) => this.props.gameMode(e.target.dataset.mode);
    handleChangeName = (e) => this.props.changeName(e.target.value);
    startPlay = () => this.props.getGameConfig();

    render() {
        const { mode, gameIsOn } = this.props;
        const gameMode = mode && (mode[0].toUpperCase() + mode.slice(1)).replace('Mode', '');

        return (
            <div className="config">
                <Dropdown>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={gameMode ? gameMode : "Pick game mode"}
                    >
                        <Dropdown.Item onClick={(e) => this.handleChangeMode(e)} data-mode="easyMode">Easy</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.handleChangeMode(e)} data-mode="normalMode">Normal</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.handleChangeMode(e)} data-mode="hardMode">Hard</Dropdown.Item>
                    </DropdownButton>
                </Dropdown>
                <FormControl
                    placeholder="Enter your name"
                    onBlur={(e) => this.handleChangeName(e)}
                />
                <Button
                    variant="success"
                    onClick={() => this.startPlay()}
                    disabled={gameIsOn}
                >
                    {gameIsOn === false ? 'Play again' : 'Play'}
                </Button>
            </div>
        );
    }
}

export default enhance(UserConfig);