import { Link } from "react-router-dom";
import "./errorPage.scss"

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="container">
        <div className="error">
            <h1>404 Page Not Found</h1>
            <Link to='/'>
                <button>Главная страница</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;
