import React from 'react';
import { Typography, Input, Button } from 'antd';

const { Title } = Typography;

class Register extends React.Component {
    render() {
        return (
            <div>
                <Title level={2}>
                    Register
                </Title>


                <div>
                    <Input 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                    />
                </div>

                <div>
                    <Input 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                    />
                </div>

                <div>
                    <Input 
                        type="text"
                        name="headline"
                        placeholder="Headline"
                    />
                </div>

                <div>
                    <Input 
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <Input 
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>

                <hr />

                <button>
                    Register
                </button>
            </div>
        )
    }
}

export default Register;