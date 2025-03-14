import { useContext, useRef, useState } from 'react';
import {
  Button,
  Content,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  JumpLinks,
  JumpLinksItem,
  JumpLinksList,
  PageSection,
  Sidebar,
  SidebarContent,
  SidebarPanel,
  DrawerContext
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

const JumpLinksWrapper = ({ headings }) => {
  const { drawerContentRef } = useContext(DrawerContext);

  return (
    <JumpLinks
      isVertical={true}
      label="Jump to section"
      scrollableRef={drawerContentRef}
      expandable={{ default: 'expandable', md: 'nonExpandable' }}
    >
      {headings.map((heading) => (
        <JumpLinksItem key={heading} href={`#jump-links-drawer-jump-links-${heading.toLowerCase()}`}>
          {`${heading} section`}
          <JumpLinksList></JumpLinksList>
        </JumpLinksItem>
      ))}
    </JumpLinks>
  );
};

export const JumpLinksWithDrawer = () => {
  const headings = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

  const [isExpanded, setIsExpanded] = useState(false);
  const drawerRef = useRef(undefined);

  const onCloseClick = () => {
    setIsExpanded(false);
  };

  const onToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          drawer-panel
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  return (
    <DashboardWrapper breadcrumb={null} mainContainerId="scrollable-element">
      <Drawer isExpanded={isExpanded}>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>
            <Sidebar>
              <SidebarPanel variant="sticky">
                <PageSection>
                  <JumpLinksWrapper headings={headings} />
                </PageSection>
              </SidebarPanel>
              <SidebarContent>
                <PageSection id="drawer-toggle" stickyOnBreakpoint={{ default: 'top' }}>
                  <Button onClick={onToggleClick}>Toggle drawer</Button>
                </PageSection>
                <PageSection hasOverflowScroll>
                  <Content>
                    {headings.map((heading) => (
                      <div key={heading} style={{ maxWidth: '800px', marginBottom: '32px' }}>
                        <h2 id={`jump-links-drawer-jump-links-${heading.toLowerCase()}`} tabIndex={-1}>
                          {`${heading} section`}
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dui ullamcorper,
                          dignissim purus eu, mattis leo. Curabitur eleifend turpis ipsum, aliquam pretium risus
                          efficitur vel. Etiam eget enim vitae quam facilisis pharetra at eget diam. Suspendisse ut
                          vulputate magna. Nunc viverra posuere orci sit amet pulvinar. Quisque dui justo, egestas ac
                          accumsan suscipit, tristique eu risus. In aliquet libero ante, ac pulvinar lectus pretium in.
                          Ut enim tellus, vulputate et lorem et, hendrerit rutrum diam. Cras pharetra dapibus elit vitae
                          ullamcorper. Nulla facilisis euismod diam, at sodales sem laoreet hendrerit. Curabitur
                          porttitor ex nulla. Proin ligula leo, egestas ac nibh a, pellentesque mollis augue. Donec nec
                          augue vehicula eros pulvinar vehicula eget rutrum neque. Duis sit amet interdum lorem. Vivamus
                          porttitor nec quam a accumsan. Nam pretium vitae leo vitae rhoncus.
                        </p>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
                          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
                          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                          voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
                          sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                          doloribus asperiores repellat.
                        </p>
                      </div>
                    ))}
                  </Content>
                </PageSection>
              </SidebarContent>
            </Sidebar>
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </DashboardWrapper>
  );
};
