'use client';
import { useState } from 'react';
import './page.css';

export default function Home() {
    const [result, setResult] = useState('');
    const [expression, setExpression] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(expression).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
            setExpression('');
        } else {
            setExpression((prevExpression) => prevExpression + value);
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];

    return (
        <main>
            <h1>Calculator</h1>
            <div className="calculator-container">
                <input
                    type="text"
                    className="calculator-input"
                    value={expression}
                    readOnly
                />
                <input
                    type="text"
                    className="calculator-result"
                    value={result}
                    readOnly
                />
                <div className="grid">
                    {buttons.map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleButtonClick(btn)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
}
