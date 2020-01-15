import React from 'react';

const GitCard = props => {
    return (
        <div className='git-card'>
            <img className='card-img' src={props.cards.avatar_url} alt={props.cards.name} />
            <h2>{props.cards.name}</h2>
            <h3>{props.cards.location}</h3>
            <h3>Bio:</h3>
                <p>{props.cards.bio}</p>
            <h3>Followers: {props.cards.followers}</h3>
            <h3>Following: {props.cards.following}</h3>
        </div>
    )
}

export default GitCard;