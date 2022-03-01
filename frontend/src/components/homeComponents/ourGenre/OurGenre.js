import React from 'react'
import style from "./OurGenre.module.scss"
export default function OurGenre() {
    return (
        <div className={style.our_gnere + ' col-lg-4 '}>
            <div className='col-6 text-light pb-2 text-start fs-5  border-bottom'>Top Movie Genre</div>

            <div className={style.content + " col-12 p-2"}>
                <table className="table table-borderless">
                    <tbody>
                        <tr className='p-0 '>
                            <td className='p-0'>animation</td>
                            <td className='p-0'>comedy</td>
                            <td className='p-0'>adventure</td>

                        </tr>
                        <tr className='p-0 '>
                            <td className='p-0'>horror</td>
                            <td className='p-0'>biography</td>
                            <td className='p-0'>history</td>
                        </tr>
                        <tr className='p-0 '>
                            <td className='p-0'>family</td>
                            <td className='p-0'>romance</td>
                            <td className='p-0'>action</td>
                        </tr>
                        <tr className='p-0 '>

                            <td className='p-0'>crime</td>
                            <td className='p-0'>sci-fi</td>
                            <td className='p-0'>mystery</td>
                        </tr>
                        <tr className='p-0 '>
                            <td className='p-0'>drama</td>
                            <td className='p-0'>thriller</td>
                            <td className='p-0'>fantasy</td>

                        </tr>
                        <tr className='p-0 '>
                            <td className='p-0'>war</td>
                            <td className='p-0'>sport</td>
                            <td className='p-0'>music</td>
                        </tr>
                        <tr>
                            <td className='p-0'>documentary</td>
                            <td className='p-0'>western</td>
                            <td className='p-0'>Many more</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    )
}
