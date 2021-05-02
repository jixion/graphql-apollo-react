import React from 'react';

const Link = (props) => {
    const { title, author } = props;
    return (
        <div>
            <div>
                {title} by {author}
            </div>
        </div>
    );
};

export default Link;