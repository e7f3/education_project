import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: 'Text',
    options: [
      { value: '1', content: '1' },
      { value: '2', content: '2' },
    ],
    label: 'Label',
    onChange: (value) => {},
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]

export const DefaultReadonly = Template.bind({})
DefaultReadonly.decorators = [FlexDecorator]
DefaultReadonly.args = { readonly: true }

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [FlexDecorator, ThemeDecorator(Theme.DARK)]

export const DefaultDarkReadonly = Template.bind({})
DefaultDarkReadonly.decorators = [FlexDecorator, ThemeDecorator(Theme.DARK)]
DefaultDarkReadonly.args = { readonly: true }

export const DefaultColorful = Template.bind({})
DefaultColorful.decorators = [FlexDecorator, ThemeDecorator(Theme.COLORFUL)]
