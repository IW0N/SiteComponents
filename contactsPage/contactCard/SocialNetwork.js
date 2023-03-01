export default class SocialNetwork
{
    #name;
    #link;
    get Name(){return this.#name}
    get Link(){return this.#link}
    constructor(networkName,link)
    {
        this.#name=networkName
        this.#link=link
    }
}