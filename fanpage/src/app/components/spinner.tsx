import Image from "next/image";

export default function Spinner(){
    return (
        <div className="container mx-auto">
            <Image 
            src="/waiter-background-spinner.png" 
            width='500'
            height='500'
            alt="waiter background image" />
        </div>
        );
}