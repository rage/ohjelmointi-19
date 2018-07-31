import React from 'react'
import styled from 'styled-components'
import TimelineEvent from './TimelineEvent'

const TimelineContainer = styled.div`
  height: 10rem;
  border: thin solid;
  border-radius: 5px;
  overflow: auto;
`

const Timeline = styled.div`
  width: 600%;
  overflow: hidden;
`

const Month = styled.div`
  width: 700px;
  height: 8rem;
  border-right: 2px solid #bdc3c7;
  float: left;
  padding: 0.5rem 1rem;
`

const TimelineBar = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #bdc3c7;
  margin: 8em 0 0 0;
  padding: 0;
`

export default () => (
  <TimelineContainer>
    <Timeline>
      <Month>
        Joulukuu{' '}
        <TimelineEvent content={'Osan 1 julkaisu'} day={14} month={12} />
        <TimelineEvent content={'Osan 2 julkaisu'} day={28} month={12} />
      </Month>
      <Month>Tammikuu</Month>
      <Month>Helmikuu</Month>
      <Month>Maaliskuu</Month>
      <Month>Huhtikuu</Month>
      <Month>Toukokuu</Month>
      <TimelineBar />
    </Timeline>
  </TimelineContainer>
)
