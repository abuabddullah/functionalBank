// function getBtn
function getBtn(ButtonId) {
    let Button = document.getElementById(ButtonId);
    return Button;
}


// function getInputValue
function getInputValue(InputTagId) {
    let InputTag = document.getElementById(InputTagId);
    let InputValueAsText = InputTag.value;
    let InputValueAsNumber = Number(InputValueAsText);
    InputTag.value = "";
    return InputValueAsNumber;
}

// function udateValue
function udateValue(spanTagId, valueImported4SpanTag) {
    let spanTagValue = document.getElementById(spanTagId);
    let spanValueAsText = spanTagValue.innerText;
    let spanValueAsNumber = Number(spanValueAsText);

    let initSpanValue = spanValueAsNumber;
    let finalSpanValue = initSpanValue + valueImported4SpanTag;
    spanTagValue.innerText = finalSpanValue;
    return finalSpanValue;
}

// function getAllFields
function getAllFields(btnTagId, inputTagid, spanTagId, span4BalanceTagId, isWithdraw) {
    let Button = getBtn(btnTagId);
    Button.addEventListener('click', function () {
        let inputFieldAmount = getInputValue(inputTagid);

        if (inputTagid != 'balance-total') {
            if (inputFieldAmount > 0) {
                if (isWithdraw == true) {
                    let AmmountInSpanField = udateValue(spanTagId, inputFieldAmount);
                    udateValue(span4BalanceTagId, -inputFieldAmount);
                } else {
                    let AmmountInSpanField = udateValue(spanTagId, inputFieldAmount);
                    udateValue(span4BalanceTagId, inputFieldAmount);
                }
            }
        }

    })
}



getAllFields('deposit-button', 'deposit-input', 'deposit-total', 'balance-total', false)
getAllFields('withdraw-button', 'withdraw-input', 'withdraw-total', 'balance-total', true)