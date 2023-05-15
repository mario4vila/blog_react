import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";

class Form extends React.Component {

    refName = React.createRef();
    refSurname = React.createRef();
    refBio = React.createRef();
    refSex = React.createRef();

    submitForm = (e)=>{
        e.preventDefault();
        alert(`
            Form has been sent,
            Name: ${this.refName.current.value}
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

                        <form className="mid-form" onSubmit={this.submitForm}>
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
                                <input type="radio" name="genero" value={'hombre'} ref={this.refSex}/> Hombre
                                <input type="radio" name="genero" value={'mujer'} ref={this.refSex}/> Mujer
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
