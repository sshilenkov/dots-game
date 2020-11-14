import React from 'react';
import './PlayingField.css';

import UserConfig from 'components/user-config/UserConfig';
import Message from 'components/message/Message';
import GameArea from 'components/game-area/GameArea';

const PlayingField = () => (
    <div className="playing-field">
        <div className="playing-field__holder">
            <UserConfig />
            <Message />
            <GameArea />
        </div>
    </div>
);

export default PlayingField;