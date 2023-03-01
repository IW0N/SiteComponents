//@ts-ignore
import JoinUsCard from "./JoinUsCard.tsx";
export default class BotCard extends JoinUsCard
{
    
    constructor(props)
    {
        super(props)
        this.text="Вступайте в состав Учредителей партии через Телеграм-бот"
        this.joinLinkText="Анкета в телеграм боте"
        this.joinLink="https://t.me/SocDemRus_bot"
    }
}