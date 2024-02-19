
import { StarIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function StarRating() {
    const [rating, setRating] = useState<number>(0)
    const [hover, sethover] = useState<number>(0)
    useEffect(() => {
        console.log(rating);
    }, [rating])

    function handleMouseEnter(index: number) {
        sethover(index)
    }
    function handleMouseLeave() {
        sethover(rating)
    }

    function handleClick(index: number) {
        setRating(index)
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center'>

            {[...Array(5)].map((_, index) =>
                <StarIcon
                    key={index}
                    className={`h-8 w-8  ${index + 1 <= (hover || rating) ? "text-yellow-500" : "text-gray-300"} `}
                    onMouseMove={() => { handleMouseEnter(index + 1) }}
                    onMouseLeave={() => { handleMouseLeave() }}
                    onClick={() => { handleClick(index + 1) }}
                />
            )}
        </div>
    )
}
