import React, { Component } from 'react';
import { data, createData } from '../data/mockData';

const TicketContext = React.createContext();

class TicketProvider extends Component {
    state = {
        data: data
    }

    handleAddTicket = (ticket) => {
        this.setState(({ data }) => ({ data: [...data, createData(ticket.summary, ticket.organisation)]}))
    }

    render() {
        return (
            <TicketContext.Provider value={{ 
                tickets: this.state.data,
                addNewTicket: this.handleAddTicket
            }}>
                {this.props.children}
            </TicketContext.Provider>
        )
    }
}

const TicketConsumer = TicketContext.Consumer;

export { TicketProvider, TicketConsumer };
