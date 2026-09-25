# ServiceNow Incident - Client Script & UI Policy

## Project Title
Implement Client Script & UI Policy (Incident)

## Objective
This project demonstrates how to use a Client Script and UI Policy on the ServiceNow Incident form to improve form behavior and validation.

## 1. Client Script
**Name:** Set Priority Based on Urgency and Impact  
**Table:** Incident  
**Type:** onChange  
**UI Type:** All  
**Field:** Urgency

### Script
```javascript
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
```

## 2. UI Policy
**Name:** Make Assignment Group Mandatory for Active Incidents  
**Table:** Incident  
**Condition:** Active is true  
**Reverse if false:** Yes  
**UI Type:** All

### UI Policy Action
- **Field:** Assignment group
- **Mandatory:** True
- **Visible:** True
- **Disabled:** False

## Expected Result
1. Open an Incident record.
2. When the Urgency value changes, the Client Script checks Urgency and Impact.
3. The Priority field is automatically updated.
4. When the Incident is active, Assignment group becomes mandatory through the UI Policy.

## ServiceNow Setup
### Client Script
Navigate to:
`All > System Definition > Client Scripts`

Create a new Client Script:
- Table: Incident
- Type: onChange
- Field name: Urgency
- Active: True
- UI Type: All
- Paste the JavaScript from `client_script.js`.

### UI Policy
Navigate to:
`All > System UI > UI Policies`

Create a new UI Policy:
- Table: Incident
- Condition: Active is True
- Reverse if false: True
- Active: True
- UI Type: All

Create the UI Policy Action:
- Field: Assignment group
- Mandatory: True
- Visible: True
- Disabled: False

## Files
- `client_script.js` - Client Script code
- `ui_policy.md` - UI Policy configuration
- `README.md` - Project documentation
