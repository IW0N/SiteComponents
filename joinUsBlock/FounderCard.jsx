//@ts-ignore
import JoinUsCard from "./JoinUsCard.tsx";
export default class FounderCard extends JoinUsCard
{
    
    constructor(props)
    {
        super(props)
        this.text="Вступайте в состав Учредителей партии через анкету на сайте"
        this.joinLinkText="Анкета на сайте"
        this.joinLink="/joinUs"
    }
}