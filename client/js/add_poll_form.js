import { createPoll } from '../modules/api_requests.js'

export const addPollForm = ({ user_email, user_token }) => {
    let added_button_listener = false  //boolean to avoid double click listener and double poll creation

    const getChoices = () => {
        const choices_elements = document.getElementsByClassName('choices_inputs')
        let choices_values = []
        for(let i = 0; i < choices_elements.length; i++){
            choices_values[i] = choices_elements[i].value
        }

        return JSON.stringify(choices_values)
    }

    const getPollValues = () => {
        const title = document.getElementById('poll_title').value
        const description = document.getElementById('poll_description').value
        const choices = getChoices()
        const authenticate = document.getElementById('poll_authenticate').value || undefined

        return { user_email, user_token, title, description, choices, authenticate }
    }

    const addChoiceInput = () => {
        const choices_container = $('#poll_choices')

        if(choices_container) {
            choices_container.append('<input class="choices_inputs"></input>')
        }
    }
    
    window.onload = initPage;
    function initPage(){
        const submit_poll_button = document.getElementById('poll_submit')
        const add_choice_button = document.getElementById('add_choice')

        if(added_button_listener == false) {
            added_button_listener = true
            submit_poll_button && submit_poll_button.addEventListener('click', () => {
                const poll_values = getPollValues()
                createPoll(poll_values)
            })

            add_choice_button && add_choice_button.addEventListener('click', () => {
                addChoiceInput()
            })
        }
    }

    let poll_form = '<div id="poll_form">' +
                        '<label for="title">Title</label>' +
                        '<input id="poll_title"></input>' +
                        '<label for="description">Description</label>' +
                        '<input id="poll_description"></input>' +
                        '<label for="choices">Choices</label>' +
                        '<div id="poll_choices">' +
                            '<input class="choices_inputs"></input>' +
                            '<input class="choices_inputs"></input>' +
                        '</div>' +
                        '<button id="add_choice"> + </button>' +
                        '<label for="authenticate">Authenticate vote?</label>' +
                        '<input id="poll_authenticate"></input>' +
                        '<button id="poll_submit"> CREATE POLL </button>' +
                    '</div>'

    return poll_form
}