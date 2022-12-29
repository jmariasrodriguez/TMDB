import React from 'react'
import SectionPreview from '../../components/Section-Preview'
import { TITLE,TABS } from '../../data/constants'


const Home = () => {
  return (
    <>
    <SectionPreview TABS={TABS.upcoming} TITLE={TITLE[0]}/>
    </>
  )
}

export default Home