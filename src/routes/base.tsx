import { components } from '../data/constants'
import { Link } from 'react-router-dom'

export default function Base() {
    return (
        <div className='flex gap-2 flex-col'>
            {
                components.map(({ link, label }) => <Link to={link}>{label}</Link>)
            }
        </div>
    )
}
