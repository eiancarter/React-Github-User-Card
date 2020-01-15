import React from 'react';

const GitList = props => {
    return (
        <div>
            {/* <GitCard followers={this.state.followers} /> */}
             {props.followers.map(follower => (
                <div className='git-cards' key={follower.id}>
                    <img className='card-img' src={follower.avatar_url} alt={follower.login} />
                    <h2>{follower.login}</h2>
                    <h3>{follower.html_url}</h3>
                </div>
            ))}
        </div>
    )
}

export default GitList;