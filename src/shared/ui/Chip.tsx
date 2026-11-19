import type { ComponentPropsWithoutRef } from "react"

import { extendTailwindMerge } from "tailwind-merge"

const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            "font-size": [{ text: ["button-label"] }]
        }
    }
})

interface CHIP extends ComponentPropsWithoutRef<"button"> {
    variants?: "default" | "selected" | "disabled", 
    className?: string
} 

const styled = {
    "default" : "text-[#0F172A] border-[#E2E8F0]",
    "selected" : "text-[#1D4ED8] bg-[#EFF6FF] border-[#2563EB]",
    "disabled" : "text-[#475569] bg-[#F1F5F9] border-[#E2E8F0]"
};

export const Chip = ({ variants = "default", disabled = false, type = "button", className, ...props } : CHIP) => {
    const isDisabled = disabled || variants === "disabled"
    const state = isDisabled ? "disabled" : variants

    return (
        <button
            type={type}
            disabled={isDisabled}
            aria-pressed={variants === "selected"}
            className={twMerge(`inline-flex justify-center items-center w-[120px] h-[40px] leading-button-label text-button-label font-button-label border rounded-[999px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] disabled:cursor-default ${styled[state]}`, className??"")}
            {...props}
        />
    )
}
