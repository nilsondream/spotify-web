import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import PlayPause from './PlayPause'

const SongCardStyled = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    padding: 15px;
    border-radius: var(--border-radius-md);
    background: var(--black-18);
    transition: var(--transition);

    .cover-song {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--border-radius-sm);
        overflow: hidden;
        position: relative;

        .icon-play {
            position: absolute;
            height: 50px;
            width: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--green-2);
            border-radius: 50%;
            color: var(--black);
            bottom: 8px;
            right: 8px;
            opacity: 0;
            transform: translateY(8px);
            box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
            transition: var(--transition);

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .icon-play-active {
            position: absolute;
            height: 50px;
            width: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--green-2);
            border-radius: 50%;
            color: var(--black);
            bottom: 8px;
            right: 8px;
            opacity: 1;
            box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
            transition: var(--transition);

            svg {
                width: 20px;
                height: 20px;
            }
        }

        img {
            width: 100%;
            object-fit: cover;
            box-shadow: 0 0 25px var(--black-1);
        }
    }

    p, span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    p {
        margin-top: 7px;
        font-weight: 700;
    }

    span {
        font-size: var(--fz-xs);
        color: var(--white-2);
    }

    &:hover .cover-song .icon-play {
        transition: var(--transition);
        opacity: 1;
        transform: translateY(0px);
    }

    &:hover {
        background: var(--black-3);
        transition: var(--transition);
    }
`

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {

    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = () => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    };

    return (
        <SongCardStyled>
            <div className='cover-song'>
                <PlayPause
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    song={song}
                    handlePause={handlePauseClick}
                    handlePlay={handlePlayClick}
                />
                <img src={song.images?.coverart} alt="cover" />
            </div>
            <p>{song.title}</p>
            <span>{song.subtitle}</span>
        </SongCardStyled>
    )
}

export default SongCard