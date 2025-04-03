import { Button } from "./button";
interface AppbarProps{
    user?: {
        name?: string | null;
    }
    onSignin: ()=>void;
    onSignout: ()=>void;
}

export const Appbar=({
    user,
    onSignin,
    onSignout
}:AppbarProps)=>{
    return (
        <div className="w-11/12 mx-auto p-2 flex justify-between">
            <div className="text-xl italic font-bold text-red-600">
                Easy Payments
            </div>
            
            <div className="">
                <Button onClick={user?onSignout:onSignin}>
                    {
                        user? "Logout":"Login"
                    }
                </Button>
            </div>
        </div>
    )
}