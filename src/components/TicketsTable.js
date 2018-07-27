import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { TicketConsumer } from '../contexts/TicketContext';
import { stage } from '../data/mockData';

const orderByStage = (a,b) => {
    const stages = Object.values(stage);
    const difference = stages.indexOf(a.stage) - stages.indexOf(b.stage);
    console.log(a,b, difference)
    return difference;
}

class TicketsTable extends Component {
    renderActions = currentStage => {
        switch(currentStage) {
          case stage.identified:
            return <Button variant="contained" color="secondary">Triage</Button>;
          case stage.triaged:
            return <Button variant="contained" color="primary">Pick Up</Button>;
          case stage.inProgress:
          case stage.uat:
            return <Button variant="contained">Add Note</Button>;
        }
        return null;
    }

    render() {
        return (
            <TicketConsumer>
                {({ tickets }) => (
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>Reference</TableCell>
                            <TableCell>Issue</TableCell>
                            <TableCell>Organisation</TableCell>
                            <TableCell>Assignee</TableCell>
                            <TableCell>Stage</TableCell>
                            <TableCell />
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {tickets.sort(orderByStage).map(n => {
                            return (
                            <TableRow key={n.id}>
                                <TableCell component="th" scope="row">
                                DH00{n.id}
                                </TableCell>
                                <TableCell >{n.title}</TableCell>
                                <TableCell >{n.organisation}</TableCell>
                                <TableCell >{n.assignee}</TableCell>
                                <TableCell >{n.stage}</TableCell>
                                <TableCell>{this.renderActions(n.stage)}</TableCell>
                            </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>)
                }
            </TicketConsumer>
        )
    }
}

export default TicketsTable;
