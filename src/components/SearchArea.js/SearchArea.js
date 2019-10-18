import React from 'react';

const SearchArea = (props)=>{
    return(
        <div className="container">
                <div className="row">
                    <section className="col s8 offset-s2">
                        <form action="" onSubmit={props.handleSubmit}>
                            <div className="input-field">
                                <input type="text" placeholder="What are we going to see today?"  onChange={props.handleChange}/>
                                <i className="material-icons">keyboard_arrow_down</i>
                            </div>
                        </form>
                    </section>
                </div>
        </div>
    );
};

export default SearchArea;