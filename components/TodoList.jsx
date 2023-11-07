 import React  from "react";
 import {
Badge,
Box,
Heading,
SimpleGrid,
useToast
} from "@chakra-ui/react";

import useAuth from "../hooks/useAuth";

import {doUseEffect} from "../api/use-effect";
import { FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { deleteTodo, toggleTodoStatus } from "../api/todo";

const TodoList = ( ) => {
const [todos, setTodos] = React.useState([]);
const {  user } = useAuth() || {};
const toast = useToast();
doUseEffect(setTodos, "Todo", user);
const handleTodoDelete = async (id) => {
    if( confirm("Are you sure?")) {
        deleteTodo(id);
        toast( { title: "Deleted", status: "Done"} );
    }

};
const handleToggle = async (id, status) => {const newStatus = status == "completed" ? "pending" : "completed";
await toggleTodoStatus( { docId: id, status: newStatus }); 
toast( { title: "Todo marked ${newStatus}", status: newStatus == "completed" ? "success" : "warning" } ); };

return ( <Box mt={5}>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        { todos && todos.map( ( todo) => (
<Box p={3} boxShadow="2xl" shadow={"dark-lg"} transition="0.2s" _hover={{ boxShadow: "sm"}}
key={contact.id}>

<Heading as="h3" fontSize={"xl" }><a href={"/todo/" + todo.id}>{todo.name}</a> {" "}
 <Badge color="red.500" bg="inherit" transition={"0.2s"} _hover={{ bg: "inherit",  transform: "scale(1.2)",}}
float="right" size="xs" onClick={ () => handleTodoDelete(todo.id) }>
<FaTrash />
</Badge> 

<Badge color={todo.status == "pending" ? "gray.500" : "green.500"}
bg= "inherit" transition={"0.2s"} _hover={{ bg: "inherit", transform: "scale(1.2)" }}
float="right" size="xs" onClick={ () => handleToggle(todo.id, todo.status) }>
    { todo.status == "pending" ? <FaToggleOff /> : <FaToggleOn /> }</Badge>

 <Badge float="right" opacity="0.8" bg={ todo.status === "pending" ? "yellow.500" : "green.500" }>
    {todo.status} </Badge></Heading>
    <Text> { todo.name } </Text>
    
</Box> )) } </SimpleGrid></Box> ); };

export default TodoList;


