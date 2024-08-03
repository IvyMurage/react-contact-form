import { ReactNode } from 'react'
type AboutInfoType = {
    title?: string
    image: string,
    description: string,
    children: ReactNode,
    imageStyles?: string
    pStyles?: string
}

function AboutInfo({ image, description, children, imageStyles, title, pStyles }: AboutInfoType) {
    return (
        <div className='grid grid-cols-2 items-center'>
            <img className={imageStyles} src={image} alt='' />
            <div>
                {title && <> <h1 className=' text-black text-3xl font-bold uppercase'>{title}</h1>
                    <div className='w-14 m-0 h-1 mb-8  mt-2 bg-gradient-to-l from-dark-blue to-linear col-span-4 place-self-center  '></div>
                </>}
                <p className={pStyles}>{description}</p>
                {children}
            </div>
        </div>
    )
}

export default AboutInfo