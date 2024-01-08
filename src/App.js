import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';

import { Container, Content, Row } from './styles';

function App() {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const handleAddNumber = (number) => {
        setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`);
    };

    const handleClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('');
    };

    const handleSum = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('+');
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
            setOperation('');
        }
    };

    const handleSub = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('-');
        } else {
            const sub = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(sub));
            setOperation('');
        }
    };

    const handleMult = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('x');
        } else {
            const mult = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(mult));
            setOperation('');
        }
    };

    const handleDiv = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('x');
        } else {
            const div = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(div));
            setOperation('');
        }
    };

    const handleEquals = () => {
        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
            switch (operation) {
                case '+':
                    handleSum();
                    break;
                case '-':
                    handleSub();
                    break;
                case 'x':
                    handleMult();
                    break;
                case '/':
                    handleDiv();
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <Container>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <Button label='x' onClick={handleMult} />
                    <Button label='/' onClick={handleDiv} />
                    <Button label='c' onClick={handleClear} />
                    <Button label='.' />
                </Row>
                <Row>
                    <Button label='7' onClick={() => handleAddNumber('7')} />
                    <Button label='8' onClick={() => handleAddNumber('8')} />
                    <Button label='9' onClick={() => handleAddNumber('9')} />
                    <Button label='-' onClick={handleSub} />
                </Row>
                <Row>
                    <Button label='4' onClick={() => handleAddNumber('4')} />
                    <Button label='5' onClick={() => handleAddNumber('5')} />
                    <Button label='6' onClick={() => handleAddNumber('6')} />
                    <Button label='+' onClick={handleSum} />
                </Row>
                <Row>
                    <Button label='1' onClick={() => handleAddNumber('1')} />
                    <Button label='2' onClick={() => handleAddNumber('2')} />
                    <Button label='3' onClick={() => handleAddNumber('3')} />
                    <Button label='=' onClick={handleEquals} />
                </Row>
            </Content>
        </Container>
    );
}

export default App;
