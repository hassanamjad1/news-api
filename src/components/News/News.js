import React, {Component} from 'react';
import NewSingle from './NewSingle.js';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news : [],
            totalNum : 0,
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-21&sortBy=publishedAt&apiKey=7b38a50dc5ac4437b56c2f2290b9d8d8';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                this.setState({
                    news : data.articles,
                    totalNum : data.totalResults,
                });
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        return this.props.items.map((item) =>(
            <NewSingle key={item.id} item = {item} />
        )) ;
    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}
export default News;
