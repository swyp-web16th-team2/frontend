import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "../../src/shared/ui/Button"

const meta = {
    title: "shared/ui/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    args: {
        children: "버튼",
        disabled: false,
    },
    argTypes: {
        children: { control: "text", description: "버튼에 표시할 내용" },
        disabled: { control: "boolean", description: "버튼 비활성화 여부" },
    },
} satisfies Meta<typeof Button>

export default meta

type STORY = StoryObj<typeof meta>;

export const AllStates: STORY = {
    name: "Button",
    render: (args) => (
        <ul className=" space-y-[30px] [&_p]:mb-[10px]">
            <li>
                <p className="text-button-label">Default / Hover / Pressed</p>
                <Button {...args} />
            </li>
            <li>
                <p className="text-button-label">Disabled</p>
                <Button {...args} disabled>사용할 수 없는 버튼</Button>
            </li>
        </ul>
    ),
}
