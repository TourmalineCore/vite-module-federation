import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <h2>Sidebar</h2>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <a 
                            href="http://localhost:5002" 
                            className="sidebar-link"
                        >
                            First service
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a 
                            href="http://localhost:5003/to-dos" 
                            className="sidebar-link"
                        >
                            Todos service
                        </a>
                    </li>  
                    <li className="sidebar-item">
                        <a 
                            href="http://localhost:5004" 
                            className="sidebar-link"
                        >
                            Second service
                        </a>
                    </li>                  
                </ul>
            </div>
        </div>
    );
}

export default Sidebar
