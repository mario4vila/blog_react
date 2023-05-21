import React from "react";
import 'moment/locale/es'
import Slider from "../component/Slider";
import ListArticles from "../component/Article/ListArticles";
import Sidebar from "../component/Sidebar";
import {useParams} from "react-router-dom";

const Search = () => {

    const {search} = useParams();

    return (
        <div id="blog">
            <Slider
                title={"Search: " + search}
                size={'small'}
            />
            <div className="center">
                <section id="content">
                    <ListArticles
                        search={search}
                    />
                </section>
                <Sidebar
                    blog={true}
                />

                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default Search;