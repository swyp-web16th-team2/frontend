import type { Meta, StoryObj } from "@storybook/react-vite"
import { Chip } from "../../src/shared/ui/Chip"

const meta = {
    title: "shared/ui/Chip",
    component: Chip,
    parameters: {
        layout: "centered",
    },
    args: {
        children: "둘 다 좋아요",
        variants: "default",
        disabled: false,
    },
    argTypes: {
        variants: {
            control: "select",
            options: ["default", "selected", "disabled"],
            description: "Chip의 표시 상태",
        },
        children: { control: "text", description: "버튼에 표시할 내용" },
        disabled: { control: "boolean", description: "버튼 비활성화 여부" },
    },
} satisfies Meta<typeof Chip>

export default meta

type CHIP = StoryObj<typeof meta>;

export const AllStates: CHIP = {
    name : "Chip",
    render : (args) => (
        <ul className="space-y-[30px] [&_p]:mb-[10px]">
            <li>
                <p className="text-button-label">Default</p>
                <Chip {...args} variants="default" disabled={false} />
            </li>
            <li>
                <p className="text-button-label">Selected</p>
                <Chip {...args} variants="selected" disabled={false} />
            </li>
            <li>
                <p className="text-button-label">Disabled</p>
                <Chip {...args} variants="disabled" />
            </li>
        </ul>
    )
}
