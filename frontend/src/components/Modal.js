import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Todo Item </ModalHeader>
        <ModalBody>
        <Form>
                <FormGroup>
                  <Label for="location_name">Location Name</Label>
                  <Input
                    type="text"
                    name="location_name"
                    value={this.state.activeItem.location_name}
                    onChange={this.handleChange}
                    placeholder="Enter branch name"
                    maxLength="256"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="location">Location</Label>
                  <Input
                    type="text"
                    name="location"
                    value={this.state.activeItem.location}
                    onChange={this.handleChange}
                    placeholder="Enter branch location"
                    maxLength="256"
                  />
                </FormGroup>
              </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}