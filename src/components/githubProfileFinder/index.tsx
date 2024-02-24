import { ChangeEvent, useState } from 'react'
import Profile from './profile'

async function getuser(url: string) {
    const response = await fetch(url)
    return response.json()
}


export default function GithubProfile() {

    const [userName, setUserName] = useState<string>('')
    const [userData, setUserData] = useState<{ [key: string]: string }>()

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value)
    }

    async function handleGenerate() {
        if (userName.trim() !== "") {
            try {
                const data = await getuser(`https://api.github.com/users/${userName}`);
                setUserData(data);
                setUserName('');
            } catch (error) {
                alert("Something went wrong while fetching user data.");
            }
        } else {
            alert("Enter Valid Username");
        }
    }

    return (
        <>
            <div className="flex gap-2 w-full items-center justify-center">
                <input type="text"
                    className="bg-gray-200 rounded p-1 px-2 outline-none w-96"
                    placeholder="Enter username here"
                    aria-label="username"
                    value={userName}
                    onChange={handleInputChange}
                />
                <button
                    type="button"
                    onClick={handleGenerate}
                    className="bg-blue-500 rounded p-1 px-2 text-white disabled:bg-slate-500"
                    disabled={userName && userName.trim() !== "" ? false : true}
                >
                    Search
                </button>
            </div>

            {
                userData && <Profile
                    name={userData.name}
                    img={userData.avatar_url}
                    followers={parseInt(userData.followers)}
                    following={parseInt(userData.following)}
                    gist={parseInt(userData.public_gists)}
                    repos={parseInt(userData.public_repos)}
                    url={userData.html_url}
                    created_date={new Date(userData.created_at)}
                />
            }
        </>
    )
}
