import { twMerge } from "tailwind-merge"

import type { ComponentPropsWithRef, ElementType } from "react"

type BUTTON<T extends ElementType = "button"> = {
    as?: T
    className?: string
} & Omit<ComponentPropsWithRef<T>, "as" | "className">

export const Button = <T extends ElementType = "button">({ as, className, ...props } : BUTTON<T>) => {

    const Component = as??"button"

    return (
        <Component className={twMerge("inline-flex justify-center items-center min-w-[268px] h-[48px] leading-button-label py-[13px] text-button-label font-button-label border border-[#94A3B8] rounded-[8px] hover:text-[#fff]  hover:bg-button-hover-bg hover:border-button-hover-bg active:bg-button-pressed-bg active:border-button-pressed-bg disabled:text-disabled-color disabled:bg-disabled-bg disabled:border-disabled-bg disabled:hover:border-disabled-bg disabled:cursor-default! disabled:pointer-events-none", className??"")} {...props} />
    )
}
