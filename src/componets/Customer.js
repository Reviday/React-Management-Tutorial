import React from 'react';

class Customer extends React.Component {
    render() { // 실제로 그려지는 내용
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}


export default Customer;