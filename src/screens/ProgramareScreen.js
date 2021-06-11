import React, {Component} from "react";
import {withRouter} from "react-router";
import {connect} from 'react-redux';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import FlatList from 'flatlist-react';
import './ProgramareScreen.css'
import {bindActionCreators} from "redux";
import fetchServicii from "../store/fetch/FetchServicii";

class ProgramareScreen extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    state = {
        servicii: [],
        nameStep1: 'Servicii',
        nameStep2: 'Stylist',
        nameStep3: 'Date',
        nameStep4: 'Your info',
        nameStep5: 'Confirm',
        nameServiciu: '',
        selectedId: -1,
        id: -1,
        isLoaded: false,
    }


    //fetch din backend pentru recuperare de servicii
    componentDidMount() {
        const {fetchServicii} = this.props;
        fetchServicii();
    }

    shouldComponentRender() {
        const {loading} = this.props;
        return loading;
    }

    render() {
        const {servicii} = this.props;


        let setIds = (serviciu) => {
            this.setState({
                id: serviciu.id,
                selectedServiciuId: serviciu.id,
            })
        }

        //functie pentru renderuit serviciile
        const renderServiciu = (serviciu) => {
            return (
                <div key={serviciu.id}
                     className={this.state.selectedId === serviciu.id ? 'container-selected' : 'container-for-each-serviciu'}
                     onClick={() => setIds(serviciu)}>
                    <p style={{margin: 10, fontSize: 15}}>{serviciu.name}</p>
                    <p style={{margin: 10, fontSize: 15}}>{serviciu.pret} {serviciu.moneda}</p>
                </div>
            );
        }

        // setup the step content
        // const step1Content =
        //     <p>asda</p>
        // ;
        const step2Content = <div><p>2</p></div>;
        const step3Content = <div><p>3</p></div>;
        const step4Content = <div><p>4</p></div>;
        const step5Content = <div><p>5</p></div>;

        // setup step validators, will be called before proceeding to the next step
        function step2Validator() {
            // return a boolean
            return true;
        }

        function step3Validator() {
            // return a boolean
            return true;
        }

        function step4Validator() {
            // return a boolean
            return true;

        }

        function step5Validator() {
            // return a boolean
            return true;

        }

        function onFormSubmit() {
            // handle the submit logic here
            // This function will be executed at the last step
            // when the submit button (next button in the previous steps) is pressed
            return true;
        }

        if (this.shouldComponentRender())
            return <p>loading...</p>

        return (<div className='container-entire-page'>
            <div className='container-progress-bar'>
                <StepProgressBar
                    wrapperClass='content-style'
                    buttonWrapperClass='button-wrapper-class'
                    startingStep={0}
                    onSubmit={onFormSubmit}
                    steps={[
                        {
                            label: this.state.nameStep1,
                            // subtitle: '20%',
                            // name: 'step 1',
                            // content: step1Content,
                            validator: step2Validator
                        },
                        {
                            label: this.state.nameStep2,
                            // subtitle: '40%',
                            // name: 'step 2',
                            content: step2Content,
                            validator: step2Validator
                        },
                        {
                            label: this.state.nameStep3,
                            // subtitle: '60%',
                            // name: 'step 3',
                            content: step3Content,
                            validator: step3Validator
                        },
                        {
                            label: this.state.nameStep4,
                            // subtitle: '80%',
                            // name: 'step 3',
                            content: step4Content,
                            validator: step4Validator
                        },
                        {
                            label: this.state.nameStep5,
                            // subtitle: '100%',
                            // name: 'step 3',
                            content: step5Content,
                            validator: step5Validator
                        }
                    ]}
                />
                <div className='flat-list-container'>
                    <FlatList
                        list={servicii}
                        renderItem={renderServiciu}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                        sortBy={["name", {key: "name", descending: true}]}
                        // groupBy={serviciu => serviciu > 18 ? 'Over 18' : 'Under 18'}
                    />
                </div>
            </div>
            }


        </div>)
    }

}

const mapStateToProps = state => ({
    error: state.fetchServiciiReducer.error,
    servicii: state.fetchServiciiReducer.servicii,
    loading: state.fetchServiciiReducer.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchServicii: fetchServicii
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ProgramareScreen));
// withRouter(ProgramareScreen);
