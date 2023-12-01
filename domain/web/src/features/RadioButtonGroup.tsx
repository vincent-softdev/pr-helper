import React from 'react';

type RadioButtonGroupProps = {
    name: string;
    options: { value: string; label: string }[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ name, options, onChange }) => {
    return (
        <React.Fragment>
            {options.map((option, index) => (
                <React.Fragment key={index}>
                    <label>
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            onChange={onChange}
                        />
                        {option.label}
                    </label>
                    <br />
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

export default RadioButtonGroup;
