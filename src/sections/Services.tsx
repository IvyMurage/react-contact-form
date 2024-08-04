import { faWordpress } from "@fortawesome/free-brands-svg-icons/faWordpress";
import { faCartArrowDown, faCloudDownload, faPieChart } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons/faLanguage";
import { faPlane } from "@fortawesome/free-solid-svg-icons/faPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services } from "../content.json";
import InfoCard from "../components/InfoCard";
import { nanoid } from "nanoid";

function Services() {
    const { title, content, description } = services;

    const serviceList = content.map(service => {
        let icon;
        switch (service.iconType) {
            case "wordpress":
                icon = <FontAwesomeIcon icon={faWordpress} />;
                break;
            case "cart":
                icon = <FontAwesomeIcon icon={faCartArrowDown} />;
                break;
            case "cloud":
                icon = <FontAwesomeIcon icon={faCloudDownload} />;
                break;
            case "language":
                icon = <FontAwesomeIcon icon={faLanguage} />;
                break;
            case "plane":
                icon = <FontAwesomeIcon icon={faPlane} />;
                break;
            case "pie":
                icon = <FontAwesomeIcon icon={faPieChart} />;
                break;
            default:
                icon = null;
        }
        return (
            <InfoCard
                key={nanoid()}
                title={service.title}
                description={service.description}
                icon={icon}
                styles='text-white px-12 text-lg'
            />
        )
    })

    return (
        <div className='bg-gradient-to-r p-10 mt-16 from-dark-blue to-linear'>
            <h2 className="col-span-4 mb-3 font-bold text-center text-3xl px-4 mt-3 text-white">{title.toUpperCase()}</h2>
            <div className='w-14  h-1 mb-5  bg-blue-200  col-span-4 m-auto  '></div>
            <p className='text-center text-white'>{description}</p>
            <div className="grid grid-cols-3 ">
                {serviceList}
            </div>
        </div>
    )
}

export default Services