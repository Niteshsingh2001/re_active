import WindowResizeHook from '.'

export default function WindowResizeHookTest() {
    const { height, width } = WindowResizeHook()
    return (
        <div className='flex items-center flex-col gap-2'>
            <h1 className='font-extralight text-2xl'>Window Resize Hook Test</h1>
            <div className='flex gap-4'>
                <span className='font-bold text-4xl'>Y: <span className='font-thin'>{height}</span></span>
                <span className='font-bold text-4xl'>X: <span className='font-thin'>{width}</span></span>

            </div>
        </div>
    )
}
