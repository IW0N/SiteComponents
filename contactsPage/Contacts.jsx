//@ts-ignore
import PageTemplate from "../template/PageTemplate.tsx";
import Contact from "./contactCard/Contact";
import ContactCard from "./contactCard/ContactCard";
import SocialNetwork from "./contactCard/SocialNetwork";
import ContactGrid from "./ContactGrid";
export default class Contacts extends PageTemplate
{
    contactId;
    showJoinUsBlock=true;
    breadCrumbsItems=
    [
        {
            name:"Главная",
            link:"/"
        },
        {
            name:"Контакты",
            link:"/contacts"
        }
    ]
    contactDatas=
    {
        UriyIoffe:
        {
            contact:new Contact(
                "Юрий Иоффе",
                "Председатель Оргкомитета Учредительной группы партии «Социал-демократы России»",
                "Uriy-Ioffe",
                "/icons/contacts/ioffeLogo.jpg"),
            socialMedia:new SocialNetwork("Вконтакте","https://vk.com/ura_sd")
        },
        ValyanOskain:
        {
            contact:new Contact
            (
                "Леонид Соколов",
                "Секретарь Оргкомитета Учредительной группы партии «Социал-демократы России»",
                "Leonid-Sokolov",
                "/icons/contacts/defaultLogo.svg"
            ),
            socialMedia:new SocialNetwork("Телеграм","https://t.me/mrsdrp")
        }
    }
    
    
    title="Контакты"
    constructor(props)
    {
        super(props)
        const contacts=
        [
            <ContactCard 
                contact={this.contactDatas.UriyIoffe.contact}
                socialMedia={this.contactDatas.UriyIoffe.socialMedia}/>,
            <ContactCard 
                contact={this.contactDatas.ValyanOskain.contact}
                socialMedia={this.contactDatas.ValyanOskain.socialMedia}
            />
        ]
        this.content=<ContactGrid contacts={contacts}/>
    }
}