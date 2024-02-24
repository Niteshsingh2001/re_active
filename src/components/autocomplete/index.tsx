import { ChangeEvent, useEffect, useState } from "react"

export default function AutoComplete() {


    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [users, setUsers] = useState<string[]>([])
    const [search, setSearch] = useState<string>("")
    const [filteredUsers, setFilteredUsers] = useState<string[]>([])

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    useEffect(() => {
        if (search && users) {
            const newFilteredUsers = users.filter((user) => user.toLowerCase().includes(search.toLowerCase()));
            setFilteredUsers(newFilteredUsers)
        }
        else {
            setFilteredUsers([])
        }
    }, [search, users])



    useEffect(() => {
        async function getAllUsers() {
            try {
                const response = await fetch("https://dummyjson.com/users")
                const data = await response.json()
                const users = data["users"].map((user: { [key: string]: string }) => user.firstName);
                setUsers(users)
                setIsLoading(false)

            } catch (error) {
                alert(error)
            }
        }
        getAllUsers()
    }, [])


    return (
        <div className="flex flex-col gap-2 rounded-md h-full w-full justify-center items-center">
            <input
                type="search"
                placeholder="Search user"
                className=" rounded-md outline-none bg-gray-200 p-2 w-[500px]"
                value={search}
                onChange={handleSearch}
            />
            {
                filteredUsers.length > 0 &&
                <div className=" relative  w-[500px] flex flex-col py-1 rounded-md overflow-y-auto min-h-0 max-h-96 bg-gray-100 p-2 ">
                    {
                        filteredUsers.map((name) => {
                            return <span className="py-1 ">

                                {
                                    isLoading ? "Loading please wait ..." : name
                                }
                            </span>
                        })}

                </div>
            }

        </div>
    )
}
