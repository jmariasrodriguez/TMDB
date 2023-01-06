import React from "react";
import SectionList from "./SectionList";
import TabsSectionPreview from "./SectionHeader/TabsSectionPreview";
import TitleSectionPreview from "./SectionHeader/TitleSectionPreview";
import {
  ContainerSectionPreview,
  ContainerSectionPreview2,
  ContainerTitleTabs,
} from "./styleSectionPreview";

const SectionPreview = ({ previewSectionTitle, tabs, shows, genres }) => {
  return (
    <ContainerSectionPreview>
      <ContainerSectionPreview2>
        <ContainerTitleTabs>
          <TitleSectionPreview previewSectionTitle={previewSectionTitle} />
          <TabsSectionPreview
            previewSectionTitle={previewSectionTitle}
            tabs={tabs}
          />
        </ContainerTitleTabs>

        <SectionList shows={shows} genres={genres} />
      </ContainerSectionPreview2>
    </ContainerSectionPreview>
  );
};

export default SectionPreview;
