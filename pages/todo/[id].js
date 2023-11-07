import React, {useState} from "react";
import {  Flex, InputGroup, Input, Button, Text  } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const TodoItem = ({ itemData} ) => { 
    const [Inputname, setInputname] = useState(itemData.name);
    
    const [statusMsg, setStatusMsg] = useState("");
    
    const { user } = useAuth()  || {};
if (!user) { return; }

const sendData = async () => { 
    
    const docRef = doc(db, "Todo", itemData.id);
    updateDoc( docRef,
        {name: Inputname}).then(
            docRef => { setStatusMsg("done"); } ).catch(
                error => {console.log(error);
                setStatusMsg("Error");
            }
            );

            }
 

return (
    
    <Flex flexDir="column" maxW={800} align="center" justify="start" minH="100vh" m="auto" px={4} py={3}>
        <InputGroup>
        <Input type="text" value={Inputname} onChange={(e) => setInputname(e.target.value)} placeholder="Name" />
        <Button ml={2} onClick={() => sendData()} >
        Update </Button>
        </InputGroup>
        <Text>{itemData.status}</Text>
        
        <Text>{statusMsg}</Text>
    </Flex>
); };




export async function getServerSideProps(context) {
    let itemData = null;
    const docRef = doc(db, "Todo", context.params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() ) { itemData = { id: docSnap.id, ...docSnap.data()}; }
    return { props: {itemData}};}

    export default TodoItem;







