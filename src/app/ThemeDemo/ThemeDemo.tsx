import * as React from 'react';
import {
  Flex,
  FlexItem,
  FlexModifiers,
  PageSection,
  Title
} from '@patternfly/react-core';

import { DynamicList } from '../CustomComponents/DynamicList/DynamicList';
import { DynamicListList } from '../CustomComponents/DynamicList/DynamicListList';
import { DynamicListItem } from '../CustomComponents/DynamicList/DynamicListItem';

const ThemeDemo: React.FunctionComponent<{}> = () => (
  <PageSection>
    <Flex>
      <FlexItem>
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
  </PageSection>
)

export { ThemeDemo };

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
