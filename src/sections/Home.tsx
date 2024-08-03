import { home_page } from '../content.json'
import Button from '../components/Button'
import { Outlet } from 'react-router-dom'
function Home() {

    const { title, paragraph } = home_page
    return (<>
        <div className='bg-no-repeat h-[1000px] -z-10 flex items-center flex-col  bg-cover bg-center bg-hero p-6' >
            <div className='-z-1000 h-[1000px]  absolute inset-0 
                    bg-gray-900 opacity-20'>
            </div>
            <div className='max-w-[600px] mt-60 flex items-center flex-col text-white z-10'>
                <h1 className='text-[82px] font-medium mb-2 text-center'>{title.toUpperCase()}</h1>
                <p className='mb-16 text-xl text-center'>{paragraph}</p>
                <Button
                    placeholder='LEARN MORE'
                    type='button'
                    styles=' bg-gradient-to-r from-dark-blue to-linear border-none py-3 px-10 mt-0'
                />
            </div>

        </div>
        {<Outlet />}
    </>
    )
}

export default Home