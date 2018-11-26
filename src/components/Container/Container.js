import React, { Component } from 'react';
import Contacts from '../Contacts/Contacts';
import { createContact } from '../../graphql/mutations';
import { listContacts } from '../../graphql/queries';
import { Mutation } from 'react-apollo';

class Container extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
    }

    render() {
        return (
            <div>
                <label>Name: </label>
                <input onChange={e => this.setState({ name: e.target.value })} type="text" />
                <label>Email: </label>
                <input onChange={e => this.setState({ email: e.target.value })} type="text" />
                <label>phone: </label>
                <input onChange={e => this.setState({ phone: e.target.value })} type="text" />

                <Mutation mutation={createContact}
                    variables={{ input: { name: this.state.name, phone: this.state.phone, email: this.state.email } }}
                    onCompleted={() => this.setState({ name: '', email: '', phone: ''})}
                    // refetchQueries={[{ query: listContacts }]}
                    update={(store, { data: { createContact } }) => {
                            const data = store.readQuery({ query: listContacts });
                            data.listContacts.items.unshift(createContact);
                            store.writeQuery({ query: listContacts, data })
                        }}
                >
                    {postMutation =>
                        <button onClick={postMutation}>Add</button>
                    }
                </Mutation>

                <hr />
                <Contacts />
            </div>
        )
    }

}

export default Container;