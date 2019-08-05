import React, { useContext, useState } from 'react';

import { AppContext } from '../contexts/app';
import { startLogout } from '../actions/auth';
import { addLink, startAddLink } from '../actions/links';

export default () => {
    const [link, setLink] = useState('');
    const { state, dispatch } = useContext(AppContext);

    const handleLogout = () => dispatch(startLogout());

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (link) {
            startAddLink(link); // TODO: temporary while app uses localStorage
            dispatch(addLink(link));
            setLink('');
        } else {
            alert('Please submit a valid url');
        }
    };

    return (
        <div>
            <h1>Your Links</h1>
            <button onClick={handleLogout}>Logout</button>

            {state.links.map((link, index) => (
                <div key={index}>
                    <p>{link.to}</p>
                    <p>{link.url}</p>
                </div>
            ))}

            <form onSubmit={handleOnSubmit}>
                <input
                    placeholder='Example: www.google.com'
                    value={link}
                    onChange={(e) => setLink(e.target.value)} />
                <button>Create Link</button>
            </form>
        </div>
    );
};