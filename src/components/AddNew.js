import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { MenuItem } from '@material-ui/core';
import { organisations } from '../data/mockData';

const styles = theme => ({
    container: {
        maxWidth: 1000,
        padding: 40
    },
    button: {
        marginTop: 20,
    },
    textField: {
        width: '100%',
    }
});

class AddNew extends Component {
    state = {
        page: 0,
        ticket: {
            summary: '',
            organisation: '',
            details: ''
        }
    }

    handleMoveNext = () => {
        if (this.state.page < 2) {
            this.setState(({ page }) => ({ page: page + 1 }));
        } else {
            const { onAddTicket } = this.props;
            onAddTicket && onAddTicket(this.state.ticket);
        }
    }

    handleTicketChange = (e) => {
        const {name, value} = e.target;
        this.setState(({ ticket }) => ({ ticket: {...ticket, [name]: value }}));
    }

    renderSummary = () => {
        const { classes } = this.props;
        const { ticket: { summary } } = this.state;
        return (
            <Fragment>
                <Typography variant="headline">Please provide a brief summary of the issue:</Typography>
                <TextField
                    className={classes.textField}
                    name="summary"
                    value={summary}
                    onChange={this.handleTicketChange}
                    margin="normal"
                />
            </Fragment>
        );
    }

    renderClient = () => {
        const { ticket: { organisation } } = this.state;
        return (
            <Fragment>
                <Typography variant="headline">Which client is the issue for?</Typography>
                <Select
                    name="organisation"
                    value={organisation}
                    onChange={this.handleTicketChange}
                    margin="normal"
                >
                    {Object.values(organisations).map(o => <MenuItem value={o}>{o}</MenuItem>)}
                </Select>
            </Fragment>
        );
    }

    renderDetails = () => {
        const { classes } = this.props;
        const { ticket: { details } } = this.state;
        return (
            <Fragment>
                <Typography variant="headline">Please provide a detailed description of the problem:</Typography>
                <TextField
                    className={classes.textField}
                    multiline
                    name="details"
                    value={details}
                    onChange={this.handleTicketChange}
                    margin="normal"
                />
            </Fragment>
        );
    }

    renderBody = () => {
        switch (this.state.page) {
            case 0:
                return this.renderClient();
            case 1:
                return this.renderSummary();
            case 2: 
                return this.renderDetails();
            default:
                return null;
        }
    }

    render() {
        const { classes } = this.props;
        const { page } = this.state;
        return (
            <div className={classes.container}>
                <div>
                    {this.renderBody()}
                </div>
                <Button className={classes.button} variant="contained" color="primary" onClick={this.handleMoveNext}>
                    {page === 2 ? 'Add Ticket' : 'Next'}
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(AddNew);
