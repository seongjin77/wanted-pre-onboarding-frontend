import { useRef, useState } from "react";

type Return = [
    {
        inputValue: string;
        setInputValue: React.Dispatch<string>;
    },
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    ValidatorReturn
];

type ValidatorReturn = {
    value: boolean;
    message?: string;
};

export function useInput(
    initialValue: string,
    validator?: (v: string) => ValidatorReturn
): Return {
    const [inputValue, setInputValue] = useState(initialValue);
    const validateResult = useRef({ value: false });
    // input값 변경 함수
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        // 유효성 검사
        if (typeof validator === "function") {
            validateResult.current = validator(e.target.value);
        }
    };

    return [
        { inputValue, setInputValue },
        handleChange,
        validateResult.current,
    ];
}
