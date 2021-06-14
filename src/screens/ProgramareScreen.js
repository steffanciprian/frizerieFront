import React, {Component} from "react";
import {Route, withRouter} from "react-router";
import {connect} from 'react-redux';
import 'react-step-progress/dist/index.css';
import FlatList from 'flatlist-react';
import './ProgramareScreen.css';
import {bindActionCreators} from "redux";
import fetchServicii from "../store/Dispatch/FetchServicii";
import setSelectedServiciuId from '../store/Dispatch/SetSelectedServiciuId';
import Switch from "react-bootstrap/Switch";
import HorizontalLabelPositionBelowStepper from '../components/HorizontalLabelPositionBelowStepper';

class ProgramareScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servicii: [],
            selectedServiciuId: -1,
            scaune:
                [
                    {name: 'Scaunul lui ciprian'},
                    {name: 'Scaunul elenei'},
                    {name: 'Scaunul lui Ionut'},
                    {name: 'Scaunul lui alexandru'}
                ]
            ,
        }
    }

    componentDidMount() {
        const {fetchServicii, servicii} = this.props;
        if (servicii.length === 0) {
            fetchServicii();
        }
    }

    shouldComponentRender() {
        const {loading} = this.props;
        return loading;
    }

    selectServiciuId = (idServiciuSelected) => {
        const {setSelectServiciuId} = this.props;
        setSelectServiciuId(idServiciuSelected)
    }

    render() {
        const {servicii} = this.props;
        const scauneFromState = this.state.scaune;
        const mappedScaune =
            scauneFromState.map(scaun => <p key={scaun.name}>{scaun.name}</p>)
        const {selectedServiciuId} = this.props;

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
                            {mappedScaune}
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
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchServicii: fetchServicii,
    setSelectedServiciuId: setSelectedServiciuId,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ProgramareScreen));
