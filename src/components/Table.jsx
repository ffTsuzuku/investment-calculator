import {
    calculateInvestmentResults,
    formatter,
} from '../util/investment'

const Table = ({ form_values }) => {
    console.log(form_values)
    const {
        initial_investment,
        annual_investment,
        expected_return,
        duration,
    } = form_values

    const results = calculateInvestmentResults({
        initialInvestment: initial_investment,
        annualInvestment: annual_investment,
        expectedReturn: expected_return,
        duration,
    })

    console.log(results)

    const body_jsx = results.map((data_point) => {
        console.log(data_point)
        const {
            year,
            interest,
            valueEndOfYear,
            total_invest,
            total_interest,
        } = data_point

        return (
            <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(total_interest)}</td>
                <td>{formatter.format(total_invest)}</td>
            </tr>
        )
    })

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>{body_jsx}</tbody>
        </table>
    )
}

export default Table
