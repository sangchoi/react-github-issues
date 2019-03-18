import React from 'react';
import {Link} from 'react-router-dom';

const Issues = (props) => {

    const issues = props.issues.map((issue, index) => (
         <div key={index}>
            <h3><Link className="LinkOne" to={`/issues/${issue.id}`}>{issue.title}</Link></h3>
            <p>{issue.body}</p>
        </div>
      ))  
        return (
            <div className="Issues">
                <h1 className="HeaderOne">GIT HUB ISSUES</h1>
                {issues}
            </div>
        )
    
}

export default Issues;