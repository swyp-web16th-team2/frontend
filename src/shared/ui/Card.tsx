import type { ComponentPropsWithoutRef } from "react"

// interface CARD extends ComponentPropsWithoutRef<"div"> {
//     variants : "default" | "selected", 
// } 

interface CARD extends LAYOUT_CHILD {
    variants : "default" | "selected", 
} 

const styled = {
    "default" : "border-[#E2E8F0]",
    "selected" : "bg-[#EFF6FF] border-[#2563EB] [&_.sub-contents]:text-[#1D4ED8]",
}

export const Card = ({ variants, children } : CARD) => {

    return (
        <div className={`inline-block p-[16px] border ${styled[variants]} rounded-[16px]`}>
            {children}
        </div>
    )
}