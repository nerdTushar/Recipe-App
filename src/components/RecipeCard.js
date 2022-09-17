import CustomImages from "./CustomImages"
import { Link } from "react-router-dom"
export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImages imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Link className="view-btn" to='/recipes/view'>VIEW RECIPE</Link>
            </div>
        </div>
    )
}