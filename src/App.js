//import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Sidebar, MusicPlayer, TopPlay } from './components'
import { ArtistDetails, TopArtists, AroundYou, Beginning, Search, SongDetails, TopCharts } from './pages'
import styled from 'styled-components'

const AppStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 5.5fr;
`

const ScreenStyled = styled.div`
    background: var(--black-1);
    color: var(--white);
`

const App = () => {
    //const { activeSong } = useSelector((state) => state.player);

    return (
        <AppStyled>
            <Sidebar />

            <ScreenStyled>
                <Routes>
                    <Route path="/" element={<Beginning />} />
                    <Route path="/top-artists" element={<TopArtists />} />
                    <Route path="/top-charts" element={<TopCharts />} />
                    <Route path="/around-you" element={<AroundYou />} />
                    <Route path="/artists/:id" element={<ArtistDetails />} />
                    <Route path="/songs/:songid" element={<SongDetails />} />
                    <Route path="/search/:searchTerm" element={<Search />} />
                </Routes>
                <TopPlay />
            </ScreenStyled>

            <MusicPlayer />
        </AppStyled>
    );
};

export default App;