import React, { useState, useEffect } from 'react'

export default function Keypad() {

    const [expression, setExpression] = useState("0");
    const [result, setResult] = useState(undefined);

    useEffect(() => {
        if (expression.length < 1) {
            setExpression("0");
        }
        if (result) {
            setResult(undefined);
        }
    }, [expression]);

    const onValueInput = (value) => {
        if (!(expression.charAt(expression.length - 1).match(/^[-+×÷%.]+$/) && value.match(/^[-+×÷%.]+$/)))
            setExpression(expression.charAt(0) === "0" || result ? value : expression + value);
    }

    const onClear = () => {
        if (expression !== "0") setExpression("");
    }

    const onBackspace = () => {
        if (expression !== "0") setExpression(expression.slice(0, -1));
    }

    const onCalculate = async () => {
        if (expression.charAt(expression.length - 1).match(/^[-+×÷%.√]+$/)) {
            return "Invalid Expression";
        }

        let arithmetic = expression.replaceAll("÷", " / ").replaceAll("×", " * ").replaceAll("-", " - ").replaceAll("+", " + ");

        let array = arithmetic.split(" ");

        array.forEach((element, index) => {
            if (isNaN(element)) return;
            let e = element.replaceAll("√", " √");
            let a = e.trim().split(" ");
            a.forEach((e, i) => {
                if (e.charAt(0) == "√")
                    a[i] = parseFloat(Math.sqrt(e.slice(1)));
            });
            let elementResult = a.reduce((a, b) => a * b, 1);
            array[index] = parseFloat(elementResult.toFixed(3));
        });

        return reversePolish(infixToRPN(array));
    }

    const onResult = async () => {
        setResult(await onCalculate());
    }

    function infixToRPN(expressionArray) {
        const operators = ["+", "-", "*", "/"];
        const stack = [];
        const output = [];

        for (const token of expressionArray) {
            if (operators.includes(token)) {
                while (stack.length > 0 && operators.indexOf(stack[stack.length - 1]) >= operators.indexOf(token)) {
                    output.push(stack.pop());
                }
                stack.push(token);
            } else {
                output.push(token);
            }
        }

        while (stack.length > 0) {
            output.push(stack.pop());
        }

        return output.join(" ");
    }

    function reversePolish(newExpr) {
        let expr = newExpr.split(" ");
        let stack = [];
        if (expr === '') {
            return 0;
        }

        for (let i = 0; i < expr.length; i++) {
            if (!isNaN(expr[i]) && isFinite(expr[i])) {
                stack.push(expr[i]);

            } else {
                let a = stack.pop();
                let b = stack.pop();
                if (expr[i] === "+") {
                    stack.push(parseFloat(a) + parseFloat(b));
                } else if (expr[i] === "-") {
                    stack.push(parseFloat(b) - parseFloat(a));
                } else if (expr[i] === "*") {
                    stack.push(parseFloat(a) * parseFloat(b));
                } else if (expr[i] === "/") {
                    stack.push(parseFloat(b) / parseFloat(a));
                } else if (expr[i] === "^") {
                    stack.push(Math.pow(parseFloat(b), parseFloat(a)));
                }
            }
        }

        if (stack.length > 1) {
            return "Invali";
        } else {
            return stack[0];
        }
    }

    // const clickHandler = (value) => {
    //     if(expression === 'Invalid Expression') {
    //         setExpression(0);
    //     }
    //     else if (value === 'AC') {
    //         setExpression(0);
    //     }
    //     else if (value === '⌫') {
    //         if (expression.length > 1) {
    //             setExpression(expression.slice(0, -1));
    //         } else {
    //             setExpression(0)
    //         }
    //     }
    //     else if (value === '=') {
    //         try {
    //             let result = eval(expression);
    //             setExpression(result);
    //         } catch (error) {
    //             setExpression('Invalid Expression');
    //         }
    //     }
    //     else {
    //         if (expression === 0) {
    //             setExpression(value);
    //         } else {
    //             if (!(expression.charAt(expression.length - 1).match(/^[-+×÷%.√]+$/) && value.match(/^[-+×÷%.√]+$/))) {
    //                 setExpression(expression + value);
    //             }
    //         }
    //     }
    // }

    return (
        <>
            <div className='bg-screen-back-light dark:bg-screen-back-dark py-1 px-2 rounded-md text-right mb-3 h-[100px]'>
                {result && <p className=' text-[16px] overflow-hidden'>{expression}</p>}
                <p className=' text-[32px] overflow-hidden'>{result ? result : expression}</p>
            </div>
            <div className='bg-keypad-back-light dark:bg-keypad-back-dark grid grid-cols-4 rounded-md p-1'>

                <ImpKeys value={'AC'} clickHandler={onClear} />
                <Keys value={'√'} clickHandler={(value) => onValueInput(value)} />
                <Keys value={'÷'} clickHandler={(value) => onValueInput(value)} />
                <ImpKeys value={'⌫'} clickHandler={onBackspace} />
                <Keys value={7} clickHandler={(value) => onValueInput(value)} />
                <Keys value={8} clickHandler={(value) => onValueInput(value)} />
                <Keys value={9} clickHandler={(value) => onValueInput(value)} />
                <Keys value={'×'} clickHandler={(value) => onValueInput(value)} />
                <Keys value={4} clickHandler={(value) => onValueInput(value)} />
                <Keys value={5} clickHandler={(value) => onValueInput(value)} />
                <Keys value={6} clickHandler={(value) => onValueInput(value)} />
                <Keys value={'-'} clickHandler={(value) => onValueInput(value)} />
                <Keys value={1} clickHandler={(value) => onValueInput(value)} />
                <Keys value={2} clickHandler={(value) => onValueInput(value)} />
                <Keys value={3} clickHandler={(value) => onValueInput(value)} />
                <Keys value={'+'} clickHandler={(value) => onValueInput(value)} />
                <Keys value={'.'} clickHandler={(value) => onValueInput(value)} />
                <Keys value={0} clickHandler={(value) => onValueInput(value)} />
                <Keys value={'%'} clickHandler={(value) => onValueInput(value)} />
                <ImpKeys value={'='} clickHandler={onResult} />

            </div>
        </>
    )
}

const Keys = (props) => {

    return (
        <button className={`bg-key-back-light dark:bg-key-back-dark shadow-grey-light dark:shadow-grey-dark dark:text-text-dark hover:bg-key-hover-light dark:hover:bg-key-hover-dark h-[60px] flex items-center text-center justify-center rounded-md m-[6px] duration-200 hover:cursor-pointer`} value={props.value} onClick={(e) => props.clickHandler(e.target.value)}>
            {props.value}
        </button>
    )
}

const ImpKeys = (props) => {

    return (
        <button className={`text-white bg-imp-back-light dark:bg-imp-back-dark shadow-blue-light dark:shadow-blue-dark hover:bg-imp-hover-light dark:hover:bg-imp-hover-dark h-[60px] flex items-center text-center justify-center rounded-md m-[6px] duration-200 hover:cursor-pointer`} value={props.value} onClick={(e) => props.clickHandler(e.target.value)}>
            {props.value}
        </button>
    )
}