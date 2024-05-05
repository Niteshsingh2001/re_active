import { components } from '../data/constants'
import { Link } from 'react-router-dom'

export default function Base() {
    return (
        <div className='flex gap-2  flex-wrap items-start py-4 px-1  justify-center  '>
            {
                components.map(({ link, label }) =>
                    <Link
                        className='w-fit h-16 flex items-center p-2 hover:font-bold font-thin transition-all delay-100 
                        ease-linear '
                        to={link}
                        key={link}>
                        {label}
                    </Link>
                )
            }
            <Link
                className='w-fit h-16 flex items-center p-2 hover:font-bold font-thin transition-all delay-100 ease-linear '
                to="/video_player"
            >
                Custom Video Player
            </Link>
        </div >
    )
}
