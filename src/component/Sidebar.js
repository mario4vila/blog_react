import React, {useState} from "react";

const Sidebar = (props) => {
    const [formValues, setFormValues] = useState({
        search: ''
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    };

    const redirectToSearch = (e) => {
        e.preventDefault();
        window.location.href = "/blog/search/" + formValues.search;
    }

    return (
        <aside id="sidebar">
            {props.blog &&
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="#" className="btn btn-success">Crear artículo</a>
                </div>
            }

            <div id="search" className="sidebar-item">
                <h3>Buscador</h3>
                <p>Encuentra el artículo que buscas</p>
                <form onSubmit={redirectToSearch}>
                    <input type="text" name="search" value={formValues.search} onChange={handleInputChange}/>
                    <input type="submit" name="submit" value="Buscar" className="btn"/>
                </form>
            </div>
        </aside>
    );
}

export default Sidebar;