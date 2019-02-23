import React, { SyntheticEvent } from 'react';
import  { Input, InputTypes  } from '../Input/Input';
import './SearchForm.scss';

interface IProps {
    onSubmit: ( value: string) => void;
}


interface IState {
    value: string;
}

export class SearchForm extends React.Component<IProps, IState> {
    public state = {
        value: ''
    };

    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    };

    private changeHandler = (value: string) => {
        // this.setState({value})
        this.setState(state => ({...state, value}));
    };
    public render() {
        const {value} = this.state;
        return (
            <form className='App__form' onSubmit={this.onSubmit}>
                <Input 
                    type={InputTypes.TEXT}
                    value={value}
                    onChange={this.changeHandler} />
            </form>
        )
    }
}