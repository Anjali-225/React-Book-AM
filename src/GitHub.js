import React, { Component } from 'react';
import axios from 'axios'; // npm install axios
import ReactLoading from 'react-loading';
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class GitHub extends Component {

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading : true
        })
        this.getGitHubData(this.state.searchTerm);
    }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm:'',
            isLoading : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.getGitHubData('greg');
    }

    getGitHubData(_searchTerm){
        axios.get("https://api.github.com/search/users?q="+_searchTerm)
            .then(res => {
                this.setState({
                    isLoading : false,
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }

    render() {
        const listUsers = this.state.data.map((user) =>
            <Media key={user.id}>
                <img 
                    width={64}
                    height={64}
                    className="mr-3"
                    src={ user.avatar_url}
                    alt="Image"/>
                />

                <Media.Body>
                    <h5>{user.login}</h5>
                    <p>Score: {user.score}</p>
                </Media.Body>
            </Media>
        );

        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formInlineName">
                        <FormControl
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>
                <h3>GitHub Users Results</h3>
                { this.state.isLoading &&
                    <ReactLoading type="spinningBubbles" color="#444" />
                }
                {listUsers}
            </div>
       );
    }
}
export default GitHub;

    // render() {
    //     const listUsers = this.state.data.map((user) =>
    //         <Media key={user.id}>
    //         <Media.Left>
    //             <a href={user.html_url}>
    //                 <img width={64} height={64} src={user.avatar_url}
    //                 alt="Image"/>
    //             </a>
    //         </Media.Left>
    //         <Media.Body>
    //             <Media.Heading>{user.login}</Media.Heading>
    //             <p>Score: { user.score }</p>
    //         </Media.Body>
    //         </Media>
    //     );

       
    // }
