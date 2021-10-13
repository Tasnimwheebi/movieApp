import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../header/header';
import CardList1 from '../cardList1/cardList1';
import CardList2 from '../cardList2/cardList2';
import CardList3 from '../cardList3/cardList3';

function Main (){
    return(
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Header}/>
                <Route exact path="/upcomming" component={CardList1}/>
                <Route exact path="/popular" component={CardList2}/>
                <Route exact path="/toprated" component={CardList3}/>

            </Switch>
        </Router>
        </>
    )
}

export default Main ;