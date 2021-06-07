import React from "react";
import {withRouter} from "react-router";
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import FlatList from 'flatlist-react';

const ProgramareScreen = () => {

    //functie pentru renderuit serviciile
    const renderServiciu = (serviciu, idServiciu) => {
        return (
            <li key={idServiciu}>
                <b>{serviciu.name} </b> (<span>{serviciu.pret}</span>)
            </li>
        );
    }

    // setup the step content
    const step1Content = <h1>Step 1 Content</h1>;
    const step2Content = <h1>Step 2 Content</h1>;
    const step3Content = <h1>Step 3 Content</h1>;
    const step4Content = <h1>Step 4 Content</h1>;
    const step5Content = <h1>Step 5 Content</h1>;

    // setup step validators, will be called before proceeding to the next step
    function step2Validator() {
        // return a boolean
    }

    function step3Validator() {
        // return a boolean
    }

    function step4Validator() {
        // return a boolean
    }

    function step5Validator() {
        // return a boolean
    }

    function onFormSubmit() {
        // handle the submit logic here
        // This function will be executed at the last step
        // when the submit button (next button in the previous steps) is pressed
    }

    return (
        <div>
            <StepProgressBar
                startingStep={0}
                onSubmit={onFormSubmit}
                steps={[
                    {
                        label: 'Servicii',
                        // subtitle: '20%',
                        // name: 'step 1',
                        // content: step1Content
                    },
                    {
                        label: 'Stylist',
                        // subtitle: '40%',
                        // name: 'step 2',
                        // content: step2Content,
                        validator: step2Validator
                    },
                    {
                        label: 'Date',
                        // subtitle: '60%',
                        // name: 'step 3',
                        // content: step3Content,
                        validator: step3Validator
                    },
                    {
                        label: 'Your info',
                        // subtitle: '80%',
                        // name: 'step 3',
                        // content: step4Content,
                        validator: step4Validator
                    },
                    {
                        label: 'Confirm',
                        // subtitle: '100%',
                        // name: 'step 3',
                        // content: step5Content,
                        validator: step5Validator
                    }
                ]}
            />;

            <ul>
                <FlatList
                    list={servicii}
                    renderItem={renderServiciu}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                    sortBy={["firstName", {key: "lastName", descending: true}]}
                    groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
                />
            </ul>
        </div>
    )
}

export default withRouter(ProgramareScreen);
