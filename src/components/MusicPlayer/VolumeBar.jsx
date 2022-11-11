import React from 'react'
import styled from 'styled-components'
import { VolumeDownIcon, VolumeMediumIcon, VolumeMuteIcon, VolumeUpIcon } from '../Icons'

const VolumeBarStyled = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    input {
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        height: 4px;
        background: var(--black-5);
        border-radius: 10px;
        background-image: linear-gradient(var(--white), var(--white));
        background-repeat: no-repeat;

        ::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            background: var(--white);
            transform: scale(0);
            transition: var(--transition);
        }

        ::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            box-shadow: none;
            border: none;
            background: transparent;
        }

        ::-moz-progress-bar {
            background: var(--white) !important;
        }

        :hover::-webkit-slider-thumb {
            transform: scale(1);
            transition: var(--transition);
        }

        :hover {
            background-image: linear-gradient(var(--green), var(--green));
        }
    }
`

const VolumeBar = ({ value, min, max, onChange, setVolume }) => {

    const getBackgroundSize = () => { return { backgroundSize: `${(value * 100) / max}% 100%` }; };

    return (
        <VolumeBarStyled>
            {value <= 1 && value > 0.7 && <VolumeUpIcon onClick={() => setVolume(0)} />}
            {value <= 0.7 && value > 0.3 && <VolumeMediumIcon onClick={() => setVolume(0)} />}
            {value <= 0.3 && value > 0 && <VolumeDownIcon onClick={() => setVolume(0)} />}
            {value == 0 && <VolumeMuteIcon onClick={() => setVolume(1)} />}

            <input
                type="range"
                step="0.01"
                value={value}
                style={getBackgroundSize()}
                min={min}
                max={max}
                onChange={onChange}
            />
        </VolumeBarStyled>
    )
};

export default VolumeBar;