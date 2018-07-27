import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';
import { TicketProvider, TicketConsumer } from './contexts/TicketContext';
import TicketsTable from './components/TicketsTable';
import AddNew from './components/AddNew';

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  menu: {
    padding: 10
  }
}

const screen = {
  home: 'home',
  add: 'add'
}

class App extends Component {
  state = {
    currentScreen: screen.home
  }

  changeScreen = newScreen => () => {
    this.setState({ currentScreen: newScreen });
  }

  renderHome = () => {
    const {classes} = this.props;
    return (
      <Fragment>
        <div className={classes.menu}>
          <Button variant="contained" color="primary" onClick={this.changeScreen(screen.add)}>
            Add New
          </Button>
        </div>
        <TicketsTable />
      </Fragment>
    );
  }

  renderAdd = () => {
    return (
    <TicketConsumer>
      {({addNewTicket}) => <AddNew onAddTicket={(ticket) => {
        addNewTicket(ticket);
        this.setState({currentScreen: screen.home});
      }} />}
    </TicketConsumer>);
  }

  renderBody = () => {
    switch(this.state.currentScreen) {
      case screen.home:
        return this.renderHome();
      case screen.add:
        return this.renderAdd();
      default:
        return null;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <TicketProvider>
        <header className="App-header">
          <h1 className="App-title">Ticketing</h1>
        </header>
        <main className={classes.body}>
          {this.renderBody()}
        </main>
        </TicketProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
