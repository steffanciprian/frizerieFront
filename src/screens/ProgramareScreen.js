import React, {useEffect, useState} from "react";
import {withRouter} from "react-router";
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import FlatList from 'flatlist-react';
import axios from 'axios'
import './ProgramareScreen.css'

const ProgramareScreen = () => {
    const [servicii, setServicii] = useState([]),
        [nameStep1, setNameStep1] = useState('Servicii'),
        [nameStep2, setNameStep2] = useState('Stylist'),
        [nameStep3, setNameStep3] = useState('Date'),
        [nameStep4, setNameStep4] = useState('Your info'),
        [nameStep5, setNameStep5] = useState('Confirm'),
        [nameServiciu, setNameServiciu] = useState(''),
        [idForServiciu, setIdForServiciu] = useState(-1),
        [id, setId] = useState(-1);

    //fetch din backend pentru recuperare de servicii
    useEffect(() => {
        const getServiciiFromBackend = async () => {
            const result = await axios(
                'http://localhost:8080/servicii',
            );

            console.log(result)
            setServicii(result.data);
        }
        getServiciiFromBackend();

    }, []);

    const setIds = (serviciu) => {

        setId(serviciu.id)
        setIdForServiciu(serviciu.id)
    }


    //functie pentru renderuit serviciile
    const renderServiciu = serviciu => {
        return (
            <div className='container-for-each-serviciu'
                 style={{color: idForServiciu === id ? 'green' : 'blue'}} onClick={() => setIds(serviciu)}>
                <p style={{margin: 10, fontSize: 15}}>{serviciu.name}</p>
                <p style={{margin: 10, fontSize: 15}}>{serviciu.pret}</p>
            </div>

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
        console.log(nameServiciu)
        setNameStep1(nameServiciu)
        console.log(nameServiciu)

        return true;
    }

    function step3Validator() {
        // return a boolean
        setNameStep1(nameServiciu)
        return true;
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
        <div className='container-entire-page'>
            <div className='container-progress-bar'>
                <StepProgressBar
                    startingStep={0}
                    onSubmit={onFormSubmit}
                    steps={[
                        {
                            label: nameStep1,
                            // subtitle: '20%',
                            // name: 'step 1',
                            // content: step1Content
                            validator: step2Validator
                        },
                        {
                            label: nameStep2,
                            // subtitle: '40%',
                            // name: 'step 2',
                            // content: step2Content,
                            validator: step2Validator
                        },
                        {
                            label: nameStep3,
                            // subtitle: '60%',
                            // name: 'step 3',
                            // content: step3Content,
                            validator: step3Validator
                        },
                        {
                            label: nameStep4,
                            // subtitle: '80%',
                            // name: 'step 3',
                            // content: step4Content,
                            validator: step4Validator
                        },
                        {
                            label: nameStep5,
                            // subtitle: '100%',
                            // name: 'step 3',
                            // content: step5Content,
                            validator: step5Validator
                        }
                    ]}
                />
            </div>


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
    )
}

export default withRouter(ProgramareScreen);
