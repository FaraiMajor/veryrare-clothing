import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, inputOptions }) => {
    return (
        <Group>
            <Input {...inputOptions} />
            {label && (
                <FormInputLabel >{label}</FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;