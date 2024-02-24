interface ProfileProps {
    name: string
    followers: number
    repos: number
    following: number
    gist: number
    img: string
    url: string
    created_date: Date
}

function getDate(date: Date) {

    return date.toLocaleDateString(undefined, {
        dateStyle: "long"
    })

}
export default function Profile({ name, img, followers, following, gist, repos, url, created_date }: ProfileProps) {
    return (
        <div className='my-4 rounded-md bg-gray-200 w-[600px] h-96 flex justify-between p-2 items-center'>
            <div className='w-full h-full p-1'>
                <img src={img} alt="profile_img" className='rounded-md  h-full w-full' />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full p-1 gap-8 " >

                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className='font-thin text-4xl'>{name}</h1>
                    <h3 className="text-sm">{getDate(created_date)}</h3>
                </div>

                <div className='flex flex-col gap-4 w-60'>
                    <div className='flex gap-2 justify-between'>
                        <p className='text-sm'>Followers</p>
                        <p className='text-sm'>{followers}</p>
                    </div>
                    <div className='flex gap-2 justify-between'>
                        <p className='text-sm'>Public Repos</p>
                        <p className='text-sm'>{repos}</p>
                    </div>
                    <div className='flex gap-2 justify-between'>
                        <p className='text-sm'>Following</p>
                        <p className='text-sm'>{following}</p>
                    </div>
                    <div className='flex gap-2 justify-between'>
                        <p className='text-sm'>Public Gists</p>
                        <p className='text-sm'>{gist}</p>
                    </div>
                </div>

                <a href={url} className='bg-green-500 w-64 rounded py-1 text-center text-white  '>
                    Visit Profile
                </a>
            </div>
        </div>
    )
}
