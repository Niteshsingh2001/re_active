import { useEffect, useState } from 'react'

interface SquareProps {
    player: string,
    onPlay: () => void
}
interface GameScreeenProps {
    grid: Array<string>
    player: string,
    handlePlay: (index: number) => void
}
interface WinnerScreenProps {
    winner: "X" | "O" | "draw",
    handleRestart: () => void
}

const intialValues: Array<string> = new Array(9).fill("")
const matches: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function Square({ player, onPlay }: SquareProps) {
    return (
        <div
            className='size-20 cursor-pointer rounded bg-black text-white  flex items-center justify-center text-3xl'
            onClick={onPlay}
        >
            {player}
        </div>
    )
}


function WinnerScreen({ winner, handleRestart }: WinnerScreenProps) {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-2xl font-thin capitalize'> {winner !== "draw" ? `Winner ${winner}` : "Match Draw"}</h1>
            <button className='py-1 px-3 bg-black font-thin text-white rounded' onClick={handleRestart}>
                Restart
            </button>
        </div>

    )
}
function GameScreen({ grid, player, handlePlay }: GameScreeenProps) {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-2xl font-thin'>Player <span className='font-bold'>{player}</span> </h1>
            <div className='grid grid-cols-3 gap-2  '>
                {
                    grid.map((value, index) =>
                        <Square
                            key={index}
                            player={value}
                            onPlay={() => { handlePlay(index) }} />
                    )

                }
            </div>
        </div>

    )
}





export default function TicTacToe() {

    const [grid, setGrid] = useState<Array<string>>(intialValues)
    const [player, setPlayer] = useState<"X" | "O">("X")
    const [winner, setWinner] = useState<"X" | "O" | "draw" | null>(null)

    function handlePlay(index: number) {
        if (grid[index] === "") {
            const newGrid = [...grid]
            newGrid[index] = player
            setGrid(() => newGrid)
            setPlayer(player === "X" ? "O" : "X")
        }
    }

    function handleRestart() {
        setGrid(intialValues)
        setWinner(null)
    }


    useEffect(() => {
        matches.forEach((match: Array<number>) => {
            if (grid[match[0]] === "X" && grid[match[1]] === "X" && grid[match[2]] === "X") {
                setWinner("X")
            }
            if (grid[match[0]] === "O" && grid[match[1]] === "O" && grid[match[2]] === "O") {
                setWinner("O")
            }

        })

        if (grid.includes("") === false) {
            setWinner("draw")
        }

    }, [grid, player])




    return (
        <>

            {
                winner === null ?
                    < GameScreen grid={grid} player={player} handlePlay={handlePlay} />
                    :
                    <WinnerScreen winner={winner} handleRestart={handleRestart} />

            }
        </>
    )
}
