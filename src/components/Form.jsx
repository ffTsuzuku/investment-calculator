import { useState } from 'react'

const Form = ({ on_update_form_value }) => {
    const [initial_investment, set_initial_investment] = useState()
    const [annual_investment, set_annual_investment] = useState()
    const [expected_return, set_expected_return] = useState()
    const [duration, set_duration] = useState()

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
                            set_initial_investment(event.target.value)
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
                            set_annual_investment(event.target.value)
                        }
                    />
                </label>
            </div>
            <div className='input-group'>
                <label htmlFor='expected_return'>
                    Expected Return
                    <input
                        type='number'
                        id='expected_return'
                        value={expected_return}
                        onChange={(event) =>
                            set_expected_return(event.target.value)
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
                            set_duration(event.target.value)
                        }
                    />
                </label>
            </div>
        </div>
    )
}

export default Form
