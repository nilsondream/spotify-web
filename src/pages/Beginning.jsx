import React from 'react'
import { /*useDispatch,*/ useSelector } from 'react-redux'
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore'
import { Error, Loader, SongCard } from '../components'
import styled from 'styled-components'
import { BiCaretDown } from 'react-icons/bi'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Profile from '../assets/images/profile.webp'

const LandingStyled = styled.div`
    padding: 15px 30px 30px 30px;
    background: linear-gradient(to bottom, var(--black-3), var(--black-1));

    h1 {
        margin-bottom: 20px;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 30px;

        .navigation {
            display: flex;
            gap: 20px;

            .icon {
                cursor: pointer;
                height: 33px;
                width: 33px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--transparent-1);
                transition: var(--transition);
                border-radius: 50%;

                svg {
                    font-size: 23px;
                    margin-right: 3px;
                }

                &:nth-child(2) {
                    svg {
                        margin-right: unset;
                        margin-left: 3px;
                    }
                }

                &:hover {
                    background: var(--transparent-2);
                    transition: var(--transition);
                }
            }
        }

        .account {
            cursor: pointer;
            display: flex;
            align-items: center;
            background: var(--transparent-1);
            transition: var(--transition);
            padding: 2px;
            border-radius: 100px;
            gap: 5px;

            img {
                width: 29px;
                height: 29px;
                object-fit: cover;
                border-radius: 50%;
            }

            p {
                font-size: var(--fz-sm);
                font-weight: 700;
            }

            svg {
                font-size: 20px;
                margin-right: 5px;
            }

            &:hover {
                background: var(--transparent-2);
                transition: var(--transition);
            }
        }
    }

    .playlist-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;

        .playlist-item {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 20px;
            background: var(--transparent-1);
            border-radius: var(--border-radius-sm);
            overflow: hidden;
            transition: var(--transition);

            img {
                height: 80px;
                width: 80px;
                object-fit: cover;
            }

            &:hover {
                background: var(--transparent-2);
                transition: var(--transition);
            }
        }
    }
`


const TopSongs = styled.div`
    padding: 15px 30px 100px 30px;

    h2 {
        padding-bottom: 20px;
    }
`

const GridTopSongs = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
`

const Beginning = () => {

    //const dispatch = useDispatch();
    const { genreListId } = useSelector((state) => state.player);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'HIP_HOP_RAP');

    if (isFetching) return <Loader />;

    if (error) return <Error />;

    return (
        <>
            <LandingStyled>
                <div className='header'>
                    <div className='navigation'>
                        <div className='icon'><BsChevronLeft /></div>
                        <div className='icon'><BsChevronRight /></div>
                    </div>
                    <div className='account'>
                        <img src={Profile} alt="Profile" />
                        <p>nilsondream</p>
                        <BiCaretDown />
                    </div>
                </div>
                <h1>Bienvenido</h1>
                <div className='playlist-wrapper'>
                    <div className='playlist-item'>
                        <img src={Profile} alt="Profile" />
                        <h4>Playlist</h4>
                    </div>

                    <div className='playlist-item'>
                        <img src={Profile} alt="Profile" />
                        <h4>Playlist</h4>
                    </div>

                    <div className='playlist-item'>
                        <img src={Profile} alt="Profile" />
                        <h4>Playlist</h4>
                    </div>

                    <div className='playlist-item'>
                        <img src={Profile} alt="Profile" />
                        <h4>Playlist</h4>
                    </div>

                    <div className='playlist-item'>
                        <img src={Profile} alt="Profile" />
                        <h4>Playlist</h4>
                    </div>

                    <div className='playlist-item'>
                        <img src={Profile} alt="Profile" />
                        <h4>Playlist</h4>
                    </div>
                </div>
            </LandingStyled>

            <TopSongs>
                <h2>Las canciones más escuchadas</h2>

                <GridTopSongs>
                    {data?.map((song, i) => (
                        <SongCard
                            key={song.key}
                            song={song}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={data}
                            i={i}
                        />
                    ))}
                </GridTopSongs>
            </TopSongs>
        </>
    )
}

export default Beginning