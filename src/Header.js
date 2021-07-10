import React from 'react'
import "./Header.css"
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon active">
                <HomeIcon/>
                <p>Home</p>
                </div>
                <div className="header__icon">
                <FlashOnIcon/>
                <p>Trending</p>
                </div>
                <div className="header__icon">
                <LiveTvIcon/>
                <p>Verified</p>
               </div>
               <div className="header__icon">
               <VideoLibraryIcon/>
               <p>Collections</p>
                </div>
                <div className="header__icon">
                <SearchIcon/>
                <p>Search</p>
                </div>
                <div className="header__icon">
                <PersonOutlineIcon/>
                <p>Accont</p>
                </div>
                
               
            

            </div>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z5cs4-6cc6e3c5-2626-4e0c-990e-30a0cba65411.png/v1/fill/w_300,h_159,strp/hulu_logo_background_by_sixmonthslate_d9z5cs4-200h.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2MyIsInBhdGgiOiJcL2ZcLzEyYzZmNjg0LWQ0NDctNDQ1Ny04NGZhLTEyMDMzY2ZkNTgxZVwvZDl6NWNzNC02Y2M2ZTNjNS0yNjI2LTRlMGMtOTkwZS0zMGEwY2JhNjU0MTEucG5nIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fTVneE7cVtWrvxYbId7KkKBtUf31__zvGVTXQ_SkbV4" alt="hulu"/>
        </div>
    )
}

export default Header
