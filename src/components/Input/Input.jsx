import { InputContainer } from './Styles';

export function Input({ value }) {
    return (
        <InputContainer>
            <input disabled value={value} />
        </InputContainer>
    );
}
