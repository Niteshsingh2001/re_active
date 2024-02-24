import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Menu, menus } from './data'
import { useState } from 'react'

function MenuList({ list }: { list: Menu }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState<{ [key: string]: boolean }>({})

    function handleHideChildren(label: string) {
        setDisplayCurrentChildren((prevData) => ({
            ...prevData,
            [label]: !prevData[label] // Use prevData[label] instead of displayCurrentChildren[label]
        }));
    }


    return (<div className='flex flex-col gap-1'>
        <div className='flex justify-between '>
            {list.label}
            {
                list.children && list.children.length && <div className='cursor-pointer' onClick={() => { handleHideChildren(list.label) }}>
                    {displayCurrentChildren && displayCurrentChildren[list.label] === true ?
                        <MinusIcon className='h-4 w-4 ' />
                        :
                        <PlusIcon className='h-4 w-4 ' />
                    }

                </div>
            }
        </div>
        {
            displayCurrentChildren[list.label] && <div className='pl-4'>
                {
                    list.children && list.children.map((item) => <MenuList list={item}></MenuList>)
                }
            </div>
        }

    </div>)
}

export default function TreeView() {
    return (
        <div className='w-72 px-4 py-2 text-white bg-blue-500 h-screen rounded-r-lg'>
            {
                menus && menus.map(
                    (item) => <MenuList list={item}></MenuList>)

            }
        </div>
    )
}
