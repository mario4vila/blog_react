import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";

class Form extends React.Component {

    refName = React.createRef();
    refSurname = React.createRef();
    refBio = React.createRef();
    refSex = React.createRef();

    state = {
        user: null
    };

    handleFormSubmit = (e)=>{
        e.preventDefault();

        const isMale = this.refSex.current.checked;
        let sex = 'female';
        if (isMale){
            sex = 'male';
        }

        const user = {
            name: this.refName.current.value,
            surname: this.refSurname.current.value,
            bio: this.refBio.current.value,
            sex: sex,
        }

        this.setState({
            user: user
        });

        alert(`
            Form has been sent,
            Thanks!
        `)
    }
    render() {
        return (
            <div id="form">
                <Slider
                    title={"Create new entry"}
                    size={'small'}
                />
                <div className="center">
                    <section id="content">
                        <h1 className="subheader">Formulario</h1>

                        {this.state.user &&
                            <div>
                                {JSON.stringify(this.state.user)}
                            </div>
                        }

                        <form className="mid-form" onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.refName}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.refSurname}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.refBio}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="male" ref={this.refSex}/> Hombre
                                <input type="radio" name="genero" value="female"/> Mujer
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success"/>

                        </form>
                    </section>
                    <Sidebar/>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Form;
