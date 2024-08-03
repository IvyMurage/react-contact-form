import Content from '../content.json'
import AboutInfo from '../components/AboutInfo'
import { nanoid } from 'nanoid'
function About() {
    const { about } = Content

    const reasonsList = about.reasons.reason.map(key => <li id='list' className='before:text-dark-blue before:pr-2 ' key={nanoid()}>{key}</li>)
    return (
        <div className='px-12 text-font-color '>
            <AboutInfo
                title={about.title}
                image={about.image}
                imageStyles='col-span-1 w-[520px] mt-2 object-fit'
                pStyles='my-7 text-sm '
                description={about.description}
            >
                <h2 className='mb-5 text-xl  font-semibold'>{about.reasons.title}</h2>
                <ul className='grid grid-cols-2 text-sm  gap-2'>
                    {reasonsList}
                </ul>
            </AboutInfo>
        </div>
    )
}

export default About