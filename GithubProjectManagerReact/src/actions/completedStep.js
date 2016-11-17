function completeStepAction(complete) {
    return {
        type: 'COMPLETED_STEP',
        payload: complete
    }
}


export default completeStepAction