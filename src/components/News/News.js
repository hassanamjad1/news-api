import React, {Component} from 'react';
import NewSingle from './NewSingle.js';

class News extends Component {

    state = {
        news : this.props.newsArray,
    }
    constructor(props) {
        super(props);
        this.state = {
            news : this.props.newsArray,
            
            // country : this.props.country,

            // totalNum : 0,
        };
    }
    render() {
        const { news} = this.state;
        // return (
        //     <div>
                
        //         {this.renderItems()}
        //     </div>
        // );
        return(
            <div>
                {news.map((item) =>(
                    <NewSingle key={item.url} item = {item} />
                ))}
            </div>
        );
    }
}
export default News;
