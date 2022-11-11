import React from 'react'
import styled from 'styled-components'

const SeekbarStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;

    input {
        width: 70%;
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

    p {
        width: 40px;
        text-align: center;
        font-size: var(--fz-xxs);
        color: var(--white-2);
    }
`

const Seekbar = ({ value, min, max, onInput }) => {
    // converts the time to format 0:00
    const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

    const getBackgroundSize = () => { return { backgroundSize: `${(value * 100) / max}% 100%` }; };

    return (
        <SeekbarStyled>
            <p>{value === 0 ? '0:00' : getTime(value)}</p>
            <input
                type="range"
                step="any"
                value={value}
                style={getBackgroundSize()}
                min={min}
                max={max}
                onInput={onInput}
            />
            <p>{max === 0 ? '0:00' : getTime(max)}</p>
        </SeekbarStyled>
    );
};

export default Seekbar;