import { ReactNode } from "react"

type InfoCardType = {
    title: string,
    description: string,
    icon: ReactNode
    styles: string
}
function InfoCard({ title, description, icon, styles }: InfoCardType) {
    return (
        <div className={`${styles} p-5 text-font-color flex flex-col items-center`}>
            <div className="w-20 h-20 bg-gradient-to-r from-dark-blue to-linear rounded-full text-white flex items-center justify-center text-3xl">{icon}</div>
            <h3 className="mt-5 mb-3 text-xl">{title}</h3>
            <p className="mb-3 text-center text-sm">{description}</p>
        </div>
    )
}

export default InfoCard