import PointCalculator from './features/point_calculator';

const PRCalculatorPage = () => {
    

    return (
        <div className='page_container pr_calculator'>
            <div className="pr_calculator_container">
                <div className='pr_calculator_title'>
                    <h1>Australian Immigration PR Points Calculator – 2023</h1>
                    <p>(491/189/190 Visa)</p>
                    <p>
                        PR calculator
                    </p>
                    <p>Minimum pass points is 65</p>
                </div>
                <PointCalculator />
            </div>
        </div>
    )
}

export default PRCalculatorPage