# UI Policy - Incident

## Name
Make Assignment Group Mandatory for Active Incidents

## Table
Incident

## Condition
Active is True

## Settings
- Active: True
- Reverse if false: True
- UI Type: All

## UI Policy Action

| Field | Mandatory | Visible | Disabled |
|---|---|---|---|
| Assignment group | True | True | False |

## Expected Behavior
When an Incident is active, the Assignment group field becomes mandatory.

When the condition becomes false, the Reverse if false option restores the normal field behavior.
