import React, { useCallback, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export interface ModalFormProps {
  disclosure: {
    isOpen: boolean;
    onClose: () => void;
  };
}

export const ModalForm: React.FC<ModalFormProps> = ({
  disclosure: { isOpen, onClose },
}: ModalFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    (data) => {
      console.log(data);
      onClose();
    },
    [onClose]
  );

  const focusRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register("email", { required: true });

  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={focusRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={5}>
            <FormControl id="email" isRequired isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                {...rest}
                ref={(e) => {
                  ref(e);
                  focusRef.current = e;
                }}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormErrorMessage>This field is required.</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isRequired isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password", { required: true })}
              />
              <FormHelperText>Must be 12-32 characters.</FormHelperText>
              <FormErrorMessage>This field is required.</FormErrorMessage>
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" ml={3} onClick={handleSubmit(onSubmit)}>
            Sign Up Now!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
