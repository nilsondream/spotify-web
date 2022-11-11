import React from 'react'
import { PauseIcon, PlayIcon } from './Icons'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.title === song.title ? (
    <div className={`${activeSong?.title === song.title ? 'icon-play-active' : 'icon-play'}`} onClick={handlePause}>
        <PauseIcon />
    </div>
) : (
    <div className='icon-play' onClick={handlePlay}>
        <PlayIcon />
    </div>
));

export default PlayPause;