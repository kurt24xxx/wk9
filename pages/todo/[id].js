import React from "react";
import { Box, Heading, Simplegrid, Text } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const TodoItem = ( { itemData} ) => { const { user } = useAuth()  || {};
if (!user) { return; }

return ( 
    <Box mt={5}>
        <Heading as="h3" fontSize={"xl"}> { itemData.name }</Heading>
        <Text> { itemData.id } </Text>
        <Text> { itemData.runner } </Text>
    </Box>

); };

export async function getServerSideProps(context) {
    let itemData = null;
    const docRef = doc(db, "todo", context.params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() ) { itemData = docSnap.data(); }
    
}
