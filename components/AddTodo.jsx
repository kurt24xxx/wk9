import React from "react";
import {
Box,
Input,
Button,
Stack,
useToast
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addTodo } from "../api/todo";
const AddTodo = () => {
const [name, setname] = React.useState("");

const toast = useToast();
const { isLoggedIn, user } = useAuth() || {};
const handleTodoCreate = async () => {
if (!isLoggedIn) {
toast({
title: "You must be logged in",
status: "error",
duration: 9000,
isClosable: true,
});
return;
}
setIsLoading(true);
const Todo = {
name,
userId: user.uid
};
await addTodo(Todo);
setIsLoading(false);
setTitle("");
setDescription("");
setStatus("pending");
toast({ title: "created successfully", status: "success" });
};
return (
<Box w="40%" margin={"0 auto"} display="block" mt={5}>
<Stack direction="column">
<Input
placeholder="Name"
value={name}
onChange={(e) => setname(e.target.value)}
/>






<Button
onClick={() => handleTodoCreate()}
disabled={name.length < 1  || isLoading}
colorScheme="teal"
variant="solid"
>
Add
</Button>
</Stack>
</Box>
);
};
export default  AddTodo;