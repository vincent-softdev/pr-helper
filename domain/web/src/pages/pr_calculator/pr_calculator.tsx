import React, { useState } from 'react';
import RadioButtonGroup from '../../features/RadioButtonGroup';

const PRCalculatorPage = () => {
    const [selectedVisa, setSelectedVisa] = useState('');

    const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedVisa(event.target.value);
    };

    return (
        <>
            <div className="pr_calculator_container">
                <h1>Australian Immigration PR Points Calculator – 2023</h1>
                <p>(491/189/190 Visa)</p>
                <p>
                    PR calculator
                </p>
                <p>Minimum pass points is 65</p>
            </div>
            <section className="pr_calculator_section_subclass">
                <h3>Visa Subclass</h3>
                <p>Which of the following subclasses are you applying for?</p>
                <RadioButtonGroup
                    name="visaOption"
                    options={[
                        { value: "0", label: "189" },
                        { value: "5", label: "190" },
                        { value: "15", label: "491" }
                    ]}
                    onChange={handleSelectionChange}
                />
                <p>Selected Visa Type: {selectedVisa}</p>
            </section>
            <section className="pr_calculator_section_age">
                <h3>Age</h3>
                <p>How old are you?</p>
                <RadioButtonGroup
                    name="ageOption"
                    options={[
                        { value: "0", label: "18-24" },
                        { value: "5", label: "25-32" },
                        // Add more age ranges as needed
                    ]}
                    onChange={handleSelectionChange}
                />
                <p>Selected Age Range: {selectedVisa}</p>
            </section>
        </>
    )
}

export default PRCalculatorPage