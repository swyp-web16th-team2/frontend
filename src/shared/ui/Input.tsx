import type { InputHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

type INPUT = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ placeholder, className, ...props } : INPUT) => {
    return (
        <input className={twMerge("block min-w-[268px] h-[48px] leading-button-label px-[16px] text-button-label font-button-label border border-[#94A3B8] rounded-[8px] outline-none focus:border-input-focus-color [&.error]:border-input-error-color disabled:bg-disabled-bg", className??"")} placeholder={placeholder??""} {...props} />
    )
}
