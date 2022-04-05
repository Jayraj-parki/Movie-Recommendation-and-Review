import React from 'react'
import style from "./sidebar.module.scss"
import ProfileTab from '../profileTab/ProfileTab'
import MenuTab from '../menuTab/MenuTab'
import Logout from '../logout/Logout'

 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarsIcon from '@mui/icons-material/Stars';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PublicIcon from '@mui/icons-material/Public';
import LanguageIcon from '@mui/icons-material/Language';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import RecommendIcon from '@mui/icons-material/Recommend';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export default function Sidebar({ id }) {

    return (

        <>
            <div className={style.sidebar + " col-3 d-none d-lg-block sticky-top  px-0"}>

                <ProfileTab />
                <MenuTab status={id === 1 && true} path="/profile" title="My Profile" icon={<AccountCircleIcon className="fs-3 " />} />
                <MenuTab status={id === 2 && true} path="/user" title="My Feed " icon={<PlayCircleFilledWhiteIcon className="fs-3 " />} />
                <MenuTab status={id === 3 && true} path="/favourite-movies" title="My Favourite Movies" icon={<FavoriteIcon className="fs-3 " />} />
                <MenuTab status={id === 4 && true} path="/my-reviewed-movies" title="My Reviews for Movies" icon={<MessageIcon className="fs-3 " />} />
                <MenuTab status={id === 5 && true} path="/my-rated-movies" title="My Ratings for Movies" icon={<StarRateIcon className="fs-3 " />} />
                <MenuTab status={id === 6 && true} path="/recommended-movies" title="Recommendation For me" icon={<RecommendIcon className="fs-3 " />} />
                <MenuTab status={id === 7 && true} path="/setting" title="Setting" icon={<SettingsIcon className="fs-3" />} />
                <hr className='m-0' />
                <MenuTab status={id === 8 && true} path="/top-rated-movies" title="Top Rated Movies" icon={<StarsIcon className="fs-3" />} />
                <MenuTab status={id === 9 && true} path="/most-reviewed-movies" title="Most Reviewed Movies" icon={<GroupsIcon className="fs-3" />} />
                <MenuTab status={id === 10 && true} path="/latest-movies" title="Latest Movies" icon={<AccessTimeIcon className="fs-3" />} />
                <MenuTab status={id === 11 && true} path="/most-liked-movies" title="Most Liked Movies" icon={<ThumbUpIcon className="fs-3" />} />
                <MenuTab status={id === 12 && true} path="/movies-by-genre" title="Movies by Genre" icon={<MovieFilterIcon className="fs-3" />} />
                <hr className='m-0' />
                <MenuTab status={id === 13 && true} path="/hindi-movies" title="Hindi Movies" icon={<PublicIcon className="fs-3" />} />
                <MenuTab status={id === 14 && true} path="/english-movies" title="English Movies" icon={<PublicIcon className="fs-3" />} />
                <MenuTab status={id === 15 && true} path="/other-movies" title="Others " icon={<LanguageIcon className="fs-3" />} />

                <hr className='m-0' />
                <Logout />
            </div>

            <div className={"  d-lg-none px-0 pt-3 offcanvas offcanvas-start col-3 mt-5"} tabIndex="-1" data-bs-dismiss="offcanvas" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="row col-12 mx-auto offcanvas-header p-0">
                    <div className="col-10  p-0">
                        <ProfileTab />
                    </div>
                    <div className="col-2 p-0 text-center">
                        <button type="button" className="mx-auto btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                </div>
                <div className={style.offcanvas+ " offcanvas-body"}>
                    <MenuTab status={id === 1 && true} path="/profile" title="My Profile" icon={<AccountCircleIcon className="fs-3 " />} />
                    <MenuTab status={id === 2 && true} path="/" title="My Feed " icon={<PlayCircleFilledWhiteIcon className="fs-3 " />} />
                    <MenuTab status={id === 3 && true} path="/favourite-movies" title="My Favourite Movies" icon={<FavoriteIcon className="fs-3 " />} />
                    <MenuTab status={id === 4 && true} path="/my-reviewed-movies" title="My Reviews for Movies" icon={<MessageIcon className="fs-3 " />} />
                    <MenuTab status={id === 5 && true} path="/my-rated-movies" title="My Ratings for Movies" icon={<StarRateIcon className="fs-3 " />} />
                    <MenuTab status={id === 6 && true} path="/recommended-movies" title="Recommendation For me" icon={<RecommendIcon className="fs-3 " />} />
                    <MenuTab status={id === 7 && true} path="/setting" title="Setting" icon={<SettingsIcon className="fs-3" />} />
                    <hr className='m-0' />
                    <MenuTab status={id === 8 && true} path="/top-rated-movies" title="Top Rated Movies" icon={<StarsIcon className="fs-3" />} />
                    <MenuTab status={id === 9 && true} path="/most-reviewed-movies" title="Most Reviewed Movies" icon={<GroupsIcon className="fs-3" />} />
                    <MenuTab status={id === 10 && true} path="/latest-movies" title="Latest Movies" icon={<AccessTimeIcon className="fs-3" />} />
                    <MenuTab status={id === 11 && true} path="/most-liked-movies" title="Most Liked Movies" icon={<ThumbUpIcon className="fs-3" />} />
                    <MenuTab status={id === 12 && true} path="/movies-by-genre" title="Movies by Genre" icon={<MovieFilterIcon className="fs-3" />} />
                    <hr className='m-0' />
                    <MenuTab status={id === 13 && true} path="/hindi-movies" title="Hindi Movies" icon={<PublicIcon className="fs-3" />} />
                    <MenuTab status={id === 14 && true} path="/english-movies" title="English Movies" icon={<PublicIcon className="fs-3" />} />
                    <MenuTab status={id === 15 && true} path="/other-movies" title="Others " icon={<LanguageIcon className="fs-3" />} />

                    <hr className='m-0' />
                    <Logout />
                </div>
            </div>
        </>
    )
} 
