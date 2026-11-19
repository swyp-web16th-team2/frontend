import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "../../src/shared/ui/Input"

const meta = {
    title: "shared/ui/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    // args: {
    //     children: "둘 다 좋아요",
    //     variants: "default",
    //     disabled: false,
    // },
    argTypes: {
        children: { control: false },
    },
} satisfies Meta<typeof Input>

export default meta

type INPUT = StoryObj<typeof meta>;

export const AllStates: INPUT = {
    name : "Input",
    render : (args) => (
        <div>
            <ul className="space-y-[30px] [&_label]:text-[#0F172A] [&_label]:text-button-label [&_p]:text-sub-contents [&_p]:text-[#475569]">
                <li>
                    <label htmlFor="input01">타이틀</label>
                    <Input className="my-[8px]" id="input01" {...args} placeholder="출발지를 입력해 주세요"/>
                    <p>역 이름이나 주소로 입력해 주세요</p>
                </li>
                <li>
                    <label htmlFor="input01">타이틀</label>
                    <Input className="my-[8px]" autoFocus id="input01" {...args} placeholder="출발지를 입력해 주세요"/>
                    <p>역 이름이나 주소로 입력해 주세요</p>
                </li>
                <li>
                    <label htmlFor="input02">타이틀</label>
                    <Input className="error my-[8px]" id="input02" {...args} placeholder="출발지를 입력해 주세요"/>
                    <p className="text-input-error-color!">역 이름이나 주소로 입력해 주세요</p>
                </li>
                <li>
                    <label htmlFor="input03">타이틀</label>
                    <Input disabled className="my-[8px]" id="input03" {...args} placeholder="출발지를 입력해 주세요"/>
                    <p>역 이름이나 주소로 입력해 주세요</p>
                </li>
            </ul>
        </div>
    )
}