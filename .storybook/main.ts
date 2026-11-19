import type { StorybookConfig } from "@storybook/react-vite"

const config : StorybookConfig = {
    framework : "@storybook/react-vite",
    stories : ["./ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"]
}

export default config
