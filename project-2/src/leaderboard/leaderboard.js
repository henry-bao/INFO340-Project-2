import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import TableHead from './tablehead';
import TableBody from './tablebody';
import styled from 'styled-components';

const LeaderBoardContainer = styled.div`
    padding: 2em 3em 3em 2em;
`;

export default function LeaderBoard(props) {
    const [cardOrder, setCardOrder] = useState(true);
    return (
        <LeaderBoardContainer>
            <Table striped bordered condensed hover className="leaderboardBackground">
                <TableHead setCardOrder={setCardOrder} cardOrder={cardOrder}/>
                <TableBody cards={props.cards} cardOrder={cardOrder} />
            </Table>
        </LeaderBoardContainer>
    );
}
