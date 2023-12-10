import { useState } from "react";
import RadioButtonGroup from "../../../features/radio_button_group";

const PointCalculator = () => {
    const [selections, setSelections] = useState({ visa: 0, age: 0, english: 0 , oversea_work: 0, aus_work: 0, education: 0});
    const [totalPoint, setTotalPoint] = useState(0);

    const calculatePoints = () => {
        setTotalPoint(selections.visa + selections.age + 
            selections.english + selections.oversea_work + 
            selections.aus_work + selections.education)
    }
    
    return (
        <>
            <section className="pr_calculator_section_subclass">
                <h3>Visa Subclass</h3>
                <p>Which of the following subclasses are you applying for?</p>
                <RadioButtonGroup
                    name="visaOption"
                    options={[
                        { value: "0", label: "Skilled Independent visa Subclass 189" },
                        { value: "5", label: "Skilled Nominated visa Subclass 190" },
                        { value: "15", label: "Skilled Work Regional (Provisional) visa Subclass 491" }
                    ]}
                    onChange={(e) => setSelections(prevSelections => ({...prevSelections, visa: Number(e.target.value)}))}
                />
                <p>Selected Visa Type: {selections.visa}</p>
            </section>
            <section className="pr_calculator_section_age">
                <h3>Age</h3>
                <p>How old are you?</p>
                <RadioButtonGroup
                    name="ageOption"
                    options={[
                        { value: "25", label: "18-24" },
                        { value: "30", label: "25-32" },
                        { value: "25", label: "33-39" },
                        { value: "15", label: "40-44" },
                    ]}
                    onChange={(e) => setSelections(prevSelections => ({...prevSelections, age: Number(e.target.value)}))}
                />
                <p>Selected Age Range: {selections.age}</p>
            </section>
            <section className="pr_calculator_section_english">
                <h3>English</h3>
                <p>What are your English Language qualifications at the time of invitation to apply for the visa?</p>
                <RadioButtonGroup
                    name="englishOption"
                    options={[
                        { value: "0", label: "Competent English" },
                        { value: "10", label: "Proficient English" },
                        { value: "20", label: "Superior English" },
                    ]}
                    onChange={(e) => setSelections(prevSelections => ({...prevSelections, english: Number(e.target.value)}))}
                />
                <p>Selected English: {selections.english}</p>
            </section>
            <section className="pr_calculator_section_overseawork">
                <h3>Overseas Work Experience</h3>
                <p>In the last 10 years, how long have you worked in your nominated skilled occupation or closely related occupation outside Australia?</p>
                <RadioButtonGroup
                    name="overseaWorkingOption"
                    options={[
                        { value: "15", label: "8 years or more" },
                        { value: "10", label: "5 to 7 years" },
                        { value: "5", label: "3 to 4 years" },
                        { value: "0", label: "Less than 3 years" },
                    ]}
                    onChange={(e) => setSelections(prevSelections => ({...prevSelections, oversea_work: Number(e.target.value)}))}
                />
                <p>Selected Work: {selections.oversea_work}</p>
            </section>
            {/* Australian work exp */}
            <section className="pr_calculator_section_auswork">
                <h3>Australian Work Experience</h3>
                <p>In the last 10 years, how long have you worked in your nominated skilled occupation or closely related occupation in Australia?</p>
                <RadioButtonGroup
                    name="ausWorkingOption"
                    options={[
                        { value: "20", label: "8 years or more" },
                        { value: "15", label: "5 to 7 years" },
                        { value: "10", label: "3 to 4 years" },
                        { value: "5", label: "1 to 2 years" },
                        { value: "0", label: "Less than 1 year" },
                    ]}
                    onChange={(e) => setSelections(prevSelections => ({...prevSelections, aus_work: Number(e.target.value)}))}
                />
                <p>Selected Work: {selections.aus_work}</p>
            </section>
            {/* Education */}
            <section className="pr_calculator_section_education">
                <h3>Educational Qualifications</h3>
                <p>What is your highest qualification?</p>
                <RadioButtonGroup
                    name="educationOption"
                    options={[
                        { value: "20", label: "A Doctorate degree (PhD) from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard" },
                        { value: "15", label: "A Bachelor degree from an Australian educational institution or a Bachelor qualification, from another educational institution that is of a recognised standard" },
                        { value: "10", label: "A diploma or trade qualification completed in Australia; or other award or qualification recognised by the skills assessing authority" },
                        { value: "0", label: "No Recognised Qualifications" },
                    ]}
                    onChange={(e) => setSelections(prevSelections => ({...prevSelections, education: Number(e.target.value)}))}
                />
                <p>Selected Work: {selections.education}</p>
            </section>
            <section>
                <h3>Overral</h3>
                <button className='hover-text' onClick={calculatePoints}>
                    Start Calculation
                    <span className="tooltip-text" id="top">Calculate your PR score with current condition</span>
                </button>
                <button className='hover-text' onClick={calculatePoints}>
                    Save your point
                    <span className="tooltip-text" id="top">Save your point to DB for later work</span>
                </button>
                <p>Total point: {totalPoint}</p>
            </section>
        </>
    )
}

export default PointCalculator