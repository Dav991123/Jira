import { Modal, Form, Input, Select } from 'antd';
import { issueTypes } from '../../../../core/constants/issue';
import Editor from '../Editor';

const CreateIssueModal = ({ visible, setVisible }) => {
    const handleCloseModal = () => {
        setVisible(false);
    }

    return (
        <Modal
            title="Create issue"
            okText="Create issue"
            centered
            open={visible}
            width={800}
            onCancel={handleCloseModal}
        >
            <Form layout="vertical">
                <Form.Item
                    name="issueType"
                    label="Issue Type"
                >
                    <Select 
                        showSearch
                        placeholder="Issue Type"
                        options={issueTypes}
                    />
                </Form.Item>

                <Form.Item
                    name="shortSummary"
                    label="Short Summary"
                >
                  <Input 
                    placeholder="Short Summary"
                  />
                </Form.Item>

                <Form.Item 
                    name="description"
                    label="Description"
                >
                    <Editor />
                </Form.Item>
            </Form>   
        </Modal>
    )
};

export default CreateIssueModal;