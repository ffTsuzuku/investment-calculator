const Form = () => {
    return (
        <div id='user-input'>
            <div className='input-group'>
                <label htmlFor=''>Initial Investment</label>
                <input type='number' />
            </div>
            <div className='input-group'>
                <label htmlFor=''>Annual Investment</label>
                <input type='number' />
            </div>
            <div className='input-group'>
                <label htmlFor=''>Expected Return</label>
                <input type='number' />
            </div>
            <div className='input-group'>
                <label htmlFor=''>Duration</label>
                <input type='number' />
            </div>
        </div>
    )
}

export default Form
