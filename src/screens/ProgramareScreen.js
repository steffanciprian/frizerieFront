import React, {Component} from "react";
import {withRouter} from "react-router";
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import FlatList from 'flatlist-react';
import './ProgramareScreen.css'

class ProgramareScreen extends Component {
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
        fetch('http://localhost:8080/servicii',
        )
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        servicii: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
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

        return (<div className='container-entire-page'>
            {this.state.isLoaded ?
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
                            list={this.state.servicii}
                            renderItem={renderServiciu}
                            renderWhenEmpty={() => <div>List is empty!</div>}
                            sortBy={["name", {key: "name", descending: true}]}
                            // groupBy={serviciu => serviciu > 18 ? 'Over 18' : 'Under 18'}
                        />
                    </div>
                </div>
                :
                <p>loading...</p>
            }


        </div>)
    }

}

export default withRouter(ProgramareScreen);
