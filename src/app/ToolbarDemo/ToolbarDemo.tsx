import * as React from 'react';
import {
  Card,
  TextContent,
  Flex,
  FlexModifiers,
  FlexItem,
  Label,
  PageSection,
  Text,
  Title
} from '@patternfly/react-core';
import { InfoCircleIcon } from '@patternfly/react-icons';
import { ToolbarDemoToolbar } from './ToolbarDemoToolbar';

const ToolbarDemo: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <PageSection variant="light">
      {/* <TextContent>
        <Text component="h1">Data table toolbar demo</Text>
        <Text component="p">
          Below is an example of a data table with a custom component.
        </Text>
      </TextContent> */}
      <Flex breakpointMods={[
        {modifier: FlexModifiers['column']},
        {modifier: FlexModifiers['row'], breakpoint: 'lg'}
      ]}>
        <FlexItem breakpointMods={[{modifier: FlexModifiers["flex-1"]}]}>
          <TextContent>
            <Title headingLevel="h1" size="xl">Data table toolbar demo</Title>
            <Text>Below is an example of a data table with a custom component.</Text>
          </TextContent>
        </FlexItem>
        <FlexItem>
          <Label color="cyan" icon={<InfoCircleIcon />}>
            v1.1&nbsp;<InfoCircleIcon />
          </Label>{' '}
        </FlexItem>
      </Flex>
    </PageSection>
    <PageSection>
      <Card>
        <ToolbarDemoToolbar />
      </Card>
    </PageSection>
  </React.Fragment>
)

export { ToolbarDemo };

{/* <PageSection>
  <Flex
    breakpointMods={[
      {modifier: FlexModifiers['column']},
      {modifier: FlexModifiers['row'], breakpoint: 'xl'}
    ]}>
    <FlexItem
      breakpointMods={[
        {modifier: FlexModifiers['spacer-xl']},
        {modifier: FlexModifiers['spacer-sm'], breakpoint: 'xl'},
        {modifier: FlexModifiers['column']},
        {modifier: FlexModifiers['row'], breakpoint: 'xl'}
      ]}>
        <Title headingLevel="h1" size="lg">Check out these themed components!</Title>
    </FlexItem>
    <FlexItem>
      <DynamicList className="">
        <DynamicListList type="Role">
          <DynamicListItem text="Read" />
          <DynamicListItem text="Edit" />
          <DynamicListItem text="Delete" />
        </DynamicListList>
      </DynamicList>
    </FlexItem>
  </Flex>
</PageSection> */}
