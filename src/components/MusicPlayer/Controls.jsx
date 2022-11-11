import React from 'react'
import { MdPlayCircle, MdPauseCircle } from 'react-icons/md'
import styled from 'styled-components';
import { RepeatIcon, ShuffleIcon, SkipNextIcon, SkipPrevIcon } from '../Icons'

const ControlStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    .shuffle-icon, .repeat-icon,
    .skip-prev-icon, .skip-next-icon {
        cursor: pointer;
        color: var(--white-2);
        transition: var(--transition);

        :hover {
            color: var(--white-1);
            transition: var(--transition);
        }
    }

    .play-pause {
        svg {
            cursor: pointer;
            font-size: 40px;
            transition: var(--transition);

            :hover {
                transform: scale(1.125);
                transition: var(--transition);
            }
        }
    }
`

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
    <ControlStyled>
        <ShuffleIcon color={shuffle ? '#1db954' : 'currentColor'} onClick={() => setShuffle((prev) => !prev)} />
        {currentSongs?.length && <SkipPrevIcon onClick={handlePrevSong}/>}
        <div className='play-pause'>
            {isPlaying ? (
                <MdPauseCircle onClick={handlePlayPause} />
            ) : (
                <MdPlayCircle onClick={handlePlayPause} />
            )}
        </div>
        {currentSongs?.length && <SkipNextIcon onClick={handleNextSong} />}
        <RepeatIcon color={repeat ? '#1db954' : 'currentColor'} onClick={() => setRepeat((prev) => !prev)} />
    </ControlStyled>
);

export default Controls;