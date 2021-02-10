import React from 'react';
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

const NewProjectForm = ({
  projectTitle,
  setProjectTitle,
  isOpen,
  onClose,
  submitNewProject,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Project!</ModalHeader>
        <FormControl p={3}>
          <InputGroup>
            <InputLeftAddon children="Title" />
            <Input
              type="text"
              value={projectTitle}
              onChange={e => setProjectTitle(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <ModalFooter>
          <Button m="0 auto" variant="ghost" onClick={() => submitNewProject()}>
            Submit
          </Button>
          <Button colorScheme="blue" m="0 auto" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewProjectForm;
