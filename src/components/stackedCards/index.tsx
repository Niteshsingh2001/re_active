import Card from './card'
import AutoComplete from '../autocomplete'
import Header from '../header'

export default function StackedCards() {
    return (


        <div className='flex  w-full h-full items-center justify-start py-5 flex-col gap-4 overflow-y-auto'>
            <Header />
            <AutoComplete />
            <div className='flex flex-col gap-2 scroll-smooth'>
                <Card className='bottom-9 z-[7] mt-0' logo='Reactive' description='Bring UI to life' />
                <Card className='bottom-8 z-[6] mt-3' logo='AWS' description='Servver that Scales' />
                <Card className='bottom-7 z-[5] mt-4 ' logo='Phillips' description='Innovation and you' />
                <Card className='bottom-6 z-[4] mt-5' logo='Nokia' description='Connecting Peoples' />
                <Card className='bottom-5 z-[3] mt-6' logo='Idea' description='Ek idea jo badla de aap ki duniya' />
                <Card className='bottom-4 z-[2] mt-7' logo='Tide' description='Tide Plus ho toh white plus ho' />
                <Card className='bottom-3 z-[1] mt-8' logo='Meta' description="Privacy doesn't exist" />
            </div>


        </div>

    )
}
