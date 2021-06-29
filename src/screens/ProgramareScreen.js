import React, {Component, useState} from "react";
import {Route, withRouter} from "react-router";
import {connect} from 'react-redux';
import 'react-step-progress/dist/index.css';
import FlatList from 'flatlist-react';
import './ProgramareScreen.css';
import {bindActionCreators} from "redux";
import fetchServicii from "../store/Dispatch/FetchServicii";
import fetchFrizeriDispatch from '../store/Dispatch/FetchFrizeriDispatch'
import setSelectedServiciuId from '../store/Dispatch/SetSelectedServiciuId';
import setSelectedFrizerId from "../store/Dispatch/SetSelectedFrizerId";
import Switch from "react-bootstrap/Switch";
import HorizontalLabelPositionBelowStepper from '../components/HorizontalLabelPositionBelowStepper';
import CalendarFrizer from "../components/Calendar";
import setCurrentDayCalendarDispatch from '../store/Dispatch/CurrentDayCalendarDispatch'

class ProgramareScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servicii: [],
            selectedServiciuId: -1,
            frizeri: [],
            selectedFrizerId: -1,
        }
    }

    componentDidMount() {
        const {fetchServicii, servicii, fetchFrizeriDispatch} = this.props;
        console.log(this.props)
        fetchFrizeriDispatch();
        if (servicii.length === 0) {
            fetchServicii();
        }
    }

    shouldComponentRender() {
        const {loading} = this.props;
        return loading;
    }

    render() {
        const {
            servicii,
            frizeri,
            selectedServiciuId,
            selectedFrizerId,
            currentDay
        } = this.props;

        //functie pentru renderuit serviciile
        const renderServiciu = (serviciu) => {
            return (
                <div key={serviciu.id}
                     className={selectedServiciuId === serviciu.id ? 'container-selected' : 'container-for-each-serviciu'}
                     onClick={() =>
                         this.props.setSelectedServiciuId(serviciu.id)
                     }>

                    <p style={{margin: 10, fontSize: 15}}>{serviciu.name}</p>
                    <p style={{margin: 10, fontSize: 15}}>{serviciu.pret} {serviciu.moneda}</p>
                </div>
            );
        }

        const renderFrizer = frizer => {
            console.log(frizer.oraRezervata)
            return (
                <div key={frizer.id}
                     className={selectedFrizerId === frizer.id ? 'container-selected' : 'container-for-each-serviciu'}
                     onClick={() =>
                         this.props.setSelectedFrizerId(frizer.id)}>
                    <p style={{margin: 10, fontSize: 15}}>{frizer.name}</p>
                    <p style={{margin: 10, fontSize: 15}}>Scaun nr. {frizer.scaun}</p>
                </div>
            );
        }

        const renderCalendar = calendarFrizer => {
            return (
                <div key={calendarFrizer.id}
                     className={selectedFrizerId === calendarFrizer.id ? 'oraCalendarFrizerSelected' : 'oraCalendarFrizer'}
                     onClick={() =>
                         this.props.setSelectedFrizerId(calendarFrizer.id)}>
                    <p style={{margin: 10, fontSize: 15}}>{calendarFrizer.name}</p>
                </div>
            );
        }

        if (this.shouldComponentRender())
            return <p>loading...</p>

        return (
            <div className='container-entire-page'>
                <HorizontalLabelPositionBelowStepper/>

                <div className='container-progress-bar'>

                    <Switch>
                        <Route exact path="/programare">
                            <div className='flat-list-container'>
                                <FlatList
                                    list={servicii}
                                    renderItem={renderServiciu}
                                    renderWhenEmpty={() => <div>List is empty!</div>}
                                    sortBy={["name", {key: "name", descending: true}]}
                                    // groupBy={serviciu => serviciu > 18 ? 'Over 18' : 'Under 18'}
                                />
                            </div>
                        </Route>
                        <Route exact path="/programare/stylist">
                            <div className='flat-list-container'>
                                <FlatList
                                    list={frizeri}
                                    renderItem={renderFrizer}
                                    renderWhenEmpty={() => <div>List is empty!</div>}
                                    sortBy={["name", {key: "name", descending: true}]}
                                    // groupBy={serviciu => serviciu > 18 ? 'Over 18' : 'Under 18'}
                                />
                            </div>
                        </Route>
                        <Route exact path="/programare/data-programare">
                            <div className='calendarContainer'>
                                <CalendarFrizer currentDay={currentDay}/>
                                <div className="programContainer">
                                    <FlatList
                                        list={frizeri}
                                        renderItem={renderCalendar}
                                        renderWhenEmpty={() => <div>List is empty!</div>}
                                        sortBy={["name", {key: "name", descending: true}]}
                                        // groupBy={serviciu => serviciu > 18 ? 'Over 18' : 'Under 18'}
                                    />
                                </div>

                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>)
    }
}

const mapStateToProps = state => ({
    error: state.fetchServiciiReducer.error,
    servicii: state.fetchServiciiReducer.servicii,
    loading: state.fetchServiciiReducer.loading,
    selectedServiciuId: state.setSelectedServiciuReducer.selectedServiciuId,
    frizeri: state.fetchFrizeriReducer.frizeri,
    selectedFrizerId: state.setSelectedFrizerIdReducer.selectedFrizerId,
    currentDay: state.currentDayCalendarReducer.currentDay,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchServicii: fetchServicii,
    setSelectedServiciuId: setSelectedServiciuId,
    setSelectedFrizerId: setSelectedFrizerId,
    fetchFrizeriDispatch: fetchFrizeriDispatch,
    setCurrentDayCalendarDispatch: setCurrentDayCalendarDispatch

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ProgramareScreen));
