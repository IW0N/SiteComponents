import PageTemplate from "../template/PageTemplate.tsx"
import CategoryCard from "./PostCategoryCard/PostCategoryCard";
import "./PostCategories.css"
class Category
{
    #quantity;
    #id;
    #name;
    #link;
    constructor(id,name,quantity,link)
    {
        this.#quantity=quantity
        this.#id=id
        this.#name=name
        this.#link=link
    }
    get link(){return this.#link}
    get quantity(){return this.#quantity}
    get id(){return this.#id}
    get name(){return this.#name}
}
export default class PostsCategories extends PageTemplate
{
    breadCrumbsItems=
    [
        {
            name:"Главная",
            link:"/"
        },
        {
            name:"Статьи",
            link:"/posts"
        },
        {
            name:"Категории статей",
            link:"/posts/categories"
        }
    ]
    title="Категории статей"
    showJoinUsBlock=false
    getCategories()
    {
        /*запрос категорий с сервера. 
            В куках указать количество запрашиваемых категорий и сдвиг в их количестве
            Структура ответа: [{id:string,name:string,quantity:number}]
        */
        //имитирую ответ сервера
        return [
            new Category("Economic","Экономика",23),
            new Category("Politic","Политика",19),
            new Category("Social-democracy","Социал-демократия",30),
            new Category("USSR","СССР",5),
            new Category("Out-Policy","внешняя политика",8),
            new Category("Inner-Policy","Внутрення политика",15),
            new Category("Repair-Program","Программа реформ",13),
            new Category("Economic","Экономика",23),
            new Category("Politic","Политика",19),
            new Category("Social-democracy","Социал-демократия",21),
            new Category("USSR","СССР",15),
            new Category("Out-Policy","внешняя политика",8),
            new Category("Inner-Policy","Внутрення политика",999),
            new Category("Repair-Program","Программа реформ",18),
            new Category("Economic","Экономика",23),
            new Category("Politic","Политика",19),
            new Category("Social-democracy","Социал-демократия",30),
            new Category("USSR","СССР",13),
            new Category("Out-Policy","внешняя политика",8),
            new Category("Inner-Policy","Внутрення политика",15),
            new Category("Repair-Program","Программа реформ",13),

        ]
    }
    getListQuantity(){

    }
    normalizeWidthOfLastBlocks()
    {
        
    }
    constructor(props)
    {
        super(props);
        const categories=this.getCategories()
        this.normalizeWidthOfLastBlocks=this.normalizeWidthOfLastBlocks.bind(this)
        const categoryList=[]
        for(var i in categories)
        {
            const category=categories[i]
            categoryList.push(<CategoryCard category={category}/>)
        }
        this.content=(
        <div className="categoryGrid" onLoad={this.normalizeWidthOfLastBlocks()}>
            {categoryList}
        </div>)
    }
}