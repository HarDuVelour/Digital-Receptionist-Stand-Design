import React, {useState} from 'react';
import LeftCard from "@/app/components/shared/LeftCard";
import DefaultContainer from "@/app/components/shared/DefaultContainer";
import DefaultInput from "@/app/components/shared/DefaultInput";
import RightCard from "@/app/components/shared/RightCard";
import Qwerty from "@/app/components/shared/Qwerty";
import Numpad from "@/app/components/shared/Numpad";
import DefaultButton from "@/app/components/shared/DefaultButton";

const HomePage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    function handleOnCheckInClick() {
        console.log("Clicked!");
    }

    function handleOnSubmit() {
        console.log("Submitted!");
    }

    function handleOnNumberClick(num: number) {
        setInputValue(prevValue => prevValue + num.toString());
    }

    function handleOnClearClick() {
        setInputValue("");
    }

    function handleOnDeleteClick() {
        setInputValue(prevValue => prevValue.slice(0, -1));
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <DefaultContainer>
                <LeftCard header={"Check-In"}
                          description={"Check in as a user here. Provide your phonenumber in the panel to the right."}/>
                <RightCard>
                    <DefaultInput placeHolder={"50 50 40 40"} value={inputValue}
                                  onChange={(e) => setInputValue(e.target.value)}/>
                    <Numpad onNumberClick={handleOnNumberClick} onClearClick={handleOnClearClick} onDeleteClick={handleOnDeleteClick}/>
                    <DefaultButton label={"Check-In"} onClick={handleOnCheckInClick}/>
                    <br />
                    <a href={"/sign-up"}>Not signed up yet?</a>
                    <br />
                    <a href={"/check-out"}>Checkout</a>
                </RightCard>
            </DefaultContainer>
        </form>
    )
}

export default HomePage;