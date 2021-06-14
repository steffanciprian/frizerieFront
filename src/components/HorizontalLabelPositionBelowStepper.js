import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";
import setCurrentStepDispatch from "../store/Dispatch/CurrentStepDispatch";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));


function getSteps() {
    return ['Servicii', 'Stylist', 'Scaun', "Data", 'Confirm'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Stylist';
        case 1:
            return 'Scaun';
        case 2:
            return 'Data';
        case 3:
            return 'Informatii';
        case 4:
            return 'Confirm'
        default:
            return 'Unknown step';
    }
}

function HorizontalLinearStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const history = useHistory();
    let {currentStep} = props;

    history.listen((loc, action) => {
        if (action === 'POP') {
            currentStep--;
            props.currentStepDispatch(currentStep)
            setActiveStep(currentStep);
        }
    })
    const handleNext = () => {
        let {currentStep} = props;
        currentStep++;
        props.currentStepDispatch(currentStep)
        setActiveStep(currentStep);

        if (currentStep === 1)
            history.push('/programare/stylist')
        if (currentStep === 2)
            history.push('/programare/scaun')
        if (currentStep === 3)
            history.push('/programare/data-programare')
        if (currentStep === 4)
            history.push('/programare/confirm')
    };

    const handleBack = () => {
        history.goBack();
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    currentStep: state.currentStepReducer.currentStep,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    currentStepDispatch: setCurrentStepDispatch
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HorizontalLinearStepper));

