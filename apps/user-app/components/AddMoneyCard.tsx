"use client"
import { Button } from "@repo/ui/button";
import { useEffect } from "react";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { createOnRampTransaction } from "../app/lib/actions/createOnRampTransaction";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];

export const AddMoney = () => {
    // useEffect(() => {
      
    //     const fetchTransactions=async()=>{
    //         const session = await getServerSession(authOptions);
    //                 const transact=await prisma.onRampTransaction.create({
    //                     data: {
    //                         status: 'Processing',
    //                         userId: Number(session?.user?.id)
    //                     }
    //                 })
    //     }
    // }, [])
    
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [value, setValue] = useState(0)
    return <Card title="Add Money">
    <div className="w-full">
        <TextInput label={"Amount"} placeholder={"Amount"} onChange={(val) => {
            setValue(Number(val));
        }} />
        <div className="py-4 text-left">
            Bank
        </div>
        <Select onSelect={(value) => {
            setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
        }} options={SUPPORTED_BANKS.map(x => ({
            key: x.name,
            value: x.name
        }))} />
        <div className="flex justify-center pt-4">
            <Button onClick={ async() => {
                // const session = await getServerSession(authOptions);
                // const transact=await prisma.onRampTransaction.create({
                //     data: {
                //         status: 'Processing',
                //         userId: Number(session?.user?.id)
                //     }
                // })
                await createOnRampTransaction(provider,value);
                window.location.href = redirectUrl || "";
            }}>
            Add Money
            </Button>
        </div>
    </div>
</Card>
}