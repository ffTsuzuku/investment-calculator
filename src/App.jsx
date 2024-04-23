import { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'

const INITIAL_FORM_DATA = {
    initial_investment: null,
    annual_investment: null,
    expected_return: null,
    duration: null,
}

function App() {
    const [form_values, set_form_values] = useState(INITIAL_FORM_DATA)

    const update_form_value = (type, value) => {
        set_form_values((prev_values) => {
            return {
                ...prev_values,
                [type]: value,
            }
        })
    }

    return (
        <>
            <header id='header'>
                <img src='/investment-calculator-logo.png' />
                <h1>React Investment Calculator</h1>
            </header>
            <Form on_update_form_value={update_form_value} />
            <Table form_values={form_values} />
        </>
    )
}

export default App
