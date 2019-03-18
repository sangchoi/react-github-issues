import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Issues from './Issues';
import IssueShow from './IssueShow';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        issues: [],
        
      }
  }

  componentDidMount() {
    let issueApi='https://api.github.com/repos/facebook/react/issues?page=1&per_page=100'

    axios.get(issueApi).then( response=> {
      console.log("THIS IS THE RESPONSE:" + response)
      this.setState({
        issues: response.data
        
      })
    }).catch(err=> console.log(err))
  }
  render() {
    
    // const issues = this.state.issues ?
    // this.state.issues.map((issue, i) => (
    //   <p key={i}>{issue.title}</p>
    // )) : 'NOTTHINNGG IS WORRKIINNGGG';

    return (
      <Router>
      <div className="App">
        <nav className="Navigation">
          <Link className="Navigation" to='/'>Home</Link> |{' '}
          <Link className="Navigation" to='/issues'>Issues</Link> 
        </nav>
          <Route path='/' exact component={Home} />
          <Route path='/issues' exact render={()=><Issues issues={this.state.issues} />} />
          <Route path='/issues/:id' render={(props) => <IssueShow issues={this.state.issues} {...props}/>}/>
          
      </div>
      </Router>
    );
  }
}

export default App;
