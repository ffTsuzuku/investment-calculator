import { useEffect, useState } from 'react'

const Form = ({ on_update_form_value }) => {
    const [initial_investment, set_initial_investment] = useState('')
    const [annual_investment, set_annual_investment] = useState('')
    const [expected_return, set_expected_return] = useState('')
    const [duration, set_duration] = useState('')

    const update_initial_investment = (value) => {
        value = Number(value)
        set_initial_investment(value)
        on_update_form_value('initial_investment', value)
    }

    const update_annual_investment = (value) => {
        value = Number(value)
        set_annual_investment(value)
        on_update_form_value('annual_investment', value)
    }

    const update_expected_return = (value) => {
        value = Number(value)
        set_expected_return(value)
        on_update_form_value('expected_return', value)
    }

    const update_duration = (value) => {
        value = Number(value)
        set_duration(value)
        on_update_form_value('duration', value)
    }

    useEffect(() => {
        update_initial_investment(10000)
        update_expected_return(5.5)
        update_annual_investment(900)
        update_duration(12)
    }, [])

    return (
        <div id='user-input'>
            <div className='input-group'>
                <label htmlFor='initial_investment'>
                    Initial Investment
                    <input
                        type='number'
                        id='initial_investment'
                        value={initial_investment}
                        onChange={(event) =>
                            update_initial_investment(
                                event.target.value
                            )
                        }
                    />
                </label>
                <label htmlFor='annual_investment'>
                    Annual Investment
                    <input
                        type='number'
                        id='annual_investment'
                        value={annual_investment}
                        onChange={(event) =>
                            update_annual_investment(
                                event.target.value
                            )
                        }
                    />
                </label>
            </div>
            <div className='input-group'>
                <label htmlFor='expected_return'>
                    Expected Return
                    <input
                        type='decimal'
                        id='expected_return'
                        value={expected_return}
                        onChange={(event) =>
                            update_expected_return(event.target.value)
                        }
                    />
                </label>
                <label htmlFor='duration_input'>
                    Duration
                    <input
                        type='number'
                        id='duration_input'
                        value={duration}
                        onChange={(event) =>
                            update_duration(event.target.value)
                        }
                    />
                </label>
            </div>
        </div>
    )
}

export default Form
