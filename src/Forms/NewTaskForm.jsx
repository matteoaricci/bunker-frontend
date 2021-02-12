import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from '@chakra-ui/react';

const NewTaskForm = ({ addTask, column, colIndex }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [desc, setDesc] = useState('');
  return (
    <Box>
      <Button w="100%" my="5px" onClick={onOpen}>
        Add Task
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Task Description"
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              m="0 auto"
              onClick={() => {
                addTask(colIndex, column, desc);
                onClose();
                setDesc('');
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NewTaskForm;
