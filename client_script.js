// ServiceNow Client Script
// Name: Set Priority Based on Urgency and Impact
// Table: Incident
// Type: onChange
// Field: Urgency

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var urgency = g_form.getValue('urgency');
    var impact = g_form.getValue('impact');

    if (urgency == '1' && impact == '1') {
        g_form.setValue('priority', '1');
    } else if ((urgency == '1' && impact == '2') ||
               (urgency == '2' && impact == '1')) {
        g_form.setValue('priority', '2');
    } else if (urgency == '3' && impact == '3') {
        g_form.setValue('priority', '5');
    } else {
        g_form.setValue('priority', '3');
    }
}
