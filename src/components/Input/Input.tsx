import React, { SyntheticEvent } from 'react';
import './Input.scss';

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
    PHONE = 'phone'
}

interface IProps {
    type: InputTypes;
    value: string;
    onChange: ( value: string) => void;

}

interface IState {
    value: string;

}

export class Input extends React.PureComponent<IProps, IState> {
    onChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        this.props.onChange(value);
    }
    public render() {
        return (
        <div className={'input'}>
            <input
                className={'input__native-input'}
                placeholder="Search free high-resolution photos"
                value={this.props.value}
                onChange={this.onChange}
                type={this.props.type}
                >

            </input>
        </div>
        )
    }
}