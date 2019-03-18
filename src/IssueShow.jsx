import React from 'react';

const IssueShow = (props) => {
    let issue = props.issues.find((issue) => {
        return issue.id === parseInt(props.match.params.id)
    })
    console.log(props.match.params.id);
    return (
        
        <div className="IssueShow">
            <h1 className="HeaderTwo">{issue.title}</h1>
            <p>{issue.body}</p>
        </div>
        
    )
}

export default IssueShow;