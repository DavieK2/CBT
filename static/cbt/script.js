
window.onload = function () {
    document.onkeydown = function (e) {
        return (e.which || e.keyCode) != 116;
    };
};


window.addEventListener("moduleReadyEvent", event => {

    document.addEventListener('contextmenu', event => {

        event.preventDefault();
    });

    window.cpAPIInterface.setVariableValue("cpCmndMute", 1);


    window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", function (e) {

        console.log( e.cpData.slideNumber)

        let questionNo = window.cpAPIInterface.getVariableValue("questionButton");

        for (i = 1; i <= 10; i++) {

            let isAnswered = window.cpAPIInterface.getVariableValue("q" + i + "_answered");
            let isSkipped = window.cpAPIInterface.getVariableValue("q" + i + "_skipped");
            let questionButton = "q" + i + "Button";

            if (i == questionNo) {
                cp.changeState(questionButton, "Active");
            } else if (isAnswered == 1) {
                cp.changeState(questionButton, "Completed");
            } else if (isSkipped == 1) {
                cp.changeState(questionButton, "Maxout");
            } else {
                cp.changeState(questionButton, "Normal");
            }
        } 

    });

    window.cpAPIEventEmitter.addEventListener("CPAPI_INTERACTIVEITEMSUBMIT", function (e) {

        if (e.cpData.questioneventdata) {

            var attempts = e.cpData.questioneventdata.questionAttempts;
            var maxAttempts = e.cpData.questioneventdata.questionMaxAttempts;

            window.cpAPIInterface.setVariableValue("remainingAttempts", maxAttempts - attempts);

        }

    });

});

setTimeout(() => {
    document.getElementById('initialLoading').click();
}, 200)
