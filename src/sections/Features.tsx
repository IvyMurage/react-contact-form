import { faBullhorn, faComment, faMagicWandSparkles, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import content from '../content.json'
import InfoCard from "../components/InfoCard";

function Features() {

    const { content: Descriptions, title: featureTitle } = content.features

    const descriptionList = Descriptions.map(description => {
        let icon;
        switch (description.iconType) {
            case "chats":
                icon = <FontAwesomeIcon icon={faComment} />;
                break;
            case "megaphone":
                icon = <FontAwesomeIcon icon={faBullhorn} />;
                break;
            case "users":
                icon = <FontAwesomeIcon icon={faUsers} />;
                break;

            case "magic-sparkles":
                icon = <FontAwesomeIcon icon={faMagicWandSparkles} />;
                break;
            default:
                icon = null;
        }
        return <InfoCard
            icon={icon}
            title={description.title}
            description={description.description}
            styles=''
        />
    })

    return (
        <div className=" p-10 grid grid-cols-4">
            <h2 className="col-span-4 mb-3 font-bold text-center text-3xl px-4 mt-3 ">{featureTitle.toUpperCase()}</h2>
            <div className='w-14 m-0 h-1 mb-16  bg-gradient-to-l from-dark-blue to-linear col-span-4 place-self-center  '></div>
            {descriptionList}
        </div>
    )
}


export default Features