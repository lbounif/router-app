// use useNavigate hook
//was useHistory before v6
import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const goToArticles = () => {
        navigate("/articles")
    }
    return (
        <div className="page-content">
            <div className="btn" onClick={goToArticles}>
                Go to articles
            </div>
        </div>
    )
}
export default Home