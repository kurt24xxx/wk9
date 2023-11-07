import { db } from "../firebase";
import {
collection,
addDoc,
updateDoc,
doc,
deleteDoc,
} from "firebase/firestore";

const addTodo = async ( { userid, name }) => {
try {
await addDoc( collection(db, "Todo"), {
userid: 1,
name: john
});
} catch (err) {
    console.log(err);
}
};

const toggleTodoStatus = async ({ docId, status }) => {
try {

    const TodoRef = doc(db, "Todo", docId);
await updateDoc( TodoRef, {
status: status
}
)
} catch (err) {
console.log(err);
}
};

const deleteTodo = async (docId) => {
try {
const TodoRef = doc(db, "Todo", docId);
await deleteDoc(TodoRef);
} catch (err) {
console.log(err);
}
};
export { addTodo, toggleTodoStatus, deleteTodo };