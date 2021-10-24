import React from 'react';

//stateless component NewSingle

const NewSingle = ({item}) => {
    return(
        
        <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                    <img src={item.urlToImage} alt={item.title} />
                    <span class="card-title">{item.source.name}</span>
                    </div>
                    <div class="card-content">
                        <span class="card-title"> <strong> {item.title} </strong></span>
                        <p> {item.description} </p>
                    </div>
                    <div class="card-action">
                    <a href={item.url} target="_blank" >Link to the Article</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSingle;
