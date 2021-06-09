import React, {useEffect, useState} from "react";
import {withRouter} from "react-router";
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import FlatList from 'flatlist-react';
import axios from 'axios'
import './ProgramareScreen.css'
import {useStore} from "react-redux";

const ProgramareScreen = () => {
    let [servicii, setServicii] = useState([]),
        [nameStep1, setNameStep1] = useState('Servicii'),
        [nameStep2, setNameStep2] = useState('Stylist'),
        [nameStep3, setNameStep3] = useState('Date'),
        [nameStep4, setNameStep4] = useState('Your info'),
        [nameStep5, setNameStep5] = useState('Confirm'),
        [nameServiciu, setNameServiciu] = useState(''),
        [selectedId, setSelectedId] = useState(-1),
        [isLoaded, setIsLoaded] = useState(false),
        [id, setId] = useState(-1);

    const store = useStore();
    const storeState = store.getState();
    const selectedServiciuId = storeState.selectedServiciu.selectedServiciuId;

    //fetch din backend pentru recuperare de servicii
    useEffect(() => {
        const getServiciiFromBackend = async () => {
            const result = await axios(
                'http://localhost:8080/servicii',
            );

            console.log(result)
            setServicii(result.data);
            setIsLoaded(true)
        }
        getServiciiFromBackend();

    }, []);

    let setIds = (serviciu) => {
        console.log(selectedServiciuId + 'direct din store')
        console.log(serviciu.id +' serviciu.id')
        setId(serviciu.id)
        setSelectedId(serviciu.id)
        store.dispatch({
            type: 'setServiciuId',
            payload: serviciu.id,
        })
        console.log(selectedId + ' selected id')
    }

    //functie pentru renderuit serviciile
    const renderServiciu = (serviciu) => {
        return (
            <div key={serviciu.id}
                 className={selectedServiciuId === serviciu.id ? 'container-selected' : 'container-for-each-serviciu'}
                 onClick={() => setIds(serviciu)}>
                <p style={{margin: 10, fontSize: 15}}>{serviciu.name}</p>
                <p style={{margin: 10, fontSize: 15}}>{serviciu.pret} {serviciu.moneda}</p>
            </div>
        );
    }

    // setup the step content
    const step1Content =
        <p>asda</p>
    ;
    const step2Content = <div><p>2</p></div>;
    const step3Content = <div><p>3</p></div>;
    const step4Content = <div><p>4</p></div>;
    const step5Content = <div><p>5</p></div>;

    // setup step validators, will be called before proceeding to the next step
    function step2Validator() {
        // return a boolean
        console.log(selectedId)
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

    return (
        <div className='container-entire-page'>
            {isLoaded ?
                <div className='container-progress-bar'>
                    <StepProgressBar
                        wrapperClass='content-style'
                        buttonWrapperClass='button-wrapper-class'
                        startingStep={0}
                        onSubmit={onFormSubmit}
                        steps={[
                            {
                                label: nameStep1,
                                // subtitle: '20%',
                                // name: 'step 1',
                                // content: step1Content,
                                validator: step2Validator
                            },
                            {
                                label: nameStep2,
                                // subtitle: '40%',
                                // name: 'step 2',
                                content: step2Content,
                                validator: step2Validator
                            },
                            {
                                label: nameStep3,
                                // subtitle: '60%',
                                // name: 'step 3',
                                content: step3Content,
                                validator: step3Validator
                            },
                            {
                                label: nameStep4,
                                // subtitle: '80%',
                                // name: 'step 3',
                                content: step4Content,
                                validator: step4Validator
                            },
                            {
                                label: nameStep5,
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
                :
                <p>loading...</p>
            }


        </div>
    )
}

export default withRouter(ProgramareScreen);
