import React, { Component } from 'react';
import Contact from './Contact/Contact'
import { Query } from 'react-apollo';
import { listContacts } from '../../graphql/queries'
import refreshLogo from "../../refresh.jpeg";

class Contacts extends Component {

    render() {
        return (<Query query={listContacts}
            fetchPolicy='cache-and-network' >
            {({ loading, error, data, refetch }) => {
                if (loading) return <div>Fetching</div>;
                if (error) return <div>Error</div>;
                let { items } = data.listContacts

                let contactsList;

                if (items && items.length > 0) {
                    contactsList = items.map(contact => {
                        const { id, name, phone, email } = contact;
                        return <Contact key={id} name={name} email={email} phone={phone} />
                    })
                }
                else {
                    contactsList = <h3>Contacts List Empty</h3>
                }

                return (
                    <div>
                        <img src={refreshLogo}
                            onClick={() => { refetch(); console.log("Refetching Contacts"); }}
                            className="Refresh-logo float-left" alt="refresh"
                        />
                        {contactsList}
                    </div>
                )

            }
            }
        </Query>
        )
    }
}

export default Contacts;