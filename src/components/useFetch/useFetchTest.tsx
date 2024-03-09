import useFetch from '.'

export default function useFetchTest() {
    const { data, error, pending } = useFetch("https://dummyjson.com/products/categories")

    console.log(data);

    return (
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-xl font-semibold'>Use Fetch Hook (Custom Hook)</h1>
            <div className='flex flex-col'>

                {
                    data && data.map((value, index) => <span key={index} className='text-sm py-0.5'>{value}</span>)
                }

            </div>
            {
                error && <span>Somthing Went Wrong</span>
            }
            {
                pending && <span className='font-thin text-xl'>Loading ...</span>
            }


        </div>
    )
}
