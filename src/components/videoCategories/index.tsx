import { useCategoryContext } from "../contexts/categoriesContext";
import { CategoriesContainer, CategoriesList, CategoryFrame, CategoryName } from "./styles";

function VideoCategories() {
    
    const categoryButtons = [
        {name: 'Tudo', id: '0'},
        {name: 'Games', id: '20'},
        {name: 'Futebol', id: '17'},
        {name: 'Entretenimento', id: '24'},
        {name: 'Música', id: '10'},
        {name: 'Pessoas e blogs', id: '22'},
        {name: 'Automóveis e veículos', id: '2'},
        {name: 'Animais e pets', id: '15'},
        {name: 'Notícias e política', id: '25'},
        {name: 'Comédia', id: '23'},
        {name: 'Shorts', id: '26'},
        {name: 'Infantil', id: '1'},
        {name: 'Vida a dois', id: '22'},
        {name: 'Esportes', id: '17'},
        {name: 'Memes', id: '23'},
        {name: 'Jogos pc', id: '20'},
        {name: 'Jornais', id: '25'},
        {name: 'Kids', id: '1'},
        {name: 'Hits do momento', id: '10'},
        {name: 'História das civilizações', id: '22'},
        {name: 'Ciências', id: '15'},
        {name: 'Viagens pelo mundo', id: '24'},
        {name: 'Séries', id: '23'},
        {name: 'Novidades', id: '24'},
        {name: 'Educação', id: '1'}, 
        {name: 'Ciência e tecnologia', id: '2'}, 
        {name: 'Documentários', id: '26'}, 
        {name: 'Economia', id: '25'}, 
        {name: 'Investimentos e finanças', id: '20'}, 
        {name: 'Moda e estilo', id: '23'},
        {name: 'Comunicação', id: '10'},
        {name: 'Beleza', id: '24'},
    ];
    
    const {setCategoryId} = useCategoryContext()

    function searchCategory(id: string) {
        setCategoryId(id)
    }

    return (
        <CategoriesContainer id="categories-container">
            <CategoriesList id="categories-list">
            {categoryButtons.map((button, index) => ( 
                <CategoryFrame onClick={() => searchCategory(button.id)} key={index} id="category-frame">
                    <div>
                        <CategoryName id="category-name">{button.name}</CategoryName>
                    </div>
                </CategoryFrame>
            ))}
            </CategoriesList>
        </CategoriesContainer>
    )
}

export default VideoCategories;
