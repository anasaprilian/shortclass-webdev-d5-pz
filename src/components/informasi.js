import foto from './foto.jpeg'
import '../App.css'

function Informasi() {

    return(
        <div>
            <img src={foto} className="App-logo" alt="logo" />
            <p>Anas Aprilian Tri Yahya</p>
            <p>Telkom University, S1 Sistem Informasi</p>
            <p>21 Years Old</p>
        </div>
    )
    
}
export default Informasi