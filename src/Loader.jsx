import Loading from 'react-loaders'
import "./Loader.scss"

const Loader = () => {
  return (
    <div className='loading'>
      <div className="container">
        <div className="loading_loader">
            <Loading type="ball-clip-rotate"/>
        </div>
      </div>
    </div>
  )
}

export default Loader;
