export default class Contact
{
    #name;
    #description;
    #contactId;
    #photo;
    get Name(){ return this.#name }
    get ShortDescription(){ return this.#description }
    get Id(){return this.#contactId}
    get PhotoSrc(){return this.#photo}
    constructor(name,shortDescription,contactId,photoSrc)
    {
        this.#name=name;
        this.#description=shortDescription+"..."
        this.#contactId=contactId
        this.#photo=photoSrc
    }
}