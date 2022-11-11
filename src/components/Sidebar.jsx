import React from 'react'
import styled from 'styled-components'
import { CollectionIcon, CollectionIconFill, HomeIcon, HomeIconFill, SearchIcon, SearchIconFill } from './Icons'
import { BsThreeDots, BsPlus } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const SidebarStyled = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: var(--black);
    color: var(--white);
    padding: var(--spacing-lg);
    font-size: var(--fz-sm);

    .sidebar-top {
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        a {
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 15px;
            opacity: .6;
            transition: var(--transition);

            &:hover {
                opacity: 1;
                transition: var(--transition);
            }
        }

        svg {
            height: 24px;
            width: 24px;
        }

        .active {
            opacity: 1;
        }
    }


    .sidebar-center {
        display: flex;
        flex-direction: column;
        gap: 20px;

        div {
            cursor: pointer;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 15px;
            opacity: .6;
            transition: var(--transition);

            span {
                height: 24px;
                width: 24px;
                background: var(--white);
                color: var(--black);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: var(--border-radius-xs);

                svg {
                    font-size: 20px;
                }
            }

            &:nth-child(2n) {
                span{
                    background: linear-gradient(135deg,#450af5,#c4efd9);
                    color: var(--white);

                    svg {
                        font-size: 15px;
                    }
                }
            }
                
            &:hover {
                opacity: 1;
                transition: var(--transition);
            }
        }
    }

    .sidebar-bottom {
        display: flex;
        flex-direction: column;
        gap: 15px;

        a {
            opacity: .6;
        }
    }

    .sidebar-line {
        height: 1px;
        width: 100%;
        background: var(--black-3);
        margin: 20px 0;
    }
`

const linksNav = [
    { name: 'Inicio', to: '/', icon: <HomeIcon />, iconactive: <HomeIconFill /> },
    { name: 'Buscar', to: '/search', icon: <SearchIcon />, iconactive: <SearchIconFill /> },
    { name: 'Tu Biblioteca', to: '/collection', icon: <CollectionIcon />, iconactive: <CollectionIconFill /> }
];

const links = [
    { name: 'Discover', to: '/' },
    { name: 'Around You', to: '/around-you' },
    { name: 'Top Artists', to: '/top-artists' },
    { name: 'Top Charts', to: '/top-charts' },
];

const Sidebar = ({ handleClick }) => {
    return (
        <SidebarStyled>
            <div className='sidebar-top'>
                <BsThreeDots />

                {linksNav.map((item) => (
                    <NavLink key={item.name} className={({ isActive }) => (isActive ? 'active' : '')} to={item.to}>
                        {({ isActive }) => (isActive ? <>{item.iconactive}{item.name}</> : <>{item.icon}{item.name}</>)}
                    </NavLink>
                ))}
            </div>

            <div className='sidebar-center'>
                <div><span><BsPlus /></span>Crear playlist</div>
                <div><span><FaHeart /></span>Tus me gusta</div>
            </div>

            <div className='sidebar-line' />

            <div className='sidebar-bottom'>
                {links.map((item) => (
                    <NavLink key={item.name} to={item.to} onClick={() => handleClick && handleClick()}>{item.name}</NavLink>
                ))}
            </div>
        </SidebarStyled>
    )
}

export default Sidebar