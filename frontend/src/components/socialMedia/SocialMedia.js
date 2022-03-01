import React from 'react'
import IconButton from '@mui/material/IconButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function SocialMedia() {
    return (
        <div className={"  col-4 mx-auto p-0  d-flex justify-content-center align-items-center flex-row "}>
            <IconButton className=" d-flex shadow   m-1"><FacebookOutlinedIcon /></IconButton>
            <IconButton className=" d-flex shadow   m-1"><YouTubeIcon /></IconButton>
            <IconButton className=" d-flex shadow   m-1"><InstagramIcon /></IconButton>
            <IconButton className=" d-flex shadow   m-1"><GitHubIcon /></IconButton>
            <IconButton className=" d-flex shadow   m-1"><TwitterIcon /></IconButton>
        </div>
    )
}
