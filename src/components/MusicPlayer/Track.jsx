import React from 'react'
import styled from 'styled-components'
import IMG from '../../assets/images/cover-default.png'
import { HeartIcon, PictureIcon } from '../Icons'

const TrackStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    width: 25%;
    
    .song-details {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        gap: 15px;

        .cover-img {
            width: 60px;
            height: 60px;

            img {
                height: 100%;
                object-fit: cover;
            }
        }

        .subtitle-title {
            overflow: hidden;

            p, span {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            p {
                //font-weight: 700;
                font-size: var(--fz-sm);
            }

            span {
                font-size: var(--fz-xxs);
                color: var(--white-2);
            }
        }
    }

    .icons {
        display: flex;
        align-items: center;
        gap: 20px;
        
        svg {
            cursor: pointer;
            opacity: .5;
            transition: var(--transition);

            &:hover {
                opacity: 1;
                transition: var(--transition);
            }
        }
    }
`

const Track = ({ activeSong }) => (
    <TrackStyled>
        <div className='song-details'>
            <div className='cover-img'>
                <img src={activeSong?.images?.coverart || IMG} alt="cover art" />
            </div>

            <div className='subtitle-title'>
                <p>{activeSong?.title ? activeSong?.title : 'Selecciona una canción'}</p>
                <span>{activeSong?.subtitle ? activeSong?.subtitle : 'Selecciona un artista'}</span>
            </div>
        </div>

        <div className='icons'>
            <HeartIcon />
            <PictureIcon />
        </div>
    </TrackStyled>
);

export default Track;