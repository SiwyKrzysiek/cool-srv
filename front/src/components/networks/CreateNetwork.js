import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Modal, ModalBody, ModalHeader, ModalFooter, Button,
  Form, Label, FormGroup, Input
} from "reactstrap";

import { closeCreateNetworkModal, createNewNetwork } from "../actions";

const CreateNetwork = ({ close, createNewNetwork }) => {
  const [ip, setIp] = useState("");
  const [mask, setMask] = useState("");
  const [desc, setDesc] = useState("");
  const [dns, setDns] = useState("");
  const [location, setLocation] = useState("");

  const handleCreate = () => {
    createNewNetwork({ address: ip, mask, desc, dns, location });
    close();
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Create network</ModalHeader>
      <ModalBody>
        <Form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
          <FormGroup>
            <Label>Adress ip</Label>
            <Input type="text" value={ip} onChange={(e) => setIp(e.target.value)} required pattern="^(\d{1,3}\.){3}\d{1,3}$" />
          </FormGroup>
          <FormGroup>
            <Label>Mask</Label>
            <Input type="text" value={mask} onChange={(e) => setMask(e.target.value)} required pattern="(^\/\d{1,2}$)|(^\d{1,2}$)|(^(\d{1,3}\.){3}\d{1,3}$)|(^([01]{8}\.){3}[01]{8}$)" />
          </FormGroup>
          <FormGroup>
            <Label>Descritption</Label>
            <Input type="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>DNS</Label>
            <Input type="text" value={dns} onChange={(e) => setDns(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>Location</Label>
            <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </FormGroup>

          <Button type="submit" className="mr-2" color="success">Create</Button>
          <Button onClick={() => close()} color="warning">Cancel</Button>
        </Form>
      </ModalBody>

      <ModalFooter>
        {/* <Button onClick={handleCreate} className="mr-2" color="success">Create</Button>
        <Button onClick={() => close()} color="warning">Cancel</Button> */}
      </ModalFooter>
    </Modal>
  );
};

CreateNetwork.propTypes = {
  close: PropTypes.func.isRequired,
  createNewNetwork: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => (
  {
    close: () => dispatch(closeCreateNetworkModal()),
    createNewNetwork: (network) => dispatch(createNewNetwork(network))
  }
);

export default connect(null, mapDispatchToProps)(CreateNetwork);