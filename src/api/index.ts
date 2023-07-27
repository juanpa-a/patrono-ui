// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getDatabase, set, get, ref, onValue } from "firebase/database";
import { Dispatch, SetStateAction } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBj9pvmT0OPIixiERLWuNQIB3RGS8nFE5Q",
    authDomain: "patrono.firebaseapp.com",
    databaseURL: "https://patrono-default-rtdb.firebaseio.com",
    projectId: "patrono",
    storageBucket: "patrono.appspot.com",
    messagingSenderId: "642475878767",
    appId: "1:642475878767:web:34bea35dc79d56f010609a",
    measurementId: "G-8H5WJ5W3KV",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

type Contract = {
    contractName: string;
    isActive: boolean;
};
export type ContractsResponse = {
    [key: string]: Contract;
};

export const ApiService = (userId?: string) => ({
    createContract: () => {
        set(ref(db, `/contracts/${userId}/${Date.now()}`), {
            contractName: "foo bar",
            isActive: true,
        });
    },
    getContracts: () => {
        return get(ref(db, `/contracts/${userId}`));
    },
    syncContracts: (sync: Dispatch<SetStateAction<ContractsResponse>>) => {
        const contractsRef = ref(db, `/contracts/${userId}`);
        onValue(contractsRef, (snapshot) => {
            sync(snapshot.val() as ContractsResponse);
        });
    },
    // connectToChannel: (sync: Function) => {
    //   const channelRef = ref(db, channelId)
    //   onValue(channelRef, snapshot => {
    //     sync(snapshot.val())
    //   })
    // },
    // editMessage: (messageId: number, text: string) => {
    //   set(ref(db, `${channelId}/${messageId}`), {
    //     id: messageId,
    //     author,
    //     text
    //   })
    // },
    // deleteMessage: (messageId: number) => {
    //   set(ref(db, `${channelId}/${messageId}`), null)
    // },
});
