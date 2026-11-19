import type { Meta, StoryObj } from "@storybook/react-vite"

import { Card } from "../../src/shared/ui/Card"

const meta = {
    title: "shared/ui/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    args: {
        variants: "default",
        children: (
            <dl className="[&>dd]:mt-[8px]">
                <dt className="leading-section-title text-section-title font-section-title">장소 이름</dt>
                <dd className="leading-contents text-[#475569] text-contents font-contents break-keep">
                    이동시간᠂장소 유형 등 판단에 필요한 정보를 <br /> 넣어요.
                </dd>
                <dd className="sub-contents leading-sub-contents text-[#475569] text-sub-contents font-sub-contents">
                    후보로 담을 수 있어요
                </dd>
            </dl>
        ),
    },
    argTypes: {
        children: { control: false },
        variants: { control: false },
    },
} satisfies Meta<typeof Card>

export default meta

type STORY = StoryObj<typeof meta>

export const AllStates: STORY = {
    name: "Card",
    render: (args) => (
        <ul className="flex flex-wrap gap-6 p-6">
            <li className="flex flex-col gap-2">
                <span className="text-button-label">Default</span>
                <Card {...args} variants="default" />
            </li>
            <li className="flex flex-col gap-2">
                <span className="text-button-label">Selected</span>
                <Card {...args} variants="selected" />
            </li>
        </ul>
    ),
}
