import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { nextSong, prevSong, playPause } from '../../redux/features/playerSlice'
import Controls from './Controls'
import Player from './Player'
import Seekbar from './Seekbar'
import Track from './Track'
import VolumeBar from './VolumeBar'

const MusicPlayerStyled = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    background: var(--black-15);
    color: var(--white);
    width: 100%;
    height: 95px;
    border-top: 1px solid var(--black-3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    z-index: 999;

    .player-wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
`

const MusicPlayer = () => {
    const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
    const [duration, setDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);
    const [volume, setVolume] = useState(.7);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentSongs.length) dispatch(playPause(true));
    }, [currentIndex, currentSongs]);

    const handlePlayPause = () => {
        if (!isActive) return;

        if (isPlaying) {
            dispatch(playPause(false));
        } else {
            dispatch(playPause(true));
        }
    };

    const handleNextSong = () => {
        dispatch(playPause(false));

        if (!shuffle) {
            dispatch(nextSong((currentIndex + 1) % currentSongs.length));
        } else {
            dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
        }
    };

    const handlePrevSong = () => {
        if (currentIndex === 0) {
            dispatch(prevSong(currentSongs.length - 1));
        } else if (shuffle) {
            dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
        } else {
            dispatch(prevSong(currentIndex - 1));
        }
    };

    return (
        <MusicPlayerStyled>
            <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
            <div className='player-wrapper'>
                <Controls
                    isPlaying={isPlaying}
                    isActive={isActive}
                    repeat={repeat}
                    setRepeat={setRepeat}
                    shuffle={shuffle}
                    setShuffle={setShuffle}
                    currentSongs={currentSongs}
                    handlePlayPause={handlePlayPause}
                    handlePrevSong={handlePrevSong}
                    handleNextSong={handleNextSong}
                />
                <Seekbar
                    value={appTime}
                    min="0"
                    max={duration}
                    onInput={(event) => setSeekTime(event.target.value)}
                    setSeekTime={setSeekTime}
                    appTime={appTime}
                />
                <Player
                    activeSong={activeSong}
                    volume={volume}
                    isPlaying={isPlaying}
                    seekTime={seekTime}
                    repeat={repeat}
                    currentIndex={currentIndex}
                    onEnded={handleNextSong}
                    onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                    onLoadedData={(event) => setDuration(event.target.duration)}
                />
            </div>
            <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
        </MusicPlayerStyled>
    );
};

export default MusicPlayer;