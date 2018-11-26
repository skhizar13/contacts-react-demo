import React from 'react';

const Contact = (props) => {
    const { name, phone, email } = props;
    return (
        <div className="Contact">
            <b>Name: </b>{name}
            <br /><b>Number: </b>{phone}
            <br /><b>email: </b>{email}
            <br />
        </div>
    );
};

export default Contact;