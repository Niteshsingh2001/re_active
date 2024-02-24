import { XMarkIcon } from '@heroicons/react/24/solid'

interface ModelProps {
    title: string
    onClose: () => void

}

export default function Model({ title, onClose }: ModelProps) {
    return (
        <div className='bg-transparent backdrop-blur-md h-full w-full m-0 p-0 absolute flex justify-center items-center'>
            <div className='flex flex-col p-2 rounded-md bg-gray-400 w-1/2 h-1/2 justify-start'>
                {/* Header */}
                <div className='flex gap-1 justify-between py-1  '>
                    <h1>{title}</h1>
                    <button aria-label='Close' onClick={onClose}>
                        <XMarkIcon className='w-4 h-4 text' />
                    </button>
                </div>
                {/* Body */}
                <div className='py-2 h-96'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam accusantium ipsa aliquam, hic perferendis voluptate modi, officia culpa enim cumque officiis quas ut et nam voluptatem, repellat at alias?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa doloremque delectus quis voluptatibus. Qui earum modi veritatis beatae totam sapiente aperiam rem saepe quod dolore veniam fuga, eaque ad tempore?
                    <br />
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolor dolorum odit a doloremque adipisci asperiores! Amet optio et quibusdam consequuntur culpa officia sunt quod? Eos veniam iusto dicta fugit!
                    <br />
                </div>
                {/* Footer */}
                <div className='relative bottom-0 flex justify-end gap-2'>
                    <button onClick={onClose} className="bg-blue-500 rounded text-white px-5 py-1" type="button">Close</button>
                    <button className="bg-blue-500 rounded text-white px-5 py-1" type="button">Save</button>
                </div>
            </div>
        </div>
    )
}
